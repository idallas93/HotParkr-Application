import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import "./style.css"

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
      {state.parks.length ? (
        <>
          <div className="park">
            <div className="title">
              <h1>{currentPark.name}</h1>
            </div>
            <div className="park-info">
              <h2>Address: {currentPark.address}</h2>
            </div>
            <div className="park-info">
              <h2>Rating: {currentPark.rating} / 5</h2>
            </div>
            <div className="park-info">
              <h2>Ground Type: {currentPark.groundType}</h2>
            </div>
            <div className="park-info">
              <h2>Are There poop bags: {currentPark.hasPoopBags ? "Yes" : "No"}</h2>
            </div>
            <div className="park-info">
              {currentPark.reviews ? (
                <>
                  <h2>Reviews</h2>
                  {currentPark.reviews.map((review) => (
                    <p className="review">"{review}"</p>
                  ))}
                </>
                ) : (
                  ""
                )
              }
            </div>
          </div>

          <div className="user-info">
            <h2>Leave a Review of the park:</h2>
            <form>
              <div className="form-item">
                <label htmlFor="rating">Rate the park!&nbsp;</label>
              <select ref={ratingRef} name="rating">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              </div>
              <div className="form-item">
                <label htmlFor="hasPoopBags">Are there poop bags?</label>
                <select ref={poopBagRef} name="hasPoopBags">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="groundType">What is the ground type?</label>
                  <select ref={groundTypeRef} name="groundType">
                    <option value="Grass">Grass</option>
                    <option value="Dirt">Dirt</option>
                    <option value="Turf">Turf</option>
                    <option value="Gravel">Gravel</option>
                  </select>
              </div>
              <div className="form-item">
                <label htmlFor="review">Write a Review:</label>
                <br />
                <textarea ref={reviewRef} name="review"></textarea>
              </div>
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  sendReview();
                }}
              >
                Send
              </button>
            </form>
          </div>
        </>
      ) : (
        <h1>Park Not Found!</h1>
      )}
    </div>
  );
}

export default Park;
