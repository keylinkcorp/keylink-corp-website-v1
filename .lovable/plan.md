
Goal
- Make the Keylink logo in all headers feel “pixel perfect” and clearly visible by increasing it to:
  - Mobile: 44px tall
  - Desktop: 64px tall
- Keep the change “height-only” (no SVG editing, no container tricks), but ensure the header height/spacing supports the larger mark.

What I found (why it still feels small)
- The global header logo is currently `h-10` (40px) on mobile and `lg:h-12` (48px) on desktop, inside a header row that is `h-16` (64px) / `lg:h-20` (80px).
- Your logo is a detailed wordmark + icon; at 48px it can read small compared to the navigation + CTA.
- LandingHeader is also constrained to `h-16`, with a smaller logo than the global header.
- The `KeylinkLogo` component sets a default `h-8`, but your passed-in className comes after it, so your explicit height classes already override correctly. The main limiter is simply the chosen heights + header row height.

Decisions confirmed
- Desktop logo size: XL (64px)
- Mobile logo size: 44px
- Treatment: height-only (recommended)

Implementation approach
- Standardize logo sizing across headers using explicit Tailwind height classes:
  - Global header: `h-11` on mobile (44px), `lg:h-16` on desktop (64px)
  - Landing header: `h-11` on mobile, `md:h-14` (56px) on tablet, and optionally `lg:h-16` where applicable (depending on usage)
- Increase header row heights to “fit” the new logo so it doesn’t feel cramped and aligns vertically:
  - Global Header main navigation row:
    - Not scrolled: increase from `h-16 lg:h-20` to something like `h-20 lg:h-24`
    - Scrolled: increase from `h-16` to `h-20` (keeps logo readable even when sticky shrinks)
  - LandingHeader row: increase from `h-16` to `h-20` (or `h-18` if you want slightly tighter; but for 44px logo, `h-20` looks cleaner)
- Keep widths automatic (`w-auto`) everywhere to preserve the SVG’s proportions.

Exact code changes (files)
1) Global header logo size + row height
- File: `src/components/layout/Header.tsx`
- Update logo:
  - From: `<KeylinkLogo className="h-10 w-auto lg:h-12" />`
  - To: `<KeylinkLogo className="h-11 w-auto lg:h-16" />`
- Update main navigation row height (the container div that currently uses `scrolled ? "h-16" : "h-16 lg:h-20"`):
  - Change to:
    - scrolled: `"h-20"`
    - not scrolled: `"h-20 lg:h-24"`
- Confirm nav/CTA vertical alignment remains centered (it already uses `items-center`).

2) Landing header logo size + row height
- File: `src/components/landing/LandingHeader.tsx`
- Update header row height:
  - From: `h-16`
  - To: `h-20`
- Update logo:
  - From: `<KeylinkLogo className="h-8 w-auto md:h-9" />`
  - To: `<KeylinkLogo className="h-11 w-auto md:h-14" />`
  - (If this header ever appears on large screens and you want the same XL feel: add `lg:h-16`.)

3) Footer logo (optional but recommended for consistency)
- File: `src/components/layout/Footer.tsx`
- If the footer logo also feels small relative to the brand block, bump it modestly:
  - From: `h-10`
  - To: `h-12` (48px)
- Keep `onDark` badge as-is to preserve legibility.

Pixel-perfect QA checklist (what you should verify in preview)
- Desktop (global header):
  - Logo height reads as the primary brand element (64px).
  - Nothing wraps: nav items stay in one line; CTA button remains vertically centered.
  - Sticky/scrolled state still looks premium (logo doesn’t feel squeezed).
- Mobile:
  - Logo is clearly readable (44px) without pushing the menu icon / CTA off-screen.
  - Header height feels intentional (not too tall, not too tight).
- Landing pages using LandingHeader:
  - Logo size matches the global header brand presence.
  - Call/WhatsApp buttons remain aligned and don’t collide with the logo.
- Footer:
  - Logo remains legible on dark background with the badge.
  - Spacing above/below doesn’t feel cramped after size increase.

Edge cases / adjustments (if needed after you look)
- If the larger logo forces the desktop nav to feel too close, we’ll reduce horizontal padding on nav triggers slightly (px-5 → px-4) rather than shrinking the logo.
- If the scrolled state feels too tall, we can keep scrolled at `h-18` (72px) while still keeping the logo at `h-14` (56px) only in scrolled state. (This is a “phase 2” tweak; first we’ll make the logo clearly big.)

Files expected to change
- `src/components/layout/Header.tsx`
- `src/components/landing/LandingHeader.tsx`
- `src/components/layout/Footer.tsx` (optional but recommended)
