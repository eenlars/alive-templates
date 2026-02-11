Create a new Accordion component page.

LAYOUT:
- Center the entire component vertically and horizontally on the page
- White background (pure #ffffff)
- Full viewport height with flexbox centering
- Max-width 600px container

ACCORDION CONTAINER:
- Divide items with subtle borders (hsl(0, 0%, 92%))
- Full width responsive layout
- Top border (hsl(0, 0%, 92%))

ACCORDION ITEMS:
- Three expandable sections total
- Each item contains a toggle button and collapsible content area
- First item opens by default
- Items 2-3 start collapsed

ACCORDION TOGGLE BUTTON:
- Full width, left-aligned text
- Padding: 1.25rem
- Display: inline-flex with items-center and gap
- Font-size: 0.95rem, font-weight 500
- Text color: hsl(0, 0%, 20%)
- Icon on left side: plus or minus
- Bottom border between items (hsl(0, 0%, 92%))
- Hover state: light gray background (hsl(0, 0%, 97%))
- Smooth 200ms transition

ACCORDION ICONS:
- Plus icon (closed state): 1.125rem × 1.125rem
  * Two perpendicular lines forming a plus
  * Color: hsl(0, 0%, 20%)
  * Displays when item is collapsed
- Minus icon (open state): 1.125rem × 1.125rem
  * Single horizontal line
  * Color: hsl(0, 0%, 20%)
  * Displays when item is expanded
- Icons are flexShrink: 0 to maintain consistent size
- Smooth transitions between icon display

ACCORDION CONTENT AREA:
- Hidden by default for collapsed items
- Smooth height transition: 300ms ease
- MaxHeight animation: 0px (collapsed) to 1000px (expanded)
- Opacity transition: 0 to 1
- Padding: 1.25rem (left/right), 1rem (bottom)
- Font-size: 0.875rem
- Line-height: 1.6
- Text color: hsl(0, 0%, 40%)

SAMPLE ACCORDION ITEMS:
Item 1 (Default Open):
- Title: "What is the storage capacity available?"
- Content: "Our products come with multiple storage tiers. The basic model includes 256GB of high-speed SSD storage, while the professional edition offers up to 2TB. Enterprise customers can request custom configurations with additional storage options."

Item 2:
- Title: "What does the warranty cover?"
- Content: "Our comprehensive warranty covers all manufacturing defects and hardware failures for the first two years. This includes battery replacement, screen repairs, and structural damage caused by normal use. Extended warranty plans are available for additional coverage."

Item 3:
- Title: "How often do you release software updates?"
- Content: "We release security and maintenance updates monthly, with major feature updates scheduled quarterly. Critical patches are deployed immediately when security issues are identified. All updates are free and automatically downloaded to ensure your system stays current."

INTERACTIONS:
- Click toggle button to expand/collapse item
- Only one item can be expanded at a time (optional, can allow multiple)
- Smooth 300ms animation for expand/collapse
- Aria attributes for accessibility: aria-expanded, aria-controls
- Proper semantic HTML with role="region"

COLORS USED:
- Background: #ffffff (white)
- Border: hsl(0, 0%, 92%)
- Text primary: hsl(0, 0%, 20%)
- Text secondary: hsl(0, 0%, 40%)
- Icon color: hsl(0, 0%, 20%)
- Hover background: hsl(0, 0%, 97%)

TYPOGRAPHY:
- Title: 0.95rem, font-weight 500, hsl(0, 0%, 20%)
- Content: 0.875rem, line-height 1.6, hsl(0, 0%, 40%)
- All sans-serif font family

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.
