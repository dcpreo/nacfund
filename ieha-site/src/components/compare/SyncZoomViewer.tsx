// Side-by-side with sync zoom (phase 3)
export function SyncZoomViewer() {
  return (
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">View A</div>
      <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">View B</div>
    </div>
  );
}
