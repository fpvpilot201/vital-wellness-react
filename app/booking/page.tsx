import BookingClient from "./BookingClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | iVital Wellness",
  description: "Schedule a confidential consultation with iVital Wellness. Take the first step toward recovery today.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book a Consultation | iVital Wellness",
    description: "Schedule a confidential consultation with iVital Wellness. Take the first step toward recovery today.",
    url: "/booking",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
