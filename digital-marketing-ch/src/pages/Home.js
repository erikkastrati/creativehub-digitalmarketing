import React from "react";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import InformationComponent from "../components/InformationComponent/InformationComponent";
import SuccessComponent from "../components/SuccessComponent/SuccessComponent";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <InformationComponent />
      <SuccessComponent />
    </div>
  );
};

export default Home;
