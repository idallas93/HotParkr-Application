import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useGlobalContext } from "../context/GlobalContext";
require("dotenv").config();
function Map() {
  const [state, dispatch] = useGlobalContext();

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: parseFloat(state.location.latitude),
    lng: parseFloat(state.location.longitude),
  };

  const position = {
    lat: parseFloat(state.location.latitude),
    lng: parseFloat(state.location.longitude),
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const token = process.env.REACT_APP_GOOGLE_KEY;

  return (
    <div>
      <h2> Map of Dog Parks </h2>

      <LoadScript googleMapsApiKey={token}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* map over array of parks and return a marker for each */}
          <Marker onLoad={onLoad} position={position} label="label"/>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
