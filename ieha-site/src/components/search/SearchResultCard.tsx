import Link from 'next/link';
import type { SearchResult } from '@/lib/search';

const typeLabels: Record<SearchResult['type'], string> = {
  artwork: 'Artwork',
  publication: 'Publication',
  expert: 'Expert',
  event: 'Event',
};

const typeHrefs: Record<SearchResult['type'], string> = {
  artwork: '/collection',
  publication: '/publications',
  expert: '/experts',
  event: '/events',
};

export function SearchResultCard({
  result,
  locale,
}: {
  result: SearchResult;
  locale: string;
}) {
  const href = `/${locale}${typeHrefs[result.type]}/${result.id}`;

  return (
    <Link
      href={href}
      className="group rounded-lg border p-4 hover:shadow-md hover:bg-muted/50 transition-shadow"
    >
      <span className="text-xs text-muted-foreground uppercase tracking-wide">
        {typeLabels[result.type]}
      </span>
      <h3 className="font-medium mt-1 group-hover:underline">{result.title}</h3>
      {result.snippet && (
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {result.snippet}
        </p>
      )}
    </Link>
  );
}
