import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./SectionHeroResult.css";

const SectionHeroResult = ({ selectedRadio }) => {
  const { heightCm, weightKg, heightFt, heightIn, weightSt, weightLbs } =
    useSelector((state) => ({
      heightCm: +state.heightCm,
      weightKg: +state.weightKg,
      heightFt: +state.heightFt,
      heightIn: +state.heightIn,
      weightSt: +state.weightSt,
      weightLbs: +state.weightLbs,
    }));

  let bmiResult = (
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
  );

  let bmiCalc = 0;
  let bmiChecker;

  if (heightCm !== 0 && weightKg !== 0 && selectedRadio === "metric") {
    bmiCalc = weightKg / ((heightCm * heightCm) / 10000);

    const minBmi = 18.5 * ((heightCm * heightCm) / 10000);
    const maxBmi = 25 * ((heightCm * heightCm) / 10000);

    if (bmiCalc < 18.5) bmiChecker = "underweight";
    if (bmiCalc >= 18.5 && bmiCalc < 25) bmiChecker = "normal";
    if (bmiCalc >= 25 && bmiCalc < 40) bmiChecker = "overweight";
    if (bmiCalc >= 40) bmiChecker = "obese";

    if (bmiCalc)
      return (bmiResult = (
        <div className="div-result">
          <div className="div-result__bmi">
            <div className="div-result__bmi--inside">
              <div>
                <h2 className="heading-secondary--hero__bmi">Your BMI is...</h2>
              </div>
              <div>
                <p className="div-result--text__bmi">{bmiCalc.toFixed(2)}</p>
              </div>
            </div>
            <p className="div-result__bmi--text">
              Your BMI suggests you’re a {bmiChecker} weight. Your ideal weight
              is between{" "}
              <span style={{ fontWeight: 700 }}>
                {minBmi.toFixed(1)}kgs - {maxBmi.toFixed(1)}kgs
              </span>
              .
            </p>
          </div>
        </div>
      ));
  }
  if (
    heightFt !== 0 &&
    heightIn !== 0 &&
    heightIn < 12 &&
    weightSt !== 0 &&
    weightLbs !== 0 &&
    weightLbs < 14 &&
    selectedRadio === "imperial"
  ) {
    bmiCalc =
      ((weightSt * 14 + weightLbs) /
        ((heightFt * 12 + heightIn) * (heightFt * 12 + heightIn))) *
      703;

    const minBmiSt =
      (18.5 * ((heightFt * 12 + heightIn) * (heightFt * 12 + heightIn))) /
      703 /
      14;
    const minBmiLbs =
      ((18.5 * ((heightFt * 12 + heightIn) * (heightFt * 12 + heightIn))) /
        703) %
      14;
    const maxBmiSt =
      (25 * ((heightFt * 12 + heightIn) * (heightFt * 12 + heightIn))) /
      703 /
      14;
    const maxBmiLbs =
      (25 * ((heightFt * 12 + heightIn) * (heightFt * 12 + heightIn))) /
      703 /
      14;

    if (bmiCalc < 18.5) bmiChecker = "overweight";
    if (bmiCalc >= 18.5 && bmiCalc < 25) bmiChecker = "normal";
    if (bmiCalc >= 25 && bmiCalc < 40) bmiChecker = "overweight";
    if (bmiCalc >= 40) bmiChecker = "obese";

    return (bmiResult = (
      <div className="div-result">
        <div className="div-result__bmi">
          <div className="div-result__bmi--inside">
            <div>
              <h2 className="heading-secondary--hero__bmi">Your BMI is...</h2>
            </div>
            <div>
              <p className="div-result--text__bmi">{bmiCalc.toFixed(2)}</p>
            </div>
          </div>
          <p className="div-result__bmi--text">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between{" "}
            <span style={{ fontWeight: 700 }}>
              {minBmiSt.toFixed()}st {minBmiLbs.toFixed()}lbs -{" "}
              {maxBmiSt.toFixed()}st {maxBmiLbs.toFixed()}lbs
            </span>
            .
          </p>
        </div>
      </div>
    ));
  }

  return bmiResult;
};

export default SectionHeroResult;
