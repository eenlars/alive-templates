import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered FAQ component with collapsible questions and answers:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 3xl
- Pure white background

Content:
- Heading: "Frequently Asked Questions"
- Three Q&A items:
  1. Q: "How do I get started?" A: "Simply sign up for an account and follow the onboarding guide."
  2. Q: "What payment methods do you accept?" A: "We accept all major credit cards, PayPal, and bank transfers."
  3. Q: "Can I cancel my subscription?" A: "Yes, you can cancel anytime from your account settings."

Visual Elements:
- Each Q&A item has a button that toggles the answer visibility
- Active question shows a minus sign (−), inactive shows plus sign (+)
- Questions separated by bottom borders
- Questions use bold text, answers use gray text
- Smooth open/close transitions

Interactions:
- Click any question to toggle its answer
- ARIA attributes for accessibility (aria-expanded, aria-controls)
- First question opens by default

Colors:
- Use design system colors (foreground, muted-foreground, accent, border, background)
- Toggle icon in accent color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const FAQComponent = () => (
    <div className="bg-background p-8 max-w-3xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

      <div className="space-y-2">
        {[
          { q: 'How do I get started?', a: 'Simply sign up for an account and follow the onboarding guide.' },
          { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers.' },
          { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime from your account settings.' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border-b border-border pb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full text-left flex items-center justify-between text-foreground font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
              aria-expanded={openIndex === idx}
              aria-controls={`answer-${idx}`}
            >
              <span>{item.q}</span>
              <span className="text-accent">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div id={`answer-${idx}`} className="mt-2 text-muted-foreground text-sm pl-2">
                {item.a}
              </div>
            )}
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
        <FAQComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="FAQ Component Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default FAQ
