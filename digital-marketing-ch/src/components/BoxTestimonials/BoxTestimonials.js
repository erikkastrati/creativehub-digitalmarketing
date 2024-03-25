import React from "react";
import "../BoxTestimonials/BoxTestimonials.css";
import ButtonComponent from "../Button/ButtonComponent";
import Star from "../../assets/star.svg";
const BoxTestimonials = ({ boxes }) => {
  return (
    <div className="box-testimonials-container">
      {boxes &&
        boxes.map((box, index) => (
          <div key={index} className="box-testimonials">
            {/* Stars */}
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <img src={Star} alt="star" />
              ))}
            </div>

            <p>{box.shortDescription}</p>
            <div className="box-testimonialimg">
              <img src={box.image} alt={box.altText} />
              <p>{box.imageDescription}</p>
            </div>

            {/* Button */}
            <div className="button-testiomonials">
              <ButtonComponent> Закажи разговор со Лори тука</ButtonComponent>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoxTestimonials;
