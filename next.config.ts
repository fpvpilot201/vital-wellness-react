import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // === Previously-indexed new URLs → current canonical pages ===
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/contact/', destination: '/contact-us', permanent: true },
      { source: '/programs', destination: '/treatments', permanent: true },
      { source: '/programs/', destination: '/treatments', permanent: true },
      { source: '/residential-treatment', destination: '/treatments', permanent: true },
      { source: '/residential-treatment/', destination: '/treatments', permanent: true },

      { source: '/drug-detox', destination: '/detox/drug-detox-santa-clarita', permanent: true },
      { source: '/drug-detox/', destination: '/detox/drug-detox-santa-clarita', permanent: true },
      { source: '/medical-alcohol-detox', destination: '/detox/alcohol-detox-santa-clarita', permanent: true },
      { source: '/medical-alcohol-detox/', destination: '/detox/alcohol-detox-santa-clarita', permanent: true },
      { source: '/drug-rehab', destination: '/residential-treatment/drug-rehabilitation-santa-clarita', permanent: true },
      { source: '/drug-rehab/', destination: '/residential-treatment/drug-rehabilitation-santa-clarita', permanent: true },
      { source: '/alcohol-rehab', destination: '/residential-treatment/alcohol-rehabilitation-santa-clarita', permanent: true },
      { source: '/alcohol-rehab/', destination: '/residential-treatment/alcohol-rehabilitation-santa-clarita', permanent: true },
      { source: '/prescription-drug-detox', destination: '/detox/prescription-drug-detox', permanent: true },
      { source: '/prescription-drug-detox/', destination: '/detox/prescription-drug-detox', permanent: true },
      { source: '/prescription-rehab', destination: '/residential-treatment/prescription-drug-rehabilitation', permanent: true },
      { source: '/prescription-rehab/', destination: '/residential-treatment/prescription-drug-rehabilitation', permanent: true },
      { source: '/admissions-information', destination: '/admissions', permanent: true },
      { source: '/admissions-information/', destination: '/admissions', permanent: true },
      { source: '/facility', destination: '/about/facility', permanent: true },
      { source: '/facility/', destination: '/about/facility', permanent: true },
      { source: '/treatment-methods', destination: '/detox/treatment-methods', permanent: true },
      { source: '/treatment-methods/', destination: '/detox/treatment-methods', permanent: true },
      { source: '/supplemental-treatments', destination: '/detox/supplemental-treatments', permanent: true },
      { source: '/supplemental-treatments/', destination: '/detox/supplemental-treatments', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/privacy/', destination: '/privacy-policy', permanent: true },
      { source: '/what-we-treat', destination: '/treatments', permanent: true },
      { source: '/what-we-treat/', destination: '/treatments', permanent: true },


      // === /detox (no sub-path) → drug detox ===
      { source: '/detox', destination: '/detox/drug-detox-santa-clarita', permanent: true },
      { source: '/detox/', destination: '/detox/drug-detox-santa-clarita', permanent: true },

      // === /treatments/drug-addiction → drug rehab page ===
      { source: '/treatments/drug-addiction', destination: '/residential-treatment/drug-rehabilitation-santa-clarita', permanent: true },
      { source: '/treatments/drug-addiction/', destination: '/residential-treatment/drug-rehabilitation-santa-clarita', permanent: true },

      // === Old /what-we-treat/[slug] → /treatments/[full-slug] ===
      { source: '/what-we-treat/alcohol', destination: '/treatments/alcohol-addiction', permanent: true },
      { source: '/what-we-treat/alcohol/', destination: '/treatments/alcohol-addiction', permanent: true },
      { source: '/what-we-treat/cocaine', destination: '/treatments/cocaine-addiction', permanent: true },
      { source: '/what-we-treat/cocaine/', destination: '/treatments/cocaine-addiction', permanent: true },
      { source: '/what-we-treat/marijuana', destination: '/treatments/marijuana-addiction', permanent: true },
      { source: '/what-we-treat/marijuana/', destination: '/treatments/marijuana-addiction', permanent: true },
      { source: '/what-we-treat/prescription', destination: '/treatments/prescription-drug-addiction', permanent: true },
      { source: '/what-we-treat/prescription/', destination: '/treatments/prescription-drug-addiction', permanent: true },
      { source: '/what-we-treat/heroin', destination: '/treatments/heroin-addiction', permanent: true },
      { source: '/what-we-treat/heroin/', destination: '/treatments/heroin-addiction', permanent: true },
      { source: '/what-we-treat/benzo', destination: '/treatments/benzodiazepine-addiction', permanent: true },
      { source: '/what-we-treat/benzo/', destination: '/treatments/benzodiazepine-addiction', permanent: true },
      { source: '/what-we-treat/meth', destination: '/treatments/meth-addiction', permanent: true },
      { source: '/what-we-treat/meth/', destination: '/treatments/meth-addiction', permanent: true },
      { source: '/what-we-treat/opioid', destination: '/treatments/opioid-addiction', permanent: true },
      { source: '/what-we-treat/opioid/', destination: '/treatments/opioid-addiction', permanent: true },
      { source: '/what-we-treat/xanax', destination: '/treatments/xanax-addiction', permanent: true },
      { source: '/what-we-treat/xanax/', destination: '/treatments/xanax-addiction', permanent: true },
      { source: '/what-we-treat/co-occurring', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/what-we-treat/co-occurring/', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/what-we-treat/hallucinogen', destination: '/treatments/hallucinogen-addiction', permanent: true },
      { source: '/what-we-treat/hallucinogen/', destination: '/treatments/hallucinogen-addiction', permanent: true },

      // === Terms ===
      { source: '/terms-of-service', destination: '/privacy-policy', permanent: true },
      { source: '/terms-of-service/', destination: '/privacy-policy', permanent: true },

      // === Blog posts at root-level WordPress URLs → /blog/[slug] ===
      { source: '/do-you-need-a-medical-drug-detox', destination: '/blog/do-you-need-a-medical-drug-detox', permanent: true },
      { source: '/do-you-need-a-medical-drug-detox/', destination: '/blog/do-you-need-a-medical-drug-detox', permanent: true },
      { source: '/what-families-should-know-before-choosing-a-residential-treatment-center', destination: '/blog/what-families-should-know-before-choosing-a-residential-treatment-center', permanent: true },
      { source: '/what-families-should-know-before-choosing-a-residential-treatment-center/', destination: '/blog/what-families-should-know-before-choosing-a-residential-treatment-center', permanent: true },
      { source: '/how-early-intervention-saves-lives-families-and-careers', destination: '/blog/how-early-intervention-saves-lives-families-and-careers', permanent: true },
      { source: '/how-early-intervention-saves-lives-families-and-careers/', destination: '/blog/how-early-intervention-saves-lives-families-and-careers', permanent: true },
      { source: '/medical-drug-detox-in-santa-clarita-what-to-expect', destination: '/blog/medical-drug-detox-in-santa-clarita-what-to-expect', permanent: true },
      { source: '/medical-drug-detox-in-santa-clarita-what-to-expect/', destination: '/blog/medical-drug-detox-in-santa-clarita-what-to-expect', permanent: true },
      { source: '/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working', destination: '/blog/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working', permanent: true },
      { source: '/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working/', destination: '/blog/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working', permanent: true },
      { source: '/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind', destination: '/blog/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind', permanent: true },
      { source: '/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind/', destination: '/blog/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind', permanent: true },
      { source: '/how-to-choose-an-alcohol-rehabilitation-center-in-santa-clarita', destination: '/blog/how-to-choose-an-alcohol-rehabilitation-center-in-santa-clarita', permanent: true },
      { source: '/how-to-choose-an-alcohol-rehabilitation-center-in-santa-clarita/', destination: '/blog/how-to-choose-an-alcohol-rehabilitation-center-in-santa-clarita', permanent: true },
      { source: '/luxury-alcohol-addiction-treatment-in-santa-clarita-is-it-worth-it', destination: '/blog/luxury-alcohol-addiction-treatment-in-santa-clarita-is-it-worth-it', permanent: true },
      { source: '/luxury-alcohol-addiction-treatment-in-santa-clarita-is-it-worth-it/', destination: '/blog/luxury-alcohol-addiction-treatment-in-santa-clarita-is-it-worth-it', permanent: true },
      { source: '/can-i-quit-prescription-drugs-on-my-own-why-medical-detox-matters', destination: '/blog/can-i-quit-prescription-drugs-on-my-own-why-medical-detox-matters', permanent: true },
      { source: '/can-i-quit-prescription-drugs-on-my-own-why-medical-detox-matters/', destination: '/blog/can-i-quit-prescription-drugs-on-my-own-why-medical-detox-matters', permanent: true },
      { source: '/alcohol-addiction-treatment-options-in-santa-clarita', destination: '/blog/alcohol-addiction-treatment-options-in-santa-clarita', permanent: true },
      { source: '/alcohol-addiction-treatment-options-in-santa-clarita/', destination: '/blog/alcohol-addiction-treatment-options-in-santa-clarita', permanent: true },
      { source: '/drug-rehabilitation-santa-clarita', destination: '/blog/drug-rehabilitation-santa-clarita', permanent: true },
      { source: '/drug-rehabilitation-santa-clarita/', destination: '/blog/drug-rehabilitation-santa-clarita', permanent: true },
      { source: '/how-to-talk-to-a-loved-one-about-their-addiction', destination: '/blog/how-to-talk-to-a-loved-one-about-their-addiction', permanent: true },
      { source: '/how-to-talk-to-a-loved-one-about-their-addiction/', destination: '/blog/how-to-talk-to-a-loved-one-about-their-addiction', permanent: true },
      { source: '/substance-use-rehabilitation-santa-clarita-comprehensive-guide-to-recovery-options', destination: '/blog/substance-use-rehabilitation-santa-clarita-comprehensive-guide-to-recovery-options', permanent: true },
      { source: '/substance-use-rehabilitation-santa-clarita-comprehensive-guide-to-recovery-options/', destination: '/blog/substance-use-rehabilitation-santa-clarita-comprehensive-guide-to-recovery-options', permanent: true },
      { source: '/cleansing-and-detoxing-your-body', destination: '/blog/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working', permanent: true },
      { source: '/cleansing-and-detoxing-your-body/', destination: '/blog/signs-your-body-is-detoxing-how-to-know-if-your-detoxification-is-working', permanent: true },
      { source: '/how-trauma-impacts-addiction-and-how-we-treat-it', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/how-trauma-impacts-addiction-and-how-we-treat-it/', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/beyond-detox-ivital-wellness-dual-diagnosis-care', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/beyond-detox-ivital-wellness-dual-diagnosis-care/', destination: '/treatments/co-occurring-disorders', permanent: true },
      { source: '/the-powerful-benefits-of-quitting-drinking-alcohol-how-to-stop-alcohol-addiction', destination: '/blog/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind', permanent: true },
      { source: '/the-powerful-benefits-of-quitting-drinking-alcohol-how-to-stop-alcohol-addiction/', destination: '/blog/the-benefits-of-quitting-alcohol-what-really-happens-to-your-body-and-mind', permanent: true },
      { source: '/a-guide-to-drug-and-alcohol-detox-what-you-need-to-know', destination: '/detox/drug-detox-santa-clarita', permanent: true },
      { source: '/a-guide-to-drug-and-alcohol-detox-what-you-need-to-know/', destination: '/detox/drug-detox-santa-clarita', permanent: true },
      { source: '/how-to-know-if-you-need-help-for-drug-or-alcohol-use', destination: '/blog/do-you-need-a-medical-drug-detox', permanent: true },
      { source: '/how-to-know-if-you-need-help-for-drug-or-alcohol-use/', destination: '/blog/do-you-need-a-medical-drug-detox', permanent: true },

      // === Misc ===
      { source: '/supplements/detox', destination: '/detox/drug-detox-santa-clarita', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
      {
        source: "/photos/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;