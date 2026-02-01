
# Phase 4: Refined Landing Page Outline
## Certificate Attestation in Bahrain

---

## Overview

This plan details the complete component architecture and content structure for the Certificate Attestation landing page, following the established DocumentClearance pattern with attestation-specific customizations.

---

## File Structure

```text
src/
├── pages/services/
│   └── CertificateAttestation.tsx          # Main page component
├── components/services/certificate-attestation/
│   ├── CertificateAttestationHero.tsx
│   ├── CertificateAttestationAudienceClarity.tsx
│   ├── CertificateAttestationProblemAgitation.tsx
│   ├── CertificateAttestationWhatIs.tsx
│   ├── CertificateAttestationServicesGrid.tsx
│   ├── CertificateAttestationEmbassyCoverage.tsx
│   ├── CertificateAttestationProcessTimeline.tsx
│   ├── CertificateAttestationDIYComparison.tsx
│   ├── CertificateAttestationCountryPricing.tsx
│   ├── CertificateAttestationDocumentChecklist.tsx
│   ├── CertificateAttestationGuarantees.tsx
│   └── certificateAttestationFAQData.ts
└── lib/schema/
    └── certificateAttestationSchema.ts      # JSON-LD structured data
```

---

## Section-by-Section Breakdown

### Section 1: Hero
**Component:** `CertificateAttestationHero.tsx`
**Word Count:** ~150 words

| Element | Content |
|---------|---------|
| Badge | "Certificate Attestation in Bahrain" |
| H1 | "One Submission. 99.5% First-Time Approval. Zero Confusion." |
| Subheadline | "MOFA, Embassy, and Apostille attestation for educational, commercial, and personal documents. 15+ embassies covered. From BHD 15." |
| Feature Pills | Same-Day Available, 15+ Embassies, 99.5% Approval |
| Price Anchor | "Services from BHD 15" |
| Primary CTA | WhatsApp: "Get Free Consultation" |
| Secondary CTA | "View Pricing" (anchor to pricing section) |

**Keywords Targeted:** certificate attestation in bahrain, document attestation bahrain

---

### Section 2: Trust Bar
**Component:** Shared `ServiceTrustBar`
**Word Count:** ~30 words

| Stat | Value | Label |
|------|-------|-------|
| FileCheck | 3,000+ | Documents Processed |
| Building2 | 15+ | Embassies Covered |
| Award | 99.5% | First-Time Approval |
| Clock | 8+ | Years Experience |

---

### Section 3: Audience Clarity
**Component:** `CertificateAttestationAudienceClarity.tsx`
**Word Count:** ~180 words

| Audience Segment | Description |
|------------------|-------------|
| HR Departments | "Need to process employee documents for overseas assignments quickly and correctly" |
| Job Seekers | "Require degree attestation for UAE, Saudi, or GCC employment" |
| Families Relocating | "Need birth certificates, marriage certificates for family visa applications" |
| Business Owners | "Commercial documents requiring legalization for international contracts" |
| Students | "Educational certificates for university admission abroad" |

---

### Section 4: Problem Agitation
**Component:** `CertificateAttestationProblemAgitation.tsx`
**Word Count:** ~200 words

| Pain Stat | Value | Label |
|-----------|-------|-------|
| Clock | 3-5 | Offices to visit per document |
| AlertTriangle | 40%+ | Rejection rate for DIY submissions |
| Banknote | BHD 200+ | Lost to re-submissions and delays |
| Building2 | 2-4 Weeks | Average DIY timeline |

**Empathy Quote:** "If you've had documents returned because of 'incorrect attestation chain' or 'missing authentication'... you know exactly what we're talking about."

**Keywords Targeted:** document rejection, complex paperwork, embassy requirements

---

### Section 5: What Is Certificate Attestation
**Component:** `CertificateAttestationWhatIs.tsx`
**Word Count:** ~250 words

**Educational Content:**
- Definition of attestation vs. apostille
- The attestation chain explained (Notary → MOFA → Embassy)
- When each type is required
- Hague Convention context for Bahrain

**Visual:** Simple 3-step attestation chain diagram

**Keywords Targeted:** MOFA attestation bahrain, difference between apostille and attestation

---

### Section 6: Services Grid (Service Pillars)
**Component:** `CertificateAttestationServicesGrid.tsx`
**Word Count:** ~220 words

| Service | Icon | Description |
|---------|------|-------------|
| MOFA Attestation | Building2 | Ministry of Foreign Affairs authentication for all document types |
| Embassy Legalization | Flag | Country-specific legalization for 15+ embassies |
| Apostille Services | Stamp | Hague Convention apostille for applicable countries |
| Notarization | FileCheck | Initial notarization and authentication |
| Educational Certificates | GraduationCap | Degree, diploma, transcript attestation |
| Commercial Documents | Briefcase | Company documents, contracts, POA |
| Personal Documents | User | Birth, marriage, police clearance |

---

### Section 7: Embassy Coverage (Unique Section)
**Component:** `CertificateAttestationEmbassyCoverage.tsx`
**Word Count:** ~180 words

**Visual:** Embassy flags/logos grid with hover states

| Embassy | Flag | Processing Time |
|---------|------|-----------------|
| UAE | AE | 2-3 days |
| Saudi Arabia | SA | 3-5 days |
| Kuwait | KW | 2-3 days |
| Qatar | QA | 2-3 days |
| Oman | OM | 2-3 days |
| India | IN | 3-5 days |
| Pakistan | PK | 3-5 days |
| Philippines | PH | 2-3 days |
| Egypt | EG | 3-5 days |

**Keywords Targeted:** UAE embassy attestation bahrain, Saudi embassy legalization

---

### Section 8: Process Timeline
**Component:** `CertificateAttestationProcessTimeline.tsx`
**Word Count:** ~200 words

| Step | Icon | Title | Timeline |
|------|------|-------|----------|
| 01 | MessageSquare | Free Consultation | Instant |
| 02 | FileText | Document Review | Same Day |
| 03 | Stamp | MOFA Attestation | 1-2 Days |
| 04 | Flag | Embassy Legalization | 2-5 Days |
| 05 | Package | Delivery | Same Day |

---

### Section 9: DIY vs Professional Comparison
**Component:** `CertificateAttestationDIYComparison.tsx`
**Word Count:** ~200 words

| Factor | DIY | With Keylink |
|--------|-----|--------------|
| Time Investment | 3-5 office visits | 0 visits |
| Success Rate | ~60% first attempt | 99.5% first attempt |
| Processing Time | 2-4 weeks | 3-5 days standard |
| Hidden Costs | Re-submissions, travel, time off | Fixed quote upfront |
| Arabic Forms | Your responsibility | We handle everything |
| Embassy Protocols | Learn each embassy's rules | 8+ years expertise |
| Document Safety | You carry originals | Secure handling & tracking |

---

### Section 10: Country-Specific Pricing Table (Unique Section)
**Component:** `CertificateAttestationCountryPricing.tsx`
**Word Count:** ~150 words

| Service | MOFA | Embassy | Full Package |
|---------|------|---------|--------------|
| UAE | BHD 15 | BHD 25 | BHD 75 |
| Saudi Arabia | BHD 15 | BHD 35 | BHD 85 |
| India | BHD 15 | BHD 25 | BHD 75 |
| Pakistan | BHD 15 | BHD 25 | BHD 75 |
| Other GCC | BHD 15 | BHD 25 | BHD 75 |

**Note:** "Government fees included. Express service available for additional fee."

---

### Section 11: Document Checklist (Unique Section)
**Component:** `CertificateAttestationDocumentChecklist.tsx`
**Word Count:** ~180 words

**Educational Certificates:**
- Original certificate
- Copy of passport
- Authorization letter (if applicable)

**Commercial Documents:**
- Original document
- CR copy
- Company authorization

**Personal Documents:**
- Original certificate
- Passport copies
- Supporting documents (varies)

**CTA:** "Not sure what you need? Get a free document review."

---

### Section 12: Guarantees Section (Unique Section)
**Component:** `CertificateAttestationGuarantees.tsx`
**Word Count:** ~120 words

| Guarantee | Description |
|-----------|-------------|
| Free Re-submission | If rejected due to our error, we re-process at no charge |
| Timeline Guarantee | Service fee waived if we miss committed timeline |
| Document Safety | Your originals are handled with bank-level security |

---

### Section 13: Related Services
**Component:** Shared `RelatedServicesGrid`
**Word Count:** ~80 words

| Service | Link |
|---------|------|
| PRO Services | /services/pro-services |
| Visa & Immigration | /services/visa-immigration |
| Document Clearance | /services/document-clearance |
| Company Formation | /services/company-formation |

---

### Section 14: FAQ Section
**Component:** Shared `ServiceFAQ` with `certificateAttestationFAQData.ts`
**Word Count:** ~400 words (10-12 questions)

**FAQ Questions (Targeting Long-Tail Keywords):**

1. How much does certificate attestation cost in Bahrain?
2. How long does MOFA attestation take?
3. What is the difference between attestation and apostille?
4. Do I need attestation for UAE work visa?
5. Which documents need embassy legalization?
6. Can I get same-day attestation in Bahrain?
7. What happens if my document is rejected?
8. Do you provide document pickup and delivery?
9. Can you attest documents for multiple countries?
10. Is attestation required for Saudi family visa?
11. How do I verify my attestation is genuine?
12. What is the attestation chain for educational certificates?

---

### Section 15: Final CTA
**Component:** Shared `ServiceCTA`
**Word Count:** ~80 words

| Element | Content |
|---------|---------|
| Badge | "Skip the Confusion" |
| Title | "Get Your Documents Attested Right — The First Time" |
| Subtitle | "8+ years of expertise. 99.5% first-submission approval. Free consultation." |
| Primary CTA | "WhatsApp Us Now" |
| Secondary CTA | "Request a Quote" |
| Features | 15+ Embassies, Same-Day Available, Free Re-submission |

---

## Technical Implementation

### JSON-LD Schema (`certificateAttestationSchema.ts`)

```typescript
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Certificate Attestation Services in Bahrain",
      "description": "Professional certificate attestation, MOFA authentication, and embassy legalization services in Bahrain...",
      "areaServed": { "@type": "Country", "name": "Bahrain" },
      "serviceType": "Certificate Attestation",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "15",
        "highPrice": "85",
        "priceCurrency": "BHD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [/* 12 FAQ items */]
    },
    {
      "@type": "LocalBusiness",
      "name": "Keylink Corp",
      "address": { /* Manama, Bahrain */ }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [/* Home > Services > Certificate Attestation */]
    }
  ]
}
```

### SEO Meta Tags

```html
<title>Certificate Attestation Bahrain | MOFA, Embassy, Apostille | Keylink</title>
<meta name="description" content="Professional certificate attestation in Bahrain. MOFA, Embassy legalization, Apostille. 15+ embassies covered. 99.5% first-time approval. From BHD 15. Free consultation.">
```

---

## Word Count Summary

| Section | Words |
|---------|-------|
| Hero | 150 |
| Trust Bar | 30 |
| Audience Clarity | 180 |
| Problem Agitation | 200 |
| What Is Attestation | 250 |
| Services Grid | 220 |
| Embassy Coverage | 180 |
| Process Timeline | 200 |
| DIY Comparison | 200 |
| Country Pricing | 150 |
| Document Checklist | 180 |
| Guarantees | 120 |
| Related Services | 80 |
| FAQ Section | 400 |
| Final CTA | 80 |
| **TOTAL** | **~2,620 words** |

---

## Competitive Differentiators Built Into Page

1. **Embassy-by-Embassy Pricing** — Competitors lack transparent country-specific pricing
2. **99.5% Approval Stat** — Strong authority signal with specific metric
3. **Document Checklist Section** — Reduces pre-purchase anxiety
4. **Triple Guarantee** — Addresses "What if it fails?" objection
5. **Educational "What Is" Section** — Captures informational intent searches
6. **FAQ Schema** — Targets 12 long-tail keyword opportunities

---

## Implementation Order

1. Create `certificateAttestationSchema.ts`
2. Create `certificateAttestationFAQData.ts`
3. Create attestation-specific components (Hero → Guarantees)
4. Create main `CertificateAttestation.tsx` page
5. Verify route already registered in `App.tsx`

---

## Next Steps

Upon approval, I will proceed to **Phase 5: Implementation** where I'll build all components following this refined outline and the established codebase patterns.
