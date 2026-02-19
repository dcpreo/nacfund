'use client';

export function CompareSelector() {
  return (
    <div className="mb-8 flex gap-4">
      <div className="flex-1 rounded border p-4">
        <label className="text-sm text-muted-foreground">Artwork A</label>
        <input type="text" placeholder="Search or select" className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div className="flex-1 rounded border p-4">
        <label className="text-sm text-muted-foreground">Artwork B</label>
        <input type="text" placeholder="Search or select" className="mt-1 w-full rounded border px-3 py-2" />
      </div>
    </div>
  );
}
