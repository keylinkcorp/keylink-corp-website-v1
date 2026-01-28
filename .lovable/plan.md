
# PHASE 5: Full Copy Draft for MOA Landing Page

## Implementation Overview
This plan creates a complete "Memorandum of Association (MOA) Bahrain" landing page at `/services/moa` following the Focused Expert Page structure (10-12 sections, ~2,200-2,600 words). The implementation reuses existing shared components where appropriate and creates MOA-specific components following established patterns.

---

## Section 1: MOA Hero (MOAHero.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentHero)

### Visual Layout
- Split 60/40 layout with content left, professional image right
- Radial gold glow background pattern with dot grid
- Floating stat badges for "48hr Notarization" and "500+ MOAs Drafted"
- Hero features pills: "24-48hr Turnaround" | "100% MOIC Approval" | "Remote Service"

### Copy Content

**Badge:** "Bahrain MOA Specialists"

**Headline:**
```
Professional MOA Services in Bahrain — Drafted in 24-48 Hours
```

**Subheadline:**
```
Expert drafting, notarization, amendments, and attestation for your Memorandum of Association. Full compliance with Commercial Companies Law No. 21 of 2001.
```

**CTA Buttons:**
- Primary: "Get Free MOA Consultation" → /contact
- Secondary: "Call Now" → tel:+97317000000

**Trust Line Elements:**
- MOIC Certified
- Sijilat 3.0 Expert
- All Entity Types

---

## Section 2: MOA Trust Bar (MOATrustBar.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentTrustBar)

### Metrics
| Icon | Value | Suffix | Label |
|------|-------|--------|-------|
| FileText | 500 | + | MOAs Drafted |
| CheckCircle2 | 100 | % | Approval Rate |
| Clock | 48 | hr | Avg Notarization |
| Award | 10 | + | Years Legal Expertise |

---

## Section 3: MOA Cost Calculator (MOACostCalculator.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentCostCalculator)

### Calculator Flow (5 Steps)

**Step 1: Service Type**
- MOA Drafting (BHD 200) - New memorandum creation
- MOA Amendment (BHD 150) - Modify existing MOA
- MOA Notarization (BHD 75) - Authenticate existing MOA
- MOA Attestation (BHD 100) - For foreign use

**Step 2: Entity Type**
- SPC (Single Person Company)
- WLL (Limited Liability Company)
- Branch Office
- Holding Company

**Step 3: Complexity Level**
- Standard (2-3 activities, single shareholder) - Included
- Complex (5+ activities, multiple shareholders, special clauses) - +BHD 100

**Step 4: Additional Services (Optional)**
- Arabic Translation (BHD 50)
- Express 24hr Processing (BHD 100)
- Document Courier (BHD 25)

**Step 5: Lead Capture Form**
- Name, Email, Phone (validated with Zod)

### Results Display
- Line-item breakdown with service type, entity, add-ons
- Total estimate prominently displayed
- CTA: "Request Detailed Quote"

---

## Section 4: What Is MOA Explainer (WhatIsMOA.tsx)
**Component Type:** Uses shared ServiceExplainer component

### Configuration

**Badge:** "Understanding Your MOA"
**Badge Icon:** FileText

**Title:**
```jsx
<>What Is a <span className="text-accent">Memorandum of Association</span> in Bahrain?</>
```

**Paragraphs:**
```
Paragraph 1:
The Memorandum of Association (MOA) is the foundational legal document for every company registered in Bahrain. Often called the company's "birth certificate," it establishes your business identity, defines ownership structure, and sets operational boundaries under the Commercial Companies Law No. 21 of 2001.

Paragraph 2:
Every MOA submitted to the Ministry of Industry and Commerce (MOIC) must include five mandatory clauses: company name, registered address, business objectives, capital structure, and shareholder details. For WLLs specifically, Article 15 requires additional clauses covering profit distribution and management appointments.

Paragraph 3:
Unlike informal partnership agreements, the MOA creates legally binding obligations between shareholders and third parties. Banks require your MOA to open corporate accounts. Visa authorities reference it for employee sponsorship. Contract disputes often hinge on MOA provisions.

Paragraph 4:
Getting your MOA right from the start prevents costly amendments later. Common drafting errors—vague activity descriptions, missing share transfer clauses, incorrect capital representations—can delay registration by weeks or create compliance issues years down the line.
```

**Key Facts:**
| Icon | Label | Text |
|------|-------|------|
| Building2 | Legal Authority | Commercial Companies Law No. 21/2001 |
| FileText | Registration Portal | Sijilat 3.0 Electronic System |
| Scale | Mandatory Elements | 5 Core Clauses Required |
| Clock | Drafting Timeline | 24-48 Hours with Keylink |

**Callout:**
```
Icon: AlertTriangle
Title: Article 15 Compliance
Text: WLL Memoranda require specific clauses for profit distribution, management structure, and share transfer restrictions. Non-compliant MOAs are rejected by MOIC.
```

**Benefits Panel:**

**Title:** "Your MOA Enables"
**Subtitle:** "A properly drafted MOA unlocks:"

| Icon | Text |
|------|------|
| Building2 | Legal entity recognition |
| Briefcase | Commercial bank accounts |
| Users | Employee visa sponsorship |
| FileCheck | Government contract eligibility |
| Globe | International business credibility |
| Shield | Shareholder liability protection |

**Panel Footer:**
```
Icon: CheckCircle2
Text: Foundation for your Bahrain business
```

---

## Section 5: MOA Types Comparison (MOATypesComparison.tsx)
**Component Type:** New MOA-specific component (pattern from CRTypesComparison)

### Entity MOA Cards (3-column grid)

**SPC MOA**
- Icon: User
- Title: "SPC Memorandum"
- Short: "Solo entrepreneurs with simplified structure"
- Full: "Single shareholder MOA with streamlined clauses. Minimum capital BHD 50. Includes: company objectives, sole shareholder details, capital amount, registered address, management by shareholder. No partner consent requirements. Fastest to draft at 24 hours."

**WLL MOA**
- Icon: Users
- Title: "WLL Memorandum"
- Short: "Partnerships with detailed governance"
- Full: "Multi-shareholder MOA requiring Article 15 compliance. Includes all SPC clauses plus: share distribution percentages, profit/loss allocation, management appointment rules, share transfer restrictions, partner meeting procedures, and dissolution terms. Typical drafting: 24-48 hours."

**Branch MOA**
- Icon: Building2
- Title: "Branch Office MOA"
- Short: "Extension of parent company"
- Full: "Reference document connecting to parent company's MOA. Includes: parent company details, branch manager appointment, scope of activities (limited to parent's), registered address in Bahrain. Requires attested parent MOA and board resolution. Drafting: 48-72 hours."

**Holding Company MOA**
- Icon: Landmark
- Title: "Holding Company MOA"
- Short: "Investment vehicle structure"
- Full: "Specialized MOA for companies holding shares in subsidiaries. Minimum capital BHD 250,000. Includes: investment objectives, subsidiary ownership structure, dividend distribution rules, board governance. Most complex drafting: 48-72 hours."

---

## Section 6: MOA Process Timeline (MOAProcess.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentProcess)

### Timeline Indicator
```
Total Timeline: 2-5 Business Days
```

### Process Steps (Accordion)

**Step 01: Initial Consultation**
- Timeline Badge: "Day 1"
- Icon: MessageSquare
- Description: "We review your business structure and identify the right MOA format for your entity type."
- Details:
  - Determine entity type (SPC, WLL, Branch, Holding)
  - Identify required clauses for compliance
  - Review shareholder and capital structure
  - Confirm activity scope and ISIC codes
  - Fixed quote with no hidden fees

**Step 02: MOA Drafting**
- Timeline Badge: "Day 1-2"
- Icon: PenTool
- Description: "Our legal team drafts your MOA in Arabic with all mandatory clauses per Commercial Companies Law."
- Details:
  - Draft all five mandatory clauses
  - Include Article 15 requirements (WLL)
  - Arabic legal terminology precision
  - Internal compliance review
  - Client review and approval

**Step 03: Notarization**
- Timeline Badge: "Day 2-3"
- Icon: Stamp
- Description: "MOA is notarized by a licensed Bahrain notary public for legal authentication."
- Details:
  - Schedule notary appointment
  - Shareholder signature coordination
  - Notary seal and attestation
  - Digital and physical copies prepared
  - 48-hour guarantee available

**Step 04: MOIC Submission**
- Timeline Badge: "Day 3-5"
- Icon: Building2
- Description: "Notarized MOA submitted through Sijilat 3.0 as part of your CR application."
- Details:
  - Sijilat 3.0 portal upload
  - CR application integration
  - Government fee payment
  - Real-time status monitoring
  - Query response handling

---

## Section 7: MOA Requirements Checklist (MOARequirements.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentRequirements)

### Tabbed Requirements by Service Type

**Tab 1: New MOA (Drafting)**
- Valid passport copies of all shareholders
- Proof of address for registered office
- Proposed company name (3 options)
- Business activity descriptions
- Capital contribution details per shareholder
- Management appointment decision

**Tab 2: MOA Amendment**
- Current MOA copy (notarized)
- Current CR certificate
- Board resolution authorizing amendment
- Updated shareholder details (if applicable)
- New activity descriptions (if changing scope)

**Tab 3: MOA Notarization**
- Existing MOA document
- Shareholder ID documents
- Physical presence or POA for signatories
- Translation (if original not in Arabic)

**Tab 4: MOA Attestation**
- Notarized MOA copy
- Ministry of Foreign Affairs attestation
- Embassy/consulate legalization (destination country)
- Apostille (Hague Convention countries)

### Info Box
```
Title: Document Requirements Vary
Text: Specific requirements depend on entity type, nationality of shareholders, and business activities. We provide a tailored checklist during your free consultation.
```

---

## Section 8: Government Fees (MOAGovernmentFees.tsx)
**Component Type:** New MOA-specific component (pattern from CRAmendmentGovernmentFees)

### Fee Table

| Service | Government Fee | Processing |
|---------|----------------|------------|
| MOA Notarization | BHD 10-50 | 24-48 hours |
| MOA Registration (with CR) | Included in CR fee | With CR processing |
| MOA Amendment | BHD 20-30 | 2-5 days |
| MOFA Attestation | BHD 10 | 1-2 days |
| Embassy Legalization | Varies by country | 3-7 days |

### Additional Fees
| Service | Fee |
|---------|-----|
| Arabic translation | BHD 20-100 |
| Apostille (Hague countries) | BHD 25 |
| Courier services | BHD 15-50 |

### Transparency Notice
```
Title: Fee Transparency Notice
Text: Government fees are set by MOIC, notary offices, and MOFA. Professional drafting and coordination fees are quoted separately. Keylink provides complete itemized quotes before starting any work—no hidden charges.
```

---

## Section 9: Why Choose Keylink (ServiceWhyChoose - Shared)
**Component Type:** Uses shared ServiceWhyChoose component

### Configuration

**Badge:** "Why Keylink"
**Title:** "Bahrain's Trusted MOA Specialists"
**Subtitle:** "10+ years of legal expertise drafting compliant Memoranda of Association"

**Differentiators:**
| Icon | Title | Description |
|------|-------|-------------|
| Scale | Commercial Law Expertise | Deep knowledge of Law No. 21/2001 and Article 15 requirements |
| Zap | 48-Hour Notarization | Express service gets your MOA notarized same-day or next-day |
| Globe | Remote Drafting | Complete MOA preparation without visiting Bahrain |
| Shield | First-Time Approval | Zero rejection rate with MOIC submissions |
| CheckCircle2 | Full-Lifecycle Support | Drafting, amendments, attestation under one roof |
| Headphones | Dedicated Legal Team | Direct access to our MOA specialists |

**Floating Stat:** "500+" | "MOAs Drafted"

**Image:** Use existing professional team image (cr-team-collaboration.jpg)

---

## Section 10: Testimonials (MOATestimonials.tsx)
**Component Type:** New MOA-specific component (pattern from CRTestimonials)

### Testimonial Cards (3 cards)

**Testimonial 1:**
```
Quote: "Keylink drafted our WLL Memorandum perfectly the first time. The Article 15 clauses were exactly what our lawyer confirmed we needed. Notarized within 48 hours."
Author: Sarah M.
Role: Co-Founder, Tech Startup
Image: testimonial-sarah.jpg
Rating: 5 stars
```

**Testimonial 2:**
```
Quote: "We needed an MOA amendment to add new activities. Keylink handled everything through Sijilat and we had the updated MOA within a week. Professional and efficient."
Author: Ahmed K.
Role: Managing Director, Consulting Firm
Image: testimonial-ahmed.jpg
Rating: 5 stars
```

**Testimonial 3:**
```
Quote: "Required our MOA attested for a UAE bank account. Keylink coordinated the MOFA attestation and embassy legalization seamlessly. Saved us so much time."
Author: James L.
Role: Branch Manager, UK Company
Image: testimonial-james.jpg
Rating: 5 stars
```

---

## Section 11: Related Services (RelatedServicesGrid - Shared)
**Component Type:** Uses shared RelatedServicesGrid component

### Configuration

**Badge:** "Related Services"
**Title:** "Complete Your Business Setup"
**Subtitle:** "Explore our other services to become fully operational in Bahrain"

**Services:**
| Icon | Title | Description | Href | Price |
|------|-------|-------------|------|-------|
| Building2 | Company Formation | Complete company setup packages | /services/company-formation | BHD 750 |
| FileText | Commercial Registration | CR registration and renewal | /services/commercial-registration | BHD 250 |
| Edit | CR Amendment | Modify your existing CR | /services/cr-amendment | BHD 100 |
| Plane | Visa & Immigration | Work visas and Golden Visa | /services/visa-immigration | BHD 250 |

**Current Service:** "/services/moa"

---

## Section 12: FAQ Section (ServiceFAQ - Shared)
**Component Type:** Uses shared ServiceFAQ component

### FAQ Content (14 Questions)

**Q1:** What is a Memorandum of Association in Bahrain?
**A1:** The Memorandum of Association (MOA) is the foundational legal document for every Bahrain company. It establishes your company's legal identity, ownership structure, business objectives, and capital. Required under Commercial Companies Law No. 21 of 2001, the MOA must be notarized and submitted to MOIC during company registration.

**Q2:** What's the difference between MOA and Articles of Association?
**A2:** In Bahrain, these terms are often used interchangeably. The MOA defines the company's external relationship with third parties (name, objectives, capital), while Articles of Association typically refer to internal governance rules. For most entities, Bahrain combines both into a single Memorandum of Association document.

**Q3:** What are the mandatory clauses in a Bahrain MOA?
**A3:** Every MOA must include five mandatory clauses: (1) Company name in Arabic and English, (2) Registered office address, (3) Business objectives and activities, (4) Capital amount and distribution, (5) Shareholder names and details. WLLs require additional Article 15 clauses for management and profit distribution.

**Q4:** How long does MOA drafting take?
**A4:** Standard MOA drafting takes 24-48 hours with Keylink. Simple SPC Memoranda can be completed in 24 hours. Complex WLL or Holding Company MOAs with multiple shareholders and special clauses typically require 48-72 hours for thorough drafting and compliance review.

**Q5:** Can I draft my own MOA?
**A5:** While technically possible, self-drafted MOAs frequently face MOIC rejection due to missing clauses, incorrect legal terminology, or non-compliance with Article 15 requirements. Professional drafting ensures first-time approval and prevents costly amendments later.

**Q6:** What is MOA notarization?
**A6:** Notarization is the legal authentication of your MOA by a licensed Bahrain notary public. All shareholders (or their POA representatives) must sign before the notary, who then seals and attests the document. Notarization is mandatory before MOIC submission.

**Q7:** How much does MOA notarization cost?
**A7:** Government notarization fees range from BHD 10-50 depending on document complexity and capital amount. Professional coordination fees are quoted separately. Keylink offers 48-hour notarization guarantee with express same-day options available.

**Q8:** Can foreigners sign MOA remotely?
**A8:** Yes, foreign shareholders can authorize a local representative through a Power of Attorney (POA). The POA must be notarized and attested in the shareholder's home country, then legalized for use in Bahrain. Keylink coordinates this entire process remotely.

**Q9:** What is MOA attestation?
**A9:** MOA attestation is the process of authenticating your MOA for use in foreign countries. It involves: (1) Notarization in Bahrain, (2) MOFA (Ministry of Foreign Affairs) attestation, (3) Embassy/consulate legalization of the destination country, or Apostille for Hague Convention countries.

**Q10:** How do I amend my existing MOA?
**A10:** MOA amendments require a board resolution, updated MOA draft reflecting changes, notarization of the amended document, and submission through Sijilat 3.0. Common amendments include activity changes, shareholder updates, capital adjustments, and address changes. Processing takes 2-5 business days.

**Q11:** What happens if my MOA has errors?
**A11:** MOA errors create serious problems: MOIC rejection during registration, bank account complications, visa processing delays, and potential contract disputes. Correcting errors requires a formal amendment process with government fees and notarization costs. Professional drafting prevents these issues.

**Q12:** Is MOA required for all company types?
**A12:** Yes, all Bahrain company types require a Memorandum of Association: SPC (Single Person Company), WLL (Limited Liability Company), Branch Offices, and Holding Companies. Each has specific MOA requirements based on the Commercial Companies Law.

**Q13:** What's Article 15 and why does it matter?
**A13:** Article 15 of the Commercial Companies Law specifies additional mandatory clauses for WLL Memoranda. These include: profit/loss distribution percentages, management appointment procedures, share transfer restrictions, and partner meeting rules. Non-compliance results in MOIC rejection.

**Q14:** How long is an MOA valid?
**A14:** The MOA remains valid as long as your company is active. There's no expiration or renewal requirement. However, you must amend the MOA whenever material changes occur (shareholders, capital, activities, address) to maintain compliance with your Commercial Registration.

---

## Section 13: Final CTA (ServiceCTA - Shared)
**Component Type:** Uses shared ServiceCTA component

### Configuration

**Badge:** "Get Started Today"
**Title:** "Ready to Draft Your Memorandum of Association?"
**Subtitle:** "Expert MOA drafting with 100% MOIC approval rate. Free consultation, no obligations."

**Primary CTA:**
- Text: "Book Free Consultation"
- Href: "/contact"

**Secondary CTA:**
- Text: "Call Us Now"
- Href: "tel:+97317000000"

**Features:**
- "100% Approval Rate"
- "48-Hour Notarization"
- "Full Legal Compliance"

---

## Files to Create

### New Files

| File Path | Description |
|-----------|-------------|
| `src/pages/services/MOA.tsx` | Main page component with SEO meta tags |
| `src/components/services/moa/MOAHero.tsx` | Hero section |
| `src/components/services/moa/MOATrustBar.tsx` | Trust metrics bar |
| `src/components/services/moa/MOACostCalculator.tsx` | Interactive cost calculator |
| `src/components/services/moa/WhatIsMOA.tsx` | Service explainer using shared component |
| `src/components/services/moa/MOATypesComparison.tsx` | Entity type comparison cards |
| `src/components/services/moa/MOAProcess.tsx` | Process timeline accordion |
| `src/components/services/moa/MOARequirements.tsx` | Tabbed requirements checklist |
| `src/components/services/moa/MOAGovernmentFees.tsx` | Fee transparency table |
| `src/components/services/moa/MOATestimonials.tsx` | Client testimonials |
| `src/lib/schema/moaSchema.ts` | JSON-LD structured data |

### Files to Modify

| File Path | Change |
|-----------|--------|
| `src/App.tsx` | Add route: `/services/moa` → MOA component |

---

## Technical Specifications

### SEO Meta Tags (MOA.tsx)
```
Title: "Memorandum of Association Bahrain - MOA Drafting & Notarization | Keylink Corp"
Description: "Professional MOA drafting, notarization, and attestation services in Bahrain. 48-hour turnaround, 100% MOIC approval. Commercial Companies Law compliant. Free consultation."
Canonical: "https://keylinkcorp.com/services/moa"
```

### JSON-LD Schema (moaSchema.ts)
- Service schema for MOA services
- FAQPage schema for 14 questions
- LocalBusiness schema for Keylink Corp

### Component Patterns
- All components follow existing animation patterns (Framer Motion staggerContainer/staggerItem)
- Use `useRef` + `useInView` for scroll-triggered animations
- Background patterns follow design system (dot grids, ellipse masks)
- Form validation uses Zod schema
- Responsive grid layouts (3-column desktop, 2-column tablet, 1-column mobile)

---

## Word Count Estimate

| Section | Words |
|---------|-------|
| Hero | 80 |
| Trust Bar | 20 |
| Calculator UI | 100 |
| What Is MOA | 350 |
| Types Comparison | 300 |
| Process Timeline | 250 |
| Requirements | 150 |
| Government Fees | 100 |
| Why Choose | 120 |
| Testimonials | 150 |
| Related Services | 60 |
| FAQ | 900 |
| CTA | 50 |
| **Total** | **~2,630 words** |

This meets the target range of 2,200-2,600 words for a Focused Expert Page.
