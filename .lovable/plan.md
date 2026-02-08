
Goal
- Make /lp/company-formation feel calmer and more premium: smaller headlines, no “hard” shadows, better whitespace, images that crop cleanly, and ibelick-style overlays that are actually visible (in your current view they read as “not showing”).

What I found (current code)
1) Headlines are globally large
- src/index.css sets global:
  - h1: text-4xl → text-6xl (very big)
  - h2: text-3xl → text-4xl
- The LP then adds .lp-hero-title which tightens leading but does not reduce size; so the page still reads “too big” (hero + section headings).

2) Shadows feel “hard” in a few places
- Global .card-elevated uses: shadow-[0_4px_24px_hsl(var(--navy)/0.08)]
- Hero image container uses a stronger custom shadow:
  - shadow-[0_30px_80px_-40px_hsl(var(--navy)/0.30)]
- The small floating cards in the hero montage also use shadow_*; combined with borders it can feel harsh.

3) Images “not fitting” is mostly crop/aspect + inconsistent ratios
- SplitSection images are forced into a ratio (16/10) and use object-cover; if the source images aren’t composed for that crop, faces/subjects can be clipped.
- Booking image uses EditorialImage 16/10 too.
- Testimonials banner is 16/6 (very wide), which can create awkward crops depending on the source image.
- FAQ is 4/3; again depends on source composition.
- Your requirement “1080×1350” implies you want portrait exports (4:5) for better subject framing; we can use those sources and crop down for web safely.

4) “BG overlay not showing” is likely a contrast/coverage issue, not missing CSS
- overlay-ibelick-soft and overlay-ibelick-lines are defined in src/index.css and SectionBackgroundOverlay renders correctly.
- But:
  - The overlay gradients are intentionally very subtle (gold/navy alpha ~0.08–0.12), and
  - Some sections also set their own background colors (SplitSection subtle uses bg-secondary/40), which can wash the overlay out,
  - Plus the mask fades the overlay aggressively near edges.
- Net effect: on a white canvas with borders, it can look like “nothing is happening”.

Decisions already confirmed in previous thread
- Low motion
- Keep ibelick-inspired backgrounds
- Keep external avatars for HeroReviewStrip
- Mixed overlay usage (soft + lines) previously selected, but your latest feedback suggests we should increase visibility regardless.

Implementation plan (what I will change)

A) Reduce headline sizes for this landing page (hero + section headings) without changing the global site typography
Files
- src/index.css
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/shared/SplitSection.tsx (if needed for consistent H2 sizing)

Changes
1) Add LP-scoped typography utilities (so only this page changes)
- Create classes like:
  - .lp-h1 (smaller than global h1; tighter max width; calmer leading)
  - .lp-h2 (smaller than global h2; consistent rhythm)
  - .lp-lead (reduce .lead size on LP only: text-lg/ text-xl instead of text-xl/2xl)
2) Apply those classes in:
- CompanyFormationHeroMontage:
  - h1: add lp-h1 and remove reliance on global h1 sizing
  - lead paragraph: switch from .lead to lp-lead (keeps editorial feel, less loud)
- CompanyFormationLanding + SplitSection headers:
  - ensure section titles use lp-h2 consistently where headings feel too big

Acceptance criteria
- Hero headline feels premium and not “shouty” on mobile and desktop.
- Section titles are smaller, with more whitespace rather than bigger type.

B) Remove “hard” shadows; keep subtle borders and depth
Files
- src/index.css
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/consultation/CalendlyBooking.tsx
- (optional) src/components/shared/EditorialImage.tsx

Changes
1) Introduce LP-only surface styles
- Add utilities like:
  - .lp-card (border-border/60 + very soft shadow or no shadow)
  - .lp-card-strong (only where you truly need separation; still subtle)
2) Replace hard shadow usage in hero montage
- Reduce/remove:
  - hero main image container shadow-[0_30px_80px...]
  - mini cards’ shadow-[0_18px_50px...]
- Prefer border + subtle shadow (or none) to match “minimal modern”.
3) If you want site-wide softer shadows (optional)
- We can soften .card-elevated globally, but only if you confirm other pages are also “too shadowy”.
- Default plan: keep global unchanged; only change LP.

Acceptance criteria
- Cards feel like “paper” with subtle edges, not floating blocks.
- No obvious dark drop shadows on white.

C) Make ibelick overlays visibly present (fix “not showing”)
Files
- src/components/shared/SectionBackgroundOverlay.tsx
- src/index.css
- src/components/shared/SplitSection.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx (optional)

Changes
1) Increase overlay visibility in a controlled way
- Adjust overlay recipes:
  - Slightly increase alpha values (e.g., gold/navy stops from 0.08–0.12 → ~0.12–0.18)
  - Add one ultra-subtle line layer to soft variant so it reads even on large white sections
2) Reduce “washout” from section backgrounds
- In SplitSection, currently subtle variant adds bg-secondary/40.
- Change logic: when SectionBackgroundOverlay is used, keep the base section background transparent (or near-transparent), so the overlay can actually be seen.
3) Tweak masking so it doesn’t erase everything
- Current mask fades to transparent at ~78%.
- Adjust mask to keep pattern visible longer (e.g., fade later, or use a gentler mask gradient).

Acceptance criteria
- On your screen, each section has a visible, tasteful ibelick-style texture/gradient.
- Overlay remains decorative (does not reduce text contrast).

D) Fix image “fit” by improving crop control + swapping to portrait-first regenerated sources (1080×1350)
Files
- src/components/shared/EditorialImage.tsx
- src/components/shared/SplitSection.tsx
- src/components/consultation/CalendlyBooking.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx

Changes
1) Add crop controls to EditorialImage
- Add props such as:
  - imgClassName already exists, but we’ll standardize usage
  - objectPosition (or just pass a Tailwind class like object-[center_30%])
  - “focus presets” per section (top/center) to prevent cutting faces on mobile
2) Normalize ratios where current crops are risky
- Testimonials banner (16/6) is especially sensitive:
  - either change to a slightly less extreme banner ratio (still wide, but safer), or
  - keep ratio and regenerate an image composed for wide banners.
3) Regenerate the specific section images in 1080×1350
- Even though the page uses landscape ratios in some spots, portrait masters give us safer crops for people shots (more headroom).
- We will:
  - Generate 1080×1350 images per section with consistent lighting/grading and composition that works when cropped to 16/10 or 4/3.
  - Replace assets under src/assets/company-formation/lp/ (and hero if needed).
4) Apply per-section object-position tweaks
- For each section image, set object-position so the subject stays centered on mobile.

Acceptance criteria
- No awkward crops on mobile (faces not cut).
- Images feel consistent as a set (same warmth, contrast, gold/navy toning).

E) Improve whitespace / “design space” (mobile-first)
Files
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/shared/SplitSection.tsx
- src/components/consultation/CalendlyBooking.tsx
- src/index.css (if we add spacing utilities)

Changes
1) Increase whitespace by reducing visual weight, not by making everything taller
- Keep section-spacing but:
  - reduce dense card padding on mobile where it feels cramped
  - increase gap between headline/subtitle and content blocks for breathing room
2) FAQ: improve readability and tap comfort
- Slightly increase spacing inside Accordion triggers/contents; ensure consistent padding.
3) CTA stacks on mobile
- Ensure CTA buttons do not feel crowded; consistent vertical rhythm and margins.

Acceptance criteria
- Page feels “premium magazine”: calmer, more breathing room, fewer heavy surfaces.

Execution order (to minimize rework)
1) Overlay visibility fixes (so we can judge contrast with typography and images correctly)
2) Typography downscale (hero + section headings)
3) Shadow softening (LP only)
4) Image crop controls + per-section object-position
5) Regenerate and replace images at 1080×1350 (only after crop system is ready)
6) Mobile spacing polish pass and final QA

QA checklist (what you should test after implementation)
- Desktop + mobile:
  - Hero headline not oversized
  - No harsh shadows anywhere in hero/cards
  - Overlays visibly present in Calculator, SplitSections, Testimonials, Final CTA
  - Images crop well on mobile (no cut faces)
- Funnel still works end-to-end:
  - Calculator → results → estimate summary → booking reveal → Calendly loads

Assets to regenerate (based on your latest message)
- You selected “all images”, so the default will be:
  - Hero
  - How it works
  - What happens on the call
  - Booking
  - Testimonials banner
  - FAQ
All regenerated at 1080×1350 with consistent editorial lighting/grading and composed to survive cropping.

Notes / minimal-risk approach
- Typography and shadows will be scoped to this landing page first (so other pages aren’t unintentionally changed).
- If you later want the same calmer typographic scale site-wide, we can do that as a separate, deliberate change.