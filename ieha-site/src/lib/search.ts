// Phase 2: unified search (artworks, publications, experts)
export type SearchResult = {
  type: 'artwork' | 'publication' | 'expert';
  id: string;
  title: string;
  snippet?: string;
};

export async function search(query: string): Promise<SearchResult[]> {
  // TODO: call API or DB
  return [];
}
