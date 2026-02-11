import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered pricing component with two plan options:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 5xl
- Pure white background
- Two-column grid layout

Content:
- Heading: "Choose your plan"
- Two pricing cards:
  1. Starter Plan
     Price: $29/month
     Features:
       - Up to 5 projects
       - Basic analytics
       - Email support
     Button: "Choose plan" (secondary)
  2. Professional Plan (highlighted)
     Price: $79/month
     Features:
       - Unlimited projects
       - Advanced analytics
       - Priority support
       - Custom integrations
     Badge: "Popular" (above card)
     Button: "Choose plan" (accent)

Visual Elements:
- Cards with borders (accent border for popular plan)
- Pricing displayed prominently in large bold text
- Feature lists as bullet points
- "Popular" badge positioned above the featured card
- Buttons full width with proper styling
- Proper spacing and typography throughout

Colors:
- Use design system colors (foreground, muted-foreground, accent, secondary, border, background)
- Popular card: Accent border (2px)
- Popular badge: Accent background
- Regular cards: Regular border
- Buttons match their styling (secondary or accent)

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const PricingComponent = () => (
    <div className="bg-background p-8 max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Choose your plan</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-border rounded-[--radius] p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">Starter</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-foreground">$29</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
            <li>Up to 5 projects</li>
            <li>Basic analytics</li>
            <li>Email support</li>
          </ul>
          <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Choose plan
          </button>
        </div>

        <div className="border-2 border-accent rounded-[--radius] p-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Professional</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-foreground">$79</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
            <li>Unlimited projects</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Choose plan
          </button>
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
        <PricingComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Pricing Component Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Pricing
