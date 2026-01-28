

# Reusable ServiceExplainer Component

## Overview

Create a new reusable shared component `ServiceExplainer` that implements the two-column split layout shown in the reference image (WhatIsBL design). This component will consolidate the pattern used across WhatIsBL, WhatIsCR, and WhatIsCRAmendment, providing a consistent "What Is X" section for all service pages.

---

## Design Analysis (Reference Image)

The target design features a two-column layout:

| Left Column (60%) | Right Column (40%) |
|-------------------|-------------------|
| Badge pill (e.g., "Understanding Licensing") | Dark navy panel with rounded corners |
| Large H2 with accent-colored keyword | Panel title and subtitle |
| Multi-paragraph descriptive content | List of benefits with icons |
| 2x2 grid of key facts (icon + label + value) | Bottom footer with highlight message |
| Optional callout box (important notice) | |

---

## Component Architecture

### New File
`src/components/services/shared/ServiceExplainer.tsx`

### TypeScript Interfaces

```tsx
interface KeyFact {
  icon: LucideIcon;
  label: string;          // e.g., "Issuing Authority"
  text: string;           // e.g., "Ministry of Industry and Commerce (MOIC)"
}

interface Benefit {
  icon: LucideIcon;
  text: string;           // e.g., "Open corporate bank accounts"
}

interface Callout {
  icon: LucideIcon;
  title: string;          // e.g., "Important: June 2024 Update"
  text: string;           // Description paragraph
}

interface ServiceExplainerProps {
  // Header
  badge: string;                        // e.g., "Understanding CR Amendments"
  badgeIcon?: LucideIcon;               // Optional icon in badge
  title: React.ReactNode;               // Allows JSX for accent coloring
  
  // Content
  paragraphs: React.ReactNode[];        // Array of paragraph content (supports JSX)
  keyFacts?: KeyFact[];                 // 2x2 grid of facts (optional)
  callout?: Callout;                    // Important notice box (optional)
  
  // Benefits Panel (right side)
  panelTitle: string;                   // e.g., "What Your License Enables"
  panelSubtitle: string;                // e.g., "A valid business license unlocks..."
  benefits: Benefit[];                  // List of benefits with icons
  panelFooter?: {                       // Optional footer highlight
    icon: LucideIcon;
    text: string;
  };
  
  // Styling
  className?: string;
}
```

---

## Component Structure

```text
<section>
  <!-- Ellipse mask fade dot grid background -->
  
  <container>
    <grid lg:grid-cols-2 gap-16>
      
      <!-- LEFT COLUMN -->
      <div>
        [Badge Pill] ← badge + badgeIcon
        [H2 Title] ← title (with accent JSX)
        [Paragraphs] ← paragraphs array
        [Key Facts Grid 2x2] ← keyFacts (optional)
        [Callout Box] ← callout (optional)
      </div>
      
      <!-- RIGHT COLUMN -->
      <div>
        [Dark Navy Panel]
          [Title] ← panelTitle
          [Subtitle] ← panelSubtitle
          [Benefits List] ← benefits with staggered animation
          [Footer Highlight] ← panelFooter (optional)
        [/Dark Navy Panel]
      </div>
      
    </grid>
  </container>
</section>
```

---

## Styling Specifications

| Element | Style |
|---------|-------|
| Section Background | Ellipse mask fade dot grid (white base) |
| Badge | `bg-primary/5 text-primary border-primary/10 rounded-full px-4 py-1.5` |
| Title | `text-3xl md:text-5xl font-bold tracking-tight` |
| Paragraphs | `text-lg text-muted-foreground leading-relaxed` |
| Key Fact Card | `bg-primary/5 rounded-xl border-primary/10 p-4` with hover shadow |
| Callout Box | `bg-accent/5 border-2 border-accent/20 rounded-2xl p-6` |
| Benefits Panel | `bg-primary rounded-3xl p-10 text-white` |
| Benefit Item | `bg-white/10 rounded-xl p-4` with hover effect |
| Benefit Icon Box | `w-11 h-11 rounded-lg bg-accent/20` |
| Panel Footer | `border-t border-white/20 pt-6 mt-10` |

---

## Files to Modify After Creation

Once `ServiceExplainer` is created, these files will be refactored:

| File | Current Component | Action |
|------|-------------------|--------|
| `src/components/services/cr-amendment/WhatIsCRAmendment.tsx` | Custom single-column | Refactor to use ServiceExplainer |
| `src/components/services/cr/WhatIsCR.tsx` | Custom two-column | Refactor to use ServiceExplainer |
| `src/components/services/bl/WhatIsBL.tsx` | Custom two-column | Refactor to use ServiceExplainer |

---

## WhatIsCRAmendment Refactored Usage

```tsx
import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { FileText, Building2, CheckCircle2, AlertTriangle, ... } from "lucide-react";

const keyFacts = [
  { icon: Building2, label: "Governing Authority", text: "Ministry of Industry and Commerce" },
  { icon: FileText, label: "Processing Portal", text: "Sijilat 3.0 Electronic System" },
  { icon: Clock, label: "Standard Timeline", text: "2-5 Business Days" },
  { icon: Globe, label: "Requirement", text: "Mandatory for any CR change" }
];

const benefits = [
  { icon: FileText, text: "Change business activities" },
  { icon: Users, text: "Update shareholder structure" },
  { icon: Building2, text: "Modify company name" },
  { icon: MapPin, text: "Change registered address" },
  { icon: Scale, text: "Update capital amounts" },
  { icon: Briefcase, text: "Convert entity type" }
];

export function WhatIsCRAmendment() {
  return (
    <ServiceExplainer
      badge="Understanding CR Amendments"
      badgeIcon={FileText}
      title={<>What Is a <span className="text-accent">CR Amendment</span> in Bahrain?</>}
      paragraphs={[
        <>A Commercial Registration amendment is an official update to your existing CR details through the Ministry of Industry and Commerce (MOIC). When your business structure, activities, or ownership changes, Bahrain law requires you to reflect these updates in your CR within specific timeframes.</>,
        <>The MOIC processes all amendments through the Sijilat 3.0 electronic portal. Each amendment type follows a distinct workflow with different document requirements, government fees, and processing windows.</>,
        <>Failing to update your CR creates real problems. Banks may freeze transactions. Visa processing stops. Contracts become legally questionable. The MOIC can impose penalties or even cancel non-compliant registrations.</>,
        <>Most amendments complete in 2-5 business days when filed correctly. Complex changes like entity conversions or multi-shareholder transfers may extend to 7-10 days.</>
      ]}
      keyFacts={keyFacts}
      callout={{
        icon: AlertTriangle,
        title: "Compliance Deadline",
        text: "Most CR amendments must be filed within 30 days of the change occurring. Delayed amendments may result in penalties or rejection."
      }}
      panelTitle="What Amendments Enable"
      panelSubtitle="CR amendments allow you to officially update:"
      benefits={benefits}
      panelFooter={{
        icon: CheckCircle2,
        text: "Keep your CR current and fully compliant"
      }}
    />
  );
}
```

---

## Animation Handling

The component will use Framer Motion for smooth reveal animations:

- Left column: Stagger container with staggerItem variants for each element
- Right column: Slide in from right with delay
- Benefits list: Individual staggered animations

---

## Benefits of This Approach

| Benefit | Impact |
|---------|--------|
| Code Reduction | ~70% less duplicate code across 3+ files |
| Visual Consistency | Single source of truth for "What Is" sections |
| Easy Maintenance | Update styling once, applies everywhere |
| Flexible Content | Supports optional facts, callouts, and footers |
| Type Safety | Full TypeScript interfaces for all props |

---

## Implementation Summary

1. Create `src/components/services/shared/ServiceExplainer.tsx` with full component structure
2. Implement two-column responsive grid layout (stacks on mobile)
3. Add all sub-components: badge, title, paragraphs, key facts grid, callout, benefits panel
4. Include Framer Motion animations matching existing patterns
5. Export component with TypeScript interfaces
6. Refactor `WhatIsCRAmendment.tsx` to use the new component
7. (Future) Refactor `WhatIsCR.tsx` and `WhatIsBL.tsx` to use the same component

