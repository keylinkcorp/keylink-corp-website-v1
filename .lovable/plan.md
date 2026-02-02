
# Convert Comparison Section from Table to Cards Format

## Current State
The comparison section uses a 3-column table format showing "Direct Application" vs "With Keylink" across 8 factors.

## New Design: Two Side-by-Side Cards

### Layout
Two large cards side by side:
1. **Left Card (Muted/Negative)**: "Direct Application" - shows the downsides
2. **Right Card (Accent/Positive)**: "With Keylink" - shows the benefits

Each card will list all 8 comparison points with appropriate icons (X for direct, Check for Keylink).

### File to Modify
`src/components/services/incubator/IncubatorComparison.tsx`

### New Structure
```text
[Section Header]
  - Badge: "The Keylink Advantage"
  - H2: "Why Use Keylink vs. Applying Directly?"

[Two Cards Grid - md:grid-cols-2]
  
  [Left Card - bg-muted/50, border-destructive/20]
    - Header: "Direct Application" with X icon
    - Subtitle: "Going it alone"
    - List of 8 items with X icons and muted text:
      - Company Formation: Handle separately
      - Application Review: One attempt
      - Program Access: Public inbox
      - Interview Prep: Figure it out
      - Timeline: 3-4 months typical
      - Acceptance Rate: ~53% first attempt
      - Post-Acceptance: On your own
      - Cost: Free (+ time)

  [Right Card - bg-accent/10, border-accent, shadow-lg]
    - Header: "With Keylink" with Check icon
    - Subtitle: "Expert guidance"
    - List of 8 items with Check icons and accent styling:
      - Company Formation: Included & optimized
      - Application Review: Unlimited revisions
      - Program Access: Direct relationships
      - Interview Prep: Structured coaching
      - Timeline: 6-8 weeks average
      - Acceptance Rate: 85% first attempt
      - Post-Acceptance: 3 months support
      - Cost: BHD 150-1,200

[Quote Box - unchanged]
  - Dark bg with quote text
```

### Visual Styling
- Left card: Muted background, subtle red/destructive accents
- Right card: Gold accent background, elevated with shadow, border-accent
- Each list item has the factor as bold label, value below
- Hover effects on cards
- Stagger animations on scroll

