import { Link } from 'react-router-dom'
import { useState } from 'react'

const Hero = () => {
  const [preset, setPreset] = useState<'solid' | 'split'>('solid')

  const HeroPreview = ({ preset }: { preset: 'solid' | 'split' }) => (
    <section className={`w-full bg-background ${preset === 'split' ? 'grid md:grid-cols-2 gap-8' : ''}`}>
      <div className={`${preset === 'solid' ? 'text-center max-w-3xl mx-auto' : ''} px-6 py-16 flex flex-col justify-center`}>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Build beautiful websites faster
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Modern components for modern projects. Accessible, customizable, and ready to use.
        </p>
        <div className={`flex gap-4 ${preset === 'solid' ? 'justify-center' : ''}`}>
          <button className="px-6 py-3 bg-accent text-accent-foreground rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Get Started
          </button>
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[--radius] font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Learn More
          </button>
        </div>
      </div>
      {preset === 'split' && (
        <div className="bg-muted flex items-center justify-center px-6 py-16">
          <div className="w-full h-64 bg-border rounded-[--radius] flex items-center justify-center text-muted-foreground">
            Image / Media
          </div>
        </div>
      )}
    </section>
  )

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/components" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
          ← All components
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Hero</h1>
          <p className="text-muted-foreground">Headline, subhead, and 1–2 CTAs.</p>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Presets</h2>
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setPreset('solid')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'solid' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Solid
            </button>
            <button
              onClick={() => setPreset('split')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'split' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Split (image right)
            </button>
          </div>

          <div className="border border-border rounded-[--radius] overflow-hidden">
            <HeroPreview preset={preset} />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Inspector Schema</h2>
          <div className="bg-muted p-4 rounded-[--radius] text-sm text-muted-foreground space-y-2">
            <div><span className="font-medium text-foreground">content:</span> headline, subhead, primaryCTA, secondaryCTA</div>
            <div><span className="font-medium text-foreground">media:</span> image (on/off/url)</div>
            <div><span className="font-medium text-foreground">style:</span> align (left/center), padding (md/lg)</div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Accessibility</h2>
          <p className="text-muted-foreground text-sm">Proper heading order; image alt.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Recipe</h2>
          <pre className="bg-muted p-4 rounded-[--radius] text-sm text-muted-foreground overflow-x-auto">
{JSON.stringify({ type: 'hero', preset: 'solid', media: false }, null, 2)}
          </pre>
        </section>
      </div>
    </div>
  )
}

export default Hero
