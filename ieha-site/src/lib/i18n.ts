export type Locale = 'ru' | 'en' | 'de' | 'fr';

export const locales: Locale[] = ['ru', 'en', 'de', 'fr'];
export const defaultLocale: Locale = 'en';

export async function getDictionary(locale: Locale): Promise<Record<string, string>> {
  const dict = await import(`@/content/i18n/${locale}.json`);
  return dict.default ?? dict;
}
