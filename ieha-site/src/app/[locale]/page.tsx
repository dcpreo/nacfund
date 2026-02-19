import { Hero } from '@/components/home/Hero';
import { Pillars } from '@/components/home/Pillars';
import { FeaturedGrid } from '@/components/home/FeaturedGrid';
import { StatsBar } from '@/components/home/StatsBar';
import type { Locale } from '@/lib/i18n';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <Hero />
      <Pillars locale={params.locale} />
      <FeaturedGrid locale={params.locale} />
      <StatsBar locale={params.locale} />
    </>
  );
}
