"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./treat-client.css";

type DisorderProps = {
    disorder: {
        title: string;
        description: string;
        content: string[];
        bulletPoints: string[];
        icon: string;
    };
};

export default function TreatClient({ disorder }: DisorderProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (contentRef.current) {
            const children = contentRef.current.querySelectorAll('.fade-up-element');
            children.forEach((child) => observer.observe(child));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="treat-subpage-hero">
                <div className="subpage-watermark"></div>
                <div className="subpage-hero-overlay"></div>
                <div className="subpage-hero-content">
                    <div className="hero-icon-container">
                        <i className={`fas ${disorder.icon}`}></i>
                    </div>
                    <h1 className="subpage-title">{disorder.title}</h1>
                    <div className="subpage-divider">
                        <i className="fas fa-leaf"></i>
                    </div>
                    <p className="subpage-subtitle">{disorder.description}</p>
                </div>
            </section>

            <div className="treat-subpage-main">
                <div className="treat-subpage-container">
                    {/* Main Content Column */}
                    <div className="treat-content-col" ref={contentRef}>
                        {disorder.content.map((paragraph, idx) => (
                            <p key={idx} className="treat-paragraph fade-up-element">
                                {paragraph}
                            </p>
                        ))}

                        {disorder.bulletPoints.length > 0 && (
                            <div className="treat-bullets-card fade-up-element">
                                <h3 className="bullets-title">Common Signs & Symptoms</h3>
                                <ul className="treat-list">
                                    {disorder.bulletPoints.map((bp, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i>
                                            <span>{bp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sticky Sidebar CTA Column */}
                    <div className="treat-sidebar-col">
                        <div className="sticky-cta-card">
                            <div className="cta-icon">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <h3 className="cta-headline">Ready for Help?</h3>
                            <p className="cta-text">
                                Our compassionate admissions counselors are available 24/7 to answer your questions and guide you toward lasting recovery.
                            </p>
                            <a href="tel:+18886732087" className="cta-phone-btn">
                                Call +1 888 673 2087
                            </a>
                            <Link href="/insurance-verification" className="cta-secondary-link">
                                Verify Your Insurance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
