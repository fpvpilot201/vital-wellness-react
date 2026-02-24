"use client";

import { useEffect } from "react";

export default function FormListener() {
    useEffect(() => {
        const forms = document.querySelectorAll("form");
        forms.forEach((form) => {
            // Prevent attaching multiple times
            if (form.getAttribute("data-listener-attached")) return;
            form.setAttribute("data-listener-attached", "true");

            form.addEventListener("submit", async (e) => {
                e.preventDefault();
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
    }, []);

    return null;
}
