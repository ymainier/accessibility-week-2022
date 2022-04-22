import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./app";
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

describe("App", () => {
  it("should render the schedule without accessibility violation", async () => {
    render(<App />);
    expect(screen.getByText(/accessibility week 2022/i)).toBeInTheDocument();
    expect(
      screen.getByRole("table", { name: /schedule/i })
    ).toBeInTheDocument();

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it("should render an event detail without accessibility violation", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /keynote/i }));

    expect(
      screen.getByText(/accessibility week 2022 keynote by/i)
    ).toBeInTheDocument();

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
