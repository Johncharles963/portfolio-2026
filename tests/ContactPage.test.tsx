import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";
import { ContactPage } from "../app/components/ContactPage/ContactPage";

vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn(),
  },
}));

const sendForm = vi.mocked(emailjs.sendForm);

describe("ContactPage", () => {
  beforeEach(() => {
    sendForm.mockReset();
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "service-test");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "template-test");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "public-test");
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("associates each visible label with its form field", () => {
    render(<ContactPage />);

    expect(screen.getByLabelText("Your Name")).toHaveAttribute("name", "name");
    expect(screen.getByLabelText("Your Name")).toHaveAttribute("autocomplete", "name");
    expect(screen.getByLabelText("Email Address")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Message")).toHaveAttribute("name", "message");
  });

  it("announces validation errors without sending invalid form data", () => {
    render(<ContactPage />);
    const form = screen.getByRole("button", { name: "Submit" }).closest("form");
    if (!form) throw new Error("Contact form was not rendered.");

    fireEvent.change(screen.getByLabelText("Your Name"), { target: { value: "  " } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "person@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello there" } });
    fireEvent.submit(form);

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid name.");
    expect(sendForm).not.toHaveBeenCalled();
  });

  it("sends valid form data and announces success", async () => {
    sendForm.mockResolvedValue({ status: 200, text: "OK" });
    render(<ContactPage />);
    const form = screen.getByRole("button", { name: "Submit" }).closest("form");
    if (!form) throw new Error("Contact form was not rendered.");

    fireEvent.change(screen.getByLabelText("Your Name"), { target: { value: "John Charles" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello, I would like to connect." } });
    fireEvent.submit(form);

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thank you! Your message has been sent successfully.",
    );
    expect(sendForm).toHaveBeenCalledWith(
      "service-test",
      "template-test",
      form,
      "public-test",
    );
    expect(screen.getByLabelText("Your Name")).toHaveValue("");
    expect(screen.getByLabelText("Email Address")).toHaveValue("");
    expect(screen.getByLabelText("Message")).toHaveValue("");
  });

  it("announces a send failure", async () => {
    sendForm.mockRejectedValue(new Error("Email service unavailable"));
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    render(<ContactPage />);
    const form = screen.getByRole("button", { name: "Submit" }).closest("form");
    if (!form) throw new Error("Contact form was not rendered.");

    fireEvent.change(screen.getByLabelText("Your Name"), { target: { value: "John Charles" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello, I would like to connect." } });
    fireEvent.submit(form);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Failed to send message. Please try again later or email me directly.",
    );
  });
});
