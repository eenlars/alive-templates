Category: UI Components
Complexity: Medium
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 10-15 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A responsive masonry project showcase component with varied tile heights and
alternating tall tiles for visual rhythm. Features gradient hover overlays,
project titles, keyboard navigation, and full accessibility support. Perfect
for portfolio sites, agency showcases, and project galleries.

Prerequisites:
- A React project with Vite
- Tailwind CSS configured and working
- React Router DOM for navigation (optional)
- Basic understanding of React hooks (useState)

GRID LAYOUT:

Columns:
- Mobile: 2 columns
- Desktop: 3 columns
- Gap: 1rem (4 units)

Masonry Pattern:
- Every 3rd tile (0, 3, 6) spans 2 rows
- Creates visual rhythm and interest
- All other tiles are standard size

TESTING CHECKLIST:

- [ ] Grid loads with 6+ tiles
- [ ] Every 3rd tile is taller
- [ ] Tiles are 2 columns on mobile
- [ ] Tiles are 3 columns on desktop
- [ ] Hovering shows gradient overlay
- [ ] Overlay fades smoothly
- [ ] Titles are visible on overlay
- [ ] Tab reaches all tiles
- [ ] Blue focus ring visible on Tab
- [ ] Clicking tiles works (console logs)
- [ ] No console errors

TROUBLESHOOTING:

Problem: Tiles not spanning correctly
Solution: Verify idx % 3 === 0 logic is in className

Problem: Grid not responsive
Solution: Ensure Tailwind CSS is configured correctly

Problem: Overlay not appearing on hover
Solution: Restart dev server: bun run dev

Problem: Focus ring not visible
Solution: Tab to tile (not mouse click) to see ring

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

1. Forgetting row-span logic → All tiles same size
2. Not using md:grid-cols-3 → Shows wrong columns
3. Using hardcoded colors → Use semantic tokens
4. No focus rings → Keyboard users can't navigate
5. Overlay text overflow → Use line-clamp-2 for long titles
