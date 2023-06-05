import { useState } from "react";
import "./SectionHero.css";

import logo from "../../../assets/images/logo.svg";
import RadioInput from ".././inputs/RadioInput";

const SectionHero = () => {
  const [selectedRadio, setSelectedRadio] = useState("metric");

  const onChangeHandler = (event) => {
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

          <div className="input-number--box">
            <div className="input-number--container">
              <label>Height</label>
              <div className="input-number--inside">
                <input type="number" placeholder="0" className="input-number" />
                <h3 className="input-number--heading">cm</h3>
              </div>
            </div>
            <div className="input-number--container">
              <label>Weight</label>
              <div className="input-number--inside">
                <input type="number" placeholder="0" className="input-number" />
                <h3 className="input-number--heading">kg</h3>
              </div>
            </div>
          </div>
        </form>
        <div className="div-result">
          <div>
            <h2 className="heading-secondary--hero">Welcome!</h2>
            {/* <p>23.4</p> */}
          </div>
          <div>
            <p className="div-result--text">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
