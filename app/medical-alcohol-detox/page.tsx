import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Alcohol Detox | iVital Wellness",
  description:
    "Safe medical alcohol detox at iVital Wellness in Santa Clarita, CA. Medically supervised withdrawal at our luxury treatment center.",
  alternates: { canonical: "/medical-alcohol-detox" },
  openGraph: {
    title: "Medical Alcohol Detox | iVital Wellness",
    description: "Safe medical alcohol detox at iVital Wellness in Santa Clarita, CA. Medically supervised withdrawal at our luxury treatment center.",
    url: "/medical-alcohol-detox",
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
        <h1 class="page-title">Medical Alcohol Detox</h1>
        <div class="hero-divider"><img src="/photos/leaves-1.svg" alt="Divider" style="height: 40px; width: auto;"></div>
        <p class="page-subtitle">Safe Medical Alcohol Detoxification in Santa Clarita</p>
    </div>
</section>
<div class="main-container">
    <div class="lower-split">
        <div class="content-col">
            <h2 class="content-heading">High-End Treatment for Lasting Recovery</h2>
            <p class="content-p">In our luxury alcohol treatment setting, we offer superior care to help ensure the best possible outcomes for your recovery process. Our residential program provides access to expert therapists and support staff who will equip you with the tools and techniques necessary for a long-term life free from alcohol abuse. When you leave our facility, you'll be prepared to maintain sobriety and embrace a healthier, more fulfilling lifestyle.</p>
            <p class="content-p">For many, the fear of alcohol withdrawal symptoms is a significant barrier to seeking help. At iVital Wellness, we manage these symptoms with medication and expert medical care, making the detox process as smooth and comfortable as possible. Our whole team, our top priority, and our goal is dedicated to support you through this challenging first step. Once you've made it through detox, you'll find that life becomes more enjoyable and meaningful.</p>
            <h2 class="content-heading" style="font-size: 28px; margin-top: 40px;">Why Alcohol Detox Is Essential</h2>
            <p class="content-p">Detoxification is the foundation of recovery from alcoholism. During this phase, alcohol is flushed from your system, allowing your body to begin healing. While withdrawal symptoms typically subside within 1-2 weeks, the duration may vary depending on the severity of your alcohol use disorder (AUD). Detoxing under medical supervision helps ensure that you build a strong foundation for the rest of your recovery journey.</p>
            <p class="content-p">Over time, regular alcohol use causes your body to become dependent on the substance. When you stop drinking, your body needs time to adjust, which can trigger withdrawal symptoms like headaches, nausea, anxiety, tremors, and in severe cases, seizures or delirium tremens. Our medical team at iVital Wellness provides 24/7 monitoring and medication-assisted treatment to manage these symptoms safely, ensuring your comfort and safety throughout the detox process.</p>
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

export default function MedicalAlcoholDetoxPage() {
  return <HtmlPage html={html} css={css} />;
}
