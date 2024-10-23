import React, { useState } from 'react';
import './ErrorDisplay.css';

const Collapsible = ({ buttonLabel, errors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <button className="collapsible-button" onClick={toggleCollapse}>
      </button>
      {isOpen && (
        <div className="collapsible-content">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
