
Goal
- Enhance `/lp/company-formation-consultancy-modern` with a MagicUI-inspired light/clean “product landing” look:
  - Softer gradient wash + subtle grid texture in the hero
  - Centered “mock panel” media frame (using an existing project image)
  - Stronger trust/logos strip with clearer hierarchy
  - Calculator section that feels like the product centerpiece
  - New 6-card “feature grid” section to add structure
  - Upgraded final CTA to a premium gradient banner
- Keep the page mostly static (no scroll animations; minimal hover only).

What we now know (decisions locked)
- Hero mock panel media: use an existing project image (no external screenshots).
- “Other” hero upgrade: nothing extra beyond the selected upgrades.

What I will inspect/change (by file)
1) `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
   - Add a new prop to avoid impacting other pages that reuse this hero:
     - `showMockPanel?: boolean` (default: false)
     - `mockPanelCta?: { label: string; onClick: () => void }` (optional)
     - `mockPanelImageSrc?: string` (optional; default to an existing on-brand image asset already used in this landing page or another consultancy asset)
     - `mockPanelImageAlt?: string` (optional)
   - Replace the existing “flat muted background” (`bg-muted/20`) with layered background:
     - `mesh-gradient-gold` at low opacity
     - `pattern-grid-lines-light` via `SectionBackgroundOverlay variant="grid-lines"` or directly as a class (depending on what’s already used elsewhere)
     - A soft radial mask/vignette using existing `masked` behavior (via `SectionBackgroundOverlay`) to keep edges calm
     - Keep text contrast safe (no dark overlays behind copy).
   - Insert the “Hero Mock Panel” beneath the hero content area:
     - Centered, max width (e.g., `max-w-4xl`) with consistent card styling (`lp-card`, `rounded-3xl`, subtle border)
     - Media area styled like a product preview/video frame:
       - Use `EditorialImage` (or a plain `<img>`) inside a “frame” with a play-button decoration (icon-only, not interactive unless we decide it should be)
       - Ensure it’s responsive and doesn’t push hero too tall on mobile:
         - Use a ratio around `16/10` or `16/9`
         - On small screens: stack beneath CTAs and review strip with appropriate spacing
     - Optional “preview label” row (small pill + short line) inside the panel for polish, without changing overall copy meaning.

2) `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
   - Enable the new hero features only on this route:
     - Pass `showMockPanel`
     - Provide the mock panel CTA that scrolls to calculator (`scrollToId("calculator")`) or the existing calculator section anchor (we will add a stable id).
   - Add a stable anchor id to the calculator section for the mock panel CTA:
     - Add `id="calculator"` to the calculator `<section ...>` to ensure consistent scroll behavior.
   - Upgrade calculator header area (without changing calculator logic):
     - Under the subtitle, add a compact “benefits chips row” (3 chips):
       - “Instant estimate”
       - “Plain-English”
       - “No obligation”
     - Tighten spacing so hero mock panel and calculator don’t feel like two competing big blocks.
   - Add new “Feature Grid” section (6 cards) between Benefits and Testimonials (or right after Benefits) as planned:
     - Each card: icon in soft circle, strong label, one-line description
     - Background: `SectionBackgroundOverlay variant="dots"` or `grid-lines` with low opacity
     - Use existing tokens: `lp-card`, `section-badge`, `lp-h2`, `lp-section-subtitle`
     - Keep content aligned to consultancy outcomes (checklist clarity, sequencing, cost drivers, compliance checkpoints, provider coordination, fast response).
   - Final CTA refinement:
     - Keep the current CTA structure but upgrade visuals to feel more like the references:
       - Ensure `SectionBackgroundOverlay variant="ibelick-soft"` remains
       - Increase “banner” feel using:
         - `overlay-gold-radial-center` (already exists and is used)
         - Add a subtle border highlight / inner ring
         - Add a very light top highlight (via a pseudo overlay div) to mimic premium product landing banners
     - Confirm mobile sticky bar doesn’t overlap CTAs:
       - Add bottom padding/margin as needed in the CTA section or ensure the sticky bar spacing is already safe.

3) `src/components/landing/CompanyLogosTicker.tsx`
   - Add a small eyebrow/title above ticker for hierarchy:
     - Example: “Trusted by teams in Bahrain”
   - Adjust styling to look more “product landing”:
     - Slightly more defined surface:
       - Keep `bg-muted/10`, but add a centered container with a subtle rounded band or keep full-bleed but add a calm top/bottom padding rhythm
     - Improve fades (keep existing) and ensure ticker still pauses on hover
     - Preserve prefers-reduced-motion behavior.

4) `src/index.css` (only if needed)
   - Prefer reusing existing utilities:
     - `mesh-gradient-gold`
     - `pattern-grid-lines-light`
     - `overlay-gold-radial-center`
   - Only add new small utilities if a missing piece is required (e.g., a “soft hero halo” gradient or an “inner ring” utility). Otherwise, keep changes minimal.

Asset decision (existing project image for mock panel)
- I will pick one of the existing on-brand assets already imported on the modern page (preferred to avoid adding new files), likely:
  - `costCalculatorPortraitImage` or `bookingImage` or another relevant consultancy/LP image
- If the chosen image doesn’t look “product-preview-like” inside a mock frame, I will switch to another existing asset already present in the project, still without adding new files.

UX/behavior details
- Mock panel CTA behavior:
  - Click “Explore the calculator” (or similar) scrolls to `#calculator`
  - Does not navigate away; keeps the “same page product landing” feel consistent with the inspiration.
- No new motion/scroll animations added.
- Hover effects limited to existing button/card hover (no glow-heavy MagicUI animations).

Quality checks (what you should verify after implementation)
- Desktop:
  - Hero background is subtle; headings remain highly readable
  - Mock panel is centered, premium, and not visually “empty”
  - Logos ticker has clear hierarchy (title + ticker) and doesn’t feel cramped
  - Calculator section feels connected to the hero (good spacing rhythm)
  - Final CTA looks like a conversion “banner moment”
- Mobile:
  - No overlap between MobileStickyConsultationBar and any CTA buttons
  - Hero + mock panel doesn’t become excessively tall
  - Scrolling to `#calculator` lands correctly with good alignment
- Accessibility:
  - Decorative overlays are `aria-hidden`
  - Images have meaningful alt text
  - Text contrast remains sufficient on all gradient areas

Implementation sequence (to minimize risk)
1) Add new hero props + layered hero background + mock panel scaffolding in `CompanyFormationHeroMontage`
2) Wire it up only in `CompanyFormationConsultancyLandingModern` and add `#calculator` anchor
3) Upgrade `CompanyLogosTicker` hierarchy and surface
4) Add feature grid section
5) Refine final CTA banner styling
6) Visual QA in preview on desktop + mobile widths

Out of scope (confirmed)
- No embedded video hosting
- No analytics tracking changes
- No new packages/dependencies

Deliverables
- Updated hero visuals with subtle mesh+grid treatments
- Centered hero mock panel using an existing project image + CTA to calculator
- Stronger trust/logos strip
- Enhanced calculator intro (chips + spacing polish)
- New 6-card feature grid section
- Premium gradient final CTA banner

