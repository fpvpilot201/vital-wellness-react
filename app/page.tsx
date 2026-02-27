import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iVital Wellness Addiction Treatment Center in Santa Clarita",
  description: "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
  alternates: { canonical: "/" },
  openGraph: {
    title: "iVital Wellness Addiction Treatment Center in Santa Clarita",
    description: "iVital Wellness Alcohol & Drug Rehab Center in Santa Clarita, CA: Premier addiction treatment and recovery services: Get dedicated support you or your loved one",
    url: "/",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />
    </>
  );
}
