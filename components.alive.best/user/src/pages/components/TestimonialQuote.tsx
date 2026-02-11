import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const TestimonialQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a new component page with the following design:

Layout:
- Center the entire component vertically and horizontally on the page
- Use a white background
- Full width section with relative positioning

Content Structure:
- Company/Brand logo at the top (neutral gray gradient block, 3rem height)
- Large centered testimonial quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
- Author section with:
  * Circular avatar image (replaced with neutral gray gradient block)
  * Author name: "Sarah Mitchell"
  * Title/role: "Director of Design"

Visual Elements:
- Background: Pure white with subtle radial gradient overlay
- Decorative skewed section: Angled background shape with shadow and ring (indigo-based color scheme)
- Author avatar: Circular, neutral gray gradient block
- Logo: Neutral gray gradient block, 48px height

Typography:
- Quote: Large, bold, centered text (xl/8 on mobile, 2xl/9 on tablet/desktop)
- Author name: Semibold
- Author role: Regular weight, gray text
- Separator: Small decorative dot between name and role

Colors:
- Use your design system's primary, secondary, and accent colors
- Quote text: Foreground color
- Author name: Foreground color
- Author role: Muted foreground color
- Decorative elements: Use indigo-based gradient (indigo-100 for background, indigo-600 for shadows/rings)

Responsive Design:
- Mobile: Single column, text-lg
- Tablet/Desktop: Optimized spacing, larger text (text-xl/8 on mobile to text-2xl/9 on desktop)
- Max width: 2xl on mobile, 4xl on tablet/desktop

The component should be centered both vertically and horizontally on the page with proper spacing and maintain a professional, editorial feel.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const TestimonialPreview = () => (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 w-full">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,#e0e7ff,white)] opacity-20"></div>

      {/* Decorative skewed section */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Logo */}
        <div className="mx-auto h-12 w-32 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>

        {/* Testimonial */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>"We transformed our entire workflow and increased productivity by 40% in just three months. The support team was exceptional and the implementation was seamless from day one."</p>
          </blockquote>

          {/* Author */}
          <figcaption className="mt-10">
            <div className="mx-auto h-10 w-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                <circle r="1" cx="1" cy="1" />
              </svg>
              <div className="text-gray-600">Director of Design</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
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
        <TestimonialPreview />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Testimonial Quote Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default TestimonialQuote
