import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Navlinks } from "../app/components/NavBar/Navlinks";

describe("Navlinks", () => {
  it("provides a labeled navigation landmark and marks the current page", () => {
    render(
      <MemoryRouter initialEntries={["/resume"]}>
        <Navlinks />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });
});
