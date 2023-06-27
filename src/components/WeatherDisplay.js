import React from "react";

const WeatherDisplay = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <div className="section section__temperature">
      <div className="icon">
        <h3>{`${weather.name}, ${weather.country}`}</h3>
        <img src={weather.iconURL} alt="weather-icon" />
        <h3>{weather.description}</h3>
      </div>
      <div className="temperature">
        <h1>{`${weather.temp.toFixed()} ${tempUnit}`}</h1>
      </div>
    </div>
  );
};

export default WeatherDisplay;
