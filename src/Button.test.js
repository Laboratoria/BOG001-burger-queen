import React from "react";
import Card from "./components/Card";
import { render, screen } from "@testing-library/react";


describe("<NewOrder/>", () => {
  it("should print out Product", () => {
    render(<Card />);
    const product = screen.getByText(/Agregar/i);
    expect(product).toBeInTheDocument();
  });
});
