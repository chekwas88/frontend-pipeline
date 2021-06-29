import * as React from "react";
import useSessionStorage from "../hooks/useSessionStorage";

export default function Header() {
  const { logOut, login, token } = useSessionStorage();
  return (
    <header className="header">
      <div className="header__item">
        <div>
          <h2>Shapes</h2>
        </div>
        <div>
          {token ? (
            <button
              data-testid="auth-button"
              className="logout"
              onClick={logOut}
            >
              Logout
            </button>
          ) : (
            <button data-testid="auth-button" onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
