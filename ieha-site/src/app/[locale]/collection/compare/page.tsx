import { CompareSelector } from '@/components/compare/CompareSelector';
import { SyncZoomViewer } from '@/components/compare/SyncZoomViewer';
import { CompareSummary } from '@/components/compare/CompareSummary';

export default function ComparePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Compare Artworks</h1>
      <CompareSelector />
      <SyncZoomViewer />
      <CompareSummary />
    </div>
  );
}
