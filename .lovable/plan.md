
Goal (your request)
- Remove “hard” shadows across the entire /lp/company-formation page and simplify the design.
- In the hero, keep only the main image with the bottom label “Free 30‑minute call • Google Meet” (remove extra floating cards/decoration).
- Redesign the “What happens on the call” section to match a simpler, cleaner card style and spacing (more whitespace, less visual noise).

What I found in the current code (why it still feels “shadowy”)
- The LP already uses .lp-card and .lp-card-flat, but:
  - .lp-card still has a shadow: `shadow-[0_2px_14px_hsl(var(--navy)/0.06)]` (light, but still visible on white).
  - Some blocks still use “glass” surfaces (glass-card-dark / glass-card-light) that can read heavy.
  - The hero montage still has extra decorative layers (mesh gradient + floating orb) and two extra side cards (Offer + Proof), even if they’re “flat”; this makes the hero feel busy.
- “What happens on the call” currently uses a grid of .lp-card items plus an extra CTA panel underneath; we can simplify it into a tighter, cleaner layout.

Implementation approach (simple, minimal, premium)
We’ll implement a “Flat LP” style: borders + whitespace + very subtle background overlays (optional), and essentially no drop shadows.

A) Remove hard shadows everywhere on this landing page (LP-scoped only)
Files
- src/index.css
- src/pages/landing/CompanyFormationLanding.tsx
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/components/shared/SplitSection.tsx
- src/components/consultation/CalendlyBooking.tsx

Changes
1) Make LP cards truly flat
- Update `.lp-card` to remove drop shadow entirely (or near-zero).
  - Option 1 (recommended): `.lp-card` becomes border-only, no shadow (same as `.lp-card-flat`).
  - Keep `.card-elevated` global untouched, so other pages aren’t affected.
- Standardize usage: replace remaining `.lp-card` usages in LP sections where we want flat surfaces with `.lp-card-flat` (or keep `.lp-card` if we redefine it to be flat).

2) Reduce “glass” usage for a simpler look
- Replace `glass-card-dark` panel in CalendlyBooking (right column) with a flat card style:
  - Use `.lp-card-flat` + subtle `bg-muted/20` (instead of dark navy glass).
  - Keep content identical (phone/email/WhatsApp), just calmer visuals.

Acceptance check
- No visible drop shadows on cards; everything reads clean and minimal with borders + whitespace.

B) Hero simplification: keep only main image + the “Free 30‑minute call • Google Meet” bar
File
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx

Changes
1) Remove busy background decoration
- Remove/disable:
  - `mesh-gradient-gold`
  - `floating-orb`
- Keep a simple base like `bg-muted/10` or plain background (still premium, less noisy).

2) Remove secondary floating hero cards
- Remove the two absolutely-positioned blocks:
  - “Offer” card (left)
  - “Trusted by founders worldwide” card (right)
- Keep only the main hero image card.

3) Keep the bottom label inside the hero image
- Preserve this existing label (already present and matches your request):
  - “Free 30‑minute call • Google Meet”
- Make it simpler:
  - Convert `glass-card-light` to `.lp-card-flat` (or a minimal translucent chip) so it doesn’t look like another heavy layer.

Acceptance check
- Hero looks like: clean copy + one strong image + one simple bottom label. No side cards, no blobs.

C) Redesign “What happens on the call” section (simple cards + whitespace)
File
- src/pages/landing/CompanyFormationLanding.tsx

Target area (current)
- The SplitSection titled “What happens on the call” has:
  - 6 benefit cards in a grid
  - A second CTA card underneath (“Prefer to talk now?” with buttons)

New design (simple + matches your instruction)
1) Keep the section image and make it feel intentional
- Keep the section image on the left (as-is), but ensure it uses the same flat border-only style:
  - Image container uses `.lp-card-flat` and the EditorialImage treatment remains subtle.
- Add a small caption/chip near the image or under the heading:
  - “Free 30‑minute call • Google Meet”
  - This aligns with what you said to “keep only this”.

2) Simplify benefit cards
- Change each benefit item to a minimal “flat card row”:
  - `.lp-card-flat` + `p-4 sm:p-5`
  - small icon (Check) and one line of text
  - remove any shadow, keep consistent gap and whitespace
- Consider switching layout to a single column on mobile and two columns only on md+.

3) Remove the extra CTA panel beneath (or make it minimal)
- Remove the “Prefer to talk now?” block from this section (recommended for simplicity).
- The WhatsApp/Call actions already exist in hero and elsewhere; if you still want them here, we’ll render them as two simple outline buttons below the benefit grid without an extra card container.

Acceptance check
- “What happens on the call” becomes visually calm: one image, one simple chip line, clean benefit list, no heavy extra panel.

D) Whitespace and spacing pass (simple rhythm)
Files
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/shared/SplitSection.tsx

Changes
- Increase breathing room by:
  - Slightly increasing vertical gap between heading/subtitle and content (`mt-6`/`mt-8`).
  - Reducing card padding inconsistencies (use a consistent `p-4/5/6` scale).
- Optional: change SplitSection subtle variant background
  - Currently `bg-secondary/40` can reduce contrast and make everything look “flat grey”.
  - We can keep sections mostly white and let the overlay (if used) add depth.

Acceptance check
- Page feels more “designed” and premium via consistent spacing, not via shadows.

QA checklist (you should verify in preview)
- On /lp/company-formation:
  - Hero shows only the main image + the “Free 30‑minute call • Google Meet” label (no extra floating cards).
  - No heavy or noticeable drop shadows across calculator, split sections, testimonials, booking, FAQ.
  - “What happens on the call” is redesigned to simple flat cards with more whitespace.
  - End-to-end flow still works: Calculator → See results → booking reveals → Calendly widget loads.

Notes about your uploaded screenshots
- I’ll use your screenshots as the style reference: border-only cards, minimal surfaces, clean spacing, and no “floating” look.
- If you want the “Free 30‑minute call • Google Meet” line to appear only once on the whole page (hero only), I’ll keep it only in the hero and not repeat it inside “What happens on the call”. If you prefer it repeated as a section chip, I’ll add it there too (small, not dominant).
