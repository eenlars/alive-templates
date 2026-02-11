import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const DashboardLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create a dashboard layout component with sidebar and navbar:

Layout Structure
- Full screen responsive layout
- Fixed top navbar spanning full width
- Fixed left sidebar with responsive behavior
- Main content area that adjusts for sidebar
- Background: White

Top Navbar
- Fixed positioning, full width
- Background: White
- Border: Bottom border (light gray)
- Padding: 1rem (top/bottom), 1rem (left/right)
- Height: Auto with padding
- Z-index: 50
- Flex layout for responsive alignment

Navbar Left Section
- Hamburger menu button (visible on mobile only)
- Icon: 3 horizontal lines (hamburger)
- Button styling: p-2 rounded, cursor-pointer
- Brand/logo section with text
- Hidden search form on mobile, visible on desktop

Navbar Right Section
- Search icon button
- Notifications bell icon button
- Apps grid icon button with dropdown
- User profile avatar button with dropdown menu
- Proper spacing and alignment

Sidebar
- Fixed left positioning, h-screen
- Width: 16rem (64)
- Top offset: 56px (pt-14) for navbar
- Background: White
- Border-right: Light gray border
- Z-index: 40
- Transform: -translate-x-full on mobile, translate-x-0 on md+
- Smooth transition
- Scrollable content area with py-5 px-3

Sidebar Navigation
- Search form (visible on mobile only)
- Multiple collapsible sections with dropdowns
- List items with icons and text
- Hover background color effect
- Nested menu items with proper padding (pl-11 for nested)
- Icon sizing: w-6 h-6
- Text styling: text-base font-medium

Sidebar Bottom Section
- Absolute bottom positioning
- Language/locale dropdown with flag icons
- Settings and help buttons
- Hidden on small screens (hidden lg:flex)

Main Content Area
- Margin-left: md:ml-64 (adjusts for sidebar)
- Padding: p-4
- Min height: h-auto
- Padding-top: pt-20 (below navbar)
- Grid layouts for content cards
- 4-column grid on large screens, 2 on medium, 1 on small
- Dashed border content placeholders

Text & Numbers
Change all text content to different but logical alternatives. Keep typography, structure, and spacing exactly the same.

Colors
Change color scheme while maintaining role hierarchy:
- Primary backgrounds: Different color than current
- Secondary/hover states: Adjust accordingly
- Text colors: Different neutrals while maintaining contrast
- Borders: Different gray tone
- Icons and accents: Logical alternatives
- Maintain dark mode color patterns

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const DashboardComponent = () => (
    <div className="antialiased bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
            <a href="#" className="flex items-center justify-between mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">DataHub</span>
            </a>
            <form className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="relative md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input type="text" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Search" />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2 gap-3">
            <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <button className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0">
              <span className="sr-only">Open user menu</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          <form className="md:hidden mb-2">
            <label htmlFor="sidebar-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <input type="text" id="sidebar-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2" placeholder="Search" />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Content</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Documents</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Analytics</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Reports</a></li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Transactions</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul id="dropdown-sales" className="hidden py-2 space-y-2">
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Orders</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Payments</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Receipts</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-blue-800 bg-blue-100">3</span>
              </a>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-3">Resources</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span className="ml-3">UI Kit</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64"></div>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 mb-4"></div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-72"></div>
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
        title="Dashboard Layout Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default DashboardLayout
