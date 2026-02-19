import Link from 'next/link';

export function CaseStudyCard({
  slug,
  title,
  excerpt,
}: {
  slug: string;
  title: string;
  excerpt: string;
}) {
  return (
    <Link href={`/research/case-studies/${slug}`} className="block rounded-lg border p-6 hover:bg-muted/50">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
    </Link>
  );
}
