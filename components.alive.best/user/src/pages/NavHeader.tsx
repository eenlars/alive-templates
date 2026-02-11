import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../components/PromptButton'
import { PromptModal } from '../components/PromptModal'

const NavHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const componentPrompt = `Create a centered navigation header component with the following exact specifications:

PAGE STRUCTURE:
- Full HTML document with proper DOCTYPE and meta tags
- Page title: "Navigation Header Component - Component Library"
- Pure white background (#ffffff)
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Min-height: 100vh
- Centered content area with flexbox

HEADER ELEMENT:
- Background: white (#ffffff)
- Container max-width: 80rem (1280px)
- Horizontal padding: 1.5rem (24px) on mobile, 2rem (32px) on large screens
- Vertical padding: 1.5rem (24px)

NAVIGATION BAR (nav):
- Layout: flex, items-center, justify-between
- Max-width: 80rem (1280px)
- Horizontal margin: auto (centered)
- Padding: 1.5rem (24px)
- Large screens padding: 1.5rem to 2rem (24px to 32px)

LEFT SECTION (Logo):
- Container: flex, lg:flex-1
- Logo element: -m-1.5 p-1.5 padding
- Logo image dimensions: height 2rem (32px), width auto
- Replace image with neutral gradient block: linear gradient from #e5e7eb to #d1d5db
- Size: 32px x 32px

MOBILE MENU BUTTON:
- Display: flex on mobile, hidden on large screens (lg:hidden)
- Padding: -m-2.5 inline-flex items-center justify-center
- Border radius: rounded-md
- Text color: #374151 (gray-700)
- Icon size: 24px (size-6)
- Menu icon: three horizontal lines (hamburger)
- Icon stroke-width: 1.5
- Icon viewBox: 0 0 24 24

DESKTOP NAVIGATION GROUP (hidden on mobile):
- Display: hidden on mobile, flex on large screens (hidden lg:flex lg:gap-x-12)
- Layout: flex, horizontal gap 3rem (12*1rem)

PRODUCT DROPDOWN:
- Button styling: flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900
- Dropdown icon: size-5 flex-none, text-gray-400
- Icon: chevron down
- Popover positioning: bottom anchor
- Popover styling: w-screen max-w-md, rounded-3xl, bg-white, shadow-lg, outline-1 outline-gray-900/5
- Popover content padding: 1rem (16px)

DROPDOWN ITEMS (5 product items):
Item structure for each:
- Container: group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50
- Icon box: size-11 (44px), flex items-center justify-center, rounded-lg bg-gray-50, group-hover:bg-white
- Icon styling: size-6, text-gray-600, group-hover:text-blue-600
- Title styling: block font-semibold text-gray-900
- Description styling: mt-1 text-gray-600

Dropdown items:
1. Icon: pie chart, Title: "Reporting", Description: "Comprehensive analytics and detailed insights"
2. Icon: target/star, Title: "Engagement", Description: "Connect with your audience effectively"
3. Icon: shield, Title: "Protection", Description: "Enterprise-grade security features"
4. Icon: grid/integrations, Title: "Integration", Description: "Seamless third-party connections"
5. Icon: refresh/automation, Title: "Workflow", Description: "Intelligent process automation"

POPOVER FOOTER:
- Grid: grid-cols-2 divide-x divide-gray-900/5 bg-gray-50
- Left button: "View tutorial" with video icon
- Right button: "Get support" with phone icon
- Button styling: flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100

MAIN NAVIGATION LINKS (desktop):
- Text: "Features", "Marketplace", "Company"
- Styling: text-sm/6 font-semibold text-gray-900
- Gap between items: inherited from parent flex

RIGHT SECTION (Sign In):
- Display: hidden on mobile, flex on large screens (hidden lg:flex lg:flex-1 lg:justify-end)
- Link text: "Get started" with arrow symbol "→"
- Styling: text-sm/6 font-semibold text-gray-900

MOBILE MENU (dialog):
- Display: hidden on mobile by default, shown when button clicked
- Position: fixed, inset-y-0 right-0
- Z-index: 50
- Width: 100% on small screens, max 28rem (448px) on small-up
- Background: white
- Ring: 1px ring-gray-900/10 (sm:ring-1)
- Overflow: overflow-y-auto
- Padding: 1.5rem (24px)

MOBILE MENU HEADER:
- Layout: flex items-center justify-between
- Logo: same as desktop
- Close button: -m-2.5 rounded-md p-2.5 text-gray-700
- Close icon: size-6, X symbol

MOBILE MENU CONTENT:
- Layout: mt-6 flow-root
- Sections divided: -my-6 divide-y divide-gray-500/10
- Products section: -mx-3, space-y-2 py-6
- Product toggle button: w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50
- Nested links: block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50
- Bottom section: py-6

MOBILE MENU LINKS:
- Product submenu items: "Reporting", "Engagement", "Protection", "Integration", "Workflow", "View tutorial", "Get support"
- Other links: "Features", "Marketplace", "Company"
- Sign in: "Get started" at bottom

COLORS:
- Primary background: white (#ffffff)
- Text primary: gray-900 (#111827)
- Text secondary: gray-700 (#374151)
- Text muted: gray-400 (#9ca3af)
- Text subtle: gray-600 (#4b5563)
- Hover background: gray-50 (#f9fafb)
- Hover background dark: gray-100 (#f3f4f6)
- Icon accent color: blue-600 (#2563eb)
- Border/divider: gray-900/5
- Gray-50 background: #f9fafb
- Logo gradient: linear gradient from #e5e7eb to #d1d5db

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const NavHeaderComponent = () => (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="h-8 w-8 rounded bg-gradient-to-r from-gray-300 to-gray-400"></div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-gray-400">
                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-screen max-w-md rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 z-10 mt-3">
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-blue-600">
                      <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Reporting
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Comprehensive analytics and detailed insights</p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-blue-600">
                      <path d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Engagement
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Connect with your audience effectively</p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-blue-600">
                      <path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Protection
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Enterprise-grade security features</p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-blue-600">
                      <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Integration
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Seamless third-party connections</p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-blue-600">
                      <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Workflow
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Intelligent process automation</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-gray-400">
                    <path d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  View tutorial
                </a>
                <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-gray-400">
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Get support
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Get started <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className="h-8 w-8 rounded bg-gradient-to-r from-gray-300 to-gray-400"></div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <button
                    type="button"
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Product
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-5 flex-none transition-transform ${productsOpen ? 'rotate-180' : ''}`}>
                      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="mt-2 block space-y-2">
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Reporting</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Engagement</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Protection</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Integration</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Workflow</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">View tutorial</a>
                      <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Get support</a>
                    </div>
                  )}
                </div>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Get started</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
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

      <div className="border border-border rounded-[--radius] overflow-hidden w-full max-w-4xl">
        <NavHeaderComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Navigation Header Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default NavHeader
