import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useGlobalContext } from "../context/GlobalContext";
function Header({ state, logout }) {
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
          <Link
            to="/"
            className={
              location.pathname === "/profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </Link>
          <Link
            to="/signup"
            className={
              location.pathname === "/signup" ? "nav-link active" : "nav-link"
            }
          >
            Sign up
          </Link>
          <span onClick={logout}>Logout</span>
        </li>
      </ul>
    </nav>

  );
}

export default Header;

