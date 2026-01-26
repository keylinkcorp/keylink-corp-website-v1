

# Section Restructure: Company Formation Page

## Overview

Reorganizing the Company Formation page sections to follow a new conversion-optimized flow that leads with the cost calculator and social proof.

---

## Current vs. New Section Order

| # | Current Order | New Order (Requested) |
|---|---------------|----------------------|
| 1 | FormationHero | FormationHero |
| 2 | FormationTrustBar | FormationTrustBar (kept after hero) |
| 3 | WhatIsCompanyFormation | **FormationCostCalculator** |
| 4 | ProblemValueProp | **WhyChooseKeylink** |
| 5 | CompanyTypesComparison | **FormationProcessDetailed** |
| 6 | FormationProcessDetailed | **RequirementsChecklist** |
| 7 | PricingPackages | **PricingPackages** |
| 8 | FormationCostCalculator | **BankAccountOpening** |
| 9 | RequirementsChecklist | **WhatIsCompanyFormation** |
| 10 | WhyChooseKeylink | **FormationTestimonials** |
| 11 | BankAccountOpening | **RelatedServices** |
| 12 | FormationTestimonials | **FormationFAQ** |
| 13 | RelatedServices | FormationCTA (kept at end) |
| 14 | FormationFAQ | — |
| 15 | FormationCTA | — |

---

## Sections Not Mentioned

The following sections were not included in your requested order. They will be **removed** from the page:

- **ProblemValueProp** - "The Problem with DIY Formation" section
- **CompanyTypesComparison** - Company types comparison table (WLL, SPC, Branch, Holding)

If you want to keep these sections, let me know where to place them.

---

## New Page Flow

```text
1.  FormationHero              — Hero with headline and CTA
2.  FormationTrustBar          — Trust badges (500+ companies, etc.)
3.  FormationCostCalculator    — Interactive cost calculator (lead capture)
4.  WhyChooseKeylink           — Why 500+ Businesses Choose Keylink
5.  FormationProcessDetailed   — Your Complete Formation Journey (12 steps)
6.  RequirementsChecklist      — What You'll Need
7.  PricingPackages            — Transparent Pricing — No Hidden Fees
8.  BankAccountOpening         — Open Your Corporate Bank Account
9.  WhatIsCompanyFormation     — What Is Company Formation in Bahrain?
10. FormationTestimonials      — What Our Clients Say
11. RelatedServices            — Related Services
12. FormationFAQ               — Frequently Asked Questions
13. FormationCTA               — Final call-to-action
```

---

## Technical Changes

### File to Modify
**`src/pages/services/CompanyFormation.tsx`**

### Changes
1. Reorder component imports (for clarity)
2. Remove `ProblemValueProp` and `CompanyTypesComparison` components
3. Reorder JSX components to match new flow

---

## New Component Order in Code

```tsx
<Layout>
  <FormationHero />
  <FormationTrustBar />
  <FormationCostCalculator />
  <WhyChooseKeylink />
  <FormationProcessDetailed />
  <RequirementsChecklist />
  <PricingPackages />
  <BankAccountOpening />
  <WhatIsCompanyFormation />
  <FormationTestimonials />
  <RelatedServices />
  <FormationFAQ />
  <FormationCTA />
</Layout>
```

---

## Rationale for New Flow

| Position | Section | Purpose |
|----------|---------|---------|
| Early | Cost Calculator | Engage visitors immediately with interactive tool |
| Early | Why Choose Us | Build trust with social proof |
| Middle | Process + Requirements | Educate on what's involved |
| Middle | Pricing + Banking | Handle objections, show transparency |
| Late | What Is Formation | SEO content for informational queries |
| Late | Testimonials + FAQ | Final trust-building before CTA |

