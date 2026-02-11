import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered testimonials component with customer quotes:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 4xl
- Pure white background

Content:
- Heading: "What our customers say"
- Two testimonial cards in a grid layout:
  1. Quote: "This product completely transformed how we work. The team is incredibly responsive and helpful."
     Author: "Sarah Johnson"
     Role: "CEO, TechCorp"
  2. Quote: "Best investment we've made this year. The ROI has been phenomenal and implementation was seamless."
     Author: "Michael Chen"
     Role: "Product Lead, StartupXYZ"
- Each card includes an avatar placeholder (circular)

Visual Elements:
- Two-column grid layout
- Cards with borders and padding
- Quotes in italic, gray text
- Author names: Bold, dark text
- Roles: Smaller, gray text
- Avatars: Circular, gray gradient background
- Proper spacing and alignment

Colors:
- Use design system colors (foreground, muted-foreground, border, background)
- Card borders: Border color
- Quote text: Muted-foreground
- Names: Foreground
- Avatars: Muted background

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  const TestimonialsComponent = () => (
    <div className="bg-background p-8 max-w-4xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What our customers say</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
          <svg className="w-5 h-5 text-accent mb-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-muted-foreground mb-6 italic leading-relaxed">
            "This product completely transformed how we work. The team is incredibly responsive and helpful."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-accent">SJ</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-xs text-muted-foreground">CEO, TechCorp</div>
            </div>
          </div>
        </div>
        <div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
          <svg className="w-5 h-5 text-accent mb-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-muted-foreground mb-6 italic leading-relaxed">
            "Best investment we've made this year. The ROI has been phenomenal and implementation was seamless."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-accent">MC</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Michael Chen</div>
              <div className="text-xs text-muted-foreground">Product Lead, StartupXYZ</div>
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
        <TestimonialsComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Testimonials Component Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Testimonials
