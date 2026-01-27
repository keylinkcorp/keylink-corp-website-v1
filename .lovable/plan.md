
# Commercial Registration Bahrain - Complete Landing Page Implementation Plan

## Overview

This plan creates a comprehensive, SEO-optimized pillar page for "Commercial Registration in Bahrain" targeting the route `/services/commercial-registration`. The page will cover all CR services (new registration, amendments, renewal) with unique, differentiated content that outperforms existing competitor pages.

**Target Specifications:**
- Word Count: 2,700-3,100 words (above competitor average of ~1,900)
- Primary Keyword: `commercial registration bahrain`
- Conversion Goal: Consultation requests (no pricing displayed)
- Brand Voice: Professional and authoritative

---

## Section Sequence

```text
1. Hero
2. TrustBar
3. Problem/Value Proposition
4. What is Commercial Registration
5. CR Types Comparison
6. 6-Step Process Timeline
7. Requirements Checklist
8. Government Fees Breakdown
9. CR Amendments Section
10. Why Choose Keylink
11. Testimonials
12. Client Success Mini-Story
13. Related Services
14. FAQ (12 items)
15. Final CTA
```

---

## Files to Create

### 1. Main Page: `src/pages/services/CommercialRegistration.tsx`

The primary page component that orchestrates all sections.

**Structure:**
- Uses existing Layout component
- Implements SEO meta tags (title, description, canonical, OG, Twitter)
- Injects JSON-LD schema for Service, FAQPage, and LocalBusiness
- Imports and arranges all section components in the specified sequence
- Includes FloatingWhatsApp and BackToTop components

**SEO Meta Implementation:**
- Title: "Commercial Registration in Bahrain - CR Registration & Renewal | Keylink Corp"
- Description: "Complete commercial registration services in Bahrain. New CR registration, amendments, and renewals. Expert MOIC processing with 100% success rate. Free consultation."
- Canonical: `https://keylinkcorp.com/services/commercial-registration`

---

### 2. Schema File: `src/lib/schema/commercialRegistrationSchema.ts`

JSON-LD structured data for rich snippets.

**Schema Types:**
- `Service` - Commercial Registration service details
- `FAQPage` - 12 FAQ items for featured snippet eligibility
- `BreadcrumbList` - Navigation path
- `LocalBusiness` - Keylink Corp business info

---

### 3. Hero Component: `src/components/services/cr/CRHero.tsx`

Reuses the shared `ServiceHero` component with CR-specific props.

**Content:**
- Badge: "Commercial Registration Services"
- H1: "Commercial Registration in Bahrain"
- Highlight: "Made Simple"
- Subtitle: "New Registration. Amendments. Renewals. Your Complete CR Solution."
- Feature Pills: "100% Success Rate", "MOIC Expert", "Full-Service"
- Primary CTA: "Free Consultation" -> /contact
- Secondary CTA: "Call Us Now"
- No pricing displayed (per requirements)

---

### 4. TrustBar Component: Uses shared `ServiceTrustBar`

**Stats (unique positioning):**
- 5,000+ CRs Processed
- 100% Success Rate
- 24-48hr Processing
- 10+ Years Experience

---

### 5. Problem/Value Prop: `src/components/services/cr/CRProblemValue.tsx`

Addresses pain points before presenting solutions.

**Content Structure:**
- Badge: "The Challenge"
- Title: "Why Businesses Struggle with Commercial Registration"
- 4 Pain Points with icons:
  1. Complex MOIC requirements and changing regulations
  2. Multiple ministry visits and long queues
  3. Document rejection and resubmission delays
  4. Compliance gaps leading to penalties
- Value Prop: "Our Full-Service Approach" with solution cards

---

### 6. What is CR Section: `src/components/services/cr/WhatIsCR.tsx`

Educational content for featured snippet targeting.

**Content (~300 words):**
- Definition of Commercial Registration
- Governing authority (MOIC, SIJILAT system)
- Legal framework (Commercial Companies Law, Commercial Registration Law)
- Key facts: 1-year validity, annual renewal required, required for legal operations
- Benefits list: Bank accounts, employee hiring, contract signing, GCC market access

---

### 7. CR Types Comparison: `src/components/services/cr/CRTypesComparison.tsx`

Interactive comparison table for different CR/entity types.

**Types Covered:**
| Type | Best For | Capital | Ownership | Processing |
|------|----------|---------|-----------|------------|
| SPC | Solo entrepreneurs | BHD 50 | 100% foreign allowed | 3-5 days |
| WLL | Partnerships | BHD 20,000 | 100% foreign allowed | 5-7 days |
| Branch Office | Foreign expansion | N/A | Parent company | 7-10 days |
| Holding Company | Investment vehicles | BHD 250,000 | 100% foreign allowed | 7-10 days |

---

### 8. Process Steps: `src/components/services/cr/CRProcessSteps.tsx`

6-step timeline following the FormationProcessDetailed pattern.

**Steps:**
1. **Consultation & Planning** (Day 1) - Business activity review, entity type selection
2. **Document Preparation** (Day 1-2) - Compile required documents, prepare applications
3. **Name Reservation** (Day 2) - MOIC name search and reservation via SIJILAT
4. **MOIC Submission** (Day 2-3) - Submit CR application, pay government fees
5. **CR Issuance** (Day 3-5) - Receive CR certificate and trade license
6. **Post-Registration Support** (Ongoing) - Bank account, LMRA, visa support

---

### 9. Requirements Checklist: `src/components/services/cr/CRRequirementsChecklist.tsx`

Accordion-based checklist with tabs for different applicant types.

**Categories:**
- **For Individuals:**
  - Valid passport copy
  - Proof of address
  - Professional CV
  - Passport photos
  
- **For Companies (Corporate Shareholders):**
  - Certificate of Incorporation
  - Memorandum of Association
  - Board Resolution
  - Good Standing Certificate
  
- **For All Applicants:**
  - Business plan (for certain activities)
  - Office lease agreement or virtual office
  - Power of Attorney (for remote registration)

---

### 10. Government Fees Section: `src/components/services/cr/CRGovernmentFees.tsx`

Transparent breakdown of official government costs.

**Fees Table:**
| Fee Type | Amount | Notes |
|----------|--------|-------|
| Name Reservation | BHD 15 | Valid 60 days |
| CR Registration | BHD 50 | Annual fee |
| Trade License | BHD 20-200 | Depends on activities |
| LMRA Registration | BHD 50 | One-time |
| Chamber of Commerce | BHD 50-100 | Annual |
| Signatory Card | BHD 10 | Per signatory |

**Note:** "Government fees shown are official MOIC rates. Service fees quoted separately during consultation."

---

### 11. CR Amendments Section: `src/components/services/cr/CRAmendmentsSection.tsx`

Dedicated content for amendments (competitor gap).

**Amendment Types Covered:**
- Activity changes (add/remove commercial activities)
- Shareholder transfers and changes
- Capital increase/decrease
- Company name change
- Address change
- Signatory updates
- Manager/director changes
- Converting company types (SPC to WLL)

**Timeline:** Most amendments 2-5 business days

---

### 12. Why Choose Us: Uses shared `ServiceWhyChoose`

**Differentiators (6 items):**
1. Full-Service Convenience - Zero client effort from start to finish
2. 100% Success Rate - Never had a CR application rejected
3. MOIC Experts - 10+ years navigating Bahrain regulations
4. Remote Registration - Complete formation without visiting Bahrain
5. Transparent Pricing - Fixed fees, no hidden costs
6. Ongoing Support - CR renewals, amendments, compliance

---

### 13. Testimonials: `src/components/services/cr/CRTestimonials.tsx`

Social proof from diverse client types.

**3 Testimonials:**
1. **Foreign Entrepreneur** - "Registered my SPC from Dubai without ever visiting Bahrain"
2. **Local Startup** - "Keylink handled our WLL formation while we focused on our product"
3. **Corporate Client** - "Smooth branch office setup for our Singapore company"

---

### 14. Client Success Story: `src/components/services/cr/CRSuccessStory.tsx`

Mini case study for E-E-A-T.

**Story Structure:**
- Challenge: UK-based fintech wanted Bahrain presence but faced regulatory complexity
- Solution: Keylink guided through CBB requirements, MOIC registration
- Result: Fully operational in 14 days, now employing 12 staff
- Quote from client

---

### 15. Related Services: Uses shared `RelatedServicesGrid`

**Links to:**
- Visa & Immigration (/services/visa-immigration)
- Company Formation (/services/company-formation)
- PRO Services (/services/pro-services)
- CR Renewal (/services/cr-renewal)

---

### 16. FAQ Section: Uses shared `ServiceFAQ`

**12 SEO-Optimized Questions:**

1. What is commercial registration in Bahrain?
2. How long does CR registration take?
3. Can foreigners register a CR in Bahrain?
4. What is the difference between CR and trade license?
5. Can I register a CR remotely without visiting Bahrain?
6. What documents are needed for commercial registration?
7. How much does commercial registration cost in Bahrain?
8. Do I need a local sponsor for CR registration?
9. How do I amend my existing commercial registration?
10. What happens if my CR expires?
11. Can I change my CR activities after registration?
12. Which ministry handles commercial registration in Bahrain?

---

### 17. Final CTA: Uses shared `ServiceCTA`

**Content:**
- Badge: "Start Today"
- Title: "Ready to Register Your Business in Bahrain?"
- Subtitle: "Get expert guidance on commercial registration. Free consultation, no obligations."
- Primary CTA: "Book Free Consultation"
- Secondary CTA: "Call Us Now"
- Feature chips: "100% Success Rate", "Same-Week Processing", "Full MOIC Support"

---

## Route Registration

Update `src/App.tsx` to add the new route:

```text
/services/commercial-registration -> CommercialRegistration
```

---

## Technical Implementation Notes

### Component Patterns
- All new components follow existing patterns from `CRRenewal.tsx` and `PROServices.tsx`
- Reuse shared components: ServiceHero, ServiceTrustBar, ServiceBenefits, ServiceWhyChoose, ServiceFAQ, ServiceCTA, RelatedServicesGrid
- New CR-specific components go in `src/components/services/cr/` directory

### Animation Patterns
- Use existing animation utilities from `src/lib/animations.ts`
- Follow `staggerContainer` and `staggerItem` patterns
- Use `useInView` for scroll-triggered animations

### Styling Patterns
- Follow brand colors: Primary (#002C4D), Accent (#C7A763)
- Use established background patterns (dot grid, dashed fade)
- Maintain consistent spacing (py-20 md:py-28 for sections)

### SEO Implementation
- Primary H1 contains target keyword
- Semantic HTML structure (section, article)
- Internal linking to related services
- Schema markup for rich snippets
- Optimized meta tags

---

## Content Differentiation Strategy

**vs. Competitors:**
1. **More comprehensive** - 2,700+ words vs competitor average of 1,900
2. **Amendment coverage** - Dedicated section (most competitors ignore)
3. **Government fees breakdown** - Transparent official costs (rare among competitors)
4. **Remote registration emphasis** - Addresses foreigner needs specifically
5. **Success story** - E-E-A-T content missing from most competitor pages
6. **Interactive elements** - Tabbed requirements, expandable process steps

---

## Files Summary

| File | Type | Purpose |
|------|------|---------|
| `src/pages/services/CommercialRegistration.tsx` | Page | Main page component |
| `src/lib/schema/commercialRegistrationSchema.ts` | Schema | JSON-LD structured data |
| `src/components/services/cr/CRHero.tsx` | Component | Hero section wrapper |
| `src/components/services/cr/CRProblemValue.tsx` | Component | Problem/solution section |
| `src/components/services/cr/WhatIsCR.tsx` | Component | Educational content |
| `src/components/services/cr/CRTypesComparison.tsx` | Component | Entity types table |
| `src/components/services/cr/CRProcessSteps.tsx` | Component | 6-step timeline |
| `src/components/services/cr/CRRequirementsChecklist.tsx` | Component | Document requirements |
| `src/components/services/cr/CRGovernmentFees.tsx` | Component | Fees breakdown |
| `src/components/services/cr/CRAmendmentsSection.tsx` | Component | Amendment types |
| `src/components/services/cr/CRTestimonials.tsx` | Component | Social proof |
| `src/components/services/cr/CRSuccessStory.tsx` | Component | Mini case study |
| `src/App.tsx` | Update | Add route |

**Total: 12 new files + 1 update**
