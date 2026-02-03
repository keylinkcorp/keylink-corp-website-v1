

## Minimal Modern Redesign: Tax Benefits Section

Transform the current Tax Benefits section into a cleaner, more minimal layout while maintaining SEO value and visual impact.

---

### Current State

The section currently has:
- 4 tax benefit cards in a grid
- Full GCC comparison table (5 rows)
- Detailed VAT information card with 3 stats + exemptions list
- CTA button + last updated text

This is **information-dense** but feels heavy visually.

---

### Proposed Minimal Design

#### Layout Concept

```text
┌─────────────────────────────────────────────────────────────┐
│                    HEADER (Simplified)                       │
│          "Tax-Free Business Environment"                     │
│              Short one-line subtitle                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│   │   0%    │  │   0%    │  │   50+   │  │  100%   │        │
│   │Corporate│  │Personal │  │  DTT    │  │ Profit  │        │
│   │  Tax    │  │ Income  │  │Countries│  │Repatriate│       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                              │
│   ─────────────────────────────────────────────────────     │
│                                                              │
│   "10% VAT (above BHD 37,500)"  •  "NBR Info →"             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### Key Changes

| Area | Current | New Minimal |
|------|---------|-------------|
| **Cards** | 4 cards with icons, descriptions, borders | 4 stat blocks - just number + label, no cards |
| **GCC Table** | Full 5-row comparison table | Remove entirely (move to FAQ or separate page) |
| **VAT Section** | 3-column stats + exemptions list | Single inline text with external link |
| **Background** | Dot pattern with muted/30 | Clean white or very subtle gradient |
| **CTA** | Button with text | Remove (handled by other sections) |

---

### Implementation Details

**File to modify:** `src/components/services/formation/TaxBenefitsSection.tsx`

**Structure:**

1. **Simplified Header**
   - Keep section label (for SEO)
   - Shorter headline: "Tax-Free Business Environment"
   - One-line subtitle

2. **Stat Row (horizontal)**
   - 4 large stats in a clean horizontal row
   - Large bold number + small label below
   - No icons, no borders, no background cards
   - Subtle separator lines or spacing

3. **VAT Note (inline)**
   - Single line: "10% VAT applies above BHD 37,500 threshold"
   - NBR external link inline

4. **Remove:**
   - GCC comparison table
   - Detailed VAT card
   - VAT exemptions chips
   - Quarterly filing info
   - CTA button
   - Last updated text

---

### Visual Style

- **Typography-driven**: Big numbers, minimal decoration
- **Whitespace**: Generous padding, clean separation
- **Colors**: Primary for numbers, muted-foreground for labels
- **Animation**: Subtle fade-in, counter animation for stats

---

### Technical Details

The implementation will:
- Remove ~100 lines of code (table, VAT card, CTA)
- Simplify the JSX structure significantly
- Use CSS flexbox for horizontal stat layout
- Keep motion animations but simplify them
- Maintain semantic HTML for SEO (h2, aria labels)
- Reduce component complexity for faster rendering

