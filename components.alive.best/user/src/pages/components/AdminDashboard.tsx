import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const componentPrompt = `Create an admin dashboard layout with navbar, sidebar, and main content:

Layout Structure
- Full screen responsive layout with fixed navbar and sidebar
- Fixed top navbar spanning full width
- Fixed left sidebar
- Main content area that adjusts for sidebar
- Background: Light gray (#f9fafb)
- Z-index management: navbar z-50, sidebar z-40, content below

Top Navbar
- Fixed positioning, full width
- Background: White
- Border-bottom: 1px light gray
- Padding: 1rem
- Flex layout with space-between alignment
- Height: 64px (pt-14 in content offset)

Navbar Left Section
- Hamburger menu button (visible mobile, hidden desktop md:hidden)
- Brand logo with icon (gray square) and text
- Desktop search form (hidden md:block)
- Search input with icon and placeholder

Navbar Right Section
- Mobile search toggle button
- Notifications bell icon button with dropdown
- Apps grid icon button with 3x3 dropdown grid
- User profile avatar dropdown menu
- User name and email in dropdown
- Profile options (My profile, Account settings, My likes, Collections, Pro version, Sign out)

Sidebar
- Fixed left positioning, full screen height
- Width: 256px (w-64)
- Top offset: 56px (pt-14) below navbar
- Background: White
- Border-right: 1px light gray
- Z-index: 40
- Transform: -translate-x-full on mobile, translate-x-0 on md+
- Smooth transition animation
- Scrollable navigation content

Sidebar Navigation
- Search form (visible md:hidden)
- Multiple navigation sections with icons
- Collapsible dropdown sections with chevron icons
- Nested menu items with left padding for hierarchy
- Hover background effect
- Icon sizing: w-6 h-6
- Text: base font-medium
- Message counter badge (blue background)
- Bottom links section (Docs, Components, Help)

Main Content Area
- Margin-left: md:ml-64 (adjusts for sidebar)
- Padding: p-4
- Min height: h-auto
- Padding-top: pt-20 (below navbar)
- Grid layouts for content cards
- 4-column grid on large screens, 2 on tablet, 1 on mobile
- Content blocks with dashed borders
- Spacing: gap-4 between items

Text & Numbers
Change all text content to different but logical alternatives. Keep typography, structure, and spacing exactly the same. Use different department names, feature labels, and messaging.

Colors
Change color scheme while maintaining role hierarchy:
- Navbar: Different background color (not white)
- Sidebar: Different background (not white)
- Primary accent: Different primary color (not blue)
- Secondary/hover states: Adjust accordingly
- Text colors: Different neutrals maintaining contrast
- Borders: Different gray tone
- Badges: Different accent color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const AdminDashboardComponent = () => (
    <div className="antialiased bg-slate-100">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button className="p-2 mr-2 text-slate-400 rounded-lg cursor-pointer md:hidden hover:text-white hover:bg-slate-800 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
            <a href="#" className="flex items-center justify-between mr-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-slate-400 to-slate-500 mr-3"></div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SystemHub</span>
            </a>
            <form action="#" method="GET" className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="relative md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input type="text" id="topbar-search" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5 placeholder-slate-400" placeholder="Search..." />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2 gap-2">
            <button type="button" className="p-2 mr-1 text-slate-400 rounded-lg md:hidden hover:text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-700">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </button>
            <button type="button" className="p-2 mr-1 text-slate-400 rounded-lg hover:text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-700">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <button type="button" className="p-2 text-slate-400 rounded-lg hover:text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <button type="button" className="flex w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600">
              <span className="sr-only">Open user menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-slate-200 md:translate-x-0">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          <form action="#" method="GET" className="md:hidden mb-2">
            <label htmlFor="sidebar-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <input type="text" id="sidebar-search" className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2" placeholder="Search" />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-slate-900 rounded-lg hover:bg-slate-100 group">
                <svg aria-hidden="true" className="w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Summary</span>
              </a>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Management</span>
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Configuration</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Tasks</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Schedule</a></li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Operations</span>
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul id="dropdown-sales" className="hidden py-2 space-y-2">
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Resources</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Deployment</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Logs</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-slate-900 rounded-lg hover:bg-slate-100 group">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-white bg-amber-500">5</span>
              </a>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Security</span>
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul id="dropdown-authentication" className="hidden py-2 space-y-2">
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Access Control</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Permissions</a></li>
                <li><a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-slate-900 rounded-lg transition duration-75 group hover:bg-slate-100">Audit Log</a></li>
              </ul>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-slate-200">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-slate-900 rounded-lg transition duration-75 hover:bg-slate-100 group">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-3">Documentation</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-slate-900 rounded-lg transition duration-75 hover:bg-slate-100 group">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span className="ml-3">Library</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-slate-900 rounded-lg transition duration-75 hover:bg-slate-100 group">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-3">Support</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-32 md:h-64"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-32 md:h-64"></div>
        </div>
        <div className="border-2 border-dashed border-slate-400 rounded-lg h-96 mb-4"></div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
        </div>
        <div className="border-2 border-dashed border-slate-400 rounded-lg h-96 mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
          <div className="border-2 border-dashed border-slate-400 rounded-lg h-48 md:h-72"></div>
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
        <AdminDashboardComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Admin Dashboard Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default AdminDashboard
