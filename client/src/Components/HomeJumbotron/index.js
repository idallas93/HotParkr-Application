import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import LocationSearchForm from '../LocationSearchForm'




function HomeJumbotron() {
  return (
    
    <Jumbotron>
    <h1>Find your dog park community</h1>
    <p>
      <Button variant="primary">Join HotParkr</Button>
    </p>
    <div>
      <LocationSearchForm/>
    </div>
  </Jumbotron>
  );
}

export default HomeJumbotron;