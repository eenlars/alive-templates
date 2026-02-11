import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const HeroSplit = () => {
  const { template, isLoading, error } = useTemplateLoader('hero-split')
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
          title="Hero Split Prompt"
          content={template || ''}
          isLoading={isLoading}
          error={error}
          onClose={closeModal}
        />

        <section className="w-full bg-background grid md:grid-cols-2 gap-8">
          <div className="px-6 py-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Build beautiful websites faster
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Modern components for modern projects. Accessible, customizable, and ready to use.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Get Started
              </button>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[--radius] font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-muted flex items-center justify-center px-6 py-16">
            <div className="w-full h-64 bg-border rounded-[--radius] flex items-center justify-center text-muted-foreground">
              Image / Media
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroSplit