Category: UI Components
Complexity: Low
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 5-10 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A sticky navigation bar with logo on the left and navigation links on the right.
Clean, minimal design perfect for documentation sites, portfolios, and marketing
pages. Responsive and fully accessible with keyboard navigation support.

Prerequisites:
- React project with Vite
- Tailwind CSS configured and working
- React Router DOM (optional, for navigation)
- Basic understanding of React

LAYOUT:

Structure:
- Logo/brand on left
- Navigation links on right
- Sticky positioning (stays at top on scroll)
- Border bottom for visual separation

Spacing:
- Horizontal padding: px-6
- Vertical padding: py-4
- Links have spacing between them

Responsive:
- Stack on mobile (optional)
- Side-by-side on desktop
- Touch-friendly on all sizes

TESTING CHECKLIST:

- [ ] Logo displays on left
- [ ] Navigation links display on right
- [ ] Navbar stays at top when scrolling
- [ ] Links are clickable
- [ ] Focus ring appears on Tab
- [ ] Hover state works
- [ ] Responsive on mobile
- [ ] No console errors

TROUBLESHOOTING:

Problem: Navbar not sticky
Solution: Verify sticky top-0 z-50 classes are present

Problem: Links not aligned to right
Solution: Check ml-auto class on links container

Problem: Logo/links overlap
Solution: Adjust padding with px- and py- classes

Problem: Focus ring not visible
Solution: Tab to links (not mouse), ensure focus-visible classes work

Problem: Styling not applied
Solution: Restart dev server: bun run dev

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

1. Missing sticky positioning → Navbar scrolls away
2. Not using z-50 → Content appears over navbar
3. Wrong text color → Text hard to read on background
4. No hover effects → Links feel unresponsive
5. No focus rings → Keyboard users can't navigate
