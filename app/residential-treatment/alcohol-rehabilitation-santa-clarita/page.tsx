import HtmlPage from "../../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alcohol Rehabilitation Center Santa Clarita: iVital Wellness",
    description: "Find effective alcohol addiction treatment at our luxury rehab facility in Santa Clarita. Tailored alcohol rehabilitation programs for lasting recovery.",
    alternates: { canonical: "/residential-treatment/alcohol-rehabilitation-santa-clarita" },
    openGraph: {
        title: "Alcohol Rehabilitation Center Santa Clarita: iVital Wellness",
        description: "Find effective alcohol addiction treatment at our luxury rehab facility in Santa Clarita. Tailored alcohol rehabilitation programs for lasting recovery.",
        url: "/residential-treatment/alcohol-rehabilitation-santa-clarita",
        images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
    },
};

const css = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }
.main-container { width: 88%; max-width: 1200px; margin: 60px auto; }
.top-split { display: flex; gap: 50px; margin-bottom: 80px; align-items: center; }
.top-image { flex: 1; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.top-image img { width: 100%; height: auto; display: block; }
.top-text { flex: 1; }
.content-heading { font-family: 'Playfair Display', serif; font-size: 32px; color: #2c3e29; margin-bottom: 20px; line-height: 1.3; }
.content-p { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 20px; }
.lower-split { display: flex; gap: 60px; align-items: flex-start; }
.content-col { flex: 2.2; }
.sidebar-col { flex: 1; }
.sidebar-links { list-style: none; padding: 0; margin-bottom: 40px; }
.sidebar-links li { border-bottom: 1px solid #eee; }
.sidebar-links a { display: block; padding: 12px 0; color: #555; text-decoration: none; font-family: 'Lato', sans-serif; font-size: 14px; transition: color 0.3s; }
.sidebar-links a:hover { color: #6a7c64; padding-left: 5px; }
.sidebar-form-box { background-color: #F4F1EA; padding: 30px; border-radius: 8px; }
.side-title { font-family: 'Playfair Display', serif; font-size: 24px; color: #555; margin-bottom: 20px; text-align: center; }
.form-row-2 { display: flex; gap: 20px; margin-bottom: 20px; }
.form-group { width: 100%; margin-bottom: 20px; }
input[type="text"], input[type="email"], input[type="tel"], input[type="date"], textarea { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 4px; font-family: 'Lato', sans-serif; font-size: 14px; background-color: #fcfcfc; }
input:focus, textarea:focus { border-color: #6a7c64; outline: none; background-color: #fff; }
textarea { height: 120px; resize: vertical; }
.checkbox-row { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 25px; }
.disclaimer { font-size: 11px; line-height: 1.5; color: #777; font-family: 'Lato', sans-serif; }
.btn-main-submit { background-color: #556350; color: white; padding: 15px 40px; border: none; border-radius: 4px; font-family: 'Playfair Display', serif; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: opacity 0.3s; }
.btn-main-submit:hover { opacity: 0.9; }
@media (max-width: 900px) { .top-split, .lower-split { flex-direction: column; gap: 40px; } .form-row-2 { flex-direction: column; gap: 15px; } }
`;

const html = `
<section class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">Alcohol Rehabilitation</h1>
        <div class="hero-divider"><img src="/photos/leaves-1.svg" alt="" style="height: 40px; width: auto;"></div>
        <p class="page-subtitle">Comprehensive Alcohol Treatment in Santa Clarita</p>
    </div>
</section>
<div class="main-container">
    <div class="lower-split">
        <div class="content-col">
            <h2 class="content-heading">Reclaim Your Power</h2>
            <p class="content-p">At one time, alcohol might have felt like a trusted companion, providing a sense of freedom and comfort. But over time, that relationship likely changed, leaving you feeling out of control. Alcohol rehab in Santa Clarita is your opportunity to reclaim that power. You'll learn how to set healthy boundaries and begin repairing relationships strained by alcohol abuse. With time, you'll discover a life filled with more joy and peace than alcohol use disorder ever allowed.</p>
            <p class="content-p">You are not defined by your addiction. You have the power to create a new, fulfilling life without alcohol, and you can start this transformation at any moment. Deciding to enter a luxury alcohol rehab in Santa Clarita like iVital Wellness is a decision that will bring long-lasting benefits, helping you prioritize your health and wellbeing over addiction.</p>
            <h2 class="content-heading" style="font-size: 28px; margin-top: 40px;">Evidence-Based Treatment Modalities</h2>
            <p class="content-p">At iVital Wellness, we offer a welcoming, therapeutic environment where you can begin your journey toward recovery. Our state-of-the-art facility provides our powerful Transformational Breakthrough Method employing individual and evidence-based treatment modalities, including one-on-one therapy, group therapy, life skills training, long-term goal planning, family wellness, and aftercare support, all designed to help individuals with moderate to severe alcohol use disorders heal and thrive.</p>
            <p class="content-p">Our comprehensive approach includes Cognitive Behavioral Therapy (CBT) to help you identify and change negative thought patterns, group therapy sessions that provide peer support and shared experiences, and family counseling to repair relationships and build a strong support network. Our approach is non-confrontational, focusing on motivation and support to encourage patients to make positive changes. At our alcohol rehabilitation center in Santa Clarita, we believe that recovery is possible, and you can move forward with strength and resilience.</p>
        </div>
        <div class="sidebar-col">
            <div class="sidebar-form-box">
                <h3 class="side-title">Get Help Now</h3>
                <form name="sidebar-contact">
                    <div class="form-row-2">
                        <input type="text" name="FirstName" placeholder="First Name*" required>
                        <input type="text" name="LastName" placeholder="Last Name*" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="Email" placeholder="Email*" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" name="Phone" placeholder="Mobile phone*" required>
                    </div>
                    <div class="checkbox-row">
                        <input type="checkbox" name="Consent" value="Yes" required>
                        <label class="disclaimer">By submitting my information I consent to receive marketing emails, SMS messages, and/or phone calls from iVital Wellness. Message & data rates may apply.</label>
                    </div>
                    <button type="submit" class="btn-main-submit" style="width: 100%; background-color: #727b6e;">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
`;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does alcohol rehab at iVital Wellness include?",
            acceptedAnswer: { "@type": "Answer", text: "Our alcohol rehab program in Santa Clarita uses the Transformational Breakthrough Method, combining individual therapy, group therapy, Cognitive Behavioral Therapy (CBT), life skills training, family counseling, and aftercare support. It is designed for moderate to severe alcohol use disorders." }
        },
        {
            "@type": "Question",
            name: "How long is the alcohol rehabilitation program at iVital Wellness?",
            acceptedAnswer: { "@type": "Answer", text: "iVital Wellness offers flexible 30, 60, and 90-day residential alcohol rehabilitation programs tailored to your individual recovery needs and goals." }
        },
        {
            "@type": "Question",
            name: "Is alcohol detox medically supervised at iVital Wellness?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Alcohol withdrawal can be dangerous, even life-threatening. Our medical team provides 24/7 supervision during alcohol detox, ensuring your safety and managing withdrawal symptoms throughout the process at our Santa Clarita facility." }
        },
        {
            "@type": "Question",
            name: "Does iVital Wellness accept insurance for alcohol rehab?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. iVital Wellness works with most major private insurance plans to make alcohol addiction treatment accessible. Our admissions team can verify your coverage and help you understand your benefits before admission." }
        },
        {
            "@type": "Question",
            name: "What makes iVital Wellness different from other alcohol rehab centers?",
            acceptedAnswer: { "@type": "Answer", text: "iVital Wellness is a luxury residential treatment facility in Santa Clarita, CA offering a non-confrontational, evidence-based approach in a private, serene setting. We treat both addiction and co-occurring mental health conditions with individualized care plans and holistic therapies." }
        },
    ],
};

export default function AlcoholRehabPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <HtmlPage html={html} css={css} />
        </>
    );
}
