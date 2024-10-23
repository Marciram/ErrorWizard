import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-title">Disclaimer</div>
      <div className="disclaimer-text">
        This is a list of error codes that may appear on your vehicle within the next 3,600 miles, derived from data collected from similar vehicles.
        The accuracy of these predictions is approximately 78%.
        The predictions and error codes provided by our Error Wizard Model are intended for informational purposes only and should not be solely relied upon for vehicle maintenance or repairs. The accuracy of these predictions can vary based on individual driving habits, vehicle maintenance practices, and other external factors.
      </div>
    </div>
  );
}

export default Disclaimer;
