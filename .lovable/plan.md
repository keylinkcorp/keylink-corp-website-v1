

# Redesign About Hero - Full Width Top Image with Centered Text Below

## Overview
Transform the About Hero section to feature the team image prominently at the top spanning full width, with centered text content below for a clean, modern vertical layout.

---

## New Layout Structure

```text
[Full-Width Section]

├── Background Layer (pattern overlays only)
│   ├── Dashed Top Fade Grid pattern
│   ├── Subtle dot pattern
│   └── Decorative floating orbs

├── TEAM IMAGE (Full Width, Top)
│   ├── Team PNG spanning container width
│   ├── Floating badges (Est. 2014, 50+ Team Members)
│   └── Soft shadow underneath

├── TEXT CONTENT (Centered Below Image)
│   ├── Badge: "About Keylink Corp"
│   ├── H1: Centered heading with accent highlight
│   ├── Subtitle: Centered paragraph
│   └── Stats: Horizontal row (4 items) with glass-card styling

└── Bottom fade transition
```

---

## Visual Design

### Image Section
- Team photo at full container width
- Displayed prominently at top
- Floating badges positioned on the image
- Soft shadow for depth

### Text Section (Centered)
- All text center-aligned
- Badge centered above heading
- Clean typography hierarchy
- Stats in horizontal 4-column row (responsive to 2x2 on mobile)

### Background
- Dashed Top Fade Grid pattern (radiates from top where image is)
- Subtle dot overlay
- Floating orbs for visual interest

---

## Technical Implementation

### File to Modify
`src/components/about/AboutHero.tsx`

### Component Structure
```tsx
<section className="relative min-h-screen overflow-hidden">
  {/* Background Patterns */}
  <div className="absolute inset-0">
    {/* Dashed Top Fade Grid - focus from top */}
    {/* Dot pattern overlay */}
    {/* Floating orbs */}
  </div>

  <div className="container relative z-10 px-4 py-16 md:py-20">
    
    {/* TOP: Full Width Team Image */}
    <motion.div className="relative mb-12 md:mb-16">
      <img 
        src={teamPhoto}
        alt="Keylink Corp professional team"
        className="w-full h-auto object-contain max-h-[500px] mx-auto"
      />
      {/* Floating badges on image */}
      {/* Shadow underneath */}
    </motion.div>

    {/* BOTTOM: Centered Text Content */}
    <motion.div className="text-center max-w-4xl mx-auto">
      <Badge />
      <h1 className="text-center">Your Trusted Partner...</h1>
      <p className="text-center max-w-2xl mx-auto">Subtitle...</p>
      
      {/* Stats Row - 4 columns centered */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
        {stats.map(...)}
      </div>
    </motion.div>

  </div>
</section>
```

---

## Key Changes Summary

| Aspect | Before | After |
|--------|--------|-------|
| Layout | Two-column side-by-side | Vertical stack (image top, text bottom) |
| Image Position | Right column | Top, full width |
| Text Alignment | Left-aligned | Centered |
| Stats Grid | 2x2 on left | 4-column row centered (2x2 on mobile) |
| Visual Flow | Horizontal split | Top-down vertical |

---

## Animation Updates
- Image: Scale up fade in from top
- Text: Stagger reveal from bottom after image
- Stats: Sequential fade in after text
- Floating orbs: Continue subtle float animation

