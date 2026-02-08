
Scope
- Redesign only the “What happens on the call” SplitSection on `/lp/company-formation` to match the modern reference (image-6): clean two-column layout, subtle grid background, light borders, no shadows, and a neat 2x3 benefit-card grid.

What the reference design implies (visual requirements)
- Background: very light, with a faint square grid pattern (not a strong overlay).
- Left column: large rounded image card with a light border and no shadow; small caption under it.
- Right column header: small pill badge, large bold title, short subtitle with comfortable spacing.
- Benefit items: 2-column grid on desktop, 1-column on mobile; each item is a rounded card with:
  - very light border
  - flat white surface (or extremely subtle tint)
  - consistent padding
  - small check icon on the left
  - readable text (not too muted)
  - no shadows
- Overall: more whitespace and calmer contrast than current.

Codebase findings (current implementation)
- The section already exists in `src/pages/landing/CompanyFormationLanding.tsx` using `SplitSection` with:
  - `badge="What you get"` and `title="What happens on the call"` (matches reference)
  - `variant="subtle"` which in `SplitSection.tsx` forces `bg-secondary/40` (can look “grey” vs the reference’s brighter canvas)
  - Benefit cards currently use `lp-card-flat` with `text-muted-foreground` (can look too low-contrast and less “premium card grid”)

Implementation plan (exact edits)
1) Update the “What happens on the call” section styling (primary change)
File: `src/pages/landing/CompanyFormationLanding.tsx`

A. Adjust the SplitSection props to match the reference background feel
- Change this SplitSection from `variant="subtle"` to `variant="default"` so the base is clean white.
- Set `backgroundVariant` to a line/grid-like overlay (`ibelick-lines`) with a low opacity to emulate the faint grid.
  - Example direction:
    - `variant="default"`
    - `backgroundVariant="ibelick-lines"`
    - `overlayOpacity={0.35}` (tune until it’s subtle)
    - keep `overlayMasked` if it helps keep the grid soft near edges

B. Make the badge look like a small pill (if current section-badge isn’t already)
- If `section-badge` already renders as a pill, keep it.
- If it’s not pill-like enough, we’ll wrap or extend it locally:
  - Replace the badge rendering by setting `badge={undefined}` and manually render a pill above the title inside children, or
  - Keep `badge="What you get"` and adjust the global `section-badge` styles later only if you want site-wide consistency.
- In this pass, we’ll prefer local-only changes (no global typography changes) unless necessary.

C. Replace benefit grid markup to match reference “boxed grid”
- Update the benefit item card classes from the current:
  - `lp-card-flat p-4 sm:p-5 flex gap-3`
- To a more “modern boxed grid” look:
  - `rounded-2xl border border-border/20 bg-background p-5 sm:p-6`
  - `flex gap-3 sm:gap-4 items-start`
  - ensure equal height: `h-full`
  - remove extra-muted text: use `text-foreground/80` or `text-muted-foreground` but not too faint (we’ll tune)
- Increase grid gap slightly (`gap-5` or `gap-6`) and set consistent vertical rhythm:
  - `className="grid md:grid-cols-2 gap-5 mt-8"` (or similar)
- Icon styling:
  - Use `Check` at `h-4 w-4` and `text-accent`
  - Put icon in a small “slot” so alignment matches reference:
    - e.g., icon in a `mt-0.5` container, keep consistent

D. Ensure the left image feels like a bordered card (no shadow)
- The `EditorialImage` already uses border and rounded corners; we’ll ensure it matches:
  - If it’s too heavy, slightly reduce `overlayStrength` for this section (reference image looks clean).
  - If the border looks strong, we’ll pass a `className` to `SplitSection`’s image wrapper via `imageClassName` or adjust `EditorialImage` usage via props (without changing global behavior).
- Keep the caption under the image (already done by SplitSection unless `hideImageCaption` is true).

2) Optional: add a lightweight background grid utility (only if `ibelick-lines` isn’t close enough)
Files:
- `src/components/shared/SectionBackgroundOverlay.tsx` (only if needed)
or
- add a local absolute div in the section in `CompanyFormationLanding.tsx`

Approach:
- If the existing overlay variants can’t replicate the faint square grid in the reference, we’ll add a subtle CSS background just for this section:
  - `bg-[linear-gradient(...)]` style or a Tailwind arbitrary background with low opacity
- This will be applied behind content, inside the SplitSection, without affecting other pages.

3) QA / tuning checklist (what we’ll verify in preview)
Route: `/lp/company-formation`
- Desktop:
  - The section matches the reference: left image + right header + 2-column boxed grid.
  - Borders are light (not heavy), no shadows visible.
  - Badge appears as a soft pill (or close).
  - Background grid is faint and doesn’t compete with text.
- Mobile:
  - Image stacks above content naturally.
  - Benefit cards become a single column with comfortable spacing.
  - No weird cropping on image (adjust `imageImgClassName` object-position if needed).

Files we will edit
- `src/pages/landing/CompanyFormationLanding.tsx` (main redesign)
- Potentially (only if required by the grid background match):
  - `src/components/shared/SectionBackgroundOverlay.tsx` or a small local-only CSS utility approach

Notes on keeping borders light
- We’ll use consistent light border tokens like:
  - outer containers: `border-border/30` to `/40`
  - inner cards: `border-border/15` to `/25`
- No shadow classes anywhere in this section.

Out of scope (unless you ask next)
- Redesigning “How it works” cards to the same boxed-grid style
- Changing global `.section-badge` or global typography system-wide
