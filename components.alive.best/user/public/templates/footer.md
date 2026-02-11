Category: UI Components
Complexity: Low
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 5-10 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A compact footer with copyright text, navigation links, and social media icons.
Clean, minimal design perfect for websites and applications. Responsive layout
that stacks on mobile, side-by-side on desktop. Fully accessible with keyboard
navigation support.

Prerequisites:
- React project with Vite
- Tailwind CSS configured and working
- React Router DOM (optional, for navigation)
- Basic understanding of React

LAYOUT:

Structure:
- Copyright text on left
- Navigation links in center
- Social media icons on right
- Border top for visual separation

Spacing:
- Horizontal padding: px-6
- Vertical padding: py-8
- Links have consistent spacing
- Gap between sections

Responsive:
- Stacks vertically on mobile
- Side-by-side on medium+ screens
- Touch-friendly icons
- Readable text at all sizes

TESTING CHECKLIST:

- [ ] Copyright text displays
- [ ] Navigation links are clickable
- [ ] Social icons are visible
- [ ] Layout stacks on mobile
- [ ] Layout is side-by-side on desktop
- [ ] Links are accessible via Tab
- [ ] Focus ring appears on Tab
- [ ] Hover state works
- [ ] No console errors

TROUBLESHOOTING:

Problem: Layout doesn't stack on mobile
Solution: Check flex flex-col md:flex-row is present

Problem: Links not centered
Solution: Verify centering classes are applied

Problem: Icons too small
Solution: Adjust w- and h- classes for icon size

Problem: Text color not showing
Solution: Check text-muted-foreground and contrast

Problem: Focus ring not visible
Solution: Tab to links (not mouse), ensure focus-visible classes work

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

1. Wrong text color → Text hard to read on background
2. No hover effects → Links feel unresponsive
3. No focus rings → Keyboard users can't navigate
4. Icons too large/small → Poor visual balance
5. Not responsive → Looks bad on mobile
