
## Objective
Redesign the full `/lp/company-formation` landing page to look more modern and professional (premium “luxury editorial” aesthetic), while keeping the conversion flow intact:
Hero → embedded Formation Cost Calculator → results/summary → Calendly unlock (no backend lead storage).

---

## What’s already in place (current state)
- `/lp/company-formation` is `src/pages/landing/CompanyFormationLanding.tsx`
- Hero (`CompanyFormationHeroMontage`) already has premium visuals (mesh gradient, floating orb, montage cards).
- Calculator (`FormationCostCalculator`) is embedded right after Hero and currently calls `onSeeResults()` when the user hits “See Results”.
- Calendly is gated by `showBooking` in the landing page, triggered by calculator completion.
- The app already has a design system in `src/index.css`:
  - `section-spacing-sm`, `section-badge`, `card-elevated`, `glass-card-light`, gold/navy palette, mesh gradients.

---

## Core design issues to address
1. **Calculator styling is visually “tool-like” rather than “premium landing”**
   - Heavy “border-2” tiles everywhere, repeated gold borders, and a lead capture form inside results that doesn’t match the “Calculator unlocks booking” funnel.
2. **Landing sections are good but not fully unified**
   - Sections mix “card-elevated” / “glass-card-light” / band backgrounds inconsistently.
3. **Results & booking transition needs a premium handoff**
   - The “Summary” section exists, but we can elevate it into a more modern “quote card” design and make the booking reveal feel intentional.

---

## Redesign approach (high-level)
### A) Unify the page into 3 surface levels (consistent visual system)
- Paper: `bg-background` (main canvas)
- Elevated: `card-elevated` (key content)
- Glass: `glass-card-light` (trust bar, subtle highlights)

### B) Make the calculator feel like a premium “guided estimator”
- Softer borders, fewer hard outlines
- More whitespace, clearer typography hierarchy
- Cleaner selection states (less “gold border everywhere”, more “subtle highlight + small accent”)
- Progress indicator refined to look like a premium wizard

### C) Remove friction: no “Get Detailed Quote” form when embedded on LP
Because the chosen flow is **calculator unlocks booking** and **no lead storage**, the embedded LP experience should not ask for name/email again inside the calculator results panel.
Instead, the results view should:
- show breakdown
- show a strong CTA “Continue to free booking” (scrolls to Calendly)
- optionally show “Prefer WhatsApp/Call” small secondary CTAs (subordinate)

---

## Implementation plan (concrete steps)

### 1) Redesign `FormationCostCalculator` UI for embedded landing use
**File:** `src/components/services/formation/FormationCostCalculator.tsx`

**Add / refine props**
- Introduce a prop to control “results mode” when embedded, for example:
  - `resultsLayout?: "quote" | "leadForm"` (default keeps current behavior)
  - or simpler: `hideLeadCapture?: boolean` automatically true when `embedded` + `onSeeResults` exists

**Embedded “LP mode” behavior**
- When `embedded` is true:
  - Use lighter container styling (keep existing but refine):
    - stronger “premium” shadow, consistent border `border-border/60`
    - add subtle background overlay: `mesh-gradient-gold` at very low opacity or `pattern-grid-lines-light`
- On results:
  - Replace the “Get Your Detailed Quote” form with:
    - a “Next step” card explaining booking
    - a primary button: “Book free consultation” that triggers `onSeeResults` (already triggered on See Results) and scroll hint
    - show trust microcopy: “Free • No obligation • 30 minutes”
- Keep the lead capture form only for the non-embedded / service-page version (so you can still use it elsewhere if needed).

**Visual refinements inside steps**
- Replace `border-2` with `border` for tiles; selected state becomes:
  - `bg-accent/5` + `ring-1 ring-accent/40` + slight shadow
- Adjust tile sizes and spacing:
  - reduce “big tiles grid” density on mobile (1-column for complex tiles, 2-column only for small ones)
- Replace frequent “text-gold” usage with:
  - accent used for key highlights only (price, selected state)
  - primary text stays navy, secondary muted

**Result breakdown redesign**
- Convert list rows to a “receipt style”:
  - label + amount aligned, subtle dividers, negative items green
- Total section becomes premium:
  - larger number, subtle gold radial behind, but restrained.

---

### 2) Update landing page section styling for a cohesive modern layout
**File:** `src/pages/landing/CompanyFormationLanding.tsx`

**Hero / trust / calculator zone**
- Add a smooth transition from hero into calculator:
  - subtle divider band or background overlay behind the calculator area
- Ensure the “Start here” block has consistent header sizing and spacing.

**Summary redesign**
- Turn “Your estimate (quick recap)” into a premium quote card:
  - left: company type + timeline
  - right: estimated total with a subtle accent highlight
  - add a “What happens next” mini timeline (3 bullets)
- Add a “Continue to booking” button inside summary that scrolls to booking (this improves guidance).

**Booking section redesign**
- Keep `CalendlyBooking variant="plain"`
- Add a premium heading + short reassurance row above Calendly:
  - “Free 30 minutes”, “Google Meet”, “No obligation”
- Ensure spacing and card surfaces match the rest of the page.

**Mid-page sections**
- Standardize card treatments:
  - “How it works” steps: unify card style and hover to match calculator tiles
  - “What you get” band: keep but refine internal padding and use consistent grid gaps
  - Testimonials: align image + quote layout, reduce repeated shadows, make it more editorial
  - FAQ: keep accordion but place it in a single premium elevated card with consistent padding

**Final CTA**
- Keep overlay-gold-radial-center, but refine:
  - reduce overlay intensity
  - ensure buttons hierarchy: booking primary, WhatsApp/Call outline

---

### 3) Small header polish (optional but recommended)
**File:** `src/components/landing/LandingHeader.tsx`

- Slightly modernize header:
  - increase logo weight/kerning consistency
  - tighten button sizes and spacing
  - ensure sticky header background blur is consistent with premium style (`bg-background/70` + border)

This is optional; the header already works well.

---

### 4) CSS utility additions (only if needed)
**File:** `src/index.css`

Only add utilities if we need repeated patterns for the new design, such as:
- `lp-panel` (standard premium panel wrapper)
- `lp-divider` (subtle section divider)
- `lp-kpi` (small trust/metric chips)

We already have a strong base system, so the goal is to reuse existing classes and keep additions minimal.

---

## QA checklist (what we will test after implementation)
1. Full funnel works end-to-end:
   - Hero “Get started” → calculator → “See Results” → summary visible → Calendly revealed and scrolls
2. Responsive behavior:
   - calculator tiles don’t overflow on mobile
   - text remains readable, no cramped grids
3. Visual consistency:
   - one coherent card system across the page
   - gold accent used sparingly (premium, not loud)
4. Performance:
   - Calendly widget only loads when revealed (already effectively handled by conditional render)
5. No regression on other pages using `FormationCostCalculator`
   - non-embedded version retains lead-capture behavior (if still desired)

---

## Files expected to change
- `src/components/services/formation/FormationCostCalculator.tsx` (primary redesign + embedded results behavior)
- `src/pages/landing/CompanyFormationLanding.tsx` (section layout polish + summary/booking UI)
- Optional:
  - `src/components/landing/LandingHeader.tsx`
  - `src/index.css` (only minimal new utility classes if needed)

---

## Outcome you should see
- A noticeably more modern, premium-feeling landing page.
- Calculator feels like a guided concierge estimator rather than a generic widget.
- Clear, confident transition from estimate → booking (no extra lead capture friction).
- Consistent “Luxury Editorial” look across Hero, calculator, summary, booking, and supporting sections.
