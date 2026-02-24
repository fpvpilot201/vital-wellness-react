import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction Treatment Services | iVital Wellness",
  description:
    "Medical detox, residential treatment, and dual diagnosis care at iVital Wellness in Santa Clarita, CA. Call (866) 764-5152.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Addiction Treatment Services | iVital Wellness",
    description: "Medical detox, residential treatment, and dual diagnosis care at iVital Wellness in Santa Clarita, CA. Call (866) 764-5152.",
    url: "/services",
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
.services-hero { position: relative; height: 60vh; min-height: 400px; display: flex; align-items: center; justify-content: center; text-align: center; color: white; overflow: hidden; background: linear-gradient(135deg, #6a7c64 0%, #2c3e29 100%); }
.services-hero .hero-content { position: relative; z-index: 2; }
.services-hero .hero-title { font-size: 52px; font-weight: 400; margin-bottom: 15px; color: white; font-family: 'Playfair Display', serif; }
.services-hero .hero-subtitle { font-family: 'Lato', sans-serif; font-size: 20px; color: rgba(255,255,255,0.8); }
.section-container { padding: 80px 0; }
.section-container .container-limit { display: block; width: 88%; max-width: 1400px; margin: 0 auto; }
.services-section-title { font-family: 'Playfair Display', serif; font-size: 36px; color: #333; margin-bottom: 20px; }
.divider-leaf { color: #6a7c64; font-size: 24px; margin-bottom: 20px; }
.section-desc { font-family: 'Lato', sans-serif; font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 50px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px; }
.service-card { display: flex; flex-direction: column; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; text-decoration: none; color: inherit; }
.service-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
.service-card-img { height: 220px; overflow: hidden; }
.service-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.service-card:hover .service-card-img img { transform: scale(1.05); }
.service-card-body { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }
.service-card-title { font-family: 'Playfair Display', serif; font-size: 22px; color: #2c3e29; margin-bottom: 12px; }
.service-card-desc { font-family: 'Lato', sans-serif; font-size: 14px; color: #666; line-height: 1.7; margin-bottom: 15px; flex-grow: 1; }
.learn-more { font-family: 'Lato', sans-serif; font-size: 13px; color: #6a7c64; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
@media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } .services-hero .hero-title { font-size: 36px; } }
`;

const html = `
<header class="services-hero">
    <div class="hero-content">
        <h1 class="hero-title">Our Treatment Services</h1>
        <p class="hero-subtitle">Comprehensive care tailored to your unique journey.</p>
    </div>
</header>
<section class="section-container" style="padding: 80px 0;">
    <div class="container-limit">
        <div style="text-align: center; max-width: 800px; margin: 0 auto;">
            <h2 class="services-section-title">Evidence-Based Addiction Treatment</h2>
            <div class="divider-leaf"><i class="fas fa-leaf"></i></div>
            <p class="section-desc">At iVital Wellness, we provide a full continuum of care. From medically supervised detox to residential treatment and aftercare planning, our programs are designed to heal the mind, body, and spirit.</p>
        </div>
        <div class="services-grid">
            <a href="/drug-detox" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Drug Detox"></div>
                <div class="service-card-body"><h3 class="service-card-title">Drug Detox</h3><p class="service-card-desc">Safety and comfort are our priorities. Medically supervised withdrawal management to help you clear toxins and begin recovery.</p><span class="learn-more">Learn More →</span></div>
            </a>
            <a href="/alcohol-rehab" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Alcohol Rehab"></div>
                <div class="service-card-body"><h3 class="service-card-title">Alcohol Rehab</h3><p class="service-card-desc">Overcome alcohol dependency with our specialized rehabilitation programs, featuring individual counseling and group therapy.</p><span class="learn-more">Learn More →</span></div>
            </a>
            <a href="/treatment-methods" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Treatment Methods"></div>
                <div class="service-card-body"><h3 class="service-card-title">Treatment Methods</h3><p class="service-card-desc">We utilize a blend of traditional and holistic therapies including CBT, DBT, and mindfulness to treat the whole person.</p><span class="learn-more">Learn More →</span></div>
            </a>
            <a href="/insurance-verification" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Insurance"></div>
                <div class="service-card-body"><h3 class="service-card-title">Admissions & Insurance</h3><p class="service-card-desc">We simplify the process. Verify your insurance coverage online and speak with our compassionate admissions team.</p><span class="learn-more">Get Started →</span></div>
            </a>
            <a href="/facility" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Facility"></div>
                <div class="service-card-body"><h3 class="service-card-title">Luxury Facility</h3><p class="service-card-desc">Recover in peace. Explore our state-of-the-art amenities and comfortable accommodations in Santa Clarita.</p><span class="learn-more">View Gallery →</span></div>
            </a>
            <a href="/contact" class="service-card">
                <div class="service-card-img"><img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Contact"></div>
                <div class="service-card-body"><h3 class="service-card-title">Contact Us</h3><p class="service-card-desc">You are not alone. Reach out to us 24/7 for confidential support and guidance on your next steps.</p><span class="learn-more">Contact Now →</span></div>
            </a>
        </div>
    </div>
</section>
`;

export default function ServicesPage() {
  return <HtmlPage html={html} css={css} />;
}
