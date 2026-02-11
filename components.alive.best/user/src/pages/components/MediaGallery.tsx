import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const images = [
  { color: 'hsl(217, 91%, 60%)', alt: 'Image 1' },
  { color: 'hsl(142, 76%, 36%)', alt: 'Image 2' },
  { color: 'hsl(24, 95%, 53%)', alt: 'Image 3' },
  { color: 'hsl(271, 76%, 53%)', alt: 'Image 4' },
]

const GalleryPreset = () => (
  <div className="w-full p-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <button
          key={idx}
          className="aspect-square rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-transform hover:scale-105"
          style={{ backgroundColor: img.color }}
          aria-label={img.alt}
        />
      ))}
    </div>
  </div>
)

const MediaGallery = () => {
  const { template, isLoading, error } = useTemplateLoader('media-gallery')
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
          title="Media Gallery Prompt"
          content={template || ''}
          isLoading={isLoading}
          error={error}
          onClose={closeModal}
        />

        <div className="w-full">
          <GalleryPreset />
        </div>
      </div>
    </div>
  )
}

export default MediaGallery
