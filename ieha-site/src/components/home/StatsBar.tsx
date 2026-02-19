import { getDictionary, type Locale } from '@/lib/i18n';

const stats = [
  { value: '—', labelKey: 'stats.artworks' },
  { value: '—', labelKey: 'stats.publications' },
  { value: '—', labelKey: 'stats.experts' },
];

export async function StatsBar({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  return (
    <section className="border-t py-8">
      <div className="container flex justify-around text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{dict[s.labelKey] ?? s.labelKey}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
