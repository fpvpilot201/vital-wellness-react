import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iVital Wellness Addiction Rehab in Santa Clarita | Contact",
  description: "Contact iVital Wellness Addiction Rehab in Santa Clarita to speak confidentially with an admissions counselor. Get your questions answered and verify insurance.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "iVital Wellness Addiction Rehab in Santa Clarita | Contact",
    description: "Contact iVital Wellness Addiction Rehab in Santa Clarita to speak confidentially with an admissions counselor. Get your questions answered and verify insurance.",
    url: "/contact-us",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
