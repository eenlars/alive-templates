import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const DashboardLayout2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a minimal dashboard layout with clean typography and spacious design:

Layout Structure
- Full screen minimal layout
- No traditional sidebar navigation
- Horizontal top bar with minimal styling
- Main content area with generous whitespace
- Background: Pure white (#ffffff)
- Font family: Helvetica, Arial, sans-serif throughout

Top Navigation Bar
- Fixed positioning, full width
- Background: White with 1px bottom border only
- Border color: #e5e5e5 (subtle light gray)
- Padding: 1rem 2rem
- Z-index: 50
- Flex layout with space-between
- Minimal height and visual weight

Navbar Left Section
- Single text logo/wordmark only
- Font: Helvetica bold, 1.25rem
- Color: Black (#000000)
- No icon, no branding element

Navbar Right Section
- Three text-based buttons only (no icons)
- Font: Helvetica regular, 0.875rem
- Button text in gray, hover to black
- Spacing: 2rem gap between buttons
- No background, no borders

Main Content Area
- Margin: 0 auto
- Max-width: 1200px
- Padding: 4rem 2rem
- Min height: calc(100vh - 64px)
- Font family: Helvetica throughout

Content Structure
- Minimal card-based layout
- Cards have no shadow, only 1px border
- Border color: #f0f0f0 (very light gray)
- Card padding: 2rem
- Spacing between cards: 2rem
- Background inside cards: White

Typography
- Headings: Helvetica bold
- Body text: Helvetica regular, 0.875rem line-height: 1.6
- Text color: #333333 (dark gray, not pure black for body)
- All text uses Helvetica font family

Grid Layout
- Single column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Large gaps between items (2rem)

Text & Numbers
Change all text content to completely different domain/context. Use different terminology, labels, and data. Keep the minimal structure and spacing exactly the same. Make it completely unrecognizable from the original.

Colors
Change color scheme while maintaining minimalism:
- Border colors: Different subtle gray
- Text colors: Different dark tone
- Hover states: Subtle color shift
- Background: Pure white or different off-white tone
- Maintain high contrast for accessibility

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const DashboardComponent = () => (
    <div style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }} className="bg-white">
      {/* Minimal Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-white border-b" style={{ borderColor: '#e5e5e5' }}>
        <div className="flex justify-between items-center px-8 py-4">
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000' }}>
            Portfolio
          </div>
          <div className="flex gap-8">
            <button style={{ fontSize: '0.875rem', color: '#666666' }} className="hover:text-black transition">
              Projects
            </button>
            <button style={{ fontSize: '0.875rem', color: '#666666' }} className="hover:text-black transition">
              Archive
            </button>
            <button style={{ fontSize: '0.875rem', color: '#666666' }} className="hover:text-black transition">
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ marginTop: '64px', minHeight: 'calc(100vh - 64px)', maxWidth: '1200px', padding: '4rem 2rem', margin: '64px auto 0' }} className="mx-auto">
        {/* Header Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
            Selected Works
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6' }}>
            A curated collection of recent projects and case studies
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Project 1 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Mobile App
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              Client Portal
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Designed and developed a comprehensive client management application for a fintech startup
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2024</div>
          </div>

          {/* Project 2 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Web Design
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              Brand Identity
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Complete visual identity system including logo, typography, and design guidelines
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2024</div>
          </div>

          {/* Project 3 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Full Stack
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              Data Platform
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Built a real-time analytics platform handling millions of data points daily
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2023</div>
          </div>

          {/* Project 4 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              UX Research
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              User Study
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Conducted extensive user research and usability testing across multiple markets
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2023</div>
          </div>

          {/* Project 5 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Branding
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              Marketing Campaign
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Multi-channel marketing campaign with social media, print, and digital components
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2023</div>
          </div>

          {/* Project 6 */}
          <div style={{ border: '1px solid #f0f0f0', padding: '2rem', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.75rem', color: '#999999', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Consulting
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000000', marginBottom: '0.5rem' }}>
              Strategy Session
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Strategic planning and digital transformation consulting for enterprise clients
            </p>
            <div style={{ fontSize: '0.75rem', color: '#999999' }}>2023</div>
          </div>
        </div>
      </main>
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

      <div className="w-full h-screen overflow-hidden">
        <DashboardComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Dashboard Layout 2 Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default DashboardLayout2
