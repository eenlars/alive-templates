Category: UI Components
Complexity: Low
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 5-10 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A two-column hero section with text content on left and media/image placeholder
on right. Perfect for landing pages and marketing sites. Responsive: stacks on
mobile, side-by-side on desktop with elegant visual balance.

Prerequisites:
- React project with Vite
- Tailwind CSS configured and working
- React Router DOM (optional, for navigation)
- Basic understanding of React

STEP-BY-STEP IMPLEMENTATION:

Step 1: Create src/components/HeroSplit.tsx

```tsx
interface HeroSplitProps {
  headline?: string
  subheading?: string
  primaryCTAText?: string
  secondaryCTAText?: string
  mediaContent?: React.ReactNode
  onPrimaryCTA?: () => void
  onSecondaryCTA?: () => void
}

export const HeroSplit = ({
  headline = 'Build beautiful websites faster',
  subheading = 'Modern components for modern projects. Accessible, customizable, and ready to use.',
  primaryCTAText = 'Get Started',
  secondaryCTAText = 'Learn More',
  mediaContent = <div className="w-full h-64 bg-border rounded-lg flex items-center justify-center text-muted-foreground">Image / Media</div>,
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroSplitProps) => {
  return (
    <section className="w-full bg-background grid md:grid-cols-2 gap-8">
      <div className="px-6 py-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {headline}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {subheading}
        </p>
        <div className="flex gap-4">
          <button
            onClick={onPrimaryCTA}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-[--radius] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {primaryCTAText}
          </button>
          <button
            onClick={onSecondaryCTA}
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[--radius] font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {secondaryCTAText}
          </button>
        </div>
      </div>
      <div className="bg-muted flex items-center justify-center px-6 py-16">
        {mediaContent}
      </div>
    </section>
  )
}
```

Step 2: Use in Your Page

```tsx
import { HeroSplit } from '../components/HeroSplit'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSplit
        headline="Build beautiful websites faster"
        subheading="Modern components for modern projects."
        primaryCTAText="Get Started"
        secondaryCTAText="Learn More"
      />
    </div>
  )
}

export default HomePage
```

HOW IT WORKS:

Layout:
- Two-column grid on desktop, single column on mobile
- Text on left, media/image on right
- Equal spacing with gap-8
- Responsive breakpoint at md (768px+)

Typography:
- Headline: text-4xl on mobile, text-5xl on desktop
- Subheading: text-lg for readability
- Font weights: bold for headline, normal for subheading

Buttons:
- Primary button: Accent color with opacity hover
- Secondary button: Secondary color with background hover
- Both have focus rings for keyboard accessibility
- Gap of 4 units (1rem) between buttons

Spacing:
- Horizontal padding: px-6 (1.5rem)
- Vertical padding: py-16 (4rem)
- Responsive and scales appropriately

Media Section:
- Background color: muted
- Flexbox centering for any content
- Perfect for images, videos, or custom content
- h-64 by default (256px height)

Accessibility:
- Semantic HTML: <section> and <button>
- Focus rings on all interactive elements
- Color contrast meets WCAG AA standards
- Responsive text sizing
- No color alone conveys information

CUSTOMIZATION EXAMPLES:

1. Add Background Image to Media:
```tsx
<div
  className="w-full h-64 bg-cover bg-center rounded-lg"
  style={{ backgroundImage: 'url(...)' }}
/>
```

2. Use Image Component:
```tsx
<img src="hero-image.jpg" alt="Hero" className="w-full h-full object-cover rounded-lg" />
```

3. Stack on All Sizes:
```tsx
className="... grid grid-cols-1 lg:grid-cols-2 gap-8"
```

4. Unequal Column Width:
```tsx
className="... grid md:grid-cols-3 gap-8" // 1/3 and 2/3 split
```

5. Add Video:
```tsx
<video autoPlay muted loop className="w-full rounded-lg">
  <source src="video.mp4" type="video/mp4" />
</video>
```

TESTING CHECKLIST:

- [ ] Layout stacks on mobile (single column)
- [ ] Layout shows side-by-side on desktop (two columns)
- [ ] Text is readable on both sizes
- [ ] Media content displays properly
- [ ] Both buttons are clickable
- [ ] Focus ring appears on Tab
- [ ] Hover state works on both buttons
- [ ] No console errors

TROUBLESHOOTING:

Problem: Columns not side-by-side on desktop
Solution: Check md:grid-cols-2 is present and viewport meta tag exists

Problem: Media section too small
Solution: Check h-64 class. Adjust with h-80, h-96, etc.

Problem: Text and media not vertically centered
Solution: Ensure flex justify-center is on text column

Problem: Gap too large or too small
Solution: Change gap-8 to gap-4, gap-6, gap-12, etc.

Problem: Buttons have no hover effect
Solution: Restart dev server: bun run dev

Problem: Focus ring not visible
Solution: Tab to button (not mouse), ensure focus-visible classes work

DEPENDENCIES: ZERO

This component uses only React and Tailwind CSS. No external packages needed.

- React: ^18.0.0
- Tailwind CSS: ^3.0.0
- TypeScript: ^5.0.0

BROWSER SUPPORT:

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

COMMON MISTAKES:

1. Missing md:grid-cols-2 → Shows single column on desktop
2. Using hardcoded colors → Use semantic tokens instead
3. No focus rings → Keyboard users can't navigate
4. Media section too small → Adjust height with h- classes
5. No responsive image handling → Use object-cover for proper scaling
