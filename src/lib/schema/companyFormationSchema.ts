export const companyFormationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "description": "Bahrain's trusted company formation and business setup partner. We help entrepreneurs and businesses establish and grow in Bahrain.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "BHD 750 - BHD 2,500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/company-formation/#service",
      "name": "Company Formation in Bahrain",
      "description": "Complete company formation services in Bahrain including SPC, WLL, Branch Office, and Holding Company registration. 100% foreign ownership allowed. From BHD 750.",
      "provider": {
        "@id": "https://keylinkcorp.com/#organization"
      },
      "serviceType": "Company Formation",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Package",
          "description": "SPC Registration with basic services",
          "price": "750",
          "priceCurrency": "BHD"
        },
        {
          "@type": "Offer",
          "name": "Business Package",
          "description": "WLL Registration with visa support",
          "price": "1200",
          "priceCurrency": "BHD"
        },
        {
          "@type": "Offer",
          "name": "Premium Package",
          "description": "Full-service formation with PRO services",
          "price": "1800",
          "priceCurrency": "BHD"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/company-formation/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to form a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With Keylink Corp, company formation takes 3-7 business days. This is significantly faster than the industry average of 2-6 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners own 100% of a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Since 2017, Bahrain allows 100% foreign ownership in most business sectors. Some restricted activities may require a local partner."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital required for a company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Capital requirements vary by company type: SPC requires BHD 50 minimum, WLL requires BHD 20,000, and Holding Companies require BHD 250,000."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be physically present in Bahrain to register?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We offer complete remote formation services. All documents can be signed via Power of Attorney."
          }
        },
        {
          "@type": "Question",
          "name": "What types of companies can I register in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Main options include: Single Person Company (SPC), Limited Liability Company (WLL), Branch Office, Holding Company, and Representative Office."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for company formation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents include: valid passport copies, professional CV/resume, proof of residential address, and a business plan for certain activities."
          }
        },
        {
          "@type": "Question",
          "name": "How much does company formation cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our packages start from BHD 750 for basic SPC registration. Full WLL formation with visa support starts at BHD 1,200."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a local sponsor or partner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most commercial activities, no local sponsor is required. 100% foreign ownership is permitted in most sectors."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get work visas through my company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your visa quota depends on your office size and business activities. We handle all visa processing as part of our services."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual requirements include: CR renewal, commercial license renewal, audit requirements for certain companies, and LMRA fees for employees."
          }
        },
        {
          "@type": "Question",
          "name": "How do I open a corporate bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assist with account opening at all major Bahrain banks. The process typically takes 2-3 weeks with proper documentation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the step-by-step company formation process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three phases: (1) Initial Registration - security approval, name registration, capital deposit; (2) Location & Approvals; (3) Final Registrations & Compliance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://keylinkcorp.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://keylinkcorp.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Company Formation",
          "item": "https://keylinkcorp.com/services/company-formation"
        }
      ]
    }
  ]
};
