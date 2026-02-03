

## Two-Column Layout Redesign: Bank Account Update Section

Transform the current single-column alert-style layout into a modern split-layout design with accordion content on the left and a professional image on the right.

---

### Current State

The section currently has:
- Full-width dark navy card
- Centered content with header, description, 3-column requirements grid
- Timeline info at the bottom

**Issue:** All content stacked vertically, no visual imagery, can feel text-heavy

---

### Proposed Design

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ┌─────────────────────────────┬───────────────────────────────────────┐ │
│  │                             │                                       │ │
│  │  June 2024 Update Badge     │      ┌───────────────────────────┐   │ │
│  │                             │      │                           │   │ │
│  │  Mandatory Bank Account     │      │    PROFESSIONAL IMAGE     │   │ │
│  │  Requirement                │      │    (bank meeting scene)   │   │ │
│  │                             │      │                           │   │ │
│  │  Brief description text     │      │    Floating badge:        │   │ │
│  │                             │      │    "Required Since 2024"  │   │ │
│  │  ─────────────────────────  │      │                           │   │ │
│  │                             │      └───────────────────────────┘   │ │
│  │  ▼ Key Requirements         │                                       │ │
│  │    • Bank account before CR │                                       │ │
│  │    • BHD 50 minimum capital │                                       │ │
│  │    • Keylink assists        │                                       │ │
│  │                             │                                       │ │
│  │  ▼ Timeline Impact          │                                       │ │
│  │    3-5 business days added  │                                       │ │
│  │                             │                                       │ │
│  │  ▼ How We Help              │                                       │ │
│  │    Bank selection support   │                                       │ │
│  │                             │                                       │ │
│  └─────────────────────────────┴───────────────────────────────────────┘ │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Key Changes

| Area | Current | New Design |
|------|---------|------------|
| **Layout** | Single column centered | Two-column split (50/50) |
| **Content** | Requirements in 3-col grid | Accordion with expandable sections |
| **Image** | None | Professional bank meeting image with floating badge |
| **Information** | All visible at once | Organized in collapsible accordion items |
| **Visual Depth** | Flat card | Image adds visual interest and credibility |

---

### Left Column: Accordion Content

**Header (always visible)**
- Badge: "June 2024 Update"
- H3: "Mandatory Bank Account Requirement"
- Brief intro paragraph

**Accordion Items:**

1. **Key Requirements** (default open)
   - Bank account must be opened before final CR issuance
   - Minimum capital (BHD 50 for SPC) deposited and confirmed
   - Account required for all company types

2. **Timeline Impact**
   - Adds 3-5 business days to registration
   - Process can run parallel to other approvals

3. **How Keylink Helps**
   - Bank selection guidance
   - Account opening assistance
   - Document preparation support

---

### Right Column: Image with Badge

**Image Specifications:**
- Professional bank/business meeting scene
- Rounded corners: `rounded-2xl`
- Shadow: `shadow-xl`
- Height: Match left column content

**Floating Badge:**
- Position: Bottom-left corner
- Text: "Required Since June 2024"
- Style: Gold background with navy text
- Subtle shadow for depth

---

### Technical Implementation

**File:** `src/components/services/spc/SPCBankAccountUpdate.tsx`

**Changes:**

1. **Imports**
   - Add `Accordion, AccordionContent, AccordionItem, AccordionTrigger` from `@/components/ui/accordion`
   - Add `ChevronDown, Clock, HelpCircle` icons

2. **Data Structure**
   - Create `accordionData` array with sections:
     ```typescript
     const accordionData = [
       {
         id: "requirements",
         title: "Key Requirements",
         icon: CheckCircle2,
         content: [
           "Bank account must be opened before final CR issuance",
           "Minimum capital (BHD 50 for SPC) deposited and confirmed",
           "Keylink assists with bank selection and account opening"
         ]
       },
       {
         id: "timeline",
         title: "Timeline Impact",
         icon: Clock,
         content: ["Adds 3-5 business days to registration timeline", ...]
       },
       {
         id: "help",
         title: "How We Help",
         icon: HelpCircle,
         content: ["Bank selection guidance", "Account opening support", ...]
       }
     ];
     ```

3. **Layout Structure**
   - Main container: `grid lg:grid-cols-2 gap-8 lg:gap-12`
   - Left column: Header + Accordion
   - Right column: Image with overlay badge

4. **Image Asset**
   - Use/generate professional bank meeting image
   - Alt text: "Corporate bank account opening consultation in Bahrain"

5. **Accordion Styling**
   - Trigger: White text with gold icon
   - Content: White/80 text with bullet points
   - Border: `border-white/10`
   - Background on hover: `bg-white/5`

---

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (lg+) | Two columns side-by-side |
| Tablet/Mobile | Stacked - content first, then image |

---

### Visual Styling Details

**Dark Container (kept from current)**
- Background: `bg-gradient-to-br from-primary via-primary to-primary/90`
- Rounded corners: `rounded-3xl`
- Decorative blur elements

**Left Column**
- Header with badge and title
- Accordion with custom styling for dark theme
- Default first item open

**Right Column**
- Image container with `aspect-[4/3]` or similar
- Floating badge with absolute positioning
- Subtle animation on scroll into view

---

### Benefits

1. **Visual Balance** - Image adds credibility and breaks up text
2. **Better Information Architecture** - Accordion organizes content logically
3. **Reduced Cognitive Load** - Users can expand what interests them
4. **Modern Aesthetic** - Matches split-layout pattern used elsewhere
5. **Mobile Friendly** - Content stacks naturally on small screens

