import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const EventAnnouncement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create an event announcement banner component:

Layout
- Center the entire component vertically and horizontally on the page
- Pure white background for the page

Banner Structure
- Relative positioned container with isolated stacking context
- Horizontal flex layout with centered items
- Gap between elements (x-direction: 1.5rem, y-direction: 0.5rem)
- Gray background (RGB: 249, 250, 251)
- Horizontal padding: 1.5rem (desktop), 0.875rem (mobile)
- Vertical padding: 0.625rem
- Responsive column-based wrapping

Decorative Gradient Blurs
- Two animated gradient blur elements positioned absolutely behind content (z-index: -10)
- Top-left gradient: positioned at top 50%, left -7rem on desktop
- Top-right gradient: positioned at top 50%, right 45rem on desktop
- Gradient: Linear from pink (#ff80b5) to purple (#9089fc)
- Opacity: 30%
- Blur: 2xl (64px)
- Aspect ratio: 577/310 with width 144.25rem
- Both use clip-path polygon for organic blob shape: "74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%"
- Transform: translate-y -50%

Content Section
- Flex wrap with gaps
- Left-aligned text and button group
- Text: Small body (0.875rem line-height: 1.5rem)
- Color: Dark gray (#111827)
- Structure: "Event Name [dot separator] Description" on one line
- Event name: Bold/semibold
- Dot separator: SVG circle (2x2 viewBox, 1 radius, centered)
- Margin: 0.5rem inline
- Button: Rounded full, dark background (#111827), white text, shadow-xs
- Button padding: 0.875rem 0.875rem
- Font: 0.875rem semibold
- Hover state: Darker background (#1f2937)
- Focus-visible: 2px outline with 2px offset

Close Button
- Positioned on the right
- Margin: -0.75rem (negative)
- Padding: 0.75rem
- Icon: SVR fill (size: 1.25rem)
- Color: Dark gray (#111827)
- Screen reader text: "Dismiss"

Text & Numbers
Change all names, labels, titles, body text, and numbers to different but still logical content. Keep all typography, structure, and formatting exactly the same.

Colors
Change all colors, but keep the same roles and hierarchy (e.g., primary backgrounds, secondary text, accents). Choose colors that are logical for the context. Do not change spacings, borders, or any other layout formatting.

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const EventAnnouncementComponent = () => (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      {/* Gradient blur decorations */}
      <div aria-hidden="true" className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div style={{
          clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          aspectRatio: '577/310',
          width: '36.027rem',
          background: 'linear-gradient(to right, #ff80b5, #9089fc)',
          opacity: 0.3,
        }} />
      </div>
      <div aria-hidden="true" className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div style={{
          clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          aspectRatio: '577/310',
          width: '36.027rem',
          background: 'linear-gradient(to right, #ff80b5, #9089fc)',
          opacity: 0.3,
        }} />
      </div>

      {/* Content */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">TechSummit 2024</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r="1" cx="1" cy="1" />
          </svg>
          Join us in San Francisco from August 12 – 14 to experience the future of technology.
        </p>
        <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
          Learn more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Close button */}
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 text-gray-900">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center relative">
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

      <div className="w-full">
        <EventAnnouncementComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Event Announcement Banner Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default EventAnnouncement
