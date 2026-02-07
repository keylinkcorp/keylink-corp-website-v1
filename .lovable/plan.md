
## Goal (what you want)
Add a **modern, MagicUI-inspired multi-step form right after the Hero** on `/lp/company-formation`.  
Only **after the user submits their information** should we reveal the **Calendly “Book Free Consultation”** section (and scroll them to it). Calendly should not be visible before the form.

You also want the multi-step questions to be **similar to your “company formation cost calculator” flow**, and after submit you want **Summary + Calendly** (no lead storage for now).

---

## What I found in your current code
- Route: `/lp/company-formation` renders `src/pages/landing/CompanyFormationLanding.tsx`.
- Calendly is currently always shown in the “BOOKING” section via `CalendlyBooking`, and the Hero CTA scrolls to `#book`.
- UTMs are already propagated correctly to Calendly by `mergeQueryParams(CALENDLY_BASE_URL, window.location.search)`.
- You already have a good multi-step form pattern in `src/components/contact/ContactForm.tsx` (React Hook Form + Zod + step animations + toasts).

---

## Proposed UX (new flow)
### Above the fold (Hero)
- Primary CTA becomes: **“Get started”** (or “Check eligibility & book”)
- Clicking it scrolls to the new form section (not Calendly).

### After Hero (NEW)
A **multi-step “Company Formation Quick Calculator” form** in a clean, centered “canvas” style (matching your current subtle side borders).

### After form submit (NEW)
- Show a **Summary card** (what they selected) + an action line like:  
  “Great — now book your free 30‑minute call to confirm costs and timeline.”
- Reveal **Calendly** below (same page), and auto-scroll to it.

Calendly remains on the page, but **gated** behind successful form completion.

---

## Form content (based on “cost calculator” style)
Because you said “only for company formation like our cost calculator” (but we don’t have the exact calculator here), I’ll implement a best-practice cost-qualifying set that’s typical for Bahrain formation.

### Step 1 — Formation basics
- “What best describes you?” (Individual / Existing company / Partner group)
- “Planned business activity category” (simple dropdown presets + “Other”)
- “Do you need visas?” (Yes/No + count selector 0–10)
- “Office preference” (Virtual / Flexi-desk / Physical office / Not sure)
- “Target timeline” (ASAP / This month / 1–3 months / Just exploring)

### Step 2 — Ownership & shareholders
- “Shareholders count” (1 / 2 / 3+)
- “Any Bahraini partner involved?” (Yes/No/Not sure)
- “Preferred ownership” (100% foreign if possible / open / not sure)

### Step 3 — Contact details + consent
- Full name
- Email
- Phone
- Company name (optional)
- Consent checkbox (required)

### Submit result
- Show summary + Calendly.

---

## Visual / styling direction (MagicUI-inspired, modern)
- Keep the **light theme** and **subtle canvas borders** already added.
- The form block will look like a **centered “wizard card”**:
  - `bg-background`, soft shadow, border `border-border/60`
  - clean step indicator (thin progress line or segmented steps)
- Reduce “heavy card repetition” inside the form:
  - use “field groups” with subtle dividers, not lots of elevated cards
- Buttons:
  - Primary: “Continue”, “Show summary”, “Unlock booking”
  - Secondary: “Back”
- Microcopy:
  - “Takes ~60 seconds”
  - “This helps us confirm exact costs and timeline on the call”

---

## Technical implementation approach (fits your existing patterns)
### 1) Add a new multi-step component (company-formation scoped)
Create a new component (in the same folder pattern you use now):
- `src/pages/landing/company-formation/CompanyFormationMultiStepForm.tsx`

Implementation details:
- Use `react-hook-form` + `zodResolver` like `ContactForm`.
- Use local component state for `step` + animations (optional: reuse Framer Motion slide transitions).
- Validation per step:
  - Step 1 validates formation basics
  - Step 2 validates shareholder/ownership inputs
  - Step 3 validates name/email/phone + consent
- On final submit:
  - call `onComplete(formData)` passed from the landing page
  - optionally persist to `sessionStorage` so refresh doesn’t lose progress (since “no storage” backend)

### 2) Gate Calendly behind the form completion
In `CompanyFormationLanding.tsx`:
- Add state:
  - `const [leadData, setLeadData] = useState<LeadData | null>(null);`
  - `const [showBooking, setShowBooking] = useState(false);`
- Render order becomes:
  1. Hero
  2. Trust bar
  3. NEW form section (with an anchor id like `id="start"`)
  4. Summary block (only if completed)
  5. Calendly booking section (only if completed)
- When the form completes:
  - set `leadData`
  - set `showBooking(true)`
  - scroll smoothly to `#book`

### 3) Update Hero CTA target
In `CompanyFormationHeroMontage.tsx`:
- Rename prop from `onBookClick` to something like `onPrimaryCtaClick` (or keep prop name but scroll to the form).
- Change the button label to something closer to the new flow:
  - “Get started” (recommended)
  - Subtext still says “Free • No obligation …” but we’ll ensure it doesn’t imply booking happens immediately.

### 4) Keep UTM propagation intact
- Keep the existing `calendlyUrl` `useMemo` logic in `CompanyFormationLanding.tsx`.
- No changes needed unless you want to pass lead info into Calendly.

Optional (only if you want):
- Investigate Calendly “prefill” support (name/email) via query params or widget API.
- If supported, we can append `name/email` to `calendlyUrl` after form submit.

### 5) Make Calendly section match the new canvas (no full-bleed band)
Right now `CalendlyBooking` renders its own `section` with `bg-muted/30` and big padding.
To fit your “centered framed canvas” look:
- Either:
  - add a prop to `CalendlyBooking` to disable its background band styles, OR
  - wrap it differently on the landing page and adjust internal styling so it feels like part of the framed column.

---

## Files that will change
- `src/pages/landing/CompanyFormationLanding.tsx`
  - insert the gated multi-step section
  - hide Calendly until completed
  - update scroll targets
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
  - CTA now scrolls to the form
  - copy adjustments for the new funnel
- `src/components/consultation/CalendlyBooking.tsx` (likely)
  - allow “no band background” mode so it fits the new framed layout
- New file:
  - `src/pages/landing/company-formation/CompanyFormationMultiStepForm.tsx`

---

## Edge cases & quality checks
- Mobile:
  - No horizontal scroll inside the framed canvas
  - Steps are tap-friendly, progress indicator remains clear
- Validation:
  - If they try to continue without required answers, show inline errors + a toast (same as ContactForm pattern).
- Calendly script:
  - Ensure it loads only when needed (optional performance win):
    - If we conditionally mount `CalendlyBooking` only after completion, the Calendly widget script won’t load on first paint.
- Refresh behavior:
  - Optionally keep progress and completion state in `sessionStorage` so users don’t lose their place.

---

## What I still need from you (so it matches your exact cost calculator)
Your “Other” answer indicates you have a specific calculator logic. To match it precisely, I need one of these:
1) A list of the exact questions/options your cost calculator uses (copy/paste), or  
2) A screenshot/video of the calculator steps, or  
3) The URL of that calculator (if public).

If you provide that, I’ll mirror the steps 1:1 (same fields, same order, same labels).

---

## Acceptance criteria (definition of done)
- On `/lp/company-formation`, the user sees: Hero → Trust bar → Multi-step form (modern)  
- Calendly booking is not visible until the form is submitted successfully  
- After submit, user sees a clean summary + Calendly appears and page scrolls to it  
- Light theme + subtle side borders remain consistent through the entire page  
- Works on mobile and desktop, no layout shifts or horizontal scroll
