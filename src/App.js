import React, { useEffect, useState, useCallback } from "react";
import Descriptions from "./components/Descriptions";
import WeatherDisplay from "./components/WeatherDisplay";
import CityInput from "./components/CityInput";
import { getFormattedWeatherData } from "./weatherService";
import hotBg from "./assets/hotBg.jpg";
import warmBg from "./assets/warmBg.jpg";
import coolBg from "./assets/coolBg.jpg";
import coldBg from "./assets/coldBg.jpg";

function App() {
  const [city, setCity] = useState("coimbatore");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState();

  useEffect(() => {
    // Function to fetch data
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData(city, units);
        setWeather(data);

        // Set bg image based on temperature
        const hot = units === "metric" ? 30 : 86;
        const warm = units === "metric" ? 15 : 59;
        const cool = units === "metric" ? 5 : 41;
        // const cold = units === "metric" ? 0 : 32;

        const temperature = data.temp;

        if (temperature >= hot) {
          setBg(hotBg);
        } else if (temperature >= warm) {
          setBg(warmBg);
        } else if (temperature >= cool) {
          setBg(coolBg);
        } else {
          setBg(coldBg);
        }
      } catch (err) {
        alert("Enter valid city name");
      }
    };

    fetchWeatherData();
  }, [city, units]);

  const handleCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const handleUnits = useCallback(
    (e) => {
      const button = e.currentTarget;
      const currentUnit = button.innerText.slice(1);
      const isCelsius = currentUnit === "C";
      button.innerText = isCelsius ? "°F" : "°C";
      setUnits(isCelsius ? "metric" : "imperial");
    },
    [setUnits]
  );

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <CityInput handleCity={handleCity} handleUnits={handleUnits} />
            <WeatherDisplay weather={weather} units={units} />
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
