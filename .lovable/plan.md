
# Enhanced Company Formation Cost Calculator - Dynamic Questions by Company Type

## Overview

Transform the Company Formation Cost Calculator to ask **different, relevant questions** based on the selected company type (WLL, Branch Office, Holding Company). Each company type has unique requirements, capital needs, and cost factors specific to Bahrain regulations.

---

## Research Findings: Bahrain Company Formation 2024-2025

### Key Regulatory Updates
1. **SPC Merged into WLL** - Single Person Companies (SPC) are now consolidated under the WLL framework (Decree No. 28 of 2020). A single shareholder can form a WLL.
2. **Mandatory Bank Account** - As of June 2024, opening a corporate bank account and transferring capital is required before final CR issuance.
3. **No Minimum Capital** - WLL has no statutory minimum capital (BHD 2,150+ recommended for visa eligibility).

### Government Fee Structure (MOIC)
| Fee Type | Cost (BHD) |
|----------|------------|
| Commercial Registration | 50-200 |
| Commercial License (per activity) | 50-300 |
| Chamber of Commerce (annual) | 50-100 |
| LMRA Employer Registration | 50-100 |
| Municipal License | 50-300 |
| Security Approval (Foreign) | 50 |

### Company Type Requirements
| Type | Min. Capital | Shareholders | Visa Quota | Special Requirements |
|------|-------------|--------------|------------|---------------------|
| WLL (Solo) | Flexible | 1 | Based on office size | Bank account required |
| WLL (Partners) | Flexible | 2-50 | Based on office size | Partners agreement |
| Branch Office | N/A | Parent Co. | Limited | Parent docs + apostille |
| Holding Company | BHD 250,000 | 2-50 | Minimal | Capital deposit proof |

---

## Current Flow (Same questions for all)

```text
Step 1: Company Type (SPC, WLL, Branch, Holding)
Step 2: Business Activity (Consulting, Trading, Manufacturing, Tech)
Step 3: Visa Requirements (0, 1-2, 3-5, 6+)
Step 4: Additional Services
```

## New Dynamic Flow

```text
Step 1: Company Type (shown FIRST with updated descriptions)
Step 2-5: Dynamic questions based on type selected
Final: Additional Services + Lead Capture
```

---

## Dynamic Question Flows by Company Type

### WLL Formation Flow (6 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Company Type | WLL (Single or Partners) | Base: BHD 850 service fee |
| 2 | Ownership Structure | Solo Owner (1 shareholder), Partnership (2-50 shareholders) | Partnership adds BHD 150 for agreement |
| 3 | Owner Nationality | Bahraini/GCC, Foreign (Non-GCC) | Foreign adds BHD 50 security fee |
| 4 | Business Activity | Consulting, Trading, Manufacturing, Tech, Retail, F&B, Healthcare | Regulated sectors add BHD 100-300 |
| 5 | Visa Requirements | 0, 1-2, 3-5, 6-10, 10+ | BHD 200-400 per visa |
| 6 | Office Type | Virtual Office, Serviced Office, Physical Lease | BHD 300-1,200/year |
| 7 | Additional Services | Bank support, PRO, Accounting, LMRA | Variable |

### Branch Office Flow (5 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Company Type | Branch Office | Base: BHD 1,200 service fee |
| 2 | Parent Company Location | GCC Country, Other Arab, US/EU, Asia/Other | Document processing varies BHD 100-300 |
| 3 | Parent Company Documents | Already apostilled, Need apostille service | Apostille service BHD 200 |
| 4 | Business Activity | Same as parent, Different activities | Different adds BHD 150 |
| 5 | Staff Requirements | Manager only, 1-3 staff, 4-10 staff, 10+ staff | Visa costs BHD 200-400 each |
| 6 | Additional Services | Bank, PRO, Liaison support | Variable |

### Holding Company Flow (5 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Company Type | Holding Company | Base: BHD 2,000 service fee |
| 2 | Capital Structure | Minimum (BHD 250k), Mid-range (BHD 500k), Large (BHD 1M+) | Notary fees scale with capital |
| 3 | Shareholders Count | 2-5, 6-10, 11-50 | Agreement complexity adds BHD 200-500 |
| 4 | Subsidiary Planning | Holding only, With 1-2 subsidiaries, With 3+ subsidiaries | Formation discounts for packages |
| 5 | Board Requirements | 3 directors (min), 5+ directors | Director registration fees |
| 6 | Additional Services | Corporate structuring, Tax planning, Compliance | Variable |

---

## New Data Structures

### Company Types (Updated)
```typescript
const companyTypes = [
  { 
    id: "wll", 
    name: "WLL", 
    description: "Limited Liability Company",
    subtitle: "Most popular for businesses",
    basePrice: 850,
    govFees: 200,
    timeline: "5-7 days"
  },
  { 
    id: "branch", 
    name: "Branch Office", 
    description: "Extension of foreign company",
    subtitle: "For international expansion",
    basePrice: 1200,
    govFees: 250,
    timeline: "7-10 days"
  },
  { 
    id: "holding", 
    name: "Holding Company", 
    description: "Asset & subsidiary management",
    subtitle: "For corporate structures",
    basePrice: 2000,
    govFees: 500,
    timeline: "10-15 days"
  },
];
```

### Ownership Structures (WLL)
```typescript
const ownershipStructures = [
  { id: "solo", name: "Solo Owner", description: "Single shareholder (1 person)", fee: 0 },
  { id: "partnership", name: "Partnership", description: "2-50 shareholders", fee: 150 },
];
```

### Owner Nationalities
```typescript
const ownerNationalities = [
  { id: "bahraini", name: "Bahraini National", fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Security approval required", fee: 50 },
];
```

### Business Activities (Expanded)
```typescript
const businessActivities = [
  { id: "consulting", name: "Consulting & Professional", regulated: false, fee: 0 },
  { id: "trading", name: "General Trading", regulated: false, fee: 0 },
  { id: "tech", name: "Technology & IT", regulated: false, fee: 0 },
  { id: "manufacturing", name: "Manufacturing", regulated: false, fee: 0 },
  { id: "retail", name: "Retail & E-commerce", regulated: true, fee: 100, note: "May require local partner" },
  { id: "fnb", name: "Food & Beverage", regulated: true, fee: 150, note: "Municipality + health permits" },
  { id: "healthcare", name: "Healthcare & Medical", regulated: true, fee: 300, note: "NHRA approval required" },
  { id: "financial", name: "Financial Services", regulated: true, fee: 500, note: "CBB approval required" },
];
```

### Office Types
```typescript
const officeTypes = [
  { id: "virtual", name: "Virtual Office", description: "Address only, no physical space", price: 300, visaQuota: 0 },
  { id: "serviced", name: "Serviced Office", description: "Shared workspace with desk", price: 600, visaQuota: 2 },
  { id: "small", name: "Small Office", description: "Private office (1-3 desks)", price: 900, visaQuota: 4 },
  { id: "standard", name: "Standard Office", description: "Private office (4-10 desks)", price: 1200, visaQuota: 10 },
];
```

### Visa Pricing (Updated)
```typescript
const visaPackages = [
  { id: "0", label: "No Visas Needed", count: 0, pricePerVisa: 0, total: 0 },
  { id: "1", label: "1 Investor Visa", count: 1, pricePerVisa: 350, total: 350 },
  { id: "2-3", label: "2-3 Work Visas", count: 3, pricePerVisa: 300, total: 900 },
  { id: "4-6", label: "4-6 Work Visas", count: 6, pricePerVisa: 280, total: 1680 },
  { id: "7-10", label: "7-10 Work Visas", count: 10, pricePerVisa: 250, total: 2500 },
];
```

### Branch-Specific Options
```typescript
const parentLocations = [
  { id: "gcc", name: "GCC Country", processingFee: 100 },
  { id: "arab", name: "Other Arab Country", processingFee: 150 },
  { id: "western", name: "US / EU / UK", processingFee: 200 },
  { id: "asia", name: "Asia / Other", processingFee: 250 },
];

const documentStatus = [
  { id: "ready", name: "Documents Already Apostilled", fee: 0 },
  { id: "need", name: "Need Apostille Service", fee: 200 },
];
```

### Holding Company Options
```typescript
const capitalRanges = [
  { id: "min", name: "Minimum (BHD 250,000)", capital: 250000, notaryFee: 300 },
  { id: "mid", name: "Mid-Range (BHD 500,000)", capital: 500000, notaryFee: 500 },
  { id: "large", name: "Large (BHD 1M+)", capital: 1000000, notaryFee: 800 },
];

const subsidiaryPlans = [
  { id: "hold-only", name: "Holding Only", discount: 0 },
  { id: "1-2-subs", name: "With 1-2 Subsidiaries", discount: 10 },
  { id: "3-plus", name: "With 3+ Subsidiaries", discount: 15 },
];
```

---

## State Variables

```typescript
// Core selection
const [companyType, setCompanyType] = useState<string | null>(null);
const [step, setStep] = useState(1);

// WLL-specific
const [ownershipStructure, setOwnershipStructure] = useState<string | null>(null);
const [ownerNationality, setOwnerNationality] = useState<string | null>(null);
const [businessActivity, setBusinessActivity] = useState<string | null>(null);
const [officeType, setOfficeType] = useState<string | null>(null);
const [visaPackage, setVisaPackage] = useState<string | null>(null);

// Branch-specific
const [parentLocation, setParentLocation] = useState<string | null>(null);
const [documentStatus, setDocumentStatus] = useState<string | null>(null);
const [sameAsParent, setSameAsParent] = useState<boolean | null>(null);
const [staffCount, setStaffCount] = useState<string | null>(null);

// Holding-specific
const [capitalRange, setCapitalRange] = useState<string | null>(null);
const [shareholderCount, setShareholderCount] = useState<string | null>(null);
const [subsidiaryPlan, setSubsidiaryPlan] = useState<string | null>(null);

// Common
const [selectedServices, setSelectedServices] = useState<string[]>([]);
```

---

## Dynamic Step Logic

```typescript
const getSteps = () => {
  switch (companyType) {
    case "wll":
      return [
        "Company Type",
        "Ownership Structure", 
        "Owner Nationality",
        "Business Activity",
        "Visa Requirements",
        "Office Type",
        "Additional Services"
      ];
    case "branch":
      return [
        "Company Type",
        "Parent Company Location",
        "Document Status",
        "Business Activity",
        "Staff Requirements",
        "Additional Services"
      ];
    case "holding":
      return [
        "Company Type",
        "Capital Structure",
        "Shareholders",
        "Subsidiary Planning",
        "Additional Services"
      ];
    default:
      return ["Company Type"];
  }
};
```

---

## Cost Calculation by Type

```typescript
const calculateTotal = () => {
  let total = 0;
  let breakdown: LineItem[] = [];
  
  if (companyType === "wll") {
    // Base service fee
    total += 850;
    breakdown.push({ label: "WLL Formation Service", amount: 850 });
    
    // Government fees
    total += 200;
    breakdown.push({ label: "Government Fees (CR, License)", amount: 200 });
    
    // Partnership agreement
    if (ownershipStructure === "partnership") {
      total += 150;
      breakdown.push({ label: "Partnership Agreement", amount: 150 });
    }
    
    // Foreign security approval
    if (ownerNationality === "foreign") {
      total += 50;
      breakdown.push({ label: "Security Approval (Foreign)", amount: 50 });
    }
    
    // Regulated activity fees
    const activity = businessActivities.find(a => a.id === businessActivity);
    if (activity?.regulated) {
      total += activity.fee;
      breakdown.push({ label: `${activity.name} License`, amount: activity.fee });
    }
    
    // Office
    const office = officeTypes.find(o => o.id === officeType);
    if (office) {
      total += office.price;
      breakdown.push({ label: `${office.name} (1 Year)`, amount: office.price });
    }
    
    // Visas
    const visa = visaPackages.find(v => v.id === visaPackage);
    if (visa && visa.total > 0) {
      total += visa.total;
      breakdown.push({ label: `${visa.label}`, amount: visa.total });
    }
  }
  
  else if (companyType === "branch") {
    // Base service fee
    total += 1200;
    breakdown.push({ label: "Branch Office Formation", amount: 1200 });
    
    // Document processing by location
    const location = parentLocations.find(l => l.id === parentLocation);
    if (location) {
      total += location.processingFee;
      breakdown.push({ label: `Document Processing (${location.name})`, amount: location.processingFee });
    }
    
    // Apostille service
    if (documentStatus === "need") {
      total += 200;
      breakdown.push({ label: "Apostille Service", amount: 200 });
    }
    
    // Staff visas
    const staff = staffOptions.find(s => s.id === staffCount);
    if (staff) {
      total += staff.visaCost;
      breakdown.push({ label: `Staff Visas (${staff.label})`, amount: staff.visaCost });
    }
  }
  
  else if (companyType === "holding") {
    // Base service fee
    total += 2000;
    breakdown.push({ label: "Holding Company Formation", amount: 2000 });
    
    // Capital-based notary fees
    const capital = capitalRanges.find(c => c.id === capitalRange);
    if (capital) {
      total += capital.notaryFee;
      breakdown.push({ label: `Notarization (${capital.name})`, amount: capital.notaryFee });
    }
    
    // Shareholder agreement complexity
    const shareholders = shareholderOptions.find(s => s.id === shareholderCount);
    if (shareholders) {
      total += shareholders.agreementFee;
      breakdown.push({ label: `Shareholders Agreement (${shareholders.label})`, amount: shareholders.agreementFee });
    }
    
    // Subsidiary discount
    const plan = subsidiaryPlans.find(p => p.id === subsidiaryPlan);
    if (plan && plan.discount > 0) {
      const discount = Math.round(total * (plan.discount / 100));
      total -= discount;
      breakdown.push({ label: `Package Discount (${plan.discount}%)`, amount: -discount });
    }
  }
  
  // Add selected additional services
  selectedServices.forEach(serviceId => {
    const service = additionalServicesByType[companyType]?.find(s => s.id === serviceId);
    if (service) {
      total += service.price;
      breakdown.push({ label: service.name, amount: service.price });
    }
  });
  
  return { total, breakdown };
};
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/services/formation/FormationCostCalculator.tsx` | Complete rewrite with dynamic flows by company type |

---

## Results Display Enhancements

### Type-Specific Line Items
- **WLL**: Show CR fee, license fee, visa breakdown, office cost
- **Branch**: Show document processing, apostille, staff visas
- **Holding**: Show capital-based fees, shareholder agreement, subsidiary discounts

### Timeline Display
- Show estimated timeline based on company type
- Highlight any regulated activity delays

### Smart Recommendations
- Suggest office upgrade if visa quota insufficient
- Warn about regulated activity requirements
- Show savings for package deals

---

## Visual Mockup: Step 2 (WLL Flow)

```text
+--------------------------------------------------+
|  Step 2 of 7                         28% Complete |
|  [====================                      ]     |
|                                                   |
|  What's Your Ownership Structure?                 |
|  How many shareholders will the company have?     |
|                                                   |
|  +------------------------+  +------------------+ |
|  | ( ) Solo Owner         |  | ( ) Partnership  | |
|  | Single shareholder     |  | 2-50 shareholders| |
|  | (1 person)             |  | +BHD 150         | |
|  | Included               |  | Agreement        | |
|  +------------------------+  +------------------+ |
|                                                   |
|  [ Back ]                            [ Continue ] |
+--------------------------------------------------+
```

---

## Implementation Steps

1. **Update company types array** - Remove SPC (merged into WLL), add detailed descriptions

2. **Add type-specific data constants** - Ownership, nationalities, activities, offices, visa packages

3. **Add branch-specific constants** - Parent locations, document status, staff options

4. **Add holding-specific constants** - Capital ranges, shareholder counts, subsidiary plans

5. **Create dynamic state management** - Reset type-specific states when company type changes

6. **Implement dynamic step logic** - Different question sequences per type

7. **Create step rendering components** - Reusable selection cards for each question type

8. **Update cost calculation** - Type-specific pricing with detailed breakdown

9. **Enhance results display** - Show line-item breakdown with timeline

10. **Add smart recommendations** - Context-aware suggestions based on selections
