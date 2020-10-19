import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IFlightPlan } from '../../../core/models/path';
import { TableBody } from '@material-ui/core';

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
      <Table>
      <TableBody>
      <TableRow hover role="checkbox" tabIndex={-1} key={flightPlan.planId}>
      <TableCell>
          <IconButton
            data-test='expand-button'
            aria-label="expand row"
            type='button'
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell data-test="title" className="CellStyle">{flightPlan.planName}</TableCell>
        <TableCell>
            <Checkbox data-test="checkBox-button" checked={selected} onClick={selectPath}/>
        </TableCell>
      </TableRow>
      <TableRow className="DetailsRow">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse
            in={open}
            unmountOnExit
            className="MuiCollapse-wrapperInner"
          >
            <p>{flightPlan.description}</p>
            <p>created: {flightPlan.timeStamp}</p>
            <p>category: {flightPlan.category}</p>
          </Collapse>
        </TableCell>
      </TableRow>
      </TableBody>
      </Table>
      
      </>
  );
};

export default CollapsableRow;
