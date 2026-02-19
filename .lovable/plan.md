
## Goal
1) Make the FAQ section display in two columns on desktop, with smaller FAQ text.
2) Redesign the final CTA section to match the look/structure of your reference image (clean centered card, icon badge, big headline with one accent word), while keeping your current CTA wording and keeping two buttons.

## What I found in your code
- The selected FAQ block is in: `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` around lines ~734–756.
  - It renders a single Radix accordion and maps `FAQS` (defined near the top of the same file).
- The “FINAL CTA” section is in the same file around lines ~758–798.
- LP styling helpers exist in `src/index.css` (e.g., `.lp-card`, `.lp-card-flat`) and are reused across landing pages.

## FAQ changes (two columns + smaller text)
### Approach (based on your choice: “CSS columns flow”)
We will keep one Accordion, but place the *items* inside a `columns-1 md:columns-2` container so FAQ items flow top-to-bottom in the first column then continue in the second column.

### Implementation details
1) In `CompanyFormationConsultancyLandingModern.tsx` FAQ section:
   - Wrap the mapped `<AccordionItem />` list with a div that uses Tailwind columns:
     - `className="columns-1 md:columns-2 md:gap-6"`
   - Add `break-inside-avoid` to each `<AccordionItem>` so an item doesn’t split between columns:
     - `className="break-inside-avoid"`
2) Make FAQ question/answer text smaller:
   - Update `AccordionTrigger` to use a smaller font:
     - e.g. `text-sm md:text-[13px] font-medium`
   - Update `AccordionContent` to be smaller as well:
     - e.g. `text-xs md:text-[13px] leading-relaxed text-muted-foreground`
3) Spacing tweaks for readability in columns:
   - Add per-item vertical spacing (since columns remove flex “space-y” behavior):
     - e.g. apply `mb-2 md:mb-3` on each AccordionItem, or add `py` padding within trigger/content.

### Edge cases / notes
- Radix Accordion “single” behavior will still work; opening an item in the left column won’t break layout.
- When an item expands, the column height changes; that’s expected with CSS columns. If you later prefer a more stable layout, we can switch to two separate accordions (left/right arrays) instead.

## CTA redesign (match reference image style, keep your copy, keep two buttons)
### Visual targets from your image
- Large rounded card with a thin border
- Very clean, centered layout
- Small “badge icon” floating at the top
- Headline with one accent-colored word
- Short supporting line
- Primary button emphasized; secondary button optional but present (you chose two buttons)

### Implementation details
1) Replace the current FINAL CTA inner layout (currently left text + right buttons) with a centered layout:
   - Center align text and buttons: `text-center`, `mx-auto`, constrained width like `max-w-3xl`.
2) Add a small top icon badge:
   - Use an existing Lucide icon already imported (e.g., `ShieldCheck` or `Sparkles`) inside a rounded square:
     - outer: `w-12 h-12 rounded-2xl border bg-background/80 backdrop-blur flex items-center justify-center`
     - inner: `w-5 h-5 text-accent`
   - Position: centered, slightly overlapping the card top (translate up) similar to screenshot.
3) Headline styling:
   - Keep your wording: “Ready to Start Your Business in Bahrain?”
   - Apply accent color to one word (e.g., “Business” or “Bahrain”) by splitting into spans:
     - `Ready to Start Your <span className="text-accent">Business</span> in Bahrain?`
4) Supporting copy:
   - Keep your existing paragraph but make it tighter and centered.
5) Buttons:
   - Keep two buttons but style to match the reference:
     - Primary: larger pill button, accent background (use your existing button class approach; if `.btn-gold` exists elsewhere we can reuse it; otherwise keep the default primary with rounded-full + padding tweaks).
     - Secondary: outline pill button, same height.
   - Place buttons centered and stacked on mobile:
     - `flex flex-col sm:flex-row gap-3 justify-center`
6) Background/decoration:
   - Keep `SectionBackgroundOverlay` but reduce visual noise so it matches the clean reference:
     - lower opacity and/or switch to a simpler overlay variant already used in the project (we’ll pick from existing variants in `SectionBackgroundOverlay`).
   - Ensure the card border and rounded corners match the screenshot:
     - `rounded-[32px]` (or `rounded-3xl`) + `border border-border/60`.

### Optional (if you want it even closer)
- Add subtle corner strokes using pseudo-elements; however that’s extra CSS. We’ll first try to match using existing overlays + border.

## Files to change
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`
  - FAQ section: add CSS columns wrapper + reduce font sizes.
  - Final CTA section: restructure markup to centered layout, add icon badge, highlight one word, restyle buttons.
- Potentially `src/index.css` (only if we need a reusable CTA helper class; otherwise we’ll keep it all Tailwind in the component).

## Acceptance checklist (what you’ll see in preview)
- FAQ:
  - On desktop: two columns of FAQs inside the same card.
  - On mobile: single column.
  - Question + answer text noticeably smaller and easier to scan.
- CTA:
  - Centered card with top icon badge.
  - Headline uses your wording with one accent-colored word.
  - Two centered buttons; primary looks stronger and closer to the reference.
  - Overall clean, minimal look similar to the screenshot.

## Quick question I’ll decide during implementation (no need for more input unless you care)
- Which word to highlight in accent color in the CTA headline (I’ll default to “Business” unless you specify “Bahrain”).
