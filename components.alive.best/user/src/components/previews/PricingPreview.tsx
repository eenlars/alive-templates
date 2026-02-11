export const PricingPreview = () => (
  <div className="bg-background p-8">
    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Choose your plan</h2>
    <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div className="border border-border rounded-[--radius] p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Starter</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-foreground">$29</span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>
        <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
          <li>Up to 5 projects</li>
          <li>Basic analytics</li>
          <li>Email support</li>
        </ul>
        <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Choose plan
        </button>
      </div>

      <div className="border-2 border-accent rounded-[--radius] p-6 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
          Popular
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Professional</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-foreground">$79</span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>
        <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
          <li>Unlimited projects</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
          <li>Custom integrations</li>
        </ul>
        <button className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Choose plan
        </button>
      </div>
    </div>
  </div>
)
