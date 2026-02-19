
## Goal (what will improve)
Make `/lp/company-formation-consultancy-modern` feel more modern + corporate and increase conversions with the primary KPI: **more cost calculator completions**, while also:
- Making the **hero dot-grid overlay clearly visible** (like your reference snippet)
- Adding **stronger social proof**
- Adding a **sticky section nav** (Calculator / Blockers / Services / Book)
- Keeping the existing 1260px framed layout + borders behavior unchanged

---

## What I observed in the current page
### Strengths
- Clear hero headline + 3 bullets + strong CTA cluster.
- The page already has a good structure: Calculator → Blockers → Approach → Services → Reviews → Book → FAQs → Final CTA.
- The frame width is already aligned to 1260px for this page and for header/ticker/hero centered layout.

### Main conversion friction (calculator completions)
- The hero’s primary CTA goes to booking (“Get Free Consultation”) rather than “Start calculator” (your KPI).
- The calculator section is first in the framed content, but there isn’t a “guided path” from hero → calculator (users may bounce before reaching it).
- Social proof is present, but not strongly connected to the calculator step (where we want people to act).

### Hero overlay visibility
- The current hero overlay is implemented as an `absolute inset-0` pattern using `hsl(var(--border)_/_0.7)` with opacity.
- Your reference overlay uses a very explicit light dot grid on a white background:
  - `bg-white`
  - `bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]`
  - `[background-size:16px_16px]`
  - strong radial mask

We should match that pattern more literally, but keep it theme-safe and readable.

---

## Decisions already locked (from your answers)
- Primary goal: **More calculator completes**
- Audience: **Mixed**
- Tone: **Corporate**
- Priorities: **Stronger overlay + more social proof + sticky nav**

---

## Implementation approach (high-impact, low-risk changes)
We’ll do the upgrade in 3 layers:

1) **Hero & top-of-page conversion direction**
   - Make the hero’s primary path “Start calculator” (or “Get estimate”) and keep “Book free consultation” as secondary.
   - Keep phone/WhatsApp for corporate credibility, but de-emphasize them as “support channels” rather than the main next step.

2) **Sticky navigation for clarity**
   - Add a slim sticky in-page nav (desktop + mobile-friendly) just below the main header (or inside the framed area) with anchors:
     - Calculator, Blockers, Approach, Services, Reviews, Book
   - Use existing `scrollToId()` smooth scroll.
   - Highlight the active section as user scrolls (simple IntersectionObserver) to increase perceived polish.

3) **Social proof where it matters (near calculator)**
   - Add a compact “Trust strip” above the calculator form:
     - “4.9/5 Google Reviews”, “500+ clients”, “Independent consultancy”
     - optionally include a mini row of logo icons or reuse the existing logo ticker impression with smaller static logos in-frame.
   - Add “What you’ll get” micro-list next to calculator to reduce uncertainty.

---

## Detailed change list (what will change on the page)

### A) Hero overlay: make the dot-grid visibly match your reference
**File:** `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`

- Replace the current single overlay div with a two-layer structure that mirrors:
  - base background (white / background)
  - dot-grid overlay with clear color token
  - radial mask to fade edges
- Ensure visibility across light backgrounds:
  - use a dot color equivalent to `#e5e7eb` (Tailwind gray-200) or a theme token that maps similarly.
  - add a slightly higher opacity only in the hero area (but keep it subtle).

Acceptance criteria:
- On desktop, dots are clearly visible behind the hero headline (like your screenshot expectation).
- On mobile, no moiré issues and still subtle.

---

### B) Hero CTA: re-route to calculator completions (primary KPI)
**File:** `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`

- Add section IDs:
  - `id="calculator"` on cost calculator section
  - `id="blockers"`, `id="approach"`, `id="services"`, `id="reviews"`, `id="book"`
- Update hero CTAs:
  - Primary CTA: “Start cost calculator” → `scrollToId("calculator")`
  - Secondary CTA: “Book free consultation” → `scrollToId("book")`
  - Keep phone and WhatsApp as tertiary (outline) actions or move them slightly below.

Acceptance criteria:
- Clicking the main hero button scrolls to the calculator section reliably.
- Users still have a clear path to booking.

---

### C) Add sticky section nav (corporate, clean, framed)
**File:** `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx` (page-only)

- Build a small `LandingStickyNav` component inside the page (no shared refactor needed):
  - `position: sticky; top: 80px` (below the main header height)
  - Inside the 1260px frame, with the same border treatment as the page (thin border, background blur optional)
  - Buttons/links for: Calculator / Blockers / Approach / Services / Reviews / Book
  - Active state on scroll:
    - use IntersectionObserver to set `activeSection`
    - apply corporate style: underline or subtle pill highlight

Acceptance criteria:
- Nav stays visible while scrolling through framed content.
- No overlap with MobileStickyConsultationBar at the bottom.
- Works on small screens without wrapping badly (horizontal scroll area if needed).

---

### D) Social proof placement upgrade near calculator (to drive completion)
**File:** `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`

- In the calculator section, add a compact trust + benefit panel:
  - “Trusted by 500+ clients” / “4.9/5 Google Reviews”
  - “Independent consultancy (not government)”
  - “Takes ~60 seconds”
- Optionally add a small row of logos (static) inside the frame for corporate credibility (not the animated ticker, just 4–6).
  - If we reuse existing logo assets, no new images required.

Acceptance criteria:
- Calculator section looks more “decision-safe” and more corporate.
- The proof doesn’t overpower the calculator UI.

---

### E) Corporate tone refinements (copy + hierarchy, not redesigning everything)
**File:** `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`

Small copy and hierarchy tweaks aligned to corporate tone:
- Reduce “salesy” phrasing, keep direct clarity.
- Add “What you’ll get” microheader near calculator and booking.
- Keep disclaimers present (already good).

Acceptance criteria:
- Page reads more formal and “consultancy-like” without losing clarity.

---

## Files to modify
- `src/pages/landing/company-formation/CompanyFormationHeroMontage.tsx`
- `src/pages/landing/CompanyFormationConsultancyLandingModern.tsx`

(Optionally, if we decide to standardize an overlay variant rather than inline classes:)
- `src/components/shared/SectionBackgroundOverlay.tsx` (only if needed)

---

## QA checklist (end-to-end)
1) Desktop:
- Hero overlay dots are clearly visible.
- Primary hero CTA scrolls to calculator; secondary scrolls to book.
- Sticky nav highlights correct section as you scroll.

2) Mobile:
- Sticky nav remains usable (no cramped wrapping).
- No horizontal scrolling introduced by nav.
- MobileStickyConsultationBar still works and doesn’t cover important content.

3) Conversion path:
- User can go: Hero → Calculator → Continue → Book smoothly.
- All CTAs scroll to correct anchors.

---

## Rollout strategy (safe iterations)
To keep changes controlled and measurable:
1) Implement **hero overlay + hero CTA to calculator** first (fast, high impact).
2) Add **sticky nav** next.
3) Add **calculator-area social proof** last and tune density.

If you want, we can A/B-like test by keeping copy changes minimal in the first pass and focusing on navigation + CTA routing + proof placement.

