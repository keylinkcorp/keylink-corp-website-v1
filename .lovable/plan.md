
## Objective (keep same content, redesign the full landing layout)
Redesign `/free-zone-in-bahrain` into a **conversion-first** landing page with:
- **Overlay/pattern in every section** (consistent brand look)
- **Light “stat cards” trust strip** (premium, not heavy/dark)
- A **sticky CTA bar** that appears on scroll (consultation + call)
- A **zone selector** near the comparison section (fast navigation + better UX)
- Keep all existing content/sections (no copy removal), but restructure spacing, headers, and visual hierarchy so it feels like one cohesive modern page.

---

## What’s making it feel “not nice” right now (from code review)
1) **Mixed section systems**
   - `SplitSection` looks premium, but `ServiceTrustBar`, `ServiceBenefits`, `FreeZonesGuide`, and `RelatedServicesGrid` use different spacing/background logic, so the page feels stitched together.

2) **Too many different “header styles”**
   - Some sections use `.section-badge`, some use custom text headers, some center, some left.
   - This breaks the “landing page rhythm”.

3) **Overlays are inconsistent**
   - You have `SectionBackgroundOverlay`, but it’s not applied consistently to *every* section.

4) **Trust bar is visually heavy**
   - `ServiceTrustBar` is currently `bg-primary` (dark band) which interrupts the calm premium look.

---

## Target landing-page structure (same sections, new rhythm)
We will keep the same sections, but enforce one consistent rail:

1) **Hero (image-led)** — keep `ServiceHeroSplit`, tune overlay + spacing
2) **Trust stats (light stat cards)** — redesigned `ServiceTrustBar`
3) **Benefits (same overlay language)** — redesigned `ServiceBenefits`
4) **Quick Answer (SplitSection)**
5) **Comparison (SplitSection) + Zone Selector (tabs)**
6) **Mid CTA band** — keep but align styling to the rest
7) **Costs (SplitSection)**
8) **Zones Guide (rebuild to match landing style)**
9) **Documents (SplitSection)**
10) **Setup Steps (SplitSection)**
11) **FAQ (overlay + consistent header)**
12) **Related Services (overlay + consistent header)**
13) **Formation CTA**
14) **Sticky CTA bar** (appears after scrolling past hero)

---

## Implementation plan (concrete changes)

### Phase 1 — Unify the “section shell” everywhere (spacing + overlay + header)
**Goal:** Every section has the same foundation: `section-spacing`, overlay, and a consistent header pattern.

1) Upgrade `src/components/shared/SplitSection.tsx`
   - Add props:
     - `align?: "left" | "center"` (default left)
     - `headerSize?: "default" | "compact"` (default default)
     - `leadClassName?: string` (optional)
     - `hideImageCaption?: boolean` (some sections may not want the “No logos…” caption)
   - Ensure it can render:
     - consistent badge → H2 → lead paragraph spacing
     - consistent max widths (`max-w-6xl` default)
   - Keep existing API working; add new props as optional to avoid breaking.

2) Standardize overlays per section
   - Continue using `SectionBackgroundOverlay` but apply it consistently:
     - default overlay for all SplitSections remains (radial or grid-lines based on variant)
     - avoid “strong” overlays; prefer low opacity + masked

Files:
- `src/components/shared/SplitSection.tsx`
- (No new dependencies)

---

### Phase 2 — Redesign TrustBar into “light stat cards” (as approved)
**Goal:** Replace the dark navy band with a premium light strip using cards and overlay.

Update `src/components/services/shared/ServiceTrustBar.tsx`:
- Change section wrapper to:
  - `className="section-spacing-sm relative overflow-hidden bg-background"`
  - add `SectionBackgroundOverlay` (likely `grid-lines` at ~0.45 + masked)
- Render a single elevated container:
  - `max-w-6xl mx-auto card-elevated p-6 md:p-8`
- Each stat becomes a mini-card / row item with:
  - icon container (muted background)
  - counter + suffix
  - label text
- Keep animations and `AnimatedCounter` logic intact.

Files:
- `src/components/services/shared/ServiceTrustBar.tsx`

---

### Phase 3 — Rebuild Benefits section to match the same overlay system
Update `src/components/services/shared/ServiceBenefits.tsx`:
- Replace the current custom background pattern div with `SectionBackgroundOverlay`
- Switch spacing from `py-20 md:py-28` to `section-spacing` for consistency
- Keep the content identical, but adjust layout:
  - header style matches SplitSection (badge + H2 + lead)
  - benefit cards use `card-elevated-hover` (consistent with other sections)
  - consider reducing the 5-column layout on large screens if it feels cramped; optionally use 3 + 2 row layout (still same 5 items, just better composition)

Files:
- `src/components/services/shared/ServiceBenefits.tsx`

---

### Phase 4 — Zone Selector (conversion-first UX)
**Goal:** Make it feel like a landing page with a “guided decision” control.

Update `src/components/services/formation/free-zone/FreeZoneComparison.tsx`:
- Add a “Zone selector” UI above the grid:
  - Use Radix Tabs (you already have `@radix-ui/react-tabs`) or a `Select` for mobile.
  - Tabs: BIW / BLZ / BIIP / Sitra / All
  - Behavior:
    - “All” shows the full grid (current behavior)
    - Selecting a zone highlights and scrolls/focuses its card, or filters to a single card (recommended: filter on mobile, highlight on desktop)
- Ensure dropdowns/menus are not transparent and have proper z-index (per UI note).

Files:
- `src/components/services/formation/free-zone/FreeZoneComparison.tsx`

---

### Phase 5 — Sticky CTA bar (conversion-first UX)
**Goal:** Always keep the user one click away from consulting/calling after they scroll.

Implement a new component (or page-local) that:
- Appears after user scrolls past hero (~400–600px)
- Fixed at bottom on mobile, bottom-right or bottom center on desktop
- Contains:
  - Primary: “Free consultation”
  - Secondary: “Call”
- Styling:
  - `card-elevated`, subtle overlay, high z-index (`z-50`)
  - not too tall; avoid covering content (add bottom padding to page if needed)

Where to mount it:
- Best: inside `FreeZoneInBahrain` page only (so you can validate UX before using globally)
- Alternatively: in `Layout` with route-based enabling (more complex; we will start page-only)

Files:
- `src/pages/FreeZoneInBahrain.tsx` (mount sticky CTA)
- Potential new component: `src/components/services/formation/free-zone/FreeZoneStickyCTA.tsx` (small and reusable)

---

### Phase 6 — Bring FreeZonesGuide into the same landing system (big visual improvement)
`FreeZonesGuide` currently uses a different layout system and no overlay.

Update `src/components/services/formation/FreeZonesGuide.tsx`:
- Convert it into a `SplitSection`-style section:
  - Left: same header + short description (keep same meaning)
  - Right: 2x2 grid of zone mini-cards linking to deep dives
  - Keep the “Land from BHD 1/sqm/month” and CTA but style it as a compact footer inside a card (so it matches the landing page aesthetic)
- Add overlay (since you want overlay everywhere): `grid-lines` or `dots` masked.

Files:
- `src/components/services/formation/FreeZonesGuide.tsx`

---

### Phase 7 — Apply overlay + consistent header to the remaining “non-SplitSection” sections
1) `src/components/services/formation/free-zone/FreeZoneFAQ.tsx`
   - Wrap section in `relative overflow-hidden bg-background`
   - Add `SectionBackgroundOverlay` (grid-lines masked low opacity)
   - Ensure header spacing matches others

2) `src/components/services/shared/RelatedServicesGrid.tsx`
   - Change wrapper to `section-spacing relative overflow-hidden bg-background` or subtle bg
   - Add overlay
   - Normalize header to match (avoid custom `text-3xl md:text-4xl` if global `h2` handles it)

Files:
- `src/components/services/formation/free-zone/FreeZoneFAQ.tsx`
- `src/components/services/shared/RelatedServicesGrid.tsx`

---

### Phase 8 — Hero tuning (to match “overlay everywhere”)
Update `src/components/services/shared/ServiceHeroSplit.tsx`:
- Replace the ad-hoc overlay divs with `SectionBackgroundOverlay` usage (or align its opacity with the section overlays)
- Slightly tighten hero spacing so it doesn’t feel oversized compared to the new stat strip and benefits
- Keep H1 strong but ensure it doesn’t dominate the rest of the landing rail.

Files:
- `src/components/services/shared/ServiceHeroSplit.tsx`

---

## QA checklist (what “nice” will look like)
1) Full scroll on `/free-zone-in-bahrain`:
   - No section feels like a different template
   - Overlays are consistent and subtle (no “busy wallpaper”)
2) Sticky CTA:
   - Shows after hero, doesn’t cover important content
   - Buttons work (consultation + tel)
3) Zone selector:
   - Works on mobile and desktop
   - No transparent dropdowns; proper z-index
4) Spacing:
   - All major sections use `section-spacing` (or `section-spacing-sm` for trust strip)
5) Performance:
   - Only hero image eager; the rest lazy
   - No layout shifts

---

## Deliverable
A fully redesigned, conversion-first landing page layout for `/free-zone-in-bahrain` that keeps all your existing content but looks like a single, premium, modern page:
- overlay everywhere (consistent)
- light trust stat cards
- zone selector
- sticky CTA
- consistent headers, spacing, and card system

