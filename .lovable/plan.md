
Goal
- Remove the “blank app” content currently showing on `/` and replace it with your real homepage (built from `src/components/home/*`) while keeping navigation free of obvious 404s.

What I found (current state)
- Route `/` renders `src/pages/Index.tsx`, which still contains the Vite-style “Welcome to Your Blank App (Sync test)” screen.
- Your real homepage sections already exist in `src/components/home/` (Hero, Services, TrustBar, etc.) but they are not currently composed into any page.
- Several links in Header/Footer/Home sections point to routes that do not exist in `src/App.tsx`, including:
  - `/cost-calculator`
  - `/faqs`
  - `/services/visa-services` (your actual route is `/services/visa-immigration`)
  - `/services/compliance`
  - `/about/team`, `/about/why-us`, `/about/testimonials` (your About page exists at `/about`; these look like intended subpages/anchors)

Implementation approach
1) Replace the blank homepage with the real homepage
- Update `src/pages/Index.tsx` to render the homepage using:
  - `Layout` wrapper: `src/components/layout/Layout.tsx`
  - Homepage sections from `src/components/home/*` in a sensible order (example order below).
- This removes the blank “Sync test” screen from `/` without changing the overall routing structure.

Suggested homepage composition order (can be adjusted)
- <Layout>
  - <Hero />
  - <TrustBar />
  - <Services />
  - <WhyChooseUs />
  - <IndustryServices />
  - <CompanyFormationProcess />
  - <CostCalculatorPreview />
  - <Testimonials />
  - <FAQ />
  - <CTABanner />
- </Layout>

2) Prevent obvious broken links (lightweight fixes)
To avoid users clicking into 404s from your header/footer/homepage:
- Add a few redirect/alias routes in `src/App.tsx` using `Navigate` (react-router-dom v6):
  - `/services/visa-services` → `/services/visa-immigration`
  - `/cost-calculator` → `/services/company-formation` (where the calculator already exists)
  - `/faqs` → either:
    - Option A: `/contact` (quickest), or
    - Option B: `/free-consultation`, or
    - Option C: create a simple FAQ page later (recommended long-term)
  - `/services/compliance` → pick the most appropriate existing page (likely `/services/pro-services` or `/services/legal-consulting`) as a temporary redirect

3) Make About dropdown links not 404 (quick fix)
- Update `src/components/layout/Header.tsx` links for:
  - `/about/team`, `/about/why-us`, `/about/testimonials`
- Point them to anchors on `/about` if those sections exist (example):
  - `/about#team`, `/about#why-choose-us`, `/about#testimonials`
- If those anchors are not currently present on the About page, we’ll either:
  - add ids to the relevant About sections (preferred), or
  - redirect them all to `/about` as a safe fallback.

4) Validate end-to-end in preview
- Open `/` and confirm homepage sections render with Header/Footer.
- Click test:
  - Header: “Visa Services”/mega menu link should not 404
  - Footer: “Cost Calculator”, “Visa Services”, “FAQs” should not 404
  - Homepage CTA buttons should route correctly

Files that will change (in the implementation phase)
- `src/pages/Index.tsx`
  - Replace blank JSX with composed homepage using `Layout` + `src/components/home/*` sections.
- `src/App.tsx`
  - Add redirect routes for missing paths (`/cost-calculator`, `/faqs`, `/services/visa-services`, `/services/compliance`).
- `src/components/layout/Header.tsx`
  - Fix About dropdown links to anchors or `/about`.
- (Optional) `src/components/layout/Footer.tsx` and/or `src/components/home/*`
  - Only if you prefer updating the link destinations directly instead of redirects.

Decisions needed from you (non-technical)
1) Where should “Cost Calculator” go when clicked?
- Recommended: redirect to `/services/company-formation` (because the calculator already exists there).
2) Where should “FAQs” go for now?
- Options:
  - Redirect to `/free-consultation`
  - Redirect to `/contact`
  - Redirect to `/about`
  - (Later) build a dedicated `/faqs` page

Risks / notes
- The homepage Hero currently links to `/cost-calculator`, and Footer links to `/cost-calculator` too; without redirects or link updates, users will hit 404.
- Header currently contains links to routes not implemented (compliance and some about subpages). Redirects or anchor fixes will prevent a broken-feeling site.

Acceptance criteria
- Visiting `/` no longer shows the blank “Welcome to Your Blank App” screen.
- `/` shows your intended homepage sections.
- Clicking “Cost Calculator”, “Visa Services”, and “FAQs” does not lead to 404.
- Main navigation remains functional across existing service pages.
