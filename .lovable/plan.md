

# Implementation Plan: Interactive Cost Calculator & Bank Account Opening Section

## Overview

Adding two high-priority sections to the Company Formation page to improve SEO ranking, user engagement, and lead capture:

1. **FormationCostCalculator** - Interactive tool for cost estimation with lead capture
2. **BankAccountOpening** - Informational section on corporate banking in Bahrain

---

## Section 1: Interactive Cost Calculator

### Purpose
- **SEO Target**: "company formation cost Bahrain", "Bahrain business setup cost"
- **Lead Capture**: Email/phone capture before showing detailed breakdown
- **Engagement**: Interactive multi-step form increases time on page

### Component Specifications

**File**: `src/components/services/formation/FormationCostCalculator.tsx`

**Features**:
- Multi-step interactive form (4 steps)
- Real-time cost calculation
- Lead capture form before detailed quote
- Animated transitions between steps
- Mobile-responsive design

**Calculator Steps**:

```text
Step 1: Select Company Type
+-------+-------+--------+----------+
|  SPC  |  WLL  | Branch | Holding  |
+-------+-------+--------+----------+

Step 2: Select Business Activity
+------------+----------+---------------+------+
| Consulting | Trading  | Manufacturing | Tech |
+------------+----------+---------------+------+

Step 3: Number of Work Visas Needed
+-----+-------+-------+-----+
|  0  |  1-2  |  3-5  | 6+  |
+-----+-------+-------+-----+

Step 4: Additional Services (Multi-select)
[ ] Bank Account Support (+BHD 150)
[ ] PRO Services - 1 Year (+BHD 600)
[ ] Virtual Office - 1 Year (+BHD 450)
[ ] Accounting Setup (+BHD 300)
```

**Pricing Logic**:

| Company Type | Base Price |
|--------------|------------|
| SPC          | BHD 750    |
| WLL          | BHD 1,200  |
| Branch       | BHD 1,500  |
| Holding      | BHD 2,500  |

| Visa Count | Additional Cost |
|------------|-----------------|
| 0          | BHD 0           |
| 1-2        | BHD 400         |
| 3-5        | BHD 900         |
| 6+         | BHD 1,500       |

**Lead Capture Form** (shown after calculation):
- Name (required)
- Email (required)
- Phone (optional)
- Preferred contact method (Email/WhatsApp/Phone)

**Visual Design**:
- White background with subtle dot grid pattern
- Card-based step indicators with gold accents
- Progress bar at top
- Animated counters for cost display
- Framer Motion transitions between steps

---

## Section 2: Bank Account Opening Guide

### Purpose
- **SEO Target**: "corporate bank account Bahrain", "open business bank account Bahrain"
- **Value Add**: Critical post-formation information competitors often miss
- **Trust Building**: Shows end-to-end expertise

### Component Specifications

**File**: `src/components/services/formation/BankAccountOpening.tsx`

**Content Structure**:

```text
H2: Opening a Corporate Bank Account in Bahrain

Introduction paragraph (2-3 sentences on importance)

Bank Comparison Cards (4 major banks):
+------------------+-----------+------------+---------------+
| Bank             | Timeline  | Min Deposit| Best For      |
+------------------+-----------+------------+---------------+
| National Bank    | 2-3 weeks | BHD 500    | Local SMEs    |
| BBK              | 2-3 weeks | BHD 1,000  | Trading       |
| Ahli United Bank | 2-4 weeks | BHD 2,000  | Regional Ops  |
| Standard Charter | 3-4 weeks | USD 10,000 | International |
+------------------+-----------+------------+---------------+

Required Documents Checklist:
- CR Certificate (original)
- Trade License (original)
- Memorandum of Association
- Board Resolution
- Shareholder Passports
- Proof of Business Address
- Initial Deposit

Our Bank Introduction Service CTA
```

**Visual Design**:
- Two-column layout (content left, bank cards right)
- Bank logo placeholders with card hover effects
- Document checklist with checkmark icons
- Gold accent on key information
- CTA button linking to consultation

---

## Technical Implementation Details

### Files to Create (2 new components)

1. **`src/components/services/formation/FormationCostCalculator.tsx`**
   - ~300 lines
   - Uses: useState for form state, Framer Motion for animations
   - Imports: motion, useRef, useInView, lucide-react icons
   - Pattern: Follows existing section component structure

2. **`src/components/services/formation/BankAccountOpening.tsx`**
   - ~200 lines
   - Uses: motion for animations, cn utility
   - Pattern: Two-column layout like RequirementsChecklist

### Files to Modify (1 file)

**`src/pages/services/CompanyFormation.tsx`**
- Add imports for new components
- Insert components in optimal page position

### Proposed Section Order

```text
1.  FormationHero (existing)
2.  FormationTrustBar (existing)
3.  ProblemValueProp (existing)
4.  CompanyTypesComparison (existing)
5.  FormationProcessDetailed (existing)
6.  PricingPackages (existing)
7.  FormationCostCalculator (NEW) <-- After pricing for cost context
8.  BankAccountOpening (NEW) <-- Post-formation logical flow
9.  RequirementsChecklist (existing)
10. WhyChooseKeylink (existing)
11. FormationTestimonials (existing)
12. FormationFAQ (existing)
13. RelatedServices (existing)
14. FormationCTA (existing)
```

---

## Component Code Structure

### FormationCostCalculator.tsx - Key Structure

```typescript
// State management
const [step, setStep] = useState(1)
const [companyType, setCompanyType] = useState<string | null>(null)
const [activity, setActivity] = useState<string | null>(null)
const [visaCount, setVisaCount] = useState<string | null>(null)
const [additionalServices, setAdditionalServices] = useState<string[]>([])
const [showResult, setShowResult] = useState(false)
const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' })

// Calculate total cost
const calculateTotal = () => {
  const basePrices = { SPC: 750, WLL: 1200, Branch: 1500, Holding: 2500 }
  const visaPrices = { '0': 0, '1-2': 400, '3-5': 900, '6+': 1500 }
  const servicePrices = { bank: 150, pro: 600, virtual: 450, accounting: 300 }
  // ... calculation logic
}
```

### BankAccountOpening.tsx - Key Structure

```typescript
const banks = [
  {
    name: "National Bank of Bahrain",
    shortName: "NBB",
    timeline: "2-3 weeks",
    minDeposit: "BHD 500",
    bestFor: "Local SMEs & Startups",
    features: ["Online Banking", "Multi-currency", "Flexi Account"]
  },
  // ... more banks
]

const requiredDocuments = [
  "CR Certificate (original)",
  "Trade License (original)",
  // ... more documents
]
```

---

## Styling Patterns (Matching Existing Design)

### Section Container
```tsx
<section className="py-28 lg:py-36 bg-white relative overflow-hidden">
  {/* Pattern overlay */}
  <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  <div className="container relative">
```

### Section Header
```tsx
<motion.div className="text-center max-w-3xl mx-auto mb-16">
  <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
    Section Label
  </p>
  <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
    Section Title
  </h2>
  <p className="text-lg text-muted-foreground leading-[1.8]">
    Description text
  </p>
</motion.div>
```

### Interactive Card Styling
```tsx
<motion.div
  whileHover={{ y: -4, transition: { duration: 0.2 } }}
  className={cn(
    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
    isSelected 
      ? "border-gold bg-gold/5 shadow-lg" 
      : "border-border hover:border-gold/40"
  )}
>
```

---

## Lead Capture Form Validation

Using Zod for input validation (per security guidelines):

```typescript
import { z } from 'zod'

const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().optional()
})
```

---

## SEO Enhancements

### H2/H3 Structure for Cost Calculator
```html
<h2>Calculate Your Company Formation Costs</h2>
<h3>Step 1: Choose Company Type</h3>
<h3>Step 2: Select Business Activity</h3>
<h3>Step 3: Work Visa Requirements</h3>
<h3>Step 4: Additional Services</h3>
```

### H2/H3 Structure for Bank Account
```html
<h2>Opening a Corporate Bank Account in Bahrain</h2>
<h3>Top Banks for Business Accounts</h3>
<h3>Required Documents</h3>
<h3>Our Bank Introduction Service</h3>
```

---

## Implementation Phases

### Phase 1: Create Bank Account Opening Section (Low Risk)
- Create `BankAccountOpening.tsx`
- Static content, no complex state
- Follow existing two-column pattern
- Estimated: Single implementation step

### Phase 2: Create Cost Calculator Section (Medium Risk)
- Create `FormationCostCalculator.tsx`
- Multi-step form with state management
- Lead capture form with validation
- Animated transitions
- Estimated: Single implementation step (more complex)

### Phase 3: Integrate into Page (Low Risk)
- Update `CompanyFormation.tsx` imports
- Add components in correct order
- Test page flow
- Estimated: Single edit step

---

## Expected Outcomes

| Metric | Before | After (Expected) |
|--------|--------|------------------|
| Word Count | ~3,500 | ~4,200 (+700) |
| Interactive Elements | 0 | 1 (calculator) |
| Lead Capture Points | 0 on-page | 1 (calculator form) |
| Bank Keywords | 1 mention | 15+ mentions |
| Time on Page | Baseline | +30-45 seconds |

---

## Risk Mitigation

1. **Calculator Logic**: Pre-tested pricing formulas with clear data structure
2. **Form Validation**: Using Zod schemas per security guidelines
3. **Mobile Responsiveness**: Using Tailwind responsive classes consistently
4. **Animation Performance**: Using Framer Motion with `once: true` for efficiency
5. **No Breaking Changes**: New components only, existing sections untouched

