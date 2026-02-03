

## Add SPC (Single Person Company) as Separate Company Type

Add SPC as an explicit fourth company type option in the cost calculator with its own dedicated wizard flow tailored for solo entrepreneurs.

---

### Why SPC Deserves Its Own Flow

| Aspect | Currently (Hidden in WLL) | With Dedicated SPC Flow |
|--------|---------------------------|------------------------|
| **Visibility** | User must know to select "Solo Owner" in WLL | Immediately visible as distinct option |
| **Messaging** | Generic WLL language | Tailored for solo entrepreneurs |
| **Steps** | 7 steps (includes partnership questions) | 5 steps (streamlined) |
| **Pricing** | Same as WLL | Slightly lower base (BHD 750) |
| **Timeline** | WLL timeline (5-7 days) | Faster (3-5 days) |

---

### Implementation Overview

#### 1. Add SPC to Company Types Array

```typescript
{
  id: "spc",
  name: "SPC",
  description: "Single Person Company",
  subtitle: "Perfect for solo entrepreneurs",
  basePrice: 750,
  govFees: 150,
  timeline: "3-5 days",
  icon: User  // Single person icon
}
```

**Card Position:** Second option (after WLL, before Branch)

---

#### 2. SPC-Specific Wizard Flow

| Step | Question | Options |
|------|----------|---------|
| 1 | Company Type | Select SPC |
| 2 | Owner Nationality | Bahraini / GCC / Foreign |
| 3 | Business Activity | Same 8 activities as WLL |
| 4 | Office Type | Same 4 office options |
| 5 | Additional Services | SPC-specific services |

**Removed from WLL flow:**
- Ownership Structure step (always solo)
- Visa Requirements merged with Office Type (SPC has limited visa quota)

---

#### 3. SPC-Specific Pricing

| Item | Cost |
|------|------|
| SPC Formation Service | BHD 750 |
| Government Fees | BHD 150 |
| Foreign Owner (if applicable) | +BHD 50 |
| Regulated Activity (if applicable) | +BHD 100-500 |
| Office (annual) | BHD 300-1,200 |
| Additional Services | Variable |

---

#### 4. SPC-Specific Additional Services

```typescript
spc: [
  { id: "bank", name: "Bank Account Support", price: 150 },
  { id: "pro", name: "PRO Services (1 Year)", price: 500 },
  { id: "accounting", name: "Accounting Setup", price: 250 },
  { id: "investor-visa", name: "Investor Visa Processing", price: 350 },
]
```

---

#### 5. Code Changes Summary

**File:** `src/components/services/formation/FormationCostCalculator.tsx`

| Area | Change |
|------|--------|
| **Imports** | Add `User` icon from lucide-react |
| **companyTypes array** | Add SPC as second option (lines 35-66) |
| **additionalServicesByType** | Add `spc` key with services (lines 151-170) |
| **getSteps()** | Add SPC case returning 5 steps (lines 211-243) |
| **calculateTotal()** | Add SPC calculation logic (lines 249-378) |
| **canProceed()** | Add SPC step validation (lines 380-417) |
| **renderStepContent()** | Add SPC-specific step renders (lines 510-1090) |

---

#### 6. New State Variables

No new state needed - SPC reuses existing state:
- `ownerNationality` - reused from WLL
- `businessActivity` - reused from WLL  
- `officeType` - reused from WLL
- `selectedServices` - reused

---

### Visual: Company Type Selection (After)

```text
┌─────────────────────────────────────────────────────────────────────┐
│                    Choose Company Type                               │
├───────────┬───────────┬───────────┬───────────────────────────────────┤
│           │           │           │                                   │
│   WLL     │   SPC     │  Branch   │   Holding                        │
│  Building │   User    │  Globe    │   Landmark                       │
│           │           │           │                                   │
│  Limited  │  Single   │ Extension │   Asset &                        │
│  Liability│  Person   │ of foreign│   subsidiary                     │
│  Company  │  Company  │ company   │   management                     │
│           │           │           │                                   │
│  from     │  from     │  from     │   from                           │
│  BHD 850  │  BHD 750  │  BHD 1200 │   BHD 2000                       │
│  5-7 days │  3-5 days │  7-10 days│   10-15 days                     │
└───────────┴───────────┴───────────┴───────────────────────────────────┘
```

---

### SPC Flow Steps Detail

**Step 2: Owner Nationality**
- Same options as WLL (Bahraini, GCC, Foreign)
- Foreign adds +BHD 50 security approval fee

**Step 3: Business Activity**
- Same 8 activities as WLL
- Same regulated activity fees
- Shows "Regulated" badge and warning notes

**Step 4: Office Type**
- Same 4 options (Virtual, Serviced, Small, Standard)
- Note: SPC has max 1 investor visa quota (shown as info)

**Step 5: Additional Services**
- SPC-specific service list
- Includes investor visa option prominently

---

### Benefits of This Approach

1. **User Experience** - Solo entrepreneurs immediately see SPC option
2. **Shorter Flow** - 5 steps instead of 7 (no partnership/visa complexity)
3. **Clear Pricing** - Lower base price visible upfront
4. **Faster Timeline** - 3-5 days highlighted
5. **Reuses Code** - Shares options with WLL, minimal duplication
6. **SEO Value** - "SPC" and "Single Person Company" terms now explicit

---

### Estimated Line Changes

- New company type: ~10 lines
- Additional services: ~6 lines
- getSteps() case: ~8 lines
- calculateTotal() case: ~35 lines
- canProceed() case: ~8 lines
- renderStepContent() SPC steps: ~120 lines

**Total:** ~190 new lines of code

