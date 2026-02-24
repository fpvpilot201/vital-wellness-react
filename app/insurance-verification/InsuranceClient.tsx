"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./insurance.css";

interface UploadState {
  file: File | null;
  url: string;
  uploading: boolean;
  preview: string;
}

const emptyUpload: UploadState = { file: null, url: "", uploading: false, preview: "" };

export default function InsuranceClient() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [cardFront, setCardFront] = useState<UploadState>(emptyUpload);
  const [cardBack, setCardBack] = useState<UploadState>(emptyUpload);
  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    file: File,
    setter: typeof setCardFront
  ) => {
    const preview = URL.createObjectURL(file);
    setter({ file, url: "", uploading: true, preview });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload-insurance", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        setter((prev) => ({ ...prev, url: data.url, uploading: false }));
      } else {
        alert(data.error || "Upload failed");
        setter(emptyUpload);
      }
    } catch {
      alert("Upload failed. Please try again.");
      setter(emptyUpload);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cardFront.uploading || cardBack.uploading) {
      alert("Please wait for images to finish uploading.");
      return;
    }
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((val, key) => {
      if (key !== "consent") data[key] = val.toString();
    });

    if (cardFront.url) data.InsuranceCardFront = cardFront.url;
    if (cardBack.url) data.InsuranceCardBack = cardBack.url;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "insurance-verification", ...data }),
      });
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSidebarSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((val, key) => {
      if (key !== "consent") data[key] = val.toString();
    });
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "insurance-sidebar", ...data }),
      });
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderUploadBox = (
    label: string,
    state: UploadState,
    setter: typeof setCardFront,
    inputRef: React.RefObject<HTMLInputElement | null>
  ) => (
    <div
      className={`upload-box${state.preview ? " has-file" : ""}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("drag-over"); }}
      onDragLeave={(e) => { e.currentTarget.classList.remove("drag-over"); }}
      onDrop={(e) => {
        e.preventDefault();
        e.currentTarget.classList.remove("drag-over");
        const file = e.dataTransfer.files[0];
        if (file) handleFileSelect(file, setter);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file, setter);
        }}
      />
      {state.preview ? (
        <div className="upload-preview-wrap">
          <img src={state.preview} alt={label} className="upload-preview-img" />
          {state.uploading && <div className="upload-spinner"><i className="fas fa-spinner fa-spin" /> Uploading...</div>}
          {state.url && <div className="upload-success"><i className="fas fa-check-circle" /> Uploaded</div>}
          <button
            type="button"
            className="upload-remove"
            onClick={(e) => { e.stopPropagation(); setter(emptyUpload); }}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      ) : (
        <>
          <div className="upload-icon"><i className="fas fa-cloud-upload-alt" /></div>
          <span className="upload-label">{label}</span>
          <div className="upload-text">Click or drag photo here</div>
          <div className="upload-formats">JPG, PNG, WebP, or PDF</div>
        </>
      )}
    </div>
  );

  return (
    <>
      <header className="page-hero">
        <div className="hero-watermark" />
        <div className="hero-content">
          <h1 className="page-title">Insurance Verification</h1>
          <div className="hero-divider"><i className="fas fa-leaf" /></div>
          <p className="page-subtitle">Verify Your Coverage Today</p>
        </div>
      </header>

      <div className="main-container">
        <div className="lower-split">
          <div className="content-col">
            <h2 className="content-heading">Verify Your Insurance Coverage</h2>
            <p className="content-p">At iVital Wellness, we work with most major insurance plans to make addiction treatment as accessible as possible. Our admissions team can help you verify your insurance coverage and understand your benefits, so you can focus on what matters most—your recovery.</p>
            <p className="content-p">We accept most major insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and many others. Even if your insurance provider isn&apos;t listed, we may still be able to work with them—contact us to find out.</p>

            <div className="steps-row">
              <div className="step-card">
                <span className="step-number">Step 1</span>
                <p className="step-text">Submit Your Information - Complete the form below with your personal and insurance information to begin the verification process.</p>
              </div>
              <div className="step-card">
                <span className="step-number">Step 2</span>
                <p className="step-text">Verification Review - Our team will review your insurance information and verify your coverage and benefits within 24 hours.</p>
              </div>
              <div className="step-card">
                <span className="step-number">Step 3</span>
                <p className="step-text">Get Started - Once verified, we&apos;ll contact you to discuss your coverage and help you begin your treatment journey.</p>
              </div>
            </div>

            <h2 className="content-heading" style={{ marginTop: 50 }}>Insurance Verification Form</h2>
            <p className="content-p">Please complete the form below with your personal and insurance information. Upload photos of your insurance card (front and back) if available. Our team will review your information and contact you within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <input type="text" name="FirstName" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" name="LastName" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <input type="email" name="Email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="Phone" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <input type="date" name="DateOfBirth" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="CenterPhone" placeholder="Center Phone (if different)" />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <input type="text" name="Insurance_Provider" placeholder="Insurance Provider" required />
                </div>
                <div className="form-group">
                  <input type="text" name="MemberID" placeholder="Member ID" required />
                </div>
              </div>

              <div className="file-upload-row">
                {renderUploadBox("Insurance Card (Front)", cardFront, setCardFront, frontRef)}
                {renderUploadBox("Insurance Card (Back)", cardBack, setCardBack, backRef)}
              </div>

              <div className="form-group">
                <textarea name="Message" placeholder="Additional information or questions..." style={{ minHeight: 120 }} />
              </div>

              <div className="checkbox-row">
                <input type="checkbox" name="consent" id="insurance-consent" required />
                <label htmlFor="insurance-consent" className="disclaimer">
                  I consent to being contacted by iVital Wellness regarding insurance verification and treatment options.
                  I understand that my information is confidential and will be used solely for the purpose of verifying
                  my insurance coverage and providing me with information about treatment services.
                </label>
              </div>

              <button type="submit" className="btn-main-submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Verify Insurance"}
              </button>
            </form>
          </div>

          <div className="sidebar-col">
            <div className="sidebar-form-box">
              <h3 className="side-title">Get Started Today</h3>
              <form onSubmit={handleSidebarSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <input type="text" name="FirstName" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="LastName" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" name="Email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="Phone" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <textarea name="Message" placeholder="Tell us about your situation..." style={{ minHeight: 100 }} />
                </div>
                <div className="checkbox-row">
                  <input type="checkbox" name="consent" id="sidebar-consent" required />
                  <label htmlFor="sidebar-consent" className="disclaimer">
                    I consent to being contacted by iVital Wellness regarding treatment options.
                  </label>
                </div>
                <button type="submit" className="btn-main-submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
