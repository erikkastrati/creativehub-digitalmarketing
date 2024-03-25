import React from "react";
import "../BonusComponent/BonusComponent.css";
import BoxComponent from "../Box/BoxComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
const BonusComponent = () => {
  const boxes = [
    {
      image: require("../../assets/people.png"),
      title: "Лидерство",
    },
    {
      image: require("../../assets/lamp-on.png"),
      title: "Претприемништво",
    },
    {
      image: require("../../assets/tick-bonus.png"),
      title: "Успех во Кариера",
    },
  ];
  return (
    <div className="container-bonus">
      <TitleComponent title="10X Мега Вештини за успех " />

      <div className="boxes-bonus">
        <BoxComponent boxes={boxes} className="box-bonus" />
      </div>
    </div>
  );
};

export default BonusComponent;
