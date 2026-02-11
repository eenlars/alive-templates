import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'

const ProjectGrid = () => {
  const [preset, setPreset] = useState<'masonry' | 'equal'>('masonry')
  const [copied, setCopied] = useState(false)
  const { template, isLoading, error } = useTemplateLoader('project-grid')

  const projects = [
    { title: 'Project Alpha', color: 'hsl(217, 91%, 60%)' },
    { title: 'Project Beta', color: 'hsl(142, 76%, 36%)' },
    { title: 'Project Gamma', color: 'hsl(24, 95%, 53%)' },
    { title: 'Project Delta', color: 'hsl(271, 76%, 53%)' },
    { title: 'Project Epsilon', color: 'hsl(0, 72%, 51%)' },
    { title: 'Project Zeta', color: 'hsl(45, 93%, 47%)' },
  ]

  const handleCopyTemplate = () => {
    if (template) {
      navigator.clipboard.writeText(template)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const ProjectGridPreview = ({ preset }: { preset: 'masonry' | 'equal' }) => (
    <div className={`w-full grid ${preset === 'masonry' ? 'grid-cols-2 md:grid-cols-3 auto-rows-auto' : 'grid-cols-2 md:grid-cols-3'} gap-4 p-6`}>
      {projects.map((project, idx) => (
        <a
          key={idx}
          href="#"
          className={`group relative rounded-[--radius] overflow-hidden ${
            preset === 'masonry' && idx % 3 === 0 ? 'row-span-2' : ''
          } ${preset === 'equal' ? 'aspect-square' : 'min-h-[200px]'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
          style={{ backgroundColor: project.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <h3 className="text-white font-medium">{project.title}</h3>
          </div>
        </a>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/components" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
          ← All components
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Project Grid</h1>
          <p className="text-muted-foreground">Visual overview of projects with hover titles.</p>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Presets</h2>
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setPreset('masonry')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'masonry' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Masonry
            </button>
            <button
              onClick={() => setPreset('equal')}
              className={`px-4 py-2 rounded-[--radius] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                preset === 'equal' ? 'bg-accent text-accent-foreground border-accent' : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              Equal tiles
            </button>
          </div>

          <div className="border border-border rounded-[--radius] overflow-hidden">
            <ProjectGridPreview preset={preset} />
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Alive Super Template</h2>
            <button
              onClick={handleCopyTemplate}
              className={`px-3 py-1 text-sm rounded-[--radius] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                copied
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'bg-accent text-accent-foreground border-accent hover:opacity-90'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Template'}
            </button>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            This component is documented as an Alive Super Template. Copy the template below to implement this pattern in your projects.
          </p>

          <div className="bg-muted p-6 rounded-[--radius] overflow-x-auto">
            <pre className="template-code text-xs text-muted-foreground whitespace-pre-wrap break-words font-mono">
              {error ? `Error loading template: ${error}` : isLoading ? 'Loading template...' : template}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectGrid
