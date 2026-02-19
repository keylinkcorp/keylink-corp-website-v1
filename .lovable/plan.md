
## What you want (based on your screenshot + message)
1) **Hero section**: all hero content (badge, H1, lead, bullets, CTAs, reviews) should feel **fully centered** and use a **radial dot background overlay** like the snippet you provided.  
2) **Company logos ticker**: the **top/bottom border lines must be full width** (edge-to-edge), while the **logos remain clipped inside the framed container**; additionally you want the **left/right frame borders visible on mobile too** (“side borders always”).

---

## Key findings from the codebase (current state)
### Hero (centered variant)
File: `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
- The “centered” hero is already largely centered (`text-center`), but:
  - The bullet list is intentionally `text-left` for readability.
  - The background overlay currently uses `SectionBackgroundOverlay variant="radial"` (gradient-style), not the dot-grid overlay you pasted.

### Logos ticker
File: `src/components/landing/CompanyLogosTicker.tsx`
- Outer `<section>` has `border-y`, so the **top/bottom border is full width** already.
- Inner framed container uses:
  - `max-w-[1120px]`
  - `overflow-hidden` (good: clips the moving logos)
  - **Side borders currently only show on md+** due to `md:border-x ...`

So the remaining change is: **make side borders always visible**, and ensure the fade edges / padding still look good on small screens.

---

## Implementation approach (what I will change)

### A) Hero: make content fully centered + add your dot overlay
In `CompanyFormationHeroMontage.tsx` (centered variant only):
1) **Replace / supplement the current background overlay** with the dot radial-mask overlay you provided:
   - Add a background wrapper like:
     ```html
     <div className="relative h-full w-full bg-white">
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
     </div>
     ```
   - Adapt it to Tailwind + tokens:
     - Use `bg-background` instead of `bg-white`
     - Use `hsl(var(--border) / …)` or `hsl(var(--foreground) / …)` for the dot color to match theme
     - Keep it decorative (`aria-hidden`, pointer-events none)

2) **Center the bullet list** (per your answer: “Fully centered bullets”):
   - Change the bullet `<ul>` from `text-left` to a centered layout:
     - `text-center`
     - Each bullet item becomes `justify-center` (icon and text centered as a unit)
     - Use `inline-flex`/`flex` with `items-center` and ensure wrapping looks good on mobile.
   - Ensure spacing matches your screenshot: tighter vertical rhythm, consistent icon alignment.

3) **Minor centering polish**
   - Ensure the badge, H1 max-width, and lead max-width align visually centered (they already mostly do).
   - Make sure `HeroReviewStrip` alignment uses its `align="center"` prop (right now it’s using className hacks); we’ll use the component prop so it’s consistent and easier to maintain.

4) **Bottom image panel**
   - You previously asked to “change the image”; the page already uses `imageSrc={consultancyHeroImage}`.  
   - In this planning step, I will not generate images (read-only mode), but in implementation I will:
     - Keep the new consultation image
     - Improve how it sits under the hero copy by slightly adjusting crop/height and overlay strength if needed so it feels “premium” and not harsh.

### B) Logos ticker: keep full-width border, clip inside frame, show side borders on mobile
In `src/components/landing/CompanyLogosTicker.tsx`:
1) Change the framed container border from `md:border-x ...` to `border-x ...` so it always shows.
2) Keep `overflow-hidden` on the framed container so logos remain clipped inside.
3) Adjust fade edges width responsively:
   - On mobile, reduce from `w-10` to `w-6` so it doesn’t eat too much space.
4) Ensure the inner padding (`padding-inline: 1.25rem`) doesn’t cause the ticker to “touch” the borders on mobile:
   - Reduce padding slightly on small screens via CSS or Tailwind utility (e.g., `px-4 sm:px-5` equivalent).
5) Quick check that nothing introduces horizontal scrolling on mobile (common when combining border + overflow + animated content).

---

## Files I will edit (no new dependencies)
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - Center bullets fully
  - Add the dot-grid radial mask overlay background
  - Use `HeroReviewStrip align="center"` (and remove any redundant centering classes)
  - Minor spacing/crop polish for the media panel if needed

- `src/components/landing/CompanyLogosTicker.tsx`
  - Side borders always visible (`border-x` instead of `md:border-x`)
  - Mobile fade edge widths and padding adjustments

---

## Acceptance checklist (what you should see after)
### Hero
- Badge, title, lead, bullets, CTAs, review strip: visually centered as one block (like your screenshot).
- Bullet lines: centered (icon + text centered), with good wrapping on mobile.
- Background: subtle dot-grid overlay with a radial mask fade (no harsh patterns).

### Logos ticker
- Top/bottom border: full width across the viewport.
- Left/right frame borders: visible even on mobile.
- Logos: always clipped inside the frame (never drawing outside).
- No horizontal scroll on mobile.
- Hover-to-pause still works on desktop.

---

## Testing plan (I’ll do this after implementation; you can also verify)
1) Desktop: /lp/company-formation-consultancy-modern
   - Confirm hero alignment matches the reference.
   - Hover the logos ticker: animation pauses.
2) Mobile (390px width)
   - Confirm side borders visible on the ticker.
   - Confirm no horizontal overflow and logos are clipped.
3) Check “prefers-reduced-motion” (ticker stops animating).

---

## Notes / edge cases
- “Fully centered bullets” can look less readable for long bullet text; I’ll keep line length controlled (max width) so it still feels premium and not messy.
- The dot overlay will be implemented with Tailwind arbitrary values; this is already consistent with your provided snippet and won’t add dependencies.
