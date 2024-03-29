import React, { useState } from "react";
import "../DuringCreativeHub/DuringCreativeHub.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import ButtonComponent from "../Button/ButtonComponent.js";
import BoxComponent from "../Box/BoxComponent.js";

const DuringCreativeHub = () => {
  const initialBoxes = [
    {
      image: require("../../assets/image6 1.png"),
      altText: "Image 1",
      title: "Прослава во Александар Палас",
      description:
        "Прославивме 6 години Creative Hub заедно со нашите студенти на гала прослава во ноември 2023та година.",
    },
    {
      image: require("../../assets/image10 1.png"),
      altText: "Image 2",
      title: "Јога курс за подобрување на фокус",
      description:
        "Студентите учествуваа на Јога сесија со колеги од другите групи и стекнаа нови вештини за подобрување на дишењето.",
    },
    {
      image: require("../../assets/image4 1.png"),
      altText: "Image 2",
      title: "Google Ads Работилница со Дарко од Distinct Маркетинг агенција",
      description:
        "По завршувањето на предметот Google Ads организиравме работилница со специјализирана маркетинг агенција за работа на Google.",
    },
  ];

  const [showAdditionalBoxes, setShowAdditionalBoxes] = useState(false);
  const [boxes, setBoxes] = useState(initialBoxes);

  const toggleAdditionalBoxes = () => {
    setShowAdditionalBoxes(!showAdditionalBoxes);
    if (!showAdditionalBoxes) {
      setBoxes(initialBoxes.concat(additionalBoxes));
    } else {
      setBoxes(initialBoxes);
    }
  };

  const additionalBoxes = [
    {
      image: require("../../assets/duringch-1.png"),
      altText: "Image1",
      title: "Среќата на нашите студенти",
      description:
        "Првиот блог, првиот испратен емаил маркетинг, прочитајте за искуствата на студентите од реалните проекти.",
    },
    {
      image: require("../../assets/duringch-2.png"),
      altText: "Image2",
      title: "Маркетинг настани",
      description:
        "Дојди на дружба, прошири го кругот на колеги, запознај маркетери, на настаните кои ги организираме за студентите на Академијата.",
    },
    {
      image: require("../../assets/duringch-3.png"),
      altText: "Image3",
      title: "Реални проекти со Маркетинг Агенции",
      description:
        "Студентите ја посетија маркетинг агенцијата Њу момент и добија бриф за кој изработија презентација.",
    },
    {
      image: require("../../assets/duringch-4.png"),
      altText: "Image4",
      title: "Нетворкинг настани",
      description:
        "Заедно со  East Gate организиравме нетворкинг настан за нашите студенти.",
    },
    {
      video: "https://www.youtube.com/embed/VIDEO_ID",
      altText: "videoch",
      title: "Фриленс курс",
      description:
        "Видео од фриленс курсот каде студентите практично научија како да ги постават своите профили и да започнат да аплицираат.",
    },
    {
      image: require("../../assets/duringch-6.png"),
      altText: "image5",
      title: "Натпревари за вработување",
      description:
        "Заедно со маркетинг агенцијата „ Идеа Лаб “  организиравме натпревар за вработување на кој најдобрата студентка Фросина Петровска се вработи како акаунт.",
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
        <ButtonComponent onClick={toggleAdditionalBoxes}>
          {showAdditionalBoxes ? "Сокриј повеќе" : "Види повеќе"}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default DuringCreativeHub;
