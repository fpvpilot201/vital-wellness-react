"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import "./contact.css";

export default function ContactClient() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [helpSelected, setHelpSelected] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "contact-main", ...data }),
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
            <img src="/photos/leaves-1.svg" alt="Divider" />
          </div>
          <p className="contact-subtitle">Discover the iVital Difference</p>
        </div>
      </section>

      <div className="contact-main-wrapper">
        <div className="contact-flex-container">
          <div className="contact-info-col">
            <h3 className="info-headline">
              Call Now to Confidentially Speak to One of Our Admissions Counsellors.
            </h3>
            <p className="info-text">
              Your picking up the phone may seem like one of the hardest things that you have ever
              done, our compassionate and experienced admissions counselors understand. They are ready
              to answer all of your questions, work with your insurance company, set up an assessment,
              arrange travel if necessary and make sure that upon your arrival your care team is ready.
              Don&apos;t wait another minute to call or fill out the form below; you can&apos;t do this
              alone and your addiction only gets worse. Help is here.
            </p>
            <div className="info-block">
              <span className="info-label">Location</span>
              <span className="info-detail">
                15668 Live Oak Springs Canyon Rd.<br />Santa Clarita, CA 91387
              </span>
            </div>
            <div className="info-block">
              <span className="info-label">Phone</span>
              <span className="info-detail">1 (866) 764-5152</span>
            </div>
            <div className="info-block">
              <span className="info-label">Fax</span>
              <span className="info-detail">1 (888) 609-5559</span>
            </div>
          </div>

          <div className="contact-form-col">
            <h3 className="form-heading">Get In Touch</h3>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="ct-Email" className="floating-label">Email*</label>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="Phone"
                  id="ct-Phone"
                  className="styled-input"
                  placeholder=" "
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
                <label htmlFor="ct-Message" className="floating-label">Message</label>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="ct-consent" name="Consent" value="Yes" required />
                <label htmlFor="ct-consent" className="disclaimer-text">
                  By submitting my information I consent to receive marketing emails, SMS messages,
                  and/or phone calls from iVital Wellness staff. Message &amp; data rates may apply.
                </label>
              </div>

              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
