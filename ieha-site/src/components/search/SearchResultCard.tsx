'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { SearchResult } from '@/lib/search';

const PAGE_SIZE = 180; // characters per page

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

function paginateText(text: string, pageSize: number): string[] {
  if (text.length <= pageSize) return [text];
  const pages: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = start + pageSize;
    if (end < text.length) {
      const lastSpace = text.lastIndexOf(' ', end);
      if (lastSpace > start) end = lastSpace;
    }
    pages.push(text.slice(start, end).trim());
    start = end + 1;
  }
  return pages;
}

export function SearchResultCard({
  result,
  locale,
}: {
  result: SearchResult;
  locale: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);

  const href = `/${locale}${typeHrefs[result.type]}/${result.id}`;
  const pages = result.snippet ? paginateText(result.snippet, PAGE_SIZE) : [];
  const multiPage = pages.length > 1;

  return (
    <div className="rounded-lg border overflow-hidden">
      {/* Header row — always visible */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0 flex items-baseline gap-3">
          <span className="shrink-0 text-xs text-muted-foreground uppercase tracking-wide">
            {typeLabels[result.type]}
          </span>
          <h3 className="font-medium truncate">{result.title}</h3>
        </div>

        {result.snippet && (
          <button
            onClick={() => { setExpanded((v) => !v); setPage(0); }}
            className="shrink-0 w-6 h-6 flex items-center justify-center border rounded text-sm font-mono hover:bg-muted transition-colors"
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? '−' : '+'}
          </button>
        )}
      </div>

      {/* Expanded body */}
      {expanded && result.snippet && (
        <div className="border-t px-4 py-3 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {pages[page]}
          </p>

          {/* Page controls */}
          {multiPage && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="text-xs px-2 py-0.5 border rounded disabled:opacity-30 hover:bg-muted transition-colors"
              >
                ‹
              </button>
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`text-xs w-6 h-6 rounded transition-colors ${
                    i === page
                      ? 'bg-foreground text-background'
                      : 'hover:bg-muted border'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={page === pages.length - 1}
                className="text-xs px-2 py-0.5 border rounded disabled:opacity-30 hover:bg-muted transition-colors"
              >
                ›
              </button>
            </div>
          )}

          <Link
            href={href}
            className="inline-block text-xs text-muted-foreground hover:text-foreground underline"
          >
            View {typeLabels[result.type]} →
          </Link>
        </div>
      )}

      {/* Collapsed footer link */}
      {!expanded && (
        <div className="px-4 pb-3">
          <Link
            href={href}
            className="text-xs text-muted-foreground hover:text-foreground underline"
          >
            View →
          </Link>
        </div>
      )}
    </div>
  );
}
