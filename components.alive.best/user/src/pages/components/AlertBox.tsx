import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const AlertBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create an alert box component:

Layout
- Center the entire component vertically and horizontally on the page
- Pure white background

Alert Container
- Border: 1px solid, color varies by alert type
- Border radius: medium (rounded-md)
- Background: Light tint of alert color
- Padding: 1rem (16px) all sides
- Box shadow: sm
- Role: alert (ARIA)
- Flex layout with items-start alignment

Alert Layout
- Flex row with gap between icon and content
- Icon and content are main columns
- Icon column: flex-shrink-0

Icon Section
- SVG icon, 24px (size-6)
- Positioned at top (-mt-0.5)
- Color: darker shade matching alert type
- Icon type varies by alert severity:
  - Error/Danger: Exclamation in circle
  - Warning: Triangle with exclamation
  - Success: Checkmark in circle
  - Info: Info symbol in circle

Content Section
- Flex-1 to take remaining space
- Two-part structure: title and description

Title
- Bold strong tag
- Display: block
- Line-height: tight
- Font weight: medium
- Text color: dark shade of alert type
- Text: "Error", "Warning", "Success", "Information", etc.

Description
- Top margin: 0.5rem (mt-0.5)
- Font size: small (text-sm)
- Text color: medium shade of alert type
- Body text content

Alert Type Variants
Error/Danger variant:
- Border color: #ef4444 (red-500)
- Background: #fef2f2 (red-50)
- Icon color: #b91c1c (red-700)
- Title color: #991b1b (red-800)
- Text color: #b91c1c (red-700)

Warning variant:
- Border color: #eab308 (yellow-500)
- Background: #fefce8 (yellow-50)
- Icon color: #854d0e (yellow-700)
- Title color: #78350f (yellow-800)
- Text color: #854d0e (yellow-700)

Success variant:
- Border color: #22c55e (green-500)
- Background: #f0fdf4 (green-50)
- Icon color: #15803d (green-700)
- Title color: #166534 (green-800)
- Text color: #15803d (green-700)

Info variant:
- Border color: #3b82f6 (blue-500)
- Background: #eff6ff (blue-50)
- Icon color: #1e40af (blue-700)
- Title color: #1e3a8a (blue-800)
- Text color: #1e40af (blue-700)

Text & Numbers
Change all text content to different but logical alert messages. Keep typography, structure, and spacing exactly the same. Use appropriate context for each alert type.

Colors
Change color scheme while maintaining role hierarchy:
- Keep alert type semantics (error/warning/success/info)
- Use different color palette for each type
- Maintain contrast and accessibility

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const AlertBoxComponent = () => (
    <div className="rounded-md border border-amber-500 bg-amber-50 p-4 shadow-sm" role="alert">
      <div className="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-mt-0.5 size-6 text-amber-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c.866-1.9.969-4.130.38-6.513a6.75 6.75 0 1 1 12.84 0c-.59 2.384-.514 4.612.38 6.513M9 16.5h6m-3-3h.008v.008H12v-.008Z"></path>
        </svg>

        <div className="flex-1">
          <strong className="block leading-tight font-medium text-amber-800">Warning</strong>

          <p className="mt-0.5 text-sm text-amber-700">
            Your session will expire in 5 minutes due to inactivity. Please save your work to avoid losing any changes.
          </p>
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

      <div className="w-full max-w-md">
        <AlertBoxComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Alert Box Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default AlertBox
