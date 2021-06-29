import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("Header rendered properly", async () => {
  render(<Header />);
  //   console.log(prettyDOM(Header));
  const h2 = screen.getByText("Shapes");
  const button = await screen.findByTestId("auth-button");
  expect(h2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
