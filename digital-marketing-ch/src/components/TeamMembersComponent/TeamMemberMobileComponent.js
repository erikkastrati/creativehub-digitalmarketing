import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "../TeamMembersComponent/TeamMembersComponent.css";
const TeamMembersComponent = () => {
  const teamMembers = [
    {
      imageSrc: require("../../assets/team/Arijana slika 1.png"),
      name: "Аријана Коскарова",
      description:
        "CEO, Creative Hub Miami, Skopje, Pristina Award-winning EntrepreneurForbes under 30 ( 2019 )",
      additionalInfo:
        "“Премногу научив од Аријана како ментор несебечно ти го дава целото знаење.”",
      lastrow: "— Ана Неданоска",
    },
    {
      imageSrc: require("../../assets/team/Mile Davcevski 1.png"),
      name: "Миле Давчевски",
      description:
        "SEO Consultant во Rhino Entertainment Group, 10+ години искусство во работа со SEO, Google Ads, Google Analytics",
      additionalInfo:
        "“Миле е најдобар ментор на Академијата, со него толку комплексен предмет како SEO го разбрав многу брзо.”",
      lastrow: "— Горан Георгиев",
    },
    {
      imageSrc: require("../../assets/team/Kristina Mishevska (1) (1) 1.png"),
      name: "Кристина Мишевска Петрушевска",
      description: "Top-rated Upwork Freelancer",
      additionalInfo:
        "“Со помош на менторката направивме Upwork профили и за мене беше одлично бидејќи сакам да бидам фриленсер.”",
      lastrow: "— Марија Потирова",
    },
    {
      imageSrc: require("../../assets/team/Anastas P 1.png"),
      name: "Анастас П. Шули",
      description:
        "E-mail Strategist во Flowd, 6+ години работно искуство во cold email outreach & B2B.",
      additionalInfo:
        "“Многу сум задоволна, Анастас многу се труди, особено обрнува внимание на почетници.”",
      lastrow: "— Марија Копчаревска",
    },
    {
      imageSrc: require("../../assets/team/miroslav slavkovski.png"),
      name: "Мирослав Славковски",
      description:
        "Head of Marketing во East Gate Mall со  8+ години работно искуство во дигитален маркетинг",
      additionalInfo:
        "“Најинтересен ми беше модулот со Миро. Академијата е одлична!”",
      lastrow: "— Кристина Лазарова ",
    },
    {
      imageSrc: require("../../assets/team/Andon Tosik 2.png"),
      name: "Андон Тошиќ",
      description:
        "6+ години искуство во работа со CRM и менаџирање со клиенти како и со SaaS Enterprise software.",
      additionalInfo: "“Одлично предава Андон и добро објаснува.”",
      lastrow: "— Елма Хоџа Курт ",
    },
    {
      imageSrc: require("../../assets/team/Katerina Popova 1.png"),
      name: "Катерина Попова",
      description: "PR Account Manager во McCann Skopje",
      additionalInfo:
        "“Најзабавен модул ми беше ПР модулот со Катерина. Многу добро објаснува!”",
      lastrow: "— Александар Драгановски  ",
    },
    {
      imageSrc: require("../../assets/team/Biserka Velkovska Blaževa 2.png"),
      name: "Бисерка Велковска",
      description:
        "Digital Account Manager & Public Relations Manager во ЊуМомент, 15+ години работно искуство во ПР",
      additionalInfo:
        "“Бисерка одлично објаснува, поради неа сакам да работам Content Creation.”",
      lastrow: "— Лори Бебиќ ",
    },
    {
      imageSrc: require("../../assets/team/Marija 1.png"),
      name: "Марија Мицајкова",
      description:
        "Графички дизајнер со повеќе од 8 години работно искуство во social media marketing",
      additionalInfo:
        "“Предметот Cavna за маркетери ми даде насока како сам да си ги креирам дизајните.”",
      lastrow: "— Томче Атанасовски ",
    },
    {
      imageSrc: require("../../assets/team/Rozalona Koskarova.png"),
      name: "Проф. Д-р Розалина Попова Коскарова",
      description:
        "Автор на книгата Деловна Комуникација, продекан на Педагошки Факултет УКИМ Скопје",
      additionalInfo:
        "“Професорката Розалина има премногу знаење и има многу што да се научи од неа.” ",
      lastrow: "— Ивана Бинова",
    },
  ];

  return (
    <div className="team-section">
      <div className="titleofteam">
        <TitleComponent title="Запознај го предавачкиот тим" />
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembersComponent;
