import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localeInPath = pathname.split('/')[1];
  if (locales.includes(localeInPath as 'ru' | 'en' | 'de' | 'fr')) {
    return NextResponse.next();
  }
  // Redirect root or unknown locale to default
  if (pathname === '/' || !locales.includes(localeInPath as 'ru' | 'en' | 'de' | 'fr')) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
