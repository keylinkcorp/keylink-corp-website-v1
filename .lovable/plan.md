
## Goal
Make the root route `/` show your real existing homepage (built from `src/components/home/*`) instead of the blank `Index` page or the company-formation landing page.

## What I found in your codebase (why this is happening)
- You have a **blank fallback page** at `src/pages/Index.tsx` (“Welcome to Your Blank App”).
- You also have a **landing page** at `src/pages/landing/CompanyFormationLanding.tsx` (calculator + booking, and it sets `noindex`).
- You already have a full **homepage section set** in `src/components/home/`:
  - `Hero`, `TrustBar`, `Services`, `WhyChooseUs`, `Testimonials`, etc.
  But **nothing is currently rendering these on any route**.
- `src/components/layout/Header.tsx` uses `<Link to="/" />`, so whatever we assign to `/` becomes the main homepage entry point.

## Decisions captured from your answers
- Root `/` should: **Use existing Home sections**
- `/lp/company-formation` should: **Be removed**
- “Keep template page” was answered as “Other” (no detail) → we will clarify during implementation and choose a safe default.

## Implementation approach (what I will change)
### 1) Create a real `Home` page that composes your existing home sections
- Add a new page: `src/pages/Home.tsx`
- It will use your standard site chrome:
  - Wrap content with `<Layout>` (Header + Footer)
- Inside, render the home components in a sensible order, typically:
  1. `<Hero />`
  2. `<TrustBar />`
  3. `<Services />` / `<IndustryServices />` (depending on your desired structure)
  4. `<WhyChooseUs />`
  5. `<CompanyFormationProcess />`
  6. `<Testimonials />`
  7. `<FAQ />`
  8. `<CTABanner />`

### 2) Update routing so `/` uses the new Home page
- Update `src/App.tsx`:
  - `path="/"` → `<Home />`
  - Remove the current `CompanyFormationLanding` root usage.
  - Remove the route for `/lp/company-formation` (per your request).
- Optional (depending on what you meant by “Other”):
  - If you still want the blank template page accessible, I can add:
    - `path="/blank"` → `<Index />`
  - Otherwise I’ll remove the `Index` route entirely (file can remain as a fallback, but not used).

### 3) Prevent broken links from the homepage (quick fix)
Your home components currently link to `/cost-calculator`, but there is **no route** for it right now.
I will do one of these (I’ll pick the least disruptive option):
- **Option A (recommended):** Create `src/pages/CostCalculator.tsx` and add route `/cost-calculator`
  - Page will render your existing `FormationCostCalculator` inside `<Layout>`.
- **Option B:** Change links in `src/components/home/Hero.tsx` and `CostCalculatorPreview.tsx` to point to an existing page/section (for example `/services/company-formation`).
Option A keeps your current homepage components working as-designed.

## Safety checks / QA
After implementation:
1. Load `/` and confirm it shows the intended “real” homepage (Hero + sections), not the blank template.
2. Click the logo in the header (goes to `/`) and confirm it returns to the homepage.
3. Click any homepage CTAs:
   - “Start Your Business” should go to `/free-consultation`
   - “Cost Calculator” should go somewhere valid (either `/cost-calculator` if we add it, or another existing route if we repoint it)
4. Confirm `/lp/company-formation` is no longer accessible (should 404 or redirect, depending on what we choose).

## Questions I’ll need answered during implementation (1 small clarification)
- For your “Keep template page: Other” answer, choose one:
  - Keep the blank template page at `/blank`, or
  - Remove it from routing completely.
If you don’t specify, I’ll default to **keeping it at `/blank`** so nothing is lost.

## Files that will be touched (summary)
- Modify: `src/App.tsx`
- Add: `src/pages/Home.tsx`
- Possibly add: `src/pages/CostCalculator.tsx` (to avoid broken `/cost-calculator` links)
- Possibly modify: `src/components/home/Hero.tsx` and/or `src/components/home/CostCalculatorPreview.tsx` (only if we choose Option B instead of adding the route)
