import Link from 'next/link';
import { Search, Bot } from 'lucide-react';
import { LanguageSwitch } from './LanguageSwitch';
import { navRoutes } from '@/lib/routes';
import { getDictionary, type Locale } from '@/lib/i18n';

export async function Header({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold">
          materielart.tech
        </Link>
        <nav className="flex gap-6">
          {navRoutes.map((r) => (
            <Link key={r.href} href={`/${locale}${r.href}`} className="text-sm text-muted-foreground hover:text-foreground">
              {dict[r.labelKey] ?? r.labelKey}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}/research-assistant`} className="text-muted-foreground hover:text-foreground" aria-label="Research Assistant">
            <Bot className="h-4 w-4" />
          </Link>
          <Link href={`/${locale}/search`} className="text-muted-foreground hover:text-foreground" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
          <LanguageSwitch currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}
