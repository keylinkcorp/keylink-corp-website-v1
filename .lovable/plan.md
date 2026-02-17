
## What you want (interpreting your last message + screenshot)
- Use “real icons” (Lucide, but minimal) and change the card layout to:
  - icon at the top
  - text underneath
- Apply this style specifically to:
  - “Common blockers” cards
  - “Benefits” cards
- Keep the design minimal (less visual noise)
- Put the call-to-action as **one CTA under the grid** (not inside each card)

Your screenshot shows a calm grid of rounded cards with a tiny marker on top-left and clean typography. We’ll match that feel while still using minimal Lucide icons.

---

## Where in the code this lives
File:
- `src/pages/landing/CompanyFormationConsultancyLanding.tsx`

Sections to update:
1) **Common blockers** grid (inside the `SplitSection` labeled “Common blockers”)
   - Currently: horizontal layout (`flex gap-3`) with a `HelpCircle` icon to the left and text beside it.
2) **Benefits** grid
   - Currently: horizontal layout with an icon badge on the left and text to the right.

We will *not* touch Pricing (already removed), the calculator, or other sections unless needed for consistency.

---

## Implementation approach (what I will change)

### 1) Common blockers cards → icon-top + text-bottom (minimal)
Current:
- Each card: `lp-card ... flex gap-3`
- Icon: `<HelpCircle className="h-5 w-5 ..."/>`
- Text: `text-sm ...`

Planned update:
- Switch each card to a vertical layout:
  - `flex flex-col` (or no flex; just stacked elements)
- Replace the left icon with a small, subtle icon container at the top:
  - a small rounded container (not big badge), e.g. `h-9 w-9 rounded-full border ... bg-muted/20`
  - icon inside with restrained sizing, e.g. `h-4 w-4 text-accent`
- Increase the text size + line-height to match the editorial direction:
  - move from `text-sm` to `text-base` (or rely on the `.cfc-typography` overrides)
- Optional: make the card padding slightly more generous for breathing room (without becoming huge)

Icon choice:
- Instead of using the same `HelpCircle` for every item (feels repetitive), we’ll map each blocker to a distinct but minimal icon (example set):
  - approvals/licensing → `FileText` or `ClipboardList`
  - documentation → `FileText`
  - timelines → `Clock`
  - inconsistent info → `Layers` or `MessageSquareText`
  - office/address cost drivers → `Route`
  - visas/compliance → `Shield` / `ShieldCheck`
This keeps “real icons” while staying minimal and consistent.

### 2) CTA placement for the blockers grid
You chose: “One CTA under grid”.
- Keep (or slightly refine) the existing CTA block already under that grid (`lp-card-flat ... Button`).
- Ensure spacing looks intentional after the card layout change (likely increase top margin a bit).

---

### 3) Benefits cards → icon-top + text-bottom (minimal)
Current:
- Card is horizontal: icon badge at left, text right.

Planned update:
- Change each benefit card to stacked layout:
  - top: minimal icon container (same style as blockers for consistency)
  - below: title (slightly larger/stronger)
  - below: description (clean, readable)
- Keep grid as-is (`md:grid-cols-2 lg:grid-cols-3`), but adjust card padding + spacing to look more typographic:
  - e.g. `gap-2` internal spacing, slightly larger title, calmer muted description.

We will keep Lucide icons but make them uniform:
- same size for all
- same container shape
- same accent color
- no oversized badges

---

### 4) Reduce visual noise further (minimal polish)
To keep the page “minimal”:
- Ensure icons don’t appear in too many places at once:
  - We’ll leave existing functional icons (phone icon inside button) as-is.
  - In the Common blockers + Benefits sections we’ll standardize icon style and keep them small.
- Align typography:
  - Use consistent title sizes within cards
  - Ensure paragraphs don’t drop back to `text-sm` accidentally (the `.cfc-typography` wrapper already helps)

---

## Safety / TypeScript considerations (to avoid icon typing issues)
- When we store icons in arrays, we’ll use a stable type like:
  - `Icon: LucideIcon` (imported type) or `typeof Check` pattern already used in your hero component.
- We’ll avoid mixing incompatible icon-like values (prevents the TS2786/TS2322 issues noted in your tool context).

---

## Step-by-step edit checklist (what I’ll do in Default mode)
1) Update “Common blockers” items array to include an `Icon` per item (or build a separate mapping).
2) Refactor the blockers card JSX to stacked layout:
   - icon container on top
   - text beneath
3) Keep the single CTA under the blockers grid; adjust spacing if needed.
4) Refactor the Benefits card JSX to stacked layout:
   - icon container on top
   - label + desc beneath
5) Quick pass to remove any unused Lucide imports (since we’ll introduce a couple new icons and maybe remove `HelpCircle` usage in that grid).
6) Sanity-check the page in preview:
   - desktop + mobile widths
   - ensure spacing and alignment look like your screenshot inspiration (minimal, calm, typographic)

---

## What you should verify after I implement
- The “Common blockers” grid visually matches the screenshot style:
  - icon at top, text below, minimal
- The Benefits cards are now more editorial (less “icon UI kit” feel)
- No layout regressions on mobile (cards wrap nicely, spacing looks balanced)
- CTAs remain clear and not duplicated inside cards

