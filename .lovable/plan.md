
## Summary of what will change
You want the landing page to feel more “premium + modern” by using relevant, consistent business imagery throughout (not just the hero), and you prefer people-focused images. We’ll introduce a cohesive image set (AI-generated), then refactor key sections into image-supported layouts so the page feels designed—not text blocks stacked.

## Goals (success criteria)
- Every major section on `/lp/company-formation` has a relevant modern business image (people-focused).
- Images feel consistent (same style, lighting, color grading) and don’t look random or stocky.
- Layout remains conversion-focused: Hero → Calculator → Summary → (unlock) Booking → Proof/FAQ → Final CTA.
- Fast loading: images are responsive, compressed, and lazy-loaded where appropriate.

## What I found in your code
- Page is `src/pages/landing/CompanyFormationLanding.tsx`.
- Hero already uses a strong image: `formation-hero-professional.jpg`.
- Sections “How it works”, “What happens on the call”, “Booking”, “Testimonials”, “FAQ” are currently mostly text/cards.
- You already have a strong pattern component for image + content sections: `SplitSection` (`src/components/shared/SplitSection.tsx`).
- There are many existing assets, but you specifically want new AI images for a modern consistent look.

## Image strategy (AI-generated, consistent set)
We’ll generate a small “collection” of images with matching:
- palette: clean neutrals + subtle navy/gold tones
- lighting: bright, soft daylight
- composition: minimal, premium, uncluttered
- constraints: no text, no logos, no watermarks, no flags, no brand marks

### Images to generate (recommended set)
1) **How it works** image  
   “Consultant explaining a simple process to a founder at a modern desk” (people + process vibe)

2) **What you get (call value)** image  
   “Professional consultation moment, document checklist on a tablet/laptop, clean office” (people + checklist)

3) **Booking** image  
   “Founder on a video call in a modern office, laptop with blurred UI, Google Meet vibe without branding” (people + booking)

4) **Testimonials / Results** image  
   “Happy founder handshake / small team smiling after meeting, premium editorial look” (people + trust)

5) **FAQ** image (optional but recommended)  
   “Close-up of hands reviewing official documents, subtle premium desk setup” (people + documents)

## UX/layout changes (what you’ll see)
### 1) How it works → convert to SplitSection with an image
- Left: text + steps (keep your 3 steps)
- Right: modern AI image
- Keep the “Book now” CTA inside the content side

### 2) What happens on the call → convert to SplitSection with an image
- Keep the current benefit grid + “Prefer to talk now”
- Add a relevant consultation image on the opposite side
- Preserve the existing band feel if you like, but make the content feel more “designed”

### 3) Booking section → add a dedicated image panel
Since Calendly already has a 2-column layout (widget + info panel), we’ll enhance the **info panel** to include:
- A top image (small, premium, rounded)
- Then “What you’ll get” bullets and contact options below
This makes the booking area look richer and more trustworthy.

### 4) Testimonials + FAQ → add imagery without feeling cluttered
- Testimonials: upgrade to larger editorial cards or add one “section image” above the testimonial grid (instead of forcing an image into each testimonial)
- FAQ: add a side image (SplitSection-like layout or a small image panel above the accordion), so it doesn’t feel like a generic FAQ block

## Technical implementation steps (files we will change)
### Step A — Add new images
- Generate the 4–5 images (as above).
- Save into a dedicated folder to keep things organized, e.g.:
  - `src/assets/company-formation/lp/how-it-works.jpg`
  - `src/assets/company-formation/lp/what-you-get.jpg`
  - `src/assets/company-formation/lp/booking.jpg`
  - `src/assets/company-formation/lp/testimonials.jpg`
  - `src/assets/company-formation/lp/faq.jpg` (optional)
- Ensure images are optimized (reasonable dimensions, compressed). Use `loading="lazy"` except hero.

### Step B — Refactor sections to use images
- **`src/pages/landing/CompanyFormationLanding.tsx`**
  - Replace the “How it works” section with a `SplitSection` block and import the new image.
  - Replace “What happens on the call” with a `SplitSection` block and import the new image.
  - Update Testimonials + FAQ sections to include new imagery in a controlled way (one image per section, not too many).

- **`src/components/consultation/CalendlyBooking.tsx`**
  - Add an optional `imageSrc/imageAlt` prop (or a `showImage` prop) for the right-side info panel.
  - Render a rounded image at the top of the info column (only when provided).

### Step C — Keep the conversion funnel intact
- No changes to calculator gating logic.
- Calendly still only appears after calculator results.
- No new lead capture fields added.

## QA checklist (what you will test after)
1) End-to-end flow:
   - Hero → scroll to calculator → complete → summary shows → booking unlocks → Calendly loads correctly
2) Visual check (most important here):
   - Each section has a relevant modern image
   - Images look consistent as a set (not mismatched styles)
3) Mobile:
   - SplitSection stacks nicely (image + content)
   - No awkward cropping, no overly tall images
4) Performance:
   - Images are not huge, and non-hero images are lazy-loaded

## Potential follow-up (optional, but high impact)
- Add subtle “image color grading” consistency (slight warm tone) via CSS filter or by regenerating with tighter prompts.
- Replace the hero image as well (only if you want an even more consistent “set”).

## Prompts (drafts I will use for AI generation)
I’ll use prompts along these lines (and tune after first generation):
- “Modern premium business consultation in a bright minimalist office, two professionals discussing, subtle navy and warm gold accents, editorial photography, shallow depth of field, no logos, no text, no watermark.”
- “Founder on a video call in a modern office, laptop visible with blurred interface, premium editorial lighting, minimal desk, no brand UI, no logos, no text.”
- “Hands reviewing official documents on a clean desk, premium stationery, soft daylight, minimal, no seals/logos readable, no text, no watermark.”

## Files expected to change
- `src/pages/landing/CompanyFormationLanding.tsx`
- `src/components/consultation/CalendlyBooking.tsx`
- New images in `src/assets/company-formation/lp/*`
- Potential minor CSS touch-ups (only if needed): `src/index.css`
