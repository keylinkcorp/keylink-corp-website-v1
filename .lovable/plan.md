Goal

- Remove the “Free Consultation” CTA button from the header to make the header feel more minimal, while keeping everything else (logo, navigation, mega menus, mobile menu) working the same.

What’s currently creating the “CTA”

- Desktop header has a dedicated CTA block:
  - `/* CTA Button */` with `<Button>Free Consultation</Button>` linking to `/free-consultation`
- Mobile menu has a dedicated CTA block:
  - `/* Mobile CTA */` with a full-width `<Button>Free Consultation</Button>` linking to `/free-consultation`

Important note (scope)

- This change removes the header CTA only.
- The mega menu panels (inside each dropdown) still include their own CTA panel driven by `item.cta` (e.g., “Start Now”, “Explore Services”). Those will remain unless you explicitly want them removed too.

Implementation steps (code changes)

1. Remove desktop header CTA button

- File: `src/components/layout/Header.tsx`
- Delete the block:
  - From: `/* CTA Button */` div (currently around lines ~390–398 in the file view)
  - This removes the “Free Consultation” pill button on desktop.

2. Remove mobile menu CTA button

- File: `src/components/layout/Header.tsx`
- In the mobile nav section, delete the “Mobile CTA” button portion only:
  - Remove the `<Link to="/free-consultation"> ... <Button>Free Consultation</Button> ... </Link>`
  - Keep the “Quick contact” phone link below it so mobile users still have a clear action.

3. Verify layout doesn’t shift awkwardly

- Desktop:
  - Header row should still align correctly: logo left, nav centered.
  - No extra empty space at the right (it should now be cleaner).
- Mobile:
  - Hamburger remains on the right.
  - Mobile menu still contains all sections and the quick phone contact.

QA checklist (what to test in preview)

- Desktop:
  - Confirm “Free Consultation” is gone from the header.
  - Confirm nav dropdowns still open and render correctly.
- Mobile:
  - Open hamburger menu and confirm “Free Consultation” button is gone.
  - Confirm quick phone contact still appears and works.
- Routes:
  - Confirm there are no console errors and the header still renders on all pages.

Optional follow-up (if you want even more minimal)

- Reduce header visual weight by:
  - Removing the top bar (or only showing it before scroll)
  - Simplifying mega menu CTA panels (remove the navy CTA column inside dropdowns)
  - Tightening paddings (e.g., nav triggers `px-5 py-3` → smaller)
  (Only if you confirm you want these next.)

Files to change

- `src/components/layout/Header.tsx`

remove for desktop not for moible or tablet