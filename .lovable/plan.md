
Goal
- Add “real landing page” visuals by:
  1) Generating and inserting one image per pricing card (3 total).
  2) Generating and inserting a large background image behind the “Why Entrepreneurs Choose Our Consultancy” (Benefits) section.
  3) Styling Benefits cards with a glass / blurred overlay look (like your reference), while keeping readability and performance strong.

What I found in the current code
- Pricing cards are rendered inside `src/pages/landing/CompanyFormationConsultancyLanding.tsx` (section “PRICING”) as simple `lp-card` blocks with text + bullets + CTA—no images yet.
- The Benefits section (“Why Entrepreneurs Choose Our Consultancy”) is currently plain (no background image), and each benefit uses `lp-card` (no glass blur styling).
- You already have a good “editorial overlay” image wrapper component: `src/components/shared/EditorialImage.tsx` (supports subtle overlays + optional aspect ratio). This is ideal for both pricing-card images and section background treatments.

Decisions confirmed (from your answers)
- Pricing images style: Photo style
- Local cues: Subtle Bahrain cues
- Benefits section background: Photo background

Implementation approach (high level)
A) Generate 4 images (AI-generated, clean corporate, subtle Bahrain cues)
1) Pricing card images (3)
   - Aspect ratio: 16:10 (matches your existing LP image usage)
   - Style: professional business photography, modern office, founders/consultation moments
   - Subtle Bahrain cues: warm daylight, modern Gulf corporate interiors, very subtle skyline hint through window (no explicit landmark requirement)
   - No logos, no government visuals, no flags/emblems, no documents that look like official forms.

   Proposed image themes (one per card)
   - Starter (BHD 400): “Founder planning next steps” (solo founder reviewing checklist on laptop/tablet)
   - Complete (BHD 900 / featured): “Advisor + founder reviewing plan together” (collaboration, confident, bright)
   - Premium (BHD 1,800): “Executive-level planning session” (more premium atmosphere, boardroom, refined)

2) Benefits background image (1)
   - Wide image used as a section background (behind glass cards)
   - Composition: modern business lounge/office environment with warm, elegant lighting
   - Keep it slightly blurred in CSS (or apply overlay + blur to the background layer) so the cards remain readable.

Image generation details (so results match your references)
- Prompts will be written to match “Clean Corporate” style:
  - Photoreal corporate, neutral palette, warm highlights, shallow depth of field
  - Subtle Bahrain/Gulf cues: modern architecture feel, warm daylight, premium interior materials
- Sizes:
  - Pricing images: 960×600 (or 1280×800) WEBP
  - Benefits background: 1920×1080 WEBP (or 1600×900) to balance quality/perf
- Output format: WEBP for performance
- After generation, images will be saved into the project under `src/assets/company-formation/consultancy/` and imported as modules (no base64 stored anywhere).

B) Add images to pricing cards (layout update)
- Update the Pricing map in `src/pages/landing/CompanyFormationConsultancyLanding.tsx`:
  - Add an image block at the top of each card:
    - Use `EditorialImage` with `ratio={16/10}`
    - Use a slightly reduced overlay strength (e.g., 0.45–0.55) to keep text readable while staying consistent with the site’s navy/gold toning.
  - Keep the featured card glow behavior intact.
  - Ensure images are responsive and don’t shift layout (AspectRatio already helps).

C) Add a background image behind Benefits + convert benefit cards to “glass blur”
- In Benefits section:
  1) Add an absolutely positioned background image layer (using `<img>` or `EditorialImage` in a “background mode”), then add a dark gradient overlay to preserve contrast.
  2) Update the benefits card className from `lp-card` to a new glass style, for example:
     - `bg-background/10`
     - `border-white/15`
     - `backdrop-blur-xl`
     - `shadow-[0_12px_40px_rgba(0,0,0,0.25)]`
     - Keep text colors adjusted for dark background (e.g., headings text-white, body text-white/80).

- To keep changes maintainable:
  - Add a reusable CSS utility class in `src/index.css`, e.g. `.lp-glass-card`, that applies the glass blur look.
  - Optionally add `.lp-glass-section` for consistent background overlays (gradient + optional noise).

D) Accessibility + performance
- Provide meaningful `alt` text for pricing card images (short, descriptive).
- Mark the Benefits background image as decorative (empty alt and `aria-hidden`) because it’s purely aesthetic.
- Ensure “prefers-reduced-transparency” isn’t required, but we’ll keep contrast strong (cards readable even if blur is not supported).
- Lazy-load non-hero imagery where possible.

Files that will change (implementation)
- `src/pages/landing/CompanyFormationConsultancyLanding.tsx`
  - Import the new generated images
  - Insert images into pricing cards
  - Add Benefits section background layer
  - Swap benefit cards to glass style classes
- `src/index.css`
  - Add `lp-glass-card` (and possibly `lp-glass-card--light` if we want a variant)
- (New assets)
  - `src/assets/company-formation/consultancy/pricing-starter.webp`
  - `src/assets/company-formation/consultancy/pricing-complete.webp`
  - `src/assets/company-formation/consultancy/pricing-premium.webp`
  - `src/assets/company-formation/consultancy/benefits-bg.webp`

Step-by-step execution (what I’ll do after you approve)
1) Generate 4 photoreal images using the AI image generation workflow (photo style, subtle Bahrain cues).
2) Add the images into `src/assets/company-formation/consultancy/` and import them in the landing page.
3) Implement pricing-card images (top media block with consistent rounding and overlays).
4) Implement Benefits photo background + add overlay gradient + apply glass blur to benefit cards.
5) QA in preview at:
   - Desktop: spacing, readability, featured pricing card still stands out
   - Mobile: cards remain readable, background not overpowering, sticky bottom CTA remains visible above phone UI chrome
6) Quick content compliance check:
   - No new banned words introduced in headings/captions
   - No “government/authority” visuals or “official-looking documents” in imagery prompts/results

Acceptance criteria (what you should see)
- Each pricing tier card has a high-quality photo header consistent with the site’s editorial overlays.
- The Benefits section has a professional background photo and the benefit tiles look glassy/blurred like your reference, while still matching your brand styling.
- Text remains readable (high contrast) and page performance remains good (WEBP, responsive sizing).

Notes / constraints
- The uploaded images you provided will be used as visual references only; we’ll generate unique on-brand images rather than embedding those screenshots.
- Images will be stored as assets (not in any database), and imported normally in React for optimal bundling and caching.
