import * as React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";

test("shape rendered properly", () => {
  const shapeProps = {
    name: "Rectangle",
    shape: "rect",
    props: {
      x: 0,
      y: 0,
      width: "180px",
      height: "100px",
      fill: "blue",
      stroke: "blue",
    },
  };

  render(<Card shapeProps={shapeProps} />);
  const [svg] = screen.getAllByTestId("svgshape");
  const rect = svg.firstChild;
  expect(svg).toBeInTheDocument();

  expect(svg).toContainElement(rect);
});
