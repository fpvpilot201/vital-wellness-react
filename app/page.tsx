import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab Santa Clarita",
  description:
    "iVital Wellness is a premier addiction treatment center in Santa Clarita, CA offering medical detox, residential treatment, dual diagnosis care, and luxury rehab programs. Call (866) 764-5152.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "iVital Wellness - Addiction Treatment Center | Drug & Alcohol Rehab Santa Clarita",
    description: "Premier addiction treatment center in Santa Clarita, CA. Medical detox, residential treatment, dual diagnosis care. Available 24/7.",
    url: "/",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Treatment Center" }],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
