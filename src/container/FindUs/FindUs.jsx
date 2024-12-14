import { useRef, useEffect, useState } from "react";

import { Map, SubHeading } from "../../components";
import { images, FIND_US_TEXTS } from "../../constants";
import "./FindUs.css";

export const FindUs = () => {
  // State zum Verwalten der Sichtbarkeit der Karte
  const [mapIsOpen, setMapIsOpen] = useState(false);
  
  // Ref für den Zugriff auf das DOM-Element der Karte
  const mapRef = useRef(null);

  // Effekt zum Scrollen zur Karte, wenn sie geöffnet wird
  useEffect(() => {
    if (mapIsOpen && mapRef.current) {
      const yOffset = -100; // 100px Offset für bessere Sichtbarkeit
      const element = mapRef.current;
      // Berechnung der Scroll-Position mit Berücksichtigung des Offsets
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Sanftes Scrollen zur berechneten Position
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, [mapIsOpen]); // Effekt wird ausgeführt, wenn sich mapIsOpen ändert

  // Handler zum Umschalten der Kartensichtbarkeit
  const toggleMap = () => {
    setMapIsOpen(!mapIsOpen);
  };

  return (
    <div className="bg section__padding findus_container" id="contact">
      <div className="wrapper">
        <div className="wrapper_info">
          <SubHeading title={FIND_US_TEXTS.SUBTITLE} />
          {/* Finden Sie uns */}
          <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
            {FIND_US_TEXTS.TITLE}
          </h1>
          <div className="wrapper-content">
            {/* Kontaktinformationen */}
            <p className="p__opensans">{FIND_US_TEXTS.ADDRESS}</p>
            <h2>{FIND_US_TEXTS.OPENING_HOURS}</h2>
            <p className="p__opensans">{FIND_US_TEXTS.WEEKDAY_HOURS}</p>
            <p className="p__opensans">{FIND_US_TEXTS.WEEKEND_HOURS}</p>
          </div>
          {/* Button zum Öffnen/Schließen der Karte */}
          <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
        onClick={toggleMap}
        aria-label={mapIsOpen ? "Karte schließen" : "Karte öffnen"}
        aria-expanded={mapIsOpen}
      >
            {FIND_US_TEXTS.BUTTON_TEXT}
          </button>
        </div>

        <div className="wrapper_img">
          {/* Bild-Element */}
          <img src={images.findus} alt={FIND_US_TEXTS.ALT_TEXT_IMAGE} />
        </div>          
      </div>
      {/* Bedingte Renderung der Karten-Komponente */}
      {mapIsOpen && <Map ref={mapRef} onClose={toggleMap} />}
    </div>      
  )
};

