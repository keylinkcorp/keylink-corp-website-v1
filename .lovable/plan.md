
Goal
- Update the “Common blockers” section layout to match the reference screenshot style while keeping all existing text/content the same.
- Keep every other section on the page unchanged (Services, About, etc.).
- Preserve existing responsive behavior (image first on mobile; on desktop keep the intended two-column layout).

What you’re asking for (based on the screenshot + selected element)
- A section with:
  1) A large, centered headline at the top (spanning the section width).
  2) Under it, a two-column layout:
     - Left column: a clean vertical list of blockers with thin dividers (not individual “cards”).
     - Right column: the existing image.
- Content should remain exactly the same (same title/subtitle and same blocker item text).

What I found in the codebase (current state)
- The “Common blockers” section is implemented in:
  - `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - It uses the shared `SplitSection` component (`src/components/shared/SplitSection.tsx`)
- The current blockers list is rendered as a grid of `lp-card` items (each blocker is a separate card), which doesn’t match the reference.
- `SplitSection` currently renders its Header (badge/title/subtitle) inside the content column only; it cannot render a centered, full-width header above both columns.

Implementation approach (minimal blast radius)
A) Extend SplitSection to support “full-width header on top” (opt-in)
- File: `src/components/shared/SplitSection.tsx`
- Add a new optional prop:
  - `headerPlacement?: "column" | "top"` (default: `"column"` to preserve all existing sections)
- Behavior:
  - `"column"` (default): current behavior unchanged.
  - `"top"`: render the existing Header block above the section’s inner layout (so it spans both columns), then render the two-column content/image beneath.
- This is opt-in and will only affect sections where we explicitly set `headerPlacement="top"`.

B) Update only the Common blockers section instance to use the new header placement + divider list style
- File: `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- On the “Common blockers” `<SplitSection ...>`:
  1) Set:
     - `headerPlacement="top"`
     - `align="center"` (so the title/subtitle are centered like the reference)
  2) Replace the current `COMMON_BLOCKERS.map(...)` card grid with a “divider list” layout:
     - A single container (left column content area) with:
       - Each blocker rendered as a row with:
         - Title text (same as now)
         - Optional small helper text is not added (to keep content identical)
       - A thin `border-b` divider between items
       - Cleaner typography + spacing similar to the screenshot
     - Keep the CTA block (“Get clarity in one free consultation…”) exactly as-is, just positioned beneath the list with the same button.

C) Keep all other sections the same
- No changes to:
  - Services section
  - About section
  - Hero/header (already adjusted earlier)
  - Any other SplitSection instances unless explicitly targeted

Design details to match the reference (without changing content)
- The Common blockers list will look like:
  - Left column:
    - Item title in semibold
    - Light divider lines (`border-border/40` or similar)
    - Comfortable vertical spacing
    - No card background, no rounded card borders
  - Right column:
    - Same image treatment currently provided by `EditorialImage` through `SplitSection`
- Section header:
  - Centered title and subtitle above the two columns
  - Badge can remain (centered) to keep content consistent

Files to change
1) `src/components/shared/SplitSection.tsx`
- Add `headerPlacement` prop
- Adjust render logic so Header can optionally be rendered above the split/stacked layouts when `headerPlacement="top"`

2) `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- Update the “Common blockers” SplitSection instance only:
  - Add `headerPlacement="top"` and `align="center"`
  - Change blockers UI from card grid to a divider list while keeping the exact same blocker text

QA checklist (end-to-end)
1) On `/lp/company-formation-consultancy-modern`
- Desktop:
  - “Common blockers” heading is centered and spans full width (like the reference)
  - Below it, left side shows a divider list (not cards), right side shows the image
  - No other sections visually change
- Mobile:
  - Image stays above content (since this section is already configured with `mobileOrder="image-first"`)
  - Divider list is readable and not clipped; no horizontal overflow

2) Regression check
- Verify other pages/sections using `SplitSection` still render exactly the same (because `headerPlacement` defaults to `"column"`)

Potential edge cases / notes
- If centering the header affects spacing too much, we can tune only this instance with `headerClassName`, `titleClassName`, and `subtitleClassName` props (without impacting global styling).
- If you want the left list to include short descriptions later, we can extend `COMMON_BLOCKERS` to include a description field; for now we’ll keep content identical as requested.
