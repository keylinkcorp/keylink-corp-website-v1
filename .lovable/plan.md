
Goal (what will change)
- Keep the hero section full-bleed (no left/right “page frame” borders around it), but modernize its look (spacing/type, background, CTA layout) without changing any text.
- Make the header “not full width” in the sense that the header background/content sits inside the same 1120px framed area with side borders.
- Still keep the header bottom border line full width across the entire viewport (edge-to-edge).

What I found (current state)
- The page `/lp/company-formation-consultancy-modern` renders:
  - `<LandingHeader />` as a full-width sticky header (background spans full viewport).
  - `<CompanyFormationHeroMontage variant="centered" />` as a full-width hero.
  - Then a framed wrapper: `max-w-[1120px] ... md:border-x` for the rest.
- `LandingHeader` currently always uses `w-full bg-background/70 backdrop-blur-xl` and toggles only the bottom border via `borderless`.

Clarified decisions (from your answers)
- Header: “Framed header, full-width border line”
- Hero: “Keep hero full-width (no frame borders)”
- Hero redesign scope: “Spacing + type”, “Update background”, “CTA layout” (content stays the same)

Implementation approach (minimal changes, keeps other pages stable)

A) Update LandingHeader to support a “framed header content” mode while keeping a full-width bottom border
1) File: `src/components/landing/LandingHeader.tsx`
- Add a new optional prop, for example:
  - `layout?: "full" | "framed"` (default `"full"` to avoid affecting other pages)
- Render structure will become:
  - Outer `<header>`: always `w-full`, `sticky`, and (critically) owns the full-width `border-b`.
  - Inner wrapper (only in `layout="framed"`): `mx-auto max-w-[1120px] md:border-x md:border-border/60 bg-background/70 backdrop-blur-xl`
  - The existing `container mx-auto ...` stays inside that inner wrapper for alignment.
- Result:
  - The border-b line is viewport-wide (outer header).
  - The header background/content is constrained/framed with side borders (inner wrapper), matching your request.

2) File: `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- Change the header usage to:
  - `<LandingHeader layout="framed" ... />`
- Keep `borderless={false}` behavior (i.e., do not pass `borderless`), so the full-width border-b remains visible.

Edge case to watch
- Because the header becomes nested (outer border + inner framed bg), we’ll ensure the inner wrapper does not add an additional border-b that would look “double”. Only the outer header should draw the border-b.

B) Modernize the hero (centered variant) while keeping it full-bleed and keeping all text identical
1) File: `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
- Only adjust the `variant === "centered"` branch (since that’s what this landing page uses).

B1) Align hero content width with the framed sections (but keep hero background full width)
- Replace the `container mx-auto ...` wrapper with a frame-aligned wrapper:
  - `mx-auto max-w-[1120px] px-4 md:px-6 ...`
- Keep the outer `<section>` full width so there are no side borders around the hero.

B2) Update background to feel more “modern” (without changing content)
- Swap the centered hero’s `SectionBackgroundOverlay` from `"dots"` to a more premium modern variant, for example:
  - `variant="radial"` (or `"ibelick-soft"` if you want it closer to the rest of the page aesthetic)
- Adjust `opacity` and `masked` so the background is subtle and doesn’t compete with the headline.

B3) Spacing + typography refinements (no copy changes)
- Tighten and balance vertical rhythm:
  - Slightly adjust top/bottom padding for better “hero density”.
  - Increase spacing consistency between badge → H1 → lead → bullets → CTAs → reviews.
- Keep existing classes (`lp-h1`, `lp-lead`, etc.) and only add small utility adjustments where needed (e.g., margins, max-widths).

B4) CTA layout tweaks (same buttons, same labels/links)
- Keep the same CTA set:
  - Primary: “Get Free Consultation”
  - Secondary: Call
  - Secondary: WhatsApp
- Improve hierarchy and responsiveness:
  - Desktop: keep them on one row, consistent heights, consistent spacing.
  - Mobile: keep stacked full-width buttons as-is (or slightly reduce gaps if needed).
- Ensure icons remain at the 22px sizing you standardized earlier.

B5) Media panel polish (keeping border as-is unless you later request removal)
- Keep the media panel border for now (you did not select “Remove media border”).
- Ensure the media panel width aligns with the same `max-w-[1120px]` rhythm as the hero copy so it feels intentional and “designed as one unit”.

C) QA checklist (end-to-end)
1) Header
- Scroll the page: header remains sticky.
- Header content/background is framed (not full width) with side borders visible on md+.
- The bottom border line is full width across the viewport.

2) Hero
- Hero remains full-bleed (no page-frame side borders around it).
- Hero background looks updated/modern (no content changes).
- Spacing feels balanced; CTA row looks clean on desktop and stacked correctly on mobile.

3) Regression checks
- Other pages using `LandingHeader` remain unchanged because default `layout` will be `"full"`.
- The framed wrapper for sections after the hero still starts after the hero and looks identical to before.

Files to change (implementation)
- `src/components/landing/LandingHeader.tsx`
  - Add `layout` prop and implement “framed content + full-width border line” structure.
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - Set `LandingHeader layout="framed"`.
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - Update centered hero: background variant, frame-aligned content wrapper (`max-w-[1120px]`), spacing/type tweaks, CTA layout polish.
