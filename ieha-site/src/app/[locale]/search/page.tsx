import { search } from '@/lib/search';
import { SearchBar } from '@/components/search/SearchBar';
import { SearchResultCard } from '@/components/search/SearchResultCard';
import type { Locale } from '@/lib/i18n';

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { locale: Locale };
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim() ?? '';
  const results = query ? await search(query) : [];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Search</h1>
      <SearchBar initialQuery={query} />

      {query && (
        <div className="mt-10">
          <p className="text-sm text-muted-foreground mb-6">
            {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>

          {results.length > 0 ? (
            <div className="flex flex-col gap-3 max-w-2xl">
              {results.map((result) => (
                <SearchResultCard
                  key={`${result.type}-${result.id}`}
                  result={result}
                  locale={params.locale}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No results found for your query.</p>
          )}
        </div>
      )}

      {!query && (
        <p className="mt-10 text-sm text-muted-foreground">
          Enter a query above to search across artworks, artists, institutions, and movements.
        </p>
      )}
    </div>
  );
}
