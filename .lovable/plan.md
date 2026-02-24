
## What we’re improving (based on your answers)
You want **visual polish only** with a **minimal premium** direction, and the **primary CTA stays “Start calculator.”**  
So we’ll keep the current structure/sections, but refine spacing, surfaces, borders, and consistency to make the page feel cleaner and more modern (closer to the “cost calculator image” vibe: calm, editorial, premium).

---

## Quick visual diagnosis of the current page
On `/lp/company-formation-consultancy-modern`, the page already has a strong foundation:
- Centered hero montage + framed layout pattern (max-w 1260, side borders, full-bleed dividers).
- Consistent card primitives: `.lp-card` and `.lp-card-flat` (currently very “flat”).
- Good use of `EditorialImage` overlays to unify imagery.

What makes it feel less “minimal premium” right now:
- Too many visible borders everywhere (stacked borders can feel busy).
- Some sections use different “surface levels” (bg-muted overlays + cards) in a way that adds visual noise.
- Buttons vary (some rounded-full in final CTA, others not).
- Mixed heading scale: hero uses its own sizing while section headings use `.cfc-typography .lp-h2` (big), which can feel slightly uneven.
- Some components still have leftover heavier UI touches (e.g., hover shadow values, border opacities) that don’t match a calmer aesthetic.

---

## Plan (implementation steps)

### 1) Create a calmer “surface system” (minimal premium)
We’ll adjust the landing page visual hierarchy to use 3 consistent surface levels:

- **Base page**: very subtle tint (keep `bg-muted/20`, but slightly reduce perceived contrast).
- **Section panels**: alternate between `bg-background` and a very light `bg-muted/10` (less frequent patterned overlays).
- **Cards**: mostly flat, but with a tiny elevation on hover only (not always).

Concrete changes:
- Update `.lp-card` and `.lp-card-flat` in `src/index.css`:
  - Reduce border strength from `/60` to something like `/40` for less “outlined” feel.
  - Introduce a very subtle shadow for `.lp-card` only (and keep `.lp-card-flat` truly flat).
  - Add a consistent “hover lift” utility used sparingly (especially for clickable cards like Phone/Email).
- Reduce pattern overlay usage or opacity in some sections:
  - Keep `SectionBackgroundOverlay` where it adds value (calculator and final CTA), reduce/disable for sections that already have many card borders (services accordion, testimonials).

Expected result: cleaner sections with fewer competing lines.

---

### 2) Make spacing and rhythm more consistent (the “premium” feeling)
We’ll unify vertical spacing and reduce “tight + busy” areas.

Concrete changes:
- Normalize section paddings:
  - Ensure every major section uses the same `section-spacing-sm` baseline (or adjust the class to be consistent site-wide).
- Tighten headers consistently:
  - In `SplitSection`, adjust default header spacing so badge/title/subtitle spacing matches the hero and calculator section rhythm.
- Reduce redundant “note cards” that repeat within sections (example: those small muted info boxes) or restyle them as a single slim callout style instead of full bordered cards.

---

### 3) Unify CTA styling (calculator is primary)
Right now CTAs are good but not perfectly consistent.

Concrete changes:
- Establish a landing CTA style:
  - Primary button: consistent height (e.g., `h-12`), consistent radius (either rounded-xl or rounded-full, but pick one).
  - Secondary outline: match the same height/radius.
- Apply this consistently to:
  - Hero CTA row
  - Calculator section CTA(s)
  - Mid-section CTA (“Get clarity… Book free consultation”)
  - Final CTA buttons
  - Mobile sticky bar buttons

Since your primary CTA is “Start calculator,” we’ll also:
- Ensure hero primary CTA and sticky nav encourage “Calculator” as the first action.
- Keep “Book consultation” as secondary but still visible.

---

### 4) Make the hero feel more “editorial” and consistent with the cost calculator section
Without changing layout, we’ll refine the hero’s image presentation so it matches the calculator portrait’s “modern professional blur” look.

Concrete changes:
- In `CompanyFormationHeroMontage.tsx`:
  - Slightly adjust the media panel frame (border + shadow) to match `EditorialImage` style.
  - Add a subtle overlay treatment (similar to `EditorialImage`) optionally, but keep it light (minimal premium).
  - Ensure image crop defaults to centered (avoid left/right empty-space feeling via `object-position` defaults).

Optional (if you still dislike the current hero photo):
- Regenerate/replace the hero image asset with a prompt that matches the calculator photo:
  - Two professionals, mid-30s, man with neat short beard, candid working posture, not looking at camera, shallow depth-of-field, modern Bahrain office cues, centered composition.

---

### 5) Reduce “border noise” in dense sections (Services, FAQs, Testimonials)
These sections have multiple nested borders (section border + framed border + card border + accordion item borders).

Concrete changes:
- Services accordion:
  - Make accordion triggers feel lighter: reduce borders inside the accordion list, rely on spacing + subtle background change on hover/focus.
- Testimonials:
  - Add a softer background and reduce divider contrast (keep the grid but lighten).
  - Optionally add star row (very subtle) to reinforce “premium” without adding clutter.
- FAQs:
  - Current 2-column layout is good; we’ll standardize trigger typography and spacing so it feels consistent with the rest of the page.

---

### 6) Small “modern polish” additions (no functional changes)
- Improve focus states for buttons/nav pills (more premium ring style).
- Add subtle transition timing consistency (use one duration/easing across interactive elements).
- Make the sticky in-page nav feel more premium:
  - Add fade edges for overflow on mobile.
  - Active pill styling: slightly calmer background and clearer active indicator.

---

## Files we’ll likely change
- `src/index.css` (core: card surfaces, borders, shadows, typography rhythm)
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` (reduce overlay usage in specific sections, unify CTA classes)
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx` (hero media styling consistency, object-position defaults)
- `src/components/shared/SplitSection.tsx` (header rhythm consistency)
- `src/components/landing/MobileStickyConsultationBar.tsx` (CTA consistency)
- (Optional) hero image asset: `src/assets/formation-hero-bahrain-office-traditional-consulting-1.jpg`

---

## Acceptance checklist (what you should see after)
- The page feels “cleaner” with fewer harsh outlines.
- Cards feel consistent and premium (flat by default, gentle hover only).
- Buttons look uniform across sections (same height/radius/weight).
- Hero image presentation matches the cost calculator’s editorial style.
- Sections feel calmer with less pattern/border stacking.

---

## One question before implementation (so we don’t guess)
Even within “minimal premium,” should buttons be:
- Rounded-full pills everywhere (more modern, softer), or
- Rounded-xl (more “structured/enterprise”)?

If you prefer, I’ll standardize to the style already used in your final CTA (rounded-full).
