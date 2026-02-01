// JSON-LD Schema for Coworking Space SEO
export function generateCoworkingSpaceSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://keylinkcorp.com/services/coworking-space",
    name: "Keylink Coworking Space Bahrain",
    description: "Premium coworking spaces in Bahrain offering hot desks, private offices, meeting rooms, and virtual office services. Flexible memberships starting from BHD 15/day.",
    url: "https://keylinkcorp.com/services/coworking-space",
    telephone: "+973-1700-0000",
    email: "coworking@keylinkcorp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Diplomatic Area, Building 247, Road 1705, Block 317",
      addressLocality: "Manama",
      addressCountry: "BH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2285",
      longitude: "50.5860",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "BHD 15 - BHD 299",
    image: "https://keylinkcorp.com/images/coworking-space.jpg",
    sameAs: [
      "https://www.linkedin.com/company/keylinkcorp",
      "https://www.instagram.com/keylinkcorp",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Coworking Space Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Keylink Corp",
    },
    serviceType: "Coworking Space",
    areaServed: {
      "@type": "Country",
      name: "Bahrain",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coworking Memberships",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Day Pass",
          description: "Flexible daily access to hot desk area",
          price: "15",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Flexible Membership",
          description: "10 days per month access with hot desk seating",
          price: "99",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Dedicated Desk",
          description: "Unlimited 24/7 access with your own dedicated desk",
          price: "199",
          priceCurrency: "BHD",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in a coworking membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All memberships include high-speed WiFi, free coffee and tea, access to meeting rooms (with credits), printing services, mail handling, and access to networking events.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer virtual office services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer virtual office packages that include a prestigious business address in Manama, mail handling, and access to meeting rooms on an hourly basis.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try the coworking space before committing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We offer free tours and day passes so you can experience our workspace before committing to a membership.",
        },
      },
      {
        "@type": "Question",
        name: "Is there 24/7 access available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dedicated desk members and private office tenants have 24/7 access to the coworking space. Flexible members have access during business hours.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://keylinkcorp.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://keylinkcorp.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coworking Space",
        item: "https://keylinkcorp.com/services/coworking-space",
      },
    ],
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
}
