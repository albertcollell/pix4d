import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import mapStyles from '../../../common/maps.config.json';
import "./map.component.scss";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import UndoIcon from "@material-ui/icons/Undo";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
  
} from "@react-google-maps/api";
import { IFlightPlans } from "../../../core/models/path";

interface ICoordinate {
  lat: number;
  lng: number;
}

interface ICoordinates extends Array<ICoordinate> {}

export default function Map(props: {
  selectedPath: any;
  setFlightPlans: Function;
}) {
  const { selectedPath, setFlightPlans } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [recordOn, setRecord] = useState<boolean>(false);
  const [newPath, setNewPath] = useState<ICoordinates>([]);
  const [disable, setDisable] = useState<boolean>(true);
  const [planName, setPlanName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [cursor, setCursor] = useState<string>('default')

  const defaultMapOptions = {
    styles: mapStyles,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    draggableCursor: cursor
    
  };

  const readCoordinates = (event: any) => {
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    recordOn && setNewPath([...newPath, point]);
    newPath.length > 1 && setDisable(false);
  };

  const onClickAdd = () => {
    setDisable(false);
    setRecord(true);
    setCursor('crosshair')
  };

  const onClickSave = () => {
    setDisable(true);
    setRecord(false);
    handleClickOpen();
    setCursor('default')
  };

  const onClickErase = () => {
    setNewPath([]);
    setDisable(!disable);
    setCursor('default')
  };

  const onClickUndo = () => {
    setNewPath(newPath.slice(0, -1));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setFlightPlans((prevState: IFlightPlans) => [
      ...prevState,
      {
        planId: prevState.length + 1,
        planName: planName,
        description: description,
        timeStamp: new Date(),
        category: category,
        path: newPath,
      },
    ]);
    setOpen(false);
    setNewPath([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClickErase();
  };

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
        options={defaultMapOptions}
  
      >
        {/* Painting Polylines of Paths already created */}
        {selectedPath && (
          <Polyline
            path={selectedPath.path.map((coordinates: any) => coordinates)}
          />
        )}

        {/* Start recording the new polyline and display it in the map */}
        {recordOn && <Polyline path={newPath} />}

        {/* Menu on the top of the map to start recording and do some actions with the polyline that we are creating. (Add, Undo, Save, Delete)*/}
        <div className="menu">
          <Fab
            color="primary"
            aria-label="add"
            disabled={!disable}
            onClick={onClickAdd}
          >
            <AddIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="undo"
            disabled={disable}
            onClick={onClickUndo}
          >
            <UndoIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="Save"
            disabled={disable}
            onClick={onClickSave}
          >
            <SaveIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="Delete"
            disabled={disable}
            onClick={onClickErase}
          >
            <DeleteIcon />
          </Fab>
        </div>
        {/* Dialog that opens when you press Save button. A name, a category and a description are asked */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <form>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="title"
                type="name"
                fullWidth
                required
                onChange={(event) => setPlanName(event.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="category"
                label="category"
                type="name"
                fullWidth
                required
                onChange={(event) => setCategory(event.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="description"
                type="name"
                fullWidth
                required
                onChange={(event) => setDescription(event.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Delete
              </Button>
              <Button onClick={onSubmit} type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </GoogleMap>
    </LoadScript>
  );
}
