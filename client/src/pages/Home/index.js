import React, { useEffect } from "react";
import "./style.css";
import { useGlobalContext } from "../../context/GlobalContext";
import LocationSearchForm from "../../Components/LocationSearchForm";
import HomeJumbotron from "../../Components/HomeJumbotron";
import Map from "../../Components/Map";
import CardContainer from "../../Components/CardContainer"



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
      <CardContainer />
    </main>
  );
}

export default Home;
