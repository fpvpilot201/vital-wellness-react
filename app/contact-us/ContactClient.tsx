"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./contact.css";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default function ContactClient() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [helpSelected, setHelpSelected] = useState(false);

  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Bot honeypot check
    if (data.website_url) {
      alert("Bot detected. Access denied.");
      setSubmitting(false);
      return;
    }

    // Bot speed check (< 2 seconds is impossibly fast for a human)
    if (Date.now() - loadTime < 2000) {
      alert("Submission too fast. Are you a bot?");
      setSubmitting(false);
      return;
    }

    if (!isValidEmail(data.Email?.toString() || "")) {
      alert("Please enter a valid email address (e.g. name@gmail.com)");
      setSubmitting(false);
      return;
    }

    if (!phoneValue || phoneValue.length < 10) {
      alert("Please enter a valid phone number.");
      setSubmitting(false);
      return;
    }

    try {
      // Remove honeypot from payload
      const payload: any = { formName: "contact-main", ...data };
      delete payload.website_url;
      // Ensure phone is passed explicitly since it's managed by state
      payload.Phone = phoneValue;

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-watermark" />
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-divider">
            <img src="/photos/leaves-1.svg" alt="" />
          </div>
          <p className="contact-subtitle">Take the first step toward lasting wellness.</p>
        </div>
      </section>

      <div className="contact-main-wrapper">
        <div className="contact-flex-container">
          {/* LEFT COLUMN: INFO & CARDS */}
          <div className="contact-info-col">
            <h3 className="info-headline">
              Call Now to Confidentially Speak with an Admissions Counselor.
            </h3>
            <p className="info-text">
              Picking up the phone may seem like one of the hardest things you have ever done, but our
              compassionate and experienced admissions counselors understand. They are ready to answer
              all of your questions, work with your insurance company, set up an assessment, arrange
              travel if necessary, and make sure that upon your arrival, your care team is ready.
            </p>
            <p className="info-text" style={{ fontWeight: 600, color: '#6a7c64', marginTop: '-20px' }}>
              Don't wait another minute. Help is here.
            </p>

            <div className="contact-cards-grid">
              <div className="contact-info-card">
                <div className="info-card-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="info-card-content">
                  <span className="info-label">Location</span>
                  <span className="info-detail">
                    15668 Live Oak Springs Canyon Rd.<br />Santa Clarita, CA 91387
                  </span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-card-icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="info-card-content">
                  <span className="info-label">Phone 24/7</span>
                  <span className="info-detail">
                    <a href="tel:+18886732087" style={{ color: 'inherit', textDecoration: 'none' }}>+1 888 673 2087</a>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: ELEVATED FORM */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-heading">Get In Touch</h3>
              <p className="form-subheading">Fill out the form below and we will reach out shortly.</p>

              <form onSubmit={handleSubmit}>
                {/* HONEYPOT FIELD (Bots will fill this, humans won't see it) */}
                <div style={{ display: 'none', visibility: 'hidden', zIndex: -1 }}>
                  <label htmlFor="website_url">Website URL (leave blank if human)</label>
                  <input type="text" name="website_url" id="website_url" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="FirstName"
                      id="ct-FirstName"
                      className="styled-input"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="ct-FirstName" className="floating-label">First Name*</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="LastName"
                      id="ct-LastName"
                      className="styled-input"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="ct-LastName" className="floating-label">Last Name*</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    id="ct-Email"
                    className="styled-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="ct-Email" className="floating-label">Email Address*</label>
                </div>

                <div className="form-group">
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    className={`styled-input phone-input-override${phoneValue ? " has-value" : ""}`}
                    required
                  />
                  <label htmlFor="ct-Phone" className="floating-label">Mobile Phone*</label>
                </div>

                <div className="form-group">
                  <select
                    name="HelpType"
                    id="ct-HelpType"
                    className={`styled-input${helpSelected ? " has-value" : ""}`}
                    required
                    defaultValue=""
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setHelpSelected(e.target.value !== "")}
                  >
                    <option value="" disabled></option>
                    <option>Drug Detox</option>
                    <option>Prescription Drug Detox</option>
                    <option>Alcohol Detox</option>
                    <option>Alcohol Rehabilitation</option>
                    <option>Drug Rehabilitation</option>
                    <option>Prescription Drug Rehabilitation</option>
                    <option>30 Day Program</option>
                    <option>60 Day Program</option>
                    <option>90 Day Program</option>
                    <option>Alcohol Addiction</option>
                    <option>Cocaine Addiction</option>
                    <option>Marijuana Addiction</option>
                    <option>Prescription Drug Addiction</option>
                    <option>Heroin Addiction</option>
                    <option>Benzodiazepine Addiction</option>
                    <option>Meth Addiction</option>
                    <option>Opioid Addiction</option>
                    <option>Xanax Addiction</option>
                    <option>Co-occurring Disorders</option>
                    <option>Hallucinogen Addiction</option>
                  </select>
                  <label htmlFor="ct-HelpType" className="floating-label">I need help with...</label>
                </div>

                <div className="form-group">
                  <textarea
                    name="Message"
                    id="ct-Message"
                    className="styled-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="ct-Message" className="floating-label">How can we help you?</label>
                </div>

                <div className="checkbox-group">
                  <input type="checkbox" id="ct-consent" name="Consent" value="Yes" required />
                  <label htmlFor="ct-consent" className="disclaimer-text">
                    By submitting my information I consent to receive communication from iVital Wellness staff. Message &amp; data rates may apply.
                  </label>
                </div>

                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
