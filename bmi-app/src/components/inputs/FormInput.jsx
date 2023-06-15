import React from "react";
import "./FormInput.css";
import { useDispatch } from "react-redux";

import {
  updateHeightCm,
  updateHeightFt,
  updateHeightIn,
  updateWeightKg,
  updateWeightLbs,
  updateWeightSt,
} from "../../store/reducer.js";

const FormInput = ({ selectedRadio }) => {
  const dispatch = useDispatch();

  let input;
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
      <div className="input-number--box input-number--box__metric">
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

  return <div>{input}</div>;
};

export default FormInput;
