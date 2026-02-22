import Anthropic from '@anthropic-ai/sdk';
import artworksData from '@/content/data/benchmark/artworks.seed.json';
import artistsData from '@/content/data/benchmark/artists.seed.json';
import institutionsData from '@/content/data/benchmark/institutions.seed.json';
import movementsData from '@/content/data/benchmark/movements.seed.json';

const client = new Anthropic();

const corpus = JSON.stringify(
  { artworks: artworksData, artists: artistsData, institutions: institutionsData, movements: movementsData },
  null,
  2
);

const SYSTEM_PROMPT = `You are an expert art research assistant for materielart.tech, a platform dedicated to material art — art created from hardware, industrial, and found materials.

You have deep knowledge of the platform's collection. Use the corpus below to answer questions about specific artworks, artists, movements, and institutions. Be precise, cite details from the corpus, and offer scholarly context when helpful.

When a user asks about something not covered in the corpus, draw on your general art history knowledge but note that you're doing so.

Collection corpus:
${corpus}`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const stream = client.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === 'content_block_delta' &&
          event.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
