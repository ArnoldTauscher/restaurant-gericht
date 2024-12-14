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
