
Goal
- Make the hero area feel “full width” (no left/right side borders visible around the hero) while keeping the rest of the landing page in the current bordered layout.
- Keep the header bottom border full width (edge-to-edge across the screen), not limited to the bordered content container.
- Keep content (text, buttons, hero image) the same; this is layout-only.

What’s happening now (why the hero looks bordered)
- In `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`, the whole page content sits inside:
  - `max-w-[1120px] bg-background md:border-x md:border-border/60`
- Because the hero and header are inside that wrapper, the vertical borders are visible around them.
- `LandingHeader` currently supports `borderless`, but the header itself is still “inside” the bordered wrapper, so even if it has a border-b, it’s not full width.

Target layout behavior
1) Header
- Header stays sticky.
- Header’s bottom border goes full width (spans the viewport), not just inside the 1120px bordered container.
- Header content (logo + buttons) stays centered with the usual container padding.

2) Hero section
- Hero background/section spans full width.
- The hero area is visually not “inside” the left/right bordered frame.
- Hero content remains centered and aligned with the rest of the page content width.

3) All other sections
- Keep the current “framed” look (max width + left/right borders on md+).
- No changes to content, ordering, icons, or section internals besides necessary wrappers.

Implementation approach (minimal, predictable)
A) Restructure the top-level layout wrapper in `CompanyFormationConsultancyLandingModern.tsx`
- Split the page into three conceptual layers:
  1. Full-width header (sticky, with full-width border-b).
  2. Full-width hero (no side borders).
  3. Bordered “page frame” wrapper that contains everything after the hero (and keeps the existing borders).

Concretely:
- Move `<LandingHeader />` out of the bordered wrapper so its border spans `w-full`.
- Render `<CompanyFormationHeroMontage ... />` outside the bordered wrapper too (so it doesn’t inherit `md:border-x`).
- Keep the bordered wrapper for the rest of the sections (logos ticker, cost calculator, SplitSections, booking, footer, sticky bar, etc.) so they retain the framed look.

B) Ensure header bottom border is actually on
- In `CompanyFormationConsultancyLandingModern.tsx`, stop passing `borderless` to `LandingHeader` (or explicitly pass `borderless={false}`).
- This will restore the header’s `border-b border-border/60` styling.
- Because the header will now be outside the max-width bordered wrapper, that border will be full-width as requested.

C) Keep content alignment consistent (so hero content still lines up)
- `CompanyFormationHeroMontage` already uses `container mx-auto px-4 md:px-6`.
- The bordered wrapper is `max-w-[1120px]` which may not exactly match Tailwind’s `container` width at all breakpoints.
- To avoid “hero content feels shifted vs other sections”, we’ll do one of these (choose the least disruptive once we inspect the rest of the page structure after line ~411):
  Option 1 (preferred): Make the bordered wrapper use the same container rhythm
  - Use a structure like:
    - Full-width section wrappers
    - Inside each: `div className="container ..."` for alignment
    - And apply the border frame to a single shared element that uses `max-w` aligned to the container.
  Option 2 (minimal code churn): Keep existing `max-w-[1120px]` frame for non-hero sections, and adjust hero to visually match by:
  - Keeping hero content container as-is
  - Accepting a small difference if it’s not noticeable
  - If noticeable, add a “frame width” utility wrapper used by both hero and framed sections (a shared `max-w-[1120px] mx-auto` inner wrapper), without reworking every section.

D) Make hero “remove border both side” visually obvious
- Since the previous frame added vertical borders, once hero is outside that frame it will naturally have no side borders.
- If there’s still an unwanted “boxed” feel due to hero media panel borders (`border border-border/60` inside the hero montage), we will not remove them unless you want that too. Your request sounds like the page frame borders, not the hero card border. If you meant also remove the hero media panel border, we can do that as a follow-up toggle (keeps rest of page unchanged).

Files to change
1) `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- Main change: restructure wrappers so:
  - `LandingHeader` renders full width (outside the bordered frame)
  - `CompanyFormationHeroMontage` renders full width (outside the bordered frame)
  - The bordered frame wrapper starts after hero (and wraps the rest)
- Ensure header uses bottom border (remove `borderless` prop usage)

2) (Only if needed) `src/components/landing/LandingHeader.tsx`
- Likely no change required, because it already uses `w-full` and has border-b logic.
- Only adjust if we discover a dependency on being inside the `cfc-typography` wrapper, or if we want the header background/backdrop to match the framed area in a specific way.

QA checklist (end-to-end)
- On `/lp/company-formation-consultancy-modern`:
  1) Header:
     - Sticky behavior still works.
     - Bottom border spans the full viewport width.
     - Logo + buttons remain centered and aligned.
  2) Hero:
     - No left/right “frame borders” visible around the hero section.
     - Content (title, bullets, CTAs, image) remains unchanged.
  3) Other sections:
     - The framed border (md:border-x) still appears for the rest of the landing page.
     - No regressions in spacing, backgrounds, or overlays.
  4) Mobile:
     - No horizontal overflow.
     - Visual hierarchy remains: header → hero → rest.

Potential edge cases / things I’ll watch for
- If `cfc-typography` styles are needed for the hero typography, we must ensure the hero still inherits them. If `cfc-typography` is currently applied only on the framed wrapper, we may need to apply `cfc-typography` at a higher level (full page wrapper) while applying borders only to the framed container.
- If `MobileStickyConsultationBar` assumes a certain parent structure, ensure it still renders correctly when wrapper changes.
