

# Minimal 3-Column Card Design Implementation

## Overview

Apply the minimal 3-column card design with Read More/Less functionality to service comparison components across Commercial Registration, Business License, and Company Formation pages. This creates visual consistency with the recently updated AmendmentTypesDeepDive component.

---

## Target Components

| Component | Current Design | New Design |
|-----------|----------------|------------|
| `CRTypesComparison.tsx` | Tabbed interface with detailed panel | 3-column cards with Read More/Less |
| `BLTypesComparison.tsx` | Tabbed interface with detailed panel | 3-column cards with Read More/Less |
| `CompanyTypesComparison.tsx` | 5-column comparison table | 3-column cards with Read More/Less |

---

## Design Pattern (From AmendmentTypesDeepDive)

### Card Structure
```text
+----------------------------------+
|  [Icon]  Title                   |
|                                  |
|  Short description (2-3 lines)  |
|                                  |
|  [Read More]  (if content long)  |
+----------------------------------+
```

### Technical Pattern
- **State**: `useState<number[]>([])` for tracking expanded cards
- **Truncation**: 100 character threshold
- **Grid**: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Card Styling**: `bg-white rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/30`

---

## Component 1: CRTypesComparison.tsx

### Current Data Structure
```typescript
entityTypes = [
  { id, icon, name, bestFor, capital, ownership, processing, liability, features[], popular }
]
```

### Conversion Strategy
- Combine `bestFor`, `capital`, `ownership`, `processing`, `liability` into description
- Convert `features[]` into additional details
- Remove tabbed interface and detailed panel
- Apply 3-column card grid

### New Card Content
For each entity type:
- **Icon**: Use existing icon
- **Title**: Use existing name
- **Short Description**: `bestFor` value
- **Full Content**: All metrics + features list as formatted text

---

## Component 2: BLTypesComparison.tsx

### Current Data Structure
```typescript
licenseTypes = [
  { id, icon, name, bestFor, activities[], entity, govFee, processing, popular }
]
```

### Conversion Strategy
- Use `bestFor` as short description
- Combine `entity`, `govFee`, `processing` into expandable details
- Convert `activities[]` to bulleted list in details
- Remove tabbed interface and CTA panel
- Apply 3-column card grid

### New Card Content
For each license type:
- **Icon**: Use existing icon
- **Title**: Use existing name (keep "License" suffix)
- **Short Description**: `bestFor` value
- **Full Content**: Gov fee, processing time, entity types, activities list

---

## Component 3: CompanyTypesComparison.tsx

### Current Data Structure
```typescript
companyTypes = [
  { name, fullName, bestFor, ownership, minShareholders, minCapital, timeline, price, popular }
]
```

### Conversion Strategy
- Create description from key attributes
- Remove comparison table layout
- Remove inline CTA buttons per column
- Apply 3-column card grid with Read More/Less

### New Card Content
For each company type:
- **Icon**: Add new icon mapping (User for SPC, Users for WLL, Building2 for Branch, Landmark for Holding)
- **Title**: Use `fullName`
- **Short Description**: `bestFor` value
- **Full Content**: Capital, ownership, shareholders, timeline, pricing info

---

## Implementation Details

### Shared Pattern (Applied to All 3 Components)

**Imports**:
```typescript
import { useState } from "react";
// Keep existing animation imports
```

**Constants**:
```typescript
const TRUNCATE_LENGTH = 100;
```

**State**:
```typescript
const [expandedCards, setExpandedCards] = useState<number[]>([]);
```

**Toggle Function**:
```typescript
const toggleCard = (index: number) => {
  setExpandedCards(prev => 
    prev.includes(index) 
      ? prev.filter(i => i !== index)
      : [...prev, index]
  );
};
```

**Helper Functions**:
```typescript
const shouldShowToggle = (content: string) => content.length > TRUNCATE_LENGTH;
const getTruncatedText = (text: string) => {
  if (text.length <= TRUNCATE_LENGTH) return text;
  return text.slice(0, TRUNCATE_LENGTH).trim() + "...";
};
```

**Card JSX Pattern**:
```tsx
<motion.div
  variants={staggerItem}
  className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/30 transition-all"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
  </div>
  
  <p className="text-sm text-muted-foreground leading-relaxed">
    {isExpanded ? fullContent : getTruncatedText(shortDescription)}
  </p>
  
  {hasLongContent && (
    <button
      onClick={() => toggleCard(index)}
      className="text-accent text-sm font-medium mt-3 hover:underline"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  )}
</motion.div>
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/services/cr/CRTypesComparison.tsx` | Complete redesign to 3-column cards |
| `src/components/services/bl/BLTypesComparison.tsx` | Complete redesign to 3-column cards |
| `src/components/services/formation/CompanyTypesComparison.tsx` | Complete redesign to 3-column cards |

---

## Elements Preserved

- Section headers (badge, H2, subheading)
- Background patterns
- Framer Motion animations (staggerContainer, staggerItem)
- All existing data (restructured for new display)
- Icon associations

---

## Elements Removed

- Tabbed selector interface
- Detailed side panels with CTA
- Comparison tables
- "Popular" badge overlays
- Inline CTA buttons per card
- Quick comparison tables at bottom

---

## Responsive Behavior

| Breakpoint | Columns |
|------------|---------|
| Mobile (<768px) | 1 column |
| Tablet (768-1023px) | 2 columns |
| Desktop (1024px+) | 3 columns |

---

## Build Order

1. Update `CRTypesComparison.tsx` - 4 entity type cards
2. Update `BLTypesComparison.tsx` - 4 license type cards
3. Update `CompanyTypesComparison.tsx` - 4 company type cards

---

## Quality Checklist

- All cards use consistent 3-column grid
- Read More/Less buttons appear only when content exceeds threshold
- Icon containers use `bg-accent/10` consistently
- Hover states include `shadow-md` and `border-accent/30`
- Animations preserved for scroll-triggered reveals
- Mobile-responsive with proper stacking

