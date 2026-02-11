import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const ErrorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a 404 error page component:

Layout
- Center the entire component vertically and horizontally on the page
- Pure white background
- Grid layout using place-items-center
- Minimum height: full screen
- Padding: 1.5rem horizontal, 6rem vertical (desktop), 8rem vertical (mobile)

Content Structure
- Text-centered container

Error Code
- Text: "404"
- Font size: base
- Font weight: semibold
- Color: Primary accent color (indigo)

Heading
- Text: "Page not found"
- Font size: 3rem (mobile), 4.5rem (desktop)
- Font weight: semibold
- Letter spacing: tight
- Text balancing: enabled
- Color: Dark gray/charcoal (#111827)
- Top margin: 1rem

Description
- Text: "Sorry, we couldn't find the page you're looking for."
- Font size: 1.125rem (mobile), 1.25rem (desktop)
- Font weight: medium
- Text pretty: enabled
- Color: Medium gray (#6b7280)
- Top margin: 1.5rem

Action Section
- Flex layout, centered
- Gap between buttons: 1.5rem
- Top margin: 2.5rem

Primary Button (Go back home)
- Background: Primary accent color (indigo)
- Text color: White
- Padding: 0.625rem 0.875rem
- Border radius: medium
- Font size: 0.875rem
- Font weight: semibold
- Shadow: xs
- Hover: Darker accent color
- Focus-visible: 2px outline with 2px offset in accent color

Secondary Button (Contact support)
- Background: Transparent (no background)
- Text color: Dark gray (#111827)
- Font size: 0.875rem
- Font weight: semibold
- Arrow icon: "→" (aria-hidden)
- Hover: Subtle color change
- Focus-visible: Standard outline

Text & Numbers
Change all text content to different but logical alternatives. Keep typography, structure, and spacing exactly the same.

Colors
Change color scheme while maintaining role hierarchy:
- Primary accent: Use a different color (not indigo) but keep primary emphasis role
- Secondary text: Use a different medium gray
- Dark text: Use a different dark color
- Maintain contrast and accessibility

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const ErrorPageComponent = () => (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-purple-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Go back home</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </main>
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
        <ErrorPageComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Error Page Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ErrorPage
