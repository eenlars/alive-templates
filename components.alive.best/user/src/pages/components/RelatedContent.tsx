import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const RelatedContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const relatedItems = [
    { title: 'E-commerce Redesign', tags: ['UI', 'Industrial'], thumbnail: true },
    { title: 'Mobile Banking App', tags: ['UX', 'Fintech'], thumbnail: true },
    { title: 'Dashboard Analytics', tags: ['UI', 'Data Viz'], thumbnail: true },
  ]

  const componentPrompt = `Create a centered related content component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 4xl
- Pure white background
- Three-column grid for content cards

Content:
- Heading: "Related Projects"
- Three project cards:
  1. E-commerce Redesign (tags: UI, Industrial)
  2. Mobile Banking App (tags: UX, Fintech)
  3. Dashboard Analytics (tags: UI, Data Viz)
- Each card has a thumbnail placeholder

Visual Elements:
- Grid layout with 3 columns
- Each card has:
  * Thumbnail image placeholder (gray gradient box)
  * Project title below thumbnail
  * Tag list with multiple tags
- Cards have subtle borders or shadow
- Tags displayed as small pills with background color

Colors:
- Use design system colors (foreground, muted-foreground, accent, background, border, muted)
- Title: Foreground color
- Tags: Accent background with accent-foreground text
- Card background: Background color with border
- Thumbnail: Muted background or gradient

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const RelatedContentComponent = () => (
    <div className="bg-background p-8 max-w-4xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-8">Related Projects</h2>

      <div className="grid grid-cols-3 gap-6">
        {relatedItems.map((item, idx) => (
          <div key={idx} className="border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300 group cursor-pointer bg-gradient-to-br from-background to-muted/10">
            {/* Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/30 transition-colors duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent/60 group-hover:text-accent transition-colors">{String(idx + 1).padStart(2, '0')}</div>
                <span className="text-muted-foreground text-xs font-medium mt-1 block">Project</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">{item.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-xs bg-accent/10 text-accent font-medium rounded-full border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center relative">
      <Link to="/components" className="absolute top-8 left-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
        ← All components
      </Link>

      <div className="absolute top-8 right-8 flex gap-2">
        <PromptButton onClick={() => setIsModalOpen(true)}>
          See prompt
        </PromptButton>
        <PromptButton onClick={handleCopyPrompt} isCopied={isCopied}>
          {isCopied ? 'Copied!' : 'Copy prompt'}
        </PromptButton>
      </div>

      <div className="border border-border rounded-[--radius] overflow-hidden">
        <RelatedContentComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Related Content Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default RelatedContent
