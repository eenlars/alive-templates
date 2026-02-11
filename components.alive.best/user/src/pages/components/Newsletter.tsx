import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered newsletter signup component with the following design:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: md
- Pure white background

Content:
- Heading: "Stay updated"
- Subheading: "Get the latest news and updates delivered to your inbox."
- Email input field with placeholder "your@email.com"
- Subscribe button with text "Subscribe"

Visual Elements:
- Heading: Bold, dark text
- Subheading: Gray text, small size
- Input field: Standard form input with border
- Button: Full width, accent color background
- All within a centered container

Colors:
- Use design system colors (foreground, muted-foreground, accent, background, border, input)
- Maintain proper contrast

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const NewsletterComponent = () => (
    <div className="bg-gradient-to-br from-background to-muted/20 p-8 max-w-md w-full rounded-xl border border-border/50">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Stay updated</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">Get the latest news and updates delivered to your inbox.</p>
      </div>

      <form className="space-y-3">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-all hover:border-accent/30"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Subscribe
        </button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">We never spam. Unsubscribe at any time.</p>
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
        <NewsletterComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Newsletter Signup Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Newsletter
