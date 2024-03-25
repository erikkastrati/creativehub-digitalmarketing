import React from "react";
import "../Box/BoxComponent.css";
const BoxComponent = ({ boxes }) => {
  return (
    <div className="box-container">
      {boxes &&
        boxes.map((box, index) => (
          <div key={index} className="box">
            {box.image && <img src={box.image} alt={box.altText} />}
            <div className="box-content">
              <h3>{box.title}</h3>
              <p>{box.description}</p>
              <p>{box.shortdescription}</p>
              {box.company && <img src={box.company} alt={box.altCompany} />}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoxComponent;
