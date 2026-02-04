

## Plan: Enhance "Why Do Some Business Activities Require a Local Sponsor?" Section

### Summary
Redesign the OwnershipRequirement section with a minimal, modern aesthetic while condensing the content for better scannability.

### Current Issues
- Too many separate cards and visual elements
- Content is spread across multiple sub-sections
- Multiple heading styles create visual noise
- Investor concerns section uses alarming red styling

### Proposed Design

```text
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Understanding Bahrain's Ownership Laws             │
│                                                                 │
│    Why Do Some Business Activities Require a Local Sponsor?    │
│                                                                 │
│   Brief intro paragraph (2-3 lines max)                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐                   │
│   │ RESTRICTED       │  │ THE SOLUTION     │                   │
│   │ ACTIVITIES       │  │                  │                   │
│   │                  │  │                  │                   │
│   │ • Real estate    │  │ Proper legal     │                   │
│   │ • Trading        │  │ structuring      │                   │
│   │ • Manpower       │  │ ensures full     │                   │
│   │ • Professional   │  │ control while    │                   │
│   │ • Media          │  │ accessing these  │                   │
│   │                  │  │ sectors.         │                   │
│   └──────────────────┘  └──────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Key Design Changes

| Element | Current | New |
|---------|---------|-----|
| Layout | 4 separate sub-sections | 2-column split layout |
| Restricted Activities | Individual cards with icons | Simple bullet list with subtle icons |
| Investor Concerns | Red-styled warning cards | Remove entirely (addressed in later sections) |
| The Right Approach | Separate box at bottom | Integrated into right column |
| Typography | Multiple heading sizes | Simplified hierarchy |
| Whitespace | Moderate | Generous (minimal aesthetic) |

### Content Consolidation

**Before (4 sub-sections):**
1. Introduction paragraph
2. Restricted Activities (5 cards)
3. The Challenge for Foreign Investors (3 concern cards + 2 paragraphs)
4. The Right Approach (1 box)

**After (2 columns):**
1. Left: Restricted Activities (clean list)
2. Right: The Solution (concise value proposition)

### Technical Changes

**File:** `src/components/services/local-sponsorship/OwnershipRequirement.tsx`

1. **Remove:** Investor concerns section entirely (these points are covered in LegalProtectionFramework)
2. **Simplify:** Restricted activities from card grid to inline list
3. **Add:** Two-column layout with left showing activities, right showing solution
4. **Update:** Typography to smaller, more refined scale
5. **Reduce:** Overall vertical padding for tighter section

### New Component Structure

```tsx
// Simplified data
const restrictedActivities = [
  "Real estate brokerage and property management",
  "Certain import/export trading activities",
  "Manpower supply and recruitment agencies",
  "Specific professional services",
  "Media and advertising activities"
];

// Two-column layout
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {/* Left: Restricted Activities */}
  <div className="bg-white rounded-2xl border p-6">
    <h3>Restricted Activities</h3>
    <ul className="space-y-3">
      {activities.map(...)}
    </ul>
  </div>
  
  {/* Right: The Solution */}
  <div className="bg-accent/5 rounded-2xl border-accent/20 p-6">
    <h3>The Solution</h3>
    <p>Concise explanation...</p>
  </div>
</div>
```

### Visual Refinements
- Remove individual card icons (use simple bullet points)
- Smaller section heading (`text-2xl md:text-3xl` instead of `text-3xl md:text-4xl`)
- Tighter padding (`py-16 md:py-20` instead of `py-20 md:py-28`)
- Consistent border styling between cards
- Gold accent on solution card to draw attention

### Implementation Steps
1. Update OwnershipRequirement.tsx with new two-column layout
2. Remove investorConcerns data and related UI
3. Simplify restrictedActivities to text-only array
4. Apply refined typography and spacing

