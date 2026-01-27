

# Enhanced CR Cost Calculator - Dynamic Questions Based on Registration Type

## Overview

Transform the CR Cost Calculator to ask **different, relevant questions** based on the selected registration type (New Registration, CR Amendment, or CR Renewal). Each type has unique requirements and cost factors.

---

## Current Flow (Same questions for all)

```text
Step 1: Entity Type (SPC, WLL, Branch, Holding)
Step 2: Activity Count (1-3, 4-6, 7-10, 10+)
Step 3: Registration Type (New, Amendment, Renewal)
Step 4: Additional Services
```

## New Dynamic Flow

```text
Step 1: Registration Type (shown FIRST to determine flow)
Step 2-4: Dynamic questions based on type selected
Final: Additional Services + Lead Capture
```

---

## Dynamic Question Flows by Registration Type

### New Registration Flow (5 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Registration Type | New Registration | Base: BHD 350 service fee |
| 2 | Entity Type | SPC, WLL, Branch, Holding | Gov fee: BHD 50-65 each |
| 3 | Number of Activities | 1-3, 4-6, 7-10, 10+ | BHD 20-200 |
| 4 | Applicant Type | Bahraini, GCC National, Foreign | Foreign adds security check fee BHD 50 |
| 5 | Capital Range | Below 50K, 50K-250K, 250K+ | Affects notary fees |
| 6 | Additional Services | Name reservation, Virtual office, LMRA, Bank, PRO | Variable |

### CR Amendment Flow (4 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Registration Type | CR Amendment | Base: BHD 100 service fee |
| 2 | Amendment Type (Multi-select) | Activity Change, Shareholder Change, Name Change, Address Change, Capital Change | BHD 50-150 each |
| 3 | Current Entity Type | SPC, WLL, Branch, Holding | Affects document requirements |
| 4 | Urgency Level | Standard (2 weeks), Express (1 week) | Express +BHD 100 |
| 5 | Additional Services | PRO support, Notarization, Translation | Variable |

### CR Renewal Flow (4 steps)
| Step | Question | Options | Pricing Impact |
|------|----------|---------|----------------|
| 1 | Registration Type | CR Renewal | Base: BHD 150 service fee |
| 2 | Current Entity Type | SPC, WLL, Branch, Holding | Gov fee: BHD 50 renewal |
| 3 | Renewal Status | On-time, 1-3 months late, 3-6 months late, 6+ months late | Penalty: BHD 0-100+ |
| 4 | Activity Count | 1-3, 4-6, 7-10, 10+ | BHD 100 base + extras |
| 5 | Additional Services | PRO support, Document collection | Variable |

---

## Technical Implementation

### New Data Structures

```typescript
// Amendment types with individual pricing
const amendmentTypes = [
  { id: "activity", name: "Activity Change", description: "Add/remove commercial activities", price: 100 },
  { id: "shareholder", name: "Shareholder Change", description: "Transfer or add shareholders", price: 150 },
  { id: "name", name: "Trade Name Change", description: "Change registered business name", price: 75 },
  { id: "address", name: "Address Change", description: "Change registered address", price: 50 },
  { id: "capital", name: "Capital Change", description: "Increase or decrease capital", price: 100 },
];

// Applicant types (for new registration)
const applicantTypes = [
  { id: "bahraini", name: "Bahraini National", description: "Bahrain citizen", fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Other nationalities", fee: 50 },
];

// Renewal status with penalties
const renewalStatus = [
  { id: "ontime", name: "On-Time", description: "Before or at expiry", penalty: 0 },
  { id: "1-3months", name: "1-3 Months Late", description: "BHD 10/month penalty", penalty: 30 },
  { id: "3-6months", name: "3-6 Months Late", description: "BHD 20/month penalty", penalty: 80 },
  { id: "6plus", name: "6+ Months Late", description: "Risk of deletion + high penalty", penalty: 150 },
];

// Urgency levels for amendments
const urgencyLevels = [
  { id: "standard", name: "Standard", description: "2-3 weeks processing", fee: 0 },
  { id: "express", name: "Express", description: "1 week processing", fee: 100 },
];
```

### New State Variables

```typescript
// Existing
const [registrationType, setRegistrationType] = useState<string | null>(null);
const [entityType, setEntityType] = useState<string | null>(null);
const [activityCount, setActivityCount] = useState<string | null>(null);

// New - for dynamic questions
const [applicantType, setApplicantType] = useState<string | null>(null);
const [capitalRange, setCapitalRange] = useState<string | null>(null);
const [selectedAmendments, setSelectedAmendments] = useState<string[]>([]);
const [renewalStatus, setRenewalStatus] = useState<string | null>(null);
const [urgencyLevel, setUrgencyLevel] = useState<string | null>(null);
```

### Dynamic Step Logic

```typescript
const getSteps = () => {
  switch (registrationType) {
    case "new":
      return ["Registration Type", "Entity Type", "Activities", "Applicant Type", "Capital Range", "Additional Services"];
    case "amendment":
      return ["Registration Type", "Amendment Types", "Entity Type", "Urgency", "Additional Services"];
    case "renewal":
      return ["Registration Type", "Entity Type", "Renewal Status", "Activities", "Additional Services"];
    default:
      return ["Registration Type"];
  }
};

const getTotalSteps = () => getSteps().length;
```

---

## UI Changes Summary

### Step 1 (All flows): Registration Type Selection
- Move from step 3 to step 1
- Show all three options with updated pricing:
  - New Registration: from BHD 350
  - CR Amendment: from BHD 100
  - CR Renewal: from BHD 150

### Dynamic Steps 2-5
- Render different question components based on `registrationType`
- Each type shows only relevant questions
- Progress bar updates dynamically based on total steps for selected type

### Additional Services (Final step before lead capture)
- Show different add-ons based on registration type:
  - **New**: Name reservation, Virtual office, LMRA, Bank account, PRO
  - **Amendment**: Notarization, Translation, Express PRO
  - **Renewal**: PRO support, Document collection, Address verification

---

## Cost Calculation Updates

```typescript
const calculateTotal = () => {
  let total = 0;
  
  if (registrationType === "new") {
    // Base service fee
    total += 350;
    // Entity government fee
    total += entityTypes.find(e => e.id === entityType)?.govFee || 0;
    // Chamber of Commerce
    total += 50;
    // Activity fees
    total += activityOptions.find(a => a.id === activityCount)?.price || 0;
    // Foreign applicant security check
    if (applicantType === "foreign") total += 50;
    // Capital-based notary fees
    total += capitalRanges.find(c => c.id === capitalRange)?.notaryFee || 0;
  }
  
  else if (registrationType === "amendment") {
    // Base service fee
    total += 100;
    // Sum of selected amendment types
    selectedAmendments.forEach(id => {
      total += amendmentTypes.find(a => a.id === id)?.price || 0;
    });
    // Express processing
    if (urgencyLevel === "express") total += 100;
  }
  
  else if (registrationType === "renewal") {
    // Base service fee
    total += 150;
    // Entity renewal fee
    total += 50;
    // Chamber renewal
    total += 16;
    // Activity renewal (BHD 100 for 1-3)
    total += activityOptions.find(a => a.id === activityCount)?.renewalPrice || 100;
    // Late penalties
    total += renewalStatuses.find(s => s.id === renewalStatus)?.penalty || 0;
  }
  
  // Add selected additional services
  selectedServices.forEach(serviceId => {
    total += additionalServices.find(s => s.id === serviceId)?.price || 0;
  });
  
  return total;
};
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/services/cr/CRCostCalculator.tsx` | Complete rewrite of calculator logic with dynamic flows |

---

## Visual Mockup of New Step 2 (Amendment Flow)

```text
+--------------------------------------------------+
|  Step 2 of 5                         40% Complete |
|  [============================              ]     |
|                                                   |
|  What Changes Do You Need?                        |
|  Select all amendment types that apply            |
|                                                   |
|  +-------------------+  +-------------------+     |
|  | [x] Activity      |  | [ ] Shareholder   |     |
|  | Add/remove        |  | Transfer or add   |     |
|  | activities        |  | shareholders      |     |
|  | BHD 100           |  | BHD 150           |     |
|  +-------------------+  +-------------------+     |
|                                                   |
|  +-------------------+  +-------------------+     |
|  | [ ] Trade Name    |  | [ ] Address       |     |
|  | Change business   |  | Change registered |     |
|  | name              |  | address           |     |
|  | BHD 75            |  | BHD 50            |     |
|  +-------------------+  +-------------------+     |
|                                                   |
|  +-------------------+                            |
|  | [ ] Capital       |                            |
|  | Increase/decrease |                            |
|  | capital           |                            |
|  | BHD 100           |                            |
|  +-------------------+                            |
|                                                   |
|  [ Back ]                            [ Continue ] |
+--------------------------------------------------+
```

---

## Implementation Steps

1. **Add new data constants** for amendment types, applicant types, renewal statuses, urgency levels, and capital ranges

2. **Add new state variables** for dynamic selections

3. **Reorder steps** - make Registration Type step 1

4. **Create dynamic step rendering** based on selected registration type

5. **Update progress calculation** to reflect dynamic total steps

6. **Create new step components**:
   - Amendment Types (multi-select checkboxes)
   - Applicant Type (radio selection)
   - Capital Range (radio selection)
   - Renewal Status (radio selection with penalty display)
   - Urgency Level (radio selection)

7. **Update cost calculation** with type-specific logic

8. **Update results display** to show type-specific line items

9. **Reset related states** when registration type changes

