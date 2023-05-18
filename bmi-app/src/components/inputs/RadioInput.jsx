import React from "react";

import "./RadioInput.css";

const RadioInput = ({ value, checked, onChange, label }) => {
  return (
    <div className="form-radio--inside">
      <input
        value={value}
        type="radio"
        checked={checked}
        onChange={onChange}
        id={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default RadioInput;
