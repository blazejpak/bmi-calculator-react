import React from "react";
import "./SectionHero.css";

import logo from "../../assets/images/logo.svg";

const SectionHero = () => {
  return (
    <section className="container">
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
        <h2>Enter your details below</h2>
        <form>
          <div>
            <input type="select" />
            <label>Height</label>
            <input type="number" />
          </div>
          <div>
            <input type="select" />
            <label>Weight</label>
            <input type="number" />
          </div>
        </form>
        <div>
          <div>
            <span>Your BMI is...</span>
            <p>23.4</p>
          </div>
          <div>
            <p>
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between 63.3kgs - 85.2kgs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
