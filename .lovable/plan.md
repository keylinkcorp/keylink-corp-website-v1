
Goal
- Enhance /lp/company-formation-consultancy-modern with a “MagicUI-inspired” light, clean, product-landing aesthetic (soft gradients, crisp borders, premium spacing), while keeping the existing Keylink navy/gold brand tokens and staying mostly static (no scroll animations).

What you referenced (design direction distilled)
- Light background with gentle gradient wash behind hero.
- Centered hero with a prominent “mock panel”/preview card beneath it (video/media placeholder style).
- Strong trust strip/logos + rating area with better hierarchy.
- A bold “final gradient CTA” section near the bottom that feels like a premium banner.

Scope in this plan (high impact, low risk)
- No major copy rewrite (only micro-copy tweaks if needed).
- No new dependencies; use existing Tailwind, existing design utilities in src/index.css, and existing shared components (SplitSection, SectionBackgroundOverlay, EditorialImage, shadcn Button/Card where already present).

Codebase touchpoints (identified)
- Page: src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
- Hero component used: src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx
- Logos ticker: src/components/landing/CompanyLogosTicker.tsx
- Background/pattern system: src/components/shared/SectionBackgroundOverlay.tsx + utilities in src/index.css

Implementation plan (sequenced)
1) Create a “MagicUI-style” hero background layer (light/clean)
   - Update CompanyFormationHeroMontage:
     - Replace the current flat bg-muted/20 hero background with a multi-layer background:
       - A subtle mesh gradient (reuse existing .mesh-gradient-gold utility) at low opacity.
       - A very faint “grid-lines” overlay using SectionBackgroundOverlay or a simple absolute layer.
       - A soft radial vignette/mask to keep edges calm (similar to existing overlay masked patterns).
     - Keep everything light, minimal, and consistent with existing tokens.
   - Acceptance criteria:
     - Hero feels more premium without reducing text contrast.
     - No layout shifts.

2) Add a centered “Hero Mock Panel” beneath hero copy (your selected upgrade)
   - In CompanyFormationHeroMontage (or in the modern page just under the hero), insert a new centered panel section:
     - Layout: single centered container (max-w-4xl or similar) with a large rounded card.
     - Inside: a “media placeholder” area (since you selected “Hero media area” too):
       - Option A (recommended): Use an image-based placeholder (static) for now, styled like a video embed (play button icon, subtle inner shadow).
       - Option B: If you already have an asset, wire it in; otherwise keep it purely decorative.
     - Below/overlaid: a compact “preview label” row (e.g., “See how the checklist + calculator works”) with a small pill.
   - Tie-in to your actual product flow:
     - Add a small secondary CTA inside/under the panel that scrolls to the calculator section (#calculator) or triggers navigate, keeping behavior consistent with existing scrollToId patterns.
   - Acceptance criteria:
     - Panel is centered and visually dominant like the reference.
     - Still fast loading and responsive (mobile-first).

3) Strengthen the trust strip / logos area
   - Update CompanyLogosTicker:
     - Add a small title/eyebrow above the ticker (e.g., “Trusted by teams in Bahrain”).
     - Improve logo container styling:
       - Use a slightly more defined surface (bg-background with border) or keep the existing muted band but refine spacing.
       - Reduce “flatness” with subtle inset highlight (still light theme).
     - Ensure motion remains accessible (already respects prefers-reduced-motion).
   - Acceptance criteria:
     - Trust area has clearer hierarchy and looks intentional, not just a moving row.

4) Upgrade the calculator section to feel like the “product” (align with reference)
   - In CompanyFormationConsultancyLandingModern.tsx COST CALCULATOR section:
     - Tighten top spacing relationship with the new hero panel (avoid stacking two “big cards” without rhythm).
     - Enhance the right-side header block:
       - Add a compact “benefits row” (3 small chips) just under subtitle: “Instant estimate”, “Plain-English”, “No obligation”.
     - Re-style calculator card container to match the new mock panel (same border, radius, background, subtle shadow/no heavy shadow; you already have lp-card/lp-card-flat).
   - Acceptance criteria:
     - Calculator feels like the centerpiece product module.

5) Introduce a “feature grid” section that resembles MagicUI layout (static)
   - Between Benefits and Testimonials (or after Services), add a new section:
     - 6 cards in a responsive grid, each with:
       - icon in a soft circle
       - bold label
       - one-line description
     - Use existing typography helpers: lp-h2, lp-section-subtitle, lp-card.
     - Add SectionBackgroundOverlay variant="dots" or "grid-lines" at low opacity for depth.
   - Keep content aligned with consultancy: “Checklist templates”, “Activity pathway clarity”, “Cost driver breakdown”, etc.
   - Acceptance criteria:
     - Section breaks up the long page and adds “product landing” structure.

6) Add the “Gradient Final CTA” banner (your selected upgrade)
   - Replace or rework the current FINAL CTA section (lines ~699+) into a more “MagicUI-like” banner:
     - Full-width within the page frame, with a strong but light gradient background:
       - Use a new utility class or reuse existing overlays:
         - overlay-ibelick-soft + an additional gradient layer like overlay-gold-radial-center
       - Add a large rounded container with inner border and gentle highlight.
     - Layout:
       - Left: headline + 2–3 bullet points (already present)
       - Right: CTAs stacked (already present)
     - Ensure mobile spacing and safe-area handling so the MobileStickyConsultationBar doesn’t visually conflict at the bottom.
   - Acceptance criteria:
     - CTA section becomes a clear “final conversion moment” visually.

7) Keep everything static (as requested)
   - Do not add Framer Motion scroll-in effects.
   - Restrict hover effects to existing button hover states; optionally add minimal hover polish only for big CTAs (non-essential).

8) QA checklist (visual + functional)
   - Visual:
     - Compare hero + mock panel + trust strip spacing on mobile and desktop.
     - Confirm text contrast (especially over any gradients).
     - Confirm consistent border radius and card surfaces (lp-card vs lp-card-flat).
   - Functional:
     - “Get Free Consultation” scrolls to #book reliably.
     - “Start calculator”/hero panel CTA scrolls to calculator section or navigates as intended.
     - Logos ticker still animates and pauses on hover (desktop).
     - Mobile sticky bar still visible and not covering key CTA buttons.

Technical notes (for implementation)
- Prefer to implement the hero mock panel inside CompanyFormationHeroMontage to keep hero cohesive across LP variants; if that impacts other pages using the same hero, we can:
  - Add a prop like `showMockPanel?: boolean` default false, enabled only on the modern route.
- Reuse existing design primitives:
  - lp-card / lp-card-flat
  - SectionBackgroundOverlay variants (grid-lines, dots, ibelick-soft)
  - mesh-gradient-gold utility already exists in src/index.css
- Avoid introducing new global CSS unless needed; if necessary, add a small number of utilities to src/index.css under @layer utilities to keep consistent.

Deliverables (what will change)
- Updated hero visuals + added centered mock panel/media placeholder.
- Refined trust ticker section.
- Calculator section styling polish to match new hero.
- One new “feature grid” section (static).
- Upgraded final CTA to a premium gradient banner.

Out of scope (for now)
- Dark theme option.
- Video embedding/hosting (we’ll keep a placeholder panel that can later be swapped for a real video).
- Analytics/event tracking.

Dependencies / risks
- Low risk: mostly layout + styling.
- Medium risk: if CompanyFormationHeroMontage is used by multiple pages, changes could affect other LPs; mitigated by props and route-specific toggles.

Next step needed from you (non-technical)
- Provide what you meant by “Other” for Hero upgrade (you selected all four plus “Other”): one sentence describing the extra element you want (e.g., “add a short ‘How it works in 30 seconds’ line under the panel”).
- Optional: confirm if you have a preferred screenshot/image to use inside the hero media placeholder; otherwise we’ll use an existing relevant asset already in the project.

Once you approve, I will implement the above changes in the relevant components and page file, then we’ll review the updated landing page together on mobile and desktop.
