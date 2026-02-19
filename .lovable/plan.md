
Goal
- Update ONLY the Header + Hero on `/lp/company-formation-consultancy-modern` to feel like the reference (Apify-style): clean, centered, airy hero with subtle dot-grid background.
- Keep all other sections exactly the same.
- Header should remain sticky, but have no bottom border.

What I learned from the codebase
- This page uses:
  - `LandingHeader` (currently has `border-b border-border/60`)
  - `CompanyFormationHeroMontage` for the hero
- The hero component is likely reused on other company-formation pages, so changes should be opt-in to avoid altering other routes unintentionally.

Decisions confirmed from you (via questions)
- Hero layout: “Centered + keep image”
- Header buttons: “Call + WhatsApp (no border)”

Implementation approach (opt-in, minimal blast radius)
1) Make the header border optional (borderless just for this page)
- Update `src/components/landing/LandingHeader.tsx`
  - Add a prop like: `borderless?: boolean`
  - If `borderless` is true: remove `border-b border-border/60` from the header classes.
  - Default stays unchanged so other pages keep their current header styling.
- Update `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - Change usage to: `<LandingHeader borderless onLogoClick={...} />`
  - Result: only this page gets the borderless header.

2) Add a “centered hero” variant to CompanyFormationHeroMontage (don’t break other pages)
- Update `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - Add a prop like: `variant?: "split" | "centered"` (default `"split"` to preserve existing behavior elsewhere).
  - Implement `"centered"` layout:
    - Center-align badge, headline, lead, and bullet list (or keep bullets but centered and constrained width).
    - Center CTA row (primary button + Call + WhatsApp), matching the clean “hero controls” feel.
    - Keep the existing hero image, but present it as a centered “media panel” below the copy:
      - A single rounded card/panel with shadow and subtle border.
      - Keep overlay gradient if needed for contrast.
    - Add a subtle background inspired by the screenshot:
      - Light background + dot-grid overlay with a gentle mask/fade (top/bottom) so it doesn’t look noisy.
      - Keep it static (no scroll/entrance animations), consistent with your “static landing page” constraint.

3) Apply the new hero variant ONLY on the modern consultancy landing page
- Update `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - Pass `variant="centered"` to `CompanyFormationHeroMontage`.
  - No other sections touched.

Visual behavior targets (what you’ll see)
Header
- Sticky header remains.
- No bottom border line.
- Still shows Logo + (Call + WhatsApp) on desktop per current behavior.

Hero (centered)
- Large centered headline.
- Centered subtitle/lead with comfortable max width.
- Centered CTA row.
- Image appears as a centered panel beneath copy (especially similar to the screenshot’s “main panel” area).
- Background gets a subtle dot-grid texture like the reference, but using your existing brand tokens and light MagicUI-style aesthetic.

Files to change
- `src/components/landing/LandingHeader.tsx`
  - Add `borderless?: boolean` prop and conditional classNames.
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - Add `variant?: "split" | "centered"` prop.
  - Add centered layout rendering branch and background treatment.
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - Set `LandingHeader borderless`
  - Set hero `variant="centered"`

QA checklist (end-to-end)
1) Route: `/lp/company-formation-consultancy-modern`
- Desktop:
  - Header has no border; CTA buttons still present.
  - Hero is centered and looks like the reference style; image panel sits below.
  - Other sections (Cost calculator, Common blockers, Services, About, etc.) remain unchanged.
- Mobile:
  - Header sticky, no border.
  - Hero copy and CTAs centered; image panel below.
  - Ensure spacing doesn’t feel cramped and no horizontal overflow.

2) Regression check (other routes that use `LandingHeader` or `CompanyFormationHeroMontage`)
- Confirm other pages still show the bordered header (default).
- Confirm other pages still use the existing hero “split” layout (default), unless we explicitly opt them into `variant="centered"`.

Potential edge cases / notes
- If the centered hero makes the page feel “too tall,” we can tighten vertical padding (pt/pb) only in the centered variant.
- If you later want the hero to include a “search bar” control like the screenshot, we can add an optional prop for that without disturbing the current CTA layout.
