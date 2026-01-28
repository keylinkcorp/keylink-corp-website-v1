

# Lease Contract Registration Bahrain - Implementation Plan

## Overview
Create a comprehensive pillar page for "Lease Contract Registration Bahrain" at route `/services/lease-registration`. This page will be the definitive SEO resource for landlords, tenants, real estate agents, and foreign investors seeking to register rental agreements in Bahrain.

**Target:** ~2,800-3,200 words | 16 sections | 16 FAQ questions
**Timeline:** 1-3 day registration messaging
**Primary Keyword:** "lease contract registration bahrain"

---

## File Structure

### New Files to Create

```text
src/pages/services/LeaseRegistration.tsx              # Main page component
src/lib/schema/leaseRegistrationSchema.ts             # JSON-LD SEO schema

src/components/services/lease/
  LeaseHero.tsx                                       # Hero section with AI image
  LeaseTrustBar.tsx                                   # Trust metrics bar
  LeaseCostCalculator.tsx                             # 5-step interactive calculator
  WhatIsLeaseRegistration.tsx                         # Featured snippet definition
  WhyRegisterLease.tsx                                # Risk awareness (6-card grid)
  LeaseTypesComparison.tsx                            # Residential vs Commercial table
  LeaseProcessTimeline.tsx                            # 5-step accordion process
  LeaseRequirements.tsx                               # Tabbed checklist (Landlord/Tenant/Property)
  LeaseGovernmentFees.tsx                             # Transparent fee table
  CommonMistakes.tsx                                  # 6-card mistakes grid
  LegalFramework.tsx                                  # Law No. 27/2014 authority section
  VisaCRCrossLink.tsx                                 # Cross-linking to Visa/CR services
  WhyChooseKeylink.tsx                                # 4-card differentiators
  LeaseTestimonials.tsx                               # 3 testimonials
  LeaseFAQ.tsx                                        # 16-question accordion
  LeaseCTA.tsx                                        # Final conversion section
```

### Files to Modify

```text
src/App.tsx                                           # Add route for /services/lease-registration
```

---

## PHASE 5 – Full Copy Draft (All 16 Blocks)

### Block 1: LeaseHero.tsx
**Goal:** Immediate promise + urgency | **Word Count:** ~120 words

```text
Badge: "RERA Registered Service"

Headline:
Register Your Lease Contract
in Bahrain
Same-Day Processing — 100% Compliant

Subheadline:
Protect your tenancy rights and avoid BHD 500+ fines. Whether you're a landlord or tenant, we handle the complete RERA lease registration process in 24-48 hours—fully compliant with Bahrain's tenancy law.

Hero Features:
- Same-Day Processing
- Law No. 27/2014 Compliant  
- No Penalty Risk

CTAs:
[Register My Lease] [Calculate Costs]

Social Proof:
★★★★★ 4.9 Google Reviews | ★★★★★ 4.8 Trustpilot

Trust Line:
Registered with RERA • Bahrain.bh • MOIC • eGovernment
```

**AI Image Prompt:**
"Professional corporate photograph of a Middle Eastern real estate office with a landlord and tenant signing documents, modern Bahrain city view through window, navy blue (#002C4D) and gold (#C7A763) accents, professional attire, soft natural lighting, 4:3 aspect ratio, high-end corporate photography aesthetic, clean minimalist style"

---

### Block 2: LeaseTrustBar.tsx
**Goal:** Authority metrics | **Word Count:** ~30 words

```text
Horizontal Stats Bar:
5,000+ | Leases Registered
10+ Years | Industry Experience  
100% | Compliance Rate
24-48 Hrs | Processing Time

Trust Statement: "Bahrain's Trusted Lease Registration Partner"
```

---

### Block 3: LeaseCostCalculator.tsx
**Goal:** Lead capture + cost transparency | **Word Count:** ~80 words (UI labels)

**5-Step Interactive Calculator:**

**Step 1 - Property Type:**
- Residential (Apartment/Villa) — Standard fee
- Commercial (Office/Retail) — Standard fee
- Industrial (Warehouse/Factory) — +BHD 5

**Step 2 - Lease Duration:**
- Short-term (under 1 year) — Standard
- Standard (1-3 years) — Standard
- Long-term (3+ years) — Standard

**Step 3 - Party Type:**
- Landlord registering — Standard
- Tenant registering — Standard
- Agent on behalf of client — +BHD 25

**Step 4 - Additional Services:**
- Arabic translation — +BHD 30
- Contract drafting — +BHD 75
- Express same-day — +BHD 50
- Attestation for visa — +BHD 40

**Step 5 - Lead Capture Form:**
- Full Name*
- Email Address*
- Phone Number (Optional)

**Results Display:**
- Lease Registration Service: BHD [X]
- Government Fee: BHD 1-10
- Additional Services: BHD [X]
- **Estimated Total: BHD [X]**

---

### Block 4: WhatIsLeaseRegistration.tsx
**Goal:** Featured snippet + education | **Word Count:** ~280 words

```text
Badge: "RERA Compliance"

Heading: What is Lease Contract Registration in Bahrain?

Featured Definition (Snippet-Optimized):
Lease contract registration in Bahrain is the mandatory process of officially recording rental agreements with the Real Estate Regulatory Authority (RERA) through the bahrain.bh portal. Under Property Rent Law No. 27 of 2014, all residential and commercial lease contracts must be registered to gain legal validity. An unregistered lease cannot be used as evidence in rental disputes, and both landlords and tenants risk penalties for non-compliance.

Key Characteristics:
• Mandatory for all rental agreements (residential and commercial)
• Processed through RERA via bahrain.bh eGovernment portal
• Required for legal protection in tenancy disputes
• Prerequisite for family visa sponsorship (for tenants)
• Must include Arabic text or certified Arabic translation

Who Needs to Register:
• Landlords renting out properties in Bahrain
• Tenants entering new rental agreements
• Real estate agents managing client properties
• Foreign investors leasing commercial premises

[Side Panel - Quick Facts:]
Legal Authority: RERA / Law No. 27/2014
Registration Fee: BHD 1-10
Processing Time: Same-day to 48 hours
Languages: Arabic required
Validity: Duration of lease
Penalty Risk: BHD 500+ for non-registration
```

---

### Block 5: WhyRegisterLease.tsx
**Goal:** Risk awareness + urgency | **Word Count:** ~200 words

```text
Badge: "Why Registration Matters"

Heading: Risks of an Unregistered Lease in Bahrain

6-Card Grid:

Card 1 - No Legal Standing
Icon: Scale
An unregistered lease cannot be used as evidence in Bahrain's Rent Disputes Committee. You have no legal protection.

Card 2 - Eviction Vulnerability
Icon: Home
Tenants with unregistered leases are vulnerable to unlawful eviction with no recourse through official channels.

Card 3 - Deposit Disputes
Icon: Wallet
Without registration, recovering security deposits becomes nearly impossible in cases of landlord-tenant conflict.

Card 4 - Penalty Exposure
Icon: AlertTriangle
Both parties face fines of BHD 500 or more for failure to register within the required timeframe.

Card 5 - Visa Complications
Icon: Plane
Tenants cannot use unregistered leases for family visa sponsorship or residency address proof.

Card 6 - CR Address Proof
Icon: Building2
Businesses cannot use unregistered leases as proof of commercial address for CR registration or amendments.
```

---

### Block 6: LeaseTypesComparison.tsx
**Goal:** Comparison clarity | **Word Count:** ~180 words

```text
Badge: "Lease Types"

Heading: Residential vs Commercial Lease Registration

3-Column Comparison Table:

| Attribute | Residential | Commercial |
|-----------|-------------|------------|
| Property Types | Apartments, Villas, Townhouses | Offices, Retail, Warehouses |
| Registration Fee | BHD 1-5 | BHD 5-10 |
| Required Documents | CPR, Ownership, Lease | CR, Ownership, Lease |
| Arabic Translation | Required | Required |
| Processing Time | Same-day to 24 hrs | 24-48 hours |
| Common Use Cases | Family housing, expat rentals | Business premises, retail units |
| Visa Eligibility | Family visa proof | Business address proof |
| Typical Duration | 1-2 years | 2-5 years |

Callout:
"Both lease types follow the same RERA registration process through bahrain.bh. The primary differences are in documentation requirements and fee structures."
```

---

### Block 7: LeaseProcessTimeline.tsx
**Goal:** Process clarity | **Word Count:** ~280 words

```text
Badge: "Registration Process"

Heading: How We Register Your Lease Contract

Total Timeline Badge: "1-3 Business Days"

5-Step Accordion Timeline:

Step 01 - Document Collection (Day 1)
Icon: FileText
Timeline Badge: "Day 1"
Gather all required documents from both landlord and tenant parties.
Details:
• Original lease contract (Arabic or translated)
• Landlord CPR/passport copy
• Tenant CPR/passport copy
• Property ownership certificate (Tapu)
• Previous lease (if renewal)

Step 02 - Contract Review & Translation (Day 1)
Icon: Languages
Timeline Badge: "Day 1"
Review lease terms for compliance and arrange Arabic translation if needed.
Details:
• Verify all mandatory clauses included
• Check rent amount and payment terms
• Confirm property description accuracy
• Arrange certified Arabic translation
• Ensure signatures match ID documents

Step 03 - RERA Portal Submission (Day 1-2)
Icon: Send
Timeline Badge: "Day 1-2"
Submit lease contract through official bahrain.bh eGovernment portal.
Details:
• Login to bahrain.bh portal
• Upload all supporting documents
• Enter property and party details
• Pay government registration fee
• Receive submission reference number

Step 04 - Authority Review (Day 2)
Icon: ClipboardCheck
Timeline Badge: "Day 2"
RERA reviews submission and verifies document authenticity.
Details:
• Automatic preliminary checks
• Document verification
• Property ownership confirmation
• Cross-reference with existing registrations
• Flagging any discrepancies

Step 05 - Registration Certificate (Day 2-3)
Icon: Award
Timeline Badge: "Day 2-3"
Receive official lease registration certificate from RERA.
Details:
• Digital certificate issued via portal
• Printable registration confirmation
• Valid for lease duration
• Can be used for visa applications
• Proof of legal tenancy

Bottom Badge: "Complete Registration in 1-3 Business Days"
CTA: [Start Registration →]
```

---

### Block 8: LeaseRequirements.tsx
**Goal:** Requirements clarity (jurisdiction-tabbed) | **Word Count:** ~220 words

```text
Badge: "Documentation Requirements"

Heading: Lease Registration Requirements

3-Tab Interface: [Landlord] [Tenant] [Property]

Landlord Tab:
Documents required from property owner:
• Valid CPR (Bahraini) or Passport (Foreign)
• Property ownership certificate (Tapu)
• Municipality clearance (if applicable)
• Authorization letter (if representative)
• Previous lease contract (if renewal)
• Bank account details (for rent collection)

Tenant Tab:
Documents required from renter:
• Valid CPR (Bahraini) or Passport (Foreign)
• Residence visa copy (for expats)
• Employment letter or income proof
• Previous landlord reference (optional)
• Company CR copy (for commercial leases)
• Authorized signatory letter (for companies)

Property Tab:
Documents related to the premises:
• Property address and description
• Building permit or completion certificate
• Floor plan or unit layout
• Electricity account number
• Water account number
• Property photos (recommended)

Pro Tip Callout:
"All documents must be in Arabic or accompanied by a certified Arabic translation. We handle translation as part of our service package."

CTA: "Not sure what you need? → Get a Free Document Checklist"
```

---

### Block 9: LeaseGovernmentFees.tsx
**Goal:** Fee transparency | **Word Count:** ~150 words

```text
Badge: "Fee Transparency"

Heading: Government Fees Breakdown

6-Row Fee Table:

| Fee Item | Amount | Frequency | Notes |
|----------|--------|-----------|-------|
| Residential Lease Registration | BHD 1-3 | Per registration | Based on rent amount |
| Commercial Lease Registration | BHD 5-10 | Per registration | Based on rent amount |
| Lease Renewal Registration | BHD 1-5 | Per renewal | Same as new registration |
| Arabic Translation (Certified) | BHD 20-40 | One-time | Per document |
| Attestation (MOFA) | BHD 10 | One-time | If required for visa |
| Express Processing | BHD 0 | N/A | No government express fee |

Transparency Note:
"No markup on government fees. These are official RERA rates accessible through bahrain.bh. Keylink charges separately for professional coordination services."

Estimated Totals Panel:
• Basic Registration: BHD 50-80 (Service + Gov fees)
• With Translation: BHD 80-120
• Full Service + Attestation: BHD 120-180
```

---

### Block 10: CommonMistakes.tsx
**Goal:** Objection handling | **Word Count:** ~180 words

```text
Badge: "Avoid These Errors"

Heading: Common Lease Registration Mistakes

6-Card Grid:

Card 1 - English-Only Contracts
Submitting leases in English without Arabic translation results in automatic rejection by RERA.

Card 2 - Missing Property Details
Incomplete property descriptions (missing plot number, building name) cause processing delays.

Card 3 - Unsigned Documents
All parties must sign the lease before submission. Unsigned pages invalidate the registration.

Card 4 - Expired CPR/Passport
Using expired identification documents results in application rejection.

Card 5 - Incorrect Rent Format
Rent amounts must match between contract and submission form exactly, including currency and period.

Card 6 - Late Registration
Registering after lease commencement exposes both parties to penalty risk.

Callout Box:
"Our compliance team reviews every document before submission, catching these errors before they cause delays or rejections."
```

---

### Block 11: LegalFramework.tsx
**Goal:** E-E-A-T authority | **Word Count:** ~200 words

```text
Badge: "Legal Authority"

Heading: Bahrain Tenancy Law Overview

Two-Column Layout:

Left Column - Law No. 27 of 2014:
The Property Rent Law No. 27 of 2014 governs all landlord-tenant relationships in Bahrain. Key provisions affecting lease registration:

• Article 3: All lease contracts must be in writing and registered with RERA
• Article 5: Landlords cannot increase rent during contract period without tenant consent
• Article 8: Security deposits limited to 2 months' rent for residential properties
• Article 12: Eviction requires valid cause and proper legal procedure
• Article 15: Both parties liable for fines if lease remains unregistered

Right Column - RERA's Role:
The Real Estate Regulatory Authority (RERA) oversees:

• Lease contract registration and database maintenance
• Rent Disputes Committee for conflict resolution
• Enforcement of tenancy law provisions
• Property market regulation and transparency
• Protection of landlord and tenant rights

Callout:
"Keylink maintains direct relationships with RERA and the Rent Disputes Committee, ensuring your registration meets all current legal requirements."
```

---

### Block 12: VisaCRCrossLink.tsx
**Goal:** Cross-selling + SEO internal linking | **Word Count:** ~150 words

```text
Badge: "Connected Services"

Heading: Lease Registration for Visa & Business Needs

Two-Card Layout:

Card 1 - Family Visa Requirement
Icon: Users
A registered lease is mandatory for family visa sponsorship in Bahrain. The tenancy contract proves you have adequate accommodation for sponsored family members. We coordinate lease registration with visa processing for seamless applications.
CTA: [Explore Visa Services →]
Link: /services/visa-immigration

Card 2 - CR Address Proof
Icon: Building2
Commercial lease registration serves as official business address proof for CR registration, amendments, and renewals. MOIC requires a registered lease to verify your company's physical presence in Bahrain.
CTA: [Learn About CR Services →]
Link: /services/commercial-registration

Bottom Note:
"Already have a registered lease? Bring your certificate for faster visa and CR processing."
```

---

### Block 13: WhyChooseKeylink.tsx
**Goal:** Differentiation | **Word Count:** ~160 words

```text
Badge: "Why Keylink"

Heading: Bahrain's Trusted Lease Registration Partner

4-Card Differentiator Grid:

Card 1 - Same-Day Processing
Icon: Zap
Submit your lease in the morning, receive registration confirmation by evening. Express service for urgent requirements.

Card 2 - Full Document Handling
Icon: FileText
Contract review, Arabic translation, portal submission—we handle every step so you don't touch the bureaucracy.

Card 3 - Bilingual Support
Icon: Languages
English and Arabic speaking team assists landlords, tenants, and agents throughout the registration process.

Card 4 - Compliance Guarantee
Icon: ShieldCheck
100% RERA approval rate. We catch errors before submission, ensuring first-time acceptance every time.

Image Panel (Right Side):
[Professional image of Keylink team in office setting]

Floating Badge: "5,000+ Leases Registered"
```

---

### Block 14: LeaseTestimonials.tsx
**Goal:** Social proof | **Word Count:** ~180 words

```text
Badge: "Client Stories"

Heading: What Our Clients Say

3-Card Testimonial Grid:

Testimonial 1:
"I was worried about registering my villa lease as an expat. Keylink handled everything in Arabic and I had my certificate within 24 hours. Used it for my family visa the same week."
— Sarah M., Tenant, Riffa
★★★★★

Testimonial 2:
"Managing 15 rental properties, I needed a reliable registration partner. Keylink now handles all my lease registrations with zero rejections in 2 years."
— Ahmed K., Property Owner, Manama
★★★★★

Testimonial 3:
"Our company needed commercial lease registration for CR amendment. Keylink coordinated both services together, saving us time and ensuring everything was compliant."
— James T., Business Owner, Seef
★★★★★
```

---

### Block 15: LeaseFAQ.tsx
**Goal:** Long-tail keywords + objection handling | **Word Count:** ~700 words

```text
Badge: "Common Questions"

Heading: Lease Registration FAQ

16-Question Accordion (2 columns):

Q1: Is lease registration mandatory in Bahrain?
A: Yes. Under Property Rent Law No. 27 of 2014, all lease contracts (residential and commercial) must be registered with RERA through the bahrain.bh portal. Unregistered leases have no legal standing in disputes.

Q2: Who is responsible for registering the lease—landlord or tenant?
A: Either party can register, but traditionally the landlord initiates registration. Both parties are liable for non-registration fines, so it's in everyone's interest to ensure the lease is registered.

Q3: How much does lease registration cost?
A: Government fees range from BHD 1-10 depending on property type and rent amount. Professional service fees for full registration support start from BHD 50.

Q4: Can I register a lease in English?
A: No. RERA requires all lease contracts to be in Arabic or accompanied by a certified Arabic translation. We provide translation services as part of our registration package.

Q5: How long does lease registration take?
A: Standard processing takes 1-3 business days. Same-day registration is available for urgent requirements through our express service.

Q6: What happens if I don't register my lease?
A: Unregistered leases cannot be used as evidence in the Rent Disputes Committee. Both landlord and tenant face fines of BHD 500 or more, and tenants cannot use the lease for visa sponsorship.

Q7: Can I register a lease retroactively?
A: Yes, but registering after lease commencement may trigger penalty exposure. We recommend registering before or immediately upon signing the contract.

Q8: Is lease registration required for short-term rentals?
A: Leases under 3 months may have different requirements. However, any tenancy that will be used for visa purposes or legal protection should be registered regardless of duration.

Q9: Can a tenant register the lease without the landlord?
A: The tenant can submit registration, but landlord documents (ownership proof, CPR) are still required. We coordinate between both parties to obtain necessary documents.

Q10: How do I register a commercial lease?
A: Commercial lease registration follows the same bahrain.bh portal process but requires the tenant's Commercial Registration (CR) and additional business documentation.

Q11: Can I use a registered lease for family visa?
A: Yes. A registered residential lease is one of the mandatory documents for family visa sponsorship in Bahrain. The lease proves adequate accommodation for sponsored dependents.

Q12: What if my lease is rejected during registration?
A: Common rejection reasons include missing Arabic translation, incomplete property details, or document discrepancies. Our team reviews all documents before submission to prevent rejections.

Q13: Do I need to re-register when renewing a lease?
A: Yes. Lease renewals are treated as new registrations and must be submitted through the RERA portal. We handle renewal registrations with the same process and pricing.

Q14: Can real estate agents register leases on behalf of clients?
A: Yes. Agents can register leases with proper authorization from the landlord or tenant. We work with many Bahrain real estate agencies for bulk registration services.

Q15: What is the Rent Disputes Committee?
A: The Rent Disputes Committee is the official body that resolves landlord-tenant conflicts in Bahrain. Only parties with registered leases can file complaints or use the lease as evidence.

Q16: How do I verify if my lease is already registered?
A: Check your registration status through the bahrain.bh portal using your CPR or lease reference number. If unsure, we can verify your registration status as part of our consultation.
```

---

### Block 16: LeaseCTA.tsx
**Goal:** Final conversion push | **Word Count:** ~80 words

```text
Background: Center-fade dashed grid pattern

Badge: "Get Started Today"

Heading: Register Your Lease Contract in 24-48 Hours

Subheading: Full RERA compliance, Arabic translation included, zero rejection risk. Free consultation, no obligations.

Feature Pills:
[Same-Day Available] [100% Approval Rate] [Full Translation Support]

CTAs:
[Register My Lease] [Call Us Now: +973 1700 0000]

Trust Line: "5,000+ Leases Registered | 10+ Years Experience | 100% Compliance Rate"
```

---

## Component Specifications

### LeaseHero.tsx
- Split layout: text left (60%), AI-generated image right (40%)
- Headline with staggered Framer Motion animation
- Features: Same-Day Processing, Law No. 27/2014 Compliant, No Penalty Risk
- CTAs: Primary (Register My Lease) + Secondary (Calculate Costs)
- Social proof: Google/Trustpilot ratings with avatars
- Trust line: RERA, Bahrain.bh, MOIC, eGovernment

### LeaseTrustBar.tsx
- Horizontal stats bar with AnimatedCounter component
- 4 metrics: 5,000+ Leases | 10+ Years | 100% Compliance | 24-48 Hrs
- Consistent with BranchTrustBar pattern

### LeaseCostCalculator.tsx
- 5-step wizard following BranchCostCalculator pattern
- Step 1: Property Type (Residential/Commercial/Industrial)
- Step 2: Lease Duration (Short/Standard/Long)
- Step 3: Party Type (Landlord/Tenant/Agent)
- Step 4: Additional Services (Translation, Drafting, Express, Attestation)
- Step 5: Lead Capture Form (Name, Email, Phone with Zod validation)
- Results breakdown with line items

### WhatIsLeaseRegistration.tsx
- Two-column split (3:2) following WhatIsBranch pattern
- Featured snippet definition block
- Key characteristics list with icons
- Right sidebar with Quick Facts + "Best For" callout

### WhyRegisterLease.tsx
- 6-card grid with icons (WhyBahrain pattern)
- Risk-focused messaging (negative consequences)
- Hover effects with shadow elevation

### LeaseTypesComparison.tsx
- 3-column comparison table (BranchVsWLLComparison pattern)
- Tab selector for Residential/Commercial highlighting
- 8 comparison attributes

### LeaseProcessTimeline.tsx
- 5-step accordion with single phase (simpler than Branch 3-phase)
- Following BranchProcessTimeline visual pattern
- Solid vertical line, numbered nodes, timeline badges

### LeaseRequirements.tsx
- 3-tab interface: Landlord | Tenant | Property
- Following BranchRequirements pattern
- Pro-tip callout box

### LeaseGovernmentFees.tsx
- Following BranchGovernmentFees pattern
- 6-row fee table with amount/frequency/notes
- Estimated totals sidebar
- Transparency note

### CommonMistakes.tsx
- 6-card grid with error descriptions
- Icon + title + description format
- Callout box for reassurance

### LegalFramework.tsx
- Two-column layout (Law overview + RERA role)
- Authority-building content for E-E-A-T
- Callout with Keylink relationship mention

### VisaCRCrossLink.tsx
- Two-card layout with service links
- Internal linking for SEO
- Following RelatedServicesGrid pattern but focused

### WhyChooseKeylink.tsx
- 4-card differentiator grid + image panel
- Following WhyChooseKeylink (Branch) pattern
- Floating stat badge

### LeaseTestimonials.tsx
- 3-card testimonial grid
- Avatar, quote, name, location, rating
- Following BranchTestimonials pattern

### LeaseFAQ.tsx
- 16 questions in 2-column accordion
- Following BranchFAQ pattern
- JSON-LD FAQPage schema integration

### LeaseCTA.tsx
- Center-fade dashed grid background
- Following BranchCTA pattern
- Feature pills + dual CTAs + trust line

---

## Technical Implementation Details

### SEO Schema (leaseRegistrationSchema.ts)
JSON-LD @graph array containing:
- Organization (Keylink Corp)
- LocalBusiness (Lease Registration Services)
- Service (Lease Contract Registration)
- FAQPage (16 questions)
- BreadcrumbList (Home > Services > Lease Registration)

### Route Registration (App.tsx)
Add import and route:
```typescript
import LeaseRegistration from "./pages/services/LeaseRegistration";
// ...
<Route path="/services/lease-registration" element={<LeaseRegistration />} />
```

### Page Meta Tags (LeaseRegistration.tsx)
- Title: "Lease Contract Registration Bahrain - Same-Day RERA Registration | Keylink Corp"
- Description: "Register your lease contract in Bahrain in 24-48 hours. Full RERA compliance, Arabic translation included. Protect your tenancy rights. Free consultation."
- Canonical: https://keylinkcorp.com/services/lease-registration

---

## AI Image Generation Plan

Generate 2 images using Nano banana model:

1. **lease-hero-professional.jpg** (1024x768)
   - Prompt: "Professional corporate photograph of a Middle Eastern real estate office with a landlord and tenant signing lease documents at a modern desk, Bahrain city skyline visible through floor-to-ceiling windows, navy blue (#002C4D) and gold (#C7A763) color palette, both parties in professional business attire, soft natural lighting, clean minimalist interior design, 4:3 aspect ratio, high-end corporate photography aesthetic"

2. **lease-consultation-team.jpg** (1024x768)
   - Prompt: "Professional team of real estate consultants in a modern Bahrain office, diverse group including Arab and Western professionals, reviewing documents on tablet devices, navy blue (#002C4D) and gold (#C7A763) brand colors in office decor, large windows with natural light, collaborative atmosphere, 4:3 aspect ratio, corporate photography style"

---

## Design System Adherence

All components follow established patterns:
- Navy (#002C4D) for primary text and buttons
- Gold (#C7A763) for accents and highlights
- Background patterns: Radial gradient blur, dot grid, dashed fade
- Typography: Inter font, H1 48-60px, H2 36-44px, body 16-18px
- Spacing: py-24 md:py-32 for sections
- Animations: Framer Motion staggerContainer, staggerItem
- Cards: White bg, border-2 border-border, rounded-2xl/3xl, shadow-sm

---

## Component Order on Page

```text
1.  LeaseHero
2.  LeaseTrustBar
3.  LeaseCostCalculator
4.  WhatIsLeaseRegistration
5.  WhyRegisterLease
6.  LeaseTypesComparison
7.  LeaseProcessTimeline
8.  LeaseRequirements
9.  LeaseGovernmentFees
10. CommonMistakes
11. LegalFramework
12. VisaCRCrossLink
13. WhyChooseKeylink
14. LeaseTestimonials
15. LeaseFAQ
16. LeaseCTA
+ FloatingWhatsApp
+ BackToTop
```

---

## Implementation Sequence

1. **Create schema file** — leaseRegistrationSchema.ts
2. **Create all 16 components** in src/components/services/lease/
3. **Generate AI images** — Hero and team images
4. **Create main page** — LeaseRegistration.tsx with imports and SEO
5. **Update App.tsx** — Add route
6. **Test and refine** — Verify responsive behavior and animations

---

## Estimated Files
- 1 page file
- 16 component files
- 1 schema file
- 1 route update
- 2 AI-generated images

**Total: 19 new files + 1 modification**

---

## Word Count Summary

| Block | Approximate Words |
|-------|-------------------|
| LeaseHero | 120 |
| LeaseTrustBar | 30 |
| LeaseCostCalculator | 80 (UI labels) |
| WhatIsLeaseRegistration | 280 |
| WhyRegisterLease | 200 |
| LeaseTypesComparison | 180 |
| LeaseProcessTimeline | 280 |
| LeaseRequirements | 220 |
| LeaseGovernmentFees | 150 |
| CommonMistakes | 180 |
| LegalFramework | 200 |
| VisaCRCrossLink | 150 |
| WhyChooseKeylink | 160 |
| LeaseTestimonials | 180 |
| LeaseFAQ | 700 |
| LeaseCTA | 80 |
| **Total** | **~3,190 words** |

