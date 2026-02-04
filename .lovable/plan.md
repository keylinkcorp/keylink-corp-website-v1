
## Plan: Update FAQ Component Headlines to Smaller Size

### Summary
Update the headline (h2) sizing across all FAQ components to be smaller and more consistent. Currently, headlines vary between `text-3xl md:text-4xl`, `text-3xl md:text-5xl`, and `text-[36px] md:text-[44px] lg:text-[52px]`. The new standardized size will be `text-2xl md:text-3xl` for a more refined, subtle appearance while keeping the same content.

### Files to Update

| File | Current Headline Size | New Headline Size |
|------|----------------------|-------------------|
| `src/components/services/shared/ServiceFAQ.tsx` | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` |
| `src/components/services/local-sponsorship/SponsorshipFAQ.tsx` | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` |
| `src/components/services/branch/BranchFAQ.tsx` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` |
| `src/components/services/spc/SPCFAQ.tsx` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` |
| `src/components/services/wll/WLLFAQ.tsx` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` |
| `src/components/services/visa/VisaFAQ.tsx` | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` |
| `src/components/services/formation/FormationFAQ.tsx` | `text-[36px] md:text-[44px] lg:text-[52px]` | `text-2xl md:text-3xl` |
| `src/components/services/liquidation/LiquidationFAQ.tsx` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` |
| `src/components/services/lease/LeaseFAQ.tsx` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` |
| `src/components/consultation/ConsultationFAQ.tsx` | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` |
| `src/components/contact/ContactFAQ.tsx` | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` |
| `src/components/home/FAQ.tsx` | `text-[44px] md:text-[52px]` | `text-2xl md:text-3xl` |
| `src/components/services/cr-amendment/CRAmendmentFAQ.tsx` | Uses shared `ServiceFAQ` | Auto-updated via shared component |

### Visual Impact

```text
Before (varies by component):
- Large: 36px-52px on desktop
- Some inconsistent: 3xl-5xl range

After (unified):
- Small: ~24px (2xl) mobile, ~30px (3xl) desktop
- Consistent across all FAQ sections
```

### Technical Changes

For each file, the h2 element class will be updated:

```tsx
// Before (example from SponsorshipFAQ)
<h2 className="text-3xl md:text-4xl font-bold mb-4">

// After
<h2 className="text-2xl md:text-3xl font-bold mb-4">
```

The following attributes remain unchanged:
- Font weight (`font-bold`)
- Bottom margin (`mb-4` or `mb-6`)
- Tracking adjustments where present
- Text color classes
- Any accent spans within headlines

### Pages Affected
This change will impact FAQ sections on approximately 15+ service pages including:
- Local Sponsorship
- Company Formation (SPC, WLL, Branch)
- Visa & Immigration
- Liquidation
- Lease Registration
- CR Amendment
- Accounting
- PRO Services
- Legal Consulting
- Virtual Office
- Coworking
- Chamber of Commerce
- Home page
- Contact page
- Consultation page

### Implementation Steps
1. Update `ServiceFAQ.tsx` shared component (affects multiple pages automatically)
2. Update all standalone FAQ components with custom headlines
3. Ensure consistent `font-bold` and margin settings across all updates
