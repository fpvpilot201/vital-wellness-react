"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default function SidebarForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!isValidEmail(data.Email?.toString() || "")) {
      alert("Please enter a valid email address (e.g. name@gmail.com)");
      setSubmitting(false);
      return;
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "sidebar-contact", ...data }),
      });
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sidebar-form-box">
      <h3 className="side-title">Get Help Now</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row-2">
          <input type="text" name="FirstName" placeholder="First Name*" required />
          <input type="text" name="LastName" placeholder="Last Name*" required />
        </div>
        <div className="form-group">
          <input type="email" name="Email" placeholder="Email*" required />
        </div>
        <div className="form-group">
          <input type="tel" name="Phone" placeholder="Mobile phone*" required />
        </div>
        <div className="checkbox-row">
          <input type="checkbox" id="side-consent" name="Consent" value="Yes" required />
          <label htmlFor="side-consent" className="disclaimer">
            By submitting my information I consent to receive marketing emails... (Rates apply)
          </label>
        </div>
        <button
          type="submit"
          className="btn-main-submit"
          style={{ width: "100%", backgroundColor: "#727b6e" }}
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
