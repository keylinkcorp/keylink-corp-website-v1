
## What I understood (“missing section”)
You want to add **two missing sections** to **/lp/company-formation**, placed **above the calculator**:
1) A dedicated **Pricing** section (what affects cost + typical ranges + CTA to calculator/booking)
2) A **Segment switcher** (“Choose your situation”: Foreign / Local / Branch / Solo) that improves message match for Google Search traffic and routes people to the right next step.

Important constraint already agreed: **No backend (no submit)**, so these sections will focus on **clarity + click-to-action (scroll to calculator / booking, WhatsApp/call)** rather than collecting leads.

---

## Proposed UX changes (what the user will see)

### A) New “Choose your situation” section (Segment switcher)
**Placement:** Immediately after the hero + trust bar, before the calculator.

**Layout:**
- 4 selectable cards or tabs:
  - Foreign founder (remote setup)
  - Bahrain resident
  - Branch / expansion
  - Solo / freelancer
- When a segment is selected, show:
  - 2–3 bullets that match that segment’s intent (“ownership eligibility”, “visas”, “banking guidance”, “timeline”, etc.)
  - A primary button: **“Calculate estimate”** (smooth scroll to `#start`)
  - A secondary button: **“Book free call”** (smooth scroll to `#book`)
  - Optional tertiary: WhatsApp / Call (tracked later if desired)

**Behavior:**
- Segment selection persists while on the page (React state).
- Optional: read `?intent=` or `?utm_term=` and preselect a segment (simple keyword mapping) to improve ad→LP relevance.

### B) New “Pricing (what affects cost)” section
**Placement:** Directly below segment switcher (still above calculator).

**Content structure:**
- Headline aligned to search intent:
  - “Pricing: what affects your company formation cost”
- A short “price-first” explanation:
  - “Costs vary mainly by activity, visas, office, and shareholder profile. Use the calculator for a fast estimate.”
- 4–6 “cost drivers” as bullets/chips:
  - Business activities (regulated vs standard)
  - Company type (WLL / SPC / Branch)
  - Visa requirements
  - Office type
  - Shareholders / nationality (eligibility/approvals)
  - Add-ons (PRO, accounting, bank support)
- “Typical ranges” box:
  - Keep conservative, non-committal wording (since exact fees depend on inputs)
  - Example style: “Most setups fall within a range after adding office + visas. Confirm exact costs on the free call.”
- CTAs:
  - Primary: “Calculate estimate” → scroll to `#start`
  - Secondary: “Book free call” → scroll to `#book`

**Note:** This section is intentionally “explicit pricing context” even though the calculator exists—this improves message match for search keywords like “company formation cost Bahrain”.

---

## Implementation approach (code-level)

### 1) Add two new components (keeps `CompanyFormationLanding.tsx` clean)
Create:
- `src/pages/landing/company-formation/CompanyFormationSegmentSwitcher.tsx`
- `src/pages/landing/company-formation/CompanyFormationPricingSection.tsx`

Both will:
- Use existing LP styling conventions: `section-spacing-sm`, `section-badge`, `lp-h2`, `lp-card`, `SectionBackgroundOverlay` where appropriate.
- Use existing `Button` component.
- Use smooth-scroll helper already in `CompanyFormationLanding.tsx` (`scrollToId`).
  - Either pass `onScrollToCalculator` / `onScrollToBooking` callbacks into components, or export `scrollToId` to a tiny shared helper.

### 2) Wire them into `src/pages/landing/CompanyFormationLanding.tsx`
Insert them **after**:
- `<CompanyFormationHeroMontage ... />`
- `<CompanyFormationTrustBar />`

And **before** the calculator `<section aria-label="Company formation cost calculator">...`

### 3) Optional (recommended): preselect segment from URL
- In `CompanyFormationLanding.tsx`, read `window.location.search` once.
- If `intent` exists (or `utm_term` contains keywords), set default selected segment.
- Keep mapping simple and safe (no brittle logic).

---

## Content defaults (copy we’ll ship with)
### Segment bullets (examples)
- Foreign founder: “100% ownership eligibility check”, “remote-friendly process”, “visa + banking guidance”
- Local founder: “fast setup path”, “clear checklist”, “transparent pricing”
- Branch: “parent document requirements”, “typical timelines”, “local compliance steps”
- Solo: “SPC-friendly path”, “simple structure”, “low-friction start”

### Pricing “what affects cost” bullets (examples)
- “Activity (some require extra approvals)”
- “Company type (WLL / SPC / Branch)”
- “Office type”
- “Visas required”
- “Shareholder profile & eligibility”
- “Add-ons (PRO, accounting, bank support)”

(We’ll keep language aligned with your hero: “transparent costs”, “3–7 business days (typical)”, “MOIC/LMRA guidance”.)

---

## Acceptance criteria (what you can verify in preview)
1) On **/lp/company-formation**, a **Segment switcher** appears above the calculator.
2) Selecting each segment updates the bullets and the CTA buttons.
3) A dedicated **Pricing** section appears above the calculator with “what affects cost” and “typical ranges” messaging.
4) Buttons smoothly scroll to:
   - `#start` (calculator)
   - `#book` (booking section, when visible)
5) No layout regressions:
   - Mobile: cards stack cleanly, no overflow
   - Desktop: spacing matches existing LP sections

---

## Small but important note I found while reviewing the code
Your footers link to **`/privacy-policy`**, but there is currently **no route/page** for it in `src/App.tsx` and no page component found in `src/pages/`.
If you still want the “Create /privacy page” item from earlier, I can include that in the implementation pass too (it’s separate from the “missing sections” but currently affects compliance/trust for ads).
