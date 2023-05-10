import React from "react";
import { useState } from "react";

const api = {
  key: "5a24c1980ba5517e9c06f8d75c30c862",
  baseUrl: "https://api.openweathermap.org/data/2.5/", // weather?q={city name}&appid=5a24c1980ba5517e9c06f8d75c30c862
};

function WeatherAPI() {
  const [search, setSearch] = useState("");
  const [temperature, setTemperature] = useState({});

  const searchPressed = () => {
    fetch(`${api.baseUrl}weather?q=${search}&units=imperial&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setTemperature(result);
      });
  };

  return (
    <div className="WeatherAPI">
      <main>
        <h4 style={{ marginTop: 10, marginBottom: 20 }}>
          Always Good To Check The Temp Before you Go...
        </h4>
        <div className="searchbox">
          <input
            type="text"
            className="searchAPi"
            placeholder="Enter a State...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="APIbutton">
            Check Temp
          </button>
        </div>

        <div className="location">{temperature.name}</div>
        {temperature.main ? (
          <>
            <div className="tempBox">{temperature.main.temp.toFixed()}°</div>

            <div className="weatherDescription">
              {temperature.weather || temperature.weather.icon ? (
                <>
                  {" "}
                  <img
                    style={{ height: "40px" }}
                    src={`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@4x.png`}
                    alt="weatherIcon"
                  ></img>
                  {temperature.weather[0].description}
                  <img
                    style={{ height: "40px" }}
                    src={`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@4x.png`}
                    alt="weatherIcon"
                  ></img>
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}

export default WeatherAPI;
