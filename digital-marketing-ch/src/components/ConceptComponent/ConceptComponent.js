import React from "react";
import "./ConceptComponent.css"; // Import your CSS file for styling
import TitleComponent from "../TitleComponent/TitleComponent";
import ConceptDesktop from "../../assets/concept-mobile.svg";
import ConceptMobile from "../../assets/concept-desktop.svg";

const ConceptComponent = () => {
  return (
    <>
      <div className="concepts-section">
        <TitleComponent title="Концепт  " />
        <div className="table-concept">
          <img src={ConceptDesktop} alt="conceptimage" />
        </div>
        <div className="table-concept-mobile">
          <img src={ConceptMobile} alt="conceptimage" />
        </div>
      </div>
    </>
  );
};

export default ConceptComponent;
