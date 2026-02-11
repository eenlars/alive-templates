import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const BlogEditorial = () => (
  <div className="bg-background p-8">
    <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
    <div className="space-y-6">
      <article className="border-b border-border pb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors cursor-pointer">
          Getting started with design systems
        </h3>
        <p className="text-muted-foreground text-sm mb-2">Building a cohesive visual language for your product.</p>
        <div className="text-xs text-muted-foreground">Mar 15, 2024 · 5 min read</div>
      </article>
      <article className="border-b border-border pb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors cursor-pointer">
          Performance optimization tips
        </h3>
        <p className="text-muted-foreground text-sm mb-2">How to make your web app faster and more efficient.</p>
        <div className="text-xs text-muted-foreground">Mar 10, 2024 · 7 min read</div>
      </article>
    </div>
  </div>
)

const BlogCards = () => (
  <div className="bg-background p-8">
    <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
    <div className="grid grid-cols-2 gap-4">
      <article className="border border-border rounded-[--radius] p-4 hover:shadow-[--shadow-md] transition-all cursor-pointer">
        <div className="w-full h-32 bg-muted rounded-[--radius] mb-3"></div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Design systems</h3>
        <p className="text-muted-foreground text-sm">Building a cohesive visual language.</p>
      </article>
      <article className="border border-border rounded-[--radius] p-4 hover:shadow-[--shadow-md] transition-all cursor-pointer">
        <div className="w-full h-32 bg-muted rounded-[--radius] mb-3"></div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Performance tips</h3>
        <p className="text-muted-foreground text-sm">Make your web app faster.</p>
      </article>
    </div>
  </div>
)

const Blog = () => {
  const { template, isLoading, error } = useTemplateLoader('blog')
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
          title="Blog Prompt"
          content={template || ''}
          isLoading={isLoading}
          error={error}
          onClose={closeModal}
        />

        <div className="w-full flex-1 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Editorial</h2>
            <div className="border border-border rounded-[--radius] overflow-hidden">
              <BlogEditorial />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Cards</h2>
            <div className="border border-border rounded-[--radius] overflow-hidden">
              <BlogCards />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Blog
