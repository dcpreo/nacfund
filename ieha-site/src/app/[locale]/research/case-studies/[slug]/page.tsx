export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Case Study: {params.slug}</h1>
      <p className="text-muted-foreground">Case study content (MDX).</p>
    </div>
  );
}
