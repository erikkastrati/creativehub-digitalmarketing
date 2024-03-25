import React from "react";
import Plus from "../../assets/tabler_plus.svg";
import "../ProgramComponent/ProgramComponent.css";
import Team from "../../assets/Edited Photos 1.png";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";

const ProgramComponent = () => {
  return (
    <div className="program_section">
      <div className="programs-left">
        <ButtonPractice>Чекор 1</ButtonPractice>
        <h3>Програма</h3>
        <div className="programs">
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Facebook & Instagram Advertising</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Content Marketing</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Account Management</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Email Marketing for SaaS</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Marketing Management</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Google Ads</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>SEO</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>Wordpress Basics</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>PR</h4>
          </div>
          <div className="program">
            <img src={Plus} alt="plus" />
            <h4>AI + Marketing</h4>
          </div>
        </div>
      </div>
      <div className="program-right">
        <div className="program-img">
          <img src={Team} className="blueimageright" alt="team" />
        </div>
      </div>
    </div>
  );
};

export default ProgramComponent;
