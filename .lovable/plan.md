
## Summary of what will change
You want the **Documents checklist** section on `/free-zone-in-bahrain` to remain **two columns** (left content + right image), but the **left content** should become a **collapsible accordion**.

We’ll update:
- `src/components/services/formation/free-zone/FreeZoneDocumentsChecklist.tsx`

No other sections will be modified.

---

## Current state (what’s in the code now)
`FreeZoneDocumentsChecklist.tsx` uses:
- `<SplitSection ... imagePosition="right">` which already gives the section a 2-column layout (content left, image right).
- Inside the left content area, it currently renders **two cards** in a `grid lg:grid-cols-2`:
  - “Quick checklist”
  - “Related services (internal links)”

---

## Target state (based on your request + your answers)
### Layout
- Keep the outer section as **two columns**:
  - **Left:** information (accordion)
  - **Right:** the same image

### Accordion structure (as you approved)
- Use **3 accordion items**:
  1) **Quick checklist** (bullets list)
  2) **Download** (download button + “Confirm requirements” button)
  3) **Related services** (the internal links list)

### Accordion behavior (as you approved)
- **Single open** (only one item open at a time)
- **Collapsible**
- Default open: the first item (Quick checklist), so the section doesn’t look empty on load.

---

## Implementation details (how we’ll build it)
### 1) Replace the two-card grid with one accordion panel
In `FreeZoneDocumentsChecklist.tsx`:
- Remove the `grid lg:grid-cols-2 gap-6` wrapper and the two `<Card>` blocks.
- Replace with one unified container:
  - A single `Card` (or bordered panel) that holds the accordion, so it looks premium and consistent.

### 2) Use existing Radix/Shadcn accordion component
Import:
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` from `@/components/ui/accordion`

Configure:
- `<Accordion type="single" collapsible defaultValue="quick">`

### 3) Map existing content into accordion items (no copy loss)
- **Item: Quick checklist**
  - Move the existing bullet list (the `checklist` array) into the content.
- **Item: Download**
  - Move the two buttons into this accordion content:
    - Download checklist (`/downloads/free-zone-bahrain-documents-checklist.txt`)
    - Confirm requirements (`/free-consultation`)
- **Item: Related services**
  - Move the three existing `<Link>` blocks (CR, Lease registration, Visa & Immigration) into this accordion content.
  - Keep the same internal routes and descriptions.

### 4) Styling (to match the landing page look)
- Keep the same icon “pill” style in triggers:
  - Icon on the left inside a small rounded square (`bg-muted`, `rounded-xl`)
  - Title text aligned with the rest of the page
- Ensure trigger rows are comfortable tap targets:
  - Slightly increase padding if needed (`py-4` already comes from the accordion trigger; we can add a wrapper class on the trigger content)
- Accordion content spacing:
  - Use `space-y-4`/`mt-4` so lists and buttons don’t feel cramped.
- Remove the old `lg:grid-cols-2` because accordion becomes the single unified left-column component.

---

## Files to change
1) `src/components/services/formation/free-zone/FreeZoneDocumentsChecklist.tsx`
   - Primary refactor: convert left content into an accordion with 3 items (Quick checklist / Download / Related services)
   - Keep `<SplitSection>` and the right-side image as-is.

No changes expected to:
- `src/components/shared/SplitSection.tsx`
- `src/components/ui/accordion.tsx`

---

## QA checklist (what you will test in Preview)
1) Go to `/free-zone-in-bahrain` and scroll to **Documents checklist**.
2) Confirm the section is still **two columns** on desktop and stacked correctly on mobile.
3) Accordion:
   - “Quick checklist” is open by default
   - Only one item can be open at a time
   - Clicking an open item collapses it (collapsible)
4) Buttons:
   - “Download checklist” downloads successfully
   - “Confirm requirements” navigates to `/free-consultation`
5) Internal links:
   - CR / Lease Contract Registration / Visa & Immigration navigate correctly

---

## Optional follow-up improvements (after you review)
- Add a small “Tip” line under the accordion (e.g., “We’ll confirm the exact list based on shareholder type + activity”), or
- Add a “Send document for review” CTA (WhatsApp) similar to other service pages, if you want stronger conversion here.
