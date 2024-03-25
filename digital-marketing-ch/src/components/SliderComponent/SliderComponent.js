import React, { useRef, useState } from "react";
import Slider from "react-slick";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import { teamMembers } from "../../utils/dummydata";

export default function SliderComponent() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {teamMembers.map((items, index) => (
            <div key={index}>
              <TeamMemberCard member={items} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
