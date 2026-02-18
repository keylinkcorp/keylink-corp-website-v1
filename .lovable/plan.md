
## Goal
Redesign the hero for **/lp/company-formation-consultancy-modern** so that:
- The hero section appears **after the company logos ticker**
- The hero has **no image/montage**
- The hero content is **center-aligned** (full-width centered layout)
- Keep existing content elements (badge, title, lead, bullets, CTAs, review strip, disclaimers), just reorganized and restyled for a centered hero

## What I found in your codebase
- Route `/lp/company-formation-consultancy-modern` renders `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`.
- That page currently renders:
  1) `<CompanyFormationHeroMontage ... />`
  2) `<CompanyLogosTicker />`
- `CompanyFormationHeroMontage` (`src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`) is a shared hero used by multiple landing pages and contains a **left text column + right image montage**.
- You want this redesign **only for the modern page**, so we should **not** change `CompanyFormationHeroMontage` globally.

## Implementation approach (safe + isolated)
Create a **new hero component** used only by the modern landing page, rather than modifying the shared montage hero:
- New component: `CompanyFormationHeroCentered.tsx` (placed alongside the existing hero in `src/pages/landing/company-formation/`)
- Update `CompanyFormationConsultancyLandingModern.tsx` to:
  - Render `<CompanyLogosTicker />` first
  - Render the new centered hero after it
  - Keep the rest of the page unchanged

This avoids unintended design changes to:
- `/lp/company-formation`
- `/lp/company-formation-consultancy-v2`
- `/company-formation-consultancy-bahrain`
…which all reuse `CompanyFormationHeroMontage`.

## Detailed UI behavior (new centered hero)
The new hero will:
- Use a clean background similar to the existing hero (`bg-muted/20`, subtle border/overlay allowed)
- Center everything: `text-center`, `mx-auto`, and a constrained width for readability (e.g. `max-w-3xl`)
- Keep the same content props as the montage hero so you can reuse the current values:
  - badgeText, title, titleSuffix, lead, bullets, primaryCtaLabel, phoneCta, showWhatsApp, socialProofLine, onBookClick
- Layout order (top to bottom):
  1) Badge pill
  2) H1 title (+ accent suffix if provided)
  3) Lead paragraph
  4) Bullets list (centered; on desktop can switch to 2-column if desired, but default will be single column for clean symmetry)
  5) CTAs row centered (same CTA logic you already have)
  6) HeroReviewStrip centered
  7) socialProofLine (optional)
  8) final disclaimer line (“Free • No obligation …”)

## Files to change
1) **Create** `src/pages/landing/company-formation/CompanyFormationHeroCentered.tsx`
   - Copy the “copy” portion of `CompanyFormationHeroMontage`
   - Remove all montage/image code
   - Apply centered layout classes

2) **Edit** `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
   - Replace current order:
     - `CompanyFormationHeroMontage` then `CompanyLogosTicker`
   - With new order:
     - `CompanyLogosTicker` then `CompanyFormationHeroCentered`
   - Ensure `onBookClick={() => scrollToId("book")}` still points to the correct section.

3) **No changes** to:
   - `CompanyFormationHeroMontage.tsx` (to avoid global redesign)
   - `CompanyLogosTicker.tsx` (logos stay as-is)

## Acceptance checklist (what you will verify in preview)
- On `/lp/company-formation-consultancy-modern`:
  - Logos ticker appears first
  - New hero appears immediately after ticker
  - Hero has no image
  - All hero content is centered
  - Buttons still work and scroll to booking section
  - Looks good on mobile and desktop (no overflow; bullets and CTAs wrap nicely)

## Technical notes / edge cases
- Ensure the hero section has enough top spacing after the ticker to avoid feeling cramped (e.g. `pt-10 pb-12`).
- If we keep the “sticky header”, make sure the scroll target (`book`) is not hidden under it. (If it is, we can add `scroll-mt-*` to the booking section anchor in a later pass.)
- Keep accessibility:
  - One `<h1>` on the page
  - Proper `aria-label` for the section
  - Keep meaningful alt text out since we remove the image

## Estimated effort
Small change: 1 new component + 1 page update.

