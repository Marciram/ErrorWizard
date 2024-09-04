import React from 'react';
import './App.css'; // Assuming you have some basic styles

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <VehicleSelector />
        <ErrorTimeline />
        <ErrorDetails />
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">AutoZone</div>
    <div className="menu">Error Forecasting</div>
  </nav>
);

const VehicleSelector = () => (
  <div className="vehicle-selector">
    <Dropdown label="Your Vehicle" options={['2016', '2017', '2018']} />
    <Dropdown label="Data" options={['FORD', 'FOCUS', '4 CYLINDERS']} />
  </div>
);

const Dropdown = ({ label, options }) => (
  <div className="dropdown">
    <label>{label}</label>
    <select>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ErrorTimeline = () => (
  <div className="timeline">
    <div className="milestone">
      <span>200 miles</span>
      <span>P0295</span>
    </div>
    <div className="milestone">
      <span>300 miles</span>
      <span>P0450</span>
    </div>
    <div className="milestone">
      <span>500 miles</span>
      <span>P0299</span>
    </div>
    <div className="milestone">
      <span>600 miles</span>
      <span>P0456</span>
    </div>
  </div>
);

const ErrorDetails = () => (
  <div className="error-details">
    <div className="error-forecasted">
      <h3>Error forecasted:</h3>
      <p>P0295</p>
    </div>
    <div className="error-description">
      <h3>Error description:</h3>
      <p>The oxygen (O2) sensor in Bank 1, Sensor 1 is stuck in a "lean" condition.</p>
    </div>
  </div>
);

export default App;
