import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accessibility from "./components/Accessibility";
import ScrollReveal from "./components/ScrollReveal";
import JsonLd from "./components/JsonLd";

const SITE_URL = "https://ivital-wellness-react.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6a7c64",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "GYWD36nzRWOa51TIlhIx2hj-UcaOwf_U-YYAr7DAzXU",
  },
  title: {
    default:
      "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab Santa Clarita",
    template: "%s | iVital Wellness",
  },
  description:
    "iVital Wellness is a premier addiction treatment center in Santa Clarita, CA offering medical detox, residential treatment, dual diagnosis care, and luxury rehab programs. Call (866) 764-5152.",
  keywords: [
    "addiction treatment center",
    "drug rehab Santa Clarita",
    "alcohol rehab California",
    "medical detox",
    "residential treatment",
    "dual diagnosis",
    "luxury rehab",
    "substance abuse treatment",
    "drug detox",
    "alcohol detox",
    "prescription drug rehab",
    "opioid addiction treatment",
    "iVital Wellness",
    "Santa Clarita rehab",
    "California addiction treatment",
  ],
  authors: [{ name: "iVital Wellness" }],
  creator: "iVital Wellness",
  publisher: "iVital Wellness",
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: "/photos/fav.webp",
    apple: "/photos/fav.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "iVital Wellness",
    title:
      "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab Santa Clarita",
    description:
      "Premier addiction treatment center in Santa Clarita, CA. Medical detox, residential treatment, dual diagnosis care. Call (866) 764-5152.",
    images: [
      {
        url: "/photos/iVital-Wellness-House.jpg",
        width: 1200,
        height: 630,
        alt: "iVital Wellness Addiction Treatment Center in Santa Clarita, California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab",
    description:
      "Premier addiction treatment center in Santa Clarita, CA. Medical detox, residential treatment, dual diagnosis care.",
    images: ["/photos/iVital-Wellness-House.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="google-site-verification" content="google816b095b184c764a.html" />
      </head>
      <body>
        <Script id="ga-setup" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RD6W1RGFS8" />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RD6W1RGFS8');
          `}
        </Script>
        <Script id="gtm-setup-1" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKPJH55B');
          `}
        </Script>
        <Script id="gtm-setup-2" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MM5D885J');
          `}
        </Script>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="wtfVmFNygS"
          strategy="lazyOnload"
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKPJH55B" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM5D885J" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <JsonLd />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Accessibility />
        <ScrollReveal />
      </body>
    </html>
  );
}
