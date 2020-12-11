import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "../LoginForm";
import { useGlobalContext } from "../../context/GlobalContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./style.css";

function Header({ logout }) {
  const location = useLocation;
  const [state, dispatch] = useGlobalContext();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HotParkr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
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
                to="/profile"
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
