import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const CareersHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a new component page with the following design:

Layout:
- Center the entire component vertically and horizontally on the page
- Use a white background

Content Structure:
- Large heading: "Join our mission"
- Subheading: "We're building the future of sustainable technology with innovative people who share our vision."
- Four navigation links: "Open positions", "Internship program", "Company culture", "Meet the team"
- Four stat blocks (grid layout) showing:
  * 28 (Offices worldwide)
  * 450+ (Team members)
  * 35 (Hours per week)
  * Unlimited (Paid time off)

Visual Elements:
- Background: Pure white with subtle gradient overlay (use geometric shapes with low opacity)
- Decorative blurred shapes: Two colorful gradient blobs positioned in background (pink to purple, low opacity)
- Hero image area: Replace the photograph with a neutral gray gradient block
- Stats: Display in a responsive grid (1 column on mobile, 2 columns on tablet, 4 columns on desktop)

Typography:
- Heading: Large, bold, dark text
- Subheading: Medium weight, gray text
- Navigation links: Semibold with arrow indicators
- Stats: Large numbers in bold, smaller labels in gray

Colors:
- Use your design system's primary, secondary, and accent colors (avoid hardcoded colors)
- Maintain proper color hierarchy and contrast

Responsive Design:
- Mobile: Single column layout
- Tablet: Two column layout for stats
- Desktop: Full multi-column layout with grid stats

The component should be centered both vertically and horizontally on the page with proper spacing.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const CareersPreview = () => (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 w-full">
      {/* Background decorative shapes */}
      <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div style={{ aspectRatio: '1097/845', width: '274.25rem' }} className="rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 opacity-15"></div>
      </div>
      <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div style={{ aspectRatio: '1097/845', width: '274.25rem' }} className="rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 opacity-15"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Join our mission</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">We're building the future of sustainable technology with innovative people who share our vision for positive change.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#" className="hover:text-gray-600 transition-colors">Open positions <span aria-hidden="true">&rarr;</span></a>
            <a href="#" className="hover:text-gray-600 transition-colors">Internship program <span aria-hidden="true">&rarr;</span></a>
            <a href="#" className="hover:text-gray-600 transition-colors">Company culture <span aria-hidden="true">&rarr;</span></a>
            <a href="#" className="hover:text-gray-600 transition-colors">Meet the team <span aria-hidden="true">&rarr;</span></a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-700">Offices worldwide</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">28</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-700">Team members</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">450+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-700">Hours per week</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">35</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-700">Paid time off</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">Unlimited</dd>
            </div>
          </dl>
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
        <CareersPreview />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Careers Hero Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default CareersHero
