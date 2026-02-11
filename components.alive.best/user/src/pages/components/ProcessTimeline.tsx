import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const ProcessTimeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const steps = [
    { title: 'Discovery', description: 'Research and user interviews to understand pain points', date: 'Week 1-2' },
    { title: 'Ideation', description: 'Sketching solutions and exploring design directions', date: 'Week 3' },
    { title: 'Prototype', description: 'Building high-fidelity interactive prototypes', date: 'Week 4-5' },
    { title: 'Testing', description: 'Usability testing with 12 participants', date: 'Week 6' },
    { title: 'Refinement', description: 'Iterating based on feedback and insights', date: 'Week 7' },
  ]

  const componentPrompt = `Create a centered process timeline component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 3xl
- Pure white background

Content:
- Heading: "Design Process"
- Five numbered timeline steps:
  1. Discovery (Week 1-2) - Research and user interviews to understand pain points
  2. Ideation (Week 3) - Sketching solutions and exploring design directions
  3. Prototype (Week 4-5) - Building high-fidelity interactive prototypes
  4. Testing (Week 6) - Usability testing with 12 participants
  5. Refinement (Week 7) - Iterating based on feedback and insights

Visual Elements:
- Vertical timeline with numbered steps
- Each step has a circle number indicator on the left
- Step title: Bold, dark text
- Description: Smaller, gray text below title
- Date/timeline: Gray text
- Vertical line connecting all steps
- Proper spacing and indentation

Colors:
- Use design system colors (foreground, muted-foreground, accent, border, background)
- Heading: Foreground color
- Title: Foreground color
- Description and date: Muted-foreground
- Circle indicator and timeline line: Accent color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const ProcessTimelineComponent = () => (
    <div className="bg-background p-8 max-w-3xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-8">Design Process</h2>

      <ol className="space-y-6 relative">
        {steps.map((step, idx) => (
          <li key={idx} className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
              <p className="text-muted-foreground text-xs mt-2">{step.date}</p>
            </div>
          </li>
        ))}
      </ol>
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
        <ProcessTimelineComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Process Timeline Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ProcessTimeline
