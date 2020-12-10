import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';




function LocationSearchForm() {
  return (
    
    <Form>
    <Row>
      <Col>
        <Form.Control placeholder="Search for dog park" />
      </Col>
      <Col>
        <Form.Control placeholder="location" />
      </Col>
      <Col>
      <Button variant="primary">Search</Button>{' '}
      </Col>
    </Row>
  </Form>
  );
}

export default LocationSearchForm;