import React, { useEffect, useRef } from "react";
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

  function updateLocation(position) {
    dispatch({
      type: "SET_LOCATION",
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  }

  useEffect(() => {
    // if user isn't logged in, get they're location
    if (!state.apiToken) {
      if (navigator.geolocation) {
        dispatch({ type: "ENABLE_LOCATION" });
        navigator.geolocation.getCurrentPosition(updateLocation);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    loadParkData(1500, start.latitude, start.longitude);
  }, [state.location]);

  const start = {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
  };
  const loadParkData = (radius, latitude, longitude) => {
    // Grab parks info to store in cardsgit
    // take distance in miles convert to meters
    axios
      .get(`/api/parks/${radius}/${latitude}/${longitude}`, {
        headers: {
          Authorization: `Bearer ${state.apiToken}`,
        },
      })
      .then(({ data }) => {
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
  }

  return (
    <main>
      <div>
        <HomeJumbotron />
      </div>
      <form className="parkLimits">
        <label htmlFor="zip">Zip-Code:</label>
        <input
          placeholder={state.apiToken ? JSON.parse(localStorage.getItem("user")).zipcode : ""}
          name="zip"
          type="text"
          ref={zipRef}
        />
        <label htmlFor="radius">Radius:</label>
        <input type="number" name="radius" min="0" max="30" step="0.1" ref={radiusRef} />
        <button type="submit" onClick={searchParks}>Search</button>
      </form>
      <div className="mapContainer">
        <Map />
      </div>
      {state.locationEnabled ? (
        <>
          <h2>Dog Parks Near You</h2>
          <CardContainer />
        </>
      ) : (
        <h3>Geolocation Not Available</h3>
      )}
    </main>
  );
}

export default Home;
