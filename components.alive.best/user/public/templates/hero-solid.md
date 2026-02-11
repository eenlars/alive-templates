Category: UI Components
Complexity: Low
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 5-10 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A centered hero section with headline, subheading, and two call-to-action buttons.
Perfect for landing pages, homepages, and marketing sites. Responsive design that
adapts from mobile to desktop with elegant typography hierarchy.

Prerequisites:
- React project with Vite
- Tailwind CSS configured and working
- React Router DOM (optional, for navigation)
- Basic understanding of React

STEP-BY-STEP IMPLEMENTATION:

Step 1: Create src/components/HeroSolid.tsx

```tsx
interface HeroSolidProps {
  headline?: string
  subheading?: string
  primaryCTAText?: string
  secondaryCTAText?: string
  onPrimaryCTA?: () => void
  onSecondaryCTA?: () => void
}

export const HeroSolid = ({
  headline = 'Build beautiful websites faster',
  subheading = 'Modern components for modern projects. Accessible, customizable, and ready to use.',
  primaryCTAText = 'Get Started',
  secondaryCTAText = 'Learn More',
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroSolidProps) => {
  return (
    <section className="w-full bg-background text-center max-w-3xl mx-auto px-6 py-16 flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {headline}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        {subheading}
      </p>
      <div className="flex gap-4 justify-center">
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
    </section>
  )
}
```

Step 2: Use in Your Page

```tsx
import { HeroSolid } from '../components/HeroSolid'

const HomePage = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked')
  }

  const handleLearnMore = () => {
    console.log('Learn More clicked')
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSolid
        headline="Build beautiful websites faster"
        subheading="Modern components for modern projects."
        primaryCTAText="Get Started"
        secondaryCTAText="Learn More"
        onPrimaryCTA={handleGetStarted}
        onSecondaryCTA={handleLearnMore}
      />
    </div>
  )
}

export default HomePage
```

HOW IT WORKS:

Layout:
- Full width section with max-width constraint (max-w-3xl)
- Centered text alignment for balanced appearance
- Flexbox column layout with vertical centering

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

Colors (using CSS variables):
- Background: hsl(0, 0%, 100%)
- Text: hsl(0, 0%, 0%)
- Accent: hsl(217, 91%, 60%) - primary button
- Secondary: hsl(215, 13%, 92%) - secondary button
- Muted-foreground: hsl(217, 12%, 54%)

Accessibility:
- Semantic HTML: <section> and <button>
- Focus rings on all interactive elements
- Color contrast meets WCAG AA standards
- Responsive text sizing
- No color alone conveys information

CUSTOMIZATION EXAMPLES:

1. Change Button Colors:
```tsx
className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700"
```

2. Make Buttons Stack on Mobile:
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
```

3. Add Background Image:
```tsx
<section className="... bg-cover bg-center"
  style={{ backgroundImage: 'url(...)' }}
>
```

4. Adjust Padding:
```tsx
<section className="... px-4 py-24">
```

5. Single Button Instead of Two:
Remove the secondary button from JSX.

6. Add Arrow Icon to Primary Button:
```tsx
{primaryCTAText} →
```

TESTING CHECKLIST:

- [ ] Headline displays with correct font size
- [ ] Subheading is readable on mobile and desktop
- [ ] Both buttons are clickable
- [ ] Focus ring appears on Tab
- [ ] Hover state works on both buttons
- [ ] Responsive: looks good at 375px, 768px, 1024px+
- [ ] Text is centered
- [ ] Spacing feels balanced
- [ ] No console errors

TROUBLESHOOTING:

Problem: Text is left-aligned instead of centered
Solution: Check text-center class is present and Tailwind is building

Problem: Buttons are stacked vertically
Solution: Check gap-4 and flex classes. May need flex-row on mobile

Problem: Text color not showing
Solution: Verify text-foreground and text-muted-foreground classes exist

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

1. Forgetting text-center → Text appears left-aligned
2. Using hardcoded colors → Use semantic tokens instead
3. No focus rings → Keyboard users can't navigate
4. Too much padding → Content feels cramped
5. Buttons too small → Hard to click/tap
