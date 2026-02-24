import type { Metadata } from "next";
import HtmlPage from "../components/HtmlPage";

export const metadata: Metadata = {
  title: "Thank You | iVital Wellness",
  description: "Thank you for contacting iVital Wellness. Our admissions team will reach out to you shortly.",
  robots: { index: false, follow: false },
};

const thankYouCSS = `
.thank-you-container { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; background: radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); }
.icon-box { font-size: 60px; color: #6a7c64; margin-bottom: 30px; animation: popIn 0.6s ease-out; }
.ty-title { font-size: 48px; color: #2c3e29; margin-bottom: 20px; }
.ty-text { font-family: 'Lato', sans-serif; font-size: 18px; line-height: 1.6; max-width: 600px; margin-bottom: 40px; color: #666; }
.home-btn { background-color: #556350; color: white; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-family: 'Lato', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(85, 99, 80, 0.2); display: inline-block; }
.home-btn:hover { background-color: #6a7c64; transform: translateY(-3px); box-shadow: 0 15px 30px rgba(106, 124, 100, 0.3); }
@keyframes popIn { 0% { transform: scale(0); opacity: 0; } 80% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
`;

const thankYouHTML = `
<div class="thank-you-container">
    <div class="icon-box"><i class="fas fa-check-circle"></i></div>
    <h1 class="ty-title">Message Received</h1>
    <p class="ty-text">Thank you for reaching out to iVital Wellness. Your submission has been securely received. A member of our admissions team will contact you shortly to discuss your needs confidentially.</p>
    <a href="/" class="home-btn">Return Home</a>
</div>
`;

export default function ThankYouPage() {
  return <HtmlPage html={thankYouHTML} css={thankYouCSS} />;
}
