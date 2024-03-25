import React from "react";
import "./PracticeComponent.css";
import PracticeImage from "../../assets/Edited images from Nikolauiux 1.png";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import Tick from "../../assets/tick.svg";

const PracticeComponent = () => {
  return (
    <div className="practice-section">
      <div className="practice-left">
        <img
          src={PracticeImage}
          className="blueimageleft"
          alt="practiceimage"
        />
      </div>
      <div className="practice-right">
        <ButtonPractice>Чекор 2</ButtonPractice>
        <h4>Пракса</h4>
        <p>
          Покрај знаењето од предавачите, на{" "}
          <span>студентите им е понудена пракса од 12 часа</span> неделно во
          период од 90 дена, во која работат со ментор и во тим со уште еден
          студент. <br />
          <br /> <span>Условите на оваа пракса се флексибилни</span>, може да се
          работи од дома и работните саати избира самиот студент како ќе ги
          утврди, <br />
          Вештини кои ќе ги{" "}
          <span>стекнете по завршување на 90 дневната пракса:</span>
        </p>
        <div className="practices">
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>Тимска работа и заедничка одговорност</h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>Разбирање на маркетинг бриф и работни задачи</h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>Емаил маркетинг</h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>
              Копирајтинг, Content Creation, Wordpress, SEO, Project Management
            </h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>B2B Lead Generation, PR, Event Management</h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>Cold Email Outreach, B2B, Communication</h5>
          </div>
          <div className="pract">
            <img src={Tick} alt="tick" />
            <h5>Account Management & Community Building</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent;
