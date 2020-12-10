import React, { Component } from 'react';
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

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA-AgolSeiosJ4Omj2LdGw_wgdwmUas9A8"
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
  )
}


export default Map