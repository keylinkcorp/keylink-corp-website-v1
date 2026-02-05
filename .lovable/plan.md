
Goal
- Add the “Google Reviews / Trustpilot” review strip (like your screenshot) inside the hero section on every page.
- Also identify which pages/heroes are currently missing it, and make the display consistent across the site.

What you want (confirmed)
- Badges are static (not clickable).
- Use fixed ratings: Google 4.9 and Trustpilot 4.8.
- Apply to all pages (Home + all Services + About + Contact + Free Consultation).

1) Audit: where the hero review strip exists vs missing
Already has a review strip (in some form)
- Home: src/components/home/Hero.tsx
- Company Formation hero: src/components/services/formation/FormationHero.tsx
- Lease hero: src/components/services/lease/LeaseHero.tsx
- CR hero: src/components/services/cr/CRHero.tsx (has ratings, but layout differs from screenshot)
- Plus several service heroes already include “Google Reviews / Trustpilot” blocks:
  - src/components/services/wll/WLLHero.tsx
  - src/components/services/spc/SPCHero.tsx
  - src/components/services/branch/BranchHero.tsx
  - src/components/services/liquidation/LiquidationHero.tsx
  - src/components/services/bl/BLHero.tsx
  - src/components/services/cr-amendment/CRAmendmentHero.tsx (variant differs)

Missing (needs to be added)
Core pages
- About hero: src/components/about/AboutHero.tsx
- Contact hero: src/components/contact/ContactHero.tsx
- Free consultation hero: src/components/consultation/ConsultationHero.tsx

Services (examples confirmed missing from inspection)
- PRO services hero: src/components/services/pro/PROHero.tsx
- Tax services hero: src/components/services/tax/TaxHero.tsx
- Virtual office hero: src/components/services/virtual-office/VirtualOfficeHero.tsx
Likely additional service heroes missing (to be updated during implementation pass)
- Document clearance, bank account, visa/immigration, legal, consulting, incubators, local sponsorship, MOA, certificate attestation, chamber services, etc. (we’ll systematically update every *Hero.tsx that does not already include the strip)

2) Implementation approach (keep it consistent and easy to maintain)
A) Create a shared, reusable component
- Add a new component (e.g., src/components/shared/HeroReviewStrip.tsx) that renders exactly the review strip layout from the screenshot:
  - Left block: avatars + 5 gold stars + “4.9” + “Google Reviews”
  - Divider (vertical on desktop)
  - Right block: avatars + 5 green stars + “4.8” + “Trustpilot”
- Use lucide-react Star icons (already in project) for consistent visuals.
- Keep the styling responsive:
  - Mobile: stacked vertically with spacing (no vertical divider)
  - Desktop: inline row with divider (like the screenshot)
- Keep it static (no links), per your choice.

B) Normalize usage across all hero components
- Replace duplicated review markup in existing heroes (Home/Formation/Lease/WLL/SPC/Branch/Liquidation/etc.) with <HeroReviewStrip /> to ensure:
  - Same spacing, fonts, colors, avatar sizes everywhere
  - One place to change later if you want real URLs, dynamic ratings, or different branding

C) Add to missing hero components
- Insert <HeroReviewStrip /> in each hero where it’s missing, placed in a consistent position:
  - Usually after the CTAs and before any “trust line / accreditation line”
  - In center-aligned heroes (About/Contact/Consultation): place under the subtitle/trust indicators (visually balanced)
  - In split-layout heroes (Tax/PRO/VirtualOffice): place under CTAs on the text side

D) Cover the shared generic hero too
- Update src/components/services/shared/ServiceHero.tsx to include <HeroReviewStrip /> beneath its CTAs.
  - This ensures any service pages using ServiceHero automatically get the strip.

3) Exact files we’ll touch (high-level)
- New:
  - src/components/shared/HeroReviewStrip.tsx (shared strip component)
- Update (definite based on inspection):
  - src/components/about/AboutHero.tsx
  - src/components/contact/ContactHero.tsx
  - src/components/consultation/ConsultationHero.tsx
  - src/components/services/pro/PROHero.tsx
  - src/components/services/tax/TaxHero.tsx
  - src/components/services/virtual-office/VirtualOfficeHero.tsx
  - src/components/services/shared/ServiceHero.tsx
- Update (refactor to use shared component, removing duplicate code):
  - src/components/home/Hero.tsx
  - src/components/services/formation/FormationHero.tsx
  - src/components/services/lease/LeaseHero.tsx
  - src/components/services/cr/CRHero.tsx (align to screenshot format)
  - src/components/services/wll/WLLHero.tsx
  - src/components/services/spc/SPCHero.tsx
  - src/components/services/branch/BranchHero.tsx
  - src/components/services/liquidation/LiquidationHero.tsx
  - src/components/services/bl/BLHero.tsx
  - src/components/services/cr-amendment/CRAmendmentHero.tsx
- Additional service hero files:
  - During implementation, we’ll run a quick pass over all src/components/**/ *Hero.tsx to ensure none are missed.

4) QA / verification checklist (what you can test after implementation)
- Visual check on these routes (at minimum):
  - / (home)
  - /about
  - /contact
  - /free-consultation
  - /services/company-formation
  - /services/virtual-office
  - /services/tax-services
  - /services/pro-services
- Responsive:
  - Mobile: strip stacks cleanly, no overflow, stars visible
  - Desktop: strip aligns horizontally with a divider
- Consistency:
  - Same spacing, avatar size, star colors, typography across all heroes

5) Notes / edge cases
- Current avatars in some heroes use external randomuser.me URLs; the shared component will keep a consistent approach. If you prefer fully local assets later (no external avatar URLs), we can switch to local placeholder avatar images in a follow-up.
- Some heroes are left-aligned and others center-aligned; the shared component will support a simple alignment prop (center vs left) if needed so it looks natural everywhere.

Deliverable
- Every page hero shows the review strip (Google 4.9, Trustpilot 4.8) in the same style as your screenshot, with no missing pages and minimal duplicated code.