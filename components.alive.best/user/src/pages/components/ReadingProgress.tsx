import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const ReadingProgress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('demo-article')
      if (!article) return

      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const scrollStart = articleTop
      const scrollEnd = articleTop + articleHeight - windowHeight

      const newProgress = Math.max(0, Math.min(100, ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100))
      setProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const componentPrompt = `Create a reading progress indicator component:

Layout:
- Position at top of page (fixed)
- Full width of viewport
- Centered component view when centered on page

Content:
- Progress bar that fills left to right as user scrolls through article
- Article body with sample content to scroll through

Visual Elements:
- Progress bar: Thin horizontal bar at top
- Starts empty, fills with color as user scrolls
- Smooth animation/transition as progress updates
- Color: Accent color from design system
- Background: Light, subtle color

Interactions:
- Automatically updates as user scrolls
- Progress percentage reflects document scroll position
- 0% at article start, 100% at article end

Colors:
- Progress bar fill: Accent color
- Progress bar background: Muted or subtle border color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const ReadingProgressComponent = () => (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Article content */}
      <div className="bg-background p-8 max-w-3xl w-full" id="demo-article">
        <article className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Future of Design</h2>

          <p className="text-muted-foreground mb-4">
            Design is constantly evolving, shaped by new technologies, changing user expectations, and innovative thinking. As designers, we find ourselves at the intersection of art and technology, creating experiences that not only look beautiful but also solve real problems.
          </p>

          <p className="text-muted-foreground mb-4">
            The rise of artificial intelligence and machine learning is opening new possibilities for personalization and automation in design. We can now create systems that adapt to individual user needs, learning from their behaviors and preferences.
          </p>

          <p className="text-muted-foreground mb-4">
            Accessibility has become increasingly important, and rightfully so. Every design decision we make should consider the diverse needs of our users, ensuring that our products are usable by everyone, regardless of their abilities.
          </p>

          <p className="text-muted-foreground mb-4">
            Sustainability is another crucial consideration. As designers, we have a responsibility to think about the environmental impact of our products and services, from the materials we use to the energy consumption of our digital platforms.
          </p>

          <p className="text-muted-foreground mb-4">
            Looking ahead, the most exciting opportunities lie in designing for emerging platforms and experiences. Virtual reality, augmented reality, and the metaverse are creating new canvases for creative expression and user interaction.
          </p>

          <p className="text-muted-foreground">
            The future of design is not just about creating beautiful interfaces—it's about creating meaningful experiences that make a positive impact on people's lives. As we continue to push the boundaries of what's possible, let's keep our focus on our users and the real problems we're solving.
          </p>
        </article>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center relative">
      <Link to="/components" className="absolute top-8 left-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1 z-40">
        ← All components
      </Link>

      <div className="absolute top-8 right-8 flex gap-2 z-40">
        <PromptButton onClick={() => setIsModalOpen(true)}>
          See prompt
        </PromptButton>
        <PromptButton onClick={handleCopyPrompt} isCopied={isCopied}>
          {isCopied ? 'Copied!' : 'Copy prompt'}
        </PromptButton>
      </div>

      <div className="border border-border rounded-[--radius] overflow-hidden">
        <ReadingProgressComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Reading Progress Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ReadingProgress
