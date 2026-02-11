Category: UI Components
Complexity: Medium
Files: 1
Dependencies: None (uses Tailwind CSS)
Estimated Time: 10-15 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A responsive project showcase component with dual layout modes: masonry (varied
tile heights with alternating tall tiles for visual rhythm) and equal tiles
(uniform grid). Features gradient hover overlays, project titles, keyboard
navigation, and full accessibility support. Perfect for portfolio sites, agency
showcases, and project galleries.

Prerequisites:
- A React project with Vite (like the Alive template)
- Tailwind CSS configured and working
- React Router DOM for navigation (optional, but used in the example)
- Basic understanding of React hooks (useState)

LAYOUT MODES:

Masonry Mode:
- Columns: 2 on mobile, 3 on desktop
- Every 3rd tile spans 2 rows
- Creates visual rhythm and interest

Equal Tiles Mode:
- Columns: 2 on mobile, 3 on desktop
- All tiles are perfect squares
- Uniform, organized appearance

TESTING CHECKLIST:

LAYOUT MODES:
- [ ] Click "Masonry" button → every 3rd tile is taller
- [ ] Click "Equal tiles" → all tiles are perfect squares
- [ ] Both layouts work instantly

HOVER & FOCUS:
- [ ] Hover tile → black gradient appears, title visible
- [ ] Tab to tile → blue ring appears
- [ ] Tab to tile → black gradient also appears

RESPONSIVENESS:
- [ ] Resize to mobile width (375px) → 2 columns
- [ ] Resize to desktop (1024px) → 3 columns
- [ ] Text is readable at both sizes

ACCESSIBILITY:
- [ ] Screen reader announces tiles when focused
- [ ] All tiles reachable with Tab key
- [ ] Enter/Space key works on buttons
- [ ] Color alone doesn't convey information

PERFORMANCE:
- [ ] Grid loads instantly
- [ ] Layout switches smoothly
- [ ] No lag when hovering
- [ ] No console warnings

TROUBLESHOOTING:

Tiles not spanning?
→ Verify preset === 'masonry' (check button styling)

Grid not responsive?
→ Check Tailwind config, verify md: breakpoint works

Overlay not showing?
→ Run: bun run dev (restart dev server)
→ Check Tailwind is building correctly

Styling not applied?
→ Ensure Tailwind CSS is installed and configured

Focus ring not visible?
→ Verify focus-visible:outline-none is set
→ Some browsers hide focus rings by default

Console warning about keys?
→ Ensure each project has a unique id property
→ Don't use array index as fallback key

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
- Requires CSS Grid support

COMMON MISTAKES:

1. Component not appearing at all?
   - Check: Did you save the file?
   - Check: Is file path exactly src/components/ProjectGrid.tsx?
   - Check: Does your page import it correctly?
   - Check: Are there TypeScript errors in console?

2. Colored tiles show but no hover effect?
   - Problem: Tailwind CSS not building
   - Solution: Restart dev server: bun run dev
   - Solution: Check tailwind.config.ts content paths include src/

3. Grid shows 1 column on desktop (should be 3)?
   - Problem: Tailwind md: breakpoint not working
   - Check: Is md:grid-cols-3 used elsewhere successfully?
   - Check: Is viewport meta tag in index.html?
   - Solution: Restart dev server, clear browser cache

4. Buttons don't change layout?
   - Problem: State not updating
   - Check: Browser console for JavaScript errors
   - Check: Did you copy the useState hook?
   - Solution: Make sure setPreset is being called

5. Overlay text is white but hard to read?
   - Problem: Background color too light
   - The black/60 gradient helps contrast
   - If using light colors, change to: from-black/80 (darker)
