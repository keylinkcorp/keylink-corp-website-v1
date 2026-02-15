
Problem recap (what’s “not matching /lp/company-formation”)
- The new `/company-formation-consultancy-bahrain` page is currently built as a generic stacked landing with cards and pattern overlays.
- The existing `/lp/company-formation` look/feel is driven by:
  - A very specific hero: left copy + right image montage (portrait image with overlay gradients and a bottom “Free call” strip).
  - A consistent “SplitSection” rhythm with sticky portrait images and calmer spacing.
  - Reused “company-formation” section components (Trust bar, call value block, pricing section styling).
- Your clarified preferences: reuse existing images + use the same montage hero.

What I will change (high-level)
1) Make the consultancy page reuse the same hero montage layout as `/lp/company-formation`
- Replace the consultancy page’s current hero layout with the existing `CompanyFormationHeroMontage` component (same image, same overlay, same montage composition).
- Update only the copy and CTA labels inside that hero to match the consultancy requirements:
  - H1: “Company Formation Consultancy in Bahrain”
  - Primary CTA: “Get Free Consultation” (scroll to booking)
  - Secondary CTA: “Call +97317008888” (tel: link)
  - Keep the hero trust strip style consistent (the current montage uses `HeroReviewStrip`; we will keep it or swap to a consultancy-friendly trust row while preserving the same layout).

2) Move the disclaimer into a prominent “below-hero” compliance banner (yellow/orange)
- Remove the disclaimer card currently sitting inside the hero grid.
- Add a full-width disclaimer box immediately after the hero section, with:
  - Background: amber/orange tint (e.g., `bg-amber-100/80` + `border-amber-200`), high contrast, and clear icon/title.
  - Title: “Independent Business Consultancy”
  - Body: placeholder disclaimer text (until you paste final), plus the required “we do not issue CR” clarification.
- Ensure “above fold” on mobile:
  - Adjust hero vertical padding slightly (reduce bottom padding) so the disclaimer banner appears without needing meaningful scrolling on common mobile heights.

3) Rebuild the section layout rhythm to mirror `/lp/company-formation` (SplitSection-driven)
To visually match, I’ll restructure most sections to use `SplitSection` with sticky images, alternating left/right, and the same background variants used in `/lp/company-formation`.

Planned mapping (keeps your required section order/content, but uses the same layout system):
- Problem section:
  - Use `SplitSection` with a portrait image on the right (reuse an existing portrait asset already used on `/lp/company-formation` to keep the same art direction).
  - Left side: 6 pain points in a 2-column list on desktop (1-col mobile).
- Solution section (5-step process):
  - Use `SplitSection` (image on left) with “Step cards” styled like existing LP step cards (same `lp-card` styling, step number tokens if appropriate).
- Services section:
  - Keep the accordion UI (works well), but wrap inside `SplitSection` so it matches the page rhythm and spacing.
- Benefits section:
  - Use `SplitSection` + grid benefits, matching `lp-card` density and spacing.
- Pricing section:
  - Reuse styling patterns from `CompanyFormationPricingSection` (visual style, spacing, featured card glow), but keep your consultancy package names and temporary BHD placeholders.
- Testimonials:
  - Reuse the existing “banner image + overlay + testimonial cards” composition from `/lp/company-formation` (already proven).
- FAQ:
  - Keep the same accordion style and keep JSON-LD FAQ schema, but update typography and container styling to match the `lp-card p-3 md:p-4` pattern used in `/lp/company-formation`.

4) Make mobile click-to-call stronger (without breaking existing header design rules)
Current `LandingHeader` hides call/WhatsApp on mobile (by design). To satisfy your requirement clearly:
- Add a page-specific mobile “Call” button:
  - Option A (recommended): a sticky bottom mobile CTA bar (Call + Book) that only appears on this route and only on small screens.
  - Option B: add an optional prop to `LandingHeader` (e.g., `showMobileCallCta`) to show a compact “Call” button on mobile for this landing only.
- We’ll keep CTA wording compliant (“Call for consultation” if we need a label).

5) Align background overlays and card surfaces to match the calmer /lp feel
Right now the consultancy page uses multiple overlay variants (dots, grids, radial) more aggressively than `/lp/company-formation`.
- Reduce to the same overlay cadence used in `/lp/company-formation`:
  - Hero: calm `bg-muted/20` (as in montage component).
  - Major sections: `ibelick-soft` / `ibelick-lines` sparingly.
- Keep `lp-card`/`lp-card-flat` everywhere (no additional shadows), matching `index.css` definitions.

Concrete implementation steps (files)
1) Update `src/pages/landing/CompanyFormationConsultancyLanding.tsx`
- Replace the HERO section with `CompanyFormationHeroMontage` (modified to accept custom title/subtitle/cta labels), or create a new `CompanyFormationConsultancyHeroMontage` that copies the structure of the existing montage hero but uses your consultancy copy.
- Insert a new disclaimer banner section immediately after hero (amber/orange styling).
- Refactor sections into `SplitSection` blocks to match `/lp/company-formation` layout rhythm.
- Reuse existing assets (hero portrait and the portrait images already imported in `CompanyFormationLanding.tsx`) for consistent visuals.
- Keep:
  - noindex meta
  - canonical
  - query-param merge into Calendly URL
  - FAQ JSON-LD injection

2) Add/adjust supporting components (minimal, reuse-first)
- If needed: extend `CompanyFormationHeroMontage` to accept props for:
  - headline text
  - subheadline text
  - primary CTA label
  - secondary CTA label/href
  - optional trust strip variant
  This keeps the hero visually identical while letting us change content cleanly.
- Add one of:
  - a small `MobileStickyCtas` component used only on this new route, or
  - a prop on `LandingHeader` for mobile call CTA display.

3) Visual QA checklist (what we’ll verify in preview)
- Above the fold:
  - Montage hero looks the same as `/lp/company-formation` (same image treatment, same spacing).
  - Disclaimer banner appears immediately below hero and is clearly yellow/orange.
- Layout rhythm:
  - Sections feel like `/lp/company-formation` (SplitSection spacing, sticky images on md+).
- Requirements:
  - CTAs: at least 5 “Consultation” CTAs, all scroll to booking.
  - Mobile: tap-to-call is present and prominent (hero and/or sticky bar).
  - FAQ: 8 questions + schema present.
  - Footer disclaimer includes the required exact sentence.
- Copy compliance:
  - No banned words appear anywhere (“Official”, “Government portal”, “Authorized”, “Register”, “Apply”, “Get CR”).

Small clarification I’ll apply automatically (no need for you to answer)
- Since you asked for placeholders, I will keep placeholder body copy, but I will ensure CTA labels, disclaimer heading, footer disclaimer line, and the H1 are exact and compliant (these are structural requirements, not “optional copy”).

Estimated change impact
- Medium refactor of the consultancy page structure, but largely by reusing existing components (`CompanyFormationHeroMontage`, `SplitSection`, existing images, existing card classes), so it will converge quickly to the `/lp/company-formation` look.

After approval
- I’ll implement the refactor and then open the preview on `/company-formation-consultancy-bahrain` so you can compare side-by-side with `/lp/company-formation` visually.