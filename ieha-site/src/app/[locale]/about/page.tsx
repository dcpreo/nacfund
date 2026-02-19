import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Mission, history, board, and partners.',
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">About materielart.tech</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Mission / Manifest landing. Links to mission, history, board, partners.
      </p>
      <nav className="flex flex-wrap gap-4">
        <Link href="/about/mission" className="underline">Mission</Link>
        <Link href="/about/history" className="underline">History</Link>
        <Link href="/about/board" className="underline">Board</Link>
        <Link href="/about/partners" className="underline">Partners</Link>
      </nav>
    </div>
  );
}
