import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered CTA (Call-to-Action) section component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 2xl
- Pure white background

Content:
- Heading: "Transform your workflow today"
- Subheading: "Experience the difference with our powerful, easy-to-use platform."
- Primary CTA button: "Get started free"

Visual Elements:
- Card-style container with border
- Heading: Large, bold, dark text
- Subheading: Medium weight, gray text
- Button: Full width, accent color background with hover effect
- Centered text alignment
- Proper spacing and padding throughout

Interactions:
- Button has hover opacity effect
- Button is fully keyboard accessible
- Proper focus-visible styling

Colors:
- Use design system colors (foreground, muted-foreground, accent, border, background)
- Button: Accent background with accent-foreground text
- Card border: Border color from design system

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const CTAComponent = () => (
    <div className="bg-background p-8 max-w-2xl w-full">
      <div className="max-w-2xl mx-auto text-center border border-border p-8 rounded-[--radius]">
        <h3 className="text-2xl font-bold text-foreground mb-3">Transform your workflow today</h3>
        <p className="text-muted-foreground mb-6">Experience the difference with our powerful, easy-to-use platform.</p>
        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Get started free
        </button>
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
        <CTAComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="CTA Section Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default CTA
