
## Goal
Make the **/free-zone-in-bahrain** landing page feel less “plain” by adopting the *Company Formation* page’s visual language (premium background overlays, subtle glow gradients, and a modern alternating section rhythm) **without changing any of the existing content**.

You approved:
- Scope: only **/free-zone-in-bahrain**
- Intensity: **Subtle**
- Layout approach: **Alternate section backgrounds**

---

## What’s happening now (why it feels plain)
- Many sections already use `SectionBackgroundOverlay`, but most of the page still reads as repeated “white sections with cards.”
- The Company Formation page feels richer because it uses:
  - layered decorative backgrounds (radial glow + pattern)
  - more intentional alternation between light surfaces
  - occasional “special” sections with custom decorative treatment

---

## Design approach (match Company Formation style, keep your content)
### 1) Alternate section surfaces
Create a consistent rhythm by alternating:
- `bg-background` (white)
- `bg-secondary/40` (soft tinted panel)

We’ll apply this to the Free Zone landing page sections so the flow feels designed rather than repetitive.

### 2) Layered overlays (subtle)
For the sections that currently feel flat, we’ll add **two-layer** overlays (like `ServiceHeroSplit`):
- Layer A: `radial` (soft glow, masked=false or lightly masked)
- Layer B: `grid-lines` or `dots` (low opacity, masked=true)

This keeps it modern and premium but not “busy.”

### 3) Keep existing section layouts and copy
No text changes, no component rewrites—only background styling and overlay layering.

---

## Planned code changes (targeted, page-only)

### A) Update section background + overlay per section (Free zone landing page)
We’ll adjust these components used on `/free-zone-in-bahrain`:

1) **`src/components/services/shared/ServiceBenefits.tsx`**
- Change section background from `bg-background` to `bg-secondary/40` (to start alternating earlier on the page).
- Swap overlay from `dots` to `grid-lines` (or keep `dots` but reduce opacity), so it matches the Company Formation “structured” feel.
- Keep cards/content exactly the same.

2) **`src/components/services/formation/free-zone/FreeZoneMidCTA.tsx`**
- Add a second overlay layer:
  - Keep `dots` (current) but reduce opacity slightly
  - Add `radial` overlay behind it for depth (very subtle)
- Optionally set the section to `bg-secondary/40` if needed for alternation (we’ll follow the alternating map below).

3) **`src/components/services/formation/free-zone/FreeZoneCostsFees.tsx`**
- This is a key section the user stares at (headline + accordion), so it should feel premium:
  - Switch section background to `bg-secondary/40` (alternation)
  - Add layered overlays: `radial` + `grid-lines` (instead of only `dots`)
  - Keep your current two-column layout and image as-is

4) **`src/components/services/formation/free-zone/FreeZoneFAQ.tsx`**
- Change background to `bg-secondary/40` to break repetition near the end of the page.
- Keep `grid-lines` overlay but tune opacity slightly for consistency with the rest.

Optional (only if still looks plain after above):
5) **`src/components/services/formation/FreeZonesGuide.tsx`**
- It uses `SplitSection` already; we can:
  - set `variant="subtle"` or
  - keep current but tune `overlayOpacity` / `overlayMasked`
- This will be done only if needed to preserve alternating rhythm.

---

## Alternating map (intended final rhythm)
This is the target surface alternation down the page:

- Hero (already rich) — custom
- Trust bar — keep as-is
- Benefits — **bg-secondary/40**
- Quick Answer — **bg-background**
- Comparison — already **subtle** (bg-secondary/40)
- Mid CTA — **bg-background** (with layered overlays added)
- Costs & fees — **bg-secondary/40** (with layered overlays added)
- Zones guide — **bg-background** (likely keep; adjust only if needed)
- Documents checklist — already **subtle** (bg-secondary/40)
- Setup steps — **bg-background**
- FAQ — **bg-secondary/40**
- Related services — already **bg-secondary/40** (we may switch this one to bg-background if the last third becomes too tinted; we’ll decide after preview)
- Formation CTA — keep as-is (already premium)

This preserves alternation while keeping your existing section order/content.

---

## Acceptance checks (what you should see in preview)
1) Page feels “designed” with a clear editorial rhythm (alternating surfaces).
2) No section becomes visually noisy; overlays remain subtle.
3) Text contrast stays strong (no readability issues).
4) Mobile: no weird banding/overlays cutting content; spacing remains consistent.

---

## Files expected to change
- `src/components/services/shared/ServiceBenefits.tsx`
- `src/components/services/formation/free-zone/FreeZoneMidCTA.tsx`
- `src/components/services/formation/free-zone/FreeZoneCostsFees.tsx`
- `src/components/services/formation/free-zone/FreeZoneFAQ.tsx`
- (Optional) `src/components/services/formation/FreeZonesGuide.tsx`

---

## Risks / notes
- Because `SplitSection` is shared across the site, we will **not** change it globally (to avoid unintended styling changes elsewhere). All changes will be localized to the Free Zone landing page’s own sections/components.
- We’ll keep overlay opacities conservative to avoid performance or “busy” visuals.

