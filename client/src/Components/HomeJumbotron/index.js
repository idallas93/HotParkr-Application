import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import LocationSearchForm from "../LocationSearchForm";
import "./style.css";
import dogpark from "./dogpark.png";

function HomeJumbotron() {
  return (
    <Jumbotron>
      <img src={dogpark} alt="dogpark"className="dog-park-iamge"/>
      <h1 className="jumbo-header">Find your dog park community</h1>
      <p className="jumbo-paragraph">
        <Button variant="primary">Join HotParkr</Button>
      </p>
    </Jumbotron>
  );
}

export default HomeJumbotron;
