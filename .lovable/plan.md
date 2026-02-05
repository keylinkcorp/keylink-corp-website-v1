
Goal
- Redesign /free-zone-in-bahrain into a cohesive, modern, minimalist, image-led landing page that matches the look/feel of your best service pages, using the same background overlays/pattern language and consistent spacing/typography.

What I will reuse (to match your existing design language)
- Background overlays already used in other pages:
  - ServiceHero.tsx uses layered radial gradients + dot grid overlay.
  - ServiceHeroSplit.tsx uses radial gradients + pattern-grid-lines-light (defined in src/index.css).
  - Several service sections (ServiceWhyChoose, etc.) use a masked dot grid (radial mask) to keep sections premium without looking busy.
- Existing layout/spacing conventions:
  - section-spacing utility on SplitSection sections.
  - container + max-w-6xl patterns.
  - card-elevated / card-elevated-hover patterns.

Key problems causing “not looks nice”
- SplitSection currently only alternates flat backgrounds (bg-background vs bg-secondary/40). It lacks the subtle overlay/pattern treatment that makes other pages feel premium.
- The free-zone pillar page is a stack of good sections, but it needs stronger “page rhythm”:
  - consistent section headers
  - stronger visual anchors (images + overlays) every 1–2 sections
  - clearer conversion rails (CTA repeated in the right places)
- Typography consistency: some headings/paragraphs can be tightened so H2s don’t feel oversized and spacing feels more “designed”.

Implementation plan (no backend; UI/UX + SEO-safe)

Phase 1 — Adopt the same background overlay system across the landing page
1) Create a small reusable “SectionBackgroundOverlay” pattern (new shared component) that can be dropped into sections:
   - Supports variants like:
     - “dots” (radial dot grid) with optional maskImage (like ServiceWhyChoose)
     - “grid-lines-light” (pattern-grid-lines-light) at controlled opacity
     - “radial-gold/navy” (using the existing radial-gradient approach from ServiceHero/ServiceHeroSplit)
   - Keeps overlays purely decorative (absolute inset-0, pointer-events-none) so content remains clean and readable.

2) Upgrade SplitSection (src/components/shared/SplitSection.tsx) to support overlay backgrounds:
   - Add new prop(s), for example:
     - backgroundVariant: "plain" | "subtle-dots" | "grid-lines" | "radial"
     - overlayOpacity control (optional)
   - Change the section wrapper to “relative overflow-hidden” and render the overlay layers behind content:
     - base background color (bg-background / bg-secondary/30)
     - overlay grid/dots with controlled opacity + mask
     - optional radial highlight to keep the brand feel consistent with the hero

Outcome
- Every split section (Quick Answer, Comparison, Costs, Documents, Steps) will automatically look like it belongs to the same “design system” as CRRenewal and other service pages.

Phase 2 — Redesign the pillar page layout flow (more “landing page”, less “stacked blocks”)
3) Refactor src/pages/FreeZoneInBahrain.tsx section sequencing + add one cohesive “landing page rail”:
   - Keep ServiceHeroSplit at the top, but tune it to match the hero overlay style used elsewhere:
     - unify background overlays (radial + either dots or grid-lines-light; not both too strong)
     - ensure headline typography is controlled (avoid overly large H1 on wide screens if it currently feels too big)
   - Keep ServiceTrustBar immediately after hero (already there).
   - Keep ServiceBenefits next (already there), but ensure it uses the same background/pattern language or a clean neutral background so it transitions smoothly into SplitSection blocks.
   - Group the core “decision-making” sections into a consistent alternating rhythm:
     - Quick Answer (image right)
     - Comparison (image left)
     - Costs & Fees (image right)
     - Documents checklist (image right or left depending on rhythm)
     - Setup Steps (image left)
   - Add a slim mid-page CTA band (optional) that matches existing CTA styling (btn-gold + outline), so conversion doesn’t rely only on the hero and footer CTA.

4) Apply consistent spacing rules:
   - Standardize section top/bottom paddings (use section-spacing everywhere, avoid one-off py-20 vs section-spacing mismatches unless intentional).
   - Ensure “container” usage is consistent (container → max-w-6xl).

Outcome
- The page will feel intentionally designed with a clear narrative arc and consistent visual rhythm.

Phase 3 — Make visuals feel “rich” without clutter (more relevant images + better usage)
5) Improve how images are presented (without making it heavy):
   - Standardize image treatments in SplitSection:
     - same border radius, shadow, border
     - optional subtle overlay gradient on images (very light) to keep brand tone
   - Add small “image anchors” where currently sections are card-only (if any remain):
     - optional mini image strip inside Comparison or under it (only if it improves aesthetics; otherwise keep minimalist)

6) Ensure performance + UX:
   - Use eager only for hero image; keep all other images loading="lazy" (already in SplitSection).
   - Ensure AspectRatio is used consistently to prevent layout shift.
   - Confirm alt text is descriptive and not keyword-stuffed (good for accessibility and safer SEO).

Outcome
- “Many images” but still minimalist: images are structured, consistent, and don’t overwhelm the layout.

Phase 4 — Align the 4 zone cluster pages to the same modern landing template
7) Update each zone page (BLZ/BIIP/BIW/Sitra) to match the pillar styling:
   - Ensure they use ServiceHeroSplit with the same background overlay style and consistent padding.
   - Replace any ad-hoc section styling with SplitSection blocks where helpful:
     - “Who it’s best for” (cards)
     - “Typical facility & approvals” (cards)
     - “Cost drivers” (short, scannable)
   - Keep BreadcrumbList JSON-LD and ensure it’s consistently implemented once per page.
   - Interlinking:
     - add “Back to comparison” + “Next zone” links in a consistent UI component (small card row), so topical cluster feels deliberate.

Outcome
- Cluster pages won’t look “thin” or visually inconsistent, which supports both UX and topical authority.

Phase 5 — Typography tuning (pixel-perfect, not oversized)
8) Tighten headline sizes across hero + SplitSection headers:
   - Keep H1 strong but slightly smaller than “huge marketing hero” if needed.
   - Ensure H2 sizing is consistent and doesn’t jump between components.
   - Standardize paragraph sizing (text-lg leading-relaxed) but avoid overly large blocks that feel “template-like”.

Outcome
- More premium feel and less “generated page” look.

Phase 6 — Final QA checklist (UI/UX + SEO)
9) Visual QA
- Check section transitions (background overlays not too strong, no harsh contrast jumps).
- Confirm cards align in grids on common breakpoints (mobile/768/1024/1280).
- Verify whitespace is generous but not excessive.

10) Interaction + conversion QA
- Test primary CTA buttons in hero and mid-page CTA.
- Test checklist download works.
- Test internal links (CR, lease, visas, and zone deep-dives).

11) SEO QA
- Confirm only one H1 on the pillar page.
- Confirm canonical + meta description remain correct.
- Ensure FAQ JSON-LD remains present and not duplicated after navigation/hot reload.

Files that will be involved (expected)
- src/components/shared/SplitSection.tsx (enhance with overlay background support)
- src/components/services/shared/ServiceHeroSplit.tsx (tune overlay to match site’s best hero style)
- src/pages/FreeZoneInBahrain.tsx (layout flow + consistent section rhythm + optional mid-page CTA band)
- src/components/services/formation/free-zone/*
  - minor adjustments to align section props (backgroundVariant, image positions, card density)
- src/pages/free-zone/BLZ.tsx, BIIP.tsx, BIW.tsx, Sitra.tsx (match template + add consistent internal linking blocks)
- (Optional) new shared helper component for section backgrounds if keeping SplitSection lean

Acceptance criteria (what “done” looks like)
- The pillar page visually matches your premium service pages (same overlay language, spacing, card style, typography).
- The page feels “modern minimalist” but not empty; images are present and consistent.
- No “random-looking” sections; all sections follow a clear header → content → visual pattern.
- Mobile looks intentional (no cramped cards, no oversized headings).
- SEO fundamentals preserved (titles, meta, canonicals, schema intact).
