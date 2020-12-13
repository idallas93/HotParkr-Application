import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./style.css";
import { useGlobalContext } from "../../context/GlobalContext";
import LocationSearchForm from "../../Components/LocationSearchForm";
import HomeJumbotron from "../../Components/HomeJumbotron";
import CardContainer from "../../Components/CardContainer";
import Map from "../../Components/Map";
import zipcodes from "zipcodes";

function Home() {
  const [state, dispatch] = useGlobalContext();
  const zipRef = useRef();
  const radiusRef = useRef();
  const [center, setCenter] = useState({});

  function updateLocation(position) {
    dispatch({
      type: "SET_LOCATION",
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  }

  const focusCard = (index) => {
    console.log("cardfocus");
    dispatch({
      type: "FOCUS_PARK",
      index: index,
    });
  };

  useEffect(() => {
    // if user isn't logged in, get they're location
    if (!state.apiToken) {
      if (navigator.geolocation) {
        dispatch({ type: "ENABLE_LOCATION" });
        navigator.geolocation.getCurrentPosition(updateLocation);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } else {
      // user is logged in update the location in the state
      const { latitude, longitude } = zipcodes.lookup(state.zipcode);
      setCenter({
        latitude: latitude,
        longitude: longitude,
      });
    }
    loadParkData(1500, state.location.latitude, state.location.longitude);
  }, [state.location]);

  const loadParkData = (radius, latitude, longitude) => {
    // empty parks array in global state
    dispatch({ type: "DELETE_PARKS" });
    // Grab parks info to store in cards
    axios
      .get(`/api/parks/${radius}/${latitude}/${longitude}`, {
        headers: {
          Authorization: `Bearer ${state.apiToken}`,
        },
      })
      .then(({ data }) => {
        //
        data.results.forEach((park) => {
          dispatch({
            type: "ADD_PARK",
            name: park.name,
            latitude: park.geometry.location.lat,
            longitude: park.geometry.location.lng,
            rating: park.rating,
            address: park.vicinity,
            hasPoopBags: true, // TAKE FROM DB
            groundType: "grass", // TAKE FROM DB
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchParks = (e) => {
    e.preventDefault();
    const radius = radiusRef.current.value * 1609;
    const { latitude, longitude } = zipcodes.lookup(zipRef.current.value);
    loadParkData(radius, latitude, longitude);
  };

  console.log("home center", center)

  return (
    <main className="home-main">
      <HomeJumbotron />
      {state.apiToken ?
      <>
      <form className="parkLimits">
        <label htmlFor="zip">Zip-Code:</label>
        <input
          defaultValue={
            state.apiToken
              ? JSON.parse(localStorage.getItem("user")).zipcode
              : ""
          }
          name="zip"
          type="text"
          ref={zipRef}
        />
        <label htmlFor="radius">Radius:</label>
        <input
          type="number"
          name="radius"
          min="0"
          max="30"
          step="0.1"
          ref={radiusRef}
        />
        <button type="submit" onClick={searchParks}>
          Search
        </button>
      </form>
      <div className="mapContainer">
        <Map focusCard={focusCard} center={center} />
      </div>
          <h2>Dog Parks Near You</h2>
          <CardContainer />
        <h3>Geolocation Not Available</h3>
        </>
        : ""
}
    </main>
  );
}

export default Home;
