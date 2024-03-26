import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import { teamMembers } from "../../utils/dummydata";

export default function SliderComponent() {
  const groupItems = (items, itemsPerRow) => {
    return items.reduce((acc, item, index) => {
      const rowIndex = Math.floor(index / itemsPerRow);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(item);
      return acc;
    }, []);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const groupedTeamMembers = groupItems(teamMembers, 5);
  return (
    <Slider {...settings}>
      {groupedTeamMembers.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {row.map((member, memberIndex) => (
            <TeamMemberCard
              key={`member-${rowIndex}-${memberIndex}`}
              member={member}
            />
          ))}
        </div>
      ))}
    </Slider>
  );
}
