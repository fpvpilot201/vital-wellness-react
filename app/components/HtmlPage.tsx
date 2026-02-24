"use client";

import { useEffect, useRef } from "react";

interface HtmlPageProps {
  html: string;
  css?: string;
}

export default function HtmlPage({ html, css }: HtmlPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const forms = containerRef.current.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const formName = form.getAttribute("name") || "unknown";

        const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Submitting...";
        }

        try {
          await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formName, ...data }),
          });
          window.location.href = "/thank-you";
        } catch {
          alert("Something went wrong. Please try again.");
          if (btn) {
            btn.disabled = false;
            btn.textContent = "Submit";
          }
        }
      });
    });
  }, [html]);

  return (
    <>
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
