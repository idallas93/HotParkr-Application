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

  const baseUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.744278,%20-73.897679&radius=15000&type=park&keyword=dog"
  const url = baseUrl + "&key=" + process.env.REACT_APP_GOOGLE_KEY
  axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.744278,%20-73.897679&radius=15000&type=park&keyword=dog&key=AIzaSyARiixZLdzs9ezqt8-ZxkRCnZAgLnjh32w").then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })

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
