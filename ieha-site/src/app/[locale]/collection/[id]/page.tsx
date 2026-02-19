import { ArtworkViewer } from '@/components/collection/ArtworkViewer';
import { ArtworkTabs } from '@/components/collection/ArtworkTabs';
import { RelatedWorks } from '@/components/collection/RelatedWorks';

export default function ArtworkPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container py-12">
      <ArtworkViewer id={params.id} />
      <ArtworkTabs id={params.id} />
      <RelatedWorks id={params.id} />
    </div>
  );
}
