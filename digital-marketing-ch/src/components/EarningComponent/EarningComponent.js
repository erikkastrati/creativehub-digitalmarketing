import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../EarningComponent/EarningComponent.css";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import Tick from "../../assets/tick.svg";
import EarnImage from "../../assets/Prv Cas Sredeni 1.png";
const EarningComponent = () => {
  return (
    <div className="container">
      <div className="title-earning">
        <TitleComponent title="Почни да заработуваш онлајн и почни да аплицираш за работа" />
      </div>
      <div className="earn_section">
        <div className="earn_leftpart">
          <ButtonPractice>Чекор 3</ButtonPractice>
          <h5>
            Стекни вештини за фриленс <br />
            работа и работа во компанија
          </h5>
          <div className="earn">
            <img src={Tick} alt="tick" />
            <p>Бонус Курс: Курс за фриленс работа </p>
          </div>
          <div className="earn">
            <img src={Tick} alt="tick" />
            <p>Бонус Курс: Поставување на твојот Линкедин профил за успех </p>
          </div>
          <div className="earn">
            <img src={Tick} alt="tick" />
            <p>Бонус Курс: Курс за фриленс работа </p>
          </div>
          <div className="earn">
            <img src={Tick} alt="tick" />
            <p>Бонус Курс: Курс за фриленс работа </p>
          </div>
        </div>
        <div className="earn-rightpart">
          <img src={EarnImage} className="blueimageright" alt="earn" />
        </div>
      </div>
    </div>
  );
};

export default EarningComponent;
