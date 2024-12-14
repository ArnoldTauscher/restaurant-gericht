import { useState } from "react";
import { createHandleChange, useFormValidation, createSubmitHandler } from "../../utils/formUtils";
import {
  NEWSLETTER_TEXTS,
  FORM_TEXTS,
  FORM_PLACEHOLDERS,
  FORM_ARIA_LABELS
} from "../../constants";
import { SubHeading } from "../SubHeading/SubHeading";
import "./Newsletter.css";

export const Newsletter = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [subscribe, setSubscribe] = useState(false);
  const { validateForm, errors, clearErrors } = useFormValidation();

  const handleChange = (e) => {
    createHandleChange(setFormData)(e);
    clearErrors(); // Fehler löschen, wenn der Benutzer beginnt zu tippen
  };

  const handleSubmit = createSubmitHandler(
    (formData) => validateForm(formData, true), // Hier true für isNewsletter
    FORM_TEXTS.SUBSCRIPTION_API_ENDPOINT,
    (data) => {
      console.log(FORM_TEXTS.SUCCESS_LOG, data);
      setSubscribe(true);
      setFormData({ email: "" });
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

  const getInputStyle = () => {
    return {
      color: errors.hasErrors() ? "red" : "white",
    };
  };

  return (
    <div className="newsletter">
      <div className="newsletter-heading">
        <SubHeading title={NEWSLETTER_TEXTS.NEWSLETTER_SUBTITLE} />
        <h1 className="headtext__cormorant">{NEWSLETTER_TEXTS.NEWSLETTER_HEADING}</h1>
        <p className="p__opensans">{NEWSLETTER_TEXTS.NEWSLETTER_SUBTEXT}</p>
      </div>
      <div className="newsletter-content">
        <form className="newsletter-input flex__center" onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={FORM_PLACEHOLDERS.EMAIL}
            aria-label={FORM_ARIA_LABELS.EMAIL}
            style={getInputStyle()}
          />
          <button type="submit" className="custom__button" aria-label={FORM_ARIA_LABELS.SUBSCRIBE_BUTTON}>
            {FORM_TEXTS.SUBSCRIBE_BUTTON}
          </button>
        </form>
        {errors.hasErrors() && (<p className="error">{errors.email ? errors.email : errors.getErrorMessage()}</p>)}
        {subscribe && <p className="success-message">{FORM_TEXTS.SUBSCRIPTION_SUCCESS}</p>}
      </div>
    </div>
  );
};


