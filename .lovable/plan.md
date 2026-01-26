
# Redesign: Bank Account Opening Section - Card-Based Layout

## Overview

Replacing the current table format with a clean, card-based layout that displays each bank's information in individual cards. This approach is more mobile-friendly, visually engaging, and maintains the minimalist aesthetic.

---

## Current vs Proposed Design

| Aspect | Current (Table) | Proposed (Cards) |
|--------|-----------------|------------------|
| Layout | Single table with 4 rows | 4 individual bank cards in a 2x2 grid |
| Mobile | Horizontal scroll required | Stacked cards, no scroll |
| Visual hierarchy | Flat, uniform rows | Each bank highlighted separately |
| Scanability | Good for comparison | Better for individual bank details |
| White space | Dense rows | More breathing room |

---

## New Card Layout Structure

```text
+------------------------------------------------------------------+
|  [Label] POST-FORMATION BANKING                                   |
|                                                                   |
|  H2: Open Your Corporate Bank Account                             |
|  Subtitle: One paragraph about banking importance                 |
|                                                                   |
|  H3: Top Banks for Business Accounts                              |
|                                                                   |
|  +---------------------------+  +---------------------------+     |
|  | National Bank of Bahrain  |  | Bank of Bahrain & Kuwait  |     |
|  | Timeline: 2-3 weeks       |  | Timeline: 2-3 weeks       |     |
|  | Min Deposit: BHD 500      |  | Min Deposit: BHD 1,000    |     |
|  | Best For: Local SMEs      |  | Best For: Trading Comp.   |     |
|  +---------------------------+  +---------------------------+     |
|                                                                   |
|  +---------------------------+  +---------------------------+     |
|  | Ahli United Bank          |  | Standard Chartered        |     |
|  | Timeline: 2-4 weeks       |  | Timeline: 3-4 weeks       |     |
|  | Min Deposit: BHD 2,000    |  | Min Deposit: USD 10,000   |     |
|  | Best For: Regional Ops    |  | Best For: International   |     |
|  +---------------------------+  +---------------------------+     |
|                                                                   |
|  [Required Documents]           [CTA Box]                         |
+------------------------------------------------------------------+
```

---

## Card Design Specification

Each bank card will feature:
- **Bank name** as card header (bold, primary color)
- **Three info rows** with label + value format:
  - Timeline: 2-3 weeks
  - Min Deposit: BHD 500
  - Best For: Local SMEs (gold accent)
- **Subtle styling**: White background, light border, hover elevation
- **Gold left accent border** to match brand

```tsx
// Single bank card structure
<div className="p-6 rounded-xl border border-border bg-white hover:shadow-md 
                hover:border-gold/40 transition-all duration-300 
                border-l-4 border-l-gold">
  <h4 className="font-semibold text-primary text-lg mb-4">
    {bank.name}
  </h4>
  <div className="space-y-3 text-sm">
    <div className="flex justify-between">
      <span className="text-muted-foreground">Timeline</span>
      <span className="font-medium text-primary">{bank.timeline}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-muted-foreground">Min Deposit</span>
      <span className="font-medium text-primary">{bank.deposit}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-muted-foreground">Best For</span>
      <span className="font-medium text-gold">{bank.bestFor}</span>
    </div>
  </div>
</div>
```

---

## Responsive Grid Behavior

| Breakpoint | Bank Cards Layout | Documents + CTA |
|------------|-------------------|-----------------|
| Desktop (lg+) | 2x2 grid | Side-by-side |
| Tablet (md) | 2x2 grid | Stacked |
| Mobile (sm) | Single column (4 stacked) | Stacked |

---

## Technical Implementation

### File to Modify
**`src/components/services/formation/BankAccountOpening.tsx`**

### Key Changes
1. **Remove table element** entirely (lines 75-99)
2. **Add 4-column responsive grid** for bank cards
3. **Create individual bank card components** with:
   - Gold left border accent
   - Label/value rows for timeline, deposit, best for
   - Hover state with subtle shadow
4. **Keep existing header and documents/CTA sections** unchanged
5. **Add stagger animation** for cards appearing sequentially

---

## Animation Enhancement

Cards will animate in with a stagger effect:
```tsx
{banks.map((bank, index) => (
  <motion.div
    key={bank.name}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    className="..." // card styles
  >
    ...
  </motion.div>
))}
```

---

## Expected Outcomes

| Metric | Before (Table) | After (Cards) |
|--------|----------------|---------------|
| Mobile UX | Scroll required | No scroll, stacked |
| Visual appeal | Flat, utilitarian | Modern, engaging |
| Scanability | Row-by-row | Card-by-card (easier) |
| Hover feedback | Row highlight | Card elevation |
| Brand alignment | Partial | Full (gold accents) |
