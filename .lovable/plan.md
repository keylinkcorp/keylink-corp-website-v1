
## Section Restructure: Company Formation Page

Reorganize the page sections to follow a more logical user journey flow based on your requested order.

---

### Current Order

| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | FormationHero |
| 2 | Trust Bar | FormationTrustBar |
| 3 | Company Types | CompanyTypesTable |
| 4 | Cost Calculator | FormationCostCalculator |
| 5 | Tax Benefits | TaxBenefitsSection |
| 6 | Why Choose Us | WhyChooseKeylink |
| 7 | Process | FormationProcessDetailed |
| 8 | Activities | BusinessActivitiesDirectory |
| 9 | Requirements | RequirementsChecklist |
| 10 | Government Support | TamkeenSupportSection |
| 11 | Pricing | PricingPackages |
| 12 | Bank Account | BankAccountOpening |
| 13 | Industrial Zones | FreeZonesGuide |
| 14 | Regulatory Updates | RegulatoryUpdates |
| 15 | Testimonials | FormationTestimonials |
| 16 | Related Services | RelatedServices |
| 17 | FAQ | FormationFAQ |
| 18 | CTA | FormationCTA |

---

### New Order (Your Requested Flow)

| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | FormationHero |
| 2 | Trust Bar | FormationTrustBar |
| 3 | **Cost Calculator** | FormationCostCalculator |
| 4 | **Why Choose Us** | WhyChooseKeylink |
| 5 | **Process** | FormationProcessDetailed |
| 6 | **Company Types** | CompanyTypesTable |
| 7 | **Pricing** | PricingPackages |
| 8 | **Bank Account** | BankAccountOpening |
| 9 | **Activities** | BusinessActivitiesDirectory |
| 10 | **Tax Benefits** | TaxBenefitsSection |
| 11 | **Government Support** | TamkeenSupportSection |
| 12 | **Industrial Zones** | FreeZonesGuide |
| 13 | Requirements | RequirementsChecklist |
| 14 | Regulatory Updates | RegulatoryUpdates |
| 15 | Testimonials | FormationTestimonials |
| 16 | Related Services | RelatedServices |
| 17 | FAQ | FormationFAQ |
| 18 | CTA | FormationCTA |

---

### Logic Behind New Flow

The new order follows a natural user decision journey:

1. **Calculator** → "What will it cost me?" (hooks interest)
2. **Why Us** → "Why should I choose Keylink?" (builds trust)
3. **Process** → "How does it work?" (reduces friction)
4. **Types** → "What type of company do I need?" (education)
5. **Pricing** → "What are my package options?" (decision point)
6. **Bank Account** → "What about banking?" (common question)
7. **Activities** → "What business can I do?" (explore options)
8. **Tax** → "What are the tax benefits?" (reinforces value)
9. **Government Support** → "Any additional incentives?" (bonus)
10. **Zones** → "Where can I operate?" (location choice)

---

### Implementation

**File to modify:** `src/pages/services/CompanyFormation.tsx`

Simply reorder the component JSX in the return statement - no component changes needed, just rearranging the section order from lines 106-158.

---

### Notes

- Hero and Trust Bar stay at top (critical for first impression)
- Requirements, Regulatory Updates, Testimonials, Related Services, FAQ, and CTA stay at bottom (supporting content)
- The main 10 sections in the middle are reordered per your request
