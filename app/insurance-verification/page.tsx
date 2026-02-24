import InsuranceClient from "./InsuranceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Insurance | iVital Wellness Rehab",
  description:
    "Verify insurance for addiction treatment at iVital Wellness. We accept BCBS, Aetna, Cigna, UnitedHealthcare and more. Call (866) 764-5152.",
  alternates: { canonical: "/insurance-verification" },
  openGraph: {
    title: "Verify Insurance | iVital Wellness Rehab",
    description: "Verify insurance for addiction treatment at iVital Wellness. We accept BCBS, Aetna, Cigna, UnitedHealthcare and more. Call (866) 764-5152.",
    url: "/insurance-verification",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

export default function InsuranceVerificationPage() {
  return <InsuranceClient />;
}
