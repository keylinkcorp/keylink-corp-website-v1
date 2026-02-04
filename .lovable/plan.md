

## Plan: Make FAQ Headlines Even Smaller

### Summary
Reduce the FAQ section headline font size from `text-2xl md:text-3xl` to `text-xl md:text-2xl` across all FAQ components for a more subtle, refined look.

### Size Comparison

| Breakpoint | Current | New |
|------------|---------|-----|
| Mobile | 24px (2xl) | 20px (xl) |
| Desktop | 30px (3xl) | 24px (2xl) |

### Files to Update

| File | Change |
|------|--------|
| `src/components/services/shared/ServiceFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/local-sponsorship/SponsorshipFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/branch/BranchFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/spc/SPCFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/wll/WLLFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/visa/VisaFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/formation/FormationFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/liquidation/LiquidationFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/services/lease/LeaseFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/consultation/ConsultationFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/contact/ContactFAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |
| `src/components/home/FAQ.tsx` | `text-2xl md:text-3xl` → `text-xl md:text-2xl` |

### Technical Change

```tsx
// Before
<h2 className="text-2xl md:text-3xl font-bold mb-4">

// After  
<h2 className="text-xl md:text-2xl font-bold mb-4">
```

### Implementation Steps
1. Update shared `ServiceFAQ.tsx` component (affects multiple service pages)
2. Update all standalone FAQ components with smaller headline size
3. Update home page FAQ component

