

# CRProcessSteps Accordion Timeline Enhancement

## Overview

Apply the same clean accordion timeline pattern from `CRAmendmentProcess` to the `CRProcessSteps` component. This will ensure visual consistency across CR-related pages while maintaining all existing 6-step content.

---

## Current vs Target Comparison

| Aspect | Current (CRProcessSteps) | Target (Match CRAmendmentProcess) |
|--------|--------------------------|-----------------------------------|
| Animation Library | Framer Motion (heavy) | None (static) |
| Accordion | Custom useState + AnimatePresence | Radix UI Accordion |
| Vertical Line | Gradient line | Solid `bg-accent` line |
| Step Node | Large 14px circle with conditional styling | 12px circle with `border-4 border-white` |
| Card Styling | `border-2 rounded-2xl` | `border rounded-xl` (lighter) |
| Header Layout | Timeline badge above title | Icon + Title + Badge inline |
| Content | Details with `bg-accent/5` backgrounds | Clean details without backgrounds |

---

## Implementation Details

### File Modified
`src/components/services/cr/CRProcessSteps.tsx`

### Key Changes

1. **Remove Framer Motion**
   - Remove `motion`, `useInView`, `AnimatePresence` imports
   - Remove `staggerContainer`, `staggerItem` usage
   - Remove `useRef` and `useState` hooks
   - Convert all `motion.div` to regular `div`

2. **Add Radix UI Accordion**
   - Import `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`
   - Use `type="single"`, `collapsible`, `defaultValue="step-0"`

3. **Restructure Timeline Layout**
   - Solid vertical line: `bg-accent` (not gradient)
   - Smaller nodes: `w-12 h-12` with `border-4 border-white shadow-sm`
   - Node positioned at `left-6` to align with line

4. **Simplify Card Design**
   - Change from `border-2 rounded-2xl` to `border rounded-xl`
   - Cleaner header with icon, title, and timeline badge inline
   - Remove heavy detail backgrounds (`bg-accent/5`)

5. **Update Background Pattern**
   - Use ellipse mask fade pattern (matching CRAmendmentProcess)

---

## Preserved Content

All 6 process steps with their data:
- Step 01: Consultation & Planning (Day 1)
- Step 02: Document Preparation (Day 1-2)
- Step 03: Name Reservation (Day 2)
- Step 04: MOIC Submission (Day 2-3)
- Step 05: CR Issuance (Day 3-5)
- Step 06: Post-Registration Support (Ongoing)

Also preserved:
- All step icons (MessageSquare, FileText, Search, Send, Award, HeartHandshake)
- All descriptions and detail checklists
- Section header badge, H2, and subheading
- Timeline indicator box (3-7 Business Days)
- Bottom CTA button

---

## Code Structure

### Imports (Updated)
```tsx
import { 
  MessageSquare, FileText, Search, Send, Award, HeartHandshake,
  Clock, CheckCircle2, ArrowRight
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
```

### Accordion Timeline Structure
```tsx
<div className="max-w-4xl mx-auto relative">
  {/* Solid vertical line */}
  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent hidden md:block" />
  
  <Accordion type="single" collapsible defaultValue="step-0" className="space-y-6">
    {processSteps.map((step, index) => {
      const StepIcon = step.icon;
      return (
        <AccordionItem key={index} value={`step-${index}`} className="border-none">
          <div className="flex gap-6">
            {/* Node */}
            <div className="relative z-10 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm border-4 border-white shadow-sm">
                {step.number}
              </div>
            </div>
            
            {/* Content Card */}
            <div className="flex-1 bg-white rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="w-full px-6 py-4 hover:no-underline hover:bg-muted/30 [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs md:hidden">
                    {step.number}
                  </div>
                  <StepIcon className="w-5 h-5 text-accent hidden md:block" />
                  <h3 className="text-lg font-bold text-left">{step.title}</h3>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded ml-auto mr-2">
                    {step.timeline}
                  </span>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6 pt-4">
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      );
    })}
  </Accordion>
</div>
```

---

## Removed Elements

- `useRef`, `useState` hooks
- `motion`, `useInView`, `AnimatePresence` from framer-motion
- `staggerContainer`, `staggerItem` animation variants
- `cn` utility (no longer needed for conditional styling)
- `crConsultantImage` import (unused)
- `ChevronDown` explicit import (Accordion provides its own)
- Gradient on vertical line
- Heavy card borders (`border-2`)
- Background fills on detail items (`bg-accent/5 rounded-xl`)
- Conditional node styling based on expanded state

---

## Styling Specifications

| Element | Style |
|---------|-------|
| Background | Ellipse mask fade dot grid pattern |
| Timeline Line | `absolute left-6 w-0.5 bg-accent` |
| Node | `w-12 h-12 rounded-full bg-accent text-primary border-4 border-white shadow-sm` |
| Card | `bg-white rounded-xl border border-border` |
| Trigger | `px-6 py-4 hover:no-underline hover:bg-muted/30` |
| Icon | `w-5 h-5 text-accent` |
| Title | `text-lg font-bold text-left` |
| Badge | `px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded` |
| Description | `text-muted-foreground mb-4` |
| Detail Items | `flex items-start gap-2 text-sm text-muted-foreground` |

---

## Bottom CTA Adjustments

Keep the bottom CTA but simplify styling to remove Framer Motion:
```tsx
<div className="text-center mt-14">
  <p className="text-lg text-muted-foreground mb-6">
    Ready to start your registration journey?
  </p>
  <a
    href="/contact"
    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
  >
    <MessageSquare className="w-5 h-5" />
    Book Free Consultation
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </a>
</div>
```

---

## Summary of Changes

1. Remove all Framer Motion dependencies
2. Replace custom accordion with Radix UI Accordion
3. Simplify vertical timeline (solid line, cleaner nodes)
4. Update background to ellipse mask fade pattern
5. Remove heavy card and detail styling
6. Match exact structure of CRAmendmentProcess

