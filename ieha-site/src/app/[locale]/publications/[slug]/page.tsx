export default function PublicationPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Publication: {params.slug}</h1>
      <p className="text-muted-foreground">Publication content.</p>
    </div>
  );
}
