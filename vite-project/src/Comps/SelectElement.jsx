import React from "react";

const SelectElement = ({ handleStateChange }) => {
  return (
    <div>
      <label htmlFor="select">state</label>
      <br />
      <select name="select" onChange={handleStateChange}>
        <option value="WY">Wyoming</option>
        <option value="UT">Utah</option>
        <option value="MO">Missouri</option>
        <option value="NE">Nebraska</option>
        <option value="MS">Mississippi</option>
        <option value="WI">Wisconsin</option>
      </select>
    </div>
  );
};

export default SelectElement;
