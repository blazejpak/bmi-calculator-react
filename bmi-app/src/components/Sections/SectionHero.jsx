import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SectionHero.css";

import logo from "../../assets/images/logo.svg";
import RadioInput from "../inputs/RadioInput";
import {
  updateHeightCm,
  updateHeightFt,
  updateHeightIn,
  updateWeightKg,
  updateWeightLbs,
  updateWeightSt,
} from "../../store/reducer";
import store from "../../store/store";

const SectionHero = () => {
  const [selectedRadio, setSelectedRadio] = useState("metric");
  const dispatch = useDispatch();

  const { heightCm, weightKg, heightFt, heightIn, weightSt, weightLbs } =
    useSelector((state) => ({
      heightCm: +state.heightCm,
      weightKg: +state.weightKg,
      heightFt: +state.heightFt,
      heightIn: +state.heightIn,
      weightSt: +state.weightSt,
      weightLbs: +state.weightLbs,
    }));

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSelectedRadio(event.target.value);
  };

  let input;
  let bmiCalc;

  if (selectedRadio === "imperial") {
    input = (
      <div className="input-number_imperial">
        <div className="input-number--box">
          <div className="input-number--container">
            <label htmlFor="ftHeight">Height</label>
            <div className="input-number--inside">
              <input
                onChange={(e) => dispatch(updateHeightFt(e.target.value))}
                id="ftHeight"
                type="number"
                placeholder="0"
                className="input-number"
              />
              <h3 className="input-number--heading">ft</h3>
            </div>
          </div>
          <div className="input-number--container">
            <div className="input-number--inside">
              <input
                onChange={(e) => dispatch(updateHeightIn(e.target.value))}
                id="inHeight"
                type="number"
                placeholder="0"
                className="input-number"
              />
              <h3 className="input-number--heading">in</h3>
            </div>
          </div>
        </div>
        <div className="input-number--box">
          <div className="input-number--container">
            <label htmlFor="stWeight">Weight</label>
            <div className="input-number--inside">
              <input
                onChange={(e) => dispatch(updateWeightSt(e.target.value))}
                id="stWeight"
                type="number"
                placeholder="0"
                className="input-number"
              />
              <h3 className="input-number--heading">st</h3>
            </div>
          </div>
          <div className="input-number--container">
            <div className="input-number--inside">
              <input
                onChange={(e) => dispatch(updateWeightLbs(e.target.value))}
                id="lbsWeight"
                type="number"
                placeholder="0"
                className="input-number"
              />
              <h3 className="input-number--heading">lbs</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRadio === "metric") {
    input = (
      <div className="input-number--box">
        <div className="input-number--container">
          <label htmlFor="height">Height</label>
          <div className="input-number--inside">
            <input
              onChange={(e) => dispatch(updateHeightCm(e.target.value))}
              id="height"
              type="number"
              placeholder="0"
              className="input-number"
            />
            <h3 className="input-number--heading">cm</h3>
          </div>
        </div>
        <div className="input-number--container">
          <label htmlFor="weight">Weight</label>
          <div className="input-number--inside">
            <input
              onChange={(e) => dispatch(updateWeightKg(e.target.value))}
              id="weight"
              type="number"
              placeholder="0"
              className="input-number"
            />
            <h3 className="input-number--heading">kg</h3>
          </div>
        </div>
      </div>
    );
  }

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

          {input}
        </form>
        <div className="div-result">
          <div>
            <h2 className="heading-secondary--hero">Welcome!</h2>
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
