import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useGlobalContext } from "../context/GlobalContext";
function Header({ logout }) {
  const location = useLocation;
  const [state, dispatch] = useGlobalContext();
  return (
    <nav className="Navbar">
      <ul className="navlinks">
        <li className="link">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
          {state.apiToken ? (
            <>
              <Link
                to="/"
                className={
                  location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Profile
              </Link>
              <button onClick={logout}>Log out</button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className={
                  location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign up
              </Link>
              <LoginForm />
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
