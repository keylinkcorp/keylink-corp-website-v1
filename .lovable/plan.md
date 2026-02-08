
<context>
Goal: Redesign the “What happens on the call” section on `/lp/company-formation` to match the modern reference: bigger/taller image block, tighter/cleaner header rhythm, and more refined boxed benefit cards with light borders and no shadows.

Current state:
- Section lives in `src/pages/landing/CompanyFormationLanding.tsx` as a `SplitSection`.
- `SplitSection` (in `src/components/shared/SplitSection.tsx`) renders a fixed two-column grid with a header and an image wrapper using `AspectRatio`.
- Benefits are already a 2-column boxed grid with light borders; the main gaps vs your screenshot are (a) the image height/weight and (b) the header spacing and (c) subtle card details (padding, border tone, icon treatment).
</context>

<what-will-change>
1) Make the image block feel bigger/taller (closer to the screenshot)
- In `CompanyFormationLanding.tsx`, update this section’s `imageRatio` from `16/10` to a taller ratio, likely `4/3` (or `3/2` if you want slightly less tall).
- Ensure the image container can visually “stand” next to the benefit grid:
  - Pass a dedicated `imageClassName` to increase perceived size and stability (e.g., ensure it’s not visually cramped by spacing).
  - If needed, extend `SplitSection` with an optional prop like `imageWrapperClassName` (or reuse `imageClassName`) that applies to the non-editorial image frame wrapper so we can enforce consistent height/min-height on desktop.

2) Header spacing/typography to match the reference rhythm
- The current badge spacing is controlled globally by `.section-badge` (it includes `mb-4`).
- To match your screenshot more precisely without changing global styles:
  - In `CompanyFormationLanding.tsx`, set `badge={undefined}` for this section and render a local badge pill inside the children area (or add a new optional `badgeClassName` prop to `SplitSection` and override only this section).
  - Reduce the vertical gaps: slightly smaller badge-to-title spacing and subtitle spacing.
  - Keep `useLpHeadings` so the title stays calm/premium (already aligned with your LP typography memory).

3) Benefit cards styling refinements (still flat, light borders, modern)
- In `CompanyFormationLanding.tsx`, tune each benefit card to match the screenshot:
  - Border lightness: keep `border-border/15`–`/20` range (slightly lighter than now if needed).
  - Surface: keep `bg-background` but consider `bg-background/90` or `bg-card` consistently (no shadow).
  - Padding: slightly increase to match screenshot (likely `p-6` on desktop, `p-5` on mobile).
  - Icon chip: adjust to a cleaner “check in subtle circle”:
    - circle: `border border-border/20` (lighter), optionally `bg-muted/10`
    - icon: keep `text-accent` and slightly thinner look by size (`h-4 w-4` is fine).
  - Text: move from `text-foreground/80` to a slightly stronger tone if needed for clarity, while remaining premium (e.g., `text-foreground/75`–`/85`).

4) Optional: tighten column proportions (only if it helps match your screenshot)
- If after the ratio change the layout still feels off, extend `SplitSection` with optional props to control column spans just for this section, e.g.:
  - `contentColSpanLg?: number` and `imageColSpanLg?: number` (default stays 6/6).
- This keeps the component flexible without affecting other sections.

</what-will-change>

<files-to-edit>
- Primary:
  - `src/pages/landing/CompanyFormationLanding.tsx`
- If needed for cleaner, local-only header spacing and/or image sizing:
  - `src/components/shared/SplitSection.tsx` (add small optional props to override badge class / image wrapper sizing or column spans)
</files-to-edit>

<acceptance-checklist>
On `/lp/company-formation`:
- Desktop:
  - Image looks noticeably taller/bigger and visually balanced with the benefits grid.
  - Badge/title/subtitle spacing matches the screenshot’s calmer rhythm (less “gappy”).
  - Benefit cards look modern and consistent: flat, light borders, no shadows, comfortable padding.
- Mobile:
  - Stacks cleanly; image remains nicely framed; benefit cards are single-column with good spacing and readable text.
- No shadows reintroduced anywhere in this section.
</acceptance-checklist>

<implementation-notes-technical>
- Prefer local overrides first (per-section markup/classes) to avoid unintended global ripple effects.
- Only extend `SplitSection` props if we cannot achieve the layout precisely through existing `imageClassName`, `imageRatio`, and local badge rendering.
</implementation-notes-technical>
