
## Goal
Upgrade the **/free-zone-in-bahrain** pillar page (and the 4 zone cluster pages) so the design feels modern, minimalist, image-led, and consistent with your best-performing service pages—while also expanding SEO depth (semantic coverage, headings, internal links, schema) to compete with long-form competitors.

---

## What I found in your code (current state)
### Current pillar page composition
`src/pages/FreeZoneInBahrain.tsx` uses:
- `ServiceHero` (clean, but no hero image)
- Custom sections:
  - `FreeZoneQuickAnswer`
  - `FreeZoneComparison`
  - `FreeZoneCostsFees` (cards + examples already exist)
  - `FreeZoneDocumentsChecklist` (download CTA + internal links already exist)
  - `FreeZoneSetupSteps`
  - `FreeZoneFAQ` (FAQPage JSON-LD)
- Ends with `FormationCTA`

### Design consistency gap
Many of your other service pages (example: `src/pages/services/CRRenewal.tsx`) feel more “premium and complete” because they use shared building blocks from:
`src/components/services/shared/*`:
- `ServiceTrustBar`, `ServiceBenefits`, `ServicePricing`, `ServiceWhyChoose`, `RelatedServicesGrid`, `ServiceCTA`, etc.

The free-zone page currently looks more like “a set of nice sections” than a single, cohesive, high-converting landing page.

### Images already available in the repo
You already have lots of professional images in `src/assets/*` (business, logistics, documents, team, process). The free-zone pages currently use **almost none** of them, which is why the page feels “empty” visually.

---

## Competitor insights (top pages we sampled)
From quick competitor sampling:
- **pistartup.co/free-zone-in-bahrain**: very long guide-style page with many H2/H3 sections + “mainland vs free zone”, step-by-step process, and heavy keyword repetition. Length is substantial (multi-thousand words).
- **setupinbahrain.com/register-your-business...**: long-form guide + packages + many headings, checklists, WhatsApp-first conversion.
- **propartnergroup.com/blog/free-zones...**: shorter but includes zone-by-zone costs/land rates and comparison overview.

### Implication
To compete, our pillar page needs:
- More **semantic breadth** (not just “zones + steps”, but also “mainland vs zones”, “cost drivers”, “requirements”, “who it’s for”, “mistakes”, “timeline”, “licensing + CR + lease + visas”)
- More **supporting visuals** to keep engagement high (reduce pogo-sticking)
- Strong internal linking into the 4 zone pages (already started) + add “related services” cluster links.

---

## SEO strategy (keyword + semantic mapping)
### Primary keyword
- **Free zone in Bahrain**

### Long-tail / supporting semantic keywords to map into headings + paragraphs naturally
- free zone in Bahrain **cost**
- **company formation cost in Bahrain**
- Bahrain Logistics Zone (BLZ)
- Bahrain International Investment Park (BIIP)
- Bahrain Investment Wharf (BIW)
- Sitra Industrial Area
- industrial zone in Bahrain
- warehouse / logistics license Bahrain
- commercial registration (CR) Bahrain
- lease contract registration Bahrain
- visa & immigration Bahrain
- 100% foreign ownership Bahrain (activity dependent)
- setup timeline / registration timeline Bahrain

### Content rule (important)
We will **not** “keyword stuff” or write obviously AI-shaped paragraphs.
Instead, we’ll:
- Use short, specific sentences
- Add practical constraints (“depends on activity approvals”, “facility type”, “sqm”, “regulated activities”)
- Use “decision guidance” language (the kind humans write)
- Add helpful microcopy (notes, disclaimers, examples)
- Keep each section scannable with lists, cards, callouts.

---

## UX / UI redesign approach (modern minimalist, consistent)
### Design principles to apply
- Consistent section headers (badge → H2 → 1 paragraph)
- Alternate subtle backgrounds (bg-background vs bg-secondary/30 or /40) for rhythm
- Add **image anchors** (1 image per 1–2 sections) to avoid text-only feel
- Use consistent card styles: `card-elevated` / `card-elevated-hover`
- Keep headline sizing controlled (avoid huge H2 blocks)
- Improve “conversion rails”: repeat CTA blocks at strategic points

### What we will reuse for consistency
From `src/components/services/shared/`:
- Add a **Trust bar** section after hero (numbers-based credibility)
- Add a **Benefits** section (why Keylink / why this approach)
- Add a **Related services** section near the bottom (supports SEO + navigation)
- Keep `FormationCTA` or replace with `ServiceCTA` (choose one consistent CTA style)

---

## Image plan (more images, relevant, performance-safe)
### Source options
1) **Reuse existing professional images** in `src/assets/` (fastest, consistent look).
2) **Generate AI images** (as you requested) for zone visuals / abstract logistics / industrial parks.
   - We will generate in a consistent style (same lighting, palette, composition).
   - Then we’ll add them to `src/assets/free-zone/` and reference locally.

### Where images will appear (pillar page)
- Hero: add a right-side image (port/logistics/industrial skyline)
- Comparison: small image banner or card image strip
- Costs: small image (documents + calculator / logistics warehouse)
- Documents: image (passport/documents/clipboard)
- Steps: image (process / consultant planning)
- FAQ: optional subtle image or keep clean

### Performance requirements
- Use `loading="lazy"` below the fold
- Set `width/height` or aspect-ratio containers to avoid layout shift
- Always include descriptive `alt` text (SEO + accessibility)

---

## Concrete implementation changes (files/components)
### A) Create a shared “split section with image” component (for consistency)
Create a reusable component (new file) similar to patterns used in other services:
- `src/components/shared/SplitSection.tsx` (name can vary)
Features:
- Left content (badge, H2, paragraph, bullets, CTA)
- Right image (rounded-2xl, subtle border/shadow)
- Props for background variant (light/secondary), image position, etc.

We will use this component multiple times on the pillar page to maintain visual consistency.

### B) Upgrade the hero to include an image (without breaking other pages)
Current `ServiceHero` is used widely; changing it globally is risky.
Instead:
- Create **a new hero variant** specifically for high-conversion pillar pages:
  - `src/components/services/shared/ServiceHeroSplit.tsx`
It will:
- Reuse same badge + typography system
- Add a right-side image
- Keep headline sizing slightly smaller than the current `ServiceHero` (per your request)

Then update:
- `src/pages/FreeZoneInBahrain.tsx` to use `ServiceHeroSplit` instead of `ServiceHero`

### C) Make the free-zone sections feel like one cohesive page
Update these existing free-zone components to include visuals and better spacing consistency:
- `FreeZoneQuickAnswer.tsx`
  - Add a right-side image or a bottom image callout
- `FreeZoneComparison.tsx`
  - Add a small “Zone snapshot” image strip or a visual card header pattern
- `FreeZoneCostsFees.tsx`
  - Add one supporting image (calculator + documents style)
  - Add 2–3 short “cost notes” callouts (e.g., regulated activities, sqm, approvals)
- `FreeZoneDocumentsChecklist.tsx`
  - Add image + make download CTA more prominent
  - Add a secondary CTA to CR/Lease/Visa pages (already present; we’ll improve UI hierarchy)
- `FreeZoneSetupSteps.tsx`
  - Add a process illustration image
- `FreeZoneFAQ.tsx`
  - Expand FAQs (more long-tail coverage) while keeping concise answers

### D) Add “Trust + Benefits + Related services” sections for consistency
In `src/pages/FreeZoneInBahrain.tsx`, insert:
- `ServiceTrustBar` (stats tailored to free-zone intent: “zones compared”, “avg planning time”, “businesses supported”, etc.)
- `ServiceBenefits` (5 cards)
- `RelatedServicesGrid` near bottom to strengthen internal linking

### E) Improve zone cluster pages (BLZ/BIIP/BIW/Sitra)
Currently zone pages are thin and have no images.
For each of:
- `src/pages/free-zone/BLZ.tsx`
- `src/pages/free-zone/BIIP.tsx`
- `src/pages/free-zone/BIW.tsx`
- `src/pages/free-zone/Sitra.tsx`

We will:
- Switch to `ServiceHeroSplit` (with zone-relevant image)
- Add 1 additional section per page:
  - “Who it’s best for”
  - “Typical facility + approvals”
  - “Cost drivers” (short)
  - Internal links back to pillar + to 2 other zone pages (cross-linking)
- Keep each zone page unique enough to avoid thin/duplicate content concerns

### F) Add schema enhancements (SEO)
Already: FAQPage JSON-LD exists on pillar.
We will add:
- **BreadcrumbList** JSON-LD on zone pages (pillage → zone)
- Optional **HowTo** schema for the setup steps on the pillar page (if we keep it truly step-by-step and not too marketing-y)

---

## Content upgrade plan (non-AI-detectable, Google-friendly)
### Expand pillar page content while staying minimalist
We’ll add 3 new lightweight sections that increase semantic coverage without making the page “bloggy”:
1) “Mainland vs industrial zones: when each makes sense”
2) “What impacts approval time (and why projects get delayed)”
3) “Common mistakes to avoid (address mismatch, wrong activity, underestimating sqm)”

All will be short, card-based, scannable, and visually balanced with images.

### Target length
Aim for roughly:
- Pillar page: ~1,800–2,500 words (scannable, not walls of text)
- Each zone page: ~700–1,200 words (enough depth to be useful + unique)

---

## AI image generation plan (consistent aesthetic)
We will generate 5–8 images total:
- 1 hero image for pillar page
- 1 image for Costs
- 1 image for Documents
- 1 image for Steps/Process
- 4 zone hero images (BLZ/BIIP/BIW/Sitra)

Style prompt constraints:
- Minimalist, modern corporate photography look
- Bahrain / GCC logistics + industrial context
- Navy/gold-friendly color grading (to match your brand)
- No visible logos, no readable text on buildings/signs, no watermarks

Then:
- Save to `src/assets/free-zone/` with consistent naming
- Use them in components with proper alt text

---

## QA checklist (what we will verify after implementation)
- Visual consistency: spacing, card styles, section header patterns
- Mobile responsiveness: images scale, no overflow, CTAs reachable
- Performance: lazy loading, no layout shift, optimized asset usage
- Internal links: pillar ↔ zone pages ↔ services work correctly
- SEO basics: title/meta/canonical unchanged and correct per page, headings hierarchy (H1 once), no duplicate H1
- Schema: FAQ schema still valid; breadcrumb schema renders once per zone page

---

## Deliverables
1) Modern, image-led **Free Zone in Bahrain** pillar page with consistent Keylink design language
2) Updated **BLZ/BIIP/BIW/Sitra** pages with images + more unique content + stronger interlinking
3) New reusable UI building blocks (hero split + split sections) for future landing pages
4) AI-generated image set in a unified style, integrated into the UI

---

## Estimated implementation sequence (safe + incremental)
1) Add new shared UI components (`ServiceHeroSplit`, `SplitSection`)
2) Update pillar page to use new hero and add trust/benefits/related sections
3) Update each free-zone section component to include visuals and improved hierarchy
4) Update 4 zone pages with images + additional unique sections + breadcrumbs schema
5) Generate/import AI images and wire them in
6) Final polish pass: spacing, typography sizing (headlines not too large), consistent backgrounds, mobile QA
