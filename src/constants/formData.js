const FORM_TEXTS = {
  RESERVATION_API_ENDPOINT: "http://localhost:3000/bookings",
  SUBSCRIPTION_API_ENDPOINT: "http://localhost:3000/newsletter",
  NETWORK_ERROR: "Netzwerk Fehler.",
  SUCCESS_LOG: "Erfolg:",
  ERROR_LOG: "Fehler:",
  RESERVATION_SUCCESS: "Vielen Dank für Ihre Reservierung!",
  SUBSCRIPTION_SUCCESS: "Vielen Dank für Ihr Interesse!",
  SUBMISSION_ERROR: "Leider ist ein Fehler bei der Übermittlung aufgetreten!",
  IMPORTANT_INFO: "Wichtige Infos",
  RESERVATION_RULES:
    "Reservierungen sind nur während der Öffnungszeiten, bis zu einer Stunde vor Schließung möglich.",
  CONFIRMATION_NOTICE:
    "Nur bei Bestätigung durch uns erhalten diese ihre Gültigkeit.",
  OPENING_HOURS: "Öffnungszeiten",
  WEEKDAYS: "Montag-Freitag",
  WEEKENDS: "Samstag-Sonntag",
  PHONE: "Telefon",
  PHONE_NUMBER: "+49 1234-567890",
  RESERVE_BUTTON: "Reservieren",
  SUBSCRIBE_BUTTON: "Abonnieren",
  INVALID_EMAIL: "Bitte eine gültige E-Mail-Adresse eingeben",
  FUTURE_DATETIME_REQUIRED:
    "Das Reservierungsdatum und die Uhrzeit müssen in der Zukunft liegen.",
  INVALID_RESERVATION_TIME:
    "Reservierungen sind nur während der Öffnungszeiten, bis zu einer Stunde vor Schließung möglich.",
  HOLIDAY_RESERVATION: "Reservierungen sind an Feiertagen nicht möglich.",
  INVALID_GUEST_COUNT:
    "Für Reservierungen mit mehr als 12 Personen kontaktieren Sie uns bitte telefonisch.",
};

const FORM_LABELS = {
  NAME: "Name:",
  EMAIL: "E-Mail:",
  DATE: "Datum:",
  TIME: "Uhrzeit:",
  GUESTS: "Anzahl Gäste:",
};

const FORM_PLACEHOLDERS = {
  NAME: "Ihr Name",
  EMAIL: "Ihre E-Mail-Adresse",
  GUESTS: "Anzahl der Gäste",
};

const FORM_ATTRIBUTES = {
  MIN_GUESTS: "1",
};

const FORM_ARIA_LABELS = {
  NAME: "Geben Sie Ihren Namen ein",
  EMAIL: "Geben Sie Ihre E-Mail-Adresse ein",
  DATE: "Wählen Sie das Datum der Reservierung",
  TIME: "Wählen Sie die Uhrzeit der Reservierung",
  GUESTS: "Geben Sie die Anzahl der Gäste ein",
  RESERVE_BUTTON: "Tisch reservieren",
  SUBSCRIBE_BUTTON: "Newsletter abonnieren"
};

const RESERVATIONFORM_HOLIDAYS = [
  "01-01", // Neujahr
  "18-04", // Karfreitag (2025)
  "21-04", // Ostersonntag (2025)
  "01-05", // Tag der Arbeit
  "29-05", // Christi Himmelfahrt (2025)
  "09-06", // Pfingstsonntag (2025)
  "19-06", // Fronleichnam (2025)
  "03-10", // Tag der Deutschen Einheit
  "01-11", // Allerheiligen
  "25-12", // 1. Weihnachtstag
  "26-12", // 2. Weihnachtstag
];

const RESERVATIONFORM_OPENING_HOURS = {
  weekday: { open: 8, close: 14 },
  weekend: { open: 7, close: 23 },
};

export {
    FORM_TEXTS,
    FORM_LABELS,
    FORM_PLACEHOLDERS,
    FORM_ATTRIBUTES,
    FORM_ARIA_LABELS,
    RESERVATIONFORM_HOLIDAYS,
    RESERVATIONFORM_OPENING_HOURS,
};