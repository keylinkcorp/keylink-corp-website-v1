
# Redesign About Hero Section - Dynamic Layout with Team Photo

## Current Problem
The current hero has a full-bleed background image with dark overlay and centered text on top - a common but static approach that feels uninspired.

## New Design Concept
Transform the hero into a dynamic, modern layout that showcases the team photo prominently while keeping text content engaging. The team PNG (with transparent background) will be the visual focus, sitting on a clean background with pattern overlays only (no gradients per request).

## New Layout Structure

```text
[Full-Width Section with Pattern Overlays Only]

├── Background Layer (white + patterns only - NO gradients)
│   ├── Dashed Center Fade Grid pattern
│   ├── Subtle gold radial dot pattern
│   └── Decorative floating orbs (subtle)

├── Content Area (two-column on desktop, stacked on mobile)
│   │
│   ├── LEFT COLUMN - Text Content
│   │   ├── Badge: "About Keylink Corp"
│   │   ├── H1: "Your Trusted Partner in Bahrain Business Success"
│   │   ├── Subtitle paragraph
│   │   └── Trust Stats (2x2 grid of stat cards)
│   │
│   └── RIGHT COLUMN - Team Image
│       ├── Team PNG (transparent background, displayed large)
│       ├── Subtle shadow/glow effect under team
│       └── Optional: floating badge "50+ Team Members"

└── Bottom: Subtle fade or pattern transition
```

## Visual Improvements

### No Gradients - Pattern Overlays Only
- Dashed Center Fade Grid as primary pattern
- Dot grid overlay with radial mask
- Floating decorative gold/navy orbs
- Clean white background base

### Team Image Treatment
- Use the uploaded team PNG with transparent background
- Place on right side at large scale
- Add soft shadow underneath for depth
- Optional subtle glow/highlight effect

### Text Side
- Left-aligned content for better readability
- Badge, heading, subtitle stacked cleanly
- 2x2 stats grid with glass-card styling

## Technical Implementation

### Files to Modify
1. **Copy team image to assets**: `src/assets/about/team-group-photo.png`
2. **Update `src/components/about/AboutHero.tsx`**: Complete redesign

### Component Structure
```tsx
<section className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Background Patterns Only - NO Gradients */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-white" />
    
    {/* Dashed Center Fade Grid Pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      maskImage: `
        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
      maskComposite: "intersect"
    }} />
    
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 
      bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      [background-size:16px_16px] 
      [mask-image:radial-gradient(ellipse_80%_60%_at_30%_50%,#000_40%,transparent_100%)]
      opacity-60"
    />
    
    {/* Floating orbs - decorative */}
    <div className="floating-orb floating-orb-gold w-96 h-96 top-10 left-0 opacity-20" />
    <div className="floating-orb floating-orb-navy w-80 h-80 bottom-0 right-20 opacity-15" />
  </div>

  {/* Content Grid */}
  <div className="container relative z-10 px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text Content */}
      <motion.div className="order-2 lg:order-1">
        <Badge />
        <h1>Your Trusted Partner...</h1>
        <p>Subtitle...</p>
        <Stats Grid (2x2)/>
      </motion.div>
      
      {/* Right: Team Photo */}
      <motion.div className="order-1 lg:order-2">
        <div className="relative">
          <img 
            src={teamPhoto} 
            alt="Keylink Corp professional team"
            className="w-full h-auto object-contain"
          />
          {/* Subtle shadow underneath */}
          <div className="absolute bottom-0 left-0 right-0 h-8 
            bg-gradient-to-t from-black/10 to-transparent 
            blur-lg -z-10" 
          />
          {/* Floating badge */}
          <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-lg px-4 py-2 border">
            <span className="text-2xl font-bold text-accent">50+</span>
            <span className="text-sm ml-1">Team Members</span>
          </div>
        </div>
      </motion.div>
      
    </div>
  </div>
</section>
```

## Key Changes Summary

| Aspect | Before | After |
|--------|--------|-------|
| Layout | Centered text over image | Two-column split layout |
| Background | Photo with navy gradient | White + pattern overlays only |
| Team Image | Hidden behind text | Featured prominently on right |
| Text Position | Centered overlay | Left-aligned, readable |
| Stats | Single row | 2x2 grid cards |
| Gradients | Heavy navy overlay | None - patterns only |

## Animation Details
- Text content: staggerChildren reveal
- Team image: scale/fade reveal
- Stats: staggered counter animation
- Floating orbs: subtle animate-float
