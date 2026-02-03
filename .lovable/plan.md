

# CompanyTypesTable Redesign: From Table to Minimal Cards

## Overview
Redesign the Company Types comparison section from a traditional table layout to a modern, minimal card-based design. The new design will maintain all SEO-valuable content while providing a cleaner, more visually appealing experience.

---

## Current vs New Design

```text
CURRENT DESIGN (Complex Table):
┌────────────────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ Feature │  SPC  │  WLL  │ Branch │ Holding │ Rep Office │           │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │ Min. Shareholders │ 1 │ 2-50 │ N/A │ 1+ │ N/A │                      │  │
│  │ Min. Capital │ BHD 50 │ BHD 20,000 │ Parent │ BHD 250,000 │ None │   │  │
│  │ ... (10 rows of data) ...                                           │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────┘


NEW DESIGN (Minimal Cards):
┌────────────────────────────────────────────────────────────────────────────┐
│           Choose Your Business Structure                                    │
│     All structures allow 100% foreign ownership                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐ │
│  │ [Icon] SPC          │  │ [Icon] WLL ⭐Popular│  │ [Icon] Branch       │ │
│  │ Single Person Co.   │  │ Limited Liability   │  │ Foreign Company     │ │
│  │                     │  │                     │  │                     │ │
│  │ Best for:           │  │ Best for:           │  │ Best for:           │ │
│  │ Solo entrepreneurs  │  │ SMEs & partnerships │  │ Int'l expansion     │ │
│  │                     │  │                     │  │                     │ │
│  │ ─────────────────── │  │ ─────────────────── │  │ ─────────────────── │ │
│  │ Capital: BHD 50     │  │ Capital: BHD 20K    │  │ Capital: Parent     │ │
│  │ Shareholders: 1     │  │ Shareholders: 2-50  │  │ Shareholders: N/A   │ │
│  │ Timeline: 3-5 days  │  │ Timeline: 5-7 days  │  │ Timeline: 7-10 days │ │
│  │ ✓ Trading Allowed   │  │ ✓ Trading Allowed   │  │ ✓ Trading Allowed   │ │
│  │ ✓ Can Hire Staff    │  │ ✓ Can Hire Staff    │  │ ✓ Can Hire Staff    │ │
│  │ ─────────────────── │  │ ─────────────────── │  │ ─────────────────── │ │
│  │ From BHD 750        │  │ From BHD 1,200      │  │ From BHD 1,500      │ │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘ │
│                                                                            │
│  ┌─────────────────────────────────────┐  ┌─────────────────────────────┐  │
│  │ [Icon] Holding                      │  │ [Icon] Rep Office           │  │
│  │ Bahrain Holding Company             │  │ Representative Office       │  │
│  │ ...                                 │  │ ...                         │  │
│  └─────────────────────────────────────┘  └─────────────────────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│          [Not sure? Get Free Expert Advice]                                │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### File to Modify
`src/components/services/formation/CompanyTypesTable.tsx`

### Changes Summary

1. **Remove**: Table component, TableHeader, TableBody, TableRow, TableCell imports
2. **Keep**: All company types data (SEO important), icons, animations, CTA section
3. **Add**: Card-based grid layout with all comparison data embedded in cards

---

## Card Design Specification

Each card will include:

| Element | Design Details |
|---------|---------------|
| Header | Icon + Name + Full Name + Popular badge (if applicable) |
| Best For | Prominent positioning with label |
| Key Specs | Capital, Shareholders, Timeline in clean list format |
| Features | Boolean features with checkmarks/X icons |
| Price | Gold accent color, prominent at bottom |

### Card Structure

```text
┌─────────────────────────────────────────────────────┐
│  ┌─────┐                                            │
│  │Icon │  SPC                        [⭐ Popular]   │
│  └─────┘  Single Person Company                     │
│                                                     │
│  Best for                                           │
│  Solo entrepreneurs                                 │
│                                                     │
│  ───────────────────────────────────────────────    │
│                                                     │
│  Min. Capital          BHD 50                       │
│  Shareholders          1                            │
│  Timeline              3-5 days                     │
│  Visa Quota            Based on office              │
│  Foreign Ownership     100%                         │
│                                                     │
│  ───────────────────────────────────────────────    │
│                                                     │
│  ✓ Trading Allowed                                  │
│  ✓ Can Hire Staff                                   │
│  ✗ Annual Audit Required                            │
│                                                     │
│  ───────────────────────────────────────────────    │
│                                                     │
│  From BHD 750                                       │
└─────────────────────────────────────────────────────┘
```

---

## Grid Layout

- **Desktop (lg+)**: 3 columns for first 3 cards, 2 columns centered for last 2
- **Tablet (md)**: 2 columns
- **Mobile**: 1 column full width

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {/* First 5 cards in responsive grid */}
</div>
```

---

## Card Styling

```tsx
// Default card
className="bg-white rounded-2xl p-6 border border-border/50 
           hover:shadow-lg hover:border-accent/30 transition-all duration-300"

// Popular (WLL) card - highlighted
className="bg-white rounded-2xl p-6 border-2 border-accent/50 
           shadow-lg hover:shadow-xl transition-all duration-300 
           relative overflow-hidden"
// With subtle gold gradient accent at top
```

---

## Feature Display

Boolean features displayed as inline list with icons:

```tsx
<div className="space-y-2">
  <div className="flex items-center gap-2">
    {tradingAllowed ? 
      <Check className="w-4 h-4 text-green-600" /> : 
      <X className="w-4 h-4 text-muted-foreground/50" />
    }
    <span className="text-sm">Trading Allowed</span>
  </div>
  // ... more features
</div>
```

---

## SEO Preservation

All content remains in the DOM for SEO:
- Company type names (H3 headings)
- Full names and descriptions
- All specification values
- Pricing information
- "Best For" use cases

The card format actually improves content hierarchy for search engines compared to tables.

---

## Animation Strategy

- Section header: Staggered fade-in (keep existing)
- Cards: Staggered reveal with `staggerContainer` and `staggerItem`
- Hover: Subtle lift with shadow increase

---

## Mobile Optimization

- Single column layout
- Larger touch targets
- Clear visual hierarchy
- No horizontal scrolling needed (unlike table)

---

## Benefits of Card Design

1. **Better UX**: Easier to scan and compare at a glance
2. **Mobile-First**: No horizontal scroll, works beautifully on all devices
3. **Visual Hierarchy**: Clear structure with icons and sections
4. **SEO Maintained**: All content remains indexable
5. **Modern Aesthetic**: Matches the rest of the site's minimal design
6. **Reduced Cognitive Load**: Information grouped logically per card

