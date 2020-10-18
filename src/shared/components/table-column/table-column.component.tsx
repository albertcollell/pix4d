import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import CollapsableRow from './../collapsable-row/collapsable-row.component'
import { IFlightPlans } from '../../../core/models/path';


export default function TablePaths(props: {flightPlans: IFlightPlans, setSelectedPath: Function, selectedPath: any}) {
  const { flightPlans, setSelectedPath, selectedPath } = props;
  return (
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
                {flightPlans.map(flightPlan =><CollapsableRow key={flightPlan.planId} flightPlan={flightPlan} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />)}
            </TableBody>
          </Table>
        </TableContainer>
  );
}
