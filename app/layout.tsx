import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accessibility from "./components/Accessibility";
import ScrollReveal from "./components/ScrollReveal";
import ScrollToTop from "./components/ScrollToTop";
import JsonLd from "./components/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6a7c64",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "iVital Wellness Addiction Treatment Center in Santa Clarita",
    template: "%s | iVital Wellness",
  },
  description:
    "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
  keywords: [
    "addiction treatment center",
    "drug rehab Santa Clarita",
    "alcohol rehab Santa Clarita",
    "medical detox",
    "residential treatment",
    "dual diagnosis",
    "luxury rehab Los Angeles",
    "iVital Wellness",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: SITE_URL + "/",
  },
  formatDetection: { telephone: true, email: true, address: true },
  icons: { icon: "/photos/fav.webp", apple: "/photos/fav.webp" },
  openGraph: {
    locale: "en_US",
    siteName: "iVital Wellness - Addiction Treatment Center in Santa Clarita - Los Angeles Luxury Rehab Center",
    type: "website",
    title: "iVital Wellness Addiction Treatment Center in Santa Clarita",
    description:
      "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iVital Wellness Addiction Treatment Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iVital Wellness Addiction Treatment Center in Santa Clarita",
    description:
      "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="GYWD36nzRWOa51TIlhIx2hj-UcaOwf_U-YYAr7DAzXU"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WHP863C6QY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WHP863C6QY');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105729891', 'ym');
              ym(105729891, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105729891" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        <ScrollToTop />
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
