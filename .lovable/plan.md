

# Apply Accordion Timeline Pattern to FormationProcessDetailed and SPCProcessTimeline

## Overview

Update both `FormationProcessDetailed` and `SPCProcessTimeline` components to use the same clean Radix UI Accordion timeline pattern established in `CRAmendmentProcess`, ensuring visual consistency across all process/timeline sections.

---

## Components to Update

| Component | Current State | Changes Needed |
|-----------|---------------|----------------|
| FormationProcessDetailed | Framer Motion + custom useState accordion with phase tabs | Replace with Radix UI Accordion, keep phase tabs |
| SPCProcessTimeline | Framer Motion + custom useState accordion | Replace with Radix UI Accordion |

---

## Pattern to Apply (from CRAmendmentProcess)

```text
[Timeline Indicator Box]

●─────  [01] Step Title                    Badge  [▼]
│       
│       Description text...
│       ✓ Detail 1    ✓ Detail 2
│       ✓ Detail 3    ✓ Detail 4
│
●─────  [02] Next Step                     Badge  [▶]
│       (collapsed)
...

[Bottom Badge / CTA]
```

### Key Design Elements
- Solid vertical line: `bg-accent` (not gradient)
- Circular nodes: `w-12 h-12 rounded-full bg-accent border-4 border-white shadow-sm`
- Clean cards: `bg-white rounded-xl border border-border`
- Radix UI Accordion: `type="single"`, `collapsible`, `defaultValue="step-0"`
- No Framer Motion animations

---

## File 1: FormationProcessDetailed.tsx

### Special Considerations
This component has a **3-phase tabbed structure** that should be preserved. The accordion pattern applies to the steps within each phase.

### Changes

1. **Remove Framer Motion**
   - Remove `motion`, `useInView`, `AnimatePresence` imports
   - Remove `useRef` hook
   - Keep `useState` for `activePhase` only (tabs still needed)
   - Remove `expandedSteps` state (Radix handles this)
   - Convert all `motion.div` to regular `div`

2. **Add Radix UI Accordion**
   - Import Accordion components from `@/components/ui/accordion`
   - Wrap phase steps in `<Accordion type="single" collapsible defaultValue="phase-X-step-0">`

3. **Update Timeline Structure**
   - Add solid vertical line: `bg-accent`
   - Standardize nodes: `w-12 h-12` with step number
   - Update card styling to match pattern

4. **Preserve Phase Tabs**
   - Keep the 3 phase buttons
   - Maintain phase switching functionality
   - Reset accordion to first step when phase changes

### Data Structure (Preserved)
- Phase 1: 4 steps (Security Approval, Name Registration, Capital, Partner Setup)
- Phase 2: 4 steps (Address, Sector Approvals, Notarization, Bank Account)
- Phase 3: 4 steps (LMRA, Medical, Residence Permit, CPR)

---

## File 2: SPCProcessTimeline.tsx

### Changes

1. **Remove Framer Motion**
   - Remove `motion`, `useInView`, `AnimatePresence` imports
   - Remove `staggerContainer`, `staggerItem` imports
   - Remove `useRef`, `useState` hooks
   - Remove `cn` utility (not needed)
   - Convert all `motion.div` to regular `div`

2. **Add Radix UI Accordion**
   - Import Accordion components
   - Use `type="single"`, `collapsible`, `defaultValue="step-0"`

3. **Update Timeline Structure**
   - Solid vertical line: `bg-accent` (replace gradient)
   - Standardize nodes: `w-12 h-12 rounded-full bg-accent border-4 border-white shadow-sm`
   - Update cards: `bg-white rounded-xl border border-border`

4. **Update Background Pattern**
   - Use ellipse mask fade pattern (white base, matching CRAmendmentProcess)

5. **Simplify Bottom CTA**
   - Remove motion wrapper
   - Keep button styling and functionality

### Data Structure (Preserved)
- 6 steps: Security Approval, Name Reservation, Bank Account, Document Notarization, CR Issuance, LMRA & ID Processing
- All step data (numbers, icons, titles, timelines, descriptions, details)

---

## Styling Specifications (Consistent Across All)

| Element | Style |
|---------|-------|
| Background | Ellipse mask fade dot grid |
| Timeline Line | `absolute left-6 w-0.5 bg-accent hidden md:block` |
| Node | `w-12 h-12 rounded-full bg-accent text-primary font-bold text-sm border-4 border-white shadow-sm` |
| Card | `bg-white rounded-xl border border-border overflow-hidden` |
| Trigger | `w-full px-6 py-4 hover:no-underline hover:bg-muted/30` |
| Open Border | `[&[data-state=open]]:border-b [&[data-state=open]]:border-border` |
| Icon | `w-5 h-5 text-accent hidden md:block` |
| Mobile Number | `w-10 h-10 rounded-full bg-accent text-primary font-bold text-xs md:hidden` |
| Title | `text-lg font-bold text-left` |
| Badge | `px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded` |
| Content | `px-6 pb-6 pt-4` |
| Description | `text-muted-foreground mb-4` |
| Details Grid | `grid sm:grid-cols-2 gap-2` |
| Detail Item | `flex items-start gap-2 text-sm` with CheckCircle2 icon |

---

## Removed Elements (Both Files)

- All `motion.div` and motion animations
- `useInView` hooks
- `AnimatePresence` wrappers
- `staggerContainer`, `staggerItem` variants
- Custom expand/collapse logic with useState
- Gradient vertical lines
- Heavy borders (`border-2`)
- Background fills on detail items

---

## Preserved Elements

### FormationProcessDetailed
- 3-phase tab navigation
- All 12 steps across 3 phases
- Step icons, descriptions, requirements
- Timeline badge showing "3-7 Business Days"
- Section header with badge, H2, subheading

### SPCProcessTimeline
- All 6 process steps with full data
- Step icons (ShieldCheck, FileText, Wallet, Stamp, Building2, CreditCard)
- Timeline indicator box (3-14 Business Days)
- Bottom badge and CTA button
- Section header

---

## Implementation Summary

### FormationProcessDetailed.tsx
1. Remove Framer Motion imports and hooks
2. Keep `useState` for `activePhase` only
3. Add Radix UI Accordion imports
4. Wrap phase steps in Accordion component
5. Apply consistent timeline structure (line, nodes, cards)
6. Update background pattern
7. Remove motion wrappers from phase tabs and timeline badge

### SPCProcessTimeline.tsx
1. Remove all Framer Motion dependencies
2. Replace useState accordion with Radix UI Accordion
3. Apply consistent timeline structure
4. Update background to white with ellipse mask
5. Simplify bottom CTA section
6. Match exact styling from CRAmendmentProcess

