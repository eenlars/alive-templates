export const CTAPreview = () => (
  <div className="bg-background p-8">
    <div className="bg-accent text-accent-foreground p-6 rounded-[--radius] flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-1">Ready to get started?</h3>
        <p className="text-sm opacity-90">Join thousands of users already using our platform.</p>
      </div>
      <button className="bg-background text-foreground px-6 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Start now
      </button>
    </div>
  </div>
)
