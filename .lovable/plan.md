
Goal
- Redesign the “About” section on the landing pages to be more visual, enhanced, and clearly structured in a premium two-column layout.
- Ensure the “Why Choose Us” content (5 points) is visible on the Ads route as well (it currently appears only on `/lp/company-formation-consultancy-modern`, not on `/lp/company-formation-consultancy-modern-ads`).

What’s happening now (why you’re not seeing it)
- In `CompanyFormationConsultancyLandingModern.tsx` the “Why Choose Us” block was added inside the About card (your diff confirms this).
- In `CompanyFormationConsultancyLandingModernAds.tsx`, the About section is still the older version and does not include the “Why Choose Us” block, so if you’re viewing the Ads route you won’t see the update.

Scope (based on your selections)
- Update BOTH routes:
  - `/lp/company-formation-consultancy-modern`
  - `/lp/company-formation-consultancy-modern-ads`
- Use the “Cards grid” visual style for “Why Choose Us”.

Design approach (keep same Minimal Premium system)
We will keep:
- Existing two-column section structure (left content/right image at `lg:grid-cols-2`).
- Existing tokens: `lp-card`, `lp-card-flat`, `border-border/40`, subtle shadows, pill buttons (`lp-cta-outline`).
We will improve:
- Visual hierarchy inside the content column.
- Convert the plain bullet list into a scannable card grid with icons and short microcopy.

Proposed About section layout (two-column)
1) Left column (content)
- Header:
  - Badge: “About”
  - Title: “About Our Business Setup Consultancy”
- Intro block (keep copy but improve layout):
  - A short lead paragraph (same meaning, slightly tightened).
- Trust/Transparency note (more visual, not just another paragraph):
  - A compact “disclaimer” callout card with an icon (e.g., `ShieldCheck` or `Info`) and the line:
    - “We are not affiliated with any government authority and we do not issue Commercial Registration (CR).”
- “Why Choose Us” as a cards grid (main visual improvement):
  - Title row: “Why Choose Us”
  - Grid: `grid gap-3 sm:grid-cols-2` (5 cards; last card spans full width on sm if needed)
  - Each card uses:
    - `lp-card-flat` (or `lp-card` with tighter padding) + `bg-muted/20` for subtle differentiation
    - icon in a small rounded square: `bg-accent/10 text-accent`
    - title + short line of microcopy
  - Cards content (exact items you provided):
    1. Fast turnaround — mention realistic timeframe (3–7 business days once docs are ready; timeline varies by activity/approvals)
    2. Local expertise — Bahrain regulations/process know-how
    3. Dedicated case manager — single point of contact
    4. 100% paperwork handled — checklists + requirements + submission flow coordination
    5. English + Arabic support — clear bilingual communication
- CTA row:
  - Keep “Back to calculator” button (pill outline) as-is.

2) Right column (image)
- Keep the existing `lp-card` framed image using `EditorialImage`.
- Optional enhancement (still minimal/premium, no clutter):
  - Add 1–2 small “overlay chips” inside the image frame (absolute positioned) like:
    - “English + Arabic”
    - “Checklist-driven”
  - Only if it doesn’t feel busy; we’ll keep it subtle.

Implementation strategy (to avoid duplication bugs)
Option A (recommended): Extract a shared component used by both pages
- Create a reusable component, e.g.:
  - `src/components/landing/AboutConsultancySection.tsx`
- It will render only the inner About content block (not the outer page).
- Then both:
  - `CompanyFormationConsultancyLandingModern.tsx`
  - `CompanyFormationConsultancyLandingModernAds.tsx`
  will import and render the same About section.
Benefits:
- Ensures both routes stay in sync going forward.
- Prevents “it updated here but not there” issues.

Option B: Duplicate the updated About markup into both page files
- Faster, but more likely to drift over time.
Given you’re creating variants/routes, Option A is safer.

Files to change
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - Replace the current About card content with the enhanced layout (disclaimer callout + cards grid).
- `src/pages/landing/CompanyFormationConsultancyLandingModernAds.tsx`
  - Apply the same enhanced About layout (this is the route where you likely “still don’t see it”).
- (If we choose Option A) Add:
  - `src/components/landing/AboutConsultancySection.tsx`
  - Update both pages to use it.

UI details (Tailwind classes guideline)
- Cards grid:
  - Container: `mt-6 grid gap-3 sm:grid-cols-2`
  - Card: `lp-card-flat bg-muted/20 p-4 sm:p-5`
  - Icon wrapper: `h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center`
  - Title: `text-sm font-semibold text-foreground`
  - Body: `text-sm text-muted-foreground leading-relaxed`
- Disclaimer callout:
  - `mt-5 rounded-2xl border border-border/40 bg-muted/20 p-4 flex gap-3`
  - Icon: `h-5 w-5 text-accent mt-0.5`
  - Text: `text-sm text-muted-foreground`

QA checklist (what you’ll test after implementation)
- On BOTH routes:
  - `/lp/company-formation-consultancy-modern`
  - `/lp/company-formation-consultancy-modern-ads`
- Confirm:
  - About section renders as a clean two-column layout at desktop.
  - “Why Choose Us” appears as a 5-card grid with icons (not a plain bullet list).
  - Mobile layout stacks cleanly (no cramped cards, consistent spacing).
  - “Back to calculator” still scrolls correctly.
  - No visual regressions to the image frame.

Notes / constraints
- We’ll keep your existing Minimal Premium styling and pill buttons.
- We will not add any “licensed” claims unless you explicitly confirm the exact licensing wording you want (to avoid compliance issues). We can keep it as “independent consultancy” and “local expertise” which is safe.