import HtmlPage from "../components/HtmlPage";
import AboutSlideshow from "./AboutSlideshow";

const aboutCSS = `
.about-hero { position: relative; height: 60vh; min-height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; color: white; overflow: hidden; }
.hero-slideshow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
.hero-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1); transition: opacity 1.5s ease-in-out; }
.hero-slide.active { opacity: 1; animation: kenBurns 7s ease-out forwards; }
@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.15); } }
.about-hero .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); z-index: 1; }
.about-hero .hero-content { position: relative; z-index: 2; max-width: 800px; padding: 20px; }
.about-hero .hero-title { font-size: 56px; font-weight: 400; margin-bottom: 20px; text-shadow: 0 2px 5px rgba(0,0,0,0.3); }
.about-hero .hero-subtitle { font-family: 'Lato', sans-serif; font-size: 22px; letter-spacing: 1px; font-weight: 300; }
.about-container { width: 88%; max-width: 1300px; margin: 100px auto; }
.about-row { display: flex; align-items: center; gap: 80px; margin-bottom: 120px; }
.row-reverse { flex-direction: row-reverse; }
.col-text { flex: 1; position: relative; }
.col-image { flex: 1; }
.section-title { font-size: 38px; color: #2c3e29; margin-bottom: 30px; line-height: 1.2; font-weight: 400; }
.section-body { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #666; margin-bottom: 20px; }
.leaf-image-container { display: flex; justify-content: center; align-items: center; }
.leaf-image { max-width: 80%; height: auto; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); }
.rounded-image-box { height: 500px; width: 100%; border-radius: 30px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.1); position: relative; }
.rounded-image-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
.watermark-right { position: relative; }
.watermark-right::before { content: ''; position: absolute; top: 50%; right: -20%; transform: translateY(-50%); width: 600px; height: 600px; background-image: url('/photos/logo.png'); background-size: contain; background-repeat: no-repeat; opacity: 0.05; z-index: -1; pointer-events: none; }
.watermark-left { position: relative; }
.watermark-left::before { content: ''; position: absolute; top: 50%; left: -20%; transform: translateY(-50%); width: 600px; height: 600px; background-image: url('/photos/logo.png'); background-size: contain; background-repeat: no-repeat; opacity: 0.05; z-index: -1; pointer-events: none; }
@media (max-width: 900px) { .about-hero { height: 50vh; } .about-hero .hero-title { font-size: 42px; } .about-row { flex-direction: column; gap: 40px; margin-bottom: 80px; } .rounded-image-box { height: 350px; } .leaf-image { max-width: 60%; } }
`;

const aboutHTML = `
<section class="about-hero">
    <div class="hero-slideshow">
        <img src="/photos/iVital-Wellness-Out1.jpg" class="hero-slide active" alt="iVital Wellness addiction treatment facility exterior in Santa Clarita, CA">
        <img src="/photos/iVital-Wellness-Patio3.jpg" class="hero-slide" alt="Luxury patio at iVital Wellness drug and alcohol rehab center in Santa Clarita">
        <img src="/photos/iVital-Wellness-Patio5.jpg" class="hero-slide" alt="Serene outdoor grounds at iVital Wellness addiction recovery center Santa Clarita">
        <img src="/photos/iVital-Wellness-House.jpg" class="hero-slide" alt="iVital Wellness residential addiction treatment facility in Santa Clarita, California">
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1 class="hero-title">Luxury Meets Care</h1>
        <div class="hero-divider">
            <img src="/photos/leaves-1.svg" alt="" style="height: 40px; width: auto;">
        </div>
        <p class="hero-subtitle">Your Exquisite Path to Wellness</p>
    </div>
</section>
<div class="about-container">
    <div class="about-row">
        <div class="col-image leaf-image-container">
            <img src="/photos/oak.webp" alt="Wellness Leaf" class="leaf-image">
        </div>
        <div class="col-text">
            <h2 class="section-title">The iVital Wellness Team is Here for You</h2>
            <p class="section-body">Our team is a blend of dedicated professionals driven by a singular commitment: your health. They have been helping people just like you overcome addiction and co-occurring disorders, and they grow day by day in understanding how they change lives for the better. From your first call to stepping into our luxurious setting in Santa Clarita, you will know that you have made one of the best decisions of your life.</p>
            <p class="section-body">We understand what you are going through in overcoming your addiction and battling co-occurring disorders. That is why the combination of our medical professionals, therapists, and wellness experts will create a custom treatment plan that will help you beat this for the rest of your life.</p>
        </div>
    </div>
    <div class="about-row">
        <div class="col-text watermark-right">
            <h2 class="section-title">Nestled in a serene, private location</h2>
            <p class="section-body">iVital Wellness provides a luxurious peace designed to be the perfect backdrop for healing and self-discovery. We have created a space where personalized care blends flawlessly with advanced therapies, ensuring that every aspect of your recovery is met with the utmost comfort and effective treatment.</p>
        </div>
        <div class="col-image">
            <div class="rounded-image-box">
                <img src="/photos/Live-Oak-Wellness-Patio5.webp" alt="Serene Gazebo Location">
            </div>
        </div>
    </div>
    <div class="about-row">
        <div class="col-image">
            <div class="rounded-image-box">
                <img src="/photos/Live-Oak-Wellness-Patio9.webp" alt="Luxury Patio Seating">
            </div>
        </div>
        <div class="col-text">
            <h2 class="section-title">We understand that each individual's path to recovery is unique.</h2>
            <p class="section-body">That is why we offer our iVital Wellness clients therapies that go beyond addressing the physical aspects of addiction. Instead, we focus on the psychological, emotional, and spiritual dimensions of healing as well. Our highly skilled team of medical professionals, therapists, and wellness experts collaborate to devise a holistic care plan that empowers you to reclaim your life with confidence and dignity.</p>
        </div>
    </div>
    <div class="about-row">
        <div class="col-text watermark-left">
            <h2 class="section-title">In addition to our comprehensive treatment programs</h2>
            <p class="section-body">We provide world-class amenities to ensure your stay is as comfortable and restorative as possible. Enjoy luxury bedrooms with their own televisions, gourmet dining experiences, a relaxing spa, soothing sauna, and tranquil outdoor spaces designed to enhance your healing journey.</p>
        </div>
        <div class="col-image">
            <div class="rounded-image-box">
                <img src="/photos/Live-Oak-Wellness-Patio9.webp" alt="Outdoor seating area">
            </div>
        </div>
    </div>
    <div class="about-row">
        <div class="col-image">
            <div class="rounded-image-box">
                <img src="/photos/iVital-Wellness-Pool4.jpg" alt="Luxury Living Room Interior">
            </div>
        </div>
        <div class="col-text">
            <h2 class="section-title">At iVital Wellness</h2>
            <p class="section-body">We are committed to helping you find sobriety, lasting wellness, and a renewed sense of purpose. Call us today at +1 888 673 2087 to start your journey towards a healthier, brighter future in an atmosphere of unparalleled luxury and support. Let us help you find your best self and RECLAIM YOUR FUTURE FROM ADDICTION.</p>
        </div>
    </div>
</div>
`;

export default function AboutClient() {
    return (
        <>
            <AboutSlideshow />
            <HtmlPage html={aboutHTML} css={aboutCSS} />
        </>
    );
}
