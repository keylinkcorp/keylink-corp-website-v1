
# Contact Us Page

## Overview
Create a comprehensive Contact Us page for Keylink Corp that provides multiple ways to reach the company, displays office location with an interactive map, and includes a multi-step contact form. The design will follow the established visual patterns using mask-based background patterns, framer-motion animations, and the navy/gold color scheme.

---

## Page Sections

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  CONTACT HERO                                                                │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Badge: "Get in Touch"                                                │  │
│  │  H1: "We're Here to Help You Succeed"                                │  │
│  │  Subtitle: Contact description                                        │  │
│  │  Quick Stats: [Response Time] [Languages] [Availability]            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│  CONTACT METHODS (Bento Grid)                                                │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Phone     │ │   WhatsApp  │ │    Email    │ │  Visit Us   │           │
│  │   📞        │ │     💬      │ │     ✉️      │ │     📍      │           │
│  │ Click call  │ │  Quick chat │ │   Send msg  │ │ Directions  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘           │
├─────────────────────────────────────────────────────────────────────────────┤
│  CONTACT FORM + INFO PANEL                                                   │
│  ┌────────────────────────────────────┐  ┌────────────────────────────────┐ │
│  │  Multi-Step Contact Form           │  │  Dark Info Panel               │ │
│  │  Step 1: Service Interest          │  │  ─────────────────────         │ │
│  │  Step 2: Your Details              │  │  Contact Details               │ │
│  │  Step 3: Message                   │  │  • Phone numbers               │ │
│  │                                     │  │  • Email addresses             │ │
│  │  [Back] [Submit Inquiry]           │  │  • Office address              │ │
│  │                                     │  │  ─────────────────────         │ │
│  │                                     │  │  Business Hours                │ │
│  │                                     │  │  Sun-Thu: 8AM-5PM              │ │
│  └────────────────────────────────────┘  └────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│  OFFICE LOCATION + MAP                                                       │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Full-width office exterior image with gradient overlay               │  │
│  │  Animated map pin                                                      │  │
│  │  "Our Location" headline + description                                 │  │
│  │  [Get Directions Button]                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  Embedded Google Map (interactive)                                    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────────────────┤
│  FAQ SECTION                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Common questions about contacting Keylink                            │  │
│  │  • How fast is your response time?                                    │  │
│  │  • What languages do you support?                                     │  │
│  │  • Can I book a consultation online?                                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│  CTA SECTION                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  "Ready to Start?" + CTA Buttons                                      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Files to Create

| File | Description |
|------|-------------|
| `src/pages/Contact.tsx` | Main contact page with SEO meta tags and schema |
| `src/components/contact/index.ts` | Barrel export for all contact components |
| `src/components/contact/ContactHero.tsx` | Hero section with title, badge, quick stats |
| `src/components/contact/ContactMethods.tsx` | Bento grid of contact options (phone, WhatsApp, email, visit) |
| `src/components/contact/ContactForm.tsx` | Multi-step contact form with validation |
| `src/components/contact/ContactLocation.tsx` | Office location with map and directions |
| `src/components/contact/ContactFAQ.tsx` | Contact-specific FAQ accordion |

---

## Route Registration

Add to `src/App.tsx`:
```tsx
import Contact from "./pages/Contact";
// ...
<Route path="/contact" element={<Contact />} />
```

---

## Technical Details

### ContactHero.tsx
- Dashed Top Fade Grid pattern (matching AboutHero)
- Badge: "Get in Touch"
- H1: "We're Here to Help You Succeed"
- Subtitle explaining contact options
- Quick stats row: Response Time (<1hr), Languages (4), Availability (Sun-Thu)
- Floating orbs for decoration
- Framer-motion staggered animations

### ContactMethods.tsx
- Bento-style grid with 4 contact cards
- Each card: Icon + Title + Description + Action button
- Phone: Click-to-call functionality
- WhatsApp: Direct WhatsApp link (wa.me)
- Email: mailto link
- Visit: Opens Google Maps directions
- Hover effects with subtle lift and border accent

### ContactForm.tsx
- 3-step form with progress indicator
- Step 1: Service interest (checkboxes - Company Formation, PRO Services, etc.)
- Step 2: Personal details (Name, Email, Phone, Company)
- Step 3: Message and preferred contact method
- Zod validation for all fields
- Toast notification on successful submission
- Dark info panel beside form with contact details and hours

### ContactLocation.tsx
- Full-width office exterior image with gradient overlay
- Animated floating map pin
- Office address and landmark information
- "Get Directions" button
- Embedded Google Maps iframe (Sanabis Exhibition Tower location)
- Gallery thumbnails of office

### ContactFAQ.tsx
- Uses existing ServiceFAQ component pattern
- Contact-specific questions:
  - Response time expectations
  - Language support
  - Consultation booking process
  - Office visit requirements
  - After-hours support

---

## SEO Implementation

### Meta Tags
- Title: "Contact Us | Keylink Corp - Business Setup Experts in Bahrain"
- Description: "Get in touch with Keylink Corp for expert business setup services in Bahrain. Call +973 1700 8888, WhatsApp, email, or visit our Sanabis office. Response within 1 hour."

### JSON-LD Schema
- ContactPage schema
- LocalBusiness schema with contact info
- Organization schema

---

## Contact Information (Consistent with existing data)

| Type | Value |
|------|-------|
| Phone | +973 1700 8888 |
| WhatsApp | +973 1700 8888 |
| Email | info@keylinkcorp.com |
| Address | Sanabis Exhibition Tower, Office 601, Manama, Kingdom of Bahrain |
| Hours | Sun-Thu: 8:00 AM - 5:00 PM |
| Languages | English, Arabic, Hindi, Urdu |

---

## Form Field Validation (Zod)

```text
name: Required, 2-100 characters
email: Required, valid email format
phone: Required, valid phone pattern
company: Optional, max 100 characters
services: At least one service selected
message: Optional, max 1000 characters
contactMethod: Required (phone/email/whatsapp)
```

---

## Animations

- Hero: Staggered reveal for badge, title, subtitle, stats
- Contact methods: Cards animate in with stagger effect
- Form: Step transitions with slide animation
- Location: Parallax effect on office image, bouncing map pin
- FAQ: Accordion open/close animations

---

## Mobile Responsiveness

- Hero: Single column, reduced padding
- Contact methods: 2x2 grid on tablet, stacked on mobile
- Form: Full width, stacked layout
- Map: Full width, reduced height
- Touch-friendly button sizes (min 44px)
