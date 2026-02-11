
## Objective
Increase lead volume and lead quality from **Google Search** ads for “company formation in Bahrain / company registration Bahrain” by improving:
1) **Message match** (keyword → ad → landing page headline/sections),
2) **Conversion friction** (capture lead form fast),
3) **Trust** (proof + clarity on pricing/timeline/ownership),
4) **Measurement** (so you can optimize based on real conversion data).

You confirmed:
- Conversion goal: **Lead form** (primary)
- Audience: **Foreign founders + local founders + branch/expansion + solo**
- Angle: **Price-first**
- Traffic: **Google Search**

---

## What we’ll change on the landing page (high-converting structure)

### 1) Above-the-fold: convert first, explain second
**Current:** Hero is strong, but primary conversion is “Get started” → calculator flow → booking.
**Change:** Add a **simple lead form above the fold** (or directly under hero) that’s optimized for search traffic:
- Fields (minimum viable): **Name, WhatsApp/Phone, Email, Company activity (dropdown), Timeline (dropdown)**  
- Microcopy: “Get a cost breakdown + document checklist in 30 minutes (free).”
- A clear consent/privacy line (important for ad trust + policy alignment):  
  “By submitting, you agree to be contacted about company formation services. Privacy policy.”

**Why this converts:** Search users often want “price + next steps” quickly. A short form beats a multi-step calculator for raw lead volume.

### 2) Price-first “instant reassurance” block (right after form)
Add a compact block (bullets / chips) reinforcing:
- “Transparent estimate”
- “Typical timeline 3–7 business days (varies by activity)”
- “100% foreign ownership eligibility check”
- “MOIC/LMRA guidance”

This is already present across sections, but we’ll **bring it earlier**.

### 3) Segment the offer (so each audience sees themselves)
Add a small “Choose your situation” switcher (tabs or 4 cards):
- Foreign founder (remote setup)
- Bahrain resident
- Branch/expansion
- Solo/freelancer

Each shows 2–3 bullets and a “Request estimate” button that scrolls to the form and preselects the segment.

### 4) Trust proof: make it specific + Bahrain-relevant
Enhance trust bar + add proof near the form:
- “400+ companies formed” (if true for Keylink; otherwise use accurate number)
- “MOIC/LMRA guidance”
- “Transparent pricing”
- Testimonials (already present) + add 1–2 “short proof outcomes” (time + type of setup)

### 5) Keep sticky image sections, but reduce cognitive load
Your SplitSection sticky behavior is working. We’ll ensure:
- Sticky top offset matches header height
- Images are supportive, not oversized
- The “What you get” section stays sticky but keeps content dominant (already narrowed to 7/5)

### 6) Add an explicit “Pricing” section for ad-intent match
Even if you don’t show exact fees publicly, add:
- “What affects cost?” (activities, visas, office, shareholders, licenses)
- “Typical ranges” (if you’re comfortable) or “We provide a line-item quote on the call”
- Link: “Use the calculator” (secondary)

This improves conversion for price-first traffic and reduces low-quality leads.

---

## Google Ads research outcomes → how we apply them

### A) Message match & Quality Score
Google’s guidance emphasizes relevance between **keywords, ad text, and landing page content**. We’ll:
- Align H1/H2 with your main ad group keywords:
  - “Company Formation in Bahrain”
  - “Company Registration in Bahrain”
  - “Open a WLL/SPC/Branch in Bahrain”
- Add short keyword-rich subheaders in relevant sections (without stuffing).

### B) Lead form and compliance expectations
Google lead experiences benefit from:
- Clear business identity
- Clear value exchange (“what user gets”)
- Clear consent/privacy wording  
We’ll add a visible **privacy link** and concise consent line under the form.

---

## Campaign structure recommendations (so the landing page matches ad groups)
Create separate ad groups (or campaigns) mapped to sections on the page:

1) **Company Formation Bahrain (generic high intent)**
   - Keywords: company formation bahrain, company registration bahrain, register company bahrain
   - Landing: hero + form + pricing block + “how it works”

2) **100% foreign ownership**
   - Keywords: 100% foreign ownership bahrain company, foreign investor company bahrain
   - Landing: segment card preselected + ownership FAQ expanded

3) **WLL / SPC / Branch**
   - Keywords: WLL company bahrain, SPC bahrain, branch office bahrain
   - Landing: segment switcher + “structures” mini section

4) **Cost / fees**
   - Keywords: company formation cost bahrain, registration fees bahrain company
   - Landing: pricing section + calculator + form

We can implement landing-page behavior to read `?utm_term=` or `?intent=` and **auto-highlight** the most relevant segment.

---

## Measurement plan (so you can optimize)
1) Add conversion events:
   - Lead form submit success (primary)
   - WhatsApp click
   - Call click
   - Calendly booking (secondary)
2) Store UTM parameters with the lead:
   - utm_source, utm_campaign, utm_adgroup, utm_term, utm_content, gclid (if present)
3) Optional: add a lightweight “thank-you” state (on-page) + optionally redirect to `/thank-you`.

---

## Technical implementation approach (in this codebase)

### 1) Build a dedicated Lead Form component
- Use `react-hook-form` + `zod` + `@hookform/resolvers/zod`
- Client validation + safe length limits
- UI: existing shadcn components (Input, Select, Button, Card)
- UX:
  - One-column on mobile
  - Inline error messages
  - Loading + success state
  - “Prefer WhatsApp?” secondary CTA under the button

### 2) Persist leads (recommended)
Option A (best): **Supabase (Lovable Cloud)**
- Create table: `company_formation_leads`
- Fields: name, email, phone, segment, timeline, notes, utms, page_path, created_at
- RLS:
  - Public insert allowed with validation; restrict read to admin/service role
- Add basic anti-spam:
  - Honeypot field
  - Rate limit (edge function) or minimal throttling
  - Optional: reCAPTCHA later if needed

Option B: Email-only (less ideal for tracking and deduping)
- Edge function sends email to your sales inbox + stores minimal record

### 3) Wire the form into `/lp/company-formation`
- Place it:
  - Under Hero montage OR
  - Replace “Start here” calculator gate as the primary CTA while keeping calculator as a secondary section

### 4) Copy updates for “price-first”
- Tighten hero subtitle and form microcopy to emphasize:
  - “Transparent cost breakdown”
  - “Document checklist”
  - “Timeline estimate”
- Ensure language is consistent with ads:
  - If ad says “3–7 business days”, keep that exact phrasing on page

---

## Edge cases & quality safeguards
- Form submission should never break the page even if backend fails:
  - Show toast + allow retry
- Phone formatting:
  - Accept international numbers; store raw + normalized if desired
- Ensure sticky sections behave on common breakpoints:
  - md+ sticky, but disable sticky on very short viewports if needed

---

## Deliverables / Acceptance criteria
- Lead form appears above fold and submits successfully.
- Lead record stored with UTMs and timestamp.
- After submit: user sees confirmation + next step (book call / WhatsApp).
- Page remains fast and mobile-friendly.
- Tracking events fire for submit + key clicks.

---

## What I need from you (to finalize copy + form fields)
1) What exact fields do you want on the form?
   - Minimum recommended: Name + WhatsApp/Phone + Email + “Company type/intent”
2) Where should leads go immediately?
   - Your email inbox, a CRM, or just saved in Supabase for now?
3) Do you have a Privacy Policy URL to link under the form?

Once you confirm those 3 items, I’ll implement the form + storage + UTM capture and update the landing sections for a “price-first, search-traffic” conversion flow.
