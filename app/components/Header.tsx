"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setExpandedItem(null);
    setExpandedSub(null);
  }, [pathname]);

  const spawnRipple = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "nav-ripple";
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) {
        setExpandedItem(null);
        setExpandedSub(null);
      }
      return !prev;
    });
  };

  const toggleDropdown = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedSub(null);
    setExpandedItem((prev) => (prev === idx ? null : idx));
  };

  const toggleSubmenu = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedSub((prev) => (prev === key ? null : key));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setExpandedItem(null);
    setExpandedSub(null);
  };

  return (
    <div className="sticky-wrapper">
      <div className="top-bar">
        <div className="container-limit">
          <span>15668 Live Oak Springs Canyon Rd</span>
          <a href="tel:18667645152">Speak with specialist 24/7 – 1(866) 764-5152</a>
        </div>
      </div>

      <header className="main-header" role="banner">
        <div className="container-limit">
          <div className="logo-container">
            <Link href="/" aria-label="iVital Wellness - Return to homepage" onClick={closeAll}>
              <img src="/photos/logo.png" alt="iVital Wellness Addiction Treatment Center" className="logo-image" width={200} height={60} />
            </Link>
          </div>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          <nav aria-label="Main navigation">
            <ul className={`nav-links${menuOpen ? " mobile-active" : ""}`} id="navLinks" ref={navRef}>
              {/* About Us */}
              <li className={expandedItem === 0 ? "expanded" : ""}>
                <a href="/about" onClick={(e) => toggleDropdown(0, e)} onMouseDown={spawnRipple}>About Us</a>
                <div className={`dropdown-content${expandedItem === 0 ? " expanded" : ""}`}>
                  <Link href="/about" onClick={closeAll}>About Us</Link>
                  <Link href="/treatment-methods" onClick={closeAll}>Treatment Methods</Link>
                  <Link href="/supplemental-treatments" onClick={closeAll}>Supplemental Treatments</Link>
                  <Link href="/facility" onClick={closeAll}>Facility</Link>
                </div>
              </li>

              {/* Admissions */}
              <li className={expandedItem === 1 ? "expanded" : ""}>
                <a href="#" onClick={(e) => toggleDropdown(1, e)} onMouseDown={spawnRipple}>Admissions</a>
                <div className={`dropdown-content${expandedItem === 1 ? " expanded" : ""}`}>
                  <Link href="/admissions-information" onClick={closeAll}>Admission Information</Link>
                  <Link href="/insurance-verification" onClick={closeAll}>Insurance Verification</Link>
                </div>
              </li>

              {/* Treatment Programs */}
              <li className={expandedItem === 2 ? "expanded" : ""}>
                <a href="#" onClick={(e) => toggleDropdown(2, e)} onMouseDown={spawnRipple}>Treatment Programs</a>
                <div className={`dropdown-content${expandedItem === 2 ? " expanded" : ""}`}>
                  <div className={`dropdown-submenu${expandedSub === "detox" ? " expanded" : ""}`}>
                    <a href="#" className="submenu-trigger" onClick={(e) => toggleSubmenu("detox", e)}>Detox</a>
                    <div className={`submenu-content${expandedSub === "detox" ? " expanded" : ""}`}>
                      <Link href="/drug-detox" onClick={closeAll}>Drug Detox</Link>
                      <Link href="/prescription-drug-detox" onClick={closeAll}>Prescription Drug Detox</Link>
                      <Link href="/medical-alcohol-detox" onClick={closeAll}>Medical Alcohol Detox Santa Clarita</Link>
                    </div>
                  </div>
                  <div className={`dropdown-submenu${expandedSub === "residential" ? " expanded" : ""}`}>
                    <a href="#" className="submenu-trigger" onClick={(e) => toggleSubmenu("residential", e)}>Residential Treatment</a>
                    <div className={`submenu-content${expandedSub === "residential" ? " expanded" : ""}`}>
                      <Link href="/alcohol-rehab" onClick={closeAll}>Alcohol Rehabilitation Center Santa Clarita</Link>
                      <Link href="/drug-rehab" onClick={closeAll}>Drug Rehabilitation</Link>
                      <Link href="/prescription-rehab" onClick={closeAll}>Prescription Drug Rehabilitation</Link>
                      <Link href="/programs" onClick={closeAll}>Treatment Programs</Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* What We Treat */}
              <li className={expandedItem === 3 ? "expanded" : ""}>
                <a href="#" onClick={(e) => toggleDropdown(3, e)} onMouseDown={spawnRipple}>What We Treat</a>
                <div className={`dropdown-content${expandedItem === 3 ? " expanded" : ""}`}>
                  <Link href="/what-we-treat#alcohol" onClick={closeAll}>Alcohol Addiction</Link>
                  <Link href="/what-we-treat#cocaine" onClick={closeAll}>Cocaine Addiction</Link>
                  <Link href="/what-we-treat#marijuana" onClick={closeAll}>Marijuana Addiction</Link>
                  <Link href="/what-we-treat#prescription" onClick={closeAll}>Prescription Drug Addiction</Link>
                  <Link href="/what-we-treat#heroin" onClick={closeAll}>Heroin Addiction</Link>
                  <Link href="/what-we-treat#benzo" onClick={closeAll}>Benzodiazepine Addiction</Link>
                  <Link href="/what-we-treat#meth" onClick={closeAll}>Meth Addiction</Link>
                  <Link href="/what-we-treat#opioid" onClick={closeAll}>Opioid Addiction</Link>
                  <Link href="/what-we-treat#xanax" onClick={closeAll}>Xanax Addiction</Link>
                  <Link href="/what-we-treat#co-occurring" onClick={closeAll}>Co-occurring Disorders</Link>
                  <Link href="/what-we-treat#hallucinogen" onClick={closeAll}>Hallucinogen Addiction</Link>
                </div>
              </li>

              <li>
                <Link href="/contact" onClick={closeAll} onMouseDown={spawnRipple}>Contact Us</Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeAll} onMouseDown={spawnRipple}>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
