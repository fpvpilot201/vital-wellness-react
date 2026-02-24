import BookingClient from "./BookingClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay | iVital Wellness Rehab",
  description:
    "Book your stay at iVital Wellness luxury rehab in Santa Clarita, CA. 30, 60, and 90-day programs available. Call (866) 764-5152.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book Your Stay | iVital Wellness Rehab",
    description: "Book your stay at iVital Wellness luxury rehab in Santa Clarita, CA. 30, 60, and 90-day programs available. Call (866) 764-5152.",
    url: "/booking",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
