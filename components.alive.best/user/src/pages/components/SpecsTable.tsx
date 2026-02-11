import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const SpecsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const specs = [
    { key: 'Material', value: 'Aluminum' },
    { key: 'Weight', value: '1.2 kg' },
    { key: 'Dimensions', value: '30 × 20 × 5 cm' },
    { key: 'Color', value: 'Space Gray' },
    { key: 'Battery', value: '10 hours' },
    { key: 'Warranty', value: '2 years' },
  ]

  const componentPrompt = `Create a centered specifications table component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 3xl
- Pure white background

Content:
- Heading: "Technical Specifications"
- Six specification items in a two-column grid:
  1. Material: Aluminum
  2. Weight: 1.2 kg
  3. Dimensions: 30 × 20 × 5 cm
  4. Color: Space Gray
  5. Battery: 10 hours
  6. Warranty: 2 years

Visual Elements:
- Heading: Large, bold, dark text
- Grid layout with 2 columns
- Each spec item in a bordered card box
- Spec key (label): Bold, dark text
- Spec value: Regular weight, gray text
- Cards have borders and padding
- Proper spacing between all items

Colors:
- Use design system colors (foreground, muted-foreground, border, background)
- Heading: Foreground color
- Keys: Foreground color (bold)
- Values: Muted-foreground color
- Card borders: Border color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const SpecsTableComponent = () => (
    <div className="bg-background p-8 max-w-3xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>

      <dl className="grid grid-cols-2 gap-4">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="border border-border rounded-[--radius] p-3"
          >
            <dt className="font-medium text-foreground">{spec.key}</dt>
            <dd className="text-muted-foreground mt-1">{spec.value}</dd>
          </div>
        ))}
      </dl>
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
        <SpecsTableComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Specs Table Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default SpecsTable
