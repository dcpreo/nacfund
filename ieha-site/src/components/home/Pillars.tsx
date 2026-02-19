import { getDictionary, type Locale } from '@/lib/i18n';

const pillars = [
  { titleKey: 'pillars.research', descKey: 'pillars.researchDesc' },
  { titleKey: 'pillars.collection', descKey: 'pillars.collectionDesc' },
  { titleKey: 'pillars.experts', descKey: 'pillars.expertsDesc' },
  { titleKey: 'pillars.publications', descKey: 'pillars.publicationsDesc' },
];

export async function Pillars({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  return (
    <section className="py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <div key={i} className="rounded-lg border p-6">
            <h3 className="font-semibold">{dict[p.titleKey] ?? p.titleKey}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{dict[p.descKey] ?? p.descKey}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
