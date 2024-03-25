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
      showButton: false,
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
        <div className="information-title">
          <TitleComponent
            className="title-information"
            title="Учи од светски-наградувано школо"
            paragraph1="Македонски, а светски бренд"
          />
        </div>
        <BoxComponent boxes={boxes} className="boxes-information" />
      </div>
    </>
  );
};

export default InformationComponent;
