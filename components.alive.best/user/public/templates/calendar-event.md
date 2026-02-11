Create a new Calendar component page.

LAYOUT:
- Center the entire component vertically and horizontally on the page
- White background (pure #ffffff)
- Full viewport height with flexbox centering
- Max-width 600px container with light gray background (hsl(0, 0%, 98%))

CALENDAR CARD:
- White background with subtle border (hsl(0, 0%, 90%))
- Rounded corners: 0.5rem
- Padding: 2rem
- Box shadow: subtle depth

HEADER SECTION:
- Month/Year display: "December 2024" in font-weight 600, size 1.25rem
- Navigation buttons: "← Previous" and "Next →" on either side
- Light gray background with hover state (hsl(0, 0%, 95%))
- Buttons have 1px border (hsl(0, 0%, 80%))

DAY NAME ROW:
- 7 columns: Sun, Mon, Tue, Wed, Thu, Fri, Sat
- Font-weight 600, size 0.875rem
- Text color: hsl(0, 0%, 40%)
- Uppercase letters, subtle gray appearance

CALENDAR GRID:
- 7-column grid layout with 0.5rem gap
- Each cell has white background with 1px border (hsl(0, 0%, 80%))
- Day numbers: size 0.875rem, font-weight 500, dark gray
- Min-height: 3.5rem per cell
- Flexbox layout for vertical alignment
- Empty cells (before month start) have no border or background

DAY CELL HOVER STATE:
- Background changes to light blue (hsl(210, 100%, 95%))
- Border color changes to blue (hsl(210, 100%, 60%))
- Smooth 200ms transition

EVENT INDICATORS:
- Small colored dots appear in day cells when events exist
- Dots: 0.375rem diameter, blue (hsl(210, 100%, 60%))
- Maximum 2 dots visible per day
- Positioned near bottom of cell

UPCOMING EVENTS SECTION:
- Below calendar, separated by border-top (hsl(0, 0%, 90%))
- Label: "UPCOMING EVENTS" in uppercase, 0.875rem, font-weight 600
- Gray text (hsl(0, 0%, 40%))
- Letter spacing: 0.025em

EVENT LIST:
- Display up to 3 upcoming events sorted by date
- Each event shows: event title and date (format: "Nov 15")
- Event rows: flex layout with space-between
- Padding: 0.75rem per row
- Background: white with subtle border (hsl(0, 0%, 85%))
- Border-radius: 0.375rem
- Font-size: 0.875rem

EVENT MODAL:
- Triggered when clicking any calendar day
- Overlay: semi-transparent dark (rgba(0, 0, 0, 0.5))
- Modal background: white, max-width 450px
- Rounded corners: 0.5rem
- Box shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
- Padding: 2rem

MODAL HEADER:
- Title displays selected date (format: "Thursday, December 12")
- Font-size: 1.125rem, font-weight 600
- Close button (✕) in top-right corner
- Font-size: 1.5rem, semi-transparent gray
- No background, transparent border

MODAL FORM:
- Input field with label "Event Title"
- Label font-size: 0.875rem, font-weight 500
- Input styling:
  * Padding: 0.75rem
  * Border: 1px solid hsl(0, 0%, 80%)
  * Border-radius: 0.375rem
  * Font-size: 0.875rem
  * Placeholder text: "Enter event title"
- Focus state:
  * Border color: hsl(210, 100%, 60%) (blue)
  * Box-shadow: 0 0 0 3px hsl(210, 100%, 95%)

MODAL FOOTER:
- Two buttons: "Close" and "Save Event"
- Close button:
  * Background: hsl(0, 0%, 95%)
  * Border: 1px solid hsl(0, 0%, 85%)
  * Color: hsl(0, 0%, 40%)
  * Hover: background hsl(0, 0%, 90%)
- Save button:
  * Background: hsl(210, 100%, 60%) (blue)
  * Color: white
  * Font-weight: 600
  * Hover: background hsl(210, 100%, 50%)
- Padding: 0.75rem 1.5rem per button
- Gap between buttons: 0.75rem

SAMPLE DATA:
- Month shown: November 2024
- Pre-populated events:
  * "Design Review" on November 5
  * "Team Meeting" on November 12
  * "Project Deadline" on November 19
- Additional events can be added via modal

TEXT STYLING:
- Month/year: font-size 1.25rem, font-weight 600
- Day names: font-size 0.875rem, font-weight 600
- Day numbers: font-size 0.875rem, font-weight 500
- Section labels: font-size 0.875rem, font-weight 600, uppercase
- Event titles: font-size 0.875rem
- Event dates: font-size 0.8125rem, gray
- Modal title: font-size 1.125rem, font-weight 600

COLORS USED:
- Primary background: #ffffff (white)
- Card background: hsl(0, 0%, 98%)
- Borders: hsl(0, 0%, 90%), hsl(0, 0%, 85%), hsl(0, 0%, 80%)
- Text dark: hsl(0, 0%, 20%)
- Text medium: hsl(0, 0%, 40%)
- Text light: hsl(0, 0%, 60%)
- Accent blue: hsl(210, 100%, 60%)
- Accent blue hover: hsl(210, 100%, 50%)
- Blue highlight: hsl(210, 100%, 95%)
- Button hover: hsl(0, 0%, 95%), hsl(0, 0%, 90%)

INTERACTIONS:
- Calendar cells are clickable
- Month navigation with Previous/Next buttons
- Modal appears on day click
- Form submission adds event to calendar
- Events persist during session
- Event indicators appear on calendar for days with events

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.
