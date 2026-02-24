import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | iVital Wellness Santa Clarita",
  description:
    "Meet the iVital Wellness team and tour our luxury addiction treatment facility in Santa Clarita, CA. Compassionate, experienced care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | iVital Wellness Santa Clarita",
    description: "Meet the iVital Wellness team and tour our luxury addiction treatment facility in Santa Clarita, CA. Compassionate, experienced care.",
    url: "/about",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
