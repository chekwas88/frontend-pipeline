import * as React from "react";
import { render, screen } from "@testing-library/react";
import ColorFilter from "../../components/ColorFilter";
import { ShapeProvider } from "../../context";

test("Colorfilter rendered properly", () => {
  const Wrapper = () => (
    <ShapeProvider>
      <ColorFilter />
    </ShapeProvider>
  );

  render(<Wrapper />);
  const h2 = screen.getByText("Colors");
  const [button] = screen.getAllByTestId("color-filter");

  expect(button.childNodes.length).toBeGreaterThanOrEqual(1);
  expect(h2).toBeInTheDocument();
});
