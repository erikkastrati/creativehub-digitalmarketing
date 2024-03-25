import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import CloseCircle from "../../assets/close-circle.svg";
import Logo from "../../assets/Logo-table.svg";
import "../SuccessComponent/SuccessComponent.css";
const SuccessComponent = () => {
  return (
    <div className="success-section">
      <div className="titleofsuccess">
        <TitleComponent
          title="Creative Hub те поставува за"
          tenXText="10x"
          successText="успех"
          paragraph1="На пазарот има многу програми, и голем дел од нив се квалитетни и ќе те научат на слични вештини и ќе ти помогнат за вработување, но Creative Hub има една работа која не прави единствени."
        />
      </div>
      <div className="tables-success">
        <div className="table-left">
          <div className="cell">
            <h4 className="first-paragraph">Другите</h4>
          </div>
          <div className="cell">
            <h4 className="second-paragraph">Вештини</h4>
          </div>
          <div className="cell">
            <h4 className="second-paragraph">
              Локален сертификат / македонска диплома
            </h4>
          </div>
          <div className="cell">
            <h4 className="second-paragraph">Помош при вработување</h4>
          </div>

          <div className="cell">
            <h4 className="second-paragraph">
              <img src={CloseCircle} alt="close-circle" />
            </h4>
          </div>
          <div className="cell">
            <h4 className="second-paragraph">
              <img src={CloseCircle} alt="close-circle" />
            </h4>
          </div>
          <div className="cell">
            <h4 className="second-paragraph">
              <img src={CloseCircle} alt="close-circle" />
            </h4>
          </div>
        </div>
        <div className="table-right">
          <div className="cell">
            <h4>
              <img src={Logo} alt="logo" />
            </h4>
          </div>
          <div className="cell">
            <h4>Програма</h4>
            <p>Вештини + 3 месечна флексибилна пракса вклучена во програмата</p>
          </div>
          <div className="cell">
            <h4>Диплома</h4>
            <p>Македонска диплома </p>
            <p>Американска диплома</p>
            <p>* Лиценцирани од Американското Министерство за Образование.</p>
            <p>Европска Диплома со ЕКТС кредити</p>
          </div>
          <div className="cell">
            <h4>Курс за фриленс</h4>
            <p>* Научи како да работиш од дома</p>
          </div>
          <div className="cell">
            <h4>Помош при вработување</h4>
            <p>
              * Учествувај во Хакатони, натпревари и стекни вештини како да
              аплицираш со програмата за вработување.
            </p>
          </div>
          <div className="cell">
            <h4>Пракса за најдобрите студенти во Американски компании</h4>
            <p>
              * Creative Hub е Американска компанија со седиште во Мајами, САД. 
            </p>
          </div>
          <div className="cell">
            <h4>10x Бонус Курсеви</h4>
            <p>Лидерство</p>
            <p>
              По завршувањето на Академијата дел од вас ќе се вработат во
              компанија, следен чекор е да се развијат во лидери 
            </p>
            <p>Претприемништво</p>
            <p>Научи вештини како да започнеш сопствен бизнис </p>

            <p>Кариерни вештини за успех во професијата</p>

            <p>
              -Менаџирање на клиенти
              <br />  -Деловна комуникација <br />
              -Преговарање за цена
              <br /> -Како да побараш покачување на цена
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
