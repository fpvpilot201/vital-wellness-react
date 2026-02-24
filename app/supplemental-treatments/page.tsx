import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistic Treatments | Yoga, Meditation & More",
  description:
    "Holistic addiction therapies at iVital Wellness: yoga, meditation, art therapy, equine therapy, and nutrition counseling in Santa Clarita.",
  alternates: { canonical: "/supplemental-treatments" },
  openGraph: {
    title: "Holistic Treatments | Yoga, Meditation & More",
    description: "Holistic addiction therapies at iVital Wellness: yoga, meditation, art therapy, equine therapy, and nutrition counseling in Santa Clarita.",
    url: "/supplemental-treatments",
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
        <h1 class="page-title">Supplemental Treatments</h1>
        <div class="hero-divider"><img src="/photos/leaves-1.svg" alt="Divider" style="height: 40px; width: auto;"></div>
        <p class="page-subtitle">Holistic Therapies for Complete Recovery</p>
    </div>
</section>
<div class="main-container">
    <div class="lower-split">
        <div class="content-col">
            <h2 class="content-heading">Nurturing the Whole Person</h2>
            <p class="content-p">At iVital Wellness, we recognize that recovery is not just about addressing addiction but also about nurturing the whole person. To support this holistic approach, we offer a variety of supplemental treatments designed to enhance your physical, mental, and spiritual well-being. These therapies complement our primary treatment methods, helping to promote relaxation, reduce stress, and provide additional avenues for healing and personal growth.</p>
            <p class="content-p">Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation. It helps improve flexibility, strength, and balance while promoting mental clarity and emotional stability. Yoga is an effective way to reduce stress, enhance self-awareness, and cultivate a sense of inner peace, all of which are essential components of a successful recovery journey. Our yoga sessions are designed for all levels, providing a safe space to reconnect with your body and mind.</p>
            <h2 class="content-heading" style="font-size: 28px; margin-top: 40px;">Creative & Expressive Therapies</h2>
            <p class="content-p">Art therapy uses creative expression as a therapeutic tool. Through drawing, painting, sculpture, and other artistic activities, individuals can explore their emotions, express their thoughts, and work through trauma. Art therapy is particularly beneficial for those who may find it difficult to articulate their feelings verbally, offering a safe and supportive outlet for emotional release and self-discovery. Our art therapy sessions provide a non-judgmental space where you can explore your inner world and gain insights into your recovery journey.</p>
            <p class="content-p">Equine therapy, or horse-assisted therapy, offers unique opportunities for emotional growth and healing. Working with horses helps individuals develop trust, responsibility, and emotional awareness. The non-verbal communication required when interacting with these gentle animals can reveal patterns in relationships and help build confidence. Nutrition counseling is another vital component of our supplemental treatments, as proper nutrition plays a crucial role in physical recovery and mental health. Our nutritionists work with you to develop meal plans that support your body's healing process and promote overall wellness.</p>
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

export default function SupplementalTreatmentsPage() {
  return <HtmlPage html={html} css={css} />;
}
