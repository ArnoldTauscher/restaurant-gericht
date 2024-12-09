import { useState } from "react";
import {
  FORM_TEXTS,
  RESERVATIONFORM_HOLIDAYS,
  RESERVATIONFORM_OPENING_HOURS,
} from "../constants";

// Handler für die Validierung der Formularfelder
export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const clearErrors = () => {
    setErrors({});
  };

  // Validierungsfunktionen: siehe unten

  // Validierungen vor dem Absenden des Formulars
  const validateForm = (formData, isNewsletter = false) => {
    const newErrors = {};

    if (!emailIsValid(formData.email)) {
      newErrors.email = FORM_TEXTS.INVALID_EMAIL;
    }

    if (!isNewsletter) {
      if (!isDateTimeInFuture(formData.date, formData.time)) {
        newErrors.dateTime = FORM_TEXTS.FUTURE_DATETIME_REQUIRED;
      }

      if (!isValidReservationTime(formData.date, formData.time)) {
        newErrors.reservationTime =
        FORM_TEXTS.INVALID_RESERVATION_TIME;
      }

      if (isHoliday(formData.date)) {
        newErrors.holiday = FORM_TEXTS.HOLIDAY_RESERVATION;
      }

      if (!isValidGuestCount(formData.guests)) {
        newErrors.guests = FORM_TEXTS.INVALID_GUEST_COUNT;
      }
    }

    setErrors(newErrors);
    return newErrors;
  };

  // Validierung der E-Mail-Adresse
  const emailIsValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Prüft, ob das Datum und die Zeit in der Zukunft liegen
  const isDateTimeInFuture = (date, time) => {
    const reservationDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    return reservationDateTime > now;
  };

  // Prüft, ob das gewählte Datum ein Feiertag ist
  const isHoliday = (date) => {
    const d = new Date(date);
    const formattedDate = `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}`;
    return RESERVATIONFORM_HOLIDAYS.includes(formattedDate);
  };

  // Validiert die Reservierungszeit basierend auf Öffnungszeiten
  const isValidReservationTime = (date, time) => {
    const reservationDate = new Date(`${date}T${time}`);
    const dayOfWeek = reservationDate.getDay();
    const hours = reservationDate.getHours();
    const minutes = reservationDate.getMinutes();

    let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let { open, close } = isWeekend
      ? RESERVATIONFORM_OPENING_HOURS.weekend
      : RESERVATIONFORM_OPENING_HOURS.weekday;

    // Konvertiert Zeit in Minuten seit Mitternacht für einfacheren Vergleich
    const reservationTime = hours * 60 + minutes;
    const openTime = open * 60;
    const closeTime = close * 60;
    const lastReservationTime = closeTime - 60; // Eine Stunde vor Schließung

    return (
      reservationTime >= openTime && reservationTime <= lastReservationTime
    );
  };

  // Prüft, ob die Gästeanzahl gültig ist (max. 12)
  const isValidGuestCount = (guests) => {
    return parseInt(guests) <= 12;
  };

  return {
    validateForm,
    emailIsValid,
    clearErrors,
    errors: {
      hasErrors: () => Object.keys(errors).length > 0,
      getErrorMessage: () => Object.values(errors)[0],
      setSubmissionError: (error) => setErrors({ submission: error }),
    },
  };
};

// Handler für Änderungen in Formularfeldern
export const createHandleChange = (setState) => {
  return (event) => {
    const { name, value, type, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
};

// Handler für das Absenden des Formulars
export const createSubmitHandler = (
  validateForm,
  apiEndpoint,
  onSuccess,
  onError
) => {
  return async (formData) => {
    // Validierung der Formulardaten
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      return { success: false, errors: validationErrors };
    }

    // Senden der Reservierungsdaten an den Server
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Netzwerkfehler bei der Übermittlung");
      }

      const data = await response.json();
      onSuccess(data);
      return { success: true, data };
    } catch (error) {
      console.error("Fehler bei der Übermittlung:", error);
      onError(error);
      return { success: false, error: error.message };
    }
  };
};
