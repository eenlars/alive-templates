import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const HeroSolid = () => {
  const { template, isLoading, error } = useTemplateLoader('hero-solid')
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
          title="Hero Solid Prompt"
          content={template || ''}
          isLoading={isLoading}
          error={error}
          onClose={closeModal}
        />

        <section className="w-full bg-background text-center max-w-3xl mx-auto px-6 py-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Build beautiful websites faster
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Modern components for modern projects. Accessible, customizable, and ready to use.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Get Started
              </button>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[--radius] font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Learn More
              </button>
            </div>
        </section>
      </div>
    </div>
  )
}

export default HeroSolid