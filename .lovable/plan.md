
<context>
Goal
- Redesign the “What happens on the call” section on /lp/company-formation to match the modern reference (image-9):
  - Bigger image block (wider image column on desktop)
  - Cleaner header rhythm
  - Benefit cards upgraded to “title + detail” layout with unique icons
  - Add “trust highlights” inside the section to improve Google Ads conversion (reassurance + credibility) without adding heavy motion or shadows.

Current implementation
- Section component: src/pages/landing/company-formation/CompanyFormationCallSection.tsx
  - Uses SplitSection with imagePosition="left", backgroundVariant="ibelick-lines", overlayOpacity=0.35, imageRatio=4/3
  - Benefits currently render as single-line text with an icon chip.
- Layout component: src/components/shared/SplitSection.tsx
  - Desktop split layout uses fixed lg:col-span-6 / lg:col-span-6 (cannot currently widen image column).
</context>

<design-changes (what will change visually)>
A) Desktop layout: wider image column
- Match screenshot proportions by making the image column wider than the content column on lg+.
- Target: image 7/12, content 5/12 (or 8/12 + 4/12 if needed, but we’ll start with 7/5 to keep text comfortable).

B) Header rhythm: tighter + cleaner
- Keep the existing pill badge (already good).
- Tighten spacing so badge → title → subtitle feels closer to the reference:
  - Slightly reduce header bottom margin and subtitle top margin.
  - Keep calm LP heading scale (useLpHeadings).

C) Benefit cards: “title + detail” format + unique icons
- Replace each benefit’s single sentence with:
  - Title (short, scannable)
  - Detail (one short supporting line)
- Card layout:
  - Flat, shadowless, light border, rounded-2xl
  - Icon placed to the left of the text block (like the reference), sized consistently.
  - Typography: title slightly stronger; detail slightly muted but readable (avoid too-low contrast).

D) Add “Trust highlights” row (conversion booster)
- Add a small 3-item highlight row under the subtitle and above the benefit grid:
  - Example items (final copy will be concise, ad-friendly):
    1) “Free 30‑minute call”
    2) “Transparent pricing”
    3) “3–7 day typical timeline”
- Each item includes a small icon and short text, rendered as a calm inline row that wraps on mobile.
- No animation; no heavy emphasis; just clarity and reassurance for ad traffic.
</design-changes>

<implementation approach (exact code steps)>
1) Extend SplitSection to support custom desktop column spans (needed for wider image column)
File: src/components/shared/SplitSection.tsx
- Add optional props:
  - contentColSpanLg?: number (default 6)
  - imageColSpanLg?: number (default 6)
- Use these to build the className for the two lg column wrappers:
  - content wrapper: `lg:col-span-${contentColSpanLg}`
  - image wrapper: `lg:col-span-${imageColSpanLg}`
- Validate sum = 12 (if not, we’ll still render but we’ll choose defaults to keep 12 in our usage).

2) Update CompanyFormationCallSection to use wider image column
File: src/pages/landing/company-formation/CompanyFormationCallSection.tsx
- Pass:
  - imageColSpanLg={7}
  - contentColSpanLg={5}
- Keep imageRatio at 4/3 (already close to reference).
- Optionally increase perceived image “presence” with a slightly stronger border (still light) by using existing SplitSection imageFrame="flat" and (if needed) tweaking imageClassName.

3) Refactor benefits data to “title + detail”
File: src/pages/landing/company-formation/CompanyFormationCallSection.tsx
- Change BenefitItem shape from:
  - { label, Icon }
  to:
  - { title, detail, Icon }
- Update copy to be more scannable (example mapping):
  - “Business structure advice” + “Tailored to your goals”
  - “Transparent cost breakdown” + “No hidden fees”
  - “Realistic timeline estimate” + “Based on your setup”
  - “Document checklist” + “What to prepare to start”
  - “Direct Q&A” + “Talk with our setup experts”
  - “Next-step plan” + “Simple and actionable”
- Update card markup:
  - Layout: icon left, text stack right
  - Text: title `text-sm font-semibold text-foreground`, detail `text-sm text-muted-foreground` (tuned so it’s still readable)
  - Keep padding slightly larger (p-6 desktop, p-5 mobile).

4) Add Trust highlights row under subtitle
File: src/pages/landing/company-formation/CompanyFormationCallSection.tsx
- Insert a new block between the header and the benefit grid:
  - A responsive flex row with 3 items
  - Each item: tiny icon + short text
  - Styling: very light border or subtle background only if needed; otherwise plain inline row to avoid visual clutter
- Icons (auto-pick Lucide): e.g., Clock / ShieldCheck / ReceiptText / Sparkles (final selection will match the highlight meaning and existing icon palette).

5) Polish pass to match the screenshot
- Header spacing:
  - Adjust SplitSection props already in use: headerClassName, titleTopMarginClassName, subtitleTopMarginClassName, leadClassName.
- Card borders:
  - Ensure consistent border opacity across cards (likely /15 to /20).
- Background grid:
  - Keep ibelick-lines but reduce opacity slightly if it competes with text (e.g., 0.25–0.35 range).
</implementation approach>

<acceptance checklist>
On /lp/company-formation:
- Desktop
  - Image is visibly wider than the text column (closer to reference).
  - Badge/title/subtitle spacing feels tight and premium (not “gappy”).
  - Benefit cards show icon + title + detail and feel modern, flat, and consistent.
  - Trust highlights row is visible, readable, and supports decision-making without clutter.
- Mobile
  - Layout stacks naturally, no overflow.
  - Trust highlights wrap cleanly.
  - Benefit cards remain readable with comfortable spacing.
- No heavy shadows or distracting animations are introduced (low motion stays intact).

<files to change>
- src/components/shared/SplitSection.tsx (add optional column span props)
- src/pages/landing/company-formation/CompanyFormationCallSection.tsx (benefit card redesign + trust highlights + pass wider column spans)
</files to change>

<notes (conversion-focused, Google Ads)>
- “Trust highlights” act as rapid reassurance for cold traffic and reduces uncertainty before the calculator/booking gate.
- Title+detail benefits improve scanning on mobile and make the value more obvious at a glance.
- Wider image column increases perceived premium quality and credibility (visual authority) without adding friction.
</notes>
