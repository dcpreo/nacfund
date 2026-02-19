import Link from 'next/link';
import { CaseStudyCard } from '@/components/research/CaseStudyCard';

export default function CaseStudiesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <p className="mb-8 text-muted-foreground">Overview of case studies.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <CaseStudyCard slug="black-square" title="Black Square" excerpt="Kazimir Malevich." />
      </div>
    </div>
  );
}
