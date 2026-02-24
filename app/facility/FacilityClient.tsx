"use client";

import { useEffect, useState } from "react";

const facilityCSS = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; max-width: 600px; margin: 0 auto; }
.facility-container { width: 90%; max-width: 1300px; margin: 60px auto; }
.section-title { font-family: 'Playfair Display', serif; font-size: 32px; color: #333; margin: 60px 0 30px; padding-bottom: 15px; border-bottom: 1px solid #ddd; }
.facility-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
.gallery-item { position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.08); height: 280px; cursor: pointer; }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
.gallery-item:hover img { transform: scale(1.05); }
.lightbox { display: none; position: fixed; z-index: 20000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.9); justify-content: center; align-items: center; flex-direction: column; }
.lightbox.active { display: flex; }
.lightbox-content { margin: auto; display: block; max-width: 90%; max-height: 80vh; border-radius: 4px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
.lightbox-close { position: absolute; top: 20px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 20002; background: none; border: none; }
.lightbox-close:hover { color: #bbb; }
.lightbox-prev, .lightbox-next { cursor: pointer; position: absolute; top: 50%; width: auto; padding: 16px; margin-top: -50px; color: white; font-weight: bold; font-size: 30px; transition: 0.6s ease; border-radius: 3px; user-select: none; z-index: 20002; background-color: rgba(0,0,0,0.3); border: none; }
.lightbox-next { right: 0; }
.lightbox-prev { left: 0; }
.lightbox-prev:hover, .lightbox-next:hover { background-color: rgba(106,124,100,0.8); }
@media (max-width: 1024px) { .facility-grid { grid-template-columns: repeat(2, 1fr); } .gallery-item { height: 250px; } }
@media (max-width: 600px) { .facility-grid { grid-template-columns: 1fr; } .gallery-item { height: 220px; } }
`;

interface GallerySection {
  title: string;
  images: string[];
}

const gallerySections: GallerySection[] = [
  {
    title: "Exterior",
    images: [
      "iVital-Wellness-House.jpg",
      "iVital-Wellness-Pool.jpg",
      "iVital-Wellness-Patio.jpg",
      "iVital-Wellness-Garage-Tennis.jpg",
      "iVital-Wellness-out3.jpg",
      "iVital-Wellness-Patio7.jpg",
    ],
  },
  {
    title: "Common Areas",
    images: [
      "iVital-Wellness-Living.jpg",
      "iVital-Wellness-Living3.jpg",
      "iVital-Wellness-Kitchen2.jpg",
      "iVital-Wellness-Kitchen5.jpg",
      "iVital-Wellness-Gym.jpg",
      "iVital-Wellness-Sauna.jpg",
    ],
  },
  {
    title: "Accommodations",
    images: [
      "iVital-Wellness-Bedroom1.jpg",
      "iVital-Wellness-Bedroom2.jpg",
      "iVital-Wellness-Bedroom3.jpg",
    ],
  },
];

export default function FacilityClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Flatten all images into a single array for lightbox navigation
  const allImages = gallerySections.flatMap((section) =>
    section.images.map((img) => `/photos/${img}`)
  );

  const openLightbox = (imagePath: string) => {
    const index = allImages.indexOf(imagePath);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const showPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, allImages.length]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: facilityCSS }} />
      <section className="page-hero">
        <div className="hero-watermark"></div>
        <div className="hero-content">
          <h1 className="page-title">Our Facility</h1>
          <div className="hero-divider">
            <img src="/photos/leaves-1.svg" alt="Divider" style={{ height: "40px", width: "auto" }} />
          </div>
          <p className="page-subtitle">
            Tour our luxury addiction treatment facility in Santa Clarita. View our amenities, accommodations, and serene grounds designed for healing.
          </p>
        </div>
      </section>

      <div className="facility-container">
        {gallerySections.map((section) => (
          <div key={section.title}>
            <h2 className="section-title">{section.title}</h2>
            <div className="facility-grid">
              {section.images.map((imageName) => {
                const imagePath = `/photos/${imageName}`;
                return (
                  <div
                    key={imageName}
                    className="gallery-item"
                    onClick={() => openLightbox(imagePath)}
                  >
                    <img src={imagePath} alt={`${section.title} - ${imageName}`} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className={`lightbox ${lightboxOpen ? "active" : ""}`}
          onClick={handleBackdropClick}
        >
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <button className="lightbox-prev" onClick={showPrevious}>
            ‹
          </button>
          <img
            src={allImages[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-next" onClick={showNext}>
            ›
          </button>
        </div>
      )}
    </>
  );
}
