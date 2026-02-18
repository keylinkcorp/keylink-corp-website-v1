
## Goal
Add a **company logos ticker** directly **under the hero** on `/company-formation-consultancy-bahrain` (after the hero section), using the uploaded logo images. Style requirements from your answers:
- Scrolling ticker
- No heading/label
- Monochrome muted (minimal)
- Not clickable

---

## What I inspected (current structure)
- Page file: `src/pages/landing/CompanyFormationConsultancyLanding.tsx`
- The hero is rendered first via `<CompanyFormationHeroMontage ... />` (around line ~194).
- Immediately after hero, the page goes into the Cost Calculator section.
- There are existing ticker-style patterns we can reuse:
  - `src/components/services/incubator/IncubatorLogos.tsx` uses a framer-motion horizontal scrolling loop with gradient edge fades.

---

## Implementation design (how it will work)
### A) Add your uploaded logos into the project assets
In implementation (default mode), I will:
- Copy each `user-uploads://...` logo into the repo, e.g.
  - `src/assets/company-logos/versedag.png`
  - `src/assets/company-logos/cbre.png`
  - `src/assets/company-logos/braxtone.png`
  - `src/assets/company-logos/alsalam.png`
  - `src/assets/company-logos/incanto.png`
  - `src/assets/company-logos/bfh.png`
  - `src/assets/company-logos/isola.png`
  - `src/assets/company-logos/tsma.png`
  - `src/assets/company-logos/nimble.png`

This keeps them bundled and importable in React.

### B) Create a dedicated “logos ticker” component
Create a new component, e.g.
- `src/components/shared/CompanyLogosTicker.tsx` (or `src/components/landing/CompanyLogosTicker.tsx` if you prefer it landing-only)

Component behavior:
- Full-width section with subtle background (very light muted) and optional top/bottom border for separation.
- Gradient fade edges left/right (like your IncubatorLogos pattern).
- A framer-motion horizontal loop:
  - Render the logos in a row
  - Duplicate the list (e.g. 3x) for a seamless loop
  - Animate `x` from `0` to a negative distance (calibrated to the total width)
- On hover (optional), pause scrolling for usability (I can include or skip—defaults to “include pause on hover” because it’s a common nice touch and still minimal).

### C) Monochrome muted logo styling (minimal)
To make the logos monochrome muted while keeping them crisp:
- Apply `grayscale` + lowered opacity + slight contrast:
  - Example Tailwind classes on `<img>`:
    - `className="h-8 md:h-9 w-auto object-contain grayscale opacity-60 contrast-125"`
- Keep consistent height across logos to avoid visual jitter.
- Add `bg-transparent` (logos already have backgrounds in the images; if any has a white box, we can optionally wrap each logo in a subtle neutral chip to make it consistent).

### D) Insert the ticker right under the hero
In `src/pages/landing/CompanyFormationConsultancyLanding.tsx`:
- Import the new ticker component
- Render it immediately after `<CompanyFormationHeroMontage />` and before the Cost Calculator section.

This matches: “after hero section bars logo” (logos bar right after hero).

---

## Accessibility + performance details
- Each `<img>` gets a meaningful `alt` like `"CBRE logo"`, `"Al Salam Bank logo"`, etc.
- Use `loading="lazy"` for logos (hero is already eager).
- Ensure the ticker is responsive:
  - Smaller logo height on mobile
  - Adequate spacing (`gap-10 md:gap-16`)
- Ensure no layout shift:
  - Fixed height container for the ticker row.

---

## Step-by-step changes I will make (default mode)
1. Copy all uploaded logo images from `user-uploads://` into `src/assets/company-logos/`.
2. Create the new `CompanyLogosTicker` component:
   - Define a `logos[]` array with `{ name, src, alt }`
   - Render the scrolling motion row
   - Add gradient fade edges and monochrome-muted styling
3. Import and place `<CompanyLogosTicker />` directly below the hero on `CompanyFormationConsultancyLanding.tsx`.
4. Quick visual check in preview:
   - Desktop + mobile
   - Confirm ticker scroll speed feels premium (not too fast)
   - Confirm logos are clearly visible but still muted/minimal

---

## Notes / potential small follow-ups
- If any logo looks too faint after grayscale+opacity, we can slightly increase opacity to `0.7` or reduce grayscale intensity (still “monochrome muted”).
- If you want the ticker to match the hero’s max-width container exactly, we can constrain it to the same `max-w-[1120px]` layout rather than full-bleed.

