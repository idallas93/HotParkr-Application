import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import LocationSearchForm from "../LocationSearchForm";
import "./style.css";
import dogpark from "./dogpark.png";
import { useGlobalContext } from "../../context/GlobalContext";
import { Link, useLocation } from "react-router-dom";


function HomeJumbotron() {
  const location = useLocation;
  const [state, dispatch] = useGlobalContext();
  return (
    <Jumbotron id="jumbotron-home">
      <div className="main-image">
      <img src={dogpark} alt="dogpark"className="dog-park-iamge" style={{width: "100%"}}/>
      <h1><span>
        Find your dog park community 
        </span>
        <br/>
        <span className="button-span">
          { !state.apiToken ? 
          <Link
          id="signup"
          to="/signup"
          className={
            location.pathname === "/signup"
              ? "nav-link active"
              : "nav-link"
          }> 
        <Button variant="primary" className="join-button">Join HotParkr</Button>
        </Link>
        : ""
          }
        </span>
        </h1>
        
      </div>
    </Jumbotron>
  );
}

export default HomeJumbotron;
