import Link from 'next/link';

export function RelatedWorks({ id }: { id: string }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Related works</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/collection/1" className="text-sm text-muted-foreground hover:underline">Related 1</Link>
        <Link href="/collection/2" className="text-sm text-muted-foreground hover:underline">Related 2</Link>
      </div>
    </section>
  );
}
