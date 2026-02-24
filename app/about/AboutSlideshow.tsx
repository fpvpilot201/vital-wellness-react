"use client";

import { useEffect } from "react";

export default function AboutSlideshow() {
    useEffect(() => {
        const slides = document.querySelectorAll(".hero-slide");
        if (slides.length === 0) return;

        let currentSlide = 0;

        const showSlide = (index: number) => {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
