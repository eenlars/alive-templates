export const NavbarPreview = () => (
  <nav className="w-full bg-background border-b border-border">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-foreground font-semibold">Logo</div>
      <div className="flex gap-6 ml-auto">
        <a href="#work" className="text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">Work</a>
        <a href="#about" className="text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">About</a>
        <a href="#contact" className="text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">Contact</a>
      </div>
    </div>
  </nav>
)
