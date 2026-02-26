
Goal
- Duplicate the current landing page at `/lp/company-formation-consultancy-modern` into a new route `/lp/company-formation-consultancy-modern-ads`.
- Keep the existing route unchanged.
- New route should remain `noindex, follow` (testing-friendly), and should not collide with the existing page’s meta tags / JSON-LD markers.

What we’ll duplicate
- The entire React page component: `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- Reuse the same components/assets (Hero, calculator, sticky nav, footer, etc.) so design stays identical.

Implementation steps (code changes)
1) Create a new page file (exact duplicate)
- New file: `src/pages/landing/CompanyFormationConsultancyLandingModernAds.tsx`
- Start by copying everything from `CompanyFormationConsultancyLandingModern.tsx` into it, unchanged.

2) Update meta “uniqueness markers” in the duplicated page (critical)
The current page injects meta tags and JSON-LD with unique `data-lp` attributes:
- robots meta: `data-lp="company-formation-consultancy-modern"`
- canonical link: `data-lp="company-formation-consultancy-modern"`
- faq ld+json script: `data-lp="cfc-modern-faq"`

For the new Ads route, we must change these to new identifiers so both pages can be used without interfering with each other:
- robots: `data-lp="company-formation-consultancy-modern-ads"`
- canonical: `data-lp="company-formation-consultancy-modern-ads"`
- faq json-ld: `data-lp="cfc-modern-ads-faq"` (or similar)

Also update canonical URL to the new route:
- from: `https://keylinkcorp.com/lp/company-formation-consultancy-modern`
- to: `https://keylinkcorp.com/lp/company-formation-consultancy-modern-ads`

Keep `robots` as: `noindex, follow` (as you selected).

Optional but recommended: adjust document title/description slightly so you can distinguish in testing:
- title example: “Company Formation Consultancy Bahrain | Free Call (Ads)”
- meta description can stay the same for now.

3) Add the new route in `src/App.tsx`
- Import the new component:
  - `import CompanyFormationConsultancyLandingModernAds from "./pages/landing/CompanyFormationConsultancyLandingModernAds";`
- Add a new route near the existing LP routes:
  - `<Route path="/lp/company-formation-consultancy-modern-ads" element={<CompanyFormationConsultancyLandingModernAds />} />`
- Do not change the existing `/lp/company-formation-consultancy-modern` route.

4) Quick QA checklist after duplication
- Visit: `/lp/company-formation-consultancy-modern` and confirm it looks unchanged.
- Visit: `/lp/company-formation-consultancy-modern-ads` and confirm it’s identical visually and functionally:
  - Hero “Start cost calculator” scroll works
  - Calculator “Continue” navigates to `/free-consultation`
  - Sticky section nav scrolls properly
  - Mobile sticky bar appears and buttons work
- Confirm head tags don’t conflict:
  - Only one `meta[name="robots"][data-lp="company-formation-consultancy-modern-ads"]` exists on the Ads route
  - Only one `script[data-lp="cfc-modern-ads-faq"]` exists on the Ads route

Next step (after duplication)
- Once the new route exists, we can apply your “Google Ads Landing Page Experience” structured layout + transparency copy changes ONLY to the new Ads route file, keeping the original modern page intact.

Files that will be changed/added
- Add: `src/pages/landing/CompanyFormationConsultancyLandingModernAds.tsx`
- Edit: `src/App.tsx`

Notes / constraints
- This duplication approach is intentionally simple and safe: no component refactors required.
- Later, if you want multiple variants (A/B testing), we can repeat this pattern and keep each variant’s meta markers unique.
