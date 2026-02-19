import Link from 'next/link';

const researchLinks = [
  { href: '/research/framework', label: 'Framework' },
  { href: '/research/case-studies', label: 'Case Studies' },
  { href: '/research/terminology', label: 'Terminology' },
  { href: '/research/services', label: 'Services' },
];

export function SidebarNav({ locale }: { locale?: string }) {
  const prefix = locale ? `/${locale}` : '';
  return (
    <nav className="w-48 shrink-0 space-y-1 border-r pr-4">
      {researchLinks.map((l) => (
        <Link key={l.href} href={`${prefix}${l.href}`} className="block text-sm text-muted-foreground hover:text-foreground">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
