
Goal
- Move “Office Solutions” links (Virtual Office, Co-working Space, Business Incubators) into the “Grow Business” dropdown as a third column, and remove the “Workspace” top-level navigation item.
- Apply the same change on both desktop mega-menu and the mobile hamburger menu (since both are driven by the same `megaMenuItems` data).

What I saw in your code (current state)
- File: `src/components/layout/Header.tsx`
- The nav is generated from `megaMenuItems`:
  - “Grow Business” currently has 2 columns: Consulting, Financial Services
  - “Workspace” currently has 1 column: Office Solutions (Virtual Office, Co-working Space, Business Incubators)
- Desktop dropdown column layout already supports 1, 2, or 3+ columns via conditional Tailwind classes.
- Mobile menu also renders from the same `megaMenuItems`, so updating the data will update mobile automatically.

Changes to make (no design changes beyond structure)
1) Remove “Workspace” from the top navigation
- In `megaMenuItems`, delete the entire object:
  - `title: "Workspace", icon: Users, columns: [...] , cta: {...}`
- Result: “Workspace” will no longer appear as a top-level nav item on desktop or mobile.

2) Add “Office Solutions” as a third column inside “Grow Business”
- In the “Grow Business” item inside `megaMenuItems`, add a third entry to `columns`:
  - `heading: "Office Solutions"`
  - `links:` same 3 links you currently have under Workspace:
    - Virtual Office → `/services/virtual-office`
    - Co-working Space → `/services/coworking-space`
    - Business Incubators → `/services/business-incubators`
- Keep the existing two columns exactly as-is, so Grow Business becomes:
  - Column 1: Consulting (unchanged)
  - Column 2: Financial Services (unchanged)
  - Column 3: Office Solutions (moved)

3) Confirm desktop mega-menu layout still looks correct
- Because Grow Business will become a 3-column dropdown, verify:
  - The columns grid uses `grid-cols-3`
  - The CTA panel remains on the right and the overall mega-menu width remains balanced
- If the mega-menu feels cramped at `max-w-5xl`, we can optionally bump it to `max-w-6xl` later, but I will not do that unless needed (you asked to keep it minimal and only move links).

4) QA checklist (quick tests in preview)
Desktop
- Hover “Grow Business”:
  - See three columns including “Office Solutions”
  - All three Office Solutions links route correctly
- Confirm “Workspace” is gone from the top nav
- Confirm other dropdowns still open and align with the header (no gaps)

Mobile
- Open hamburger menu:
  - Confirm “Workspace” section is gone
  - Expand “Grow Business”:
    - Confirm “Office Solutions” appears under it (as its own heading) and links work

Edge cases / notes
- Any pages or SEO schemas are not impacted by this nav change (only navigation structure).
- If there are any other references to the label “Workspace” elsewhere (e.g., footer), this change won’t touch them unless you request it.

Files to update
- `src/components/layout/Header.tsx` (only)

Outcome
- “Office Solutions” lives under “Grow Business” as a third column.
- “Workspace” is removed from the nav everywhere (desktop + mobile), matching your request.
