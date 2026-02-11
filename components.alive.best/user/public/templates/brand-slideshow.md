Create a new page called "Brand Slideshow" that displays an infinite horizontal scrolling logo carousel component. Add a button labeled "Brand Slideshow" in the component library that links to this page.

On the "Brand Slideshow" page, add two buttons in the top-right corner:
1. "see prompt" - links to the prompt used to create this component
2. "copy prompt" - copies the prompt to clipboard

The component itself should be:

A centered section with white background featuring:
- A heading "Over 50+ business trust us" in black text, centered above the carousel
- An infinite horizontal scrolling carousel of company logos
- The logos should scroll continuously from right to left with smooth animation
- Include these 4 example companies (create simple, professional logos for each):
  * "TechFlow" - a tech company with a geometric icon
  * "Stellar Design" - a creative agency with a star-based icon
  * "DataCorp" - a data company with a chart/graph icon
  * "NexGen Solutions" - a modern business with an abstract icon

Each logo should:
- Be black on the white background
- Include both an icon and company name
- Be spaced evenly with 3rem gap between items
- The logos should be duplicated 4 times to create seamless infinite scroll
- Use transform: translateX() for the animation
- Animate smoothly and continuously without pause

Style the carousel with:
- Logos should be in a horizontal flex row
- Each logo item should not shrink (flex-shrink: 0)
- Black icons and gray text for contrast on white background
- Clean, modern typography
- The entire carousel should have no visible scrollbars
- Container should hide overflow
- Max-width of 600px, centered on page
- Animate continuously at 12 seconds per cycle

The animation should create a perfect infinite loop effect where viewers can't tell where the sequence begins or ends. New businesses should continuously appear from the right side with fade-in effect and disappear on the left with fade-out effect.