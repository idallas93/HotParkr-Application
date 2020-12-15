import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";





function Park() {
  const ratingRef = useRef();
  const poopBagRef = useRef();
  const groundTypeRef = useRef();
  const reviewRef = useRef();

  useEffect(() => {
    // if park exists in park collection, pull its info
    renderPark();
  }, []);

  const { id } = useParams();

  const [state, dispatch] = useGlobalContext();
  const [currentPark, setCurrentPark] = useState({
    name: state.parks[id].name,
    rating: "Not Rated Yet",
    address: state.parks[id].location.address,
    parkExists: false,
    groundType: "Not Set Yet",
    hasPoopBags: "Not Known Yet",
    review: [],
  });
  console.log("STATE", currentPark);

  const sendReview = () => {
    const newReview = {
      parkName: currentPark.name,
      address: currentPark.address,
      rating: ratingRef.current.value,
      hasPoopBags: poopBagRef.current.value,
      groundType: groundTypeRef.current.value,
      review: reviewRef.current.value,
    };

    axios
      .post("/api/park", newReview, {
        headers: {
          Authorization: `Bearer ${state.apiToken}`,
        },
      })
      .then((park) => {
        console.log(park);
        alert("Review Sent!");
        renderPark();
      })
      .catch((err) => console.log(err));
  };
  const renderPark = () => {
    axios
      .post(
        "/api/parkInfo",
        { address: state.parks[id].location.address },
        {
          headers: {
            Authorization: `Bearer ${state.apiToken}`,
          },
        }
      )
      .then((result) => {
        if (result) {
          console.log("result", result);
          setCurrentPark({
            ...currentPark,
            parkExists: true,
            rating: result.data.rating,
            ...result.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <center>
      <h2>Additional Park Information</h2>
      </center>
      {state.parks.length ? (
        <>
        <center>
          <Card style={{ width: '30rem' }} className="park">
          <Card.Img variant="top" src="https://photos.bringfido.com/photo/2012/02/07/DSC01954.JPG" />
          <Card.Body>
              <Card.Title className="title">{currentPark.name}</Card.Title>
              <ListGroup className="list-group-flush">     
            <ListGroupItem className="park-info" >
              Address - {currentPark.address}
            </ListGroupItem>
            <ListGroupItem className="park-info">
              Rating - {currentPark.rating} / 5
            </ListGroupItem>
            <ListGroupItem className="park-info">
               Ground Type - {currentPark.groundType}
            </ListGroupItem>
            <ListGroupItem className="park-info">
              Are There poop bags? - {currentPark.hasPoopBags ? "Yes" : "No"}
            </ListGroupItem>
            <ListGroupItem className="park-info">
              {currentPark.reviews ? (
                <>
                  Reviews:
                  {currentPark.reviews.map((review) => (
                    <p className="review">"{review}"</p>
                  ))}
                </>
                ) : (
                  ""
                )
              }
            </ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
          </center>

          <div className="user-info">
            <center>
            <h2>Leave a Review of the park:</h2>
            </center>
            <Form className="review-form">
              <Form.Group className="form-item">
                <Form.Label htmlFor="rating">Rate the park!&nbsp;</Form.Label>
              <Form.Control as ="select" ref={ratingRef} name="rating">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Control>              
                </Form.Group>
              <Form.Group className="form-item">
                <Form.Label htmlFor="hasPoopBags">Are there poop bags?</Form.Label>
                <Form.Control as="select" ref={poopBagRef} name="hasPoopBags">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="form-item">
                <Form.Label htmlFor="groundType">What is the ground type?</Form.Label>
                  <Form.Control as="select" ref={groundTypeRef} name="groundType">
                    <option value="Grass">Grass</option>
                    <option value="Dirt">Dirt</option>
                    <option value="Turf">Turf</option>
                    <option value="Gravel">Gravel</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group className="form-item" controlId="exampleForm.ControlTextarea1">
                <Form.Label htmlFor="review">Write a Review:</Form.Label>
                <br/>
                <textarea ref={reviewRef} name="review"></textarea>
                <br/>
              </Form.Group>
              <Button variant="secondary"  size="lg" className="send-button "
                onClick={(e) => {
                  e.preventDefault();
                  sendReview();
                }}
              >
                Send
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <h1>Park Not Found!</h1>
      )}
    </div>
  );
}

export default Park;
