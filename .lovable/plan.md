
## Goal (what you asked)
- Remove the **Pricing** section (all prices) from **/company-formation-consultancy-bahrain**
- Make the whole landing page feel **more typographic**: bigger headings/body, more whitespace, cleaner hierarchy
- **Reduce icons** (especially repeated checkmarks) so the page looks less “busy”

## What I found in your code (why this is straightforward)
- The Pricing section is a self-contained block in:
  - `src/pages/landing/CompanyFormationConsultancyLanding.tsx` around **lines ~514–606**
  - It imports 3 pricing images and hardcoded “BHD …” values.
- Icons are used in multiple patterns:
  - Hero bullets use icons via `CompanyFormationHeroMontage` bullets prop
  - Many lists use `<Check />` as a bullet icon
  - “Benefits” cards show big icon badges per card
- Typography is mostly controlled by reusable classes like:
  - `lp-h2`, `lp-section-subtitle`, `section-badge`, plus text sizes inside `lp-card`

## Implementation plan (sequenced)

### 1) Remove Pricing section (and related imports)
1. Delete the entire JSX block:
   - `/* PRICING */` section starting near line ~514 through its closing `</section>` near ~605.
2. Remove unused imports at the top:
   - `pricingStarterImage`, `pricingCompleteImage`, `pricingPremiumImage`
3. Ensure there are no references left that keep those assets “alive” in the bundle.

**Result:** No pricing/cards/prices shown anywhere on the consultancy landing page.

---

### 2) Typography “full pass” (bigger, cleaner, more editorial)
We’ll make the page feel more premium by adjusting typography in two layers:

#### A) Global-ish LP typography tokens (preferred if already centralized)
- Search for where `lp-h2`, `lp-section-subtitle`, `section-badge`, and `lp-card` text sizes are defined:
  - likely in a shared CSS/Tailwind layer (e.g., `src/index.css`, `src/styles/*.css`, or a `tailwind` layer file).
- Increase sizes and line-heights consistently:
  - `lp-h2`: bump up (e.g., from ~text-3xl to ~text-4xl on desktop)
  - `lp-section-subtitle`: bump slightly (e.g., text-base → text-lg)
  - Card body text: bump slightly and increase leading for readability

#### B) Local adjustments within `CompanyFormationConsultancyLanding.tsx` (if tokens aren’t centralized)
- Increase:
  - section titles (`lp-h2`)
  - subtitles (`lp-section-subtitle`)
  - card paragraphs currently using `text-sm`
- Add slightly more vertical rhythm:
  - more `mt-*` spacing between headings/subtitles/cards, without changing layout structure.

**Result:** Bigger type, fewer tiny text blocks, easier scanning.

---

### 3) Reduce icons (especially repeated checkmarks)
You selected “Reduce checkmark icons”, so we’ll keep the design consistent but less icon-heavy:

#### A) Replace “Check icon bullet lists” with typographic bullets
Places to change:
- Services accordion bullets currently render as:
  - `<Check className="h-4 w-4 ..."/>`
- Pricing list also uses Check icons (but pricing will be removed anyway)
- Final CTA list uses check icons

Approach:
- For dense lists, switch to:
  - simple `•` bullets (text-only) or
  - subtle left border / dot marker using CSS (no lucide icons)
- Keep icons only where they add meaning (e.g., phone/email contact cards).

#### B) Benefits section: keep structure but make it more typographic
Currently each benefit has a big icon badge.
Options (we’ll implement the cleanest one consistent with your request):
- Remove the icon badge entirely, and instead:
  - emphasize benefit title with stronger weight + size
  - add a small numeric index (01, 02, 03…) or a thin accent rule
This keeps the grid visually interesting without icons.

#### C) Hero montage bullets
The hero component expects icons in the bullets array.
We’ll adjust by either:
- Passing a minimal icon set (1 icon only) and making remaining bullets text-only (if component supports), or
- Changing the hero component usage/presentation to reduce icon prominence (smaller/less saturated), depending on how `CompanyFormationHeroMontage` is implemented.
(We’ll inspect that component and pick the non-breaking approach.)

**Result:** The page feels calmer and more “consultancy/editorial” rather than “icon UI kit”.

---

### 4) Final integrity pass (to avoid TS/JSX errors)
Given you recently hit JSX tag mismatch errors, after edits we’ll do a quick structural check:
- Ensure every `<section>`, `<div>`, `<main>` is properly balanced
- Ensure TypeScript has no unused imports after removing pricing/icons
- Verify the page renders on:
  - desktop
  - mobile (the sticky consultation bar shouldn’t overlap important CTA areas)

---

## Acceptance checklist (what you’ll verify in Preview)
1. Pricing section is completely gone (no “Pricing” badge, no package cards, no BHD numbers).
2. Headings and body text feel noticeably bigger and easier to read.
3. Fewer icons overall; no repetitive checkmark icons in lists.
4. Layout still looks clean on mobile (no overflow, no awkward spacing).
5. Cost calculator multi-step flow still works end-to-end and the “continue” redirect still goes to `/free-consultation`.

## Files likely to be changed
- `src/pages/landing/CompanyFormationConsultancyLanding.tsx` (remove pricing block, simplify icon-heavy lists, local typography where needed)
- Potentially a shared style file (only if `lp-h2` / `lp-section-subtitle` are defined centrally and we want consistent scaling across sections on this page)

## Notes / trade-offs
- You said “This page only”, so we’ll scope typography changes to this page unless typography tokens are global; if tokens are global, we’ll implement page-scoped overrides instead (so other pages remain unchanged).
- We will keep a small number of functional icons (phone/email) where they improve clarity.

