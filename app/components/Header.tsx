"use client";

import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const [expandedSub2, setExpandedSub2] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setExpandedItem(null);
    setExpandedSub(null);
    setExpandedSub2(null);
  }

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
        setExpandedSub2(null);
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
    setExpandedSub2(null); // Close third level when toggling second level
    setExpandedSub((prev) => (prev === key ? null : key));
  };

  const toggleSubmenu2 = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSub2((prev) => (prev === key ? null : key));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setExpandedItem(null);
    setExpandedSub(null);
    setExpandedSub2(null);
  };

  return (
    <div className="sticky-wrapper">
      <div className="top-bar">
        <div className="container-limit">
          <span>15668 Live Oak Springs Canyon Rd</span>
          <a href="tel:+18886732087">Speak with specialist 24/7 – +1 888 673 2087</a>
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
                  <Link href="/detox/treatment-methods" onClick={closeAll}>Treatment Methods</Link>
                  <Link href="/detox/supplemental-treatments" onClick={closeAll}>Supplemental Treatments</Link>
                  <Link href="/about/facility" onClick={closeAll}>Facility</Link>
                </div>
              </li>

              {/* Admissions */}
              <li className={expandedItem === 1 ? "expanded" : ""}>
                <a href="#" onClick={(e) => toggleDropdown(1, e)} onMouseDown={spawnRipple}>Admissions</a>
                <div className={`dropdown-content${expandedItem === 1 ? " expanded" : ""}`}>
                  <Link href="/admissions" onClick={closeAll}>Admission Information</Link>
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
                      <Link href="/detox/drug-detox-santa-clarita" onClick={closeAll}>Drug Detox</Link>
                      <Link href="/detox/prescription-drug-detox" onClick={closeAll}>Prescription Drug Detox</Link>
                      <Link href="/detox/alcohol-detox-santa-clarita" onClick={closeAll}>Medical Alcohol Detox Santa Clarita</Link>
                    </div>
                  </div>
                  <div className={`dropdown-submenu${expandedSub === "residential" ? " expanded" : ""}`}>
                    <a href="#" className="submenu-trigger" onClick={(e) => toggleSubmenu("residential", e)}>Residential Treatment</a>
                    <div className={`submenu-content${expandedSub === "residential" ? " expanded" : ""}`}>
                      <Link href="/residential-treatment/alcohol-rehabilitation-santa-clarita" onClick={closeAll}>Alcohol Rehabilitation Center Santa Clarita</Link>
                      <Link href="/residential-treatment/drug-rehabilitation-santa-clarita" onClick={closeAll}>Drug Rehabilitation</Link>
                      <Link href="/residential-treatment/prescription-drug-rehabilitation" onClick={closeAll}>Prescription Drug Rehabilitation</Link>

                      <div className={`dropdown-submenu${expandedSub2 === "programs" ? " expanded" : ""}`}>
                        <a href="#" className="submenu-trigger" onClick={(e) => toggleSubmenu2("programs", e)}>Treatment Programs</a>
                        <div className={`submenu-content${expandedSub2 === "programs" ? " expanded" : ""}`}>
                          <Link href="/residential-treatment/30-day-program" onClick={closeAll}>30-Day Program</Link>
                          <Link href="/residential-treatment/60-day-program" onClick={closeAll}>60-Day Program</Link>
                          <Link href="/residential-treatment/90-day-program" onClick={closeAll}>90-Day Program</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* What We Treat */}
              <li className={expandedItem === 3 ? "expanded" : ""}>
                <a href="#" onClick={(e) => toggleDropdown(3, e)} onMouseDown={spawnRipple}>What We Treat</a>
                <div className={`dropdown-content${expandedItem === 3 ? " expanded" : ""}`}>
                  <Link href="/treatments/alcohol-addiction" onClick={closeAll}>Alcohol Addiction</Link>
                  <Link href="/treatments/cocaine-addiction" onClick={closeAll}>Cocaine Addiction</Link>
                  <Link href="/treatments/marijuana-addiction" onClick={closeAll}>Marijuana Addiction</Link>
                  <Link href="/treatments/prescription-drug-addiction" onClick={closeAll}>Prescription Drug Addiction</Link>
                  <Link href="/treatments/heroin-addiction" onClick={closeAll}>Heroin Addiction</Link>
                  <Link href="/treatments/benzodiazepine-addiction" onClick={closeAll}>Benzodiazepine Addiction</Link>
                  <Link href="/treatments/meth-addiction" onClick={closeAll}>Meth Addiction</Link>
                  <Link href="/treatments/opioid-addiction" onClick={closeAll}>Opioid Addiction</Link>
                  <Link href="/treatments/xanax-addiction" onClick={closeAll}>Xanax Addiction</Link>
                  <Link href="/treatments/co-occurring-disorders" onClick={closeAll}>Co-occurring Disorders</Link>
                  <Link href="/treatments/hallucinogen-addiction" onClick={closeAll}>Hallucinogen Addiction</Link>
                </div>
              </li>

              <li>
                <Link href="/contact-us" onClick={closeAll} onMouseDown={spawnRipple}>Contact Us</Link>
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
