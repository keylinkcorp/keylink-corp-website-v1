
Goal
- Replace the text-based “Keylink / Corp” wordmark with your uploaded SVG logo so branding is consistent across the site (header, landing header, footer, and any other header-style instances).

What I found in your codebase (current state)
- The “logo” is currently hardcoded text in 3 places:
  1) `src/components/layout/Header.tsx` (global site header)
  2) `src/components/layout/Footer.tsx` (footer brand area)
  3) `src/components/landing/LandingHeader.tsx` (LP-specific sticky header)
- These are the only components that render the logo as split text spans.

Key design considerations
- Your SVG uses navy (#002c4d) + gold (#c7a763).
- On the footer’s dark navy background (`bg-primary`), the navy part of the logo can disappear. We should handle that so the logo remains readable on dark sections.

Implementation approach
A) Add the logo to the project assets
- Copy the uploaded file into the repo:
  - From: `user-uploads://Keylink_Logo_Design_V2.svg`
  - To: `src/assets/brand/keylink-logo.svg` (or `src/assets/keylink-logo.svg` if you prefer flatter structure)
- This allows consistent importing via Vite bundling.

B) Create a single reusable Logo component (so “use everywhere” stays easy)
- Create: `src/components/brand/KeylinkLogo.tsx`
- Responsibilities:
  - Render the SVG via `<img src={...}>` (simple + performant).
  - Support size props (e.g., `size="sm|md|lg"` or `className`) so Header/Footer can use the same component with different heights.
  - Support a “onDark” / “withBadge” option for dark backgrounds:
    - Recommended: wrap logo in a subtle white badge container in dark areas:
      - `bg-white/95`, `rounded-xl`, `px-3 py-2`, small border like `border border-white/10`
    - This preserves the original brand colors without editing SVG internals.

C) Replace the text wordmark in all header/footer components
1) Global header
- File: `src/components/layout/Header.tsx`
- Replace the current:
  - `<span>Keylink</span><span>Corp</span>`
- With:
  - `<KeylinkLogo className="h-8 lg:h-10 w-auto" />`
- Ensure the clickable area stays the same (`<Link to="/" className="flex items-center ...">`).

2) Landing header (LP header)
- File: `src/components/landing/LandingHeader.tsx`
- Replace the text wordmark in the logo button with:
  - `<KeylinkLogo className="h-7 md:h-8 w-auto" />`
- Keep the `onLogoClick` behavior unchanged.

3) Footer
- File: `src/components/layout/Footer.tsx`
- Replace the text wordmark with:
  - `<KeylinkLogo onDark className="h-8 w-auto" />`
- If we go with the white badge approach, we’ll wrap it so it looks intentional and modern:
  - Inline-flex container, consistent spacing with the paragraph below.

D) Consistency polish (small but noticeable)
- Add consistent `alt` text everywhere: `alt="Keylink Corp"`
- Make sure logo is vertically centered in the header (`items-center` already exists).
- Confirm spacing (gap) around the logo doesn’t break navigation layout on mobile.

E) QA checklist (what you should verify in preview)
- Header: logo is crisp, aligned, clickable, and doesn’t push nav/CTA.
- Mobile menu toggle: still reachable; no layout shift.
- Landing pages: the LP header shows the same logo styling.
- Footer: logo remains readable on dark background and looks “premium” (no muddy navy-on-navy).
- No console errors for missing asset imports.

Files that will change / be added
- Add asset:
  - `src/assets/brand/keylink-logo.svg` (copied from your upload)
- Add component:
  - `src/components/brand/KeylinkLogo.tsx`
- Update existing:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/landing/LandingHeader.tsx`

Optional follow-up (if you want it truly “everywhere”)
- After implementing the above, I’ll do a quick scan for any remaining “Keylink Corp” wordmark usage that looks like a logo (not just text mentions), and convert those to the same `<KeylinkLogo />` where appropriate.
