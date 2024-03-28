import React from "react";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import BoxComponent from "../Box/BoxComponent";
import "../ValidatedDegreeComponent/ValidateDegree.css";
import TitleComponent from "../TitleComponent/TitleComponent";
const ValidatedDegree = () => {
  const boxes = [
    {
      image: require("../../assets/degree-2.png"),
      altText: "Image 1",
      title:
        "Натпревар за вработување на позиција копирајтер со Меккен маркетинг агенција.",
      showButton: false,
    },
    {
      image: require("../../assets/degree-3.png"),
      altText: "Image 2",
      title: "Натпревар за вработување на позиција маркетер со Жито Маркети.",
    },
    {
      image: require("../../assets/degree1.png"),
      altText: "Image 2",
      title:
        "Натпревар за вработување на позиција акаунт со Идеа Лаб маркетинг агенција.",
    },
  ];
  return (
    <div className="validatedegree-section">
      <ButtonPractice>Чекор 5</ButtonPractice>
      <div className="title-validatedegree">
        <TitleComponent
          title="Натпревари за вработување"
          paragraph1="За нашите студенти организираме натпревари за вработување, а на компаниите им даваме шанса преку иновативен начин на селекција да ги изберат најдобрите кандидати."
        />
      </div>
      <div className="boxes-validatedegree">
        <BoxComponent boxes={boxes} className="boxes-validatedegree" />
      </div>
    </div>
  );
};

export default ValidatedDegree;
