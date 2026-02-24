import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accessibility from "./components/Accessibility";
import ScrollReveal from "./components/ScrollReveal";
import JsonLd from "./components/JsonLd";

const SITE_URL = "https://ivitalwellness.com";

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
    default: "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab Santa Clarita",
    template: "%s | iVital Wellness",
  },
  description: "iVital Wellness is a premier addiction treatment center in Santa Clarita, CA offering medical detox, residential treatment, dual diagnosis care, and luxury rehab programs. Call (866) 764-5152.",
  keywords: ["addiction treatment center", "drug rehab Santa Clarita", "medical detox", "residential treatment", "iVital Wellness"],
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: { telephone: true, email: true, address: true },
  icons: { icon: "/photos/fav.webp", apple: "/photos/fav.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Native Injection: Forces trackers into raw View Source HTML */}
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RD6W1RGFS8');
        `}} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RD6W1RGFS8" />

        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKPJH55B');
        `}} />

        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MM5D885J');
        `}} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKPJH55B" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM5D885J" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>

        <script async src="https://cdn.userway.org/widget.js" data-account="wtfVmFNygS" />

        <JsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Accessibility />
        <ScrollReveal />
      </body>
    </html>
  );
}