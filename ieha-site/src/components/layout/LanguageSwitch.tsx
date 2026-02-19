'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

const localeLabels: Record<Locale, string> = {
  ru: 'RU',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
};

export function LanguageSwitch({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const basePath = pathname?.replace(/^\/(ru|en|de|fr)/, '') || '';

  return (
    <div className="flex gap-2 text-sm">
      {(['en', 'ru', 'de', 'fr'] as Locale[]).map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${basePath || '/'}`}
          className={currentLocale === loc ? 'font-semibold' : 'text-muted-foreground hover:text-foreground'}
        >
          {localeLabels[loc]}
        </Link>
      ))}
    </div>
  );
}
