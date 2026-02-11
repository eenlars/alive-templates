Create a new Contact Form component page.

LAYOUT:
- Center the entire component vertically and horizontally on the page
- White background (pure #ffffff)
- Full viewport height with flexbox centering
- Gradient background accent (not visible but adds subtle visual interest)

HEADER SECTION:
- Heading: "Get in touch"
- Subheading: "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
- Centered text alignment
- Max-width 42rem for the entire form

FORM FIELDS (in order):

1. First name (text input)
2. Last name (text input)
3. Organization (text input, spans full width)
4. Email address (text input, spans full width)
5. Phone number (with country dropdown, spans full width):
   - Country dropdown with +1 (US/CA) and +44 (EU) options
   - Phone input with placeholder "555-123-4567"
6. Message (textarea, 4 rows, spans full width)
7. Checkbox with terms agreement:
   - Toggle checkbox with text: "By contacting us, you agree to our terms of service."
   - Link text "terms of service" in primary color

FORM STYLING:
- All input fields have:
  * Rounded corners (0.375rem)
  * White background
  * Gray border (#D1D5DB) by default
  * Green border (#10b981) on focus
  * Padding: 0.625rem vertical, 0.875rem horizontal
  * Smooth transitions on border color
- Labels: Small text (0.875rem), bold, dark color (#111827)
- Placeholder text: Medium gray (#4B5563)
- Grid layout: 2 columns on desktop, 1 column on mobile
- Gap between fields: 1.5rem vertical, 2rem horizontal

SUBMIT BUTTON:
- Text: "Send message"
- Full width
- Green background (#10b981)
- White text
- Rounded corners (0.375rem)
- Hover state: Darker green (#059669)
- Padding: 0.625rem vertical, 0.875rem horizontal
- Subtle shadow
- Margin top: 2.5rem

TOGGLE SWITCH (for terms agreement):
- Background: Light gray (#E5E7EB) when unchecked
- Background: Green (#10b981) when checked
- White circle that slides left/right
- Smooth 200ms transition
- Size: 32x24px

COLORS USED:
- Primary accent: #10b981 (green) for buttons and focus states
- Text dark: #111827
- Text light: #4B5563
- Border: #D1D5DB
- Background: #ffffff (white)
- Link: #10b981 (green)

RESPONSIVE BEHAVIOR:
- Desktop: 2-column grid with proper spacing
- Tablet/Mobile: 1-column layout with fields stacking vertically
- All text remains centered
- Form stays max-width 42rem on all sizes

GRADIENT BACKGROUND (decorative):
- Subtle gradient using #10b981 and #6366f1 colors
- Blurred and positioned at top
- Very low opacity (0.15) to be barely visible
- Does not interfere with form interaction

The "See prompt" and "Copy prompt" buttons should contain this exact prompt to recreate the component independently.