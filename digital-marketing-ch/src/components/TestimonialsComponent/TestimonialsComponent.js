import React from "react";
import "../TestimonialsComponent/TestimonialsComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxTestimonials from "../BoxTestimonials/BoxTestimonials";
const TestimonialsComponent = () => {
  const boxesData = [
    {
      shortDescription:
        "За време на праксата се охрабрив да аплицирам бидејќи сфатив колку сум научила и што се можам да изработам.",
      image: require("../../assets/Ellipse 309.png"),
      altText: "Image 1",
      imageDescription: "Лори Бебиќ",
    },
    {
      shortDescription:
        "Буквално изработивме се сами, од креирање на текст, до SEO оптимизација, емаил маркетинг кампањи, B2B Cold Outreach, до организирање на настани.",
      image: require("../../assets/Ellipse 309 (1).png"),
      altText: "Image 2",
      imageDescription: "Филип Калабаков",
    },
    {
      shortDescription:
        "Најинтересниот дел од целата Академија ми беше праксата. Работев во тим со Невена, и ментор ни беше Аријана.",
      image: require("../../assets/Ellipse 309 (2).png"),
      altText: "Image 2",
      imageDescription: "Марија Потирова",
    },
  ];
  return (
    <div className="testional-container">
      <div className="title-testimonial">
        <TitleComponent
          title="Тестимонијалс"
          paragraph1="90-дневната пракса на Академијата за Дигитален Маркетинг ме принуди да излезам од својата комфор зона и "
          paragraph2="понуди практично учење кое значително ги прошири моите вештини и знаење во оваа област."></TitleComponent>
        <BoxTestimonials boxes={boxesData} />
      </div>
    </div>
  );
};

export default TestimonialsComponent;
