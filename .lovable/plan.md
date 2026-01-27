
# CR Cost Calculator - Interactive Lead Generation Tool

## Overview

Create an interactive 4-step cost calculator for Commercial Registration services, following the established pattern from `FormationCostCalculator.tsx`. This component will help users estimate their CR registration costs based on entity type, number of activities, and optional services.

## Component Location

**New File:** `src/components/services/cr/CRCostCalculator.tsx`

## Calculator Flow (4 Steps)

```text
Step 1: Entity Type Selection
    |
    v
Step 2: Number of Commercial Activities
    |
    v
Step 3: Registration Type (New/Amendment/Renewal)
    |
    v
Step 4: Additional Services (Optional)
    |
    v
Results: Cost Breakdown + Lead Capture Form
```

---

## Step-by-Step Breakdown

### Step 1: Entity Type

**Options:**
| Type | Description | Base Gov. Fee |
|------|-------------|---------------|
| SPC | Single Person Company | BHD 65 |
| WLL | Limited Liability | BHD 65 |
| Branch | Foreign Branch Office | BHD 65 |
| Holding | Holding Company | BHD 65 |

*Note: Government CR fees are the same across entity types, but service fees vary*

---

### Step 2: Number of Activities

**Options:**
| Activities | Trade License Fee |
|------------|-------------------|
| 1-3 Activities | BHD 20 |
| 4-6 Activities | BHD 50 |
| 7-10 Activities | BHD 100 |
| 10+ Activities | BHD 200 |

---

### Step 3: Registration Type

**Options:**
| Type | Service Fee | Description |
|------|-------------|-------------|
| New Registration | BHD 350 | First-time CR registration |
| CR Amendment | BHD 150 | Activity/shareholder changes |
| CR Renewal | BHD 200 | Annual renewal processing |

---

### Step 4: Additional Services (Optional Checkboxes)

| Service | Price |
|---------|-------|
| Name Reservation | BHD 50 |
| Virtual Office (1 Year) | BHD 450 |
| LMRA Registration | BHD 100 |
| Bank Account Support | BHD 150 |
| PRO Retainer (1 Year) | BHD 600 |

---

## Results Screen

### Left Panel: Cost Breakdown
- Entity Type selected
- Trade License fee based on activities
- Registration type service fee
- Selected additional services
- **Estimated Total** (highlighted in gold)
- Disclaimer: "Government fees included. Final quote based on specific requirements."

### Right Panel: Lead Capture Form
- Full Name (required, Zod validation)
- Email (required, Zod validation)
- Phone (optional)
- Submit button: "Get Detailed Quote"
- "Start Over" link to reset

### Success State
- Animated checkmark
- "Quote Request Submitted!" message
- "Calculate Another Quote" button

---

## Technical Implementation

### State Management
```typescript
const [step, setStep] = useState(1);
const [entityType, setEntityType] = useState<string | null>(null);
const [activityCount, setActivityCount] = useState<string | null>(null);
const [registrationType, setRegistrationType] = useState<string | null>(null);
const [selectedServices, setSelectedServices] = useState<string[]>([]);
const [showResult, setShowResult] = useState(false);
const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
const [isSubmitted, setIsSubmitted] = useState(false);
```

### Validation Schema (Zod)
```typescript
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});
```

### Cost Calculation Logic
```typescript
const calculateTotal = () => {
  let total = 0;
  
  // Base government fees (CR + Chamber)
  total += 65 + 50; // BHD 115 baseline
  
  // Trade license fee based on activities
  const activityFee = activityOptions.find(a => a.id === activityCount)?.price || 0;
  total += activityFee;
  
  // Registration type service fee
  const regFee = registrationTypes.find(r => r.id === registrationType)?.price || 0;
  total += regFee;
  
  // Additional services
  selectedServices.forEach(serviceId => {
    const service = additionalServices.find(s => s.id === serviceId);
    if (service) total += service.price;
  });
  
  return total;
};
```

---

## UI/UX Patterns

### Following Existing Patterns
- Same card selection UI as FormationCostCalculator
- Progress bar with step counter
- AnimatePresence for smooth step transitions
- Motion animations on card selection (whileHover, whileTap)
- Same color scheme: gold accents for selected states
- Same border/shadow styling for cards
- Responsive grid: 2 cols on mobile, 4 cols on desktop (where applicable)

### Background Pattern
```tsx
<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
```

### Section Styling
- Section badge: "Interactive Tool"
- Title: "Calculate Your CR Registration Costs"
- Subtitle: "Get an instant estimate for your commercial registration. Answer a few questions and receive a detailed cost breakdown."

---

## Integration with Commercial Registration Page

### Update `CommercialRegistration.tsx`
Insert the CRCostCalculator component after the TrustBar section (position 3, before CRProblemValue):

```tsx
// 2. Trust Bar
<ServiceTrustBar stats={trustBarStats} />

// 2.5 NEW: CR Cost Calculator
<CRCostCalculator />

// 3. Problem/Value Proposition
<CRProblemValue />
```

This placement:
- Engages users early with an interactive tool
- Captures leads before they scroll through all content
- Mirrors the Company Formation page structure

---

## Files Summary

| File | Action | Purpose |
|------|--------|---------|
| `src/components/services/cr/CRCostCalculator.tsx` | Create | New interactive calculator component |
| `src/pages/services/CommercialRegistration.tsx` | Update | Import and add CRCostCalculator to page |

**Total: 1 new file + 1 update**

---

## Component Dependencies

Uses existing imports:
- `framer-motion` - Animations
- `@/components/ui/button` - Buttons
- `@/components/ui/input` - Form inputs
- `@/components/ui/label` - Form labels
- `@/components/ui/checkbox` - Service selection
- `@/components/ui/progress` - Step progress bar
- `lucide-react` - Icons
- `zod` - Form validation
- `@/hooks/use-toast` - Toast notifications
- `@/lib/utils` - cn utility

---

## Accessibility Considerations

- Keyboard navigation for card selection
- Focus states on all interactive elements
- ARIA labels for progress indicators
- Error messages linked to form fields
- Sufficient color contrast for selected/unselected states
