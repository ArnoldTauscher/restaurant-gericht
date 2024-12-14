import { useState } from "react";

import { MenuCardItem, Popup } from "../../components";
import { MENUCARD_TEXTS } from "../../constants";
import "./MenuCard.css"

// MenuCard Komponente: Verwaltet die Anzeige und Interaktion mit der Speisekarte
export const MenuCard = () => {
  // State für den Öffnungszustand des Popups
  const [isOpen, setIsOpen] = useState(false);

  // Funktion zum Öffnen des Speisekarten-Popups
  const openMenuCardItem = () => {
    setIsOpen(true);
  };

  // Funktion zum Schließen des Speisekarten-Popups
  const closeMenuCardItem = () => setIsOpen(false);

  return (
    <div className="menu-card-content">
      {/* Klickbarer Button zum Öffnen des Speisekarten-Popups */}
      <button type="button" className="custom__button" onClick={openMenuCardItem}>
        {MENUCARD_TEXTS.MENUCARD_BUTTON_TEXT}
      </button>

      {/* Popup-Komponente für die Anzeige der Speisekarte */}
      <Popup
        isOpen={isOpen}
        onClose={closeMenuCardItem}
        title={MENUCARD_TEXTS.TITLE}
        content={
          <MenuCardItem onClick={closeMenuCardItem} />
        }
        buttonClassName="custom__button"
        buttonText={MENUCARD_TEXTS.POPUP_BUTTON_TEXT}
      />
    </div>
  );
};
