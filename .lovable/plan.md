
Goal
- On mobile (below lg), for selected SplitSection instances, stack with the image first and the content second when imagePosition="left" (and keep content first when imagePosition="right"), i.e. “follow imagePosition” for mobile order.
- Apply only to specific sections you choose, not globally.

What’s happening now (root cause)
- SplitSection renders DOM order as: content column first, image column second.
- It only uses order utilities at the lg breakpoint:
  - content: lg:order-2 when imagePosition="left" else lg:order-1
  - image:   lg:order-1 when imagePosition="left" else lg:order-2
- Because there is no non-lg “order-*”, mobile keeps the DOM order (content first), even when imagePosition="left".

Proposed solution (minimal, pattern-friendly)
1) Add an explicit prop to SplitSection to control mobile stacking order without affecting existing usages:
   - New prop (example name): mobileOrder?: "default" | "follow-imagePosition" | "image-first" | "content-first"
   - Default: "default" (keeps current behavior so existing pages don’t change)

2) Implement responsive order classes in SplitSection for split layout only:
   - Compute two class names for each column:
     - Base (mobile) order classes based on mobileOrder + imagePosition
     - Desktop (lg) order classes based on imagePosition (keep existing)
   - Resulting behavior:
     - mobileOrder="default": no base order classes (current behavior)
     - mobileOrder="follow-imagePosition":
       - if imagePosition="left": image gets order-1, content gets order-2 on mobile
       - if imagePosition="right": content order-1, image order-2 on mobile (same as today, but explicit)
     - (Optional) mobileOrder="image-first": image order-1, content order-2 regardless of imagePosition
     - (Optional) mobileOrder="content-first": content order-1, image order-2 regardless of imagePosition

3) Enable it only where you want it (your choice: “Only specific sections”)
   - Update the specific <SplitSection ... /> calls to pass mobileOrder="follow-imagePosition".
   - Likely candidates on /lp/company-formation-consultancy-modern (based on current code):
     - The “Our approach” section already has imagePosition="left" and would benefit immediately.
     - Any other sections on that page with imagePosition="left" (and any future ones you add).

Files to touch
- src/components/shared/SplitSection.tsx
  - Add the new prop to SplitSectionProps
  - Add computed class logic for mobile order
  - Apply classes to the two main grid columns (content wrapper div + image wrapper div)
- src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
  - Add mobileOrder="follow-imagePosition" to only the SplitSection instances you want to change

How you’ll specify “only specific sections”
- After implementing the prop, we will update just the SplitSection blocks you confirm (e.g., “Our approach” only; or “Our approach + Pricing-style sections”, etc.).
- If you name the sections by their badges/titles, that’s enough for precise targeting.

Acceptance criteria (what you should see)
- On mobile:
  - For the chosen SplitSection instances:
    - If imagePosition="left": image appears above content.
    - If imagePosition="right": content remains above image (unless you later choose “image-first”).
- On desktop (lg+):
  - No visual changes to current left/right layout.
- No changes to other pages/sections unless explicitly opted in with the new prop.

Potential edge cases / notes
- This change should only affect layout="split". Stacked layout already renders image above content by design.
- If any section relies on the current DOM order for screen readers (rare here), we’ll keep “default” for those sections.

Next input needed from you (to apply “only specific sections” correctly)
- Tell me which SplitSection sections should change on /lp/company-formation-consultancy-modern:
  - Option A: Only “Our approach”
  - Option B: “Our approach” + any other “imagePosition=left” sections on that page
  - Option C: You’ll list them by badge/title
