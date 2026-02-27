import Link from "next/link";
import type { Metadata } from "next";
import { disorders } from "./data";
import "./directory.css";

export const metadata: Metadata = {
    title: "What We Treat | Addiction Treatment in Santa Clarita",
    description: "iVital Wellness in Santa Clarita, CA treats heroin, meth, cocaine, alcohol, fentanyl & benzodiazepine addiction. Dual diagnosis and co-occurring disorders.",
    alternates: { canonical: "/treatments" },
    openGraph: {
        title: "What We Treat | Addiction Treatment in Santa Clarita",
        description: "iVital Wellness in Santa Clarita, CA treats heroin, meth, cocaine, alcohol, fentanyl & benzodiazepine addiction. Dual diagnosis and co-occurring disorders.",
        url: "/treatments",
        images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
    },
};

export default function WhatWeTreatDirectory() {
    return (
        <>
            <section className="directory-hero">
                <div className="directory-hero-bg"></div>
                <div className="directory-hero-content">
                    <h1 className="directory-title">What We Treat</h1>
                    <div className="directory-divider"><i className="fas fa-leaf"></i></div>
                    <p className="directory-subtitle">
                        Comprehensive Addiction & Mental Health Treatment Programs Tailored for Lasting Recovery
                    </p>
                </div>
            </section>

            <section className="directory-main">
                <div className="directory-container">
                    <div className="disorder-grid">
                        {disorders.map((disorder) => (
                            <Link href={`/treatments/${disorder.slug}`} key={disorder.slug} className="disorder-card">
                                <div className="card-icon">
                                    <i className={`fas ${disorder.icon}`}></i>
                                </div>
                                <h2 className="card-title">{disorder.title}</h2>
                                <p className="card-excerpt">
                                    {disorder.description.substring(0, 120)}...
                                </p>
                                <div className="card-cta">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div >
            </section >
        </>
    );
}
