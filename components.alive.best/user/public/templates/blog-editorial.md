Create a new Blog Editorial component page.

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

EDITORIAL BLOG LAYOUT:
- Heading: "Latest Articles" (text-2xl, font-bold)
- Vertical spacing between articles (space-y-6)
- Padding: 2rem (8 * 0.25)

ARTICLE ITEMS:
- Multiple article entries in vertical list
- Each article separated by bottom border
- Padding bottom: 1.5rem per item

ARTICLE STRUCTURE:
- Title: font-semibold, text-xl
  * Text color: foreground
  * Hover state: accent color
  * Cursor: pointer
  * Transition: smooth color change
- Description: text-sm, muted-foreground color
  * Margin bottom: 0.5rem
  * Max 1-2 sentences describing the article
- Metadata: text-xs, muted-foreground color
  * Format: "Mar 15, 2024 · 5 min read"
  * Includes publication date and reading time

SAMPLE ARTICLES:
Article 1:
- Title: "Getting started with design systems"
- Description: "Building a cohesive visual language for your product."
- Date: Mar 15, 2024
- Read time: 5 min read

Article 2:
- Title: "Performance optimization tips"
- Description: "How to make your web app faster and more efficient."
- Date: Mar 10, 2024
- Read time: 7 min read

TYPOGRAPHY:
- Heading: text-2xl font-bold
- Article title: text-xl font-semibold
- Description: text-sm
- Metadata: text-xs
- All using foreground and muted-foreground colors

SPACING:
- Articles space: space-y-6 (gap between articles)
- Section margin bottom: mb-6
- Padding: p-8 (2rem)
- Article padding bottom: pb-6

COLORS:
- Background: bg-background
- Text primary: text-foreground
- Text secondary: text-muted-foreground
- Borders: border-border
- Accent hover: hover:text-accent

INTERACTIONS:
- Articles are clickable (cursor-pointer)
- Smooth color transition on hover
- Links transition to accent color

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.
