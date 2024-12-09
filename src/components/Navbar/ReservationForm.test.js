import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReservationForm } from "./ReservationForm";
import { STRINGS } from "./constants";

// Mock des Custom Hooks
jest.mock("../../utils/useReservationValidation", () => ({
  useReservationValidation: () => ({
    validateForm: jest.fn(() => ({})),
    errors: {
      hasErrors: jest.fn(() => false),
      getErrorMessage: jest.fn(),
      setSubmissionError: jest.fn(),
    },
  }),
}));

// Mock der fetch-Funktion
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: "123" }),
  })
);

describe("ReservationForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders ReservationForm component", () => {
    render(<ReservationForm />);
    expect(screen.getByText(STRINGS.IMPORTANT_INFO)).toBeInTheDocument();
    expect(screen.getByText(STRINGS.RESERVATION_RULES)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-Mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Datum:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Uhrzeit:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Anzahl Gäste:/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: STRINGS.RESERVE_BUTTON })
    ).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    render(<ReservationForm />);

    fireEvent.change(screen.getByLabelText(/Name:/i), {
      target: { value: "Max Mustermann" },
    });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), {
      target: { value: "max@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Datum:/i), {
      target: { value: "2024-12-01" },
    });
    fireEvent.change(screen.getByLabelText(/Uhrzeit:/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/Anzahl Gäste:/i), {
      target: { value: "4" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: STRINGS.RESERVE_BUTTON })
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      STRINGS.API_ENDPOINT,
      expect.any(Object)
    );

    expect(global.fetch.mock.calls[0][1].body).toContain("Max Mustermann");
    expect(global.fetch.mock.calls[0][1].body).toContain("max@example.com");
    expect(global.fetch.mock.calls[0][1].body).toContain("2024-12-01");
    expect(global.fetch.mock.calls[0][1].body).toContain("12:00");
    expect(global.fetch.mock.calls[0][1].body).toContain("4");
  });

  test("displays error message when form submission fails", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("API Error"))
    );

    render(<ReservationForm />);

    fireEvent.click(
      screen.getByRole("button", { name: STRINGS.RESERVE_BUTTON })
    );

    await waitFor(() => {
      expect(screen.getByText(STRINGS.SUBMISSION_ERROR)).toBeInTheDocument();
    });
  });

  test("displays validation error when form is invalid", async () => {
    const mockValidateForm = jest.fn(() => ({ email: STRINGS.INVALID_EMAIL }));
    jest.mock("./useReservationValidation", () => ({
      useReservationValidation: () => ({
        validateForm: mockValidateForm,
        errors: {
          hasErrors: () => true,
          getErrorMessage: () => STRINGS.INVALID_EMAIL,
          setSubmissionError: jest.fn(),
        },
      }),
    }));

    render(<ReservationForm />);

    fireEvent.click(
      screen.getByRole("button", { name: STRINGS.RESERVE_BUTTON })
    );

    await waitFor(() => {
      expect(screen.getByText(STRINGS.INVALID_EMAIL)).toBeInTheDocument();
    });
  });
});
