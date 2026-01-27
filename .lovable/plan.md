

# Phase 6 – Visual & Layout Plan
## "Single Person Company Bahrain" Landing Page

---

## 1. Page Architecture Overview

The page follows the established conversion-optimized sequence used across service pages, adapted for SPC-specific content.

### Page Route
`/services/single-person-company`

### Component Structure
```text
src/pages/services/SinglePersonCompany.tsx
src/components/services/spc/
  ├── SPCHero.tsx
  ├── SPCTrustBar.tsx
  ├── SPCCostCalculator.tsx
  ├── WhyChooseSPC.tsx
  ├── SPCLegalUpdate.tsx
  ├── SPCvsWLLComparison.tsx
  ├── SPCProcessTimeline.tsx
  ├── SPCRequirements.tsx
  ├── SPCGovernmentFees.tsx
  ├── SPCBankAccountUpdate.tsx
  ├── SPCTestimonials.tsx
  ├── SPCSuccessSnapshot.tsx
  ├── SPCRelatedServices.tsx
  ├── SPCFAQ.tsx
  └── SPCCTA.tsx
```

### Content Flow (16 Blocks)
```text
1. Hero (Hook & Promise)
2. TrustBar (Credibility Stats)
3. Cost Calculator (Lead Capture)
4. Why Choose SPC (Pain Points Solved)
5. 2020 Legal Update (Education)
6. SPC vs WLL Comparison (Decision Support)
7. 6-Step Process Timeline
8. Requirements Checklist
9. Government Fees Breakdown
10. 2024 Bank Account Update
11. Testimonials (Social Proof)
12. Success Snapshot (Case Study)
13. Related Services
14. FAQ (12 Questions)
15. Final CTA
```

---

## 2. Section-by-Section Visual Specifications

---

### Block 1: SPCHero

**Layout**: 60/40 split (text left, image right on desktop); stacked on mobile

**Background**:
- Gold radial gradient blur at top center (rgba(199,167,99,0.15))
- 24px dot grid pattern with bottom fade mask (85% solid, 15% fade)
- White base (#FFFFFF)

**Content Elements**:
| Element | Specification |
|---------|--------------|
| Trust Badge | Gold/10 pill: "Bahrain's Simplest Business Structure" |
| H1 Headline | 60px bold, 3 lines: "Single Person Company", "in Bahrain", "Start Solo in 3-14 Days" (gold underline on last line) |
| Subheading | 22px, muted-foreground, max 420px width |
| Feature Pills | 3 horizontal items: Shield icon + "100% Foreign Ownership", Wallet + "From BHD 750", Clock + "BHD 50 Minimum Capital" |
| Primary CTA | Gold background, navy text, "Get Free Consultation" with ArrowRight |
| Secondary CTA | Outline, navy border, "Calculate Your Costs" |
| Social Proof | Google (4.9 stars) + Trustpilot (4.8 stars) with avatar stacks |
| Trust Line | "Registered with MOIC, LMRA, Bahrain Chamber" |

**Hero Image**:
- Solo entrepreneur/consultant image (new asset: `spc-hero-entrepreneur.jpg`)
- 580px height, rounded-2xl, shadow-sm
- Floating badge bottom-left: "Starting from BHD 750"
- Floating badge top-right: "100% Success Rate"

**Animations**:
- Staggered headline reveal (heroHeadlineContainer/Line)
- Image reveal with scale (imageReveal variant)
- Floating badges with y-axis slide-in

---

### Block 2: SPCTrustBar

**Layout**: Horizontal bar with trust statement left, animated stats right

**Background**: White with border-y border-border/50

**Stats**:
| Stat | Value |
|------|-------|
| SPCs Formed | 350+ |
| Years Experience | 10+ |
| Success Rate | 100% |
| Average Timeline | 3-14 Days |

**Component**: Reuse AnimatedCounter pattern from FormationTrustBar

---

### Block 3: SPCCostCalculator

**Layout**: Centered card with multi-step form inside

**Background**:
- Light gray (#F8F8F8) section
- 16px dot grid pattern with center ellipse mask

**Calculator Flow** (Simplified for SPC):
```text
Step 1: Business Activity (4 options: Consulting, Trading, Tech, Regulated)
Step 2: Owner Nationality (Bahraini/GCC, Foreign)
Step 3: Visa Requirements (None, 1 Investor Visa)
Step 4: Office Type (Virtual, Serviced, Small)
Step 5: Additional Services (Bank, PRO, Accounting)
Step 6: Lead Capture (Name, Email, Phone)
```

**Visual Elements**:
- Progress bar at top with step indicators
- Card with rounded-2xl, border, shadow-sm
- Gold accent for selected options
- Navy primary button for navigation
- Results breakdown: Line items with service fees + government fees

**Animations**:
- AnimatePresence for step transitions
- Fade-up for result reveal

---

### Block 4: WhyChooseSPC (Pain Points Solved)

**Layout**: Split - Image left (40%), 6-item benefits grid right (60%)

**Background**: White (#FFFFFF)

**Content**:
- Section header with gold pill "Why Single Person Company?"
- H2: "Perfect for Solo Entrepreneurs"

**6 Differentiators**:
| Icon | Title | Description |
|------|-------|-------------|
| User | Total Control | 100% ownership, no partners needed |
| Wallet | Lowest Entry Cost | BHD 50 minimum capital requirement |
| Shield | Limited Liability | Personal assets protected |
| Zap | Fast Registration | 3-14 days complete setup |
| Globe | 100% Foreign Ownership | No local sponsor required |
| FileCheck | Simple Compliance | Minimal annual requirements |

**Image**: Professional consultant working solo (new asset: `spc-solo-consultant.jpg`)
- Floating stat badge: "350+ SPCs Formed"

---

### Block 5: SPCLegalUpdate (2020 Decree Explanation)

**Layout**: Centered content block with icon callout

**Background**: White with dashed grid pattern (top fade)

**Visual Design**:
- Alert-style card with gold left border (4px)
- Scale/Balance icon in gold icon box
- H3: "2020 Legal Update: What Changed?"
- Body text explaining Decree 28/2020 merger
- 3 bullet points with CheckCircle2 icons:
  - "SPC merged into single-shareholder WLL framework"
  - "Same benefits, enhanced legal recognition"
  - "Keylink handles all technical requirements"

**Animations**: Fade-in-up on scroll

---

### Block 6: SPCvsWLLComparison

**Layout**: Tabbed comparison (reuse CRTypesComparison pattern)

**Background**: Light gray with 16px dot grid

**Tabs**: SPC | WLL (default: SPC selected)

**Comparison Table**:
| Attribute | SPC | WLL |
|-----------|-----|-----|
| Shareholders | 1 only | 2-50 |
| Minimum Capital | BHD 50 | BHD 20,000 |
| Best For | Solo entrepreneurs | Partnerships |
| Control | Full owner control | Shared decision-making |
| Conversion | Can upgrade to WLL | N/A |
| Processing | 3-14 days | 5-7 days |

**CTA Side Panel**: Navy gradient with gold button "Start Your SPC Today"

---

### Block 7: SPCProcessTimeline

**Layout**: Vertical timeline with expandable accordion steps

**Background**: Light gray (secondary/30) with center-fading dot grid

**Timeline Structure** (6 Steps):
| Step | Icon | Title | Timeframe |
|------|------|-------|-----------|
| 1 | ShieldCheck | Security Approval | Day 1-3 |
| 2 | FileText | Name Reservation | Day 2-3 |
| 3 | Wallet | Bank Account Opening | Day 3-7 |
| 4 | Stamp | Document Notarization | Day 5-8 |
| 5 | Building2 | CR Issuance | Day 7-12 |
| 6 | CreditCard | LMRA & ID Processing | Day 10-14 |

**Visual Elements**:
- Gold circle step numbers
- Clock badge for timeframe
- Expandable content with requirements list
- Gold left border on expanded state

**Bottom Badge**: "Complete SPC Formation in 3-14 Business Days"

---

### Block 8: SPCRequirements

**Layout**: Tabbed checklist (Individual vs Corporate Shareholder)

**Background**: White with subtle dot grid

**Tab 1 - Individual Requirements**:
- Valid passport copy
- Professional CV/resume
- Proof of residential address
- Passport-size photograph
- Business plan outline

**Tab 2 - Corporate Shareholder** (if applicable):
- Certificate of incorporation
- Board resolution
- Parent company CR
- Audited financials
- Power of attorney

**Visual Style**: Cards with CheckCircle2 icons, gold accent on completion

---

### Block 9: SPCGovernmentFees

**Layout**: 3-column fee cards (reuse CRGovernmentFees pattern)

**Background**: Light gray with large grid pattern

**Fee Categories**:

**Column 1 - Registration Fees** (Most Common badge):
- Name Reservation: BHD 15
- CR Registration: BHD 50/year
- Trade License: BHD 20-200

**Column 2 - Post-Registration**:
- LMRA Registration: BHD 50
- Chamber of Commerce: BHD 50-100/year
- Signatory Card: BHD 10

**Column 3 - Optional**:
- Virtual Office: BHD 300+/year
- Bank Account Support: Included in packages

**Disclaimer Box**: Gold-bordered info card with notes about 2024 fee updates

---

### Block 10: SPCBankAccountUpdate

**Layout**: Alert banner with icon and details

**Background**: Navy gradient (#002C4D to #001A35)

**Content**:
- AlertCircle icon (gold)
- H3: "June 2024 Update: Mandatory Bank Account"
- Body: Explanation of new requirement
- 3 checkmarks: What's required, timeline impact, how Keylink helps

**Visual Style**: White text, gold accents, backdrop-blur cards for stats

---

### Block 11: SPCTestimonials

**Layout**: 3-column testimonial cards

**Background**: Light gray with center-fading dot grid

**Testimonials**: 3 cards featuring solo entrepreneurs
- Quote with star ratings
- Client photo with BadgeCheck
- Name, role, company

**Trust Badges**: Google (4.9) + Trustpilot (4.8) pills at bottom

---

### Block 12: SPCSuccessSnapshot

**Layout**: Navy background with 3 cards (Challenge/Solution/Result)

**Background**: Primary (#002C4D) with gold blur accents

**Case Study Content**:
- Client: "UK-based consultant"
- Challenge: Needed simple structure for GCC consulting
- Solution: SPC formation with virtual office
- Result: Operational in 10 days, first client within 2 weeks

**Stats Row**: 4 glassmorphic cards (Days, Entity Type, Investment, Setup Type)

**Client Quote Box**: Portrait + testimonial quote

---

### Block 13: SPCRelatedServices

**Layout**: 4-column grid of service cards

**Background**: White

**Related Services**:
1. Business License (icon: FileCheck)
2. Visa & Immigration (icon: IdCard)
3. PRO Services (icon: Users)
4. CR Renewal (icon: RefreshCw)

**Card Style**: White cards with gold icon boxes, arrow links

---

### Block 14: SPCFAQ

**Layout**: 2-column accordion grid

**Background**: White with dashed top-fade pattern

**12 Questions** (from Phase 5 copy):
1. What is a Single Person Company in Bahrain?
2. Can foreigners own 100% of an SPC?
3. What is the minimum capital for SPC?
4. How long does SPC registration take?
5. Do I need to be in Bahrain to register?
6. What's the difference between SPC and WLL?
7. Can I convert SPC to WLL later?
8. What documents are required?
9. What are the annual compliance requirements?
10. Can I get a work visa through my SPC?
11. What business activities are allowed?
12. How much does SPC formation cost?

**Visual Style**: Gold left-border on open state, shadow-md

---

### Block 15: SPCCTA

**Layout**: Centered content with stacked CTAs

**Background**: White with center-fading dashed grid

**Content**:
- Sparkles badge: "Ready to Start?"
- H2: 64px "Start Your Solo Business in Bahrain Today"
- Subtext: Join 350+ successful solo entrepreneurs
- Feature pills: Free Consultation | No Obligations | Expert Guidance
- Primary CTA: Gold "Get Free Consultation"
- Secondary CTA: Outline "Call +973 1700 0000"
- Trust line: "Trusted by 350+ solo entrepreneurs across 30+ countries"

---

## 3. New Image Assets Required

| Asset | Description | Dimensions |
|-------|-------------|------------|
| spc-hero-entrepreneur.jpg | Solo professional at modern desk/laptop | 800x580px |
| spc-solo-consultant.jpg | Consultant working independently | 600x480px |
| spc-success-portrait.jpg | Client headshot for case study | 144x144px |

**Style Guidelines**:
- Modern corporate aesthetic
- Navy (#002C4D) and Gold (#C7A763) tones
- Clean backgrounds (white/light gray)
- Professional but approachable subjects

---

## 4. Animation Specifications

| Section | Animation Type | Trigger |
|---------|---------------|---------|
| Hero | staggered headline, image scale reveal | Page load |
| TrustBar | fade-up, counter animation | In view |
| Calculator | step transitions with AnimatePresence | User interaction |
| Why Choose | stagger container, icon hover effects | In view |
| Legal Update | fade-in-up | In view |
| Comparison | tab switch with layoutId animation | User interaction |
| Timeline | accordion expand with height animation | User interaction |
| Testimonials | stagger cards, star rating cascade | In view |
| Success Story | glassmorphic card hover effects | In view |
| FAQ | accordion with gold border transition | User interaction |
| CTA | scale on button hover | User interaction |

**Easing**: cubic-bezier(0.22, 1, 0.36, 1) for premium feel

---

## 5. Typography Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| H1 (Hero) | 60px | 700 | #002C4D |
| H2 (Sections) | 52px | 700 | #002C4D |
| H3 (Subsections) | 28px | 600 | #002C4D |
| Body Large | 22px | 400 | #666666 |
| Body Regular | 16px | 400 | #666666 |
| Captions/Labels | 14px | 500 | #C7A763 |

---

## 6. Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| Desktop (1024px+) | Full layouts as specified |
| Tablet (768-1023px) | 2-column grids become 2-col, hero stacks |
| Mobile (< 768px) | Single column, full-width buttons, reduced padding |

---

## 7. SEO & Schema Implementation

**Page Title**: "Single Person Company in Bahrain - Register SPC in 3-14 Days | From BHD 750 | Keylink Corp"

**Meta Description**: "Start your solo business in Bahrain with 100% foreign ownership. Register a Single Person Company (SPC) in 3-14 days from BHD 50 minimum capital. Expert MOIC registration & LMRA support. Free consultation."

**JSON-LD Schemas**:
- Service schema (Single Person Company Formation)
- FAQPage schema (12 questions)
- LocalBusiness schema

---

## 8. Technical Notes

### File Structure
```text
src/lib/schema/spcSchema.ts  (new)
src/pages/services/SinglePersonCompany.tsx  (new)
src/components/services/spc/  (new folder with 15 components)
```

### Routing Addition
```typescript
// In App.tsx or router config
{ path: "/services/single-person-company", element: <SinglePersonCompany /> }
```

### Shared Component Reuse
- AnimatedCounter from existing
- Accordion from ui/accordion
- Button, Card, Input from ui components
- Animation variants from lib/animations.ts

