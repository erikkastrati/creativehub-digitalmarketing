import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "../TeamMembersComponent/TeamMembersComponent.css";
import { teamMembers } from "../../utils/dummydata";
const TeamMembersComponent = () => {
  return (
    <div className="team-section">
      <div className="titleofteam">
        <TitleComponent
          className="title-team"
          title="Запознај го предавачкиот тим"
        />
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
