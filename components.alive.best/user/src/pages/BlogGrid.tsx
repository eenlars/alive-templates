import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../components/PromptButton'
import { PromptModal } from '../components/PromptModal'

const BlogGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a centered blog grid component with the following exact specifications:

PAGE STRUCTURE:
- Full HTML document with proper DOCTYPE and meta tags
- Page title: "Blog Grid Component - Component Library"
- Pure white background (#ffffff)
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Min-height: 100vh
- Centered content area with flexbox

OUTER CONTAINER:
- Background: white
- Padding: vertical 6rem (96px), horizontal auto
- Responsive: vertical padding 8rem on larger screens

INNER CONTAINER:
- Max-width: 80rem (1280px)
- Horizontal padding: 1.5rem (24px)
- Margin: 0 auto (centered)

HEADER SECTION:
- Heading text: "Latest insights and updates"
- Heading styling:
  * Font size: 2.25rem (36px) / 3.75rem (60px) on larger screens
  * Line height: 2.5rem (40px) / 4rem (64px) on larger screens
  * Font weight: 600 (semibold)
  * Text color: #111827 (gray-900)
  * Tracking tight (letter-spacing: -0.02em)
  * Margin bottom: 1rem (16px)
- Description text: "Stay informed with our latest articles and industry insights"
- Description styling:
  * Font size: 1.125rem (18px)
  * Line height: 2rem (32px)
  * Text color: #4b5563 (gray-600)
  * Margin bottom: 0

BORDER DIVIDER:
- Horizontal border separating header from articles
- Border color: #e5e7eb (gray-200)
- Margin top: 2.5rem (40px)
- Margin bottom: 2.5rem (40px)

ARTICLES GRID:
- Container: grid layout
- Grid columns: 1 on mobile, 3 on large screens
- Gap horizontal: 2rem (32px)
- Gap vertical: 4rem (64px)
- Max-width container: 42rem (672px) on mobile, none on large
- Margin: 0 auto on large screens
- Margin top: 2.5rem (40px) on mobile, 4rem (64px) on larger screens
- Margin bottom (padding): 2.5rem (40px) on mobile, 4rem (64px) on larger screens

ARTICLE CARD STRUCTURE:
Each article card has the following structure:
1. Metadata row (date and category tag)
2. Title heading
3. Description text
4. Author section at bottom

METADATA ROW:
- Container: flex, gap 1rem (16px), items-center
- Date styling:
  * Font size: 0.75rem (12px)
  * Text color: #6b7280 (gray-500)
- Category tag styling:
  * Border radius: 9999px (full)
  * Background: #f9fafb (gray-50)
  * Padding: 0.375rem 0.75rem (6px 12px)
  * Font weight: 500 (medium)
  * Text color: #4b5563 (gray-600)
  * Font size: 0.875rem (14px)

ARTICLE TITLE:
- Heading element: h3
- Font size: 1.125rem (18px) / 1.3125rem (21px) on larger screens
- Line height: 1.5rem (24px) / 1.5rem (24px)
- Font weight: 600 (semibold)
- Text color: #111827 (gray-900)
- Hover color on link: #4b5563 (gray-600)
- Margin top: 0.75rem (12px)
- Link has absolute inset positioning for full card click area
- Group hover effect applied to title

ARTICLE DESCRIPTION:
- Font size: 0.875rem (14px)
- Line height: 1.5rem (24px)
- Text color: #4b5563 (gray-600)
- Margin top: 1.25rem (20px)
- Line clamp: 3 lines
- Growing flex child to push author section to bottom

AUTHOR SECTION (at bottom):
- Container: flex, gap 1rem (16px), items-center
- Margin top: 2rem (32px)
- Author image:
  * Dimensions: 40px x 40px
  * Border radius: 9999px (full)
  * Background: #f3f4f6 (gray-50)
  * Replace image with neutral gradient block: linear gradient from #d1d5db to #e5e7eb
- Author name styling:
  * Font weight: 600 (semibold)
  * Text color: #111827 (gray-900)
  * Font size: 0.875rem (14px)
  * Line height: 1.5rem (24px)
- Author title/role styling:
  * Text color: #4b5563 (gray-600)
  * Font size: 0.875rem (14px)
  * Line height: 1.5rem (24px)

ARTICLE CONTENT (3 articles with different content):

Article 1:
- Date: "Jan 15, 2024"
- Category: "Strategy"
- Title: "Building sustainable growth strategies"
- Description: "Learn proven strategies for scaling your business sustainably while maintaining quality and team morale throughout growth phases."
- Author name: "Sarah Mitchell"
- Author role: "Strategy Consultant"

Article 2:
- Date: "Jan 8, 2024"
- Category: "Innovation"
- Title: "Embracing digital transformation"
- Description: "Discover how modern businesses are leveraging technology to stay competitive and create better customer experiences in the digital age."
- Author name: "James Chen"
- Author role: "Tech Lead"

Article 3:
- Date: "Dec 28, 2023"
- Category: "Leadership"
- Title: "Effective team leadership in remote environments"
- Description: "Explore best practices for leading remote teams successfully, including communication strategies, performance management, and building company culture."
- Author name: "Emma Rodriguez"
- Author role: "HR Director"

COLORS:
- Primary background: white (#ffffff)
- Text primary: gray-900 (#111827)
- Text secondary: gray-600 (#4b5563)
- Text muted: gray-500 (#6b7280)
- Tag background: gray-50 (#f9fafb)
- Border: gray-200 (#e5e7eb)
- Image placeholder: gradient from #d1d5db to #e5e7eb

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const BlogGridComponent = () => (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Latest insights and updates</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Stay informed with our latest articles and industry insights.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2024-01-15" className="text-gray-500">Jan 15, 2024</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Strategy</a>
            </div>
            <div className="group relative grow">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Building sustainable growth strategies
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Learn proven strategies for scaling your business sustainably while maintaining quality and team morale throughout growth phases.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <div className="size-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"></div>
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Sarah Mitchell
                  </a>
                </p>
                <p className="text-gray-600">Strategy Consultant</p>
              </div>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2024-01-08" className="text-gray-500">Jan 8, 2024</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Innovation</a>
            </div>
            <div className="group relative grow">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Embracing digital transformation
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Discover how modern businesses are leveraging technology to stay competitive and create better customer experiences in the digital age.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <div className="size-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-500"></div>
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    James Chen
                  </a>
                </p>
                <p className="text-gray-600">Tech Lead</p>
              </div>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2023-12-28" className="text-gray-500">Dec 28, 2023</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Leadership</a>
            </div>
            <div className="group relative grow">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Effective team leadership in remote environments
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Explore best practices for leading remote teams successfully, including communication strategies, performance management, and building company culture.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <div className="size-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-500"></div>
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Emma Rodriguez
                  </a>
                </p>
                <p className="text-gray-600">HR Director</p>
              </div>
            </div>
          </article>
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
        <BlogGridComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Blog Grid Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default BlogGrid
