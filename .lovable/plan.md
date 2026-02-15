
Goal
- Create a new “v2” landing page that duplicates the /lp/company-formation flow but uses your provided policy-compliant “Company Formation Consultancy in Bahrain” content and structure.
- Keep it conversion-focused (primary “Consultation” CTA repeated 5+ times, click-to-call on mobile, trust signals every 2–3 sections) and policy-compliant (disclaimer above fold, no restricted wording, explicit non-government footer disclaimer).
- Keep it in test mode as “Noindex” while you run ads.

What will be created
1) New route + page
- Add a new route: /company-formation-consultancy-bahrain
- Create a new page component (e.g., src/pages/landing/CompanyFormationConsultancyLanding.tsx).
- Keep the existing /lp/company-formation unchanged.

2) Reuse existing landing shell (so it stays consistent)
- Reuse <LandingHeader /> and <LandingFooter /> for consistent sticky header + simple footer links.
- Keep the same smooth-scroll pattern (scrollToId) used on /lp/company-formation.

3) SEO meta behavior (Noindex, as requested)
- Set document.title to: “Company Formation Consultancy Bahrain | Business Setup Experts”
- Set meta description to your provided copy.
- Inject meta robots: “noindex, follow” for this new route (separate data-lp attribute so it doesn’t conflict with the existing page).
- Set canonical to the new URL path (or to the preferred canonical you want; since this is “Noindex” it’s less critical, but we’ll still set it cleanly).

Page sections (in the order you specified)
A) Hero (above fold)
- H1: “Company Formation Consultancy in Bahrain”
- Sub-headline: your provided line.
- CTA row:
  - Primary: “Get Free Consultation” (scrolls to the main conversion section: booking or contact form; see “Conversion flow” below)
  - Secondary: “Call +97317008888” (tel: link)
- Social proof row in hero (compact, scannable):
  - “4.9/5 Google Reviews”
  - “500+ clients”
  - “10+ years”
  - “Licensed consultants”
- Mobile behavior:
  - Ensure the phone CTA is a real click-to-call and prominent on mobile in the hero area.

B) Disclaimer box (immediately below hero, above fold)
- A high-visibility box with yellow/orange background.
- Title: “Independent Business Consultancy”
- Full disclaimer text exactly as provided (with “We are not a government website or authority…”).
- This will be intentionally placed so it appears above the fold on most mobile screens (hero spacing adjusted so disclaimer is visible without scrolling much).

C) Problem section (pain points)
- H2: “Starting a Business in Bahrain? Here’s What You’re Facing:”
- 2-column grid on desktop, 1-column on mobile.
- 6 bullets with icons; end with the “You need expert guidance, not guesswork.” line.
- Add a small trust micro-strip at the end (e.g., “Clear checklist • Transparent quote • Fast response”) to satisfy “trust signals every 2–3 sections.”

D) Solution section (5-step advisory process)
- H2: “How Our Company Formation Consultancy Works”
- Short compliance paragraph clarifying advisory-only role.
- 5 numbered cards with icons, matching your step text.
- CTA #2: “Start Your Free Consultation” (scroll)

E) Services section
- H2: “Our Business Setup Advisory Services in Bahrain”
- Use expandable / accordion-style service cards for scannability:
  - Company Formation Advisory
  - CR Application Guidance
  - Licensing & Regulatory Advisory
  - Corporate Structuring Consultation
  - Support Services Coordination
- Each card includes 3–6 bullets from your content.
- CTA #3: “Get Custom Quote for Your Business” (scroll)

F) Benefits section
- H2: “Why Entrepreneurs Choose Our Consultancy”
- 2–3 column grid on desktop, 1 column on mobile.
- 7 benefit tiles with check icons using your benefit copy.
- Insert trust badge row after benefits (another trust signal).

G) Pricing section (3 packages)
- H2: “Transparent Company Formation Consultancy Pricing”
- Disclaimer note above cards: government fees paid directly; our fees are advisory only.
- 3 cards:
  - Starter Advisory Package
  - Complete Formation Advisory (Most Popular)
  - Premium Business Setup Advisory
- Since you selected “temporary prices”, we’ll show “BHD —” (or “BHD XXX”) consistently and add a small “Request a quote for exact pricing” note.
- CTA #4: “Request Detailed Quote” (scroll)

H) Testimonials section (social proof)
- H2: “Trusted by 500+ Businesses in Bahrain”
- 3 testimonial cards (your three quotes).
- Star rating visuals + small trust badges list.
- Optional: if no logo assets exist, we’ll implement a “client logos” placeholder row (text-only chips) to avoid fake logos.

I) FAQ accordion (8 questions)
- H2: “Frequently Asked Questions About Company Formation in Bahrain”
- 8 Q&As exactly as provided.
- Implement JSON-LD FAQPage inside the section using the same safe pattern already used in FreeZoneFAQ (dangerouslySetInnerHTML with JSON.stringify).
- CTA #5: “Get Your Free Company Formation Checklist” (scroll)

J) About section
- H2: “About Our Business Setup Consultancy”
- Your about copy, including explicit “not affiliated / does not issue CR” line.
- Optional team photo placeholder (only if we already have a suitable image; otherwise keep it text-first for speed and compliance).

K) Contact / conversion section (Booking-first, as requested)
Conversion flow decision (booking-first)
- Primary conversion will be booking (reuse the existing /free-consultation route or embed Calendly like /lp/company-formation does).
- Because you asked for booking-first and we don’t have backend lead capture in this scope, we’ll do:
  - A compact “Request Free Consultation” form (front-end only) that does not claim submission to a backend. It can:
    - either open /free-consultation
    - or scroll to an embedded Calendly booking block
  - Primary: “Book Free Consultation” button that jumps to the booking embed
  - Secondary: “Call +97317008888” and optionally WhatsApp (allowed, but we’ll keep CTA labels compliant: “WhatsApp for consultation”)
- Contact details displayed:
  - Phone: +97317008888
  - Email: info@keylinkcorp.com
  - Hours: as per your content
- If you still want the full 6-field form visible twice (hero + bottom), we can render a short mini-form in hero that simply scrolls to the booking/form section (no “submit to server” claims). This preserves Quality Score “form present” without misleading submission behavior.

L) Final CTA section
- H2: “Ready to Start Your Business in Bahrain?”
- “What happens next” bullets (your list).
- Primary CTA repeated again: “Start Your Free Consultation Now”
- Secondary CTA: “Download Free Company Formation Guide” (will be a placeholder link unless you provide a PDF URL; we’ll keep it disabled or link to /free-consultation until you provide the asset).

M) Footer compliance disclaimer
- Update LandingFooter usage for this page by rendering an expanded footer block above the existing footer links (without removing the shared footer component).
- Must include the exact required line:
  - “We are not a government website or authority. CR issued by Bahrain government only.”
- Keep wording compliant: avoid “official”, “government portal”, “authorized”.

Design system + styling approach
- Keep consistent with existing landing style tokens:
  - Use SectionBackgroundOverlay for subtle texture.
  - Prefer the dot overlay style you specified (opacity 100%) where appropriate; use sparingly so the page stays clean and fast.
- Color palette:
  - Clean white base, subtle gold accents (already used in the project), and careful use of Bahrain red (as an accent only; not aggressive).
- Typography:
  - Match existing lp-h1/lp-h2/lp-lead classes already in /lp/company-formation for continuity.
- Mobile-first:
  - Hero CTAs stack, click-to-call is large and obvious.
  - Disclaimer box remains visible early in the scroll (above fold target).
  - Accordions and cards maintain readability.

Policy compliance safeguards (explicit checks)
- Every CTA label uses “Consultation”, “Advisory”, “Guidance” language only.
- Add an internal copy lint pass while implementing:
  - search for banned words: “Official”, “Government portal”, “Authorized”, “Issue documents”, “Register”, “Apply”, “Get CR”.
- Disclaimer appears:
  - directly below hero
  - again in footer legal disclaimer
- Add plain-language clarification in Solution and Services sections: “We guide; you submit; authorities issue CR.”

Analytics / tracking (optional, not implemented unless you confirm)
- Add lightweight click tracking hooks for:
  - Primary CTA clicks
  - tel: clicks
  - WhatsApp clicks
- If you want Google Ads conversion tracking on “booking confirmed”, that requires a reliable event source (Calendly callbacks or thank-you route). We can implement in a second pass.

Files we will likely touch (implementation phase)
- src/App.tsx (add the new route)
- src/pages/landing/CompanyFormationConsultancyLanding.tsx (new page)
- Possibly a small reusable component for the disclaimer box (optional; otherwise keep inline in the new page)
- No changes required to existing /lp/company-formation components unless we choose to reuse some parts (e.g., hero image component) safely.

Acceptance checklist (what you can verify in preview)
- /company-formation-consultancy-bahrain loads and looks distinct from /lp/company-formation.
- Disclaimer box is clearly visible immediately under hero, with correct wording.
- Primary CTA appears 5+ times and always scrolls to booking/contact.
- Mobile: phone CTA works (tap to call).
- FAQ accordion has 8 questions.
- Footer contains required disclaimer sentence.
- Page sets Title + Meta description + noindex.

Open items (we’ll keep placeholders until you provide)
- Package prices (BHD) and any downloadable guide PDF URL.
- Office address (if you want it shown).
