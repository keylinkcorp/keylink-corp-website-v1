

# BusinessActivitiesDirectory Redesign

## Overview
Redesign the Business Activities Directory section from a searchable 3-column grid to a simpler, cleaner two-column layout with accordion-based content on the left and a relevant image on the right.

---

## Current vs New Design

```text
CURRENT DESIGN (Complex/Searchable):
┌──────────────────────────────────────────────────────────────────────────┐
│                    [Search Bar]                                          │
│        [All Activities] [Commercial] [Professional] [Regulated]         │
├──────────────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                               │
│  │ Card 1   │  │ Card 2   │  │ Card 3   │                               │
│  └──────────┘  └──────────┘  └──────────┘                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                               │
│  │ Card 4   │  │ Card 5   │  │ Card 6   │                               │
│  └──────────┘  └──────────┘  └──────────┘                               │
│  ... (22+ cards)                                                         │
└──────────────────────────────────────────────────────────────────────────┘


NEW DESIGN (Simple Two-Column):
┌──────────────────────────────────────────────────────────────────────────┐
│           Permitted Business Activities in Bahrain                       │
│     Explore activities available for company registration                │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ACCORDION (Left 50%)           │  IMAGE (Right 50%)                    │
│  ┌─────────────────────────────┐ │  ┌──────────────────────────────────┐│
│  │ ▼ Commercial Activities     │ │  │                                  ││
│  │   • General Trading         │ │  │   [Professional Business         ││
│  │   • Import/Export           │ │  │    Environment Image]            ││
│  │   • E-commerce              │ │  │                                  ││
│  │   • Food & Beverage         │ │  │   Shows diverse business         ││
│  │   • Electronics Trading     │ │  │   activities / office setting    ││
│  └─────────────────────────────┘ │  │                                  ││
│  ┌─────────────────────────────┐ │  │  ┌───────────────────────────┐   ││
│  │ ▶ Professional Services     │ │  │  │ Floating Card:            │   ││
│  └─────────────────────────────┘ │  │  │ 50+ Activities             │   ││
│  ┌─────────────────────────────┐ │  │  │ Available for Registration │   ││
│  │ ▶ Regulated Activities      │ │  │  └───────────────────────────┘   ││
│  │   (Requires Approvals)      │ │  │                                  ││
│  └─────────────────────────────┘ │  └──────────────────────────────────┘│
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [SIJILAT Link for complete official list]                               │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### File to Modify
`src/components/services/formation/BusinessActivitiesDirectory.tsx`

### Changes Summary

1. **Remove**: Search bar, category filter buttons, searchable grid layout
2. **Keep**: Business activities data, section header, SIJILAT link
3. **Add**: Two-column layout with accordion (left) + image (right)

### Accordion Structure

Group the existing 22 activities into 3 accordion categories:

| Category | Activities Count | Visual Indicator |
|----------|-----------------|------------------|
| Commercial Activities | 7 | Green badge |
| Professional Services | 7 | Blue badge |
| Regulated Activities | 8 | Orange badge with "Requires Approvals" note |

### Activity Data Grouping

**Commercial Activities (7):**
- General Trading
- Import/Export
- E-commerce
- Food & Beverage Trading
- Construction Materials
- Electronics Trading
- Automobile Trading

**Professional Services (7):**
- Management Consulting
- IT Services
- Marketing & Advertising
- HR Consulting
- Training & Education
- Translation Services
- Design Services

**Regulated Activities (8):**
- Healthcare Services (NHRA, MOH)
- Financial Services (CBB)
- Pharmaceuticals (NHRA)
- Food Manufacturing (Municipality)
- Travel & Tourism (Tourism Authority)
- Education Institute (MOE)
- Real Estate Brokerage (RERA)
- Legal Services (Bar Association)

---

## Component Structure

```tsx
<section className="py-28 lg:py-36 bg-white relative overflow-hidden">
  {/* Background Pattern - Grid Lines (keep existing) */}
  
  <div className="container relative">
    {/* Section Header (simplified) */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className="text-sm text-accent uppercase">Business Activities</p>
      <h2>Permitted Business Activities in Bahrain</h2>
      <p>Subtitle text...</p>
    </div>

    {/* Two Column Layout */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
      
      {/* Left: Accordion */}
      <div>
        <Accordion type="single" collapsible defaultValue="commercial">
          <AccordionItem value="commercial">
            <AccordionTrigger>
              <Icon /> Commercial Activities <Badge>7</Badge>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {commercialActivities.map(...)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="professional">
            ...
          </AccordionItem>
          
          <AccordionItem value="regulated">
            ...
          </AccordionItem>
        </Accordion>
        
        {/* Legend */}
        <div className="mt-6 p-4 bg-muted/30 rounded-xl">
          <p>100% foreign ownership available for most activities</p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative hidden lg:block">
        <img 
          src="/placeholder.svg" 
          alt="Business activities in Bahrain"
          className="rounded-2xl shadow-lg"
        />
        
        {/* Floating stat card */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Activities Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SIJILAT Link (keep existing) */}
    <div className="text-center mt-12">
      <a href="https://www.sijilat.bh">SIJILAT - Official Registry</a>
    </div>
  </div>
</section>
```

---

## Accordion Item Design

Each accordion trigger will include:
- Category icon (left)
- Category name (center)
- Activity count badge (right)
- Chevron indicator (far right)

Each accordion content will show:
- List of activities with small icons
- For regulated activities: additional approval requirement badges

```text
┌──────────────────────────────────────────────────────────────────┐
│ 🛒 Commercial Activities                        [7 activities] ▼ │
├──────────────────────────────────────────────────────────────────┤
│  ✓ General Trading                                               │
│    Import and export of goods, wholesale and retail trade        │
│  ✓ Import/Export                                                 │
│    International trade and customs clearance services            │
│  ✓ E-commerce                                                    │
│    Online retail, digital marketplaces, electronic commerce      │
│  ... (remaining items)                                           │
└──────────────────────────────────────────────────────────────────┘

For Regulated Activities (with approval badges):
┌──────────────────────────────────────────────────────────────────┐
│ ⚠ Regulated Activities                          [8 activities] ▼ │
├──────────────────────────────────────────────────────────────────┤
│  Healthcare Services                                             │
│  Medical clinics, healthcare facilities                          │
│  [NHRA Approval] [Ministry of Health License]                    │
│                                                                  │
│  Financial Services                                              │
│  Banking, investment, insurance services                         │
│  [CBB License] [Capital Requirements]                            │
└──────────────────────────────────────────────────────────────────┘
```

---

## Animation Strategy

- Section header: Staggered reveal (keep existing)
- Accordion: Fade-in with slight upward motion
- Image: Slide in from right with fade
- Floating card: Delayed reveal from bottom

---

## Mobile Responsiveness

- On mobile/tablet (< lg): Image hidden, accordion takes full width
- Accordion remains fully functional on all devices
- Touch-friendly accordion triggers (min 44px height)

---

## Benefits of New Design

1. **Cleaner UX**: No search/filter complexity
2. **Better Scannability**: Grouped by category for quick reference
3. **Visual Appeal**: Two-column layout with professional image
4. **Reduced Cognitive Load**: Users see categories first, then drill down
5. **Consistent Pattern**: Matches other service page layouts
6. **SEO Preserved**: All activity names and descriptions remain in DOM

