import React from "react";
import "../TitleComponent/TitleComponent.css";

const TitleComponent = ({
  title,
  tenXText,
  successText,
  paragraph1,
  paragraph2,
}) => {
  return (
    <div className="title">
      <h3>
        {title} {tenXText && <span className="bluetext">{tenXText}</span>}{" "}
        {successText && <span>{successText}</span>}
      </h3>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default TitleComponent;
