import React, {useState} from 'react';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import UndoIcon from '@material-ui/icons/Undo';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import './menu.component.scss';

interface ICoordinate {
  lat: number,
  lng: number
}

export default function Menu(props: {coordinates: any}) {
  const { coordinates } = props;
  const [creatingPath, setCreatingPath] = useState()
  const [disable, setDisable] = useState(true)

  const onClickAdd = () => {
    setDisable(false)
  }
  
  const onClickSave = () => {
    setDisable(true)
  }


  return (
    <div className="menu">
      <Fab color="primary" aria-label="add" disabled={!disable} onClick={onClickAdd}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="undo" disabled={disable}>
        <UndoIcon />
      </Fab>
      <Fab color="secondary" aria-label="Save" disabled={disable} onClick={onClickSave}> 
        <SaveIcon />
      </Fab>
      <Fab color="secondary" aria-label="Delete" disabled={disable}>
        <DeleteIcon />
      </Fab>
    </div>
    )} 