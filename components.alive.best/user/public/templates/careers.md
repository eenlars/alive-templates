Create a new Careers component page.

LAYOUT:
- Center the entire component vertically and horizontally on the page
- White background (pure #ffffff)
- Full viewport height with flexbox centering
- Overflow hidden to contain decorative elements
- Max-width 80rem container with proper padding

DECORATIVE BACKGROUND ELEMENTS:
- Two gradient blob shapes (not visible, for aesthetic depth)
- Left blob: Purple to indigo gradient (#8B5CF6 to #6366F1), opacity 15%, blurred 40px
- Right blob: Pink to purple gradient (#EC4899 to #8B5CF6), opacity 15%, blurred 40px
- Positioned at specific coordinates for asymmetrical design
- Do not interfere with content visibility

HEADER SECTION:
- Main heading: "Join our team"
- Font size: 3.75rem, bold, dark color (#111827)
- Subheading: "We're looking for talented individuals to help us build the future. Explore exciting opportunities and grow your career with us."
- Subheading: 1.125rem, bold, gray color (#374151)
- Max-width 42rem

LINKS SECTION:
Display 4 clickable links in a responsive grid:

1. "Available positions" with → arrow
2. "Internship opportunities" with → arrow
3. "Our culture" with → arrow
4. "Team leadership" with → arrow

Links styling:
- Font size: 1rem, bold
- Default color: Dark gray (#111827)
- Hover color: Purple/indigo (#6366F1)
- Smooth 200ms color transition
- Include right arrow (→) symbol
- Display as flex with aligned items
- Responsive grid layout with auto-fit columns
- Gap: 1.5rem vertical, 2rem horizontal

STATS SECTION:
Display 4 statistics in a responsive grid:

Stat 1:
- Label: "Global locations"
- Value: "15"

Stat 2:
- Label: "Team members"
- Value: "450+"

Stat 3:
- Label: "Work week hours"
- Value: "40"

Stat 4:
- Label: "Vacation days"
- Value: "Unlimited"

Stats styling:
- Each stat: flex-col-reverse (value on top, label below)
- Value: 2.25rem font-weight 600, dark color (#111827)
- Label: 0.875rem, gray color (#4B5563)
- Gap: 0.25rem between label and value
- Grid gap: 2rem
- Responsive auto-fit columns

TEXT HIERARCHY:
- Main heading: Largest and most prominent (3.75rem)
- Subheading: Clear supporting text (1.125rem)
- Links: 1rem, interactive elements
- Labels: Smallest (0.875rem)

SPACING:
- Header to links: 2.5rem margin-top
- Links to stats: 4rem margin-top
- Links section: max-width 42rem
- Stats section: max-width 42rem
- Padding: 1.5rem left/right on container
- Vertical padding: 6rem top, 8rem bottom

COLORS USED:
- Primary text: #111827 (dark)
- Secondary text: #374151, #4B5563 (gray)
- Accent/hover: #6366F1 (indigo)
- Background: #ffffff (white)
- Gradient blobs: #8B5CF6 (purple), #6366F1 (indigo), #EC4899 (pink)

RESPONSIVE BEHAVIOR:
- Desktop: 4 columns for links, 4 columns for stats
- Tablet: 2 columns layout
- Mobile: Single column stacking
- Maintains proper spacing on all sizes
- Links and stats use auto-fit grid

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.