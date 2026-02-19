import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

export function FeaturedGrid({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Featured</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href={`/${locale}/collection/1`} className="rounded-lg border p-4 hover:bg-muted/50">
            <div className="aspect-video bg-muted rounded mb-4" />
            <h3 className="font-medium">Featured work 1</h3>
          </Link>
          <Link href={`/${locale}/collection/2`} className="rounded-lg border p-4 hover:bg-muted/50">
            <div className="aspect-video bg-muted rounded mb-4" />
            <h3 className="font-medium">Featured work 2</h3>
          </Link>
          <Link href={`/${locale}/collection/3`} className="rounded-lg border p-4 hover:bg-muted/50">
            <div className="aspect-video bg-muted rounded mb-4" />
            <h3 className="font-medium">Featured work 3</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
