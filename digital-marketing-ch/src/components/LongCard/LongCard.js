import React from "react";
import "../LongCard/LongCard.css";
import Tick from "../../assets/tick-bonus.png";
function LongCard({ image, paragraphs, lastparagraph, buttonContent }) {
  return (
    <div className="long-card">
      <div className="image">
        <img src={image} alt="Card" />
      </div>
      <div className="row-1">
        {paragraphs.slice(0, 2).map((paragraph, index) => (
          <p>{paragraph}</p>
        ))}
      </div>
      <hr />
      <div className="row-2">
        {paragraphs.slice(2).map((paragraph, index) => (
          <div key={index} className="paragraph-with-tick">
            <img src={Tick} alt="Tick" />
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="row-3">
        <p>{lastparagraph}</p>
        <button className="button-offer">{buttonContent}</button>
      </div>
    </div>
  );
}

export default LongCard;
