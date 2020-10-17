import React, { useState } from "react";
import "./map.component.scss";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Button from '@material-ui/core/Button';

export default function Map() {
  const [newPath, setNewPath] = useState('')

  return (
    <LoadScript
      id="map-script-loader"
      googleMapsApiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
    > 
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "90vh" }}
        zoom={17}
        center={{ lat: 46.529724, lng: 6.600819 }}
      >
        <Button variant="contained" color="primary" className='button'>
          Create a Flight Plan
        </Button>
      </GoogleMap>
    
    </LoadScript>
  );
}
