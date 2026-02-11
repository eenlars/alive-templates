import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered contact form component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 2xl
- Pure white background

Content:
- Heading: "Contact us"
- Three form fields:
  1. Name input with label "Name" and placeholder "Your name"
  2. Email input with label "Email" and placeholder "your@email.com"
  3. Message textarea with label "Message" and placeholder "Your message..."
- Submit button: "Send message" (full width)

Visual Elements:
- Form fields with borders
- Labels above each field
- Text color and styling matches design system
- Button with accent background
- Proper spacing between form elements
- All content properly padded and centered

Interactions:
- All form fields are interactive
- Submit button has hover effect
- Proper focus-visible styling for keyboard navigation
- Textarea is resizable vertically (but not horizontally)

Colors:
- Use design system colors (foreground, muted-foreground, accent, background, border, input)
- Labels: Foreground color
- Placeholders: Muted-foreground color
- Button: Accent background with accent-foreground text

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  const ContactFormComponent = () => (
    <div className="bg-background p-8 max-w-2xl w-full">
      <form className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground mb-4">Contact us</h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-input rounded-[--radius] bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-input rounded-[--radius] bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-input rounded-[--radius] bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground px-6 py-2 rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Send message
        </button>
      </form>
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
        <ContactFormComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Contact Form Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ContactForm
