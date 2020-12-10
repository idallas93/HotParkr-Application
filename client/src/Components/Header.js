import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import Nav from "react-bootstrap/Button";

function Header({ state, logout }) {
  const location = useLocation;

  return (
    <Nav
      className="Navbar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        
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
        </li>
        <li>
          {state.apiToken ? (
            <>
              <p>{state.message}</p>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <LoginForm />
          )}
        </li>
      </ul>
    </Nav>
  );
}

export default Header;


