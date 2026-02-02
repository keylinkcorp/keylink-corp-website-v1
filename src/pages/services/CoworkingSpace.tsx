import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  CoworkingHero,
  CoworkingTrustBar,
  CoworkingLogos,
  CoworkingExplainer,
  WorkspaceTypes,
  CoworkingAmenities,
  CoworkingComparison,
  CoworkingWhyChoose,
  CoworkingPricing,
  CoworkingTestimonials,
  CoworkingGallery,
  CoworkingBenefits,
  CoworkingContact,
  CoworkingLocation,
} from "@/components/services/coworking";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { generateCoworkingSpaceSchema } from "@/lib/schema/coworkingSpaceSchema";

const coworkingFAQs = [
  {
    question: "What is a coworking space and how does it work?",
    answer: "A coworking space is a shared office environment where professionals from different companies work alongside each other. You can rent a desk or office on a flexible basis—daily, weekly, or monthly—with all amenities like WiFi, meeting rooms, and coffee included. It's ideal for freelancers, startups, and remote workers who want a professional environment without the commitment of a traditional office lease."
  },
  {
    question: "What types of workspaces do you offer in Bahrain?",
    answer: "We offer four main workspace options: Hot Desks (from BHD 15/day) for flexible daily use, Dedicated Desks (from BHD 99/month) for your permanent spot, Private Offices (from BHD 299/month) for teams of 2-20, and Meeting Rooms (from BHD 25/hour) for client meetings and presentations. Each option includes access to our premium amenities."
  },
  {
    question: "What amenities are included with my membership?",
    answer: "All memberships include high-speed gigabit WiFi, unlimited coffee and tea, access to kitchen facilities, printing services, mail handling, and invitations to networking events. Higher-tier memberships also include dedicated meeting room credits, 24/7 access, personal storage lockers, and reception services."
  },
  {
    question: "Do you offer virtual office services?",
    answer: "Yes! Our virtual office package provides a prestigious Manama business address for your company registration and mail handling, without the need for physical presence. You can also book meeting rooms hourly when you need to meet clients in person. This is perfect for businesses that want a professional presence in Bahrain without the overhead of physical office space."
  },
  {
    question: "Can I book a meeting room without being a member?",
    answer: "Absolutely! Our meeting rooms are available for hourly booking to non-members. Rates start at BHD 25/hour and include AV equipment, video conferencing capabilities, whiteboards, and catering options. Contact us to check availability and book your meeting space."
  },
  {
    question: "Is there a minimum commitment or contract?",
    answer: "No long-term contracts required! Day passes are pay-as-you-go, and monthly memberships can be cancelled with 30 days notice. We believe in earning your business every month. You can upgrade, downgrade, or cancel your membership at any time."
  },
  {
    question: "Do you offer 24/7 access to the coworking space?",
    answer: "Dedicated desk members and private office tenants enjoy unlimited 24/7 access to the coworking space via secure key card entry. Flexible membership holders have access during standard business hours (Sunday-Thursday 8AM-8PM, Friday-Saturday 9AM-5PM)."
  },
  {
    question: "How do I get started with a membership?",
    answer: "Getting started is simple! You can book a free tour to experience our space firsthand, or sign up directly online. Our team will guide you through the onboarding process, and you can start working as soon as the next day. No lengthy paperwork or approval processes."
  },
  {
    question: "Can I use the business address for company registration?",
    answer: "Yes, our business address can be used for CR registration and other official business purposes in Bahrain. Many of our members use our Diplomatic Area address to establish their company presence. We also offer CR registration assistance through our parent company, Keylink Corp."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have convenient parking available for members. Street parking is also readily available in the surrounding area. Our Diplomatic Area location is well-connected by road and just 15 minutes from Bahrain International Airport."
  },
  {
    question: "Do you host networking events?",
    answer: "We regularly organize networking events, workshops, and community gatherings for our members. These include business breakfast sessions, industry meetups, skill-sharing workshops, and social events. Networking events are included with all memberships and are a great way to connect with fellow entrepreneurs and professionals."
  },
  {
    question: "Can my team grow into a larger space?",
    answer: "Absolutely! One of the biggest advantages of coworking is scalability. Start with hot desks, move to dedicated desks as your team grows, and eventually transition to a private office. Our flexible terms make it easy to upgrade without breaking a lease or paying penalties."
  },
];

export default function CoworkingSpace() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Coworking Space Bahrain - Flexible Workspaces & Private Offices | Keylink Corp";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Premium coworking spaces in Bahrain with hot desks, private offices & meeting rooms. Flexible memberships from BHD 15/day. High-speed WiFi, business address & networking events included.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Premium coworking spaces in Bahrain with hot desks, private offices & meeting rooms. Flexible memberships from BHD 15/day. High-speed WiFi, business address & networking events included.";
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://keylinkcorp.com/services/coworking-space";

    // JSON-LD Schema
    const schemas = generateCoworkingSpaceSchema();
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`coworking-schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = `coworking-schema-${index}`;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`coworking-schema-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <Layout>
      <CoworkingHero />
      <CoworkingLogos />
      <CoworkingExplainer />
      <WorkspaceTypes />
      <CoworkingAmenities />
      <CoworkingComparison />
      <CoworkingWhyChoose />
      <CoworkingPricing />
      <CoworkingTestimonials />
      <CoworkingGallery />
      <CoworkingBenefits />
      <CoworkingContact />
      <CoworkingLocation />
      <ServiceFAQ
        badge="FAQ"
        title="Frequently Asked Questions About Coworking in Bahrain"
        subtitle="Everything you need to know about our flexible workspace solutions"
        faqs={coworkingFAQs}
      />
      <ServiceCTA
        badge="Ready to Get Started?"
        title="Book Your Free Workspace Tour Today"
        subtitle="Experience our premium coworking space in Bahrain firsthand. See why 500+ professionals choose Keylink for their workspace needs."
        primaryCTA={{
          text: "Schedule Free Tour",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "Call +973 1700 0000",
          href: "tel:+97317000000",
        }}
        features={[
          "No commitment required",
          "Same-day tours available",
          "Free day pass included",
        ]}
      />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
}
