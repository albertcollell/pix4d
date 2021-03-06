import React, { useState } from 'react';
import FlightPlansMocks from '../../mocks/paths.json';
import TablePaths from '../../shared/components/tablecolumn/table-column.component';
import Map from '../../shared/components/maps/map.component';
import { IFlightPlan, IFlightPlans } from '../../core/models/path';




export default function FlightPlans() {
  const [flightPlans, setFlightPlans] = useState<IFlightPlans>(FlightPlansMocks) 
  const [selectedPath, setSelectedPath] = useState<IFlightPlan>({
    planId: 0,
    planName: "",
    description: "",
    timeStamp: "",
    category: "",
    path: [
      {
        lat: 0,
        lng: 0
      }]})

  return (
      <div className="flightplans-view">
          <div className="cards-column">
            {flightPlans && <TablePaths flightPlans={flightPlans} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />}
          </div>
          <div className="map-column">
            <Map selectedPath={selectedPath} setFlightPlans={setFlightPlans}/>
          </div>
  
      </div>
    );
  }
  