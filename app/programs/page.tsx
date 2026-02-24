import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30, 60 & 90-Day Treatment Programs | iVital",
  description:
    "Personalized 30, 60, and 90-day addiction treatment programs at iVital Wellness in Santa Clarita. Detox, residential, dual diagnosis.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "30, 60 & 90-Day Treatment Programs | iVital",
    description: "Personalized 30, 60, and 90-day addiction treatment programs at iVital Wellness in Santa Clarita. Detox, residential, dual diagnosis.",
    url: "/programs",
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
.programs-container { width: 88%; max-width: 1200px; margin: 60px auto; }
.program-card { background: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 40px; margin-bottom: 40px; border-left: 4px solid #6a7c64; }
.program-title { font-family: 'Playfair Display', serif; font-size: 28px; color: #2c3e29; margin-bottom: 15px; }
.program-text { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 15px; }
.program-features { list-style: none; padding: 0; }
.program-features li { font-family: 'Lato', sans-serif; font-size: 15px; color: #555; padding: 8px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 10px; }
.program-features li:last-child { border-bottom: none; }
.program-features i { color: #6a7c64; }
`;

const html = `
<header class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">Treatment Programs</h1>
        <div class="hero-divider"><i class="fas fa-leaf"></i></div>
        <p class="page-subtitle">Comprehensive Programs Tailored to Your Recovery Journey</p>
    </div>
</header>
<div class="programs-container">
    <div class="program-card">
        <h2 class="program-title">30-Day Treatment Program</h2>
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
    
    <div class="program-card">
        <h2 class="program-title">60-Day Treatment Program</h2>
        <p class="program-text">Our 60-day residential treatment program offers extended care for individuals who need more time to address the underlying causes of their addiction and develop strong recovery skills. This program is recommended for those with moderate to severe addictions or co-occurring mental health conditions.</p>
        <p class="program-text">The extended duration allows for deeper therapeutic work, more comprehensive treatment of co-occurring disorders, and stronger development of relapse prevention strategies. Clients have more time to practice new skills, build healthy relationships, and establish routines that support long-term recovery.</p>
        <ul class="program-features">
            <li><i class="fas fa-check"></i> All features of 30-day program</li>
            <li><i class="fas fa-check"></i> Extended individual therapy (5-7 sessions per week)</li>
            <li><i class="fas fa-check"></i> Intensive dual diagnosis treatment</li>
            <li><i class="fas fa-check"></i> Advanced relapse prevention planning</li>
            <li><i class="fas fa-check"></i> Holistic therapies and wellness activities</li>
            <li><i class="fas fa-check"></i> Extended family involvement and support</li>
            <li><i class="fas fa-check"></i> Comprehensive aftercare coordination</li>
        </ul>
    </div>
    
    <div class="program-card">
        <h2 class="program-title">90-Day Treatment Program</h2>
        <p class="program-text">Our 90-day residential treatment program provides the most comprehensive care for individuals with severe addictions, multiple relapses, or complex co-occurring disorders. This extended program allows for thorough treatment of all aspects of addiction and mental health, providing the strongest foundation for long-term recovery.</p>
        <p class="program-text">The 90-day program includes intensive therapy, comprehensive dual diagnosis treatment, extensive skill-building, and deep work on trauma and underlying issues. Clients have ample time to practice new behaviors, build strong support networks, and develop confidence in their ability to maintain sobriety.</p>
        <ul class="program-features">
            <li><i class="fas fa-check"></i> All features of 60-day program</li>
            <li><i class="fas fa-check"></i> Maximum individual therapy sessions</li>
            <li><i class="fas fa-check"></i> Intensive trauma therapy and EMDR</li>
            <li><i class="fas fa-check"></i> Advanced life skills training</li>
            <li><i class="fas fa-check"></i> Extended family therapy and education</li>
            <li><i class="fas fa-check"></i> Vocational and educational support</li>
            <li><i class="fas fa-check"></i> Comprehensive relapse prevention program</li>
            <li><i class="fas fa-check"></i> Long-term aftercare planning and support</li>
        </ul>
    </div>
    
    <div class="program-card">
        <h2 class="program-title">Detox Program</h2>
        <p class="program-text">Our medically supervised detoxification program provides safe, comfortable withdrawal management for individuals beginning their recovery journey. Detox is the first step in treatment, designed to help clients safely clear substances from their bodies under 24/7 medical supervision.</p>
        <p class="program-text">Our medical team monitors clients closely throughout the detox process, managing withdrawal symptoms and providing medications when appropriate to ensure safety and comfort. Detox typically lasts 5-10 days, depending on the substance and individual needs, and is followed by transition to residential treatment.</p>
        <ul class="program-features">
            <li><i class="fas fa-check"></i> 24/7 medical supervision and monitoring</li>
            <li><i class="fas fa-check"></i> Medication-assisted treatment when appropriate</li>
            <li><i class="fas fa-check"></i> Comfortable, safe withdrawal management</li>
            <li><i class="fas fa-check"></i> Individual support and counseling</li>
            <li><i class="fas fa-check"></i> Nutritional support and hydration</li>
            <li><i class="fas fa-check"></i> Seamless transition to residential treatment</li>
        </ul>
    </div>
    
    <div class="program-card">
        <h2 class="program-title">Dual Diagnosis Program</h2>
        <p class="program-text">Our dual diagnosis program provides integrated treatment for individuals struggling with both substance use disorders and co-occurring mental health conditions. We recognize that untreated mental health conditions can contribute to addiction, and that substance use can worsen mental health symptoms, so we address both conditions simultaneously.</p>
        <p class="program-text">Our team of addiction specialists and mental health professionals work together to provide comprehensive care that addresses all aspects of a client's well-being. Treatment includes psychiatric evaluation, medication management when appropriate, individual therapy, group therapy, and specialized interventions for both addiction and mental health.</p>
        <ul class="program-features">
            <li><i class="fas fa-check"></i> Comprehensive psychiatric evaluation</li>
            <li><i class="fas fa-check"></i> Medication management and monitoring</li>
            <li><i class="fas fa-check"></i> Integrated individual therapy</li>
            <li><i class="fas fa-check"></i> Specialized group therapy for dual diagnosis</li>
            <li><i class="fas fa-check"></i> Treatment for depression, anxiety, PTSD, bipolar, and more</li>
            <li><i class="fas fa-check"></i> Trauma-informed care and EMDR therapy</li>
            <li><i class="fas fa-check"></i> Holistic approaches to mental wellness</li>
            <li><i class="fas fa-check"></i> Long-term mental health support planning</li>
        </ul>
    </div>
</div>
`;

export default function ProgramsPage() {
  return <HtmlPage html={html} css={css} />;
}
