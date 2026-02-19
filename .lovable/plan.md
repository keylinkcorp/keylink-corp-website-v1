
## What you want
On **/lp/company-formation-consultancy-modern**:
- **Every section divider/border should span the full viewport width** (full-bleed horizontal lines).
- **The actual content should stay inside a centered “frame”** (max-width), so the page doesn’t feel full-width.

You confirmed the border style is: **Full-width top/bottom lines**, and scope is: **Only this landing page**.

## What I found in the current page
File: `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`

Right now the page does this:
- Hero + ticker + sticky nav are already largely “full width”.
- After that, the rest of the content is wrapped in a single framed container:
  - `mx-auto ... md:border-x ...` (so the *frame* exists)
  - But the **section separators/borders are not full-bleed**, because everything is inside the frame wrapper.

So we need to change the layout strategy: keep the frame for content, but draw section borders **outside** that frame.

## Implementation approach (page-only, minimal disruption)
### 1) Remove the “one big frame” wrapper
Currently there is a wrapper like:
- `div className={cn("mx-auto ... md:border-x ...", FRAME_MAX_W_CLASS)}`
that contains many sections.

We will replace that with a “section wrapper” pattern so **each section** can:
- Render a full-bleed border line
- Still place content inside a framed inner container

### 2) Introduce a small local helper component inside the same file
Inside `CompanyFormationConsultancyLandingModern.tsx`, add a small helper (no new files) like:

- `FullBleedSection`
  - Outer element: `section` (or `div`) that is `relative` and has `border-b border-border/60` (and optionally `border-t` for the first one if desired)
  - Add a dedicated full-bleed border line using an absolutely positioned element:
    - `absolute left-1/2 -translate-x-1/2 w-screen border-b border-border/60 bottom-0`
  - Inner “frame”: `div className={cn("mx-auto", FRAME_MAX_W_CLASS, "md:border-x md:border-border/60 bg-background")}`
  - Then inside that: existing `container mx-auto px-4 md:px-6 ...`

This guarantees:
- The horizontal border is truly **full viewport width**
- The content stays within the framed max-width
- The vertical frame borders can remain (only on md+), but the user’s key request (full-width section border) is satisfied

### 3) Apply the wrapper to each major section block
We’ll update these blocks (at minimum):
- Cost calculator section
- Blockers SplitSection
- Approach SplitSection
- Services SplitSection
- Testimonials section
- About section
- Booking/Contact section
- FAQs section
- Final CTA section

For `SplitSection` usage:
- Keep `SplitSection` as-is for layout
- Wrap each `SplitSection` call inside `FullBleedSection` so the border is full width, but the `SplitSection` content remains framed.

For plain `<section>` blocks (Testimonials/FAQs/CTA):
- Replace their outer `<section ...>` with `<FullBleedSection ...>` and keep the existing inner `container` markup (or let the wrapper provide the frame + container and simplify).

### 4) Keep existing sticky header/nav behavior intact
- `LandingHeader layout="framed"` already correctly keeps header content framed with full-width bottom border line.
- `LandingStickyNav` currently renders a `border-b` in a full-width background area; we’ll keep it, but ensure it visually aligns with the new full-bleed section borders (same `border-border/60`).

### 5) Visual consistency rules (so it matches your reference look)
- Use the same border token everywhere: `border-border/60`
- Ensure full-bleed borders align exactly with viewport edges using `w-screen` + `left-1/2 -translate-x-1/2`
- Ensure sections don’t “double-border” where two sections touch:
  - Prefer only `border-b` on each section, and optionally a single top border at the start of the framed content region

## Files that will change
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` (only)

## Acceptance checks (what you should see)
- On desktop:
  - Each section is separated by a **full-width horizontal border line** that spans edge-to-edge.
  - Content remains in a centered max-width frame (does not expand to full width).
- On mobile:
  - Same full-width borders.
  - Content remains padded and readable.
- No layout regressions in:
  - Sticky header
  - Sticky in-page nav
  - SplitSection image/text alignment

## Notes / trade-offs
- This approach avoids creating global layout changes and keeps the change isolated to this landing page.
- If later you want this pattern reused across multiple landing pages, we can promote `FullBleedSection` into a shared component—right now we’ll keep it local as requested.
