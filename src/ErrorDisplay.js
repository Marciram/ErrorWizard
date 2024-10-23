import React , { useState }from 'react';
import './ErrorDisplay.css';


const ErrorDisplay = ({ imageSrc, mileage, errorCode, errorDescription, errors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="error-container">
      <div className="image-section">
        <img className="custom-style" src={imageSrc} alt="" />
      </div>
      <div className="mileage-section">
        <p>{mileage} Mi </p>
      </div>
      <div className="error-description-section">
        <p>{errorDescription}</p>
      </div>
      <div className="error-code-section">
        <pre>{errorCode}</pre>
      </div>

      <div className="arrow-down" onClick={toggleCollapse}>
        <p><i className="arrow down"></i></p>
      </div>
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

export default ErrorDisplay;
