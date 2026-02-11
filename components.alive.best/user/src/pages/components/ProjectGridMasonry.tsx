import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const ProjectGridMasonry = () => {
  const { template, isLoading, error } = useTemplateLoader('project-grid-masonry')
  const { showPrompt, promptCopied, toggleModal, closeModal, handleCopyPrompt } = usePromptModal()

  const backLinkStyle: CSSProperties = {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    textDecoration: 'none',
    borderRadius: 'var(--radius, 0.375rem)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    opacity: 0.6,
    transition: 'all 200ms ease',
  }

  const projects = [
    { title: 'Project Alpha', color: 'hsl(217, 91%, 60%)' },
    { title: 'Project Beta', color: 'hsl(142, 76%, 36%)' },
    { title: 'Project Gamma', color: 'hsl(24, 95%, 53%)' },
    { title: 'Project Delta', color: 'hsl(271, 76%, 53%)' },
    { title: 'Project Epsilon', color: 'hsl(0, 72%, 51%)' },
    { title: 'Project Zeta', color: 'hsl(45, 93%, 47%)' },
  ]

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/components"
            style={backLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
          >
            ← All components
          </Link>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <PromptButton onClick={toggleModal}>See Prompt</PromptButton>
            <PromptButton isCopied={promptCopied} onClick={() => handleCopyPrompt(template)}>
              {promptCopied ? 'Copied!' : 'Copy Prompt'}
            </PromptButton>
          </div>
        </div>

        <PromptModal
          isOpen={showPrompt}
          title="Project Grid Masonry Prompt"
          content={template || ''}
          isLoading={isLoading}
          error={error}
          onClose={closeModal}
        />

        <div className="w-full grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href="#"
              className={`group relative rounded-[--radius] overflow-hidden ${
                idx % 3 === 0 ? 'row-span-2' : ''
              } min-h-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              style={{ backgroundColor: project.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white font-medium">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectGridMasonry