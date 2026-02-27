import { SITE_URL } from "../lib/site";

export default function JsonLd() {
    const baseUrl = SITE_URL;
    const logoUrl = `${baseUrl}/photos/logo.png`;
    const mainImageUrl = `${baseUrl}/photos/iVital-Wellness-House.jpg`;

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // BreadcrumbList
            {
                "@type": "BreadcrumbList",
                "@id": `${baseUrl}/#breadcrumblist`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        "@id": `${baseUrl}#listItem`,
                        position: 1,
                        name: "Home",
                    },
                ],
            },

            // LocalBusiness
            {
                "@type": "LocalBusiness",
                "@id": `${baseUrl}/#localbusiness`,
                name: "iVital Wellness - Addiction Treatment Center in Santa Clarita",
                brand: { "@id": `${baseUrl}/#organization` },
                url: baseUrl,
                image: logoUrl,
                logo: `${baseUrl}/#logo`,
                telephone: "+18886732087",
                openingHoursSpecification: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ].map((day) => ({
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [`https://schema.org/${day}`],
                    opens: "09:00",
                    closes: "17:00",
                })),
            },

            // MedicalTherapy entries
            {
                "@type": "MedicalTherapy",
                "@id": `${baseUrl}/detox/`,
                name: "Medically Managed Detoxification",
                description: "24/7 medically supervised detoxification services designed to safely manage withdrawal symptoms.",
                provider: { "@id": `${baseUrl}/#clinic` },
                relevantSpecialty: "Addiction Medicine",
            },
            {
                "@type": "MedicalTherapy",
                "@id": `${baseUrl}/residential-treatment/`,
                name: "Residential Inpatient Rehabilitation",
                description: "Structured inpatient treatment program with individual therapy, group counseling, and holistic care.",
                provider: { "@id": `${baseUrl}/#clinic` },
                relevantSpecialty: "Psychiatry",
            },
            {
                "@type": "MedicalTherapy",
                "@id": `${baseUrl}/treatments/alcohol-addiction/`,
                name: "Alcohol Addiction Treatment",
                alternateName: "Alcohol Rehabilitation Center Santa Clarita",
                description: "Comprehensive alcohol use disorder treatment combining detox and evidence-based behavioral therapies.",
                provider: { "@id": `${baseUrl}/#clinic` },
            },
            {
                "@type": "MedicalTherapy",
                "@id": `${baseUrl}/detox/alcohol-detox-santa-clarita/`,
                name: "Substance Abuse Treatment",
                description: "Treatment programs for opioid, stimulant, benzodiazepine, marijuana, and polysubstance addiction.",
                provider: { "@id": `${baseUrl}/#clinic` },
            },
            {
                "@type": "MedicalTherapy",
                "@id": `${baseUrl}/residential-treatment/30-day-program/`,
                name: "Extended Care Rehab Programs",
                description: "Flexible 30, 60, and 90-day addiction treatment programs tailored to long-term recovery.",
                provider: { "@id": `${baseUrl}/#clinic` },
            },

            // Organization
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                name: "iVital Wellness - Addiction Treatment Center in Santa Clarita",
                description: "Los Angeles Luxury Rehab Center",
                url: baseUrl,
                telephone: "+18886732087",
                logo: {
                    "@type": "ImageObject",
                    url: logoUrl,
                    "@id": `${baseUrl}/#organizationLogo`,
                    width: 250,
                    height: 81,
                },
                image: { "@id": `${baseUrl}/#organizationLogo` },
                sameAs: [
                    "https://www.facebook.com/IVitalWellness",
                    "https://www.instagram.com/ivitalwellnesscenter/",
                    "https://www.youtube.com/@iVitalWellness",
                    "https://www.linkedin.com/company/ivital-wellness/posts/",
                    "https://www.yelp.com/biz/ivital-wellness-santa-clarita",
                ],
            },

            // WebPage
            {
                "@type": "WebPage",
                "@id": `${baseUrl}/#webpage`,
                url: baseUrl,
                name: "iVital Wellness Addiction Treatment Center in Santa Clarita",
                description:
                    "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
                inLanguage: "en-US",
                isPartOf: { "@id": `${baseUrl}/#website` },
                breadcrumb: { "@id": `${baseUrl}/#breadcrumblist` },
                image: {
                    "@type": "ImageObject",
                    url: mainImageUrl,
                    "@id": `${baseUrl}/#mainImage`,
                    width: 1200,
                    height: 630,
                },
                primaryImageOfPage: { "@id": `${baseUrl}/#mainImage` },
                datePublished: "2024-07-31T01:59:22-07:00",
                dateModified: "2026-02-08T04:49:43-07:00",
            },

            // WebSite
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                url: baseUrl,
                name: "iVital Wellness - Addiction Treatment Center in Santa Clarita",
                description: "Los Angeles Luxury Rehab Center",
                inLanguage: "en-US",
                publisher: { "@id": `${baseUrl}/#organization` },
            },

            // MedicalOrganization + MedicalBusiness (the clinic)
            {
                "@type": ["MedicalOrganization", "MedicalBusiness"],
                "@id": `${baseUrl}/#clinic`,
                name: "iVital Wellness",
                legalName: "iVital Wellness, Inc.",
                url: baseUrl,
                logo: logoUrl,
                image: logoUrl,
                description:
                    "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
                telephone: "+1-888-673-2087",
                email: "info@ivitalwellness.com",
                priceRange: "$$$",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "15668 Live Oak Springs Canyon Rd",
                    addressLocality: "Santa Clarita",
                    addressRegion: "CA",
                    postalCode: "91387",
                    addressCountry: "US",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 34.404465,
                    longitude: -118.410345,
                },
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                        "Monday", "Tuesday", "Wednesday", "Thursday",
                        "Friday", "Saturday", "Sunday",
                    ],
                    opens: "00:00",
                    closes: "23:59",
                },
                areaServed: [
                    { "@type": "AdministrativeArea", name: "Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Saugus, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Newhall, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Valencia, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Canyon Country, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Rancho Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Lang, CA 91387" },
                    { "@type": "AdministrativeArea", name: "Humphreys, CA 91387" },
                    { "@type": "AdministrativeArea", name: "Solemint, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Pardee, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "Elayon, Santa Clarita, CA" },
                    { "@type": "AdministrativeArea", name: "San Fernando Valley, CA" },
                ],
                medicalSpecialty: ["Addiction Medicine", "Psychiatry", "Behavioral Health"],
                isAcceptingNewPatients: true,
                paymentAccepted: ["Cash", "Credit Card", "Private Insurance"],
                hasMap: "https://maps.app.goo.gl/LrsC1FdbW2RjsGyR7",
                sameAs: [
                    "https://www.facebook.com/ivitalwellness",
                    "https://www.instagram.com/ivitalwellness",
                    "https://www.youtube.com/@iVitalWellness/shorts",
                    "https://www.linkedin.com/company/ivital-wellness/posts/?feedView=all",
                ],
                identifier: {
                    "@type": "PropertyValue",
                    name: "DHCS License Number",
                    value: "191363AP",
                },
                recognizingAuthority: {
                    "@type": "GovernmentOrganization",
                    name: "California Department of Health Care Services",
                    url: "https://www.dhcs.ca.gov/",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "8",
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Addiction Treatment Programs",
                    itemListElement: [
                        { "@id": `${baseUrl}/#detox` },
                        { "@id": `${baseUrl}/#residential` },
                        { "@id": `${baseUrl}/#alcohol-rehab` },
                        { "@id": `${baseUrl}/#drug-rehab` },
                        { "@id": `${baseUrl}/#extended-care` },
                    ],
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
