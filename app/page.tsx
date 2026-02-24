import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home - iVital Wellness - Addiction Treatment Center in Santa Clarita",
  description: "iVital Wellness Center is dedicated to assisting you, offering premier addiction treatment services to support your recovery or that of a loved one. Our compassionate team is dedicated to guiding you toward a healthy, fulfilling life.",
  alternates: { canonical: "https://ivitalwellness.com" },
  openGraph: {
    title: "Home - iVital Wellness - Addiction Treatment Center in Santa Clarita",
    description: "iVital Wellness Center is dedicated to assisting you, offering premier addiction treatment services.",
    url: "https://ivitalwellness.com",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Treatment Center" }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* CRITICAL SEO PAYLOAD: 
          This ensures the initial HTML body is NOT empty.
      */}
      <section style={{ display: 'none' }} aria-hidden="true">
        <h1>iVital Wellness - Addiction Treatment Center in Santa Clarita</h1>
        <p>
          iVital Wellness offers premier addiction treatment services in Santa Clarita, CA.
          Our services include medical detox, residential treatment, and dual diagnosis care.
          We utilize our Transformational Breakthrough Method to guide you toward recovery.
        </p>
        <ul>
          <li>Drug Detox Santa Clarita</li>
          <li>Alcohol Detoxification</li>
          <li>Residential Rehabilitation Center</li>
          <li>Dual Diagnosis Treatment</li>
        </ul>
      </section>

      {/* The actual interactive site content */}
      <HomeClient />
    </>
  );
}