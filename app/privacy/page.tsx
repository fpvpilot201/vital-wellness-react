import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for iVital Wellness addiction treatment center in Santa Clarita, CA. Learn how we protect your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const css = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }
.privacy-container { width: 88%; max-width: 900px; margin: 60px auto 100px; }
.privacy-container h2 { font-family: 'Playfair Display', serif; font-size: 28px; color: #2c3e29; margin: 40px 0 15px; }
.privacy-container h3 { font-family: 'Playfair Display', serif; font-size: 22px; color: #2c3e29; margin: 30px 0 12px; }
.privacy-container p { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 15px; }
.privacy-container ul { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; padding-left: 20px; margin-bottom: 20px; }
.privacy-container li { margin-bottom: 8px; }
`;

const html = `
<section class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">Privacy Policy</h1>
        <div class="hero-divider"><img src="/photos/leaves-1.svg" alt="Divider" style="height: 40px; width: auto;"></div>
        <p class="page-subtitle">Your Privacy Matters to Us</p>
    </div>
</section>
<div class="privacy-container">
    <h2>Introduction</h2>
    <p>iVital Wellness ("we," "us," or "our") respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

    <h2>Information We Collect</h2>
    <h3>Personal Data</h3>
    <p>We may collect personally identifiable information, such as your name, shipping address, email address, telephone number, and demographic information that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat and message boards.</p>

    <h3>Derivative Data</h3>
    <p>Our servers automatically collect information when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have directly viewed.</p>

    <h2>Use of Your Information</h2>
    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use the information collected about you to:</p>
    <ul>
        <li>Create and manage your account</li>
        <li>Email you regarding your account or intake process</li>
        <li>Fulfill and manage admissions inquiries</li>
        <li>Generate a personal profile about you to make future visits to the site more personalized</li>
        <li>Increase the efficiency and operation of the site</li>
        <li>Monitor and analyze usage and trends to improve your experience</li>
        <li>Notify you of updates to the site</li>
        <li>Respond to inquiries and offer support</li>
        <li>Request feedback and contact you about your use of the site</li>
        <li>Resolve disputes and troubleshoot problems</li>
    </ul>

    <h2>Disclosure of Your Information</h2>
    <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

    <h3>By Law or to Protect Rights</h3>
    <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by applicable law.</p>

    <h3>Third-Party Service Providers</h3>
    <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>

    <h2>Security of Your Information</h2>
    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no method of transmission over the Internet is 100% secure.</p>

    <h2>HIPAA Compliance</h2>
    <p>iVital Wellness is committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). All patient health information is protected in accordance with federal law. We maintain strict confidentiality of all medical records and treatment information.</p>

    <h2>Contact Us</h2>
    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
    <p><strong>iVital Wellness</strong><br>15668 Live Oak Springs Canyon Rd.<br>Santa Clarita, CA 91387<br>Phone: 1 (866) 764-5152<br>Email: info@ivitalwellness.com</p>
</div>
`;

export default function PrivacyPage() {
  return <HtmlPage html={html} css={css} />;
}
