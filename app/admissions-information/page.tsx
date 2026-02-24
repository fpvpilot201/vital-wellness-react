import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | How to Start Treatment",
  description:
    "Easy admissions at iVital Wellness. Consultation, insurance verification, assessment, and arrival. Available 24/7. Call (866) 764-5152.",
  alternates: { canonical: "/admissions-information" },
  openGraph: {
    title: "Admissions | How to Start Treatment",
    description: "Easy admissions at iVital Wellness. Consultation, insurance verification, assessment, and arrival. Available 24/7. Call (866) 764-5152.",
    url: "/admissions-information",
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
.lower-split { display: flex; gap: 60px; align-items: flex-start; }
.content-col { flex: 2.2; }
.sidebar-col { flex: 1; }
.content-heading { font-family: 'Playfair Display', serif; font-size: 32px; color: #2c3e29; margin-bottom: 20px; line-height: 1.3; }
.content-p { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 20px; }
.steps-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 40px 0; }
.step-card { background-color: #1a4031; color: white; padding: 25px; border-radius: 4px; }
.step-number { font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 10px; display: block; }
.step-text { font-family: 'Lato', sans-serif; font-size: 13px; line-height: 1.6; opacity: 0.9; }
.sidebar-form-box { background-color: #F4F1EA; padding: 30px; border-radius: 8px; }
.side-title { font-family: 'Playfair Display', serif; font-size: 24px; color: #555; margin-bottom: 20px; text-align: center; }
.form-row-2 { display: flex; gap: 20px; margin-bottom: 20px; }
.form-group { width: 100%; margin-bottom: 20px; }
input[type="text"], input[type="email"], input[type="tel"] { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 4px; font-family: 'Lato', sans-serif; font-size: 14px; background-color: #fcfcfc; }
input:focus { border-color: #6a7c64; outline: none; background-color: #fff; }
.checkbox-row { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 25px; }
.disclaimer { font-size: 11px; line-height: 1.5; color: #777; font-family: 'Lato', sans-serif; }
.btn-main-submit { background-color: #556350; color: white; padding: 15px 40px; border: none; border-radius: 4px; font-family: 'Playfair Display', serif; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; width: 100%; }
@media (max-width: 900px) { .lower-split { flex-direction: column; gap: 40px; } .steps-row { grid-template-columns: 1fr; } .form-row-2 { flex-direction: column; gap: 15px; } }
`;

const html = `
<header class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">Admissions Information</h1>
        <div class="hero-divider"><i class="fas fa-leaf"></i></div>
        <p class="page-subtitle">Your Journey to Recovery Starts Here</p>
    </div>
</header>
<div class="main-container">
    <div class="lower-split">
        <div class="content-col">
            <h2 class="content-heading">Our Admissions Process</h2>
            <p class="content-p">At iVital Wellness, we understand that taking the first step toward recovery can feel overwhelming. That's why we've designed our admissions process to be as smooth and stress-free as possible. Our compassionate admissions team is available 24/7 to guide you through every step of the process.</p>
            <p class="content-p">We believe that everyone deserves access to quality addiction treatment, and we work with most major insurance plans to make treatment as accessible as possible. Our team will help you verify your insurance coverage and understand your benefits, so you can focus on what matters most—your recovery.</p>
            
            <div class="steps-row">
                <div class="step-card">
                    <span class="step-number">Step 1</span>
                    <p class="step-text">Initial Consultation - Speak with our admissions counselor to discuss your situation, treatment needs, and answer any questions you may have.</p>
                </div>
                <div class="step-card">
                    <span class="step-number">Step 2</span>
                    <p class="step-text">Assessment & Insurance Verification - Complete a comprehensive assessment and verify your insurance coverage to determine treatment options.</p>
                </div>
                <div class="step-card">
                    <span class="step-number">Step 3</span>
                    <p class="step-text">Arrival & Intake - Arrive at our facility for intake, where you'll meet your treatment team and begin your recovery journey.</p>
                </div>
            </div>
            
            <h2 class="content-heading" style="margin-top: 50px;">What to Expect</h2>
            <p class="content-p">When you arrive at iVital Wellness, our team will conduct a comprehensive intake assessment to understand your unique needs and develop a personalized treatment plan. You'll meet with medical staff, therapists, and other members of your treatment team who will support you throughout your recovery journey.</p>
            <p class="content-p">We'll help you get settled into your accommodations, familiarize you with our facility and program schedule, and ensure you have everything you need to feel comfortable and supported. Our goal is to make your transition into treatment as smooth as possible, so you can focus on healing.</p>
            
            <h2 class="content-heading" style="margin-top: 50px;">Preparing for Treatment</h2>
            <p class="content-p">Before arriving at our facility, we recommend packing comfortable clothing for your stay, personal hygiene items, and any necessary medications (which will be reviewed by our medical team). We'll provide you with a detailed packing list and guidelines to help you prepare.</p>
            <p class="content-p">If you have any questions about what to bring, what to expect, or how to prepare for treatment, our admissions team is here to help. Don't hesitate to reach out—we're available 24/7 to support you every step of the way.</p>
        </div>
        
        <div class="sidebar-col">
            <div class="sidebar-form-box">
                <h3 class="side-title">Get Started Today</h3>
                <form name="admissions-form">
                    <div class="form-row-2">
                        <div class="form-group">
                            <input type="text" name="FirstName" placeholder="First Name" required />
                        </div>
                        <div class="form-group">
                            <input type="text" name="LastName" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" name="Email" placeholder="Email Address" required />
                    </div>
                    <div class="form-group">
                        <input type="tel" name="Phone" placeholder="Phone Number" required />
                    </div>
                    <div class="form-group">
                        <textarea name="Message" placeholder="Tell us about your situation..." style="width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 4px; font-family: 'Lato', sans-serif; font-size: 14px; min-height: 100px; resize: vertical; background-color: #fcfcfc;"></textarea>
                    </div>
                    <div class="checkbox-row">
                        <input type="checkbox" name="consent" id="admissions-consent" required />
                        <label for="admissions-consent" class="disclaimer">I consent to being contacted by iVital Wellness regarding treatment options. I understand that my information is confidential and will be used solely for the purpose of providing me with information about treatment services.</label>
                    </div>
                    <button type="submit" class="btn-main-submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
`;

export default function AdmissionsInformationPage() {
  return <HtmlPage html={html} css={css} />;
}
