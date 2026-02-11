import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const tabs = [
    { label: 'Overview', content: 'This is the overview section with general information.' },
    { label: 'Features', content: 'Key features and capabilities are described here.' },
    { label: 'Pricing', content: 'Pricing details and plans are available in this section.' },
  ]

  const componentPrompt = `Create a centered tabs component with the following design:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 3xl
- Pure white background

Content:
- Three tabs: "Overview", "Features", "Pricing"
- Each tab displays different content when clicked
- Tab navigation with underline style indicator

Visual Elements:
- Tab buttons with border-bottom styling
- Active tab: accent color underline, accent text
- Inactive tabs: transparent border, muted text with hover effect
- Content panel shows below tabs
- All content has proper spacing and typography

Interactions:
- Click tabs to switch content
- Active tab highlighted with underline
- ARIA attributes for accessibility (role="tab", aria-selected, aria-controls)

Colors:
- Use design system colors (accent, muted-foreground, foreground, border, background)
- Active tab: accent color with accent-foreground
- Inactive tabs: muted-foreground text

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const TabsComponent = () => (
    <div className="bg-background p-8 max-w-3xl w-full">
      <div className="flex gap-2 border-b border-border mb-6" role="tablist">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls={`panel-${idx}`}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border-b-2 ${
              activeTab === idx ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id={`panel-${activeTab}`} role="tabpanel" className="text-muted-foreground">
        {tabs[activeTab].content}
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
        <TabsComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Tabs Component Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Tabs
