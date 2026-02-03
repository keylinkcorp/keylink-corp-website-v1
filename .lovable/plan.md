

## Card-Based Comparison Redesign: SPC vs WLL

Transform the current tab-based comparison layout into a side-by-side card design that allows users to easily compare both company types at a glance.

---

### Current State

The section currently uses:
- Tab selector to toggle between SPC and WLL views
- Single comparison table showing both values
- Side CTA panel in a 3-column grid

**Issue:** Users must mentally compare values; switching tabs breaks flow

---

### Proposed Card Design

#### Visual Concept

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           HEADER (centered)                              │
│         "SPC vs WLL: Which is Right for You?"                           │
│                   Subtitle text                                          │
├─────────────────────────────────┬───────────────────────────────────────┤
│                                 │                                        │
│   ┌─────────────────────────┐   │   ┌─────────────────────────────┐     │
│   │    RECOMMENDED badge    │   │   │                              │     │
│   │         👤              │   │   │         👥                   │     │
│   │  Single Person Company  │   │   │    WLL (Partnership)        │     │
│   │                         │   │   │                              │     │
│   │  "Perfect for solo..."  │   │   │  "Ideal for businesses..."  │     │
│   │                         │   │   │                              │     │
│   │  ─────────────────────  │   │   │  ─────────────────────────  │     │
│   │                         │   │   │                              │     │
│   │  Shareholders    1 only │   │   │  Shareholders       2-50    │     │
│   │  Min Capital    BHD 50  │   │   │  Min Capital    BHD 20,000  │     │
│   │  Processing    3-14 days│   │   │  Processing       5-7 days  │     │
│   │  Control    Full owner  │   │   │  Control    Shared decision │     │
│   │  Best For  Solo entrep. │   │   │  Best For     Partnerships  │     │
│   │  Conversion  → WLL      │   │   │  Conversion         N/A     │     │
│   │                         │   │   │                              │     │
│   │  ─────────────────────  │   │   │  ─────────────────────────  │     │
│   │                         │   │   │                              │     │
│   │  [Start Your SPC →]     │   │   │  [Get WLL Quote →]          │     │
│   │                         │   │   │                              │     │
│   └─────────────────────────┘   │   └─────────────────────────────┘     │
│                                 │                                        │
└─────────────────────────────────┴───────────────────────────────────────┘
│                                                                          │
│                    Still not sure? Get free consultation                 │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

### Key Changes

| Area | Current | New Card Design |
|------|---------|-----------------|
| **Layout** | Tabs + table + side CTA | Two side-by-side cards |
| **Comparison** | Single table with both columns | Each card has its own feature list |
| **Tabs** | Toggle between SPC/WLL | Removed (both visible simultaneously) |
| **CTA** | Single CTA in side panel | Each card has its own CTA button |
| **Badge** | "Recommended" in tab | Floating badge on SPC card |
| **Visual** | Flat table rows | Cards with borders, icons per feature |

---

### Card Structure

Each comparison card will contain:

1. **Header Section**
   - Icon (User for SPC, Users for WLL)
   - Company type name
   - Short description
   - "Recommended" badge (SPC only)

2. **Key Highlight Stats (featured)**
   - Minimum Capital (prominent)
   - Processing Time (prominent)

3. **Feature List**
   - 6 comparison attributes with icons
   - Clean two-column layout (label + value)
   - Checkmarks for benefits

4. **CTA Button**
   - Primary button for SPC
   - Secondary/outline button for WLL

---

### Data Structure Update

```typescript
const cardData = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company",
    description: "Perfect for solo entrepreneurs who want full control",
    recommended: true,
    highlights: {
      capital: "BHD 50",
      timeline: "3-14 Days"
    },
    features: [
      { label: "Shareholders", value: "1 only" },
      { label: "Control", value: "Full owner control" },
      { label: "Best For", value: "Solo entrepreneurs" },
      { label: "Conversion", value: "Can upgrade to WLL" },
    ],
    cta: { text: "Start Your SPC", href: "/free-consultation", primary: true }
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL (Partnership)",
    description: "Ideal for businesses with multiple shareholders",
    recommended: false,
    highlights: {
      capital: "BHD 20,000",
      timeline: "5-7 Days"
    },
    features: [...],
    cta: { text: "Get WLL Quote", href: "/free-consultation", primary: false }
  }
];
```

---

### Visual Styling

**SPC Card (Recommended)**
- Border: 2px solid gold
- Background: White with subtle gold gradient at top
- "Recommended" badge: Gold background, navy text
- CTA: Primary gold button

**WLL Card (Standard)**
- Border: 1px solid border color
- Background: White
- No badge
- CTA: Outline/secondary button

**Both Cards**
- Rounded corners: `rounded-2xl`
- Hover effect: Shadow elevation + border color change
- Icon backgrounds: Colored circles with type-specific colors
- Feature rows: Alternating subtle backgrounds

---

### Bottom CTA Section

After the cards, add a subtle consultation prompt:

```text
┌─────────────────────────────────────────────────────────────────┐
│  💡 Not sure which structure is right for you?                   │
│     [Get Free Consultation →]                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

### Technical Implementation

**File:** `src/components/services/spc/SPCvsWLLComparison.tsx`

**Changes:**
1. Replace `comparisonData` array with `cardData` structure containing all info per card
2. Remove tab selector component and `activeType` state
3. Create two-column grid layout for cards
4. Each card renders independently with its own features
5. Add bottom CTA section for consultation
6. Add hover animations and transitions
7. Remove side panel (integrated into cards)

---

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (lg+) | 2 cards side-by-side, equal width |
| Tablet (md) | 2 cards side-by-side, slightly smaller |
| Mobile | Cards stacked vertically, SPC first |

---

### Benefits

1. **Instant Comparison** - Both options visible without clicking
2. **Clear Visual Hierarchy** - SPC stands out as recommended
3. **Individual CTAs** - Each path has its own action
4. **Modern Aesthetic** - Card design matches rest of site
5. **Better Mobile UX** - No tabs to navigate on small screens

