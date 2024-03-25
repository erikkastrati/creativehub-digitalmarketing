import React from "react";
import "../OffersComponent/OffersComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import LongCard from "../LongCard/LongCard";
import AcademyOnly from "../../assets/Path 454.svg";
import Star from "../../assets/Path 444.svg";
import Heart from "../../assets/Path 450.svg";
const OffersComponent = () => {
  return (
    <div className="offers-section">
      <TitleComponent title="Избери ја понудата што најмногу ти одговара" />
      <div className="long-cards">
        <LongCard
          image={AcademyOnly}
          paragraphs={[
            "Само Академија",
            "84 ЕУР / на 25 рати",
            "Програмата е на македонски јазик",
            "Онлајн предавања",
            "Работилници и вежби во живо/онлајн",
            "90 дена пракса ( опционално )",
            "Македонска диплома",
          ]}
          buttonContent="Започни сега"
          lastparagraph="Ограничено на само 20 студенти годишно! "
        />
        <LongCard
          image={Star}
          paragraphs={[
            "ЕУ Сертифицирана",
            "98 ЕУР / на 25 рати",
            "Програмата е на македонски јазик",
            "Онлајн предавања",
            "Работилници и вежби во живо/онлајн",
            "90 дена пракса ( опционално )",
            "Македонска + ЕУ Диплома",
            "Курс за фриленс работа",
            "10x Бонус Курсеви",
          ]}
          lastparagraph="Аплицирај сега или чекај ја следната група во септември!"
          buttonContent="Започни сега"
        />
        <LongCard
          image={Heart}
          paragraphs={[
            "Американска Диплома",
            "197 ЕУР / на 25 рати ",
            "Програмата е на англиски јазик",
            "Онлајн предавања и вежби",
            "90 дена пракса ( опционално )",
            "Американска Диплома",
            "ЕУ Диплома со ЕКТС кредити",
            "10x Бонус Курсеви",
            "Пракса во Американски компании за најдобрите студенти - студентите мора да имаат зелена карта или легална работна дозвола",
          ]}
          lastparagraph="Ограничено на само 5 студенти годишно! "
          buttonContent="Започни сега"
        />
      </div>
    </div>
  );
};

export default OffersComponent;
