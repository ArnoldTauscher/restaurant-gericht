import { useRef, useMemo, useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { SubHeading } from "../../components";
import { images, GALLERY_TEXTS } from "../../constants";
import "./Gallery.css";

export const Gallery = () => {
  // Referenz für den scrollbaren Container
  const scrollRef = useRef(null);
  
  // State für die Scroll-Möglichkeiten in beide Richtungen
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Memoisiertes Array der Galeriebilder
  // Filtert alle Bilder, deren Schlüssel mit 'gallery' beginnen
  const galleryImages = useMemo(() => {
    return Object.entries(images)
      .filter(([key]) => key.startsWith('gallery'))
      .map(([key, value]) => ({ key, value }));
  }, []);

  // Überprüft, ob Scrollen in beide Richtungen möglich ist
  const checkScroll = () => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      // Math.ceil() wird verwendet, um Rundungsfehler zu vermeiden
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  // Effekt zum Initialisieren und Aktualisieren des Scroll-Zustands
  useEffect(() => {
    checkScroll();
    // Event-Listener für Fenstergrößenänderungen
    window.addEventListener('resize', checkScroll);
    // Cleanup-Funktion zum Entfernen des Event-Listeners
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Funktion zum Scrollen der Galerie
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= GALLERY_TEXTS.AMOUNT_OF_SCROLL; // Scroll nach links
      } else {
        current.scrollLeft += GALLERY_TEXTS.AMOUNT_OF_SCROLL; // Scroll nach rechts
      }
      // Überprüft den Scroll-Zustand nach der Animation
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <div className="gallery flex__center">
      <div className="gallery-content">
        <SubHeading title={GALLERY_TEXTS.SUBTITLE} />
        <h1>{GALLERY_TEXTS.TITLE}</h1>
        <p className="p__opensans" style={{ color: "var(--color-ligth-gray)", marginTop: "2rem" }}>
          {GALLERY_TEXTS.DESCRIPTION}
        </p>
      </div>
      <div className="gallery-images">
        {/* Scrollbarer Container für die Bilder */}
        <div 
          className="gallery-images_container" 
          ref={scrollRef}
          onScroll={checkScroll} // Überprüft Scroll-Zustand bei jedem Scroll-Event
        >
          {/* Rendert alle gefilterten Galeriebilder */}
          {galleryImages.map(({ key, value }, index) => (
            <div
              className="gallery-images_card flex__center"
              key={`gallery_image-${key}`}
            >
              <img src={value} alt={GALLERY_TEXTS.ALT_TEXT(index)} />
            </div>
          ))}
        </div>
        {/* Pfeile zum Scrollen der Galerie */}
        <div className="gallery-images_arrows">
          {/* Linker Pfeil - deaktiviert, wenn nicht nach links gescrollt werden kann */}
          <BsArrowLeftShort
            className={`gallery__arrow-icon ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => canScrollLeft && scroll("left")}
          />
          {/* Rechter Pfeil - deaktiviert, wenn nicht nach rechts gescrollt werden kann */}
          <BsArrowRightShort
            className={`gallery__arrow-icon ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => canScrollRight && scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};


