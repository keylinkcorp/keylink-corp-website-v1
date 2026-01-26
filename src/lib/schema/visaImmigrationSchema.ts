export const visaImmigrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/visa-immigration#service",
      "name": "Visa & Immigration Services in Bahrain",
      "description": "Work visas, family visas, and Golden Visa services in Bahrain. Fast processing from 5 days with 100% approval rate. Expert visa services for businesses and investors.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Visa & Immigration",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "50",
        "highPrice": "1500",
        "priceCurrency": "BHD",
        "offerCount": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to get a work visa in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard work visa takes 5-10 business days once all documents are submitted. This includes LMRA approval, visa issuance, and CPR card processing."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bahrain Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Golden Visa is a 10-year renewable residency permit for investors, entrepreneurs, talented professionals, and retirees. It offers greater flexibility than standard visas and doesn't require a sponsor."
          }
        },
        {
          "@type": "Question",
          "name": "Can I sponsor my family on a work visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, employees earning above BHD 400/month can sponsor their spouse and unmarried children under 25. Family visa processing takes an additional 5-7 days."
          }
        },
        {
          "@type": "Question",
          "name": "Who is eligible for the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligibility includes investors with BHD 100,000+ in Bahrain assets, company owners employing 10+ Bahrainis, executives earning BHD 2,000+/month, and retirees with sufficient pension income."
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
          "name": "Visa & Immigration",
          "item": "https://keylinkcorp.com/services/visa-immigration"
        }
      ]
    }
  ]
};
