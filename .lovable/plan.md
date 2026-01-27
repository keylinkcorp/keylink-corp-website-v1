
# Remove Heavy Shadows - Simplify to Subtle Shadows Across All Pages

## Overview

This plan removes all heavy/complex shadows (`shadow-2xl`, `shadow-xl`, `shadow-lg shadow-*/*`) and replaces them with simple, minimal shadows (`shadow-sm` or `shadow-md`) throughout the entire application. This creates a cleaner, more modern aesthetic.

---

## Shadow Replacement Strategy

| Current Shadow | New Shadow |
|----------------|------------|
| `shadow-2xl` | `shadow-sm` |
| `shadow-xl` | `shadow-sm` |
| `shadow-lg` | `shadow-sm` |
| `shadow-lg shadow-primary/20` | `shadow-sm` |
| `shadow-lg shadow-gold/20` | `shadow-sm` |
| `shadow-lg shadow-accent/25` | `shadow-sm` |
| `shadow-2xl shadow-primary/10` | `shadow-sm` |
| `shadow-2xl shadow-primary/20` | `shadow-sm` |
| `shadow-xl shadow-primary/5` | `shadow-sm` |
| `hover:shadow-xl` | `hover:shadow-md` |
| `hover:shadow-lg` | `hover:shadow-md` |
| `hover:shadow-2xl` | `hover:shadow-md` |

---

## Files to Modify

### Home Page Components (11 files)

| File | Shadow Changes |
|------|----------------|
| `src/components/home/Hero.tsx` | Button shadow, image container, floating badge |
| `src/components/home/WhyChooseUs.tsx` | Image container, floating stat card |
| `src/components/home/IndustryServices.tsx` | Image container, floating stats card, card hover |
| `src/components/home/MissionVision.tsx` | Image container, floating badge |
| `src/components/home/CompanyFormationProcess.tsx` | Image container, floating badge, step card hover |
| `src/components/home/CostCalculatorPreview.tsx` | Calculator card container |
| `src/components/home/Testimonials.tsx` | Card hover states |
| `src/components/home/Services.tsx` | Card hover states |
| `src/components/FloatingWhatsApp.tsx` | Chat popup container, button shadow |
| `src/components/home/CTABanner.tsx` | Button shadows (if any) |
| `src/components/home/FAQ.tsx` | Card shadows (if any) |

### Formation Page Components (10 files)

| File | Shadow Changes |
|------|----------------|
| `src/components/services/formation/FormationHero.tsx` | Image container, floating badges, button shadow |
| `src/components/services/formation/FormationTestimonials.tsx` | Card hover states |
| `src/components/services/formation/PricingPackages.tsx` | Popular card shadow, hover states |
| `src/components/services/formation/FormationCTA.tsx` | Button shadows |
| `src/components/services/formation/ProblemValueProp.tsx` | Card hover states |
| `src/components/services/formation/FormationProcessDetailed.tsx` | Expanded accordion, phase button |
| `src/components/services/formation/FormationCostCalculator.tsx` | Card shadows |
| `src/components/services/formation/WhyChooseKeylink.tsx` | Card shadows |
| `src/components/services/formation/BankAccountOpening.tsx` | Card shadows |
| `src/components/services/formation/RequirementsChecklist.tsx` | Card shadows |

### Commercial Registration Components (11 files - already partially done)

| File | Shadow Changes |
|------|----------------|
| `src/components/services/cr/CRHero.tsx` | Remaining shadows to simplify |
| `src/components/services/cr/CRProblemValue.tsx` | Card shadows |
| `src/components/services/cr/WhatIsCR.tsx` | Image/card shadows |
| `src/components/services/cr/CRTypesComparison.tsx` | Tab and card shadows |
| `src/components/services/cr/CRProcessSteps.tsx` | Accordion shadows |
| `src/components/services/cr/CRRequirementsChecklist.tsx` | Tab and list shadows |
| `src/components/services/cr/CRGovernmentFees.tsx` | Table shadows |
| `src/components/services/cr/CRAmendmentsSection.tsx` | Card shadows |
| `src/components/services/cr/CRTestimonials.tsx` | Card shadows |
| `src/components/services/cr/CRSuccessStory.tsx` | Card shadows |
| `src/components/services/cr/CRCostCalculator.tsx` | Card shadows |

### Shared Service Components (6 files)

| File | Shadow Changes |
|------|----------------|
| `src/components/services/shared/ServiceHero.tsx` | Feature pills, price badge |
| `src/components/services/shared/ServiceBenefits.tsx` | Benefit cards hover |
| `src/components/services/shared/ServicePricing.tsx` | Pricing cards |
| `src/components/services/shared/ServiceCTA.tsx` | Any shadows |
| `src/components/services/shared/ServiceWhyChoose.tsx` | Card shadows |
| `src/components/services/shared/RelatedServicesGrid.tsx` | Card shadows |

### Other Service Pages (visa, pro, accounting, cr-renewal)

| File | Shadow Changes |
|------|----------------|
| `src/components/services/visa/*.tsx` | All card shadows |
| `src/components/services/pro/*.tsx` | All card shadows |

---

## Detailed Changes by Component

### 1. Hero.tsx (Homepage)
```tsx
// Line 110: Button shadow
shadow-lg shadow-primary/20 → shadow-sm

// Line 215: Image container
shadow-2xl shadow-primary/10 → shadow-sm

// Line 227: Floating badge
shadow-lg → shadow-sm
```

### 2. WhyChooseUs.tsx
```tsx
// Line 74: Image container
shadow-2xl shadow-primary/10 → shadow-sm

// Line 86: Floating stat
shadow-xl → shadow-sm
```

### 3. IndustryServices.tsx
```tsx
// Line 172: Card hover
hover:shadow-lg → hover:shadow-md

// Line 238: Image container
shadow-2xl shadow-primary/10 → shadow-sm

// Line 251: Floating stats card
shadow-xl → shadow-sm
```

### 4. MissionVision.tsx
```tsx
// Line 42: Image container
shadow-2xl shadow-primary/10 → shadow-sm

// Line 54: Floating badge
shadow-lg → shadow-sm

// Line 96, 124: Card hover
hover:shadow-lg → hover:shadow-md
```

### 5. CompanyFormationProcess.tsx
```tsx
// Line 104: Step card hover
hover:shadow-md → keep as is (already simple)

// Line 221: Image container
shadow-2xl → shadow-sm

// Line 233: Floating badge
shadow-lg → shadow-sm
```

### 6. CostCalculatorPreview.tsx
```tsx
// Line 68: CTA button
shadow-lg shadow-gold/20 → shadow-sm

// Line 85: Calculator card
shadow-xl shadow-primary/5 → shadow-sm
```

### 7. FormationHero.tsx
```tsx
// Line 102: Button shadow
shadow-lg shadow-gold/20 → shadow-sm

// Line 202: Image container
shadow-2xl shadow-primary/10 → shadow-sm

// Line 214, 225: Floating badges
shadow-lg → shadow-sm
```

### 8. PricingPackages.tsx
```tsx
// Line 100: Popular card
shadow-2xl shadow-primary/20 → shadow-sm

// Line 101: Hover state
hover:shadow-xl → hover:shadow-md
```

### 9. FloatingWhatsApp.tsx
```tsx
// Line 24: Chat popup
shadow-2xl → shadow-md

// Line 66: Button
shadow-lg → shadow-sm
```

### 10. Testimonials & FormationTestimonials
```tsx
// Card hover states
hover:shadow-xl → hover:shadow-md
```

### 11. Services.tsx
```tsx
// Line 94: Card hover
hover:shadow-xl → hover:shadow-md
```

### 12. ServiceBenefits.tsx
```tsx
// Line 63: Card
shadow-sm hover:shadow-lg → shadow-sm hover:shadow-md
```

### 13. ServicePricing.tsx
```tsx
// Line 70: Cards
shadow-lg → shadow-sm
```

---

## Summary

**Total Files to Modify:** ~35 files across home, formation, CR, shared, and other service components

**Shadow Philosophy:**
- Base state: `shadow-sm` (subtle, clean)
- Hover state: `shadow-md` (slight elevation feedback)
- No colored shadows (`shadow-*/10`, `shadow-gold/20`, etc.)
- No heavy shadows (`shadow-xl`, `shadow-2xl`)

**Visual Impact:**
- Cleaner, more modern aesthetic
- Reduced visual noise
- Better consistency across all pages
- Faster perceived performance (less rendering complexity)
