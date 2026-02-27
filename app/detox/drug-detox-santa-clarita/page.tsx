import HtmlPage from "../../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical Drug Detox in Santa Clarita - iVital Wellness",
    description: "Find reliable medical drug detox services in Santa Clarita. Get professional detox treatment nearby for a safe and effective recovery. Start your journey today.",
    alternates: { canonical: "/detox/drug-detox-santa-clarita" },
    openGraph: {
        title: "Medical Drug Detox in Santa Clarita - iVital Wellness",
        description: "Find reliable medical drug detox services in Santa Clarita. Get professional detox treatment nearby for a safe and effective recovery. Start your journey today.",
        url: "/detox/drug-detox-santa-clarita",
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
        <h1 class="page-title">Drug Detox</h1>
        <div class="hero-divider"><img src="/photos/leaves-1.svg" alt="" style="height: 40px; width: auto;"></div>
        <p class="page-subtitle">Safe & Comfortable Medical Detoxification</p>
    </div>
</section>
<div class="main-container">
    <div class="lower-split">
        <div class="content-col">
            <h2 class="content-heading">Understanding Medical Drug Detox</h2>
            <p class="content-p">The journey to recovery begins with a fundamental understanding of drug detox. Detoxification, or "detox," is the process of eliminating harmful substances from the body. In the context of addiction, detox involves clearing the body of addictive substances, which can include both legal and illegal drugs, as well as prescription and over-the-counter medications.</p>
            <p class="content-p">Drug detox is a carefully regulated process carried out by health professionals in a therapeutic setting, where patients receive medical supervision to ensure their safety. While the body naturally detoxifies itself over time, medical drug detox provides the necessary support to manage withdrawal symptoms and ensure a safe and effective recovery process. At iVital Wellness, our expert medical team utilizes medications and holistic therapies to minimize discomfort and manage pain effectively throughout your detox journey.</p>
            <h2 class="content-heading" style="font-size: 28px; margin-top: 40px;">24/7 Medical Monitoring & IV Therapy</h2>
            <p class="content-p">During detox, your body's systems—liver, kidneys, and circulatory system—work to remove toxins that have accumulated, releasing them from the body. This process often triggers detox symptoms, commonly known as withdrawal symptoms, which can range from mild discomfort to severe, life-threatening conditions like seizures or coma. Our medical team provides round-the-clock monitoring, ensuring that vital signs including heart rate, blood pressure, and temperature are closely tracked to prevent complications.</p>
            <p class="content-p">At iVital Wellness, we offer comprehensive IV therapy support to help maintain hydration, restore essential nutrients, and manage withdrawal symptoms more comfortably. Our luxury facility in Santa Clarita provides a serene, supportive environment where you can focus entirely on your recovery, knowing that expert medical care is always available when you need it most.</p>
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
            name: "What is medical drug detox?",
            acceptedAnswer: { "@type": "Answer", text: "Medical drug detox is the process of safely eliminating addictive substances from the body under 24/7 medical supervision. At iVital Wellness in Santa Clarita, our expert team uses medications and holistic therapies to manage withdrawal symptoms and ensure a safe, effective recovery." }
        },
        {
            "@type": "Question",
            name: "Is drug detox safe at iVital Wellness in Santa Clarita?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. iVital Wellness provides round-the-clock medical monitoring during detox, tracking vital signs including heart rate, blood pressure, and temperature to prevent complications. Our licensed medical team is on-site 24/7." }
        },
        {
            "@type": "Question",
            name: "How long does drug detox take?",
            acceptedAnswer: { "@type": "Answer", text: "The duration varies depending on the substance, length of use, and individual health factors. At iVital Wellness, detox programs are customized to each patient's needs, typically ranging from a few days to two weeks before transitioning into residential treatment." }
        },
        {
            "@type": "Question",
            name: "Does iVital Wellness offer IV therapy during detox?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. iVital Wellness offers comprehensive IV therapy support to maintain hydration, restore essential nutrients, and manage withdrawal symptoms more comfortably throughout your detox program in Santa Clarita." }
        },
        {
            "@type": "Question",
            name: "What happens after drug detox at iVital Wellness?",
            acceptedAnswer: { "@type": "Answer", text: "After completing detox, clients transition into our residential inpatient treatment program, which includes individual therapy, group counseling, evidence-based treatments such as CBT and DBT, and personalized aftercare planning to support long-term recovery." }
        },
    ],
};

export default function DrugDetoxPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <HtmlPage html={html} css={css} />
        </>
    );
}
