
Goal interpretation (based on your message)
- You want a NEW landing page route that:
  1) Starts as an exact copy of the ORIGINAL page (/company-formation-consultancy-bahrain) — same hero montage images and same information/copy/sections
  2) Then we redesign it into a more modern “Google Ads company formation” style (clean corporate trust)
- You also want to ensure we do NOT change any previous versions:
  - V1: /company-formation-consultancy-bahrain must remain unchanged
  - V2: /lp/company-formation-consultancy-v2 must remain unchanged
- New route requested: /lp/company-formation-consultancy-modern
- Must keep (functionality-wise): cost calculator, Calendly booking, logos ticker, FAQs content

Important clarification of a conflict
- You selected “Redesign V2 in place”, but you also said “make sure not change before version anything”.
- To satisfy “do not change previous versions”, we will NOT edit V1 or V2. Instead we will:
  - Create a NEW page at /lp/company-formation-consultancy-modern
  - First clone V1 exactly into it
  - Then apply the full redesign only to this new page

What I inspected (current structure)
- V1 page: src/pages/landing/CompanyFormationConsultancyLanding.tsx
  - Uses <LandingHeader /> and <LandingFooter />
  - Uses <CompanyFormationHeroMontage /> with the V1 copy and montage imagery
  - Has <CompanyLogosTicker />, <ConsultancyCostCalculator />, <CalendlyBooking />, SplitSection blocks, FAQ JSON-LD, and “noindex, follow”.
- V2 page: src/pages/landing/CompanyFormationConsultancyLandingV2.tsx
  - Uses custom minimal header/footer (ConsultancyV2Header/ConsultancyV2Footer)
  - Uses the same <CompanyFormationHeroMontage /> but different copy and flow
- Routing: src/App.tsx currently has
  - /company-formation-consultancy-bahrain -> V1 component
  - /lp/company-formation-consultancy-v2 -> V2 component

Design target (Clean corporate trust, modern Google Ads LP)
We’ll keep the same content and core conversion flow elements, but modernize:
- Header: minimal, sticky, high-clarity CTA(s)
- Hero: more “corporate LP” layout (strong hierarchy, concise trust bullets, crisp CTA, faster path to calculator)
- Section rhythm: cleaner spacing, stronger contrast between sections, simplified cards, less “decorative”, more “conversion”
- Trust: tighter social proof and reassurance microcopy, compliance disclaimer placement
- Mobile: improved “calculator-first” behavior with sticky CTA and scroll anchors

Implementation approach (high level)
A) Create a brand-new “Modern” landing page file
- New page component: src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
- Initially: copy the full V1 file contents (so it is literally the same page output) and change only:
  - Component name
  - Canonical + data-lp tags (so metadata does not conflict)
  - Any IDs needed for calculator scroll targets (optional)
- This gives you a safe baseline “exact same like V1”.

B) Add the new route (without touching existing routes)
- Update src/App.tsx to add:
  - /lp/company-formation-consultancy-modern -> <CompanyFormationConsultancyLandingModern />

C) Redesign only the Modern page (not V1/V2)
We’ll refactor the Modern page in-place into the new design while preserving required functionality:
- Keep: ConsultancyCostCalculator (same logic), CalendlyBooking embed, CompanyLogosTicker, FAQ accordion + FAQ JSON-LD (same questions/answers).
- Keep: “no pricing tables / no hardcoded BHD pricing” (calculator is the only place costs appear).
- Keep: “no inline contact forms” (lead flow stays calculator -> free consultation + Calendly booking).
- Redesign areas:
  1) Minimal header:
     - Create new custom header component specifically for Modern:
       - src/components/landing/modern/ConsultancyModernHeader.tsx
       - Similar to ConsultancyV2Header, but styled more corporate:
         - Logo left
         - Right: “Call” + “Start calculator”
         - Optional: 1–2 anchor links (Calculator, Book) if you approve later (not required).
  2) Hero redesign:
     - Keep using CompanyFormationHeroMontage images to match V1 assets initially, but adjust:
       - Layout density (reduce vertical padding, bring CTA above the fold)
       - Stronger “trust-first” proof line placement
       - Primary CTA scrolls to calculator section (calculator-first behavior), while keeping the V1 copy intact unless you request copy changes later.
  3) “Above calculator” trust strip (modern):
     - Add a compact trust bar (not a big heading):
       - “Independent consultancy” + “Typical approvals guidance” + “Checklist & sequencing”
     - This can be a simple 3–4 item row of icon+text (no new claims).
  4) Calculator section redesign:
     - Keep the calculator component unchanged, but wrap it in a more modern shell:
       - Clear left-side “What you’ll get” and “Takes 2 minutes”
       - Right-side: calculator itself
       - Add scroll-mt offsets for sticky header
  5) Section components modernization:
     - V1 uses SplitSection + EditorialImage patterns. We can either:
       - Keep SplitSection but restyle it (preferred for speed), or
       - Create a new “ModernSplitSection” variant if the current one can’t achieve the corporate look without affecting other pages.
     - Key rule: any component styling changes must be scoped so V1 and V2 are not visually affected. We’ll avoid editing shared CSS classes that those pages rely on unless we can do it via new class names.
  6) FAQs (keep content):
     - Keep same FAQ questions/answers but redesign the accordion container and spacing.
  7) Footer (custom):
     - Create src/components/landing/modern/ConsultancyModernFooter.tsx
     - Corporate minimal footer with disclaimer + copyright + legal links.

D) Metadata safety
- Ensure the Modern page uses unique meta identifiers:
  - robots meta tag: data-lp="company-formation-consultancy-modern"
  - canonical: https://keylinkcorp.com/lp/company-formation-consultancy-modern (or whatever you want)
  - Keep noindex, follow until you decide to publish/promote it.
- Keep FAQ JSON-LD; give it a unique data-lp attribute.

Step-by-step changes I will make (once you approve)
1) Create new page component for Modern by duplicating V1 exactly:
   - src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
   - Confirm it renders identically to V1 (images + information + sections).
2) Add the new route in src/App.tsx:
   - /lp/company-formation-consultancy-modern
3) Create Modern-specific header/footer components:
   - src/components/landing/modern/ConsultancyModernHeader.tsx
   - src/components/landing/modern/ConsultancyModernFooter.tsx
4) Switch Modern page to use the custom header/footer (only on Modern).
5) Apply the “clean corporate trust” redesign on Modern page only:
   - Hero spacing/hierarchy adjustments
   - Trust strip
   - Calculator section shell redesign (calculator component unchanged)
   - Process / comparison / booking / FAQ sections updated to a more modern corporate layout
6) QA pass:
   - Ensure V1 and V2 routes look exactly the same as before (no diffs)
   - Verify Modern route:
     - Sticky header works
     - “Start calculator” scrolls correctly (desktop + mobile)
     - Calculator completes and navigates to /free-consultation as before
     - Calendly embed loads
     - Logos ticker scrolls and is monochrome/not clickable
     - FAQ accordion works and JSON-LD is present

What I need from you (critical decisions)
- Confirm: We will NOT “redesign V2 in place” because that would change an existing version. We will redesign only the new Modern route.
- Confirm: Should the Modern page be calculator-first (primary CTA scrolls to calculator) while keeping V1 copy, or do you want copy rewritten too? (We can keep copy identical for now, then iterate copy later.)

Technical notes (to ensure “no changes to previous versions”)
- We will avoid modifying shared CSS classes (like .lp-card, .cfc-typography, etc.) in a way that could affect V1/V2. If changes are needed, we’ll introduce new class names or wrap Modern route in a unique parent class (e.g., “cfc-modern”) and scope styles under it.
- We will not edit CompanyFormationConsultancyLanding.tsx (V1) or CompanyFormationConsultancyLandingV2.tsx (V2).
- The calculator component and logic remains untouched; only placement and surrounding UI changes on the Modern route.

Deliverable
- A new route /lp/company-formation-consultancy-modern:
  - Starts as a perfect clone of V1
  - Then becomes a fully redesigned, modern, corporate-trust Google Ads landing page
  - With V1 and V2 preserved exactly as they are today
