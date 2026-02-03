
# Free Consultation Page with Calendly Integration

## Overview
Create a dedicated Free Consultation booking page that integrates the Calendly inline widget for scheduling Google Meet consultations. This page will serve as the destination for all "Free Consultation" CTAs throughout the site.

---

## Page Structure

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  CONSULTATION HERO                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Badge: "Book Your Free Session"                                      │  │
│  │  H1: "Let's Discuss Your Business Goals"                             │  │
│  │  Subtitle: What to expect from the consultation                       │  │
│  │  Trust: Response time, No obligations, Expert guidance                │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│  CALENDLY BOOKING SECTION                                                    │
│  ┌──────────────────────────────────┐  ┌─────────────────────────────────┐  │
│  │                                   │  │  What You'll Get               │  │
│  │    CALENDLY INLINE WIDGET        │  │  ─────────────────────────      │  │
│  │    (Google Meet Booking)          │  │  ✓ Business structure advice   │  │
│  │                                   │  │  ✓ Cost breakdown              │  │
│  │    600px height                   │  │  ✓ Timeline estimate           │  │
│  │    Full-width on mobile           │  │  ✓ Document checklist          │  │
│  │                                   │  │  ✓ Q&A with expert             │  │
│  │                                   │  │  ─────────────────────────      │  │
│  │                                   │  │  Contact Details               │  │
│  │                                   │  │  Phone, Email, WhatsApp        │  │
│  └──────────────────────────────────┘  └─────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│  WHAT TO EXPECT (Process Steps)                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  1. Book    │  │ 2. Prepare  │  │ 3. Meet     │  │ 4. Start    │        │
│  │  Schedule   │  │ We research │  │ Google Meet │  │ Get quote   │        │
│  │  your slot  │  │ your needs  │  │ 30-min call │  │ & begin     │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────────────────────┤
│  FAQ SECTION                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Consultation-specific questions                                       │  │
│  │  • Is the consultation really free?                                   │  │
│  │  • How long is the session?                                           │  │
│  │  • What should I prepare?                                             │  │
│  │  • Can I reschedule?                                                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│  ALTERNATIVE CONTACT CTA                                                     │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  "Prefer to talk now?" + WhatsApp & Phone buttons                     │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Files to Create

| File | Description |
|------|-------------|
| `src/pages/FreeConsultation.tsx` | Main page with SEO meta tags and Calendly script |
| `src/components/consultation/index.ts` | Barrel export for all consultation components |
| `src/components/consultation/ConsultationHero.tsx` | Hero with badge, headline, trust indicators |
| `src/components/consultation/CalendlyBooking.tsx` | Calendly widget + info panel layout |
| `src/components/consultation/ConsultationProcess.tsx` | 4-step process timeline |
| `src/components/consultation/ConsultationFAQ.tsx` | FAQ accordion |
| `src/components/consultation/ConsultationCTA.tsx` | Alternative contact options |

---

## Route Registration

Add to `src/App.tsx`:
```tsx
import FreeConsultation from "./pages/FreeConsultation";
// ...
<Route path="/free-consultation" element={<FreeConsultation />} />
```

---

## Technical Implementation

### Calendly Integration

The Calendly widget requires loading an external script. In React, this will be handled using `useEffect`:

```tsx
// CalendlyBooking.tsx
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);

// Widget container
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/keylinkcorp/free-consultation-google-meet?hide_gdpr_banner=1"
  style={{ minWidth: "320px", height: "700px" }}
/>
```

### ConsultationHero.tsx
- Dashed Top Fade Grid pattern (matching other pages)
- Badge: "Book Your Free Session"
- H1: "Let's Discuss Your Business Goals"
- Subtitle explaining the consultation value
- Trust pills: Free consultation, No obligations, Expert guidance
- Framer-motion staggered animations

### CalendlyBooking.tsx
- Two-column layout: Calendly widget (left) + Info panel (right)
- Info panel contains:
  - What you'll learn/get from the call
  - Alternative contact methods (phone, email, WhatsApp)
  - Business hours
- Mobile: Stacked layout with widget on top

### ConsultationProcess.tsx
- 4-step horizontal timeline with icons
- Steps: Book → Prepare → Meet → Start
- Animated connecting lines
- Scroll-triggered animations

### ConsultationFAQ.tsx
- Accordion pattern (matching existing FAQ components)
- Questions:
  - Is the consultation really free?
  - How long is the consultation?
  - What should I prepare before the call?
  - Can I reschedule my appointment?
  - What happens after the consultation?

### ConsultationCTA.tsx
- Alternative contact section for users who prefer immediate contact
- WhatsApp and Phone CTAs
- "Prefer to talk now?" headline

---

## SEO Implementation

### Meta Tags
- Title: "Free Business Consultation | Keylink Corp - Book Your Session"
- Description: "Schedule a free 30-minute consultation with Keylink Corp's business setup experts. Discuss your goals, get a cost estimate, and learn about company formation in Bahrain."

### JSON-LD Schema
- WebPage schema with consultation offer
- Organization schema
- FAQPage schema for the FAQ section

---

## Design Tokens (Matching Brand)

- Primary: #002C4D (Dark Navy)
- Accent: #C7A763 (Gold)
- Background patterns: Dashed grid with mask fade
- Buttons: Primary navy, Gold accent for main CTA
- Cards: White with subtle border, hover elevation

---

## Mobile Responsiveness

- Hero: Centered text, reduced padding
- Calendly widget: Full width, 600px height
- Info panel: Stacked below widget
- Process steps: 2x2 grid on tablet, vertical on mobile
- Touch-friendly targets (min 44px)
