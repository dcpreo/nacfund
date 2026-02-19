// Base viewer; IIIF later (phase 3)
export function ArtworkViewer({ id }: { id: string }) {
  return (
    <div className="mb-8">
      <div className="aspect-video max-w-4xl mx-auto rounded-lg bg-muted flex items-center justify-center">
        Artwork {id} — viewer placeholder (IIIF phase 3)
      </div>
      <h1 className="mt-4 text-2xl font-bold">Artwork {id}</h1>
      <p className="text-muted-foreground">Artist, year, medium</p>
    </div>
  );
}
