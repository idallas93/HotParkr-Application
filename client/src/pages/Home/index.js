import React, { useEffect } from "react";
import axios from "axios"
import "./style.css";
import { useGlobalContext } from "../../context/GlobalContext";
import LocationSearchForm from "../../Components/LocationSearchForm";
import HomeJumbotron from "../../Components/HomeJumbotron";
import CardContainer from "../../Components/CardContainer"
import Map from "../../Components/Map"

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

  // Grab parks info to store in cardsgit
  // take distance in miles convert to meters


  
  axios.get("")

  return (
    <main>
      <div>
        <HomeJumbotron/>
      </div>
      <form className="parkLimits">
        <label htmlFor="zip">Zip-Code:</label>
        <input placeholder={localStorage.getItem("zipcode")} name="zip" type="text"></input>
      </form>
      <div className="mapContainer">
        <Map />
      </div>
      { 
        state.locationEnabled ?
        <>
          <h2>Dog Parks Near You</h2>
          <CardContainer />
        </> :
        <h3>Geolocation Not Available</h3>
      }
    </main>
  );
}

export default Home;
