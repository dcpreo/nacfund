import Link from 'next/link';

export default function ResearchPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <p className="mb-8 text-muted-foreground">Framework overview. Links to framework, case studies, terminology, services.</p>
      <nav className="flex flex-wrap gap-4">
        <Link href="/research/framework" className="underline">Framework</Link>
        <Link href="/research/case-studies" className="underline">Case Studies</Link>
        <Link href="/research/terminology" className="underline">Terminology</Link>
        <Link href="/research/services" className="underline">Services</Link>
      </nav>
    </div>
  );
}
