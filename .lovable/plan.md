
Scope (what you asked)
- Add a hero-section social proof bar (reuse the same HeroReviewStrip from the main service pages).
- Refine typography hierarchy for a more editorial feel (tighter H1/H2 rhythm, better subtitle widths, cleaner badge placement) without changing the page structure/flow.
- Apply the ibelick overlay system consistently to the remaining sections: Calculator band + Testimonials + Final CTA, so the entire LP feels like one design system.
- Do a mobile-first spacing pass (image crops, accordion spacing, CTA stacks) so it feels premium on small screens.

Decisions captured (from your answers)
- Hero social proof: Use HeroReviewStrip.
- Avatars: Keep external avatars (randomuser.me) as-is.
- Overlay consistency: Mixed — Soft for Calculator + Final CTA, Lines for Testimonials.

Key files involved
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- src/components/shared/HeroReviewStrip.tsx (reuse; minimal/no changes expected)
- src/components/shared/SectionBackgroundOverlay.tsx (already supports ibelick-soft / ibelick-lines)
- src/index.css (small, scoped typography/spacing utilities if needed)

Implementation plan (exact changes)

1) Hero: add social proof bar (HeroReviewStrip) in the hero copy column
File: src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- Import HeroReviewStrip from "@/components/shared/HeroReviewStrip".
- Place the strip directly under the CTA buttons (or under the “Free • No obligation…” line) so it reads as immediate reassurance.
- Keep low motion: no framer-motion; just render static content.
- Mobile polish:
  - Ensure the strip wraps gracefully (it already stacks to column on small screens).
  - Reduce spacing so it doesn’t push the fold too far down: tighten margins around CTAs/strip.

Acceptance check
- Hero shows Google/Trustpilot strip consistently, with correct spacing on mobile/desktop.

2) Typography hierarchy: “editorial tightening” without layout changes
Files:
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- (optional) src/index.css (scoped utilities only)

Hero (H1 + lead + bullets)
- In CompanyFormationHeroMontage:
  - Make H1 line-height slightly tighter on mobile and reduce visual “jump” between lines:
    - Add a hero-specific className to h1 (e.g., "lp-hero-title") and apply tighter leading + balanced max width.
  - Constrain the lead paragraph width a little more on desktop (max-w) to feel more editorial and less “wide marketing text”.
  - Align the small top line (“Google Ads Offer…”) into a badge-like chip or keep as-is but reduce visual noise (lighter color, slightly tighter tracking).

Section headings (H2 + subtitles)
- In SplitSection, headings are already consistent; most changes are in CompanyFormationLanding where there are manual h2 + p blocks (Booking, Testimonials, Final CTA).
- Update those blocks to match SplitSection header rhythm:
  - Consistent spacing: badge → title (mt-3) → subtitle (mt-4) and consistent subtitle max width (max-w-2xl or max-w-3xl).
  - Ensure subtitles don’t run full width on large screens.

Global CSS (only if needed)
- Avoid changing global h1/h2 for the whole site. If we need more finesse, add 1–2 scoped utility classes in src/index.css (e.g., .lp-hero-title, .lp-section-subtitle) and apply only on this LP.

Acceptance check
- H1 feels calmer and tighter (especially on mobile), subtitles have consistent widths, badges sit consistently above headings.

3) Overlay consistency: replace “one-off” backgrounds with SectionBackgroundOverlay system
File: src/pages/landing/CompanyFormationLanding.tsx

3a) Calculator band: migrate to ibelick-soft overlay
Current state
- Calculator uses:
  - mesh-gradient-gold
  - pattern-grid-lines-light
These are fine but don’t use the new overlay system, so it can feel like a different design layer.

Change
- Replace the two absolute overlay divs with:
  - <SectionBackgroundOverlay variant="ibelick-soft" opacity=... masked=... />
- Keep the card-elevated + noise-texture on the calculator container (that’s part of the premium surface system).
- Tune opacity so the calculator remains the primary focus (subtle background, not loud).

Acceptance check
- Calculator section background matches the same “ibelick” language as the SplitSections.

3b) Testimonials section: add ibelick-lines overlay behind the section
Current state
- Testimonials section has no overlay behind it; only the image banner has overlays.

Change
- Wrap Testimonials section with relative/overflow-hidden and add:
  - <SectionBackgroundOverlay variant="ibelick-lines" masked opacity=... />
- Keep the testimonial image banner as-is (it already has editorial overlays), but ensure the overall section reads as one system.

Acceptance check
- Testimonials section background is consistent with the rest of the page and still feels clean/minimal.

3c) Final CTA: switch from gold radial-only to ibelick-soft (keep gold as micro-accent)
Current state
- Final CTA card uses overlay-gold-radial-center.

Change
- Add a SectionBackgroundOverlay at the section level with ibelick-soft (masked).
- Inside the CTA card:
  - Either remove overlay-gold-radial-center, or reduce it significantly and let ibelick-soft do most of the work.
  - Keep gold as subtle accent, not a dominating wash.

Acceptance check
- Final CTA looks like the same “system” as the rest (not a different decorative style).

4) Mobile-first spacing pass (premium feel on small screens)
Files:
- src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- src/pages/landing/CompanyFormationLanding.tsx
- (optional) src/components/shared/SplitSection.tsx (only if we can improve mobile defaults without side effects)

Hero
- Tighten top/bottom padding slightly on mobile so the hero doesn’t feel tall.
- Ensure CTAs are full-width stacked cleanly with consistent gaps.
- Ensure HeroReviewStrip doesn’t feel cramped: add a small top margin and allow it to stack.

SplitSections (“How it works”, “What happens on the call”)
- Verify card padding on mobile:
  - Step cards and benefit cards may feel slightly heavy; consider reducing p-6 → p-5 on mobile only (keep desktop).
- Confirm image crops do not cut off faces:
  - If any image is cropping poorly on mobile, adjust object-position per image (e.g., object-[center_30%]) without changing aspect ratio.

Booking section
- Title/subtitle spacing aligned with the new rhythm.
- Ensure CalendlyBooking columns stack with comfortable spacing:
  - Confirm image panel + cards don’t feel too long; adjust spacing between blocks on mobile (space-y-5 instead of 6, etc.) while staying breathable.

FAQ
- Accordion container currently: card-elevated p-2 md:p-3
- Improve mobile tap targets and whitespace:
  - Slightly increase inner padding on mobile if triggers feel tight, or adjust AccordionTrigger spacing.
  - Keep the image above accordion on mobile (current grid will stack; confirm the order is ideal).

Acceptance check
- On mobile, the page feels “designed”: consistent spacing, no cramped accordions, CTAs look intentional, images crop well.

QA / verification checklist (you will test in preview)
- End-to-end funnel still works:
  - Complete calculator → summary appears → booking unlocks → Calendly loads.
- Visual consistency:
  - Calculator, Testimonials, Final CTA all show ibelick overlays with the chosen variants (soft/lines/soft).
- Mobile polish:
  - Hero + review strip + CTAs feel clean
  - SplitSections stack nicely
  - FAQ accordion comfortable to tap/read
- Performance:
  - Hero stays eager/high priority; all other images remain lazy.

Out of scope (unless you ask)
- Regenerating images again (we can do it later if a specific one still feels off-brand).
- Changing the conversion flow or adding extra steps/capture forms.
