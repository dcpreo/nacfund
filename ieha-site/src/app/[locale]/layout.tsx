import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <>
      <Header locale={params.locale} />
      <main>{children}</main>
      <Footer locale={params.locale} />
    </>
  );
}
