"use client";

import { useEffect } from "react";

function isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
}

export default function FormListener() {
    useEffect(() => {
        // Use MutationObserver + setTimeout to catch forms rendered via dangerouslySetInnerHTML
        const attachToForms = () => {
            const forms = document.querySelectorAll("form");
            forms.forEach((form) => {
                if (form.getAttribute("data-listener-attached")) return;
                form.setAttribute("data-listener-attached", "true");

                form.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    // Email validation
                    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement | null;
                    if (emailInput && !isValidEmail(emailInput.value)) {
                        alert("Please enter a valid email address (e.g. name@gmail.com)");
                        emailInput.focus();
                        return;
                    }

                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);
                    const formName = form.getAttribute("name") || "unknown";

                    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
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
        };

        // Run immediately
        attachToForms();

        // Also run after a short delay to catch async-rendered HTML
        const timer = setTimeout(attachToForms, 200);

        // Watch for new forms added to DOM
        const observer = new MutationObserver(() => {
            attachToForms();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    return null;
}
