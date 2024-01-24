import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import CandidateRegistration from "../components/CandidateRegistration";
import App from "../App";

describe("Home Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("renders without crashing", () => {
    // Test if Home component renders without crashing
  });

  it('displays the "Register Candidate" and "List Candidates" buttons', () => {
    // Test if "Register Candidate" and "List Candidates" buttons are displayed
    expect(screen.getByText("Register Candidate")).toBeInTheDocument();
    expect(screen.getByText("List Candidates")).toBeInTheDocument();
  });

  it("should contain a specific CSS style for home element", () => {
    // Test if home element has a specific CSS style applied
    const homeElement = screen.getByTestId("home-component");
    expect(homeElement).toHaveStyle("textAlign:center");
  });
});

describe("Navbar Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it("ensures the header title is set to 'Job Portal'", () => {
    // Test if header title is set to 'Job Portal'
    expect(
      screen.getByTestId("header-title", { name: "Job Portal" })
    ).toBeInTheDocument();
  });
});

describe("CandidateRegistration Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/candidate/registration"]}>
        <CandidateRegistration />
      </MemoryRouter>
    );
  });

  it("checks that the Registration form is rendered with the correct fields", () => {
    // Test if Registration form is rendered with the correct fields
    expect(screen.getByTestId("submit-btn")).toBeInTheDocument();
    expect(screen.getByTestId("reset-btn")).toBeInTheDocument();
    expect(screen.getByTestId("add-btn")).toBeInTheDocument();

    // Check HTML element types
    expect(screen.getByTestId("form-input-name").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-email").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-role").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-skill").tagName).toBe("INPUT");
    expect(screen.getByTestId("submit-btn").tagName).toBe("BUTTON");
    expect(screen.getByTestId("reset-btn").tagName).toBe("BUTTON");
    expect(screen.getByTestId("add-btn").tagName).toBe("BUTTON");
  });
});
