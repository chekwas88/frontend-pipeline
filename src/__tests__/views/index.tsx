import * as React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../views";
import { ShapeProvider } from "../../context";

test("ShapeFilter rendered properly", () => {
  const Wrapper = () => (
    <ShapeProvider>
      <Home />
    </ShapeProvider>
  );

  render(<Wrapper />);
  const h2 = screen.getByText("Filters");
  expect(h2).toBeInTheDocument();
});
