export const companyFormationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "description": "Bahrain's trusted company formation and business setup partner. Expert MOIC registration, WLL and SPC formation, commercial licensing, and LMRA compliance services.",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahrain Financial Harbour",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "1234",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/keylinkcorp",
        "https://twitter.com/keylinkcorp"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "name": "Keylink Corp - Company Formation Bahrain",
      "description": "Professional company formation services in Bahrain. Register your WLL, SPC, or branch office with 100% foreign ownership. MOIC registration, commercial licensing, and visa processing from BHD 750.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahrain Financial Harbour",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "1234",
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
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ahmed Al-Rashid" },
          "datePublished": "2024-01-15",
          "reviewBody": "Keylink made our WLL company formation incredibly smooth. They handled all the MOIC paperwork and we were registered in just 5 days.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://keylinkcorp.com/services/company-formation/#webpage",
      "url": "https://keylinkcorp.com/services/company-formation",
      "name": "Company Formation in Bahrain - Register Your Business in 3-7 Days | Keylink Corp",
      "description": "Register your company in Bahrain with 100% foreign ownership. Expert WLL, SPC, and branch office formation from BHD 750. MOIC registration, commercial licensing, and LMRA compliance included.",
      "isPartOf": { "@id": "https://keylinkcorp.com/#website" },
      "about": { "@id": "https://keylinkcorp.com/services/company-formation/#service" },
      "breadcrumb": { "@id": "https://keylinkcorp.com/services/company-formation/#breadcrumb" },
      "inLanguage": "en",
      "potentialAction": {
        "@type": "ReadAction",
        "target": "https://keylinkcorp.com/services/company-formation"
      }
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/company-formation/#service",
      "name": "Company Formation in Bahrain",
      "description": "Complete company formation services in Bahrain including SPC (Single Person Company), WLL (Limited Liability Company), Branch Office, and Holding Company registration. 100% foreign ownership allowed. Full MOIC registration, commercial licensing, and LMRA compliance from BHD 750.",
      "provider": { "@id": "https://keylinkcorp.com/#organization" },
      "serviceType": "Company Formation",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain",
        "alternateName": "Kingdom of Bahrain"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Company Formation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Package - SPC Formation",
            "description": "Single Person Company (SPC) registration with MOIC approval, commercial registration, and business license",
            "price": "750",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          {
            "@type": "Offer",
            "name": "Business Package - WLL Formation",
            "description": "Limited Liability Company (WLL) registration with visa support, LMRA registration, and corporate bank account assistance",
            "price": "1200",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          {
            "@type": "Offer",
            "name": "Premium Package - Full-Service Formation",
            "description": "Complete business setup with PRO services, visa processing, accounting setup, and ongoing compliance support",
            "price": "1800",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          }
        ]
      }
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
            "text": "With Keylink Corp, company formation in Bahrain takes 3-7 business days. This includes MOIC security approval, commercial registration, and trade license issuance. Our streamlined process is significantly faster than the industry average of 2-6 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners own 100% of a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Since 2017, Bahrain allows 100% foreign ownership in most business sectors. You can register a WLL (Limited Liability Company), SPC (Single Person Company), or branch office without a local sponsor. Some restricted activities like certain professional services may require a Bahraini partner."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital required to start a business in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum capital requirements vary by company type in Bahrain: SPC (Single Person Company) requires BHD 50 minimum, WLL (Limited Liability Company) requires BHD 20,000, and Holding Companies require BHD 250,000. The capital must be deposited in a Bahrain corporate bank account."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be physically present in Bahrain to register a company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We offer complete remote company formation services. All documents can be signed via Power of Attorney, and we handle all MOIC submissions, commercial registration, and LMRA filings on your behalf. Many entrepreneurs complete the entire business setup process without visiting Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What types of companies can I register in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Main company types in Bahrain include: Single Person Company (SPC) for solo entrepreneurs requiring BHD 50 capital, Limited Liability Company (WLL) for partnerships requiring BHD 20,000 capital, Branch Office for foreign company expansion, Holding Company for investment vehicles, and Representative Office for market research activities."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for company formation in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents for Bahrain company registration include: valid passport copies of all shareholders, professional CV/resume, proof of residential address (utility bill or bank statement), and a business plan for certain regulated activities. Corporate shareholders need additional documents such as certificate of incorporation, memorandum of association, and board resolutions."
          }
        },
        {
          "@type": "Question",
          "name": "How much does company formation cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our company formation packages start from BHD 750 for basic SPC registration. Full WLL formation with visa support starts at BHD 1,200. Premium packages with PRO services, accounting setup, and ongoing compliance start at BHD 1,800. All pricing is transparent with no hidden government fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a local sponsor or partner to start a business in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most commercial activities in Bahrain, no local sponsor is required. 100% foreign ownership is permitted since 2017. However, certain regulated activities such as legal services, auditing, and some healthcare services may require a Bahraini partner or specialized professional licenses."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get work visas through my company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your visa quota depends on your office size and registered business activities. Keylink handles all LMRA visa processing including work permits, residence permits, and the Golden Visa program for qualified investors with BHD 500,000+ investment."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements for a Bahrain company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual compliance requirements include: Commercial Registration (CR) renewal with MOIC, commercial license renewal, audit requirements for WLL companies, LMRA fees for employees (BHD 10/month per worker), and municipal fees. Our compliance packages handle all these requirements automatically."
          }
        },
        {
          "@type": "Question",
          "name": "How do I open a corporate bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keylink assists with corporate bank account opening at all major Bahrain banks including NBB, BBK, Ahli United Bank, and international banks like HSBC and Standard Chartered. Required documents include company registration papers, shareholder passports, and a business plan. The process typically takes 2-3 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What is the step-by-step company formation process in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Company formation in Bahrain has three phases: (1) Initial Registration - MOIC security approval, company name registration, capital deposit, and partner documentation; (2) Location & Approvals - business address registration, sector-specific approvals, document notarization, and bank account opening; (3) Final Compliance - LMRA registration, work visa processing, and national ID cards for employees."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SPC and WLL in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An SPC (Single Person Company) requires only one shareholder with a minimum capital of BHD 50, ideal for solo entrepreneurs. A WLL (Limited Liability Company) requires 2-50 shareholders with BHD 20,000 minimum capital, better suited for partnerships and larger operations. Both allow 100% foreign ownership. WLLs offer more flexibility for adding investors later."
          }
        },
        {
          "@type": "Question",
          "name": "Which government ministries are involved in company formation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main authorities are: MOIC (Ministry of Industry and Commerce) for commercial registration and trade licenses, LMRA (Labour Market Regulatory Authority) for work permits and visas, and the SIJILAT system for electronic CR processing. For certain activities, sector-specific approvals from ministries like Health or Finance may be required."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my company type after registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, company conversion is possible in Bahrain. For example, you can convert an SPC to a WLL when adding partners, or upgrade to a Holding Company. The process involves MOIC approval, amended memorandum of association, and updated capital requirements. The full conversion process typically takes 2-3 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What business activities are restricted for foreign ownership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most commercial activities allow 100% foreign ownership. Restricted activities include: real estate brokerage (requires Bahraini partner), certain media activities, and specific professional services like legal practice. We review your intended activities during consultation and advise on the optimal ownership structure."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the Commercial Registration (CR) valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Commercial Registration (CR) is valid for one year from the date of issue. Annual renewal is required before expiry to maintain legal operating status. CR renewal packages start from BHD 350 and include reminders 60 days before expiry to ensure uninterrupted business operations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bahrain Golden Visa and how do I qualify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bahrain Golden Visa is a 10-year residency program for investors and skilled professionals. Qualification criteria include: real estate investment of BHD 200,000+, business investment creating jobs, or exceptional talent in specific fields. As a company owner with qualifying investment, you may be eligible for Golden Visa."
          }
        },
        {
          "@type": "Question",
          "name": "Can I operate my Bahrain company remotely from abroad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many clients operate their Bahrain companies remotely. You'll need: a registered business address (virtual office solutions available), a local corporate bank account, and optionally a PRO service for ongoing government liaison. Remote operation works well for consulting, trading, and digital service companies."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my company formation application is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rejections are rare when working with experienced consultants. Common rejection reasons include: restricted business activities, incomplete documentation, or name conflicts. If rejection occurs, the issue is identified, corrections prepared, and resubmission completed at no additional charge. A 100% success rate means final rejections have never occurred."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/company-formation/#breadcrumb",
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
          "name": "Company Formation in Bahrain",
          "item": "https://keylinkcorp.com/services/company-formation"
        }
      ]
    }
  ]
};
