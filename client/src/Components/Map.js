import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Map() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 39.660355,
    lng: -105.598137
  };

  const position = {
    lat: 39.660355,
    lng: -105.598137
  };

  const onLoad = marker => {
    console.log('marker: ',  marker)
  }


  const token = process.env.REACT_APP_GOOGLE_KEY;

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
         <Marker
      onLoad={onLoad}
      position={position}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}


export default Map

