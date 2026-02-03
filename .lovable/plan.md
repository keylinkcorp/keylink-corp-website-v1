

# Update About Team Section with Real Team Data

## Overview
Replace the placeholder team member data in the AboutTeam component with the real team information scraped from keylinkbh.com, including actual profile images, names, roles, and bios.

---

## Scraped Team Data

### Group Photo
- **URL**: `https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/keylinkbh.com/wp-content/uploads/2025/09/All-Team-Profile-Picture-final.webp`

### Team Members (10 people)

| Name | Role | Image | Languages | Bio |
|------|------|-------|-----------|-----|
| **Hussain Derazi** | Managing Director | `...Hussain-Derazi-Profile-scaled.jpg` | English, Arabic | Business leader, strategic planning, guides consulting services |
| **Mishal Atif** | HR & Accounting Manager | `...Mishal-Profile-scaled.webp` | Hindi, English, Arabic | HR strategies, financial reporting, compliance |
| **Rayhan Chowdury** | Digital Marketing & Design | `...Rayhan-Chowdury-Profile-scaled.webp` | Bangla, Hindi, English, Arabic | Digital marketing, UI/UX, SEO specialist |
| **Suhaira Sharif** | Customer Services | `...Suhaira-scaled.jpg` | English, Arabic | LMRA registration, work permit guidance |
| **Sadia Khan** | Customer Services | `...Sadia-Profile-scaled.webp` | Hindi, English | LMRA work permit documentation |
| **Mohammed Noufal** | Customer Services | `...Noufal-Profile-scaled.webp` | Hindi, English, Arabic | Sales & client relations |
| **Maimoona Zahir** | Financial Consultant | `...Maimuna-Profile-scaled.webp` | Hindi, English | Banking relations, KYC, AML compliance |
| **Muntaha Khan** | Business Development | `...Montaha-Profile-scaled.webp` | Hindi, English | Company formation, MOIC compliance |
| **Mosammat Aisha** | Customer Services | `...Aysha-Profile.jpg` | Bangla, Hindi, English | LMRA verification, documentation |
| **Balach Abdul Qadir** | VAT Compliance Manager | `...Bilach-Profile-scaled.jpg` | Hindi, English, Arabic | VAT compliance, 150+ clients |

---

## Implementation Plan

### File to Modify
`src/components/about/AboutTeam.tsx`

### Changes

1. **Replace `teamMembers` Array**
   - Update with real names, roles, and image URLs
   - Hussain Derazi becomes the featured founder
   - Add appropriate `wide` flags for visual variety
   - Include real bios from scraped content

2. **Update Featured Member Data**
   - Name: Hussain Derazi
   - Role: Managing Director
   - Quote: Based on his leadership philosophy
   - Stats: Adjusted to reflect Key Link (10+ Years, 500+ Clients, 10+ Team)

3. **Team Grid Layout**
   - 9 team members in grid (excluding featured)
   - 2 wide cards for variety (Mishal Atif, Maimoona Zahir)
   - Others remain square

---

## New Data Structure

```text
const teamMembers = [
  {
    name: "Hussain Derazi",
    role: "Managing Director",
    image: "https://keylinkbh.com/wp-content/uploads/2024/07/Hussain-Derazi-Profile-scaled.jpg",
    bio: "Strategic business leader, 10+ years consulting",
    featured: true,
    quote: "Every business deserves a chance to thrive. We make that happen.",
    stats: { clients: "500+", experience: "10+ Years", team: "10+" },
  },
  {
    name: "Mishal Atif",
    role: "HR & Accounting Manager",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Mishal-Profile-scaled.webp",
    bio: "HR strategies & financial operations expert",
    wide: true,
  },
  {
    name: "Rayhan Chowdury",
    role: "Digital Marketing & Design",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Rayhan-Chowdury-Profile-scaled.webp",
    bio: "UI/UX, SEO & web development specialist",
  },
  ... (7 more members)
]
```

---

## Visual Considerations

- All images are high-quality professional photos from their CDN
- Mix of `.jpg` and `.webp` formats (both supported)
- Wide cards for key managers (HR, Finance) to emphasize importance
- Featured card for Managing Director with full stats display

---

## No New Dependencies Required

The existing AboutTeam component structure supports all the changes - only the data array needs updating.

