
Goal
- Create a modern, minimal multi-step “Cost Calculator” form and place it directly after the hero section on:
  - /company-formation-consultancy-bahrain (CompanyFormationConsultancyLanding)
- The calculator should estimate costs based on:
  - Company type
  - Visa needs
  - Office type
  - Add-ons
  - Plus the “Other” you selected: we’ll define this as “Business activity category” (so the estimate can show guidance/notes, even if it doesn’t always change the price).
- On submit, navigate the user to /free-consultation (as you requested).

What I found in your codebase (reusable patterns)
- Multi-step wizards already exist and look modern:
  - src/components/services/spc/SPCCostCalculator.tsx
  - src/components/services/moa/MOACostCalculator.tsx
- There is also an existing “formation” calculator used on /services/company-formation and /lp/company-formation:
  - src/components/services/formation/FormationCostCalculator.tsx
- CompanyFormationConsultancyLanding already uses your new minimal/pattern direction (SectionBackgroundOverlay etc.) and is the correct place to insert the new calculator section after the hero.

Design approach (match your current minimalist style)
- Background: pattern-only overlay (no photo) using SectionBackgroundOverlay, similar to the Benefits section you approved.
- Card: simple lp-card container, clean spacing, modern typography.
- Interactions: framer-motion step transitions (same pattern as SPC/WLL/MOA calculators).
- Icons: use Lucide icons for each option card (tree-shakable static imports).

Calculator UX (multi-step wizard)
- Step 1: Company type
  - Options: SPC / WLL / Branch (and optionally “Not sure”)
- Step 2: Business activity category (your “Other”)
  - Options like: Professional/Consulting, Trading, Tech/Online, Other
  - Note: can add small “may require approvals” hints; does not have to change price if you prefer.
- Step 3: Visa needs
  - Options: None / 1 investor visa / 2+ visas (or “I’m not sure”)
- Step 4: Office type
  - Options: Virtual / Serviced / Private
- Step 5: Add-ons
  - Checkbox list: PRO (1 year), Bank support, Accounting setup, etc.
- Step 6: Summary + CTA
  - Show estimate range + breakdown (line items) + key notes/disclaimers:
    - “Government fees are paid to authorities; this is an estimate.”
    - “Final costs depend on activity approvals, shareholders, and documents.”
  - Primary button: “Continue to Free Consultation” → navigate to /free-consultation
  - Secondary: “Start over”

Estimation logic (simple, predictable, editable)
- Use a breakdown-based calculator like SPCCostCalculator:
  - Base advisory fee (by company type)
  - Government-fee placeholder line items (optional)
  - Visa add-ons
  - Office annual cost (virtual/serviced/private)
  - Add-ons (PRO/bank/accounting)
- Output:
  - total estimate (number)
  - breakdown array (label + amount)
  - optional notes (strings) that depend on business activity category or foreign ownership assumptions

Implementation plan (code changes)
1) Add a new calculator component
- Create: src/components/landing/consultancy/ConsultancyCostCalculator.tsx (or similar path consistent with your structure)
- Copy the successful multi-step patterns from SPCCostCalculator/MOACostCalculator:
  - state: step, selections, showResult
  - progress indicator (minimal)
  - step transitions using AnimatePresence
  - reusable option-card UI blocks using Tailwind + cn()
- Add Zod schema only if we collect user details; since your requested action is “go to /free-consultation”, we can skip lead capture entirely and keep it pure UI (recommended for minimal + avoids mailto/toast complexity). If you still want name/email collection later, we can add it as an optional final step.

2) Insert the calculator after the hero in CompanyFormationConsultancyLanding
- Update: src/pages/landing/CompanyFormationConsultancyLanding.tsx
- After <CompanyFormationHeroMontage ... /> add:
  - <section aria-label="Cost calculator" className="section-spacing-sm relative overflow-hidden ...">
  - <SectionBackgroundOverlay ... />
  - container + heading (“Start here: get an estimate”)
  - <ConsultancyCostCalculator onContinue={() => navigate("/free-consultation")} />
- We will use react-router’s navigation:
  - import { useNavigate } from "react-router-dom";
  - or use <Link> in the last step button if simpler.

3) Styling consistency + responsiveness
- Ensure it matches your current landing LP classes:
  - section-badge, lp-h2, lp-section-subtitle, lp-card, etc.
- Make it work well on mobile:
  - option grids become 1-column
  - buttons full-width on small screens

4) QA / verification
- Confirm the calculator renders immediately after hero on:
  - /company-formation-consultancy-bahrain
- Walk through all steps and confirm:
  - Next/Back enabled/disabled correctly
  - Breakdown totals correct
  - “Continue to Free Consultation” navigates to /free-consultation
  - No console errors

Edge cases / decisions baked in
- “Other” cost driver: implemented as “Business activity category”
  - If you later want activity to affect price (e.g., regulated activities), we can add fee modifiers per category.
- No backend submission
  - This keeps it fast, clean, and avoids storing leads without a system in place.

Files to be created/edited
- Create: src/components/landing/consultancy/ConsultancyCostCalculator.tsx
- Edit: src/pages/landing/CompanyFormationConsultancyLanding.tsx

Acceptance criteria
- A minimal, modern multi-step calculator appears directly after the hero on /company-formation-consultancy-bahrain.
- Users can complete steps, see an estimate + breakdown, then proceed to /free-consultation via a clear CTA.
- Visual style matches your current minimal/pattern overlay direction.
