import Link from 'next/link';

export default function ResearchPage({ params }: { params: { locale: string } }) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <p className="mb-8 text-muted-foreground">Framework overview. Links to framework, case studies, terminology, services.</p>
      <nav className="flex flex-wrap gap-4 mb-10">
        <Link href="/research/framework" className="underline">Framework</Link>
        <Link href="/research/case-studies" className="underline">Case Studies</Link>
        <Link href="/research/terminology" className="underline">Terminology</Link>
        <Link href="/research/services" className="underline">Services</Link>
      </nav>
      <div className="border rounded-lg p-6 max-w-md">
        <h2 className="font-semibold mb-1">Research Assistant</h2>
        <p className="text-sm text-muted-foreground mb-4">Ask questions about the collection using AI.</p>
        <Link
          href={`/${params.locale}/research-assistant`}
          className="text-sm underline hover:text-muted-foreground"
        >
          Open Research Assistant →
        </Link>
      </div>
    </div>
  );
}
