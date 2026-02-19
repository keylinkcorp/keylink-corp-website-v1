
## Goal
Increase the framed/container width of the landing page at `/lp/company-formation-consultancy-modern` from **1120px** to **1260px**, while keeping the **same border behavior and full-bleed lines** (header bottom border and logo ticker top/bottom borders remain full width).

You confirmed:
- Apply to **this page only**
- Borders should keep the **same look, just wider** (borders move outward with the frame)
- Hero should also **align to 1260px**

---

## What’s currently enforcing 1120px
The “1120px frame” is hardcoded in multiple places:

1) **Header frame**
- `src/components/landing/LandingHeader.tsx`
  - In `layout="framed"` it uses: `mx-auto max-w-[1120px] ...`

2) **Logo ticker frame**
- `src/components/landing/CompanyLogosTicker.tsx`
  - Inner frame uses: `mx-auto max-w-[1120px] border-x ... overflow-hidden`

3) **Hero internal alignment**
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - Centered variant uses: `max-w-[1120px]` for the main content container and the media panel container.

4) **This page’s framed body wrapper**
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - After the ticker: `max-w-[1120px] bg-background md:border-x ...`

If we only change one of these, borders and content alignment will look “off” (e.g., header frame still narrower than body, or hero narrower than ticker).

---

## Implementation approach (page-only, minimal risk)
Because you want this change for **this page only**, the cleanest approach is to make the shared components accept an optional “frame width” override, without changing the default behavior for other pages.

### 1) Introduce a shared constant for this page (1260px)
In `CompanyFormationConsultancyLandingModern.tsx` we’ll define something like:
- `const FRAME_MAX_W_CLASS = "max-w-[1260px]";`

Then we’ll pass it to the components that support it (after step 2 and 3 below) and apply it to the page wrapper.

Why: prevents typos and ensures the header/ticker/hero/body all match exactly.

---

## Code changes (by file)

### A) `src/components/landing/LandingHeader.tsx`
Add a new optional prop to control the framed container width:

- New prop (optional):
  - `frameMaxWidthClassName?: string` (default undefined)
- When `layout === "framed"`, instead of hardcoding `max-w-[1120px]`, use:
  - `frameMaxWidthClassName ?? "max-w-[1120px]"`

This keeps all other pages unchanged unless they explicitly pass the prop.

**Border behavior stays the same**:
- Header bottom border remains full width (it’s on the `<header>` already).
- Side borders remain on md+ as currently implemented (`md:border-x ...`) unless you want that changed later.

---

### B) `src/components/landing/CompanyLogosTicker.tsx`
Add a new optional prop to control the ticker’s inner framed width:

- New prop (optional):
  - `frameMaxWidthClassName?: string` (default undefined)
- Replace `max-w-[1120px]` with:
  - `frameMaxWidthClassName ?? "max-w-[1120px]"`

This preserves:
- Full-bleed top/bottom borders (outer section)
- Clipped scrolling logos (inner frame `overflow-hidden`)
- Side borders always visible (you already chose this; we keep it)

---

### C) `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
Add an optional prop to control hero internal max width (centered variant):

- New prop (optional):
  - `contentMaxWidthClassName?: string` (or `frameMaxWidthClassName?: string`)
- Replace both instances of `max-w-[1120px]` in the centered variant with:
  - `contentMaxWidthClassName ?? "max-w-[1120px]"`

This ensures:
- The centered hero copy block stays centered but is aligned to the wider 1260px frame.
- The hero image panel container aligns to the same width.

We will keep the internal text max widths (like `max-w-[860px]` for copy) unless you want those expanded too; widening those can reduce readability.

---

### D) `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
Apply 1260px to the framed wrapper and pass width overrides into header/ticker/hero:

1) Update the framed wrapper after ticker:
- Change `max-w-[1120px]` → `max-w-[1260px]`

2) Update header call:
- `LandingHeader layout="framed" ... frameMaxWidthClassName={FRAME_MAX_W_CLASS}`

3) Update ticker call:
- `<CompanyLogosTicker frameMaxWidthClassName={FRAME_MAX_W_CLASS} />`

4) Update hero montage call:
- `<CompanyFormationHeroMontage ... contentMaxWidthClassName={FRAME_MAX_W_CLASS} />`

Result: header frame, hero alignment, ticker frame, and the entire framed body are all exactly 1260px and visually consistent.

---

## QA / Visual verification checklist (what to test)
1) Desktop
- Confirm header framed background/borders align with the body frame (no “step-in”).
- Confirm hero content and hero media panel align to the new 1260px frame.
- Confirm logo ticker inner frame width matches the body frame.

2) Mobile
- Ensure no horizontal scroll appears.
- Ensure ticker still clips correctly and side borders show as before.

3) Sections using `SplitSection`
- Confirm “Common blockers”, “Our approach”, “Services”, etc. still look correct with the wider frame (they use `container` internally; widening the outer frame should still feel cohesive).

---

## Notes / edge cases
- Tailwind `container` has its own max widths; however, your frame strategy is based on explicit `max-w-[…px]` wrappers and border frames. We’re keeping that model and simply widening the frame.
- Other landing pages will remain 1120px because the default max width stays `max-w-[1120px]` unless overridden.
- If you later decide “all framed landing pages should be 1260px”, we can centralize the frame width into a single design token (e.g., a shared constant or Tailwind theme extension) and remove the overrides.

---

## Files to be modified
- `src/components/landing/LandingHeader.tsx`
- `src/components/landing/CompanyLogosTicker.tsx`
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
