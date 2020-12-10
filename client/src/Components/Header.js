import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useGlobalContext } from "../context/GlobalContext";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Row from 'react-bootstrap/Row';

function Header({ logout }) {
  const location = useLocation;
  const [state, dispatch] = useGlobalContext();
  return (
    <Navbar>
    <Nav className="Navbar">
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
    </Nav>
    </Navbar>
  );
}

export default Header;
