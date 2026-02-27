import FacilityClient from "./FacilityClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facility iVital Wellness Drug & Alcohol Rehab in Santa Clarita",
  description: "iVital Wellness offers a private, luxury facility for drug & alcohol rehab in Santa Clarita, CA. Start recovery with our detox and personalized 30-day program.",
  alternates: { canonical: "/about/facility" },
  openGraph: {
    title: "Facility iVital Wellness Drug & Alcohol Rehab in Santa Clarita",
    description: "iVital Wellness offers a private, luxury facility for drug & alcohol rehab in Santa Clarita, CA. Start recovery with our detox and personalized 30-day program.",
    url: "/about/facility",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function FacilityPage() {
  return <FacilityClient />;
}
