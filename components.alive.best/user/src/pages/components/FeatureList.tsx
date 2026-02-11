import { Link } from 'react-router-dom'
import { useState } from 'react'

const FeatureList = () => {
  const [preset, setPreset] = useState<'two-column' | 'cards'>('two-column')

  const features = [
    { icon: '⚡', label: 'Fast', description: 'Lightning-fast performance out of the box' },
    { icon: '🔒', label: 'Secure', description: 'Built with security best practices' },
    { icon: '📱', label: 'Responsive', description: 'Works perfectly on all devices' },
    { icon: '♿', label: 'Accessible', description: 'WCAG 2.1 AA compliant by default' },
  ]

  const FeatureListPreview = ({ preset }: { preset: 'two-column' | 'cards' }) => (
    <div className="bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Why choose us</h2>

        <ul className={`grid grid-cols-2 gap-${preset === 'cards' ? '4' : '6'}`}>
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex gap-3 ${preset === 'cards' ? 'border border-border rounded-[--radius] p-4' : ''}`}
            >
              <div className="text-2xl flex-shrink-0" aria-hidden="true">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/components" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
          ← All components
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Feature List</h1>
          <p className="text-muted-foreground">Bulleted benefits with icons and short copy.</p>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Presets</h2>
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setPreset('two-column')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'two-column' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Two-column
            </button>
            <button
              onClick={() => setPreset('cards')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'cards' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Cards
            </button>
          </div>

          <div className="border border-border rounded-[--radius] overflow-hidden">
            <FeatureListPreview preset={preset} />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Inspector Schema</h2>
          <div className="bg-muted p-4 rounded-[--radius] text-sm text-muted-foreground space-y-2">
            <div><span className="font-medium text-foreground">items:</span> [{'{'}icon, label, description{'}'}]</div>
            <div><span className="font-medium text-foreground">layout:</span> columns (1/2/3), gap (sm/md/lg)</div>
            <div><span className="font-medium text-foreground">style:</span> iconStyle (line/filled), accent (token)</div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Accessibility</h2>
          <p className="text-muted-foreground text-sm">List semantics; decorative icons marked aria-hidden.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Recipe</h2>
          <pre className="bg-muted p-4 rounded-[--radius] text-sm text-muted-foreground overflow-x-auto">
{JSON.stringify({ type: 'featureList', columns: 2, items: [{ icon: '★', label: 'Fast', description: '…' }] }, null, 2)}
          </pre>
        </section>
      </div>
    </div>
  )
}

export default FeatureList
