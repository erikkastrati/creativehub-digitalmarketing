import React, { useState } from "react";
import "../HeroComponent/HeroComponent.css";
import GoogleReview from "../../assets/google-review.png";
import Ticks from "../../assets/tick.svg";
import ButtonComponent from "../Button/ButtonComponent";

const HeroComponent = () => {
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    phone: "",
    academy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams(formState).toString();

    try {
      const response = await fetch(
        "https://akoskarova.activehosted.com/proc.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.text(); // ose .json() nese duhet me ja qu JSON
        console.log(data);
      } else {
        console.error("Server error:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="hero">
      <div className="hero__left">
        <h1>
          Академија за дигитален маркетинг 
          <br /> <span className="second">спремен за работа по</span>
          <br />
          <span className="third">дипломирање</span>
        </h1>
        <div className="container_paragraphs">
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>90 дена Флексибилна пракса ПАРАЛЕЛНО со Академијата</p>
          </div>
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>Македонска, Американска и ЕУ диплома</p>
          </div>
          <div className="paragraphs">
            <img src={Ticks} alt="ticks" />
            <p>10x Вештини за успех (AI, Преговарање, Деловна комуникација)</p>
          </div>
        </div>
        <img
          src={GoogleReview}
          alt="google-review"
          style={{
            width: "204px",
            padding: "14px 14.873px",
          }}
        />
      </div>
      <div className="hero__right">
        <form className="hero__form" onSubmit={handleSubmit}>
          <h2>
            Дали си подготвен да се
            <span className="blue-form">пријавиш денес?</span>
          </h2>
          <div className="form-group">
            <input
              type="text"
              name="fullname"
              placeholder="Име и презиме"
              value={formState.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Емаил Адреса"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select
              name="academy"
              value={formState.academy}
              onChange={handleChange}
            >
              <option value="">Одбери Академија</option>
              <option value="digitalMarketing">
                Академија за Дигитален Маркетинг
              </option>
              <option value="webDevelopment">
                Академија за Веб Девелопмент
              </option>
              <option value="graphicDesign">
                Академија за Графички Дизајн
              </option>
            </select>
          </div>
          <ButtonComponent type="submit">Аплицирај</ButtonComponent>
        </form>
        <div className="temporarily">
          <h2>
            Следната група започнува <br />
            во Мај 2024!
          </h2>
          <span>Пополни ја формата и нашиот координатор ќе те контактира!</span>
          <a
            href="https://calendly.com/stojanco_ch/30min?month=2024-03"
            target="_blank">
            <ButtonComponent>Аплицирај</ButtonComponent>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
