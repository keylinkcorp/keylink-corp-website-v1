
# Foreign Company Branch in Bahrain - Implementation Plan

## Overview
Create a comprehensive pillar page for "Foreign Company Branch in Bahrain" at route `/services/branch-office`. This page will be the definitive SEO resource for international companies seeking to establish a branch in Bahrain.

**Target:** ~2,700 words | 16 sections | 16 FAQ questions
**Timeline:** 7-10 day branch registration messaging
**Primary Keyword:** "foreign company branch in bahrain"

---

## File Structure

### New Files to Create

```text
src/pages/services/BranchOffice.tsx                    # Main page component
src/lib/schema/branchOfficeSchema.ts                   # JSON-LD SEO schema

src/components/services/branch/
  BranchHero.tsx                                       # Hero section with AI image
  BranchTrustBar.tsx                                   # Trust metrics bar
  WhatIsBranch.tsx                                     # Featured snippet definition
  BranchVsWLLComparison.tsx                            # 3-way comparison table
  WhyBahrain.tsx                                       # Benefits grid (6 cards)
  BranchCostCalculator.tsx                             # 6-step interactive calculator
  BranchProcessTimeline.tsx                            # 3-phase accordion process
  BranchRequirements.tsx                               # Jurisdiction-tabbed checklist
  BranchGovernmentFees.tsx                             # Transparent fee table
  BranchManagerRequirements.tsx                        # Manager/visa requirements
  WhyChooseKeylink.tsx                                 # Differentiators (4 cards)
  BranchSuccessSnapshot.tsx                            # Client case study
  BranchTestimonials.tsx                               # 3 testimonials
  BranchRelatedServices.tsx                            # 4-service grid
  BranchFAQ.tsx                                        # 16-question accordion
  BranchCTA.tsx                                        # Final conversion section
```

### Files to Modify

```text
src/App.tsx                                            # Add route for /services/branch-office
```

---

## Component Specifications

### 1. BranchHero.tsx
- Split layout: text left, AI-generated image right
- Headline: "Open a Branch Office in Bahrain" + "100% Foreign Ownership — 7-10 Days"
- Features: 100% Foreign Ownership, 7-10 Days, No Minimum Capital
- CTAs: "Get Free Consultation" + "Calculate Your Costs"
- Social proof: Google/Trustpilot ratings
- Trust line: MOIC, Sijilat, LMRA, Chamber

**AI Image Prompt:**
"Professional corporate photograph of a Middle Eastern business skyline with Bahrain Financial Harbour, featuring a confident international business executive in formal attire reviewing documents, navy blue (#002C4D) and gold (#C7A763) color palette, clean minimalist style, soft natural lighting, 4:3 aspect ratio, high-end corporate photography aesthetic"

### 2. BranchTrustBar.tsx
- Horizontal stats bar: 120+ Branches | 10+ Years | 100% Success | 7-10 Days
- AnimatedCounter component for metrics
- Trust statement: "Bahrain's Trusted Branch Registration Partner"

### 3. WhatIsBranch.tsx
- Two-column split layout (text + key facts sidebar)
- Featured snippet optimized definition
- Key characteristics list (5 items)
- "Best For" callout box

### 4. BranchVsWLLComparison.tsx
- 3-column comparison table (Branch vs WLL vs Rep Office)
- 8 comparison attributes
- Tab selector for highlighting active entity type
- CTA side panel for consultation

### 5. WhyBahrain.tsx
- 6-card benefits grid
- Icons: Tax, GCC Gateway, Ownership, Registration, Profit, Time Zone
- Subtle card hover effects

### 6. BranchCostCalculator.tsx
- 6-step wizard following established pattern
- Dynamic questions based on parent location
- Jurisdiction-specific fees (apostille requirements)
- Lead capture form with Zod validation
- Results breakdown with line items

### 7. BranchProcessTimeline.tsx
- 3-phase accordion (Preparation, Registration, Operations)
- 8 total steps across phases
- Phase tabs with progress indicator
- Timeframe badges for each step

### 8. BranchRequirements.tsx
- 3-tab design: GCC | Western | Asia-Pacific
- Jurisdiction-specific document lists
- Pro-tip callout box
- Icons for document types

### 9. BranchGovernmentFees.tsx
- Transparent fee table (6 fee types)
- Annual vs one-time column
- Total estimates for basic and with visas
- "No markup" transparency note

### 10. BranchManagerRequirements.tsx
- Requirements checklist (6 items)
- Visa options cards (Investor vs Work)
- 2024 regulatory update callout

### 11. WhyChooseKeylink.tsx
- 4-card differentiator grid
- Multi-jurisdiction, Remote, Fixed-fee, Dedicated Manager
- Icons and brief descriptions

### 12. BranchSuccessSnapshot.tsx
- Client case study format
- Challenge/Solution/Results structure
- Quote with attribution
- Timeline badge (9 days)

### 13. BranchTestimonials.tsx
- 3-card carousel/grid
- Avatar, quote, name, company
- Star ratings

### 14. BranchRelatedServices.tsx
- 4-card service grid
- Links to PRO, Visa, Accounting, CR Renewal pages
- Icons and brief descriptions

### 15. BranchFAQ.tsx
- 16 questions in 2-column accordion
- JSON-LD FAQPage schema integration
- Gold accent borders on open state

### 16. BranchCTA.tsx
- Center-fade dashed grid background
- Bold headline: "Open Your Bahrain Branch in 7-10 Days"
- Feature pills + dual CTAs
- Trust line with metrics

---

## Technical Implementation Details

### SEO Schema (branchOfficeSchema.ts)
```text
JSON-LD @graph array containing:
- Organization (Keylink Corp)
- LocalBusiness (Branch Registration Services)
- Service (Branch Office Registration)
- FAQPage (16 questions)
- BreadcrumbList (Home > Services > Branch Office)
```

### Route Registration (App.tsx)
```text
Add import: import BranchOffice from "./pages/services/BranchOffice";
Add route: <Route path="/services/branch-office" element={<BranchOffice />} />
```

### Page Meta Tags (BranchOffice.tsx)
```text
Title: "Foreign Company Branch in Bahrain - Register in 7-10 Days | 100% Ownership | Keylink Corp"
Description: "Open a branch office in Bahrain with 100% foreign ownership. Register your foreign company branch in 7-10 days. No local sponsor. No minimum capital. Free consultation."
Canonical: https://keylinkcorp.com/services/branch-office
```

---

## AI Image Generation Plan

Generate 2 images using Nano banana model:

1. **branch-hero-professional.jpg**
   - Business skyline with executive reviewing documents
   - Navy/Gold palette, corporate aesthetic
   - 1024x768 (4:3 aspect)

2. **branch-success-client.jpg**
   - Professional headshot for testimonial/success story
   - Corporate attire, confident expression
   - 400x400 (1:1 aspect)

---

## Design System Adherence

All components will follow established patterns:
- Navy (#002C4D) for primary text and buttons
- Gold (#C7A763) for accents and highlights
- Background patterns: Radial gradient blur, dot grid, dashed fade
- Typography: Inter font, H1 48-60px, H2 36-44px, body 16-18px
- Spacing: py-24 md:py-32 for sections
- Animations: Framer Motion staggerContainer, fadeInUp
- Cards: White bg, border-2 border-border, rounded-2xl/3xl, shadow-sm

---

## Component Order on Page

```text
1.  BranchHero
2.  BranchTrustBar
3.  BranchCostCalculator
4.  WhatIsBranch
5.  BranchVsWLLComparison
6.  WhyBahrain
7.  BranchProcessTimeline
8.  BranchRequirements
9.  BranchGovernmentFees
10. BranchManagerRequirements
11. WhyChooseKeylink
12. BranchSuccessSnapshot
13. BranchTestimonials
14. BranchRelatedServices
15. BranchFAQ
16. BranchCTA
+ FloatingWhatsApp
+ BackToTop
```

---

## Implementation Sequence

1. **Create schema file** — branchOfficeSchema.ts
2. **Create all 16 components** in src/components/services/branch/
3. **Create main page** — BranchOffice.tsx with imports and SEO
4. **Update App.tsx** — Add route
5. **Generate AI images** — Hero and testimonial images
6. **Test and refine** — Verify responsive behavior and animations

---

## Estimated Files
- 1 page file
- 16 component files
- 1 schema file
- 1 route update
- 2 AI-generated images

**Total: 19 new files + 1 modification**
