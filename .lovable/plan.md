

# AmendmentTypesDeepDive Card Redesign

## Overview

Redesign the Amendment Types section to match the minimal 3-column card layout from the reference image, with collapsible content using "Read More / Read Less" buttons for cards with long descriptions.

---

## Design Changes

### Current Layout Issues
- 2-column grid with highlighted card spanning full width
- Heavy cards with timeline badges, fee tags, descriptions, and details all visible
- Too much text density per card

### New Minimal Design (Per Reference)
- **3-column grid** on desktop, 2 on tablet, 1 on mobile
- **Clean card structure**: Icon + Title + Short description only
- **Read More / Read Less** button to toggle full content (description + details)
- **Consistent sizing** - all cards equal, no spanning
- **Subtle styling** - light borders, minimal shadows

---

## Card Layout Structure

```text
+----------------------------------+
|  [Icon]  Title                   |
|                                  |
|  Short description (2-3 lines)  |
|                                  |
|  [Read More]  (if content long)  |
+----------------------------------+
```

When expanded:
```text
+----------------------------------+
|  [Icon]  Title                   |
|                                  |
|  Full description text           |
|  Additional details paragraph    |
|                                  |
|  [Read Less]                     |
+----------------------------------+
```

---

## Technical Implementation

### File Modified
`src/components/services/cr-amendment/AmendmentTypesDeepDive.tsx`

### Key Changes

1. **Add React State for Expansion**
   - Track expanded cards with `useState<number[]>([])` array
   - Toggle function to add/remove card index

2. **Update Grid Layout**
   - Change from `grid md:grid-cols-2` to `grid md:grid-cols-2 lg:grid-cols-3`
   - Remove `md:col-span-2` highlighted spanning logic

3. **Simplify Card Styling**
   - Card: `bg-white rounded-xl p-6 border border-border/50 hover:shadow-md transition-all`
   - Icon container: `w-12 h-12 rounded-xl bg-accent/10`
   - Remove heavy border-2, shadow-md defaults

4. **Content Logic**
   - Default state: Show `description` truncated to ~100 characters
   - Expanded state: Show full `description` + `details`
   - Button toggles between states

5. **Read More/Less Button**
   - Style: `text-accent text-sm font-medium mt-3`
   - Only show if combined content exceeds threshold

6. **Remove from Cards**
   - Timeline/fee badges (keep in data for potential tooltip use)
   - Star badges for "Most Common" / "Most Complex"
   - Highlighted visual treatment

---

## Data Structure

Keep existing `amendmentTypes` array unchanged. The component will:
- Use `description` for initial display (truncated)
- Combine `description + details` for expanded view
- Hide timeline/fee from UI (data retained for future use)

---

## Responsive Behavior

| Breakpoint | Columns |
|------------|---------|
| Mobile (<768px) | 1 column |
| Tablet (768-1023px) | 2 columns |
| Desktop (1024px+) | 3 columns |

---

## Visual Styling (Brand Aligned)

| Element | Style |
|---------|-------|
| Card Background | `bg-white` |
| Card Border | `border border-border/50` |
| Card Hover | `hover:shadow-md hover:border-accent/30` |
| Card Radius | `rounded-xl` |
| Card Padding | `p-6` |
| Icon Box | `w-12 h-12 rounded-xl bg-accent/10` |
| Icon | `w-6 h-6 text-accent` |
| Title | `text-lg font-bold text-foreground` |
| Description | `text-sm text-muted-foreground leading-relaxed` |
| Button | `text-accent text-sm font-medium` |

---

## Preserved Elements

- Section header (badge, H2, subheading)
- Background pattern (ellipse mask fade)
- Framer Motion animations (staggerContainer, staggerItem)
- All 8 amendment types with full data

---

## Implementation Steps

1. Add `useState` for tracking expanded card indices
2. Create toggle function for Read More/Less
3. Update grid classes to 3-column layout
4. Simplify card markup to minimal structure
5. Add conditional rendering for truncated vs full content
6. Style Read More/Less button with accent color
7. Remove badges, timeline, fee displays from cards
8. Test responsive behavior and animations

