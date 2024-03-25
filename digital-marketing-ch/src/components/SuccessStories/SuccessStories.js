import React from "react";
import "../SuccessStories/SuccessStories.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxComponent from "../Box/BoxComponent";
const SuccessStories = () => {
  const boxes = [
    {
      image: require("../../assets/success-stories/Aleksandar Dinev.png"),
      altText: "Aleksandar Dinev",
      title: "Александар Динев",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/east gate mall.png"),
    },
    {
      image: require("../../assets/success-stories/Teodora Trajanovska.png"),
      altText: "Teodora Trajanovska",
      title: "Теодора Трајановска",
      description: "Junior Search Engine Optimization Specialist",
      company: require("../../assets/success-stories/deptagency.png"),
    },
    {
      image: require("../../assets/success-stories/Branko Popovski 1.png"),
      altText: "Branko Popovski ",
      title: "Бранко Поповски",
      description: "Senior Marketing Associate",
      company: require("../../assets/success-stories/Sparkasse-logo.png"),
    },
    {
      image: require("../../assets/success-stories/Klimentina Markovikj 1.png"),
      altText: "Klimentina Markovikj 1",
      title: "Климентина Марковиќ",
      description: "Campaign Manager",
      company: require("../../assets/success-stories/funnel boost logo.png"),
    },
    {
      image: require("../../assets/success-stories/Ana Nedanoska.png"),
      altText: "Ana Nedanoska",
      title: "Ана Неданоска",
      description: "Digital Marketing Consultant",
      company: require("../../assets/success-stories/antibeagency_logo.png"),
    },
    {
      image: require("../../assets/success-stories/Jovana Peneva 1.png"),
      altText: "Jovana Peneva 1",
      title: "Јована Пенева",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/piksel logo-hi-res.png"),
    },
    {
      image: require("../../assets/success-stories/Azra Rusevikj.png"),
      altText: "Azra Rusevikj",
      title: "Азра Рушевиќ",
      description: "Online Marketing",
      company: require("../../assets/success-stories/seomatik.png"),
    },
    {
      image: require("../../assets/success-stories/Goran Georgiev 1.png"),
      altText: "Goran Georgiev 1",
      title: "Горан Георгиев",
      description: "Digital Marketing Cordinator",
      company: require("../../assets/success-stories/yugoimpex_export_import_doo___woodworking_machinery_logo.png"),
    },
    {
      image: require("../../assets/success-stories/Benjamin Muca.png"),
      altText: "Benjamin Muca",
      title: "Бењамин Муца",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/мапас download (3).png"),
    },
  ];

  return (
    <div className="success-section">
      <div className="title-success">
        <TitleComponent
          title="Успешни приказни"
          paragraph1="Време на вработување по завршувањето на Академијата: 3,2 месеци "
          paragraph2="Студентите кои започнале со пракса во Creative Hub побрзо се вработиле од оние кои ја слушале само Академијата."
        />
      </div>

      <div className="boxes-successstories">
        <BoxComponent boxes={boxes} className="boxes-success" />
      </div>
    </div>
  );
};

export default SuccessStories;
