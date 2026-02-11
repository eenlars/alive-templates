export const TestimonialPreview = () => (
  <div className="bg-background p-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What our customers say</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-border rounded-[--radius] p-6">
          <p className="text-muted-foreground mb-4 italic">
            "This product completely transformed how we work. The team is incredibly responsive and helpful."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted"></div>
            <div>
              <div className="text-sm font-medium text-foreground">Sarah Johnson</div>
              <div className="text-xs text-muted-foreground">CEO, TechCorp</div>
            </div>
          </div>
        </div>
        <div className="border border-border rounded-[--radius] p-6">
          <p className="text-muted-foreground mb-4 italic">
            "Best investment we've made this year. The ROI has been phenomenal and implementation was seamless."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted"></div>
            <div>
              <div className="text-sm font-medium text-foreground">Michael Chen</div>
              <div className="text-xs text-muted-foreground">Product Lead, StartupXYZ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
