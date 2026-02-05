
## Goal
Update the **Costs & fees** section on `/free-zone-in-bahrain` so it matches your requested layout:

- **Badge + headline + subtitle stay at the top** (above the image)
- **Image becomes a full-width block (container width) under the header** on **all screen sizes**
- **Below the image**, keep the information area as a clean, conversion-first layout:
  - **Left:** accordion (single-open, collapsible) for the core cost drivers + examples
  - **Right:** “Fast pricing method” highlight card (and any supporting mini-card if needed)

This keeps the section premium and scannable while still “landing-page” styled.

---

## What I found in the codebase (current state)
- `src/components/services/formation/free-zone/FreeZoneCostsFees.tsx` currently uses `SplitSection` with the image in a side column (`imagePosition="right"`).
- `SplitSection` is inherently a **two-column image + content** component; it’s not designed for “header → full-width image → content below” without adding new layout modes.
- You already have:
  - `SectionBackgroundOverlay` for consistent overlay-everywhere styling
  - `AspectRatio` for consistent image sizing
  - `Accordion` UI (`@/components/ui/accordion`) which matches other sections’ interaction patterns

Given your requirement (“All sizes”, “Container width”, “Heading above image”), the cleanest change is to **custom-layout this section** instead of forcing `SplitSection` into a new mode just for one section.

---

## Implementation approach (high level)
Refactor **only** `FreeZoneCostsFees.tsx` to render its own section shell:

1) **Section wrapper**
- Use the same site-wide rhythm:
  - `section-spacing relative overflow-hidden bg-background`
  - Add `SectionBackgroundOverlay` with your consistent “overlay everywhere” approach (e.g., dots or grid-lines masked, low opacity).

2) **Header block (top)**
- Render:
  - badge (“Costs & fees”)
  - H2 (“Free zone in Bahrain cost…”)
  - subtitle paragraph
- Keep typography consistent with other landing sections.

3) **Full-width image (container width)**
- Render a `card-elevated` image panel spanning the section’s content width:
  - Use `AspectRatio` (likely 16/9)
  - Keep the same `costsImage` and alt text
  - Keep the small caption text below (“No logos…”), consistent with your other sections.

4) **Content area below image**
- Use a 2-column grid under the image:
  - `grid gap-6 lg:grid-cols-12`
  - **Left**: `lg:col-span-7` accordion container
  - **Right**: `lg:col-span-5` highlight card(s)

5) **Accordion content (“Mixed” as approved)**
- Accordion behavior:
  - `type="single"` + `collapsible`
  - `defaultValue="registration"` (so it doesn’t look empty)
- Items:
  - Registration + licensing (from existing `cards[0]`)
  - Address / lease (from existing `cards[1]`)
  - Operating requirements (from existing `cards[2]`)
  - Realistic examples (render existing `examples` list + note)

6) **Right column**
- Keep “Fast pricing method” as a single highlight `Card` (unchanged copy), styled to match the new page system.

---

## Exact file changes
### 1) `src/components/services/formation/free-zone/FreeZoneCostsFees.tsx` (main refactor)
- Remove usage of `<SplitSection ...>`
- Replace with:
  - `<section className="section-spacing relative overflow-hidden bg-background">`
  - `<SectionBackgroundOverlay variant="dots" opacity={0.55} masked />` (or match your final overlay style)
  - `<div className="container relative z-10">`
  - `<div className="max-w-6xl mx-auto">`
- Render in this order:
  1. Header (badge/title/subtitle)
  2. Image panel full width (container width)
  3. Grid:
     - left accordion card/panel
     - right highlight card (“Fast pricing method”)
- Import additions likely needed:
  - `SectionBackgroundOverlay` (and `type SectionOverlayVariant` only if needed)
  - `AspectRatio`
  - `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
  - `cn` only if we need conditional classnames (optional)
- Reuse your existing arrays: `cards` and `examples` (no copy rewrite).

### 2) No changes expected in
- `src/components/shared/SplitSection.tsx` (we won’t extend it unless you want this pattern reusable)
- `src/components/ui/accordion.tsx` (reuse as-is)

---

## Styling details (to match your screenshot intent)
- Header spacing: `mb-8 md:mb-10`
- Image card:
  - `card-elevated overflow-hidden`
  - `AspectRatio ratio={16/9}` (or 21/9 if you want more “banner” feel; we’ll start with 16/9)
- Content spacing: `mt-10`
- Accordion container:
  - Wrap accordion in a `Card` with `card-elevated`
  - Keep triggers roomy: good tap targets, consistent icon blocks (`bg-muted`, rounded-xl)
- Maintain visual hierarchy:
  - Accordion titles: `font-semibold text-primary`
  - Accordion content: `text-sm text-muted-foreground leading-relaxed`

---

## QA checklist (what you should verify in Preview)
1) On `/free-zone-in-bahrain`, scroll to **Costs & fees**:
   - Header appears first
   - Image spans the section width (container width), not side-by-side
   - Content is clearly below the image
2) Accordion:
   - Only one open at a time
   - First item open by default
   - Smooth open/close and readable on mobile
3) Desktop layout:
   - Below image: left accordion + right pricing-method card align cleanly
4) Sticky CTA:
   - Does not cover the bottom of accordion content on mobile (no blocked text)

---

## Optional follow-up (if you like this pattern)
If you want to reuse this “header + full-width image + content below” pattern on more sections, we can add a `layout="stacked"` mode to `SplitSection` afterwards. For now, implementing it directly in `FreeZoneCostsFees.tsx` is the fastest and least risky.
