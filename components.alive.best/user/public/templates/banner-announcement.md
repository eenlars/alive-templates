Create a new Banner component page.

LAYOUT:
- Center the entire component vertically and horizontally on the page
- White background (pure #ffffff)
- Full viewport height with flexbox centering
- Max-width 600px banner container

BANNER CONTAINER:
- Relative positioning with isolation property
- Display: flex with items-center and gap
- Background color: hsl(0, 0%, 97%) (light gray)
- Padding: 0.625rem (top/bottom), 1.5rem (left/right)
- Border-radius: 0.375rem
- Overflow: hidden
- Gap between content elements: 1.5rem

BACKGROUND GRADIENT BLOBS:
- Two decorative gradient blob elements
- Each blob is positioned absolutely with z-index: -10
- Applied blur filter: blur(40px)
- Aspect ratio: 577 / 310
- Width: 577px
- Opacity: 0.3

Left Blob Position:
- Top: 50%
- Left: max(-7rem, calc(50% - 52rem))
- Transform: translateY(-50%)

Right Blob Position:
- Top: 50%
- Left: max(45rem, calc(50% + 8rem))
- Transform: translateY(-50%)

Blob Gradient:
- Linear gradient from pink/magenta to purple
- Colors: hsl(320, 100%, 65%) to hsl(260, 100%, 65%)
- Direction: 135 degrees

CONTENT SECTION:
- Display: flex with wrap
- Align items: center
- Gap: 1rem (horizontal), 0.5rem (vertical)
- Contains text and call-to-action button

TEXT CONTENT:
- Font-size: 0.875rem
- Line-height: 1.5rem
- Color: hsl(0, 0%, 20%) (dark gray)
- Margin: 0
- Structure:
  * Bold event name: font-weight 600
  * Bullet separator (circle): inline SVG
  * Descriptive text about the event
  * Should include event location and dates

Sample Content:
- Event name: "TechSummit 2025"
- Location: "San Francisco"
- Dates: "March 15 – 17"
- Description: "to discover the latest innovations"

CALL-TO-ACTION BUTTON:
- Flex-shrink: 0
- Border-radius: 9999px (fully rounded)
- Background color: hsl(0, 0%, 15%) (dark gray/black)
- Padding: 0.25rem (top/bottom), 0.875rem (left/right)
- Font-size: 0.875rem
- Font-weight: 600
- Color: hsl(0, 0%, 100%) (white)
- Text decoration: none
- Box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Transition: background-color 200ms ease
- Display: inline-flex with items-center
- Gap between text and arrow: 0.25rem

Button Hover State:
- Background color changes to: hsl(0, 0%, 30%)
- Smooth transition

Button Focus State:
- Outline: 2px solid hsl(0, 0%, 15%)
- Outline-offset: 2px

Button Content:
- Text: "Register now"
- Arrow icon: → (HTML entity or Unicode character)

CLOSE BUTTON:
- Position: right side of banner
- Flex: 1 with flex-end justification
- Margin: -0.75rem (negative margin for easier clicking)
- Padding: 0.75rem
- Background: transparent
- Border: none
- Cursor: pointer
- Transition: all 200ms ease

Close Icon:
- SVG with viewBox="0 0 20 20"
- Width: 1.25rem
- Height: 1.25rem
- Color: hsl(0, 0%, 20%)
- X icon with 4-line design (cross pattern)

Close Button Focus State:
- Outline: 2px solid hsl(0, 0%, 15%)
- Outline-offset: -4px (inset focus ring)

SEPARATOR CIRCLE:
- Inline SVG between event name and description
- Margin: 0 0.5rem
- Display: inline
- Size: 0.125rem × 0.125rem (1px × 1px)
- Fill: currentColor (inherits text color)
- Used to visually separate event name from description

INTERACTIVITY:
- Close button hides the banner on click
- Button has hover state with background color change
- Focus states visible for accessibility
- All transitions smooth at 200ms

COLORS USED:
- Background: hsl(0, 0%, 97%)
- Text primary: hsl(0, 0%, 20%)
- Text white: hsl(0, 0%, 100%)
- Button dark: hsl(0, 0%, 15%)
- Button hover: hsl(0, 0%, 30%)
- Gradient blob 1: hsl(320, 100%, 65%)
- Gradient blob 2: hsl(260, 100%, 65%)
- Accent: gradient from pink to purple

TYPOGRAPHY:
- Main text: 0.875rem font-size
- Event name: font-weight 600
- Button text: font-weight 600

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.
