
## Goal
Create a dedicated, high-converting Google Ads landing page for “Company Formation in Bahrain” that:
- Keeps users on a single page (no navigation to other pages)
- Shows only a simple header (logo) and a simple footer
- Focuses on lead capture (booking + WhatsApp + call + optional short form)
- Uses images to look credible/professional while protecting page speed and conversions
- Is **noindex** and has **canonical** pointing to the main service page to avoid duplicate-content SEO issues

You confirmed:
- Primary action: “all” (booking + WhatsApp + call, and optionally a form)
- Routing: **new /lp page**
- SEO: **noindex + canonical to /services/company-formation**
- Images: **Balanced**

---

## What we will build (page structure optimized for conversion)
### 1) Minimal header (sticky, no nav)
- Logo only (clicking logo can either do nothing or scroll to top; to avoid “leaving,” we will not link to the homepage)
- Right side: small “Call” + “WhatsApp” buttons (these are conversions, not “page jumping”)
- No mega menu, no other links

### 2) Hero section (above the fold)
- Strong headline + subheadline tailored for ads (clear offer + timeframe + starting price)
- 3–4 bullet trust points (100% foreign ownership, 3–7 days, MOIC/LMRA support, transparent pricing)
- Primary CTA: “Book Free Consultation” (scrolls to booking section on the same page)
- Secondary CTA: WhatsApp / Call
- 1 high-quality hero image (eager load), with the rest of images lazy-loaded

### 3) Trust bar (social proof)
- Keep it compact: “500+ businesses”, rating strip, key authority badges
- This can reuse existing design language (FormationTrustBar / HeroReviewStrip) but ensure links don’t navigate away

### 4) “How it works” (3 steps)
- Simple 3-step process with icons + small supporting image (lazy)
- Keep copy short for ad traffic

### 5) “What you get in the consultation” + outcomes
- Convert curiosity into a booking
- Bullet list + mini “deliverables” card

### 6) Booking section (on-page Calendly embed)
- Embed Calendly directly on this landing page (no redirect)
- Add a clear heading and reassurance text (“Free, 30 minutes, no obligation”)
- Make this section the scroll target for CTAs (id like `#book`)

### 7) Testimonials (short)
- 2–3 testimonials max, optimized for scannability
- Optional supporting headshots/images (lazy)

### 8) FAQ (short)
- 5–7 questions max (accordion)
- Remove links that go elsewhere

### 9) Final CTA band
- Repeat booking + WhatsApp + call
- Include business hours

### 10) Minimal footer
- Very small: copyright + Privacy/Terms/Cookie
- No services/resources columns to avoid “leaving” the landing page

---

## Image strategy (balanced: “looks real” without losing leads)
We’ll use existing local assets already in `src/assets/` (you already have multiple formation/consulting photos).

Rules we’ll apply:
- Only the hero image loads immediately; all other images use `loading="lazy"` and proper sizing classes.
- Prefer `.webp` where available (you already have some .webp assets).
- Keep images contextual (consultation, professional meeting, documents) rather than decorative.
- Limit total images to ~5–8 for the landing page (enough to feel credible, not so many it slows down).
- Ensure every image supports a conversion element (trust, process, proof), not filler.

---

## SEO + Ads behavior
- Add `<meta name="robots" content="noindex, nofollow" />` (or “noindex, follow” depending on your preference; default will be noindex, follow).
- Set canonical to `https://keylinkcorp.com/services/company-formation`.
- Title/meta description optimized specifically for ads (clarity > SEO breadth).
- Keep the page fast and stable (reduce layout shift by providing consistent image containers).
- Optional (recommended): pass UTM parameters through to Calendly by appending `window.location.search` to the Calendly URL so your team can see campaign data in bookings.

---

## Implementation plan (code-level)
### A) Create a new landing page route
1. Add a new page component, e.g.
   - `src/pages/landing/CompanyFormationLanding.tsx`
2. Add a new route in `src/App.tsx`:
   - `/lp/company-formation` → `<CompanyFormationLanding />`

### B) Add minimal layout components (no nav)
Create 2 lightweight components (or one “LandingLayout”):
- `LandingHeader` (logo + call/WhatsApp buttons, no menu)
- `LandingFooter` (small footer with legal links)

These should not reuse the existing `Header`/`Footer` because those contain large navigation and many outgoing links (which you explicitly don’t want for ads traffic).

### C) Compose the landing page using reusable sections
- Reuse what makes sense from existing formation components, but modify behavior so CTAs scroll to `#book` rather than navigating to `/free-consultation`.
  - Example: adapt `FormationHero` CTAs to `scrollIntoView()` for booking section.
- Reuse `CalendlyBooking` but ensure:
  - It can accept a `calendlyUrl` prop (so we can append UTM params)
  - Or we wrap it with a small landing-specific booking component that controls the URL

### D) Ensure “no page jumping”
- Remove all internal `<Link>` elements that navigate away from the landing page.
- Replace them with:
  - Scroll actions to on-page sections (`#book`, `#faq`)
  - External conversion actions only (tel:, wa.me)
- Disable logo navigation (or keep it as “scroll to top”).

### E) Performance & UX checks
- Confirm the landing page is performant on mobile:
  - Largest Contentful Paint: hero image + headline
  - Minimal layout shift
  - Buttons large enough for thumbs
- Make sure the floating WhatsApp widget (if included) does not cover key CTAs. We can:
  - Keep it, but reduce prominence on the landing page
  - Or replace it with a simpler sticky bottom CTA bar (often higher converting for ads)

### F) Tracking readiness (non-invasive)
- If you already use Google Ads conversion tracking via GTM/GA4 (not shown in code yet), we won’t break it.
- Optional: add simple click event hooks later (requires analytics integration decision).

---

## Content guidance (what to say to convert better)
We will keep copy tight and “ad-friendly”:
- Headline: “Company Formation in Bahrain (2026)”
- Proof: “500+ businesses, 40+ countries”
- Offer clarity: “From BHD 750”, “3–7 days”
- Risk reversal: “Free consultation, no obligations”
- Strong single intent: “Book your consultation now”

---

## Acceptance criteria (what you’ll check after implementation)
1. Visiting `/lp/company-formation` shows:
   - Logo-only header + simple footer
   - No menus, no long footer link lists
2. All “Book” CTAs scroll to the booking section on the same page (no navigation).
3. WhatsApp and phone links work.
4. Page loads fast on mobile (no huge image downloads beyond the hero).
5. Page has `noindex` and canonical points to `/services/company-formation`.
6. Existing `/services/company-formation` page remains unchanged.

---

## Open questions (not blocking, but will improve results)
- Do you prefer a sticky bottom mobile bar (“Book / WhatsApp / Call”) instead of the floating WhatsApp bubble for this landing page? This often improves conversion for ad traffic.
- Should the logo be clickable (scroll to top) or not clickable at all?

Once you approve, I’ll implement the new `/lp/company-formation` page, add the minimal header/footer, wire CTAs to on-page booking, and ensure images are optimized for conversion and speed.
