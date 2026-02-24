export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iVital Wellness",
    url: "https://ivital-wellness-react.vercel.app",
    logo: "https://ivital-wellness-react.vercel.app/photos/logo.png",
    sameAs: [
      "https://www.facebook.com/ivitalwellness",
      "https://www.instagram.com/ivitalwellness",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-866-764-5152",
      contactType: "admissions",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://ivital-wellness-react.vercel.app/#localbusiness",
    name: "iVital Wellness",
    description:
      "Premier addiction treatment center offering medical detox, residential treatment, and dual diagnosis care in Santa Clarita, California.",
    url: "https://ivital-wellness-react.vercel.app",
    telephone: "+1-866-764-5152",
    faxNumber: "+1-888-609-5559",
    image: "https://ivital-wellness-react.vercel.app/photos/iVital-Wellness-House.jpg",
    logo: "https://ivital-wellness-react.vercel.app/photos/logo.png",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15668 Live Oak Springs Canyon Rd.",
      addressLocality: "Santa Clarita",
      addressRegion: "CA",
      postalCode: "91387",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.4208,
      longitude: -118.4912,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    medicalSpecialty: [
      "Addiction Medicine",
      "Psychiatry",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Medical Detoxification",
        description: "Medically supervised drug and alcohol detox with 24/7 monitoring.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Residential Treatment",
        description: "Inpatient addiction treatment programs of 30, 60, and 90 days.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Dual Diagnosis Treatment",
        description: "Integrated treatment for co-occurring mental health and substance use disorders.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Drug Rehabilitation",
        description: "Comprehensive drug rehabilitation with evidence-based therapies.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Alcohol Rehabilitation",
        description: "Specialized alcohol addiction treatment and rehabilitation programs.",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.4208,
        longitude: -118.4912,
      },
      geoRadius: "100 mi",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "iVital Wellness",
    url: "https://ivital-wellness-react.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ivital-wellness-react.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ivital-wellness-react.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://ivital-wellness-react.vercel.app/about" },
      { "@type": "ListItem", position: 3, name: "Treatment Programs", item: "https://ivital-wellness-react.vercel.app/programs" },
      { "@type": "ListItem", position: 4, name: "Drug Detox", item: "https://ivital-wellness-react.vercel.app/drug-detox" },
      { "@type": "ListItem", position: 5, name: "Alcohol Rehab", item: "https://ivital-wellness-react.vercel.app/alcohol-rehab" },
      { "@type": "ListItem", position: 6, name: "Insurance Verification", item: "https://ivital-wellness-react.vercel.app/insurance-verification" },
      { "@type": "ListItem", position: 7, name: "Contact", item: "https://ivital-wellness-react.vercel.app/contact" },
      { "@type": "ListItem", position: 8, name: "Blog", item: "https://ivital-wellness-react.vercel.app/blog" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
