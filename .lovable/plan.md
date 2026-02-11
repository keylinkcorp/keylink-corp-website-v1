
Goal
- Redesign the two new sections so they visually match the modern, “Clean Corporate” aesthetic of “How it works” and “What happens on the call”.
- Fix the inconsistency you’re seeing by aligning: spacing rhythm, typography, background treatment, card styling, and by adding high-quality images.

What I found (current state)
- CompanyFormationSegmentSwitcher is a plain section with container/max-w and a grid. No SplitSection wrapper, no background overlay, and no image. This makes it feel like a different “system” than the SplitSection-based sections.
- CompanyFormationPricingSection has a SectionBackgroundOverlay, but still uses a custom two-column grid and no image. It reads visually different from the SplitSection sections (which have consistent header spacing + image treatment + overlay behavior).

Decisions you already confirmed (from your answers)
- Images: “generate by AI”
- Layout: Split + sticky image (match How it works / What happens on the call)
- Segment UI: Keep cards, but restyle to match

Implementation approach (high level)
- Convert BOTH sections to use the shared SplitSection component so they inherit:
  - consistent section padding (section-spacing)
  - consistent header rhythm
  - consistent background overlay pattern usage
  - consistent image framing/treatment
- Add one sticky image per section (AI-generated, clean corporate, no logos/watermarks).
- Restyle the segment cards + details panel so they match the card rhythm used elsewhere (rounded-2xl, border tones, muted fills, spacing).

Step-by-step changes (code)
1) Generate and add two new images (AI-generated)
   - Create 2 portrait images (recommended 4:3 or 16:10 depending on what looks best in the SplitSection column):
     1) Segment section image (guidance / consultation / founder setup context)
     2) Pricing section image (calculator / cost planning / finance discussion context)
   - Visual constraints for generation prompts:
     - “Clean corporate”, neutral professional lighting, realistic photography style
     - No visible brand logos, no watermarks, no readable sensitive documents
     - Color mood similar to existing lp imagery (balanced neutrals; not overly saturated)
   - Add them under: src/assets/company-formation/lp/
     - e.g. guidance-portrait.jpg
     - e.g. pricing-portrait.jpg
   - This keeps asset organization consistent with existing how-it-works / what-you-get / booking images.

2) Redesign CompanyFormationSegmentSwitcher using SplitSection + sticky image
   - Replace the current <section> wrapper with:
     <SplitSection
       badge="Choose your situation"
       title="Get guidance that matches your setup"
       subtitle="Pick the closest match—we’ll highlight the main considerations, then you can calculate a fast estimate."
       useLpHeadings
       imageSrc={newGuidanceImage}
       imageAlt="Founder reviewing a company setup plan with a consultant"
       imagePosition="right" (or left if it reads better)
       imageSticky
       contentColSpanLg={7}
       imageColSpanLg={5}
       variant="subtle" or "default" (we’ll pick the one that best matches surrounding sections)
       backgroundVariant="ibelick-soft" (or lines) with a controlled overlayOpacity for subtlety
       imageRatio={4/3} or {16/10}
       imageTreatment="none" + imageFrame="flat" (to match What happens on the call), or keep editorial if that’s the predominant style
     >
   - Inside the SplitSection content area:
     - Keep the 2-column segment card grid on the left of the content column (as today), but restyle:
       - Active: subtle ring + slightly stronger border and calmer background
       - Hover: avoid “hover:bg-accent” if it’s too loud; use a muted hover (bg-muted/30) and border emphasis instead
       - Ensure consistent padding and rounded corners (rounded-2xl) and border strength like other lp-cards
     - Keep the details panel below or beside within the content column:
       - Option A (recommended): Keep the segment card grid first, then the details panel below it on mobile; on desktop, use a two-up within the content column (cards left, details right) while still letting the overall SplitSection manage the image column.
       - Ensure bullets and CTA block spacing matches other sections: mt-6/7, gap-3, and a light “helper” line at the bottom.
   - Preserve existing behavior:
     - state selection, URL preselect logic, and scroll CTAs remain unchanged.

3) Redesign CompanyFormationPricingSection using SplitSection + sticky image
   - Replace the custom <section> grid with:
     <SplitSection
       badge="Pricing"
       title="What affects your company formation cost"
       subtitle="Costs vary mainly by activity, visas, office, and shareholder profile. Use the calculator for a fast estimate—then we’ll confirm exact fees on the free call."
       useLpHeadings
       imageSrc={newPricingImage}
       imageAlt="Professional discussion about costs and business setup"
       imagePosition="left" (to alternate visual rhythm vs segment section) or right if the flow demands
       imageSticky
       contentColSpanLg={7}
       imageColSpanLg={5}
       variant="default" or "subtle" (we’ll choose to best match the next section)
       backgroundVariant="ibelick-lines" with lower overlayOpacity (to match the brand subtlety)
       imageRatio={4/3}
       imageTreatment="none"
       imageFrame="flat"
       imageOverlayStrength around 0.35–0.55 (consistent with existing LP imagery)
     >
   - Inside the SplitSection content area:
     - Make “Key cost drivers” a clean card block (lp-card p-6/7).
     - Chips remain, but adjust to feel more “designed”:
       - consistent chip sizing, slightly more airy spacing, lighter border (border-border/25–40)
     - “Typical ranges (guidance)” becomes a second card block with a modern nested highlight panel (lp-card-flat).
     - Keep both CTAs; ensure button sizing matches the rest of the page.
   - Keep the “directional, not a legal quote” note but make it align with spacing and typography.

4) Ensure page-level consistency and spacing
   - CompanyFormationLanding.tsx should remain mostly unchanged (it already inserts the sections in the right place).
   - We’ll verify the visual rhythm between:
     - Hero → Trust bar → Segment switcher (new SplitSection) → Pricing (new SplitSection) → Calculator (existing section)
   - If needed, we’ll tune:
     - section spacing (SplitSection uses section-spacing; calculator uses section-spacing-sm)
     - overlay opacity so adjacent sections don’t look “pattern-heavy”
     - alternating image positions for a more premium cadence

5) QA checklist (what you will verify in preview)
   - Visual:
     - Both sections now look like they belong to the same design system as “How it works” and “What happens on the call”.
     - Images render crisply, are on-brand, and have no weird artifacts (no logos/watermarks).
     - Spacing: more breathable; headings and card blocks align in rhythm with other sections.
   - Functional:
     - Segment selection still works; the bullets and “For…” content changes correctly.
     - “Calculate estimate” scrolls to #start; “Book free call” scrolls to #book.
     - URL-based preselect still works (?intent= / ?utm_term=).
   - Responsive:
     - Mobile: cards stack cleanly, no horizontal overflow, image not overly tall, CTAs remain visible.
     - Desktop: sticky image behaves like other sticky sections; no overlap.

Potential follow-up (optional, but recommended)
- Add subtle iconography (lucide icons) to segment cards (small, consistent) to increase scannability, while still staying “clean corporate”.
- Add one short reassurance line under pricing (e.g., “Transparent fees, confirmed after we review activity + shareholders”) if you want stronger conversion support.

Dependencies / notes
- We’ll generate images first so the section layout can be tuned around their composition (object-position tweaks like object-[center_35%] may be needed, as used elsewhere).
- We’ll reuse SplitSection styling choices that already look good on your LP (flat frame, controlled overlays, sticky images).

Files involved (expected)
- src/pages/landing/company-formation/CompanyFormationSegmentSwitcher.tsx (refactor to SplitSection + image)
- src/pages/landing/company-formation/CompanyFormationPricingSection.tsx (refactor to SplitSection + image)
- src/pages/landing/CompanyFormationLanding.tsx (only if imports for new images are added here instead of inside each section)
- src/assets/company-formation/lp/* (2 new generated images)
