import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home - iVital Wellness - Addiction Treatment Center in Santa Clarita",
  description:
    "iVital Wellness Center is dedicated to assisting you, offering premier addiction treatment services to support your recovery or that of a loved one. Our compassionate team is dedicated to guiding you toward a healthy, fulfilling life.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Home - iVital Wellness - Addiction Treatment Center in Santa Clarita",
    description: "iVital Wellness Center is dedicated to assisting you, offering premier addiction treatment services to support your recovery or that of a loved one. Our compassionate team is dedicated to guiding you toward a healthy, fulfilling life.",
    url: "/",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Treatment Center" }],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
