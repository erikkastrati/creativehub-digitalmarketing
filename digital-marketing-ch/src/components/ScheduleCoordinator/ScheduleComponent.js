import React from "react";
import "../ScheduleCoordinator/ScheduleComponent.css";
import ButtonComponent from "../Button/ButtonComponent";
import Coordinator from "../../assets/team/Stojanco slika 2.png";
const ScheduleComponent = () => {
  return (
    <div className="schedule-section">
      <div className="schedule-conversation">
        <div className="img-coordinator">
          <img src={Coordinator} alt="coordinator" />
        </div>
        <div className="details-schedules">
          <h2>
            Закажи разговор со
            <br /> координатор <span>Стојанчо</span>
          </h2>
          <ButtonComponent>Закажи веднаш</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
