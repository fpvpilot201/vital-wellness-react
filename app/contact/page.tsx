import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | iVital Wellness 24/7 Help",
  description: "Contact iVital Wellness in Santa Clarita, CA. Our admissions counselors are available 24/7 at (866) 764-5152 for addiction treatment.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | iVital Wellness 24/7 Help",
    description: "Contact iVital Wellness in Santa Clarita, CA. Our admissions counselors are available 24/7 at (866) 764-5152 for addiction treatment.",
    url: "/contact",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
