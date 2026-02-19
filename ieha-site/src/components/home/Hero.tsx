// Rotating artwork hero
export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center bg-muted">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          materielart.tech
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Platform for material art, creative practice, and artistic research.
        </p>
        {/* TODO: rotating artwork image */}
      </div>
    </section>
  );
}
