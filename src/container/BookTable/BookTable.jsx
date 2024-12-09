import { useState } from "react";
import { Popup, ReservationForm } from "../../components";
import { BOOKTABLE_TEXTS } from "../../constants";

// BookTable Komponente: Verwaltet die Tischreservierungsfunktionalität
export const BookTable = () => {
  // State für den Öffnungszustand des Popups
  const [isOpen, setIsOpen] = useState(false);
  // State für den Übermittlungsstatus des Formulars
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Funktion zum Öffnen des Reservierungspopups
  const openBookTable = () => {
    setIsOpen(true);
    setIsSubmitted(false); // Setzt den Übermittlungsstatus zurück
  };

  // Funktion zum Schließen des Reservierungspopups
  const closeBookTable = () => setIsOpen(false);

  // Callback-Funktion für erfolgreiche Formularübermittlung
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderContent = () => {
    return isSubmitted ? (
      // Bestätigungsnachricht nach erfolgreicher Übermittlung
      <p>{BOOKTABLE_TEXTS.THANK_YOU}</p>
    ) : (
      // Reservierungsformular, wenn noch nicht übermittelt
      <ReservationForm onSubmit={handleSubmit} />
    )
  };

  return (
    <div className="book-table-content">
      {/* Klickbarer Text zum Öffnen des Reservierungspopups */}
      <h6 onClick={openBookTable}>{BOOKTABLE_TEXTS.BOOK_TABLE}</h6>

      {/* Popup-Komponente für die Tischreservierung */}
      <Popup
        isOpen={isOpen}
        onClose={closeBookTable}
        title={BOOKTABLE_TEXTS.BOOK_TABLE}
        content={renderContent()}
        buttonClassName="custom__button"
        buttonText={BOOKTABLE_TEXTS.CANCEL}
      />
    </div>
  );
};
