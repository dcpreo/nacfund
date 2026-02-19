import { Filters } from '@/components/collection/Filters';
import { ResultsGrid } from '@/components/collection/ResultsGrid';

export default function CollectionPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Collection</h1>
      <p className="mb-8 text-muted-foreground">Database grid + filters.</p>
      <Filters />
      <ResultsGrid />
    </div>
  );
}
