import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./SectionHero.css";
import logo from "/images/logo.svg";

import RadioInput from "../inputs/RadioInput";
import SectionHeroResult from "./SectionHeroResult";
import FormInput from "../inputs/FormInput";

const SectionHero = () => {
  const [selectedRadio, setSelectedRadio] = useState("metric");
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSelectedRadio(event.target.value);
  };

  return (
    <section className="container-hero">
      <img src={logo} className="logo" />
      <div className="header">
        <h1 className="heading-primary">Body Mass Index Calculator</h1>
        <span className="header-text">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </span>
      </div>
      <div className="form">
        <h2 className="heading-secondary">Enter your details below</h2>
        <form className="form-container">
          <div className="form-radio">
            <RadioInput
              label="Metric"
              value="metric"
              checked={selectedRadio === "metric"}
              onChange={onChangeHandler}
            />

            <RadioInput
              label="Imperial"
              value="imperial"
              checked={selectedRadio === "imperial"}
              onChange={onChangeHandler}
            />
          </div>

          <FormInput selectedRadio={selectedRadio} />
        </form>
        <SectionHeroResult selectedRadio={selectedRadio} />
      </div>
    </section>
  );
};

export default SectionHero;
