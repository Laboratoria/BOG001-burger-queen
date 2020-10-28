import React from "react";
import Card from "./components/Card";
import { WeiterProvider } from "./WeiterContext";
import { render, screen } from "@testing-library/react";


describe("<Tab/>", () => {
  it("should print out Product", () => {
    render(<><WeiterProvider><Card/></WeiterProvider></>);
    const product = screen.getByText(/Agregar/i);
    expect(product).toBeInTheDocument();
  });
});
