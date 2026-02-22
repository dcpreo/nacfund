import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import artworksData from '../content/data/benchmark/artworks.seed.json';
import artistsData from '../content/data/benchmark/artists.seed.json';
import institutionsData from '../content/data/benchmark/institutions.seed.json';
import movementsData from '../content/data/benchmark/movements.seed.json';

export type SearchResult = {
  type: 'artwork' | 'publication' | 'expert' | 'event';
  id: string;
  title: string;
  snippet?: string;
};

const SearchResultsSchema = z.object({
  results: z.array(
    z.object({
      type: z.enum(['artwork', 'publication', 'expert', 'event']),
      id: z.string(),
      title: z.string(),
      snippet: z.string(),
    })
  ),
});

const SCHEMA = {
  type: 'object' as const,
  properties: {
    results: {
      type: 'array' as const,
      items: {
        type: 'object' as const,
        properties: {
          type: { type: 'string' as const, enum: ['artwork', 'publication', 'expert', 'event'] },
          id: { type: 'string' as const },
          title: { type: 'string' as const },
          snippet: { type: 'string' as const },
        },
        required: ['type', 'id', 'title', 'snippet'],
        additionalProperties: false,
      },
    },
  },
  required: ['results'],
  additionalProperties: false,
};

const client = new Anthropic();

export async function search(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const corpus = JSON.stringify(
    { artworks: artworksData, artists: artistsData, institutions: institutionsData, movements: movementsData },
    null,
    2
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await (client.messages as any).create({
    model: 'claude-opus-4-6',
    max_tokens: 1024,
    output_config: {
      format: {
        type: 'json_schema',
        schema: SCHEMA,
      },
    },
    messages: [
      {
        role: 'user',
        content: `You are a semantic search engine for an art research platform. Given the search query and content corpus below, return the most relevant items ranked by relevance.

Search query: "${query}"

Content corpus:
${corpus}

Return only items from the corpus that are genuinely relevant to the query. For each result, write a brief snippet (1–2 sentences) explaining its relevance. If nothing matches, return an empty results array.`,
      },
    ],
  });

  const textBlock = response.content.find((b: { type: string }) => b.type === 'text');
  if (!textBlock) return [];

  try {
    const parsed = JSON.parse(textBlock.text);
    const validated = SearchResultsSchema.safeParse(parsed);
    return validated.success ? validated.data.results : [];
  } catch {
    return [];
  }
}
