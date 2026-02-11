import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const CaseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered case section component showcasing a project:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 4xl
- Pure white background

Content Structure:
- Title: "Redesigning the checkout experience"
- Subtitle: "How we increased conversion by 34% through streamlined UX"
- Three subsections:
  1. Context
     "Users were abandoning carts at a high rate, particularly on mobile devices."
  2. Process (numbered list)
     1. Conducted user interviews and heatmap analysis
     2. Simplified form fields from 12 to 6
     3. Implemented real-time validation
  3. Outcome (metrics grid)
     - +34% Conversion
     - -42% Drop-off

Visual Elements:
- Title: Large, bold, dark text
- Subtitle: Medium weight, gray text
- Section headings: Bold, medium size
- Process: Numbered list with proper indentation
- Outcome: Two-column grid with metric boxes
- Metric boxes: Light background with accent-colored numbers
- Proper spacing between all sections

Colors:
- Use design system colors (foreground, muted-foreground, accent, background, muted)
- Title: Foreground color
- Subtitle and body text: Muted-foreground
- Metric numbers: Accent color
- Metric boxes: Muted background

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const CaseSectionComponent = () => (
    <div className="bg-background max-w-4xl w-full p-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">Redesigning the checkout experience</h2>
      <p className="text-muted-foreground mb-6">How we increased conversion by 34% through streamlined UX</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Context</h3>
          <p className="text-muted-foreground">Users were abandoning carts at a high rate, particularly on mobile devices.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Process</h3>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>Conducted user interviews and heatmap analysis</li>
            <li>Simplified form fields from 12 to 6</li>
            <li>Implemented real-time validation</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Outcome</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="p-4 bg-muted rounded-[--radius]">
              <div className="text-3xl font-bold text-accent">+34%</div>
              <div className="text-sm text-muted-foreground">Conversion</div>
            </div>
            <div className="p-4 bg-muted rounded-[--radius]">
              <div className="text-3xl font-bold text-accent">-42%</div>
              <div className="text-sm text-muted-foreground">Drop-off</div>
            </div>
          </div>
        </div>
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
        <CaseSectionComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Case Section Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default CaseSection
