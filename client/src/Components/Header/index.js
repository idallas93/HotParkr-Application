import 'bootstrap/dist/css/bootstrap.min.css';
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
import Image from "react-bootstrap/Image";
import navlogo from "./navlogo.png";


import "./style.css";

function Header({ logout }) {
  const location = useLocation;
  const [state, dispatch] = useGlobalContext();
  return (
    <Navbar id="brand-text" bg="light" expand="lg">
      <Navbar.Brand  href="/">
      <Image
        src={navlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt=""
        style={
          {
            marginLeft: "5px",
            marginRight: "5px",
            // marginTop: "15px"
          }
        }
      />
        
        HotParkr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Link
            id="home"
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <Button className="header-button" variant="outline-secondary">
            Home
            </Button>
          </Link>
          {state.apiToken ? (
            <>
              <Link
                id="profile"
                to="/profile"
                className={
                  location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <Button className="profile-button"  variant="outline-secondary">
                Profile
                </Button>
              </Link>
              <Button className="logout-button" onClick={logout} variant="outline-secondary">Log out</Button>
            </>
          ) : (
            <>
              <Link
                id="signup"
                to="/signup"
                className={
                  location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <Button className="header-button" variant="outline-secondary">
                Sign up
                </Button>
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
