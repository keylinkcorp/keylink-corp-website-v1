

## Minimal Redesign: Bank Account Opening Section

Transform this information-heavy section into a clean, minimal layout that maintains SEO value while reducing visual clutter.

---

### Current State (Too Heavy)

The section currently contains:
- **3 account type cards** with icons, descriptions, and feature lists
- **4 digital banking feature cards** in a grid
- **4 bank cards** with 8+ data points each (timeline, deposit, currencies, etc.)
- **3-step timeline** with visual connector
- **6-item documents list**
- **CTA box** with 3 features

**Total lines of code:** ~384 lines

---

### Proposed Minimal Design

#### Visual Concept

```text
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│           "Corporate Bank Account Opening"                   │
│              Short one-line subtitle                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│   │  2-3    │  │ BHD 500 │  │   4     │  │  95%    │        │
│   │ Weeks   │  │Min Deposit│ │ Banks  │  │ Approval│        │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                              │
│   ─────────────────────────────────────────────────────     │
│                                                              │
│   NBB • BBK • Ahli United • Standard Chartered              │
│                                                              │
│   ─────────────────────────────────────────────────────     │
│                                                              │
│   "We handle bank introductions • Get connected →"          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### Key Changes

| Area | Current | New Minimal |
|------|---------|-------------|
| **Account Types** | 3 cards with icons, descriptions, features | Remove entirely |
| **Digital Features** | 4-item grid in colored box | Remove entirely |
| **Bank Cards** | 4 detailed cards | Single line listing bank names only |
| **Timeline** | 3-step visual timeline | Remove (covered by "2-3 Weeks" stat) |
| **Documents** | 6-item checklist | Remove (move to FAQ or consultation) |
| **CTA** | Large box with features | Single inline link |
| **Stats** | None | 4 key stats (timeline, deposit, banks, approval) |

---

### What We Keep (For SEO)

- Section heading with target keywords ("Corporate Bank Account", "Bahrain")
- Bank names (important for local SEO and credibility)
- Timeline information (2-3 weeks - featured snippet potential)
- Minimum deposit (price information)
- Link to consultation

### What We Remove

- Account types cards (generic info)
- Digital banking features (expected for all banks)
- Detailed bank comparison cards
- Visual timeline steps
- Documents checklist
- Large CTA box

---

### Implementation

**File:** `src/components/services/formation/BankAccountOpening.tsx`

**New Structure:**

1. **Simplified Header**
   - Section label: "Post-Formation Banking"
   - Headline: "Corporate Bank Account Opening"
   - One-line subtitle

2. **4 Key Stats (horizontal row)**
   - 2-3 Weeks (average timeline)
   - BHD 500 (minimum deposit)
   - 4 Banks (partner network)
   - 95% (approval rate)

3. **Bank Names (single line)**
   - Clean horizontal list: NBB, BBK, Ahli United, Standard Chartered
   - No cards, no details

4. **Inline CTA**
   - "We handle bank introductions and documentation"
   - "Get bank introduction →" link

---

### Visual Style

- Clean white background (no patterns)
- Typography-driven design
- Large bold numbers for stats
- Generous whitespace
- Primary color for headings
- Gold accent for numbers
- Muted text for labels

---

### Code Reduction

- From ~384 lines to ~100 lines
- Remove all bank detail cards
- Remove account types section
- Remove digital features section
- Remove timeline visual
- Remove documents list
- Simplify data structure

---

### SEO Considerations

The minimal version maintains:
- Proper h2 heading with "corporate bank account" keywords
- Bank names for credibility and local SEO
- Timeline and deposit info for featured snippets
- Semantic HTML structure
- Internal linking to consultation

