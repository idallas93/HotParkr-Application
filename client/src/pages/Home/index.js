import React, { useEffect } from "react";
import "./style.css";
import { useGlobalContext } from "../../context/GlobalContext";
import ParkCard from "../../Components/ParkCard/";
import LocationSearchForm from "../../Components/LocationSearchForm";
import HomeJumbotron from "../../Components/HomeJumbotron";
import Signup from "../../pages/Signup";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Map from "../../Components/Map";



function Home() {

  const [state, dispatch] = useGlobalContext();

  function updateLocation(position) {
    dispatch({
      type: "SET_LOCATION",
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    })
    console.log("positiion", position.coords)
  }

  useEffect(() => {
    // if user isn't logged in, get they're location
    if (!state.apiToken) {
      if (navigator.geolocation) {
      dispatch({ type: "ENABLE_LOCATION"})
      navigator.geolocation.getCurrentPosition(updateLocation);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
    }

  }, [])

  return (
    <main>
      <div>
        <HomeJumbotron/>
        <Map/>
      </div>
      <div>
        <LocationSearchForm/>
      </div>
      <h2>Dog Parks Near You</h2>
      <div className="card-container">
        <CardGroup>
        <ParkCard />
        <ParkCard />
        <ParkCard />
        <ParkCard />
        </CardGroup>
      </div>
    </main>
  );
}

export default Home;
