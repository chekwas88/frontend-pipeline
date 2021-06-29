import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useSessionStorage from "../../hooks/useSessionStorage";

function UseSessionStorageComponent() {
  const { token, login, logOut } = useSessionStorage();
  return (
    <div>
      <div>Auth: {token ? "logout" : "login"}</div>

      {token ? (
        <button onClick={logOut}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
}

test("exposes the token, login and logout function", () => {
  render(<UseSessionStorageComponent />);
  const loginButton = screen.getByRole("button", { name: /login/i });
  const display = screen.getByText(/auth/i);

  userEvent.click(loginButton);
  expect(display).toHaveTextContent("Auth: logout");

  const logoutButton = screen.getByRole("button", { name: /logout/i });
  const display2 = screen.getByText(/auth/i);
  userEvent.click(logoutButton);
  expect(display2).toHaveTextContent("Auth: login");
});
