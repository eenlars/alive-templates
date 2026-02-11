export const BlogEditorial = () => (
  <div className="bg-background p-8">
    <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
    <div className="space-y-6">
      <article className="border-b border-border pb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors cursor-pointer">
          Getting started with design systems
        </h3>
        <p className="text-muted-foreground text-sm mb-2">Building a cohesive visual language for your product.</p>
        <div className="text-xs text-muted-foreground">Mar 15, 2024 · 5 min read</div>
      </article>
      <article className="border-b border-border pb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors cursor-pointer">
          Performance optimization tips
        </h3>
        <p className="text-muted-foreground text-sm mb-2">How to make your web app faster and more efficient.</p>
        <div className="text-xs text-muted-foreground">Mar 10, 2024 · 7 min read</div>
      </article>
    </div>
  </div>
)
