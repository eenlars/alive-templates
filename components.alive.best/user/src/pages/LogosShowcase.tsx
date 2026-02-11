import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../components/PromptButton'
import { PromptModal } from '../components/PromptModal'

const LogosShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered logos showcase component with the following exact specifications:

PAGE STRUCTURE:
- Full HTML document with proper DOCTYPE and meta tags
- Page title: "Logos Showcase Component - Component Library"
- Pure white background (#ffffff)
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Min-height: 100vh
- Centered content area with flexbox

OUTER CONTAINER:
- Background: white
- Padding: vertical 6rem (24*16px), horizontal auto
- Responsive: vertical padding 9rem on larger screens

INNER CONTAINER:
- Max-width: 80rem (1280px)
- Horizontal padding: 1.5rem (24px)
- Margin: 0 auto (centered)

HEADER SECTION:
- Heading text: "Trusted by industry-leading organizations"
- Heading styling:
  * Font size: 1.125rem (18px)
  * Line height: 2 (8px)
  * Font weight: 600 (semibold)
  * Text color: #1f2937 (gray-900)
  * Text alignment: center
  * Margin bottom: 2.5rem (40px)

LOGOS GRID:
- Container: grid layout
- Max-width on mobile: 16rem (256px)
- Grid columns: 4 on mobile, 6 on small screens, 5 on large screens
- Gap horizontal: 2rem (32px) on desktop, 2.5rem (40px) on larger screens
- Gap vertical: 2.5rem (40px) on desktop, 2.5rem on larger screens
- Margin auto for centering
- Responsive breakpoints:
  * Mobile: 4 columns, max-width 256px
  * Small screens: 6 columns, max-width 448px
  * Large screens: no max-width constraint, 5 columns

LOGO ITEMS:
Five logo placeholders with following structure:
1. Organization A (col-span-2 on mobile, col-span-1 on large)
2. Organization B (col-span-2 on mobile, col-span-1 on large)
3. Organization C (col-span-2 on mobile, col-span-1 on large)
4. Organization D (col-span-2 on mobile, col-start-2 on mobile, col-span-1 on large)
5. Organization E (col-span-2 on mobile, col-start-2 on mobile, col-span-1 on large)

INDIVIDUAL LOGO STYLING:
- Image dimensions: width="158" height="48"
- Max-height: 3rem (48px)
- Width: 100%
- Object-fit: contain
- Responsive column spans as noted above

LOGO IMAGES:
Replace with neutral gray gradient blocks:
1. Gradient block 1: Linear gradient from #d1d5db to #e5e7eb
2. Gradient block 2: Linear gradient from #d1d5db to #9ca3af
3. Gradient block 3: Linear gradient from #9ca3af to #e5e7eb
4. Gradient block 4: Linear gradient from #d1d5db to #f3f4f6
5. Gradient block 5: Linear gradient from #e5e7eb to #9ca3af

COLORS:
- Primary background: white (#ffffff)
- Text: gray-900 (#1f2937)
- Neutral gradient blocks instead of images
- All color hierarchy maintained

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const LogosShowcaseComponent = () => (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">Trusted by industry-leading organizations</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2 max-h-12 w-full bg-gradient-to-r from-gray-300 to-gray-400 rounded lg:col-span-1"></div>
          <div className="col-span-2 max-h-12 w-full bg-gradient-to-r from-gray-300 to-gray-600 rounded lg:col-span-1"></div>
          <div className="col-span-2 max-h-12 w-full bg-gradient-to-r from-gray-600 to-gray-400 rounded lg:col-span-1"></div>
          <div className="col-span-2 max-h-12 w-full bg-gradient-to-r from-gray-300 to-gray-200 rounded sm:col-start-2 lg:col-span-1"></div>
          <div className="col-span-2 col-start-2 max-h-12 w-full bg-gradient-to-r from-gray-400 to-gray-600 rounded sm:col-start-auto lg:col-span-1"></div>
        </div>
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

      <div className="border border-border rounded-[--radius] overflow-hidden">
        <LogosShowcaseComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Logos Showcase Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default LogosShowcase
