import HtmlPage from "../../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "30-Day Residential Treatment Program in Santa Clarita | iVital Wellness",
    description: "Connect with iVital Wellness for our 30-day residential treatment program in Santa Clarita, CA. Intensive care, detox, and therapy for lasting recovery.",
    alternates: { canonical: "/residential-treatment/30-day-program" },
    openGraph: {
        title: "30-Day Residential Treatment Program in Santa Clarita | iVital Wellness",
        description: "Connect with iVital Wellness for our 30-day residential treatment program in Santa Clarita, CA. Intensive care, detox, and therapy for lasting recovery.",
        url: "/residential-treatment/30-day-program",
        images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "30-Day Addiction Treatment Center" }],
    },
};

const css = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }
.programs-container { width: 88%; max-width: 1200px; margin: 60px auto; }
.program-card { background: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 40px; margin-bottom: 40px; border-left: 4px solid #6a7c64; }
.program-title { font-family: 'Playfair Display', serif; font-size: 28px; color: #2c3e29; margin-bottom: 15px; }
.program-text { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 15px; }
.program-features { list-style: none; padding: 0; }
.program-features li { font-family: 'Lato', sans-serif; font-size: 15px; color: #555; padding: 8px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 10px; }
.program-features li:last-child { border-bottom: none; }
.program-features i { color: #6a7c64; }
.back-btn-container { text-align: center; margin-top: 40px; }
.back-btn { display: inline-block; background-color: #6a7c64; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-family: 'Lato', sans-serif; font-weight: 600; transition: background-color 0.3s ease; }
.back-btn:hover { background-color: #556350; }
`;

const html = `
<header class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">30-Day Treatment Program</h1>
        <div class="hero-divider"><i class="fas fa-leaf"></i></div>
        <p class="page-subtitle">Intensive Care for Focused Recovery</p>
    </div>
</header>
<div class="programs-container">
    <div class="program-card">
        <h2 class="program-title">30-Day Residential Treatment Program</h2>
        <p class="program-text">Our 30-day residential treatment program provides intensive care for individuals who need focused support to begin their recovery journey. This program is ideal for those with less severe addictions or who have completed detox elsewhere and are ready for structured treatment.</p>
        <p class="program-text">During the 30-day program, clients participate in daily individual and group therapy sessions, attend educational workshops, and begin developing relapse prevention skills. The program includes comprehensive assessment, personalized treatment planning, and discharge planning to ensure continuity of care.</p>
        <ul class="program-features">
            <li><i class="fas fa-check"></i> Medically supervised detoxification (if needed)</li>
            <li><i class="fas fa-check"></i> Individual therapy sessions (3-5 per week)</li>
            <li><i class="fas fa-check"></i> Group therapy and peer support</li>
            <li><i class="fas fa-check"></i> Family therapy sessions</li>
            <li><i class="fas fa-check"></i> Educational workshops and skill-building</li>
            <li><i class="fas fa-check"></i> Aftercare planning and discharge support</li>
        </ul>
    </div>
    
    <div class="back-btn-container">
        <a href="/treatments" class="back-btn">View All Programs</a>
    </div>
</div>
`;

export default function ThirtyDayProgram() {
    return <HtmlPage html={html} css={css} />;
}
