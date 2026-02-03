

## Modern Redesign: Bank Account Opening Section

Transform the current minimal layout into a visually compelling split-layout design with images while maintaining SEO value.

---

### Current State

The section has:
- Centered header
- 4-stat horizontal row
- Bank names as text
- Inline CTA link

**Issue:** Clean but visually flat — no images, no visual hierarchy difference

---

### Proposed Modern Design

#### Visual Concept

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           HEADER (centered)                              │
│            "Corporate Bank Account Opening"                              │
│                   One-line subtitle                                      │
├────────────────────────────────┬────────────────────────────────────────┤
│                                │                                         │
│      ┌────────────────────┐    │   ┌─────────┐  ┌─────────┐             │
│      │                    │    │   │  2-3    │  │ BHD 500 │             │
│      │   PROFESSIONAL     │    │   │ Weeks   │  │Min Dep  │             │
│      │   IMAGE            │    │   └─────────┘  └─────────┘             │
│      │   (consultation)   │    │                                         │
│      │                    │    │   ┌─────────┐  ┌─────────┐             │
│      │   Floating badge:  │    │   │   4     │  │  95%    │             │
│      │   "Major Banks"    │    │   │ Banks   │  │ Approval│             │
│      └────────────────────┘    │   └─────────┘  └─────────┘             │
│                                │                                         │
│                                │   "We handle introductions..."         │
│                                │   [Get bank introduction →]            │
│                                │                                         │
├────────────────────────────────┴────────────────────────────────────────┤
│                                                                          │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                                │
│   │ NBB  │  │ BBK  │  │ AUB  │  │ SC   │   Partner Banks                │
│   │ logo │  │ logo │  │ logo │  │ logo │   (as text badges)             │
│   └──────┘  └──────┘  └──────┘  └──────┘                                │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Layout Changes

| Area | Current | New Modern |
|------|---------|------------|
| **Layout** | Single column centered | Two-column split (image + content) |
| **Image** | None | Professional consultation image with floating badge |
| **Stats** | Horizontal row | 2x2 compact grid on right side |
| **Bank Names** | Text line with bullets | Styled badges/cards in bottom row |
| **CTA** | Inline text link | Prominent button below stats |
| **Background** | Plain white | Subtle grid pattern fade |

---

### Implementation Details

**File:** `src/components/services/formation/BankAccountOpening.tsx`

#### 1. Add Image Import
Use existing asset: `bank-consultation-meeting.jpg`

#### 2. New Structure

**Header (centered, full width)**
- Section badge: "Post-Formation Banking"
- H2: "Corporate Bank Account Opening"
- Subtitle (one line)

**Two-Column Split**
- **Left (50%):** Professional image with rounded corners and shadow
  - Floating badge overlay: "4 Major Banks"
- **Right (50%):** 
  - 2x2 stats grid (cleaner than 4-column)
  - Brief description text
  - CTA button (not just link)

**Bank Logos Row (full width)**
- 4 bank name badges in a horizontal row
- Clean white cards with subtle borders
- Bank abbreviations + full names

#### 3. Styling Updates
- Add subtle grid background pattern (consistent with other sections)
- Image with `rounded-2xl` and `shadow-xl`
- Floating badge with gold accent
- Stats with larger numbers, gold color
- CTA as proper button (primary style)

---

### SEO Preserved

- H2 heading with "Corporate Bank Account Opening"
- Bank names visible as text (not just images)
- Timeline and deposit info for featured snippets
- Alt text on image for accessibility

---

### Code Structure

```
BankAccountOpening
├── Section with grid pattern background
├── Container
│   ├── Header (centered)
│   │   ├── Badge: "Post-Formation Banking"
│   │   ├── H2: "Corporate Bank Account Opening"
│   │   └── Subtitle
│   ├── Two-Column Grid
│   │   ├── Left: Image with floating badge
│   │   └── Right: Stats grid + CTA button
│   └── Bank Partners Row
│       └── 4 bank name cards
```

---

### Visual Improvements

1. **Professional Image** — Adds credibility and visual interest
2. **Floating Badge** — Modern overlay technique
3. **2x2 Stats Grid** — More balanced than 4-column on mobile
4. **Bank Cards** — Cleaner than bullet-separated text
5. **Background Pattern** — Consistent with site design system
6. **Proper CTA Button** — More prominent call-to-action

