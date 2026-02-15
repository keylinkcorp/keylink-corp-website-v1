
Objective
- Replace all remaining “Placeholder …” text on `/company-formation-consultancy-bahrain` with polished, conversion-focused, policy-compliant copy that reads like a real Google Ads landing page.
- Keep the design aligned with `/lp/company-formation` (montage hero + SplitSection rhythm + lp-card surfaces).
- Update conversion flow to “Form-first” (visible qualified contact form appears before the Calendly embed).
- Set pricing to your chosen BHD amounts: Starter 400 / Complete 900 / Premium 1,800.
- Remove WhatsApp CTAs from this landing (per your latest choice), keeping phone + consultation CTAs only.
- Maintain compliance requirements: disclaimer above fold, no banned terms, footer disclaimer sentence intact.

What I found (current state)
- `src/pages/landing/CompanyFormationConsultancyLanding.tsx` still contains many “Placeholder” strings across:
  - Hero lead
  - Disclaimer paragraph
  - Section subtitles, benefit supporting lines
  - Pricing package bullets
  - Testimonials
  - FAQ answers (several)
  - Contact section subtitle + textarea placeholder + final CTA subtitle
- WhatsApp is still present in the “contact cards” row and likely in the final CTA area (needs removal).
- Booking section currently renders Calendly first, then contact cards and form (needs “Form-first” restructuring).
- FAQ background overlay uses a stronger combo (`radial` + `grid-lines`) than `/lp/company-formation` which may contribute to “not matching” feel; we should align it to a softer overlay (ibelick-soft/lines) like the main LP.

Decisions already confirmed
- Copy: AI drafts final copy.
- Conversion: Form-first.
- Pricing numbers: 400 / 900 / 1,800 BHD.
- WhatsApp: Hide.

Implementation plan (code changes)

1) Replace all placeholders with real, compliant copy (single pass + lint pass)
- In `src/pages/landing/CompanyFormationConsultancyLanding.tsx`, replace:
  - Hero lead with a crisp, outcome-driven line:
    - Emphasize “consultation”, “advisory”, “guidance”, “checklist”, “timeline”, “cost drivers”
    - Avoid banned terms: “Official”, “Government portal”, “Authorized”, “Register”, “Apply”, “Get CR”
  - Disclaimer text (still above-fold) with a complete, confident version:
    - “Independent Business Consultancy” title stays
    - Explicitly states: not a government website/authority; consultancy/advisory/guidance only; CR issued by Bahrain government authorities
  - Problem subtitle with a specific promise (clarity, sequencing, checklist)
  - Trust micro-strip copy (remove “Placeholder trust strip:”)
  - 5-step process subtitle and each step description with practical clarity (what the user gets at each step)
  - Services accordion bullets with meaningful bullet points for each service (advisory scope language)
  - Benefits: replace “Placeholder supporting sentence.” with short, believable micro-copy per tile (1 sentence each)
  - Pricing items: replace placeholder items with real inclusions per package
  - Testimonials: replace placeholder testimonial quotes with realistic, generic but credible outcomes (no fake company names/logos)
  - FAQ answers: replace placeholder answers with clean, concise language; keep the “We do not issue CR…” answer as-is
  - About section: replace placeholder paragraphs with a short positioning statement (independent consultancy, checklist-driven, timeline clarity)
  - Contact form intro + textarea placeholder: replace with practical instructions (activity, shareholders, location, timeline)
  - Final CTA section: replace “Placeholder next steps…” with a real “What happens next” line consistent with ad traffic expectations

Quality control
- Run a project-wide search for banned words specifically on this page:
  - “Official”, “Government portal”, “Authorized”, “Register”, “Apply”, “Get CR”
- Also search for literal “Placeholder” occurrences and remove them (except UI component placeholder styling in generic inputs elsewhere).

2) Make the conversion section truly “Form-first” (structure + scroll targets)
- Update the “BOOKING / CONTACT” section so that:
  - The qualified contact form and contact methods appear first (above Calendly).
  - Calendly remains on the page but becomes the secondary option below the form, with a clear heading like “Prefer to book immediately? Book your free consultation”.
- Ensure all primary CTAs (“Get Free Consultation”) still scroll to the conversion section id `book`.
  - Keep the `id="book"` anchor above the form container so scroll lands on the form first.

3) Upgrade the contact form to a “Qualified” landing-page form (7 fields) while keeping no-backend behavior
Based on your approved template in memory, extend the form from 4 fields to 7 fields:
- Full name (required)
- Email (required)
- Phone (required) (rename label to avoid WhatsApp mention since WhatsApp is hidden)
- Company activity / business activity (required)
- Timeline (select) (e.g., “Immediately”, “2–4 weeks”, “1–3 months”, “3+ months”)
- Budget range (select) (simple ranges; keep neutral)
- Residency (select): “Bahrain resident” / “Overseas”
- Optional message/notes (textarea) (optional or required; we can keep required if you want qualification strict—recommend optional to reduce friction)

Submission behavior (no backend)
- Keep `mailto:` generation, but improve it:
  - Subject: “Free consultation request — Company Formation Consultancy (Bahrain)”
  - Body includes all fields formatted clearly
- Keep the toast, but adjust copy to feel professional:
  - “Email draft prepared” / “Your email app will open to send your request.”

4) Remove WhatsApp from this landing everywhere
- In `CompanyFormationConsultancyLanding.tsx`:
  - Remove the WhatsApp card from the contact methods row.
  - Remove any WhatsApp buttons in the final CTA cluster.
- In the hero:
  - Already set `showWhatsApp={false}`; keep that.
- In mobile sticky bar:
  - Current `MobileStickyConsultationBar` is phone + consultation only, so it’s fine; update phone label to “Call for consultation” (compliance phrasing).

5) Set real pricing numbers (BHD 400 / 900 / 1,800) and tighten package positioning
- Update pricing array:
  - Starter Advisory Package: “BHD 400”
  - Complete Formation Advisory (featured): “BHD 900”
  - Premium Business Setup Advisory: “BHD 1,800”
- Package bullets will be rewritten to sound concrete but advisory-only (no “we submit/apply/register” language).
- Keep the “Government fees are paid directly…” line and add a short “What’s included” clarity sentence.

6) Improve “match /lp/company-formation” feel by aligning the FAQ section styling
- Replace the heavier FAQ background overlay combination with the same overlay approach used across `/lp/company-formation`:
  - Prefer `SectionBackgroundOverlay variant="ibelick-soft"` or `ibelick-lines` with masked true and opacity ~0.8–0.9.
- Keep the FAQ accordion card styling as `lp-card p-3 md:p-4` (already consistent).

7) Trust signals cadence: ensure they appear every 2–3 sections with real text
- Keep existing trust strips and make them real:
  - After Problem: a trust strip (already present)
  - After Benefits: a trust strip (already present)
  - Add/ensure one near Pricing or Testimonials if needed (short line + CTA)

8) Final compliance + UX QA (quick checklist)
- Above fold on mobile:
  - Hero visible and disclaimer banner clearly visible immediately below hero (no large spacing pushing it down).
- CTA count:
  - Verify “Get Free Consultation” (or equivalent) appears 5+ times and all scroll to `#book`.
- Mobile:
  - Sticky bar shows “Free consultation” + “Call for consultation”
  - Tel link uses `tel:+97317008888`
- Footer:
  - Confirm footer disclaimer sentence is present exactly:
    - “We are not a government website or authority. CR issued by Bahrain government only.”
- Ensure no banned words exist on the page content.

Files to change
- Primary: `src/pages/landing/CompanyFormationConsultancyLanding.tsx`
- Possibly small tweak: `src/components/landing/MobileStickyConsultationBar.tsx` (phone label only)
- No need to touch `/lp/company-formation` files.

Deliverables you’ll see in preview
- The same `/lp/company-formation` design language, but with fully-real copy (no placeholders).
- A visible, qualified “Form-first” lead capture section that improves Google Ads landing-page quality score signals (form presence + relevance).
- Clean compliance posture with repeated advisory-only language and no restricted terms.
- Pricing displayed as BHD 400 / 900 / 1,800 with clear inclusions and advisory-only disclaimers.
