
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FlightPlan from './views/flight-plan/flight-plan'

function App() {
  return (
    <div className="App">
      <header className="header" />
      <body>
        <FlightPlan />
      </body>
    </div>
  );
}

export default App;
