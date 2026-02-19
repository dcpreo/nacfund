import { ArtworkCard } from './ArtworkCard';

// Phase 1: load from seed JSON
const placeholderIds = ['1', '2', '3'];

export function ResultsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {placeholderIds.map((id) => (
        <ArtworkCard key={id} id={id} />
      ))}
    </div>
  );
}
