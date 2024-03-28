import React from "react";
import "../HeroComponent/HeroComponent.css";
import GoogleReview from "../../assets/google-review.png";
import Ticks from "../../assets/tick.svg";
import ButtonComponent from "../Button/ButtonComponent";
const HeroComponent = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>
          Академија за дигитален маркетинг 
          <br /> <span className="second">спремен за работа по</span>
          <br />
          <span className="third">дипломирање</span>
        </h1>
        <div className="container_paragraphs">
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>90 дена Флексибилна пракса ПАРАЛЕЛНО со Академијата</p>
          </div>
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>Македонска, Американска и ЕУ диплома</p>
          </div>
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>10x Вештини за успех (AI, Преговарање, Деловна комуникација)</p>
          </div>
        </div>
        <img
          src={GoogleReview}
          alt="google-review"
          style={{
            width: "204px",
            padding: "14px 14.873px",
          }}
        />
      </div>
      <div className="hero__right">
        <div className="temporarily">
          <h2>
            Следната група започнува <br />
            во Мај 2024!
          </h2>
          <span>Пополни ја формата и нашиот координатор ќе те контактира!</span>
          <a
            href="https://calendly.com/stojanco_ch/30min?month=2024-03"
            target="_blank">
            <ButtonComponent>Аплицирај</ButtonComponent>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
