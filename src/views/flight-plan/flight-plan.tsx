import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import FlightPlansMocks from '../../mocks/paths.json';
import PathCard from './../../shared/components/card/path-card.component';
import TablePaths from './../../shared/components/table-column/table-column.component'
import {fetchFlightPlans} from '../../core/actions/flightplans.actions';
import Map from './../../shared/components/maps/map.component';
import { IFlightPlans } from './../../core/models/path';

export default function SimpleTableView() {
  const dispatch = useDispatch();
  /* const flightPlans: any = useSelector(
    (state: RootStateOrAny) => state.flightPlans.response,
  ); */
  
  /* useEffect(()=>{
    dispatch(fetchFlightPlans(FlightPlansMocks)) 
  },[dispatch, flightPlans]) */ 

  const [flightPlans, setFlightPlans] = useState<any>(FlightPlansMocks)
  const [selectedPath, setSelectedPath] = useState(undefined)

  console.log(flightPlans)

  return (
      <div className="flightplans-view">
          <div className="cards-column">
            <TablePaths flightPlans={flightPlans} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
          </div>
          <div className="map-column">
            <Map selectedPath={selectedPath} setFlightPlans={setFlightPlans}/>
          </div>
  
      </div>
    );
  }
  