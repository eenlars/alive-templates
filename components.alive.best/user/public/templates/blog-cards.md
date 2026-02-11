Create a new Blog Cards component page.

LAYOUT:
- Full height page with responsive padding
- Maximum width 5xl container, centered
- White background

HEADER SECTION:
- Back link "← All components" (left side)
- "See Prompt" and "Copy Prompt" buttons (right side)
- Flexbox layout between links
- Margin bottom: 2rem

CONTENT AREA:
- Bordered container with rounded corners
- Full width within max-width constraint
- Overflow hidden for content

BLOG CARDS LAYOUT:
- Heading: "Latest Articles" (text-2xl, font-bold)
- Grid layout with 2 columns
- Gap between cards: 1rem
- Padding: 2rem (8 * 0.25)

CARD ITEMS:
- 2-column responsive grid
- Each card has border, rounded corners, and shadow on hover
- Padding per card: 1rem

CARD STRUCTURE:
- Image placeholder:
  * Full width, 8rem height (h-32)
  * Background color: muted
  * Rounded corners matching radius variable
  * Margin bottom: 0.75rem
- Title: font-semibold, text-lg
  * Text color: foreground
  * Margin bottom: 0.5rem
- Description: text-sm, muted-foreground color
  * Concise 1-sentence description

CARD INTERACTIONS:
- Hover state: shadow-md (medium shadow)
- Smooth transition (all 200ms)
- Cursor: pointer

SAMPLE CARDS:
Card 1:
- Title: "Design systems"
- Description: "Building a cohesive visual language."

Card 2:
- Title: "Performance tips"
- Description: "Make your web app faster."

TYPOGRAPHY:
- Heading: text-2xl font-bold
- Card title: text-lg font-semibold
- Description: text-sm
- All using foreground and muted-foreground colors

SPACING:
- Grid gap: gap-4
- Section margin bottom: mb-6
- Card padding: p-4
- Image margin bottom: mb-3
- Title margin bottom: mb-2
- Container padding: p-8

COLORS:
- Background: bg-background
- Card background: bg-background with border
- Text primary: text-foreground
- Text secondary: text-muted-foreground
- Borders: border-border
- Image placeholder: bg-muted
- Hover shadow: shadow-[--shadow-md]

CSS CLASSES USED:
- grid grid-cols-2 gap-4
- border border-border rounded-[--radius] p-4
- hover:shadow-[--shadow-md] transition-all
- w-full h-32 bg-muted rounded-[--radius]

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.
