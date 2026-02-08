
Goal
- Make /lp/company-formation feel like a “Vibe AI designer” output: modern, calm, premium, minimal motion, with sophisticated background overlays inspired by https://bg.ibelick.com/.
- Keep conversion flow identical (Hero → Calculator → Summary → unlock Booking → Proof/FAQ → Final CTA).

What’s making it feel “not nice” right now (based on code)
- Visual language is mixed:
  - Landing uses design-system classes (card-elevated, glass-card-light), but CalendlyBooking uses its own “shadow-lg + border/50” cards and a very dark bg-primary block; it reads like a different product.
  - SplitSection badge styling is different from the rest of the landing (uppercase accent text vs section-badge pills).
- Images are present in each section, but they aren’t “designed into” the layout:
  - They sit as plain photos in cards. Modern landing pages usually apply consistent treatment (overlay, subtle grain, consistent aspect ratios, consistent corner radii).
- Motion is heavier than necessary in some parts (CalendlyBooking uses multiple whileInView animations; hero montage has motion elements). You asked for low motion.

Design direction we’ll implement
- “Minimal modern + luxury editorial restraint”:
  - More whitespace, softer dividers, fewer heavy shadows.
  - Gold accent used only as micro-accent (badges, icons, key numbers), not as large blocks.
- “Ibelick-style backgrounds”:
  - Subtle layered gradients + thin-line patterns behind sections.
  - Use masking so patterns fade at edges.
- “Editorial image system”:
  - Consistent image ratio, consistent border radius, consistent overlay and optional grain.
  - Images feel cohesive as a set even if individually different.

Implementation steps (what I will change)

1) Create an “Ibelick-inspired background overlay system”
Files:
- src/components/shared/SectionBackgroundOverlay.tsx
- src/index.css

Changes:
- Add new overlay variants to SectionOverlayVariant, e.g.
  - "ibelick-soft" (multi-radial gradient + subtle blur look)
  - "ibelick-waves" (very subtle repeating linear gradients)
  - "ibelick-noise" (optional, very low opacity)
- Keep existing variants for backwards compatibility.
- Add CSS utilities for these overlays in index.css:
  - New background-image recipes modeled after ibelick-style layers:
    - multiple radial gradients with very low alpha
    - thin grid/line pattern at 2–4% alpha
  - Add one reusable mask utility to fade edges (similar to current maskImage approach).

Outcome:
- Every major section can opt into a modern background “treatment” without custom per-section hacks.

2) Build a consistent “EditorialImage” treatment (so images look premium, not stocky)
Files:
- src/components/shared/SplitSection.tsx
- src/components/consultation/CalendlyBooking.tsx
- (optional) a tiny helper component if needed, e.g. src/components/shared/EditorialImage.tsx

Changes:
- Apply consistent image styling everywhere images appear:
  - consistent rounding (rounded-3xl or keep rounded-2xl but unify)
  - consistent border (border-border/60)
  - consistent overlay inside image container:
    - a subtle navy-to-transparent gradient (for depth)
    - a subtle gold highlight corner (very low opacity)
  - optional micro-grain/noise overlay (ultra subtle, 1–2% opacity) to unify AI images
  - consistent hover: remove “zoom glow” on non-hero sections to keep low motion; keep static or ultra-subtle.
- Update SplitSection:
  - Replace badge rendering to use the same pill style as the landing: className="section-badge" (not uppercase accent text)
  - Add new props:
    - imageTreatment?: "none" | "editorial" (default "editorial")
    - imageOverlayStrength?: number (default subtle)
  - Ensure stacked and split modes both use the same treatment.
- Update CalendlyBooking:
  - Replace ad-hoc card styles (bg-background rounded-2xl shadow-lg border...) with design-system surfaces:
    - use card-elevated for the widget container and info cards
    - replace the bg-primary “Contact Details Card” with a premium but lighter surface:
      - either glass-card-dark or card-elevated with a subtle navy gradient header
  - Apply the same EditorialImage treatment to the booking image panel so it matches SplitSection images.

Outcome:
- All section images look like one coherent design system (not “random photos placed in cards”).

3) Reduce motion to “low motion” across landing experience
Files:
- src/components/consultation/CalendlyBooking.tsx
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- (optional) any other landing blocks using framer-motion heavily

Changes:
- CalendlyBooking:
  - remove per-item animated list staggering
  - keep only one subtle fade-in for the whole block (or remove whileInView entirely)
- Hero montage:
  - keep only minimal entrance fade (or none)
  - remove hover-zoom-glow on the hero image if it feels too “effect-y”
- Trust bar:
  - either remove motion or reduce to a single subtle fade for the entire bar.

Outcome:
- Page feels modern and calm, not “animated template”.

4) Tighten spacing & hierarchy (make it feel more “designer”)
Files:
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/shared/SplitSection.tsx
- src/index.css (minor)

Changes:
- Normalize all section headers:
  - consistent spacing between badge → title → subtitle
  - consistent max-width for subtitles
- Increase whitespace slightly between blocks inside SplitSection (steps grid, benefit grid, CTA cards) so it breathes.
- Ensure image heights are consistent:
  - standardize AspectRatio across sections (e.g., 4/3 or 16/10 depending on look)
  - avoid very short banners (testimonials image at h-56 may feel arbitrary); use ratio-based containers instead.
- Align Testimonials + FAQ layouts to the same grid rhythm used by SplitSection:
  - Testimonials:
    - keep the hero image banner but make it editorial (ratio container + overlay)
    - refine testimonial cards to be calmer (less hover translate, less shadow jump)
  - FAQ:
    - keep image + accordion, but unify padding and borders to match the rest.

Outcome:
- The whole page reads like one premium layout system.

5) Optional: Regenerate only the weakest images (if any still feel “AI-stock”)
No code dependency (asset-only), but we’ll do it if needed.
- We’ll keep your people-focused direction, but push prompts toward:
  - candid editorial moments
  - minimal props
  - consistent lens/lighting
  - no exaggerated smiles / no staged handshake clichés
- If you tell me which section image feels most “off”, we regenerate that single one first.

QA checklist (you will verify in preview)
- Visual cohesion:
  - Do all sections feel like one design system (cards, overlays, image treatment)?
  - Do backgrounds feel modern like ibelick-style layers (subtle, not noisy)?
- Funnel:
  - Calculator still gates booking
  - Summary still displays correctly
  - Booking still reveals and Calendly loads
- Responsiveness:
  - SplitSection stacking looks intentional on mobile
  - No awkward image crops; faces not cut off
- Performance:
  - Images still lazy-load (except hero)
  - No heavy animation jank

Files expected to change
- src/components/shared/SectionBackgroundOverlay.tsx (new overlay variants)
- src/index.css (new overlay utilities; optional grain utility)
- src/components/shared/SplitSection.tsx (badge consistency + editorial image treatment)
- src/components/consultation/CalendlyBooking.tsx (unify surfaces + image treatment + reduce motion)
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx (reduce motion/effects, optional)
- src/pages/landing/CompanyFormationLanding.tsx (spacing rhythm + testimonials/faq image ratio polish)

Decision points (only if needed during implementation)
- Pick one primary overlay variant for most sections (so it’s cohesive), and reserve others for special moments (hero, calculator band, final CTA).
- Confirm whether you want the booking “contact panel” to stay dark-navy or switch to light surfaces with a navy header strip (usually looks more modern/minimal).