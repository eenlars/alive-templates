export const HeroPreview = () => (
  <section className="w-full bg-background text-center max-w-3xl mx-auto px-6 py-16 flex flex-col justify-center">
    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
      Build beautiful websites faster
    </h1>
    <p className="text-lg text-muted-foreground mb-8">
      Modern components for modern projects. Accessible, customizable, and ready to use.
    </p>
    <div className="flex gap-4 justify-center">
      <button className="px-6 py-3 bg-accent text-accent-foreground rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Get Started
      </button>
      <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[--radius] font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Learn More
      </button>
    </div>
  </section>
)
