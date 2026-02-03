

# Simplify Team Cards

## Overview
Remove social media icons and "Learn more" link from team cards, and adjust the card to fit the image size naturally.

---

## Changes Required

### File: `src/components/about/AboutTeam.tsx`

### 1. Remove Unused Imports
Remove `ArrowRight`, `Facebook`, `Instagram` from lucide-react imports (keep `Linkedin` for featured member only).

### 2. Simplify Card Footer
Remove the entire footer section that contains:
- "Learn more →" link
- Facebook, Instagram, LinkedIn icons

### 3. Adjust Image Container
Change from fixed height `h-72` to `aspect-[4/5]` to let the image define the card height naturally.

---

## Before vs After

### Before (Current)
```text
┌─────────────────────────┐
│  [IMAGE - fixed h-72]   │
│                         │
├─────────────────────────┤
│  Name                   │
│  Role                   │
│                         │
│  Learn more →   📘 📷 🔗│
└─────────────────────────┘
```

### After (New)
```text
┌─────────────────────────┐
│                         │
│  [IMAGE - aspect 4:5]   │
│                         │
├─────────────────────────┤
│  Name                   │
│  Role                   │
└─────────────────────────┘
```

---

## Code Changes

### 1. Update Imports (Line 4)
```tsx
// Before
import { Linkedin, Quote, ChevronDown, ChevronUp, ArrowRight, Facebook, Instagram } from "lucide-react";

// After
import { Linkedin, Quote, ChevronDown, ChevronUp } from "lucide-react";
```

### 2. Update Image Container (Line 277)
```tsx
// Before
<div className="relative h-72 overflow-hidden" ...>

// After
<div className="relative aspect-[4/5] overflow-hidden" ...>
```

### 3. Remove Footer Section (Lines 300-321)
Remove the entire footer div containing "Learn more" and social icons.

### 4. Simplify Content Section
```tsx
// After
<div className="p-5">
  <h4 className="font-bold text-foreground text-lg mb-1">{member.name}</h4>
  <p className="text-muted-foreground text-sm">{member.role}</p>
</div>
```

---

## Result
Clean, minimal team cards that:
- Show the full image without cropping
- Display only name and role
- Have no social media or navigation links
- Card height adapts to image proportions

