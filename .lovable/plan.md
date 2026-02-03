

# Modern Team Card Redesign

## Overview
Redesign the team cards to match the reference design - clean, modern cards with full portrait images (not cropped), subtle background patterns, and content positioned below the image instead of overlaid.

---

## Current Issues
- Images use `aspect-square` with `object-cover` causing cropping
- Heavy gradient overlays obscure team member photos
- Content is overlaid on top of images, making it hard to see faces
- Cards feel cluttered with the masonry approach
- TiltCard + overlays create a busy visual effect

---

## New Design (Based on Reference)

```text
┌─────────────────────────────────────────────────────────────────────┐
│  CLEAN TEAM GRID (3 columns desktop, 2 tablet, 1 mobile)           │
│                                                                      │
│  ┌────────────────────┐  ┌────────────────────┐  ┌─────────────────┐│
│  │ ╭──────────────────╮│  │ ╭──────────────────╮│  │ ╭───────────────╮│
│  │ │  Light Gray Bg   ││  │ │  Light Gray Bg   ││  │ │  Light Gray Bg││
│  │ │   + Line Pattern ││  │ │   + Line Pattern ││  │ │  + Line Pattern│
│  │ │                  ││  │ │                  ││  │ │               ││
│  │ │   [FULL PHOTO]   ││  │ │   [FULL PHOTO]   ││  │ │ [FULL PHOTO]  ││
│  │ │   Upper body     ││  │ │   Upper body     ││  │ │  Upper body   ││
│  │ │   visible        ││  │ │   visible        ││  │ │   visible     ││
│  │ │                  ││  │ │                  ││  │ │               ││
│  │ ╰──────────────────╯│  │ ╰──────────────────╯│  │ ╰───────────────╯│
│  │                      │  │                      │  │                 │
│  │ Hussain Derazi      │  │ Mishal Atif          │  │ Rayhan Chowdury │
│  │ Managing Director   │  │ HR & Accounting Mgr  │  │ Digital & Design│
│  │                      │  │                      │  │                 │
│  │ Learn more →   📘 📷│  │ Learn more →   📘 📷│  │ Learn more → 📘📷│
│  └────────────────────┘  └────────────────────┘  └─────────────────┘│
└─────────────────────────────────────────────────────────────────────┘
```

---

## Key Changes

### 1. Card Structure
- **Remove TiltCard** - simpler, cleaner feel
- **White/light card background** with rounded corners
- **Image container** with light gray background + decorative line pattern
- **Content section** below image (not overlaid)

### 2. Image Display
- **`object-contain`** instead of `object-cover` - shows full person
- **Aspect ratio `aspect-[4/5]`** for portrait photos
- **No heavy gradient overlays** - subtle bottom fade only if needed
- **Light background fills gaps** around the actual photo

### 3. Image Container Background Pattern
Matching the reference - subtle curved/wave lines pattern:
```css
background-color: #F8F8F8;
background-image: url("data:image/svg+xml,...curved lines pattern...");
```

### 4. Content Layout
- **Name**: Bold, left-aligned, dark text
- **Role**: Muted text, smaller size
- **Bottom row**: "Learn more →" link + Social icons (Facebook, Instagram)
- **Hover**: Subtle lift + shadow

### 5. Grid Layout
- **3 columns** on desktop (not 4)
- **2 columns** on tablet
- **1 column** on mobile
- **Uniform card sizes** (no wide cards)
- **Consistent gaps**

---

## Technical Implementation

### New Card Structure
```tsx
<motion.div
  variants={itemVariants}
  className="group bg-white rounded-2xl overflow-hidden shadow-sm 
             hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
>
  {/* Image Container with Pattern Background */}
  <div 
    className="relative h-72 overflow-hidden"
    style={{
      backgroundColor: '#F8F8F8',
      backgroundImage: `url("data:image/svg+xml,${wavePattern}")`,
      backgroundSize: 'cover',
    }}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-contain object-bottom"
    />
  </div>
  
  {/* Content Below Image */}
  <div className="p-5">
    <h4 className="font-bold text-primary text-lg">{member.name}</h4>
    <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
    
    {/* Footer Row */}
    <div className="flex items-center justify-between">
      <a 
        href="#" 
        className="inline-flex items-center gap-1 text-sm font-medium 
                   text-primary hover:text-accent transition-colors"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </a>
      
      <div className="flex gap-2">
        <a href="#" className="text-primary hover:text-accent">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="text-primary hover:text-accent">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</motion.div>
```

### SVG Wave Pattern for Background
```javascript
const wavePattern = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path d="M0,80 Q50,70 100,80 T200,80" stroke="#e5e5e5" 
          stroke-width="0.5" fill="none" />
    <path d="M0,100 Q50,90 100,100 T200,100" stroke="#e5e5e5" 
          stroke-width="0.5" fill="none" />
    <path d="M0,120 Q50,110 100,120 T200,120" stroke="#e5e5e5" 
          stroke-width="0.5" fill="none" />
    ... more curved lines
  </svg>
`);
```

---

## Featured Member Card (Hussain Derazi)

Keep the featured founder card at top but update the team grid below to use the new clean design. The featured card can remain as-is since it serves a different purpose (highlighting leadership).

---

## Grid Changes

### Before
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {/* Masonry with wide cards */}
```

### After
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Uniform clean cards */}
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/about/AboutTeam.tsx` | Complete redesign of team member cards in the grid |

---

## Icon Additions
Add these icons from lucide-react:
- `ArrowRight` - for "Learn more" link
- `Facebook` - social icon (or use placeholder)
- `Instagram` - social icon

---

## Visual Result

Clean, professional team cards that:
- Show full team member photos without cropping
- Have subtle decorative wave patterns in background
- Display name, role, and action links cleanly below
- Feel modern and premium without being busy
- Match the reference design aesthetic

