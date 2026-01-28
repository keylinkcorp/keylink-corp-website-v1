

# WhatIsCRAmendment Component Redesign

## Overview

Redesign the "What Is a CR Amendment" section to match the reference image's cleaner, more refined styling while keeping all existing content.

---

## Visual Changes (Reference Image Analysis)

### Background Pattern
- Current: Basic dot grid
- New: Dot grid with ellipse mask fade effect (Pattern 3 from brand guidelines)

### Typography Refinements
- Badge: Gold background with document icon, rounded pill style
- H2: "CR Amendment" portion highlighted in gold (already correct)
- Body paragraphs: Cleaner spacing, slightly lighter text color for secondary paragraphs

### Key Points Box Redesign
- Current: Box with icon header + 2-column grid with filled background items
- New: Clean white card with subtle border, no header icon, 2x2 grid with individual icons per point
- Each point has its own unique icon in gold color
- Points displayed in simple rows without heavy background fills

---

## Implementation Details

### File Modified
`src/components/services/cr-amendment/WhatIsCRAmendment.tsx`

### Key Changes

1. **Background Pattern Update**
   - Switch from basic dot grid to ellipse mask fade pattern
   - Apply the Pattern 3 style from brand guidelines

2. **Key Points Data Structure Update**
   - Keep existing icons but assign more distinct ones based on reference:
     - CheckCircle2 for "Mandatory for any business structure change"
     - Building2/Landmark for "Processed through Sijilat 3.0 portal"
     - FileText for "Required for continued legal operations"
     - AlertTriangle for "Non-compliance triggers penalties and restrictions"

3. **Key Points Box Styling**
   - Remove icon header row (Clock icon + title inline)
   - Use simpler title with just Clock icon before text
   - Change grid items from filled background to clean white with icon + text inline
   - Remove `bg-secondary/50` from grid items
   - Add subtle padding and cleaner spacing

4. **Card Container Updates**
   - Keep `bg-white rounded-2xl border`
   - Adjust shadow to `shadow-sm` (already applied)
   - Refine padding for cleaner appearance

---

## Styling Specifications

### Key Points Box (Updated)

```tsx
// Header
<div className="flex items-center gap-2 mb-6">
  <Clock className="w-5 h-5 text-accent" />
  <h3 className="text-lg font-bold">Key Points About CR Amendments</h3>
</div>

// Grid items - no background, just icon + text
<div className="flex items-start gap-3">
  <point.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
  <span className="text-muted-foreground">{point.text}</span>
</div>
```

### Background Pattern
```tsx
<div className="relative h-full w-full bg-white">
  <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
</div>
```

---

## Elements Preserved

- All paragraph content (4 paragraphs)
- Section header badge with "Understanding CR Amendments"
- H2 with "CR Amendment" highlighted in gold
- All 4 key points with their associated icons
- Framer Motion animations (staggerContainer, staggerItem)
- Responsive container width (max-w-4xl centered)

---

## Before vs After

| Element | Before | After |
|---------|--------|-------|
| Background | Basic dot grid | Ellipse mask fade dot grid |
| Key Points Header | Icon box + bold title | Icon inline + bold title |
| Key Points Items | Filled `bg-secondary/50` background | Clean white, no background |
| Key Points Text | `font-medium` weight | `text-muted-foreground` regular |
| Overall | Slightly heavy appearance | Lighter, cleaner aesthetic |

---

## Technical Implementation

Single file edit to `src/components/services/cr-amendment/WhatIsCRAmendment.tsx`:

1. Update background pattern div to use ellipse mask fade
2. Simplify Key Points header (remove wrapper box around icon)
3. Remove background from grid items
4. Adjust text styling on key points for lighter appearance

