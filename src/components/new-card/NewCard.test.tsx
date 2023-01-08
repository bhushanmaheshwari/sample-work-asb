import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NewCardComponent from "./NewCard";

describe("NewCardTest", () => {
  test("on initial render, the add card button is enabled", async () => {
    render(
      <Router>
        <NewCardComponent />
      </Router>
    );
    const addButtonElement = await screen.findByRole("button", {
      name: "Add Credit/Debit Card",
      exact: false,
    });
    expect(addButtonElement).toBeEnabled();
  });
});
