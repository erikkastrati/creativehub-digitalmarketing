import React from "react";
import "../Button/ButtonComponent.css";
const ButtonComponent = ({ onClick, children }) => {
  return (
    <button className="button-green" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
