import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';




function HomeJumbotron() {
  return (
    
    <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  );
}

export default HomeJumbotron;