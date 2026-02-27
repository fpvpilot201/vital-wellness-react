import InsuranceClient from "./InsuranceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insurance Verification iVital Wellness Alcohol & Drug Rehab",
    description: "iVital Wellness | Wondering if your insurance plan covers inpatient treatment for substance abuse? We’re here to help you and guide you to the right program.",
    alternates: { canonical: "/insurance-verification" },
    openGraph: {
        title: "Insurance Verification iVital Wellness Alcohol & Drug Rehab",
        description: "iVital Wellness | Wondering if your insurance plan covers inpatient treatment for substance abuse? We’re here to help you and guide you to the right program.",
        url: "/insurance-verification",
        images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does iVital Wellness accept my insurance?",
            acceptedAnswer: { "@type": "Answer", text: "iVital Wellness works with most major private insurance providers. Submit our online verification form or call +1 888 673 2087 and our team will confirm your coverage, typically within 24-48 hours." }
        },
        {
            "@type": "Question",
            name: "What insurance plans does iVital Wellness accept?",
            acceptedAnswer: { "@type": "Answer", text: "We accept most major private insurance plans, including PPO plans. Our team verifies coverage for inpatient detox, residential treatment, and dual diagnosis care at our Santa Clarita facility. Contact us at +1 888 673 2087 to verify your specific plan." }
        },
        {
            "@type": "Question",
            name: "How long does insurance verification take?",
            acceptedAnswer: { "@type": "Answer", text: "Our admissions team typically completes insurance verification within 24-48 hours of receiving your information. We will then contact you to explain your benefits and any out-of-pocket costs for treatment at our Santa Clarita facility." }
        },
        {
            "@type": "Question",
            name: "Will my insurance cover residential addiction treatment at iVital Wellness?",
            acceptedAnswer: { "@type": "Answer", text: "Many private insurance plans cover inpatient residential treatment for substance use disorders. Coverage varies by plan, but our team will work with your insurance company to maximize your benefits and minimize out-of-pocket costs." }
        },
        {
            "@type": "Question",
            name: "Is the insurance verification process confidential?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. All information shared during insurance verification is kept strictly confidential in accordance with HIPAA regulations. Your privacy and dignity are our top priority at iVital Wellness in Santa Clarita, CA." }
        },
    ],
};

export default function InsuranceVerificationPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <InsuranceClient />
        </>
    );
}
