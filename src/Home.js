import React, { useEffect, useState } from "react";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ErrorDisplay from './ErrorDisplay';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Collapsible from "./Collapsible";
import Dropdown from "./Dropdown";
import Disclaimer from "./Disclaimer";

const Home = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [predictions, setPredictions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("/result_by_car_deleting_error.json")
      .then((res) => {
        setPredictions(res.data.predictions || []);
      })
      .catch((error) => {
        console.error("Error fetching predictions:", error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % predictions.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + predictions.length) % predictions.length);
  };

  const currentPrediction = predictions.length > 0 ? predictions[currentIndex] : null;

  return (
    <div>
      <div className="header-section">
        <h1 className="text-center">List of Predictions</h1>
      </div>
      {currentPrediction ? (
        <>
          <div className="header-car">
            <h2 className="text-center">
              Your: {currentPrediction.year} {currentPrediction.model}, may encounter the following issues over the next six months:
            </h2>
            <h2 className="text-center">Monthly mileage average is: {currentPrediction.Monthly_drive} Miles</h2>
          </div>

          <div className="title-section">
          
            <h2 className="text-center">Mileage</h2>
            <h2 className="text-center">Error Code</h2>
            <h2 className="text-center">Error Description</h2>
            <h2 className="text-center"></h2>
            <h2 className="text-center"></h2>
            <h2 className="text-center"></h2>
            <h2 className="text-center"></h2>
          </div>

          <ul className="nav-menu">
            {currentPrediction.results_by_car.map((result, index) => (
              result.code !== 0 && (
                <li key={result.code + index}>
                  <ErrorDisplay
                    imageSrc={'/tire and road.png'}
                    mileage={result.odometer}
                    errorCode={result.description}
                    errorDescription={result.code}
                    errors={currentPrediction.results_by_car}
                  />
                </li>
              )
            ))}
          </ul>

          <div className="navigation-buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>

          
          <div className="header-section">
            <h2 className="text-center">
              The accuracy of these predictions is approximately 78%.
            </h2>
          </div>
        <Disclaimer></Disclaimer>
        </>


      ) : (
        <div className="header-section">
          <h2 className="text-center">No predictions available.</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
