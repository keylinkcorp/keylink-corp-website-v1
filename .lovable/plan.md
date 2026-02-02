
# Workspace Cards Redesign & Landing Page Enhancement

## Overview

Transform the "Choose Your Perfect Workspace" section to match the reference design - a modern bento-style layout with image cards featuring floating icons, category labels, descriptions, bullet points, and CTA buttons. Also enhance the full landing page with consistent background overlays and improved visual polish.

---

## Reference Design Analysis

The uploaded reference shows:
- **Asymmetric bento grid layout**: Large featured card (left), smaller cards (right)
- **Image cards with dark gradient overlays**: Photos with subtle gradient for text readability
- **Floating icons**: Purple/accent colored icon badges in top-left corner of images
- **Content below images**: Category label (uppercase), title, description, bullet points
- **CTA buttons**: Dark buttons with dot indicator prefix
- **Clean white background**: Cards sit on a clean light background

---

## WorkspaceTypes.tsx - Complete Redesign

### New Layout Structure

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                From desks to full-floor offices                         │
│                   A workspace for every need                            │
├─────────────────────────────┬───────────────────────────────────────────┤
│                             │  ┌─────────────────────────────────────┐  │
│  ┌─────────────────────┐    │  │ [Icon]            [Meeting Room]   │  │
│  │ [Icon]              │    │  │                                    │  │
│  │                     │    │  │  Meeting Rooms                     │  │
│  │  [Hot Desk Image]   │    │  │  Book private rooms instantly...   │  │
│  │                     │    │  │  [● Browse meeting rooms]          │  │
│  │                     │    │  └─────────────────────────────────────┘  │
│  └─────────────────────┘    ├───────────────────┬───────────────────────┤
│  FLEXIBLE WORKSPACES        │ [Icon]            │ [Icon]                │
│  Coworking                  │ [Private Office]  │ [Creative Studios]    │
│  Work from 150+ coworking...│                   │                       │
│  • Daily, weekly plans      │  Private Offices  │  Virtual Office       │
│  • WiFi, coffee, plugs      │  Move your team...│  For podcasting...    │
│  • Solo or team             │  [● Talk to...]   │  [● View studios]     │
│  [● Explore memberships]    │                   │                       │
└─────────────────────────────┴───────────────────┴───────────────────────┘
```

### Updated Data Structure

```typescript
const workspaces = [
  {
    id: "coworking",
    category: "FLEXIBLE WORKSPACES",
    title: "Coworking",
    description: "Work from our premium coworking space in Sanabis with a single membership.",
    features: [
      "Daily, weekly or monthly plans",
      "WiFi, coffee, plugs & flexible seating",
      "Solo or team memberships"
    ],
    cta: "Explore memberships",
    icon: Users,
    image: hotDeskImg,
    size: "featured", // Large card spanning 2 rows
  },
  {
    id: "meeting-room",
    category: "ON-DEMAND",
    title: "Meeting Rooms",
    description: "Book private rooms instantly for calls, workshops or team discussions.",
    cta: "Browse meeting rooms",
    icon: Video,
    image: meetingRoomImg,
    size: "medium",
  },
  {
    id: "private-office",
    category: "SERVICED OFFICES",
    title: "Private Offices",
    description: "Move your team into a ready-to-use, serviced workspace.",
    cta: "Talk to advisor",
    icon: Building2,
    image: privateOfficeImg,
    size: "small",
  },
  {
    id: "virtual-office",
    category: "REMOTE SOLUTIONS",
    title: "Virtual Office",
    description: "Business address & mail handling for remote teams.",
    cta: "View packages",
    icon: Globe,
    image: loungeImg,
    size: "small",
  },
];
```

### Card Component Structure

Each card will have:
1. **Image with gradient overlay**: `bg-gradient-to-t from-black/60 to-transparent`
2. **Floating icon badge**: Positioned top-left with accent background
3. **Category label**: Uppercase, small, muted text
4. **Title**: Bold, large heading
5. **Description**: Regular text
6. **Features list** (for featured card): Bullet points with accent dots
7. **CTA Button**: Dark button with dot prefix indicator

### CSS Grid Layout

```css
/* Bento grid layout */
.workspace-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;
}

/* Featured card spans 2 rows on left */
.featured-card {
  grid-row: span 2;
}
```

---

## Landing Page Background Overlay Enhancements

### Consistent Section Backgrounds

Apply a unified background overlay pattern across all sections:

**Type 1 - Light sections (most sections):**
```typescript
// Subtle gold radial gradient + dot pattern
<div className="absolute inset-0">
  {/* Gold radial gradient */}
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--gold) / 0.08) 0%, transparent 50%)`,
    }}
  />
  {/* Dot pattern with fade mask */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
      backgroundSize: "32px 32px",
      maskImage: "linear-gradient(to bottom, black, transparent)",
    }}
  />
</div>
```

**Type 2 - Alternate sections (for visual variety):**
```typescript
// Warm secondary gradient
<div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
```

### Sections to Update

| Section | Current Background | Enhanced Background |
|---------|-------------------|---------------------|
| WorkspaceTypes | Dot pattern only | Gold radial + cleaner grid |
| CoworkingAmenities | Grid pattern + gold | Simplified, softer gradient |
| CoworkingWhyChoose | Secondary gradient | More prominent gold accent |
| CoworkingGallery | Secondary gradient | Cleaner with fade |
| CoworkingBenefits | Secondary/20 | Warmer gradient |
| CoworkingPricing | Basic gradient | Enhanced gold accent |
| CoworkingLocation | Secondary gradient | Consistent with page |

---

## Section Header Enhancement

Update all section headers to be more impactful:

**Current:**
```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-4">
  Choose Your Perfect <span className="text-accent">Workspace</span>
</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Description text...
</p>
```

**Enhanced (matching reference):**
```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
  From desks to full-floor offices
</h2>
<p className="text-lg md:text-xl text-muted-foreground">
  A workspace for every need
</p>
```

---

## CTA Button Style (Reference Design)

Create a new button variant with dot indicator:

```tsx
<button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
  <span className="w-2 h-2 rounded-full bg-accent" />
  Explore memberships
</button>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `WorkspaceTypes.tsx` | Complete redesign to bento layout with image cards |
| `CoworkingAmenities.tsx` | Soften background, enhance cards |
| `CoworkingWhyChoose.tsx` | Enhance background gradient |
| `CoworkingGallery.tsx` | Cleaner background overlay |
| `CoworkingBenefits.tsx` | Warmer background gradient |
| `CoworkingPricing.tsx` | Enhanced gold accents |
| `CoworkingLocation.tsx` | Consistent background |
| `CoworkingExplainer.tsx` | Background polish |

---

## Implementation Details

### WorkspaceTypes.tsx Key Changes

1. **Remove** current 4-column simple cards layout
2. **Add** image imports for all workspace photos
3. **Implement** asymmetric CSS grid:
   - Left: Featured card (coworking) spanning 2 rows
   - Right top: Medium card (meeting rooms)
   - Right bottom: 2 small cards side by side
4. **Add** floating icon badges with accent background
5. **Add** category labels, descriptions, bullet points
6. **Add** CTA buttons with dot indicator
7. **Add** subtle image overlays for text readability

### Card Hover Effects

```tsx
<div className="group cursor-pointer transition-all duration-300 hover:shadow-xl">
  {/* Image zoom on hover */}
  <img className="transition-transform duration-500 group-hover:scale-105" />
  
  {/* Icon highlight on hover */}
  <div className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors" />
</div>
```

---

## Expected Visual Result

After implementation:
- Modern bento-style workspace cards matching reference design
- Clean, professional image cards with proper overlays
- Floating icon badges that match brand accent color
- Clear visual hierarchy with category labels and CTAs
- Consistent background overlays across all page sections
- Enhanced hover interactions for better user engagement
- Mobile-responsive grid (stacks vertically on mobile)
