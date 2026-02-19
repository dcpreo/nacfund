export default function ExpertPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Expert: {params.slug}</h1>
      <p className="text-muted-foreground">Expert profile.</p>
    </div>
  );
}
