import type { Metadata, Viewport } from "next";
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
      </head>
      <body>
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
