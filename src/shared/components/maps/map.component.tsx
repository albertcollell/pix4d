import React, { useState, useEffect } from "react";
import mapStyles from "../../../common/maps.config.json";
import "./map.component.scss";
import Menu from "../menu/menu.component";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import { IFlightPlan, IPath } from '../../../core/models/path';
import { ICoordinates } from "../../../core/models/coordinates";

export default function Map(props: {
  selectedPath: IFlightPlan;
  setFlightPlans: Function;
}) {
  const { selectedPath, setFlightPlans } = props;
  const [recordOn, setRecord] = useState<boolean>(false);
  const [newPath, setNewPath] = useState<ICoordinates>([]);
  const [cursor, setCursor] = useState<string>("default");

  useEffect(() => {
    recordOn ? setCursor("crosshair") : setCursor('default')
  },[recordOn]);

  const defaultMapOptions = {
    styles: mapStyles,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    draggableCursor: cursor,
  };

  const getCoordinates = (event: any) => {
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    recordOn && setNewPath([...newPath, point]);
  };

  return (
    <LoadScript
      id="map-script-loader"
      googleMapsApiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
    >
      <GoogleMap
        data-test="map"
        mapContainerStyle={{ width: "100%", height: "90vh" }}
        zoom={17}
        center={{ lat: 46.529724, lng: 6.600819 }}
        onClick={getCoordinates}
        options={defaultMapOptions}
      >
        {/* Painting Polylines of Paths already created */}
        {selectedPath && (
          <Polyline
            path={selectedPath.path.map((coordinates: IPath) => coordinates)}
          />
        )}
        {/* Start recording the new polyline and display it in the map */}
        {recordOn && <Polyline path={newPath} />}
        <Menu
          setRecord={setRecord}
          setNewPath={setNewPath}
          setFlightPlans={setFlightPlans}
          newPath={newPath}
        />
        <div></div>
      </GoogleMap>
    </LoadScript>
  );
}
