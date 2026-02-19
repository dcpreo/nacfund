'use client';

export function Filters() {
  return (
    <aside className="mb-8 rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Filters</h3>
      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Artist
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Period
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Institution
        </label>
      </div>
    </aside>
  );
}
