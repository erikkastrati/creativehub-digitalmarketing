import React from "react";
import "../HowToFinance/HowToFinanceComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
const HowToFinanceComponent = () => {
  return (
    <div className="finance-section">
      <div className="howtofinance-table">
        <TitleComponent
          title="Како да ја финансираш Академијата?"
          paragraph1="Понуди и на твојата компанија да ти плати 50% од Академијата"
        />
      </div>
    </div>
  );
};

export default HowToFinanceComponent;
