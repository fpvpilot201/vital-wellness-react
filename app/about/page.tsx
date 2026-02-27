import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About iVital Wellness Addiction Treatment in Santa Clarita",
  description: "iVital Wellness is your trusted addiction treatment team in Santa Clarita. Our specialists help you overcome co-occurring disorders: Reclaim Your Future Today.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About iVital Wellness Addiction Treatment in Santa Clarita",
    description: "iVital Wellness is your trusted addiction treatment team in Santa Clarita. Our specialists help you overcome co-occurring disorders: Reclaim Your Future Today.",
    url: "/about",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
