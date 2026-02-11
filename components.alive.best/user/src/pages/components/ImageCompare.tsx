import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const ImageCompare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)

  const componentPrompt = `Create a centered before/after image comparison component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 4xl
- Pure white background
- Horizontal slider layout

Content:
- Heading: "Before & After"
- Two image areas (before and after) with slider divider
- Interactive horizontal slider to compare images

Visual Elements:
- Container with rounded corners
- "Before" side on the left (gradient background)
- "After" side on the right (clipped by slider position)
- Vertical slider handle in the middle that can be dragged
- Both sides labeled "Before" and "After"
- Smooth transitions when sliding
- Responsive to user interaction

Interactions:
- Mouse drag on slider to move divider left/right
- Slider position updates in real-time as user drags
- Default position: 50% (middle)

Colors:
- Use design system colors (foreground, muted-foreground, accent, background, border)
- Before area: Gradient from muted to border
- After area: Similar gradient or solid color
- Labels: Muted-foreground text
- Slider handle: Accent color or highlighted area

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const ImageCompareComponent = () => (
    <div className="bg-background p-8 max-w-4xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-6">Before & After</h2>

      <div className="relative aspect-video bg-muted rounded-[--radius] overflow-hidden">
        {/* Before */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-border">
          <span className="text-muted-foreground font-medium">Before</span>
        </div>

        {/* After - clipped by slider position */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-tl from-accent/20 to-accent/5"
          style={{ right: `${100 - sliderPosition}%` }}
        >
          <span className="text-accent font-medium">After</span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize hover:w-2 transition-all"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => {
            const startX = e.clientX
            const startPos = sliderPosition
            const container = e.currentTarget.parentElement
            if (!container) return

            const handleMouseMove = (moveEvent: MouseEvent) => {
              const rect = container.getBoundingClientRect()
              const newPos = ((moveEvent.clientX - rect.left) / rect.width) * 100
              setSliderPosition(Math.max(0, Math.min(100, newPos)))
            }

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove)
              document.removeEventListener('mouseup', handleMouseUp)
            }

            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
          }}
        />
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
        <ImageCompareComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Image Compare Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ImageCompare
