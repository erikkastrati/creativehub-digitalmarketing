import React from "react";
import "../HowToFinance/HowToFinanceComponent.css";
import Instructor from "../../assets/Ellipse 309 (3).png";
import TitleComponent from "../TitleComponent/TitleComponent";
import ButtonComponent from "../Button/ButtonComponent";
const HowToFinanceComponent = () => {
  return (
    <div className="finance-section" id="Stojanço">
      <div className="howtofinance-table">
        <TitleComponent
          title="Како да ја финансираш"
          tenXText="Академијата?"
          paragraph2="Понуди и на твојата компанија да ти плати 50% од Академијата"
        />
        <h5>Аплицирај за делумна стипендија ( до 500 ЕУР ).</h5>
        <span>
          За да ги слушнеш условите и како да аплицираш за стипендија закажи
          разговор со нашиот координатор Стојанчо тука.
        </span>
        <a
          href="https://calendly.com/stojanco_ch/30min?month=2024-03"
          target="_blank"
          rel="noopener noreferrer">
          <ButtonComponent>Закажи веднаш</ButtonComponent>
        </a>
        <div className="howtofinance-instructor">
          <img src={Instructor} alt="Stojanço" />
          <p>Стојанчо Н.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToFinanceComponent;
