Category: UI Components
Complexity: Medium
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 10-15 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A responsive project showcase with uniform square tiles. All tiles are identical
size for an organized, grid-like appearance. Features gradient hover overlays,
project titles, keyboard navigation, and full accessibility support. Perfect
for portfolio sites, agency showcases, and gallery pages.

Prerequisites:
- A React project with Vite
- Tailwind CSS configured and working
- React Router DOM for navigation (optional)
- Basic understanding of React hooks (useState)

GRID LAYOUT:

Columns:
- Mobile: 2 columns
- Desktop (md+): 3 columns
- Gap: 1rem (4 units)

Tile Shape:
- Perfect squares (aspect-square)
- All tiles identical size
- No row spanning
- Consistent height and width

TESTING CHECKLIST:

- [ ] Grid loads with 6 tiles
- [ ] All tiles are perfect squares
- [ ] Tiles are 2 columns on mobile
- [ ] Tiles are 3 columns on desktop
- [ ] Hovering shows gradient overlay
- [ ] Overlay fades smoothly (not instant)
- [ ] Titles are visible on overlay
- [ ] Tab reaches all tiles
- [ ] Blue focus ring visible on Tab
- [ ] Clicking tiles works (console logs)
- [ ] No console errors

TROUBLESHOOTING:

Problem: Tiles Not Square
Solution: Verify aspect-square is in className
Solution: Check that md:grid-cols-3 is working
Solution: Ensure Tailwind is building: bun run dev

Problem: Grid Not Responsive
Solution: Ensure Tailwind CSS is configured correctly
Solution: Check viewport meta tag in index.html

Problem: Overlay Not Appearing on Hover
Solution: Ensure Tailwind is building correctly: bun run dev
Solution: Check group-hover is not disabled in tailwind.config.ts

Problem: Focus Ring Not Visible
Solution: Verify focus-visible classes are present
Solution: Tab to tile (not mouse click) to see ring

Problem: Styling Not Applied
Solution: Check Tailwind is installed: grep tailwindcss package.json
Solution: Verify config exists: ls tailwind.config.ts
Solution: Restart dev server: bun run dev

Problem: Console Warning About Missing Key
Solution: Ensure each project has a unique id property
Solution: Use id as key, not array index

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
- Requires CSS Grid and aspect-ratio support

COMMON MISTAKES:

1. Forgetting aspect-square → Tiles become rectangular
2. Forgetting md:grid-cols-3 → Shows 2 cols on desktop
3. Using hardcoded colors → Tiles appear same color
4. No focus rings → Keyboard users can't see where they are
5. Overlay text overflow → Use line-clamp-2 for long titles
