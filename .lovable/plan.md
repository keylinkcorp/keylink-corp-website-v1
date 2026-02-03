

## Minimal Redesign: Industrial Zones & Business Parks

Transform this information-dense section into a clean, typography-driven layout that Google still loves.

---

### Current State (Too Heavy)

The section currently contains:
- Comparison table with 5 columns
- 4 large zone cards with 8+ data points each
- Background grid pattern
- CTA info box
- Multiple icons, badges, and nested sections

**Total lines of code:** ~340 lines

---

### Proposed Minimal Design

#### Visual Concept

```text
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│              "Strategic Business Locations"                  │
│              Short one-line subtitle                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│   │    BIW      │  │    BLZ      │  │    BIIP     │         │
│   │ Logistics   │  │ E-commerce  │  │Manufacturing│         │
│   │ From BHD 2  │  │ From BHD 3  │  │From BHD 1.5 │         │
│   └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
│                    ┌─────────────┐                          │
│                    │   Sitra     │                          │
│                    │Heavy Industry│                         │
│                    │ From BHD 1  │                          │
│                    └─────────────┘                          │
│                                                              │
│   ─────────────────────────────────────────────────────     │
│        "Land from BHD 1/sqm • Get location advice →"        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### Key Changes

| Area | Current | New Minimal |
|------|---------|-------------|
| **Table** | 5-column comparison table | Remove entirely |
| **Zone Cards** | 4 cards with 8+ data points | 4 simple cards: name + focus + price only |
| **Card Content** | Location, distances, utilities, highlights, incentives, success stories | Just: Zone name, focus sector, starting price |
| **Background** | Grid pattern | Clean white |
| **CTA** | Large info box with button | Single inline link |
| **Icons** | Multiple icons per card | One icon per card |

---

### What We Keep (For SEO)

- Section heading hierarchy (h2, h3)
- Zone names (important keywords)
- Focus sectors (searchable terms)
- Price range (featured snippet bait)
- Link to consultation

### What We Remove

- Comparison table
- Detailed highlights lists
- Success stories
- Infrastructure details
- Distance metrics
- Utility specifications
- Badge components
- Background pattern
- Large CTA box

---

### Implementation

**File:** `src/components/services/formation/FreeZonesGuide.tsx`

**New Structure:**

1. **Simplified Header**
   - Section label: "Strategic Locations"
   - Headline: "Strategic Business Locations"
   - One-line subtitle with key value prop

2. **Simple Zone Cards (4 cards, 2x2 grid)**
   - Icon + Zone name
   - Focus sector (one line)
   - Starting price
   - No borders, minimal styling

3. **Inline Footer**
   - "Land from BHD 1/sqm/month"
   - Link to consultation

---

### Visual Style

- Clean white background (no patterns)
- Typography-driven design
- Generous whitespace
- Subtle hover states
- Primary color for zone names
- Muted text for secondary info
- Gold accent for prices

---

### Code Reduction

- From ~340 lines to ~100 lines
- Remove comparison table entirely
- Simplify zone data structure
- Remove unused imports (Badge, Check, Ruler, Zap, etc.)

---

### SEO Considerations

The minimal version maintains:
- Proper h2 heading with target keywords
- Zone names for local SEO
- Price information for featured snippets
- Semantic HTML structure
- Internal linking to consultation page

