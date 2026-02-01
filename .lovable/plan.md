
# Coworking Space Landing Page - Bahrain

## Overview

Create a modern, SEO-optimized landing page for Keylink Corp's coworking space services in Bahrain. The page will follow a minimalist UI/UX design with generous white space, pixel-perfect typography, and high-converting sections based on competitor analysis and semantic keyword mapping.

---

## SEO Strategy

### Primary Keyword
- **coworking space Bahrain**

### Semantic Keywords (LSI)
- shared office space Bahrain
- flexible workspace Manama
- hot desk Bahrain
- private office rental Bahrain
- meeting room rental Bahrain
- virtual office Bahrain
- business center Bahrain
- serviced office Bahrain
- coworking membership Bahrain
- workspace solutions Bahrain

### Target Meta Tags
- **Title**: Coworking Space Bahrain - Flexible Workspaces & Private Offices | Keylink Corp
- **Description**: Premium coworking spaces in Bahrain with hot desks, private offices & meeting rooms. Flexible memberships from BHD 50/month. High-speed WiFi, business address & networking events included.

---

## Content Outline (13 Sections)

Based on competitor analysis and SEO best practices, the page will include approximately 2,000-2,500 words across these sections:

### 1. Hero Section (CoworkingHero.tsx)
Minimalist hero with search/filter tabs like the reference images
- Headline with primary keyword
- Tab filters: Hot Desks, Private Offices, Meeting Rooms, Virtual Office
- Location search input
- Trust indicators (Members count, Locations, Years)
- Dual CTAs

### 2. Trust Bar (CoworkingTrustBar.tsx)
Animated statistics building credibility
- Active Members
- Years Experience
- Workspace Options
- Satisfaction Rate

### 3. What is Coworking Explainer (CoworkingExplainer.tsx)
Educational content with semantic keywords
- Two-column layout (content + benefits panel)
- Explains coworking concept for Bahrain market
- Key facts grid

### 4. Workspace Types Grid (WorkspaceTypes.tsx)
Bento-style grid showcasing 4 workspace options
- Hot Desk / Day Pass
- Dedicated Desk
- Private Office
- Meeting Rooms
Each with image, description, and CTA

### 5. Amenities Section (CoworkingAmenities.tsx)
Icon grid showing included amenities
- High-Speed WiFi
- Free Coffee & Tea
- Meeting Rooms
- Printing Services
- Mail Handling
- Networking Events
- 24/7 Access
- Reception Services
- Lockable Storage
- Phone Booths
- Kitchen Facilities
- Parking

### 6. Why Choose Us (CoworkingWhyChoose.tsx)
6 advantages with hexagon icons (reference: why_choice_us.png)
- Prime Manama Location
- Thriving Business Community
- Professional Amenities
- Networking Opportunities
- Scalable Options
- Flexible Memberships

### 7. Membership Pricing (CoworkingPricing.tsx)
3-tier pricing cards
- Day Pass: BHD 15/day
- Flexible Membership: BHD 99/month
- Dedicated Desk: BHD 199/month
Popular badge on middle tier

### 8. Image Gallery (CoworkingGallery.tsx)
Filterable gallery with tabs
- All, Workspaces, Meeting Rooms, Facilities
- 6 images with overlay text
- Uses AI-generated placeholder images

### 9. Member Benefits Grid (CoworkingBenefits.tsx)
Bento grid with images (reference: happy_customer_to_work.png)
- Flexible Credit System
- Instant Access
- Networking That Ignites Opportunities
- Free Coffee & High-Speed WiFi
- Cancel Anytime
- Right Energy Environment

### 10. Contact Form Section (CoworkingContact.tsx)
Multi-step form (reference: Contact_info_v1.png)
- Step 1: Pick workspace type
- Step 2: Fill contact details
- Option buttons for workspace selection
- Form validation

### 11. Location Section (CoworkingLocation.tsx)
Address and embedded map placeholder
- Business district details
- Nearby landmarks
- Transport access

### 12. FAQ Section (uses ServiceFAQ)
12 questions covering common queries
- Pricing, amenities, memberships
- Virtual office options
- Meeting room booking

### 13. Final CTA (uses ServiceCTA)
High-converting closing section
- Book a tour CTA
- Call button

---

## Technical Implementation

### Files to Create

```text
src/pages/services/CoworkingSpace.tsx           # Main page component
src/components/services/coworking/
  ├── index.ts                                   # Barrel export
  ├── CoworkingHero.tsx                         # Hero with tabs
  ├── CoworkingTrustBar.tsx                     # Stats bar
  ├── CoworkingExplainer.tsx                    # What is coworking
  ├── WorkspaceTypes.tsx                        # Bento workspace grid
  ├── CoworkingAmenities.tsx                    # Icon amenities grid
  ├── CoworkingWhyChoose.tsx                    # 6 advantages
  ├── CoworkingPricing.tsx                      # 3-tier pricing
  ├── CoworkingGallery.tsx                      # Filterable gallery
  ├── CoworkingBenefits.tsx                     # Member benefits bento
  ├── CoworkingContact.tsx                      # Multi-step form
  └── CoworkingLocation.tsx                     # Location/map section
src/lib/schema/coworkingSpaceSchema.ts          # JSON-LD schema
```

### Files to Modify
- `src/App.tsx` - Add route for `/services/coworking-space`

### Reusable Components Used
- ServiceFAQ (for FAQ section)
- ServiceCTA (for final CTA)
- Layout components (Header, Footer)
- FloatingWhatsApp, BackToTop

---

## Design Specifications

### Typography
- Headlines: Inter, font-extrabold, tracking-tight
- H1: 36px mobile / 48px desktop (not oversized)
- H2: 30px mobile / 36px desktop
- Body: 18px with 1.7 line-height
- Muted descriptions for secondary text

### Spacing
- Section padding: py-20 md:py-28 (generous)
- Container max-width: 1400px, centered
- Card padding: p-8 for content cards
- Gap between grid items: gap-6 to gap-8

### Colors
- Primary: Navy (#002C4D)
- Accent: Gold (#C7A763)
- Background: White
- Muted text: hsl(204 20% 45%)
- Card borders: hsl(210 20% 90%)

### Background Patterns
- Dot grid: [radial-gradient(#e5e7eb_1px,transparent_1px)]
- Linear grid for alternating sections
- Masked patterns for visual depth

### Animations
- Framer Motion for scroll-triggered reveals
- Stagger animations for lists and grids
- Subtle hover effects on cards

### Icons
- Lucide React icons throughout
- Consistent sizing (w-5 h-5 for inline, w-6 h-6 for cards)
- Accent color for icons in features

---

## Image Strategy

Since this is a new page without existing coworking images, the implementation will:

1. Use high-quality stock photo placeholders via Unsplash
2. Add commented notes for future AI image generation
3. Use gradient/pattern backgrounds as fallbacks

Placeholder image URLs for development:
- Hero workspace image
- Meeting room
- Hot desk area
- Private office
- Kitchen/lounge
- Reception area

---

## JSON-LD Schema

Structured data for rich search results:
- LocalBusiness schema for coworking space
- Service offerings with pricing
- FAQ schema for common questions
- BreadcrumbList for navigation

---

## Estimated Word Count by Section

| Section | Words |
|---------|-------|
| Hero | 50 |
| Trust Bar | 20 |
| What is Coworking | 200 |
| Workspace Types | 250 |
| Amenities | 150 |
| Why Choose Us | 180 |
| Pricing | 200 |
| Gallery | 60 |
| Benefits | 180 |
| Contact Form | 80 |
| Location | 100 |
| FAQ | 800 |
| CTA | 50 |
| **Total** | **~2,300 words** |

This word count aligns with top-ranking competitors and provides comprehensive coverage of semantic keywords.
