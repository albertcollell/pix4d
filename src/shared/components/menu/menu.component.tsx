import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import UndoIcon from "@material-ui/icons/Undo";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import moment from 'moment';
import "./menu.component.scss";

import { IFlightPlans } from "../../../core/models/path";
import { ICoordinates } from "../../../core/models/coordinates";

export default function Menu(props: {
  setRecord: Function;
  setNewPath: Function;
  setFlightPlans: Function;
  newPath: ICoordinates;
}) {
  const { setRecord, setNewPath, setFlightPlans, newPath } = props;
  const [disable, setDisable] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [planName, setPlanName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const onClickAdd = () => {
    setDisable(false);
    setRecord(true);
  };

  const onClickSave = () => {
    setRecord(false);
    handleClickOpen();
  };


  const onClickErase = () => {
    setNewPath([]);
    setDisable(!disable);
    setRecord(false);
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
        timeStamp: moment().format("YYYY-MM-DD HH:mm:ss"),
        category: category,
        path: newPath,
      },
    ]);
    setOpen(false);
    setNewPath([]);
    setDisable(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClickErase();
  };

  return (
    <div className="menu">
      <Fab
        color="primary"
        aria-label="add"
        disabled={!disable}
        onClick={onClickAdd}
        className="button"
        data-test='add button'
      >
        <AddIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="undo"
        disabled={disable}
        onClick={onClickUndo}
        className="button"
      >
        <UndoIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="Save"
        disabled={disable}
        onClick={onClickSave}
        className="button"
      >
        <SaveIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="Delete"
        disabled={disable}
        onClick={onClickErase}
        className="button"
      >
        <DeleteIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Flight Path</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>
              Please, provide us with some information
            </DialogContentText>
            <TextField
              
              margin="dense"
              id="name"
              label="name"
              type="name"
              fullWidth
              onChange={(event) => setPlanName(event.target.value)}
            />
            <TextField
              
              margin="dense"
              id="category"
              label="category"
              type="category"
              fullWidth
              onChange={(event) => setCategory(event.target.value)}
            />
            <TextField
              
              margin="dense"
              id="description"
              label="description"
              type="description"
              fullWidth
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
    </div>
  );
}
