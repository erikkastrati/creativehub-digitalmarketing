import React from "react";
import "./ConceptComponent.css"; // Import your CSS file for styling
import TitleComponent from "../TitleComponent/TitleComponent";

const ConceptComponent = () => {
  return (
    <>
      <div className="concepts-section">
        <TitleComponent title="Концепт  " />
        <div className="table">
          <div className="column">
            <h5>Месец 1</h5>
          </div>
          <div className="column">
            <h5>Месец 2</h5>
          </div>
          <div className="column">
            <h5>Месец 3</h5>
          </div>
          <div className="column">
            <h5>Месец 4</h5>
          </div>
          <div className="column">
            <h5>Месец 5</h5>
          </div>
          <div className="column">
            <h5>Месец 6</h5>
          </div>
          <div className="column">
            <h5>Месец 7</h5>
          </div>
          <div className="column">
            <h5>Месец 8</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConceptComponent;
