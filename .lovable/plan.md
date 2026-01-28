

# CRAmendmentProcess - Accordion Cards with Vertical Timeline

## Overview

Restore accordion functionality to the CRAmendmentProcess component while keeping the enhanced vertical timeline design. Each step card will be collapsible, showing only the header when collapsed and revealing the full details when expanded.

---

## Design Approach

### What Changes
- Add Radix UI Accordion for expand/collapse functionality
- First step expanded by default, others collapsed
- ChevronDown icon on each card header for toggle indication
- Keep the clean vertical timeline with gold nodes and connecting line

### What Stays the Same
- All step content (titles, descriptions, details)
- Vertical timeline structure with gold connecting line
- Circular numbered nodes
- Background pattern (ellipse mask fade)
- Section header and bottom badge
- Mobile responsiveness

---

## Visual Layout

```text
      ●─────  [01] Initial Consultation      Day 1  [▼]
      │       
      │       Description text here...
      │       ✓ Detail 1    ✓ Detail 2
      │       ✓ Detail 3    ✓ Detail 4
      │
      ●─────  [02] Document Preparation     Day 1-2  [▶]
      │       (collapsed - click to expand)
      │
      ●─────  [03] eKey Authentication        Day 2  [▶]
      │       (collapsed)
      ...
```

---

## Technical Implementation

### Imports Added
```tsx
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
```

### Accordion Structure

```tsx
<Accordion type="single" collapsible defaultValue="step-0">
  {processSteps.map((step, index) => (
    <AccordionItem value={`step-${index}`} className="border-none">
      <div className="flex gap-6">
        {/* Timeline Node */}
        <div className="relative z-10 hidden md:block">
          <div className="w-12 h-12 rounded-full bg-accent ...">
            {step.number}
          </div>
        </div>
        
        {/* Card with Accordion */}
        <div className="flex-1 bg-white rounded-xl border border-border">
          <AccordionTrigger className="...">
            {/* Header: Icon + Title + Timeline Badge */}
          </AccordionTrigger>
          <AccordionContent>
            {/* Description + Details Grid */}
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Component Styling

| Element | Style |
|---------|-------|
| AccordionItem | `border-none` (remove default border-b) |
| AccordionTrigger | Custom styling with `hover:no-underline` to override default |
| Card Header | `px-6 py-4` with flex layout for icon, title, badge, chevron |
| ChevronDown | `text-accent` with rotation on open state |
| AccordionContent | Details grid with description, padding adjusted |

### Card States
- **Collapsed**: Shows step icon, title, timeline badge, and chevron
- **Expanded**: Shows full description and details checklist

---

## File Modified

`src/components/services/cr-amendment/CRAmendmentProcess.tsx`

---

## Key Changes Summary

1. **Import Accordion components** from `@/components/ui/accordion`
2. **Wrap steps in Accordion** with `type="single"` and `collapsible`
3. **Set `defaultValue="step-0"`** so first step is expanded by default
4. **Custom AccordionTrigger** with card header content (icon, title, badge)
5. **AccordionContent** contains description and details grid
6. **Override default styles** - remove underline hover, use custom card styling
7. **Maintain timeline structure** - nodes and line positioned outside accordion

---

## Preserved Elements

- All 5 process steps with full content
- Vertical timeline with gold connecting line
- Circular numbered nodes (w-12 h-12)
- Step icons (MessageSquare, FileText, Key, Building2, FileCheck)
- Timeline badges (Day 1, Day 1-2, etc.)
- Details checklists with CheckCircle2 icons
- Section header, timeline indicator, bottom badge
- Background pattern
- Mobile responsiveness

