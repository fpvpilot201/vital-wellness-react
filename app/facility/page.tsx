import type { Metadata } from "next";
import FacilityClient from "./FacilityClient";

export const metadata: Metadata = {
  title: "Luxury Rehab Facility Tour | Santa Clarita Treatment Center",
  description:
    "Tour our luxury addiction treatment facility in Santa Clarita, CA. Private rooms, pool, gym, sauna, and serene grounds designed for healing and recovery at iVital Wellness.",
  alternates: { canonical: "/facility" },
  openGraph: {
    title: "Luxury Rehab Facility | iVital Wellness",
    description: "Private rooms, pool, gym, sauna, and serene grounds at our luxury Santa Clarita treatment center.",
    url: "/facility",
    images: [{ url: "/photos/iVital-Wellness-Pool.jpg", width: 1200, height: 630, alt: "iVital Wellness Luxury Facility Pool" }],
  },
};

export default function FacilityPage() {
  return <FacilityClient />;
}
