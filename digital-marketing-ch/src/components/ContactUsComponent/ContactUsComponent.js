import React from "react";
import "../ContactUsComponent/ContactUsComponent.css";
import ButtonComponent from "../Button/ButtonComponent";
const ContactUsComponent = () => {
  return (
    <div className="contactus-section">
      <div className="contactus">
        <h3>
          Аплицирај за делумна стипендија
          <br /> и нашиот координатор ќе те <br />
          контактира во рок од 24 часа.
        </h3>
        <div className="contact-form">
          <ButtonComponent>Аплицирај</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
