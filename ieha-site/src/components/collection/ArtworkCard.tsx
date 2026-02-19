import Link from 'next/link';

export function ArtworkCard({ id }: { id: string }) {
  return (
    <Link href={`/collection/${id}`} className="group rounded-lg border overflow-hidden hover:shadow-md">
      <div className="aspect-square bg-muted" />
      <div className="p-4">
        <h3 className="font-medium group-hover:underline">Artwork {id}</h3>
        <p className="text-sm text-muted-foreground">Artist · Year</p>
      </div>
    </Link>
  );
}
