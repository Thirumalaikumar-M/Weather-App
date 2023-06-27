import React from "react";

const CityInput = ({ handleCity, handleUnits }) => {
  return (
    <div className="section section__input">
      <input
        onKeyDown={handleCity}
        type="text"
        name="city"
        placeholder="Enter city"
      />
      <button onClick={handleUnits}>℉</button>
    </div>
  );
};

export default CityInput;
