'use client';

import { useState } from 'react';

const tabs = ['Analysis', 'References', 'Authorship', 'Provenance'];

export function ArtworkTabs({ id }: { id: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mb-8">
      <div className="flex gap-2 border-b">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm ${active === i ? 'border-b-2 border-foreground font-medium' : 'text-muted-foreground'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="py-4 text-muted-foreground">
        Content for {tabs[active]} (artwork {id}).
      </div>
    </div>
  );
}
