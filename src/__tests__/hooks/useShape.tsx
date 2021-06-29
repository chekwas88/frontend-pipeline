import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useShape } from "../../hooks/useShape";

function UseShapeComponent() {
  const { title, handleColorFilter, handleShapeFilter } = useShape();
  return (
    <div>
      <div>Title: {title}</div>

      <button onClick={() => handleColorFilter("red")}>redbutton</button>

      <button onClick={() => handleColorFilter("blue")}>bluebutton</button>
      <button onClick={() => handleShapeFilter("oval")}>ovalbutton</button>
      <button onClick={() => handleShapeFilter("square")}>squarebutton</button>
    </div>
  );
}

test("exposes some states and state updaters ", () => {
  render(<UseShapeComponent />);
  const redbutton = screen.getByRole("button", { name: /redbutton/i });
  const display = screen.getByText(/title/i);

  userEvent.click(redbutton);
  expect(display).toHaveTextContent("Title: All red Items");

  const ovalButton = screen.getByRole("button", { name: /ovalbutton/i });
  const display2 = screen.getByText(/title/i);

  userEvent.click(ovalButton);
  expect(display2).toHaveTextContent("Title: red oval Items");

  //   const logoutButton = screen.getByRole("button", { name: /logout/i });
  //   const display2 = screen.getByText(/auth/i);
  //   userEvent.click(logoutButton);
  //   expect(display2).toHaveTextContent("Auth: login");
});
