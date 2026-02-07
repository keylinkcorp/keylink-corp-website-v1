
Goal
- Update /lp/company-formation to feel like the MagicUI references: centered content column, generous whitespace, and faint left/right “page frame” borders (subtle 1px lines), while keeping your Gold/Navy brand accents and the conversion-first structure.

What I observed in your current implementation
- The page uses full-width sections with occasional background bands (e.g., bg-muted/20), but the visual “centered column” is not consistent because backgrounds and containers are applied at section level rather than a single page frame.
- The hero currently has stronger decorative effects (noise + mesh + floating orbs) than MagicUI’s cleaner, calmer “centered canvas” look.
- Your UI already has good tokens/utilities (border, muted, glass-card-light, etc.). We can reuse them and add 1–2 simple “page frame” utilities.

Design direction from your references (Agent/CodeForge MagicUI)
- A “page canvas” centered with a max width, sitting on a slightly tinted outer background.
- Very subtle vertical border lines on left/right of the canvas, present throughout scroll.
- Cleaner hero background: soft gradients, minimal decoration, clear type hierarchy.

Critical clarification needed (one decision)
- You didn’t answer “Side borders” placement. I’ll implement “Full-page frame” by default (most consistent with the MagicUI feel). If you prefer hero-only or key-sections-only, we’ll adjust quickly afterward.

Implementation approach (no backend changes)
We’ll implement a reusable “LP frame” wrapper that:
- Applies a soft outer background tint to the whole viewport.
- Centers a max-width “canvas” with subtle left/right borders.
- Keeps header/footer aligned with the same canvas (so the frame feels continuous).
- Moves section background bands inside the canvas so they don’t break the centered-frame illusion.

Files to change
1) src/pages/landing/CompanyFormationLanding.tsx
2) src/index.css (add 1–2 small utilities for the frame and optional soft gradient)

Step-by-step changes

1) Create a centered “canvas frame” for the entire landing page (CompanyFormationLanding.tsx)
- Wrap the whole page content in an outer background:
  - Outer wrapper: min-h-screen + a very light tinted background (e.g., bg-muted/20 or a custom subtle gradient utility)
- Add an inner “LP canvas” wrapper:
  - mx-auto max-w-[1100px] (or similar)
  - border-l border-r border-border/60 (your “Subtle line” choice)
  - bg-background
  - Ensure it stretches full height and keeps consistent padding rhythm:
    - Keep inner padding on sections via existing container classes, but ensure the frame provides the visual boundary.

2) Make section backgrounds consistent inside the frame (CompanyFormationLanding.tsx)
- Currently some sections use bg-muted/20 at the section level (full width).
- Change these so the “muted band” background is applied inside the canvas only:
  - Option A (recommended): keep the section full-width but inside it, add a band div with bg-muted/20 and border-y, and keep content within it.
  - Result: you still get alternating bands, but they appear inside the centered framed column rather than spanning the entire viewport.

3) Adjust the TrustBar positioning for the new frame (CompanyFormationTrustBar.tsx usage)
- The TrustBar is currently pulled upward with negative margin (-mt-6 / -mt-10).
- With a strict framed canvas, we’ll verify it doesn’t visually “collide” with the frame border.
- Likely adjustments:
  - Reduce negative margin slightly, or
  - Add top padding to the first content section so the overlap feels intentional.

4) Soften the hero to match the MagicUI “centered canvas” aesthetic (CompanyFormationHeroMontage.tsx)
- Keep minimal imagery (1 hero image + 2 editorial cards) as you requested.
- Reduce visual noise:
  - Tone down or remove floating orbs (these read more “decorative landing page” than “MagicUI clean”).
  - Keep mesh gradient but lower intensity (opacity) so it feels like a soft wash.
  - Reduce noise texture opacity if it makes the canvas feel “dirty” rather than “premium”.
- Tighten the hero container spacing to a more MagicUI-like centered composition:
  - Slightly reduce top padding on desktop (pt-14 md:pt-20 can feel tall once framed).
  - Keep headline and subcopy centered-left aligned as-is (conversion friendly), but ensure line lengths match the “canvas” width.

5) Add a small CSS utility for the frame (src/index.css)
- Add a utility class (example names):
  - .lp-canvas (max-width + border-x + background)
  - Optional: .lp-outer (subtle gradient background behind the canvas)
- Use existing tokens (border, muted, background) so everything stays consistent with the design system.

6) Visual QA checklist (end-to-end)
- Desktop:
  - Frame borders visible but subtle; consistent through all sections including header and footer.
  - Alternating muted bands appear inside the framed column (not full-bleed).
  - Hero looks calmer and more “MagicUI clean” (less busy background).
- Mobile:
  - Borders can be removed or reduced (optional) to avoid cramped feel; alternatively keep but ensure padding is sufficient.
  - No horizontal scroll.
  - Primary CTA remains dominant; WhatsApp/Call stay secondary.

Risks / trade-offs
- Applying a global framed canvas means any full-bleed section backgrounds must be refactored to avoid breaking the frame illusion.
- Negative margin overlaps (TrustBar) need rebalancing so the frame feels intentional rather than “misaligned”.

After this, optional enhancements (if you want it even closer to MagicUI)
- Add a very subtle “top-to-bottom vignette” on the outer background.
- Add faint grid/noise only in the outer background (not inside the canvas) so the content stays crisp.
- Standardize all section headings to the same max width and spacing to strengthen the “centered editorial” rhythm.

Definition of done
- /lp/company-formation has a centered, consistent canvas with faint left/right border lines (subtle 1px).
- Background bands and content feel cohesive inside that canvas.
- The hero reads cleaner and more premium (closer to MagicUI references) while keeping your CTA and price anchor intact.