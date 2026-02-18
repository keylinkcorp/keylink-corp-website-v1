
Goal
- Make `/lp/company-formation-consultancy-modern` render with the exact same layout/structure as `/lp/company-formation-consultancy-v2` (hero, minimal header, section order, styling), while not changing V1 or V2.

What I found (why it looks wrong)
- Your screenshot shows the main site header/nav + the home-page hero (“Plan. Register. Grow.”). That UI comes from `src/components/layout/Header.tsx` + `src/components/home/Hero.tsx`, which are used on the `/` (home) route (`src/pages/Index.tsx`).
- The Modern LP file (`src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`) is currently a custom design that:
  - Uses a different hero wrapper section (and passes empty strings to `CompanyFormationHeroMontage` so the montage area won’t match V2’s hero layout/content).
  - Uses `ConsultancyModernHeader` (minimal) and adds extra sections like a “Trust strip”.
- Since you selected “Match V2 exactly”, the fastest/cleanest fix is to make the Modern route component effectively a copy of the V2 component (same JSX structure + same props), while keeping Modern’s meta tags distinct.

Critical ambiguity to resolve during implementation (no extra questions needed)
- The screenshot mismatch strongly suggests you might not actually be landing on `/lp/company-formation-consultancy-modern` (or the app is redirecting you to `/`). During implementation I will confirm the real current URL in the preview and add a small “route sanity check” to prevent silent fallback.

Implementation plan (code changes to be done in default mode)
1) Confirm routing and reproduction
   - Open `/lp/company-formation-consultancy-modern` in the preview and confirm the browser URL is exactly that path (not `/`).
   - If it shows the home page, inspect whether a redirect or navigation is happening (check network “document” request path and any console logs).
   - Verify that `App.tsx` includes the Modern route (it does), so if the wrong page appears we’ll identify where the redirect comes from.

2) Make Modern route match V2 exactly (primary fix)
   - Update `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` to mirror `src/pages/landing/CompanyFormationConsultancyLandingV2.tsx` as closely as possible:
     - Use the same top-level wrappers/classes.
     - Use the same header/footer components as V2 (`ConsultancyV2Header` / `ConsultancyV2Footer`) to guarantee the same minimal header, spacing, and button behavior.
     - Use `CompanyFormationHeroMontage` with the exact same props as V2 (no empty title/lead/bullets).
     - Use the same sections and section order as V2:
       - Logos ticker
       - Outcome strip
       - Calculator section
       - DIY vs Guided
       - Process timeline
       - Booking section
       - FAQs
       - Mobile sticky bar behavior if present in V2
     - Keep Modern’s metadata unique (robots/canonical/FAQ JSON-LD `data-lp` markers) so it doesn’t clash with V2.

3) Remove Modern-only layout differences (to avoid “styling mismatch”)
   - Remove/disable any Modern-specific wrappers that could change typography/spacing compared to V2 (for example any extra `max-w` containers, background overlays, or custom hero section wrapper that V2 doesn’t have).
   - Ensure section IDs and scroll targets match V2 (`calculator`, `book`, etc.) so buttons behave identically.

4) Add a safety “route sanity check” (prevents the exact confusion you’re seeing)
   - Add a minimal, non-visual check inside the Modern page:
     - If `window.location.pathname` is not `/lp/company-formation-consultancy-modern`, log a clear warning to console (helps detect unexpected redirects).
   - Optionally add a temporary small hidden marker element like `data-page="cfc-modern"` for QA (can be removed later).

5) QA checklist (must pass before we consider it fixed)
   - On desktop:
     - `/lp/company-formation-consultancy-modern` header matches V2 minimal header (no mega-menu nav).
     - Hero headline/copy matches V2 (not “Plan. Register. Grow.”).
     - All sections appear in the same order as V2 and look the same.
     - CTA buttons scroll to the right sections (calculator/book).
   - On mobile:
     - Mobile layout matches V2.
     - Sticky consultation bar behavior matches V2.
   - Regression checks:
     - `/company-formation-consultancy-bahrain` unchanged.
     - `/lp/company-formation-consultancy-v2` unchanged.

Expected outcome
- `/lp/company-formation-consultancy-modern` becomes a “V2 clone route” (same design and layout), eliminating wrong header/hero/sections issues. After that, we can iterate on “clean corporate trust” enhancements on Modern only, one section at a time, without risking V1/V2.
