
Goal
- On the route `/lp/company-formation-consultancy-modern`, make the image/media appear before the text content on mobile for these sections:
  - Hero section
  - Common blockers
  - Services
  - About
- Desktop layout must remain unchanged.

What I found in the codebase (current behavior)
1) Hero
- Implemented via `CompanyFormationHeroMontage` (not `SplitSection`).
- Layout: `grid lg:grid-cols-12 ...` with two children:
  - Copy column: `lg:col-span-6`
  - Image/montage column: `lg:col-span-6`
- On mobile, the DOM order is copy first, image second, so copy appears first.

2) Common blockers (SplitSection)
- Uses `<SplitSection ... badge="Common blockers" imagePosition="right" ... />`
- Currently, without a `mobileOrder` override, mobile stays “content first” due to DOM order.

3) Services (SplitSection)
- Uses `<SplitSection ... badge="Services" imagePosition="right" ... />`
- Same behavior as above.

4) About
- This section is not a SplitSection. It’s a custom `grid lg:grid-cols-2`.
- On mobile, DOM order is content first, then the `EditorialImage`, so content appears first.

Key decision confirmed
- You confirmed: “Always image first (mobile)” for these sections (even if imagePosition is right on desktop).

Implementation approach (what will change)
A) Common blockers + Services (SplitSection instances)
- For both SplitSection blocks in `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`:
  - Add: `mobileOrder="image-first"`
- This uses the existing `SplitSection` API already implemented:
  - On mobile (below lg): image column gets `order-1`, content column gets `order-2`
  - On desktop (lg+): existing `lg:order-*` logic still ensures the intended `imagePosition="right"` layout remains unchanged.

B) Hero section (CompanyFormationHeroMontage)
- Update `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx` to explicitly control order on mobile only:
  - Add `order-*` classes to the two main grid children:
    - Copy wrapper: `order-2 lg:order-1`
    - Image wrapper: `order-1 lg:order-2`
- This ensures:
  - Mobile: image first, then copy
  - Desktop: copy left, image right (same as now)

C) About section (custom grid)
- Update the About section markup inside `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`:
  - Apply order classes to the two grid children:
    - Text/content column wrapper: `order-2 lg:order-1`
    - Image wrapper: `order-1 lg:order-2`
- This ensures:
  - Mobile: About image first, then About text
  - Desktop: About text left, image right (same as now)

Files to change
1) `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
- Add responsive `order-*` classes to swap the two columns on mobile only.

2) `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
- Common blockers SplitSection: add `mobileOrder="image-first"`
- Services SplitSection: add `mobileOrder="image-first"`
- About section: add `order-*` classes to swap columns on mobile only

Verification checklist (end-to-end)
1) Mobile viewport (e.g. 390x844)
- Hero: image/montage appears above hero text and CTA buttons.
- Common blockers: the SplitSection image appears above the blockers card grid.
- Services: the SplitSection image appears above the accordion/services content.
- About: the About image appears above the About text card.

2) Desktop viewport (lg+)
- Hero remains: text left, image right.
- Common blockers: image stays on the right (as designed by `imagePosition="right"`).
- Services: image stays on the right.
- About remains: text left, image right.

Edge cases / notes
- This change is intentionally scoped to the modern consultancy landing route and the shared hero component; it won’t globally change other pages unless they reuse `CompanyFormationHeroMontage` (if they do, we can add an opt-in prop like `mobileMediaFirst?: boolean` to avoid affecting other pages).
- The SplitSection `mobileOrder="image-first"` is opt-in per section, so it’s safe and targeted.
