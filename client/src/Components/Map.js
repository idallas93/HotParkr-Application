import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };


  const token = process.env.REACT_APP_GOOGLE_KEY



  return (
    <div>
      <h2> Map of Dog Parks </h2>
      
    <LoadScript
      googleMapsApiKey={token}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}


export default Map

