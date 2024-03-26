import React from "react";
import "../DuringCreativeHub/DuringCreativeHub.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import ButtonComponent from "../Button/ButtonComponent.js";
import BoxComponent from "../Box/BoxComponent.js";
const DuringCreativeHub = () => {
  const boxes = [
    {
      image: require("../../assets/image6 1.png"),
      altText: "Image 1",
      title: "Прослава во Александар Палас",
      description:
        "Прославивме 6 години Creative Hub заедно со нашите студенти на гала прослава во ноември 2023та година. ",
      shortdescription: "Прочитај повеќе",
    },
    {
      image: require("../../assets/image10 1.png"),
      altText: "Image 2",
      title: "Јога курс за подобрување на фокус",
      description:
        "Студентите учествуваа на Јога сесија со колеги од другите групи и стекнаа нови вештини за подобрување на дишењето. ",
      shortdescription: "Прочитај повеќе",
    },
    {
      image: require("../../assets/image4 1.png"),
      altText: "Image 2",
      title: "Google Ads Работилница со Дарко од Distinct Маркетинг агенција",
      description:
        "По завршувањето на предметот Google Ads организиравме работилница со специјализирана маркетинг агенција за работа на Google. ",
      shortdescription: "Прочитај повеќе",
    },
  ];
  return (
    <div className="duringch-section">
      <div className="title-duringch">
        <TitleComponent
          title="Учење, дружење …"
          tenXText="Creative Hub"
          successText="е забава !"
        />
      </div>
      <div className="boxes-duringch">
        <BoxComponent boxes={boxes} className="boxes-duringch1" />
      </div>
      <div className="button-duringch">
        <ButtonComponent>Види повеќе</ButtonComponent>
      </div>
    </div>
  );
};

export default DuringCreativeHub;
