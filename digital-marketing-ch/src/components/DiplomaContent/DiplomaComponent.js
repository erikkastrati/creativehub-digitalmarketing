import React from "react";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../DiplomaContent/DiplomaComponent.css";
import BoxComponent from "../Box/BoxComponent";
const DiplomaComponent = () => {
  const box = [
    {
      image: require("../../assets/ch.png"),
      altText: "Image 1",
      title: "Македонска диплома",
      description: "Top-rated Upwork Freelancer",
    },
    {
      image: require("../../assets/eu-union.png"),
      altText: "Image 2",
      title: "ЕУ диплома со ЕКТС кредити",
      description:
        "*Идеална за студенти кои сакаат да работат и живеат во Европа.",
    },
    {
      image: require("../../assets/usa1.png"),
      altText: "Image 2",
      title: "Американска диплома",
      description:
        "Академијата Creative Hub е прва и единствена македонска институција лиценцирана од Американското министерство за образование ( United States Department of Education ) која издава американски дипломи.",
    },
  ];
  return (
    <div className="container">
      <div className="title-diploma">
        <ButtonPractice>Чекор 4</ButtonPractice>
        <TitleComponent title="Стекни се со валидирана и признаена диплома" />
      </div>
      <div className="boxes-diploma">
        <BoxComponent boxes={box} className="box-diploma" />
      </div>
    </div>
  );
};

export default DiplomaComponent;
