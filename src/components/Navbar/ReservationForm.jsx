import { useState } from "react";
import { createHandleChange, useFormValidation, createSubmitHandler } from "../../utils/formUtils";
import {
  FORM_TEXTS,
  RESERVATIONFORM_OPENING_HOURS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_ATTRIBUTES,
  FORM_ARIA_LABELS
} from "../../constants";
import "./ReservationForm.css";

export const ReservationForm = () => {
    // State für Formulardaten mit useState-Hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const { validateForm, errors, clearErrors } = useFormValidation();

  const handleChange = (e) => {
    createHandleChange(setFormData)(e);
    clearErrors(); // Fehler löschen, wenn der Benutzer beginnt zu tippen
  };

  const handleSubmit = createSubmitHandler(
    validateForm,
    FORM_TEXTS.RESERVATION_API_ENDPOINT,
    (data) => {
      console.log(FORM_TEXTS.SUCCESS_LOG, data);
      alert(FORM_TEXTS.RESERVATION_SUCCESS);
    },
    () => { // Den error-Parameter habe ich weggelassen, da ich ihn nicht benötige.
      errors.setSubmissionError(FORM_TEXTS.SUBMISSION_ERROR);
      console.log("Diese App enthält derzeit keine serverseitige Logik.");
    }
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <div id="reservation">
      {/* Informationsbereich */}
      <div>
        <h3>{FORM_TEXTS.IMPORTANT_INFO}</h3>
        <p className="p__opensans">{FORM_TEXTS.RESERVATION_RULES}</p>
        <p className="p__opensans">{FORM_TEXTS.CONFIRMATION_NOTICE}</p>
        <div className="reservation-info">
          {/* Öffnungszeiten */}
          <div className="reservation-info-item">
            <h3>{FORM_TEXTS.OPENING_HOURS}</h3>
            <div className="reservation-info-item-inner">
              <p className="p__opensans">{FORM_TEXTS.WEEKDAYS}:</p>
              <p className="p__opensans">{`${RESERVATIONFORM_OPENING_HOURS.weekday.open}:00 - ${RESERVATIONFORM_OPENING_HOURS.weekday.close}:00`}</p>
            </div>
            <div className="reservation-info-item-inner">
              <p className="p__opensans">{FORM_TEXTS.WEEKENDS}:</p>
              <p className="p__opensans">{`${RESERVATIONFORM_OPENING_HOURS.weekend.open}:00 - ${RESERVATIONFORM_OPENING_HOURS.weekend.close}:00`}</p>
            </div>
          </div>
          {/* Kontaktinformationen */}
          <div className="reservation-info-item">
            <h3>{FORM_TEXTS.PHONE}</h3>
            <p className="p__opensans">{FORM_TEXTS.PHONE_NUMBER}</p>
          </div>
        </div>
      </div>
      {/* Reservierungsformular */}
      <form
        id="reservation-form"
        className="reservation-form"
        onSubmit={onSubmit}
      >
        <div className="reservation-form-content">
          {/* Formularfelder */}
          <div className="reservation-form-row">
            <label htmlFor="name" className="reservation-form-label">
              <h6>{FORM_LABELS.NAME}</h6>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={FORM_PLACEHOLDERS.NAME}
              aria-label={FORM_ARIA_LABELS.NAME}
              required
            />
          </div>
          <div className="reservation-form-row">
            <label htmlFor="email" className="reservation-form-label">
              <h6>{FORM_LABELS.EMAIL}</h6>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={FORM_PLACEHOLDERS.EMAIL}
              aria-label={FORM_ARIA_LABELS.EMAIL}
              required
            />
          </div>
          <div className="reservation-form-date-time-row">
            <div className="reservation-form-row">
              <label htmlFor="date" className="reservation-form-label">
                <h6>{FORM_LABELS.DATE}</h6>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                aria-label={FORM_ARIA_LABELS.DATE}
                required
              />
            </div>  
            <div className="reservation-form-row">
              <label htmlFor="time" className="reservation-form-time-label">
                <h6>{FORM_LABELS.TIME}</h6>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                aria-label={FORM_ARIA_LABELS.TIME}
                required
              />
            </div>
          </div>
          <div className="reservation-form-row">
            <label htmlFor="guests" className="reservation-form-label">
              <h6>{FORM_LABELS.GUESTS}</h6>
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="reservation-form-guests-input"
              value={formData.guests}
              onChange={handleChange}
              min={FORM_ATTRIBUTES.MIN_GUESTS}
              placeholder={FORM_PLACEHOLDERS.GUESTS}
              aria-label={FORM_ARIA_LABELS.GUESTS}
              required
            />
          </div>
        </div>
        {/* Bedingte Renderung: Fehlermeldung oder Submit-Button */}
        {errors.hasErrors() ? (
          <div className="error error_reservaion">
            <p>{errors.getErrorMessage()}</p>
          </div>
        ) : (
          <button className="custom__button" type="submit" aria-label={FORM_ARIA_LABELS.RESERVE_BUTTON}>
            {FORM_TEXTS.RESERVE_BUTTON}
          </button>
        )}
      </form>
    </div>
  );
};


