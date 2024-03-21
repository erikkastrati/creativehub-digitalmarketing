import React from "react";
import BoxComponent from "../Box/BoxComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../InformationComponent/InformationComponent.css";

const InformationComponent = () => {
  const boxes = [
    {
      image: require("../../assets/30-cards.png"),
      altText: "Image 1",
      title: "Creative Hub се најде на листата на Форбес под 30 ( 2019 )",
    },
    {
      image: require("../../assets/image 19.png"),
      altText: "Image 2",
      title:
        "Creative Hub доби награда за време на Светскиот Економски Форум во Давос",
    },
    {
      image: require("../../assets/America start 6 years 1.png"),
      altText: "Image 2",
      title:
        "Creative Hub доби награда за време на Светскиот Економски Форум во Давос",
    },
  ];

  return (
    <>
      <div className="information-part">
        <TitleComponent
          title="Учи од светски-наградувано школо"
          paragraph="Македонски, а светски бренд"
        />
        <BoxComponent boxes={boxes} className="boxes-information" />
      </div>
    </>
  );
};

export default InformationComponent;
