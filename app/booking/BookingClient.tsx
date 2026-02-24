"use client";

import HtmlPage from "../components/HtmlPage";

const css = `.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }`;

const html = `<section class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">Book Your Stay</h1>
        <img src="/photos/leaves-1.svg" alt="Divider" class="hero-divider" style="height:40px;width:auto;">
        <p class="page-subtitle">Take the First Step Toward Recovery</p>
    </div>
</section>
<div style="max-width: 900px; margin: 60px auto; padding: 0 40px;">
    <div style="text-align: center; margin-bottom: 50px;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 36px; color: #2c3e29;">Start Your Journey Today</h2>
        <p style="font-family: 'Lato', sans-serif; font-size: 18px; color: #666; line-height: 1.8;">We're here to help you take the first step toward a healthier, happier life. Contact us to learn more about our programs and begin your recovery journey.</p>
    </div>
    <div style="background: #F9F7F2; padding: 50px; border-radius: 10px; margin-bottom: 60px;">
        <form name="booking">
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">First Name *</label>
                <input type="text" name="FirstName" required style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;">
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">Last Name *</label>
                <input type="text" name="LastName" required style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;">
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">Email *</label>
                <input type="email" name="Email" required style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;">
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">Phone Number *</label>
                <input type="tel" name="Phone" required style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;">
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">Preferred Program</label>
                <select name="Program" style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;">
                    <option value="">-- Select a Program --</option>
                    <option value="30-day">30-Day Program</option>
                    <option value="60-day">60-Day Program</option>
                    <option value="90-day">90-Day Program</option>
                    <option value="detox">Detox Program</option>
                    <option value="not-sure">Not Sure</option>
                </select>
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; font-family: 'Lato', sans-serif; color: #2c3e29; margin-bottom: 8px; font-weight: 500;">Additional Information</label>
                <textarea name="Message" rows="5" style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 16px;"></textarea>
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: flex; align-items: flex-start; font-family: 'Lato', sans-serif; color: #666; font-size: 14px;">
                    <input type="checkbox" name="Consent" value="Yes" required style="margin-right: 10px; margin-top: 4px;">
                    <span>By submitting my information, I consent to receive marketing emails, SMS messages, and/or phone calls from iVital Wellness LLC. Message &amp; data rates may apply. *</span>
                </label>
            </div>
            <button type="submit" style="width: 100%; padding: 18px; background-color: #6a7c64; color: white; border: none; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 18px; font-weight: 500; cursor: pointer; transition: background 0.3s;">Submit Booking Request</button>
        </form>
    </div>
    <div style="text-align: center; margin-bottom: 60px;">
        <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #2c3e29; margin-bottom: 20px;">Prefer to Talk?</h3>
        <p style="font-family: 'Lato', sans-serif; font-size: 18px; color: #666; margin-bottom: 20px;">Our admissions team is available 24/7 to answer your questions.</p>
        <a href="tel:18667645152" style="display: inline-block; padding: 15px 40px; background-color: #556350; color: white; text-decoration: none; border-radius: 5px; font-family: 'Lato', sans-serif; font-size: 18px; font-weight: 500;"><i class="fas fa-phone" style="margin-right: 10px;"></i> Call (866) 764-5152</a>
    </div>
</div>`;

export default function BookingClient() {
  return <HtmlPage html={html} css={css} />;
}
