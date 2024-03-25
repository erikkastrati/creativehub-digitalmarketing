import React from "react";
import AfterAcademy from "../../assets/after-academy.png";
import "../AfterAcademy/AfterAcademyComponent.css";
const AfterAcademyComponent = () => {
  return (
    <div className="container">
      <div className="afteracademy_section">
        <div className="left-afteracademy">
          <h3>Што после Академија?</h3>
          <p>
            Додека уживаш на твоето ново работно место како маркетер  искористи
            <br />
            ја можноста да стекнеш бонус вештини со курсевите за Лидерство,
            <br />
            Претприемништво и Успех во кариера.
          </p>
          <p>
            *Овие курсеви можеш да ги гледаш во време кога тебе ти одговара.
          </p>
        </div>
        <div className="right-afteracademy">
          <img
            src={AfterAcademy}
            alt="after-academy"
            className="blueimageright"
          />
        </div>
      </div>
    </div>
  );
};

export default AfterAcademyComponent;
