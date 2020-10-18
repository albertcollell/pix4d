import React, { useState } from "react";
import "./map.component.scss";
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import UndoIcon from '@material-ui/icons/Undo';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { GoogleMap, LoadScript, Polyline,Marker, InfoWindow,} from "@react-google-maps/api";

interface ICoordinate {
  lat: number;
  lng: number;
}

interface ICoordinates extends Array<ICoordinate> {};

export default function Map(props: {selectedPath: any, setFlightPlans: Function}) {
  const { selectedPath, setFlightPlans } = props;

  const [recordOn, setRecord] = useState<boolean>(false)
  const [newPath, setNewPath] = useState<ICoordinates>([])
  const [disable, setDisable] = useState<boolean>(true)

  const readCoordinates = (event: any) => {
    const point = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    recordOn && (setNewPath([...newPath, point]))
    newPath.length > 1 && setDisable(false)
  }

  const onClickAdd = () => {
    setDisable(false)
    setRecord(true)
  }
  
  const onClickSave = () => {
    setDisable(true)
    setRecord(false)
    setFlightPlans(newPath)
  }

  const onClickErase = () => {
    setNewPath([])
  }

  const onClickUndo = () => {
    setNewPath(newPath.slice(0,-1))
  }

  
  return (
    <LoadScript
      id="map-script-loader"
      googleMapsApiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
    > 
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "90vh" }}
        zoom={17}
        center={{ lat: 46.529724, lng: 6.600819 }}
        onClick={readCoordinates}
      >
      <div className="menu">
        <Fab color="primary" aria-label="add" disabled={!disable} onClick={onClickAdd}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="undo" disabled={disable} onClick={onClickUndo}>
          <UndoIcon />
        </Fab>
        <Fab color="secondary" aria-label="Save" disabled={disable} onClick={onClickSave}> 
          <SaveIcon />
        </Fab>
        <Fab color="secondary" aria-label="Delete" disabled={disable} onClick={onClickErase}>
          <DeleteIcon />
        </Fab>
      </div>
      {selectedPath && 
         <Polyline path={selectedPath.path.map((coordinates:any) => coordinates.coordinates)} />}
      {console.log(newPath)}
      {recordOn && <Polyline path={newPath}  />}
      </GoogleMap>
    </LoadScript>
  );
}
