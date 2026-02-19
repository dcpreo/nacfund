export default function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Event: {params.slug}</h1>
      <p className="text-muted-foreground">Event details.</p>
    </div>
  );
}
