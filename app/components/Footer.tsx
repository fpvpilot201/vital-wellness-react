"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="map-info-section">
        <div className="map-text-content">
          <h2 className="map-headline">Taking the First Step Is Tough – We Make It Simpler</h2>
          <div className="map-body">
            <p>
              At iVital Wellness, we believe in a holistic approach to recovery. Our dedicated team
              of specialists combines advanced medical treatments with compassionate care to help you
              reclaim your health. Whether you are seeking physical rehabilitation or mental wellness
              support, our doors are open to guide you every step of the way.
            </p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6583.768175611354!2d-118.41057!3d34.404292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c28936f5755e69%3A0xda469bddd24ec940!2siVital%20Wellness%20Addiction%20Treatment%20Centre%20%7C%20Drug%20%26%20Alcohol%20Rehab%20in%20Santa%20Clarita%2C%20CA!5e0!3m2!1sen!2sam!4v1770218235081!5m2!1sen!2sam"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iVital Wellness location on Google Maps - 15668 Live Oak Springs Canyon Rd, Santa Clarita, CA 91387"
          />
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-col-1">
            <div className="footer-logo">
              <img src="/photos/logo.png" alt="iVital Wellness Addiction Treatment Center" width={180} height={54} />
            </div>
            <p className="footer-desc">© 2025 iVital Wellness. All rights reserved.</p>
            <p className="footer-desc">
              Santa Clarita&apos;s Premier Addiction Treatment Center. Offering Medical Detox,
              Residential Treatment, and Dual Diagnosis care in a luxury setting.
            </p>
          </div>
          <div className="footer-col-2">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/insurance-verification">Insurance</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-col-3">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt" />
              <span>15668 Live Oak Springs Canyon Rd, Santa Clarita, CA 91387</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt" />
              <a href="tel:18667645152" style={{ color: "inherit", textDecoration: "none" }}>(866) 764-5152</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope" />
              <span>info@ivitalwellness.com</span>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/search/results/all/?keywords=ivitalwellness" target="_blank" rel="noopener noreferrer" aria-label="Follow iVital Wellness on LinkedIn"><i className="fab fa-linkedin" /></a>
              <a href="https://www.instagram.com/ivitalwellness/" target="_blank" rel="noopener noreferrer" aria-label="Follow iVital Wellness on Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.facebook.com/search/top/?q=ivitalwellness" target="_blank" rel="noopener noreferrer" aria-label="Follow iVital Wellness on Facebook"><i className="fab fa-facebook-square" /></a>
              <a href="https://www.youtube.com/@iVitalWellness" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to iVital Wellness on YouTube"><i className="fab fa-youtube" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <span>Terms of Service</span>
              <span>License Number: 190363AP</span>
            </div>
            <div>
              Website design by <span className="brivity-credit">brivity</span>
            </div>
          </div>
        </div>
      </footer>

      <a href="tel:18667645152" className="float-icon icon-phone" aria-label="Call iVital Wellness at (866) 764-5152">
        <i className="fas fa-phone" />
      </a>
    </>
  );
}
