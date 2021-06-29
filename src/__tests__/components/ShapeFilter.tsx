import * as React from "react";
import { render, screen } from "@testing-library/react";
import ShapeFilter from "../../components/ShapeFilter";
import { ShapeProvider } from "../../context";

test("ShapeFilter rendered properly", () => {
  const Wrapper = () => (
    <ShapeProvider>
      <ShapeFilter />
    </ShapeProvider>
  );

  render(<Wrapper />);
  const h2 = screen.getByText("Shapes");
  const [button] = screen.getAllByTestId("shape-button");

  expect(button.childNodes.length).toBeGreaterThanOrEqual(1);
  expect(h2).toBeInTheDocument();
});
