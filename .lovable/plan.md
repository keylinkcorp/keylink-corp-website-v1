

## Plan: Enhance Document Clearance Services Grid

### Summary
Add 4 missing document clearance service types from keylinkbh.com to the existing grid, update service descriptions with more detailed sub-services, and add relevant government ministry images for visual enhancement.

### Missing Services to Add

| Service | Description | Sub-services |
|---------|-------------|--------------|
| Immigration Document Clearance | Entry visas, exit permits, residence visas | Visit Visa, Business Visa, Multiple Entry Visa, Family Visa, Grace Period, Passport Update |
| Ministry of Commerce Clearance | Commercial registrations and trade licenses | Commercial Registrations, Trade Licenses, Trademark Registrations |
| EWA Clearance | Electricity and Water Authority services | New Connections, Account Transfers, Bill Payments |
| CPR Services | Central Population Registry services | New CPR Issue, Family CPR, CPR Renewal, Chip Update |
| Traffic Document Clearance | Vehicle and driving documentation | Vehicle Registration, Driving Licenses, Traffic Fines |
| Domestic LMRA Services | Household helper documentation | Domestic Work Permits (New/Renew/Cancel) |

### Current Services to Enhance
Update existing services with more specific sub-service examples from the source website:

- **LMRA Clearance**: Add "New Work Permit", "Renew Work Permit", "Cancel Work Permit", "Visa Ceiling", "Change Occupation"
- **Labor Clearance**: Add "Employment Contracts", "Salary Certificates", "End-of-Service Benefits"

### Visual Design Changes

1. **Add Images per Card**: Each service card will include a relevant image at the top (ministry logos or representative images)
2. **Grid Layout**: Expand from 6 to 10-12 service cards in a responsive grid
3. **Card Enhancement**: Add image container at top of each card with consistent aspect ratio

### Implementation Steps

1. **Generate/Source Images**
   - Create professional government ministry-themed images for each service type
   - Use consistent style with Bahrain government emblems

2. **Update DocumentClearanceServicesGrid.tsx**
   - Add new service objects with image, title, description, and examples
   - Modify card component to include image at top
   - Update grid to handle more items (3 columns on desktop, 2 on tablet, 1 on mobile)

3. **Import Assets**
   - Store images in `src/assets/document-clearance/` folder
   - Import as ES6 modules for proper bundling

### Technical Details

```text
File Changes:
├── src/assets/document-clearance/
│   ├── lmra-clearance.jpg
│   ├── immigration-clearance.jpg
│   ├── labor-clearance.jpg
│   ├── commerce-clearance.jpg
│   ├── ewa-clearance.jpg
│   ├── cpr-services.jpg
│   ├── traffic-clearance.jpg
│   ├── municipality-clearance.jpg
│   ├── domestic-lmra.jpg
│   └── tax-clearance.jpg
└── src/components/services/document-clearance/
    └── DocumentClearanceServicesGrid.tsx (update)
```

### Updated Services Array Structure

```typescript
const services = [
  {
    image: lmraClearanceImage,
    icon: Users,
    title: "LMRA Document Clearance",
    description: "Work permits, residence permits, and labor cards from LMRA.",
    examples: ["New Work Permit", "Renew Work Permit", "Cancel Work Permit", "Visa Ceiling"]
  },
  // ... additional services
];
```

### Card Component Enhancement

Each card will feature:
- Top image section with ministry logo/themed image (aspect ratio 16:9)
- Icon badge overlay
- Title, description, and example tags
- Hover effects with border accent

### Responsive Behavior
- Desktop (lg): 3 columns
- Tablet (md): 2 columns  
- Mobile: 1 column, stacked cards

