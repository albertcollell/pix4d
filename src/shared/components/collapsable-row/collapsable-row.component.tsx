import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IFlightPlan } from '../../../core/models/path';

const CollapsableRow = (props: { flightPlan: IFlightPlan, setSelectedPath: Function, selectedPath:any }) => {

  const { flightPlan, setSelectedPath, selectedPath } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false)

  const selectPath = (event:any) => {
    flightPlan === selectedPath ? setSelectedPath(undefined) :
    setSelectedPath(flightPlan) 
    setSelected(!selected)
  } 

  
  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={flightPlan.planId}>
      <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
            <Checkbox checked={selected} onClick={selectPath}/>
        </TableCell>
        <TableCell className="CellStyle">{flightPlan.planName}</TableCell>
        <TableCell>
            <DeleteIcon  onClick={selectPath}/>
        </TableCell>
      </TableRow>
      <TableRow className="DetailsRow">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse
            in={open}
            unmountOnExit
            className="MuiCollapse-wrapperInner"
          >
              {flightPlan.description}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CollapsableRow;
