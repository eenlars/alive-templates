export const BlogCards = () => (
  <div className="bg-background p-8">
    <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
    <div className="grid grid-cols-2 gap-4">
      <article className="border border-border rounded-[--radius] p-4 hover:shadow-[--shadow-md] transition-all cursor-pointer">
        <div className="w-full h-32 bg-muted rounded-[--radius] mb-3"></div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Design systems</h3>
        <p className="text-muted-foreground text-sm">Building a cohesive visual language.</p>
      </article>
      <article className="border border-border rounded-[--radius] p-4 hover:shadow-[--shadow-md] transition-all cursor-pointer">
        <div className="w-full h-32 bg-muted rounded-[--radius] mb-3"></div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Performance tips</h3>
        <p className="text-muted-foreground text-sm">Make your web app faster.</p>
      </article>
    </div>
  </div>
)
