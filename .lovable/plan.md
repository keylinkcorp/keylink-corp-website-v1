

# Workspace Cards Redesign & Location Update

## Overview

Transform the "Choose Your Perfect Workspace" section from the current bento-style image cards to a modern, clean 4-column layout matching the reference design. Also update all location references to "Sanabis Exhibition Tower".

---

## Changes Summary

### 1. WorkspaceTypes.tsx - Complete Redesign

**Current Design Issues:**
- Bento grid with varying column spans (complex layout)
- Full background images with overlays
- Too much visual weight

**New Design (Matching Reference):**
- Clean 4-column equal grid (1 row)
- Simple white cards with subtle borders
- Icon in accent/10 background container
- Bold stat/title below
- Short label underneath
- Minimal, modern aesthetic

```text
New Layout:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    [Icon]   │  │    [Icon]   │  │    [Icon]   │  │    [Icon]   │
│             │  │             │  │             │  │             │
│   Hot Desk  │  │  Dedicated  │  │   Private   │  │  Meeting    │
│  BHD 15/day │  │  BHD 99/mo  │  │  BHD 299/mo │  │  BHD 25/hr  │
│             │  │             │  │             │  │             │
│ Flex access │  │ Your spot   │  │ Team space  │  │ Hourly book │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

**New Card Structure:**
- White background with rounded-xl border
- Subtle hover effect (border-accent/30, shadow)
- Icon container: rounded-lg bg-accent/10
- Title: bold navy text (workspace type)
- Price: large accent color text
- Description: muted small text

---

### 2. Location Updates

Update address in both files to:
- **Sanabis Exhibition Tower**
- **Sanabis, Kingdom of Bahrain**

**Files to Update:**
- `CoworkingLocation.tsx` - Address card and Google Maps link
- `CoworkingContact.tsx` - Contact info panel

**New Nearby Landmarks (Sanabis area):**
- Bahrain Exhibition Centre
- Seef Mall
- City Centre Bahrain
- Free parking available
- Restaurants & cafes nearby

---

## Technical Implementation

### WorkspaceTypes.tsx Changes

**Remove:**
- Image imports (hot-desk.jpg, private-office.jpg, etc.)
- Complex gridClass with varying spans
- Background images and overlays
- "Learn More" buttons

**Add:**
- Simple 4-column grid: `grid grid-cols-2 lg:grid-cols-4 gap-6`
- Clean card structure with icon, price, and description
- Subtle hover animations

**New Data Structure:**
```typescript
const workspaces = [
  {
    id: "hot-desk",
    title: "Hot Desk",
    price: "BHD 15",
    period: "/day",
    description: "Flexible daily access",
    icon: Laptop,
  },
  {
    id: "dedicated-desk",
    title: "Dedicated Desk",
    price: "BHD 99",
    period: "/month",
    description: "Your permanent spot",
    icon: Users,
  },
  {
    id: "private-office",
    title: "Private Office",
    price: "BHD 299",
    period: "/month",
    description: "Team workspace",
    icon: Building2,
  },
  {
    id: "meeting-room",
    title: "Meeting Room",
    price: "BHD 25",
    period: "/hour",
    description: "Hourly booking",
    icon: Clock,
  },
];
```

### CoworkingLocation.tsx Changes

**Update Address:**
```typescript
<h3>Keylink Coworking Space</h3>
<p>
  Sanabis Exhibition Tower<br />
  Sanabis, Kingdom of Bahrain
</p>
```

**Update Nearby Landmarks:**
```typescript
const nearbyPlaces = [
  { icon: Building, name: "Bahrain Exhibition Centre", distance: "2 min walk" },
  { icon: ShoppingBag, name: "Seef Mall", distance: "5 min drive" },
  { icon: Landmark, name: "City Centre Bahrain", distance: "7 min drive" },
  { icon: Car, name: "Free parking", distance: "Available" },
  { icon: Coffee, name: "Restaurants & cafes", distance: "Within building" },
];
```

**Update Google Maps Link:**
```typescript
href="https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain"
```

### CoworkingContact.tsx Changes

**Update Location in Contact Panel:**
```typescript
<p className="text-primary-foreground/70">
  Sanabis Exhibition Tower<br />
  Sanabis, Kingdom of Bahrain
</p>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/services/coworking/WorkspaceTypes.tsx` | Complete redesign to 4-column simple cards |
| `src/components/services/coworking/CoworkingLocation.tsx` | Update address and nearby landmarks |
| `src/components/services/coworking/CoworkingContact.tsx` | Update location in contact panel |

---

## Visual Result

After implementation:
- Modern, minimal 4-column workspace cards matching reference design
- Consistent location: "Sanabis Exhibition Tower" across all sections
- Clean aesthetic with proper visual hierarchy
- Cards that are informative but not overwhelming
- Mobile responsive: 2 columns on mobile, 4 columns on desktop

