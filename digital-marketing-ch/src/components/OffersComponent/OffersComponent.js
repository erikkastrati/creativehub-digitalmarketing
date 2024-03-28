import React from "react";
import "../OffersComponent/OffersComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import LongCard from "../LongCard/LongCard";
import AcademyOnly from "../../assets/Path 454.svg";
import Star from "../../assets/Path 444.svg";
import Heart from "../../assets/Path 450.svg";

const OffersComponent = () => {
  const spanContent = "/ на 25 рати";
  const spanContent2 = "( цената е без стипендија )";
  const spanContent3 = "( цената е со 50% стипендија )";
  return (
    <div className="offers-section">
      <div className="title-offersection">
        <TitleComponent title="Избери ја понудата што најмногу ти одговара" />
      </div>
      <div className="long-cards">
        <LongCard
          image={AcademyOnly}
          paragraphs={[
            "Само Академија",
            "84 ЕУР ",
            "Програмата е на македонски јазик",
            "Онлајн предавања",
            "Работилници и вежби во живо/онлајн",
            "90 дена пракса во програмата",
            "Македонска диплома",
            "Натпревари за вработување",
          ]}
          buttonContent="Достапно со делумна стипендија"
          lastparagraph="Ограничено на само 20 студенти годишно!"
          spanContent={spanContent}
          spanContent2={spanContent2}
          scrollToId="Stojanço"
        />
        <LongCard
          image={Star}
          paragraphs={[
            "ЕУ Сертифицирана",
            "98 ЕУР ",
            "Програмата е на македонски јазик",
            "Онлајн предавања",
            "Работилници и вежби во живо/онлајн",
            "90 дена пракса во програмата",
            "Македонска + ЕУ Диплома",
            "Курс за фриленс работа",
            "10x Мега Вештини за успех",
            "Натпревари за вработување",
          ]}
          lastparagraph="Аплицирај сега или чекај ја следната група во септември!"
          buttonContent="Достапно со делумна стипендија"
          spanContent={spanContent}
          spanContent2={spanContent2}
          buttontop="Најпопуларна"
          scrollToId="Stojanço"
        />
        <LongCard
          image={Heart}
          paragraphs={[
            "Американска Диплома",
            "141 ЕУР ",

            "Програмата е на англиски јазик",
            "Онлајн предавања и вежби",
            "90 дена пракса во програмата",
            "Американска и Европска Диплома",
            "Курс за фриленс работа",
            "10x Мега Вештини за успех",
            "Натпревари за пракса/вработување во Американски компании",
          ]}
          lastparagraph="Ограничено на само 5 студенти годишно!"
          buttonContent="Аплицирај за 50% стипендија"
          spanContent={spanContent}
          spanContent3={spanContent3}
          scrollToId="Stojanço"
        />
      </div>
    </div>
  );
};

export default OffersComponent;
