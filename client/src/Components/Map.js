import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useGlobalContext } from "../context/GlobalContext";
require("dotenv").config();
function Map({ focusCard, center }) {
  const [state, dispatch] = useGlobalContext();

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  console.log("center", center)

  const centerCoords = {
    lat: center.latitude,
    lng: center.longitude
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const token = process.env.REACT_APP_GOOGLE_KEY;

  return (
    <div>
      <h2> Map of Dog Parks </h2>

      <LoadScript googleMapsApiKey={token}>
        <GoogleMap mapContainerStyle={containerStyle} center={centerCoords} zoom={10}>
          {/* map over array of parks and return a marker for each */}
          {state.parks.map((park, index) => {
            const position = {
              lat: park.location.latitude,
              lng: park.location.longitude,
            };
            
            return (
              <Marker
                onLoad={onLoad}
                position={position}
                label={park.name}
                onClick={() => focusCard(index)}
              />
            );
          })}
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
