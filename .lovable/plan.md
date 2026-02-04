

## Plan: Reduce FAQ Question Text Font Size

### Summary
Reduce the font size of the FAQ accordion question text (the clickable question like "What is local sponsorship in Bahrain?") across all FAQ components for a more refined appearance.

### Current vs New Size

| Component | Current Question Size | New Question Size |
|-----------|----------------------|-------------------|
| SponsorshipFAQ | default (~16px) | `text-sm` (~14px) |
| BranchFAQ | default (~16px) | `text-sm` (~14px) |
| SPCFAQ | `text-base` (~16px) | `text-sm` (~14px) |
| WLLFAQ | `text-sm md:text-base` | `text-sm` (~14px) |
| VisaFAQ | varies | `text-sm` (~14px) |
| FormationFAQ | `text-[15px]` | `text-sm` (~14px) |
| LiquidationFAQ | `text-lg` (~18px) | `text-sm` (~14px) |
| LeaseFAQ | default (~16px) | `text-sm` (~14px) |
| ConsultationFAQ | varies | `text-sm` (~14px) |
| ContactFAQ | `text-lg` (~18px) | `text-sm` (~14px) |
| Home FAQ | default (~16px) | `text-sm` (~14px) |
| ServiceFAQ (shared) | `text-base` (~16px) | `text-sm` (~14px) |

### Visual Change

```text
Before:
┌────────────────────────────────────────────────┐
│ What is local sponsorship in Bahrain?      ▼  │  <-- ~16-18px
└────────────────────────────────────────────────┘

After:
┌────────────────────────────────────────────────┐
│ What is local sponsorship in Bahrain?      ▼  │  <-- ~14px (smaller)
└────────────────────────────────────────────────┘
```

### Files to Update (12 files)

| File | AccordionTrigger Change |
|------|-------------------------|
| `src/components/services/shared/ServiceFAQ.tsx` | Add `text-sm` class |
| `src/components/services/local-sponsorship/SponsorshipFAQ.tsx` | Add `text-sm` class |
| `src/components/services/branch/BranchFAQ.tsx` | Add `text-sm` class |
| `src/components/services/spc/SPCFAQ.tsx` | Change `text-base` to `text-sm` |
| `src/components/services/wll/WLLFAQ.tsx` | Change `text-sm md:text-base` to `text-sm` |
| `src/components/services/visa/VisaFAQ.tsx` | Add `text-sm` class |
| `src/components/services/formation/FormationFAQ.tsx` | Change `text-[15px]` to `text-sm` |
| `src/components/services/liquidation/LiquidationFAQ.tsx` | Change `text-lg` to `text-sm` |
| `src/components/services/lease/LeaseFAQ.tsx` | Add `text-sm` class |
| `src/components/consultation/ConsultationFAQ.tsx` | Add `text-sm` class |
| `src/components/contact/ContactFAQ.tsx` | Change `text-lg` to `text-sm` |
| `src/components/home/FAQ.tsx` | Add `text-sm` class |

### Technical Change Example

```tsx
// Before (SponsorshipFAQ)
<AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
  {faq.question}
</AccordionTrigger>

// After
<AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5 text-sm">
  {faq.question}
</AccordionTrigger>
```

### Implementation Steps
1. Update shared `ServiceFAQ.tsx` component (affects multiple service pages)
2. Update all standalone FAQ components with `text-sm` for accordion questions
3. Update home page and contact page FAQ components

