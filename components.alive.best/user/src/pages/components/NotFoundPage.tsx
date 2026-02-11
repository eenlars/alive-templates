import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const NotFoundPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered error page layout:

Layout Structure
- Grid layout with place-items-center for vertical and horizontal centering
- Minimum height: full screen (min-h-full)
- Background: Pure white (#ffffff)
- Padding: 1.5rem horizontal, 6rem vertical (desktop), 8rem vertical (mobile)

Content Container
- Text centered alignment
- Maximum width: auto (content-based)

Error Code Section
- Text: "404" or similar error code
- Font size: base (1rem)
- Font weight: semibold
- Color: Primary accent color (indigo/blue tone)

Heading Section
- Text: "Page not found" or similar message
- Font size: 3rem (mobile: sm:text-7xl, desktop larger)
- Font weight: semibold
- Letter spacing: tight
- Text balancing: enabled (text-balance)
- Color: Dark gray/charcoal (#111827)
- Top margin: 1rem (mt-4)

Description Section
- Text: "Sorry, we couldn't find the page you're looking for."
- Font size: 1.125rem (body), 1.25rem (desktop: sm:text-xl/8)
- Font weight: medium
- Text pretty: enabled (text-pretty)
- Color: Medium gray (#6b7280)
- Top margin: 1.5rem (mt-6)
- Line height: 2 (text-xl/8)

Action Section
- Flex layout, centered alignment
- Gap between buttons: 1.5rem (gap-x-6)
- Top margin: 2.5rem (mt-10)

Primary Button
- Text: "Go back home" or similar
- Background: Primary accent color (indigo)
- Text color: White
- Padding: 0.625rem (py) 0.875rem (px): px-3.5 py-2.5
- Border radius: medium (rounded-md)
- Font size: 0.875rem (text-sm)
- Font weight: semibold
- Shadow: xs (shadow-xs)
- Hover: Darker accent color
- Focus-visible: 2px outline with 2px offset in accent color

Secondary Button
- Text: "Contact support" or similar with arrow
- Background: Transparent (no background)
- Text color: Dark gray (#111827)
- Font size: 0.875rem (text-sm)
- Font weight: semibold
- Arrow icon: "→" (aria-hidden)
- Hover: Subtle color shift
- Focus-visible: Standard outline

Text & Numbers
Change all text content to different but logical alternatives. Keep typography, structure, and spacing exactly the same.

Colors
Change color scheme while maintaining role hierarchy:
- Error code color: Different primary accent (not indigo)
- Button backgrounds: Different primary color
- Text colors: Different dark and medium grays
- Maintain contrast and accessibility

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const NotFoundComponent = () => (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-rose-600">500</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Server error</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Something went wrong on our end. Please try again in a moment.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Return home</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Report issue <span aria-hidden="true">&rarr;</span></a>
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
        <NotFoundComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Not Found Page Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default NotFoundPage
