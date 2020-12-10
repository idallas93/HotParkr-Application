import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

function Header({ state, logout }) {
  const location = useLocation;

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
          <Link
            to="/"
            className={
              location.pathname === "/profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </Link>
          <span onClick={logout}>Logout</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
