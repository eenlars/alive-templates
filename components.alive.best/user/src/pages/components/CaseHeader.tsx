import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const CaseHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered case header component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 4xl
- Pure white background

Content:
- Heading: "Redesigning the checkout flow"
- Subheading: "Creating a frictionless payment experience"
- Meta information in three columns:
  * Role: "Lead Designer"
  * Client: "TechCorp"
  * Year: "2024"
- Tags: "UX Design", "E-commerce"

Visual Elements:
- Centered text alignment
- Heading: Large, bold, dark text
- Subheading: Medium weight, gray text
- Meta information: Smaller gray text with bold labels
- Tags: Light background with gray text, rounded pill shapes
- Proper spacing between all elements

Colors:
- Use design system colors (foreground, muted-foreground, background, muted)
- Heading: Foreground color
- Subheading and meta: Muted-foreground color
- Tags: Muted background with muted-foreground text

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  const CaseHeaderComponent = () => (
    <div className="bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Redesigning the checkout flow</h1>
          <p className="text-lg text-muted-foreground mb-6">Creating a frictionless payment experience</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-4">
            <div><span className="font-medium text-foreground">Role:</span> Lead Designer</div>
            <div><span className="font-medium text-foreground">Client:</span> TechCorp</div>
            <div><span className="font-medium text-foreground">Year:</span> 2024</div>
          </div>
          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">UX Design</span>
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">E-commerce</span>
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
        <CaseHeaderComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Case Header Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default CaseHeader
