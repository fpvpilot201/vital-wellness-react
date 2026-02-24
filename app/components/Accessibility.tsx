"use client";

import { useState, useEffect, useCallback } from "react";

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStates, setActiveStates] = useState({
    highContrast: false,
    grayscale: false,
    linksUnderlined: false,
    readableFont: false,
  });
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const html = document.documentElement;
    const fs = localStorage.getItem("fontSize");
    if (fs) {
      const val = parseInt(fs);
      html.style.fontSize = val + "%";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFontSize(val);
    }
    const hc = localStorage.getItem("highContrast") === "true";
    const gs = localStorage.getItem("grayscale") === "true";
    const lu = localStorage.getItem("linksUnderlined") === "true";
    const rf = localStorage.getItem("readableFont") === "true";
    if (hc) html.classList.add("high-contrast");
    if (gs) html.classList.add("grayscale");
    if (lu) html.classList.add("links-underlined");
    if (rf) html.classList.add("readable-font");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveStates({ highContrast: hc, grayscale: gs, linksUnderlined: lu, readableFont: rf });
  }, []);

  const handleAction = useCallback((action: string) => {
    const html = document.documentElement;
    switch (action) {
      case "increase-text": {
        const next = Math.min(fontSize + 10, 150);
        html.style.fontSize = next + "%";
        localStorage.setItem("fontSize", String(next));
        setFontSize(next);
        break;
      }
      case "decrease-text": {
        const next = Math.max(fontSize - 10, 80);
        html.style.fontSize = next + "%";
        localStorage.setItem("fontSize", String(next));
        setFontSize(next);
        break;
      }
      case "high-contrast":
        html.classList.toggle("high-contrast");
        setActiveStates((prev) => {
          const val = !prev.highContrast;
          localStorage.setItem("highContrast", String(val));
          return { ...prev, highContrast: val };
        });
        break;
      case "grayscale":
        html.classList.toggle("grayscale");
        setActiveStates((prev) => {
          const val = !prev.grayscale;
          localStorage.setItem("grayscale", String(val));
          return { ...prev, grayscale: val };
        });
        break;
      case "links-underline":
        html.classList.toggle("links-underlined");
        setActiveStates((prev) => {
          const val = !prev.linksUnderlined;
          localStorage.setItem("linksUnderlined", String(val));
          return { ...prev, linksUnderlined: val };
        });
        break;
      case "readable-font":
        html.classList.toggle("readable-font");
        setActiveStates((prev) => {
          const val = !prev.readableFont;
          localStorage.setItem("readableFont", String(val));
          return { ...prev, readableFont: val };
        });
        break;
      case "reset":
        html.style.fontSize = "";
        html.classList.remove("high-contrast", "grayscale", "links-underlined", "readable-font");
        ["fontSize", "highContrast", "grayscale", "linksUnderlined", "readableFont"].forEach((k) =>
          localStorage.removeItem(k)
        );
        setFontSize(100);
        setActiveStates({ highContrast: false, grayscale: false, linksUnderlined: false, readableFont: false });
        break;
    }
  }, [fontSize]);

  const hasAnyActive = activeStates.highContrast || activeStates.grayscale || activeStates.linksUnderlined || activeStates.readableFont || fontSize !== 100;

  return (
    <>
      <div
        className={`float-icon icon-accessibility${hasAnyActive ? " has-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen); }}
      >
        <i className="fas fa-universal-access" />
      </div>

      <div className={`accessibility-panel${isOpen ? " open" : ""}`}>
        <div className="accessibility-header">
          <h3>Accessibility Options</h3>
          <button className="close-panel" aria-label="Close accessibility panel" onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </div>
        <div className="accessibility-options">
          <div className="a11y-font-controls">
            <span className="a11y-font-label">Text Size</span>
            <div className="a11y-font-btns">
              <button
                className="a11y-font-btn"
                onClick={() => handleAction("decrease-text")}
                disabled={fontSize <= 80}
                aria-label="Decrease text size"
              >
                A-
              </button>
              <span className="a11y-font-value">{fontSize}%</span>
              <button
                className="a11y-font-btn"
                onClick={() => handleAction("increase-text")}
                disabled={fontSize >= 150}
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>
          </div>

          <button
            className={`accessibility-option${activeStates.highContrast ? " active" : ""}`}
            onClick={() => handleAction("high-contrast")}
          >
            <i className="fas fa-adjust" />
            <span>High Contrast</span>
            <span className={`a11y-toggle${activeStates.highContrast ? " on" : ""}`} />
          </button>

          <button
            className={`accessibility-option${activeStates.grayscale ? " active" : ""}`}
            onClick={() => handleAction("grayscale")}
          >
            <i className="fas fa-palette" />
            <span>Grayscale</span>
            <span className={`a11y-toggle${activeStates.grayscale ? " on" : ""}`} />
          </button>

          <button
            className={`accessibility-option${activeStates.linksUnderlined ? " active" : ""}`}
            onClick={() => handleAction("links-underline")}
          >
            <i className="fas fa-underline" />
            <span>Underline Links</span>
            <span className={`a11y-toggle${activeStates.linksUnderlined ? " on" : ""}`} />
          </button>

          <button
            className={`accessibility-option${activeStates.readableFont ? " active" : ""}`}
            onClick={() => handleAction("readable-font")}
          >
            <i className="fas fa-font" />
            <span>Readable Font</span>
            <span className={`a11y-toggle${activeStates.readableFont ? " on" : ""}`} />
          </button>

          {hasAnyActive && (
            <button className="accessibility-option reset-btn" onClick={() => handleAction("reset")}>
              <i className="fas fa-undo" />
              <span>Reset All</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
