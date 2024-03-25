import React from "react";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import InformationComponent from "../components/InformationComponent/InformationComponent";
import SuccessComponent from "../components/SuccessComponent/SuccessComponent";
import ConceptComponent from "../components/ConceptComponent/ConceptComponent";
import ProgramComponent from "../components/ProgramComponent/ProgramComponent";
import PracticeComponent from "../components/PracticeComponent/PracticeComponent";
import EarningComponent from "../components/EarningComponent/EarningComponent";
import DiplomaComponent from "../components/DiplomaContent/DiplomaComponent";
import AfterAcademyComponent from "../components/AfterAcademy/AfterAcademyComponent";
import BonusComponent from "../components/BonusComponent/BonusComponent";
import TeamMembersComponent from "../components/TeamMembersComponent/TeamMembersComponent";
import OffersComponent from "../components/OffersComponent/OffersComponent";
import ScheduleComponent from "../components/ScheduleCoordinator/ScheduleComponent";
import HowToFinanceComponent from "../components/HowToFinance/HowToFinanceComponent";
import DuringCreativeHub from "../components/DuringCreativeHub/DuringCreativeHub";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import ArijanaVideoComponent from "../components/ArijanaVideoComponent/ArijanaVideoComponent";
import TestimonialsComponent from "../components/TestimonialsComponent/TestimonialsComponent";
const Home = () => {
  return (
    <div>
      <HeroComponent />
      <InformationComponent />
      <SuccessComponent />
      <ConceptComponent />
      <ProgramComponent />
      <PracticeComponent />
      <TestimonialsComponent />
      <EarningComponent />
      <DiplomaComponent />
      <AfterAcademyComponent />
      <BonusComponent />
      <TeamMembersComponent />
      <OffersComponent />
      <ScheduleComponent />
      <HowToFinanceComponent />
      <DuringCreativeHub />
      <SuccessStories />
      <ArijanaVideoComponent />
    </div>
  );
};

export default Home;
