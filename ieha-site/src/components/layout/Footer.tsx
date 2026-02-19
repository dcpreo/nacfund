import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container flex flex-col gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">© materielart.tech — Material Art</p>
        <nav className="flex gap-4 text-sm">
          <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-foreground">Contact</Link>
          <Link href={`/${locale}/membership`} className="text-muted-foreground hover:text-foreground">Membership</Link>
        </nav>
      </div>
    </footer>
  );
}
