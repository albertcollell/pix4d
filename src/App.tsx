import React from 'react';
import logo from './statics/pix4d-logo.svg';
import './App.scss';
import FlightPlan from './views/flight-plan/flight-plan'

function App() {
  return (
    <div className="App">
      <header className="header" >
        <img src={logo} alt='logo' className="logo"/>
      </header>
      <body className='body'>
        <FlightPlan />
      </body>
    </div>
  );
}

export default App;
