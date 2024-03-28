import React from "react";
import "../Get+MegaCoursesComponent/GetMegaCourse.css";
import GetMegaCourseCard from "./GetMegaCourseCard";
import TitleComponent from "../TitleComponent/TitleComponent";
const GetMegaCourse = () => {
  return (
    <div className="getmegacourse_section">
      <TitleComponent title="Добиј + Мега Курсеви" />
      <div className="getmegacourse_table">
        <GetMegaCourseCard
          title="AI + Marketing Мега Курс "
          subtitle="Научи професионално да користиш вештачка интелигенција во твојата работа."
          firstparagraph="20 часовен Мега Курс со 9 модули"
          paragraphstick={[
            "The human element of AI",
            "AI for Text, Translation, and Email",
            "AI for Images, Social Media, and Ads",
            "AI for Audio, Video, and Podcasts",
            "AI for Content Strategy and SEO",
            "AI for Analytics, Forecasting, and Prediction",
            "AI For LinkedIn",
            "AI Tools",
            "Case Studies",
          ]}
        />
        <GetMegaCourseCard
          title="TikTok Video Creation & Edit  мега курс  "
          subtitle="Научи како да креираш кул видеа кои ќе генерираат над 10,000 прегледи за 24 часа."
          firstparagraph="Во соработка со:"
          paragraphstick={[
            "Basic video editing",
            "Captions",
            "Sound effects",
            "Green screens",
            "Transitions and overlay",
            "Stock images, videos, sounds ( pexels, pixabay ) ",
            "Jump cuts ",
          ]}
          imgsrc={require("../../assets/nextgen' 1.png")}
        />
      </div>
    </div>
  );
};

export default GetMegaCourse;
