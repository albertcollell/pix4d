import React, { useState, useEffect } from 'react';
import FlightPlans from '../../mocks/paths.json';
import PathCard from './../../shared/components/card/path-card.component';
import Map from './../../shared/components/maps/map.component';
import { IFlightPlan } from './../../core/models/path';


export default function SimpleTableView() {
    
  const [paths, setPaths] = useState(FlightPlans);
  const [selected, setSelected] = useState('');
  
  useEffect(()=>(
    console.log(paths)
  ),[paths])
    
  
  return (
      <div className="flightplans-view">
          <div className="cards-column">
            {paths.map((path:any) => <PathCard flightPath={path}/>)}
          </div>
          <div className="map-column">
            <Map />
          </div>
  
      </div>
    );
  }
  