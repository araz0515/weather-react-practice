import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Cloudy",
    degrees: "25",
    humidity: "80",
    wind: "10 ",
    feelsLike: "30",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <h1 className="city" id="city">
            {weatherData.city}
          </h1>
          <div className="clearfix">
            <img
              src={weatherData.imageUrl}
              alt=""
              className="src float-start image"
              id="iconElement"
            />
            <div className="temperature float-start" id="temperature">
              <h1 className="temp-value" id="temp-value">
                {weatherData.degrees}
              </h1>
              <span className="degree">
                {" "}
                <button className=" degreeCelsius active" id="degreeCelsius">
                  ˚C
                </button>{" "}
                |{" "}
                <button className="degreeFahrenheit" id="degreeFahrenheit">
                  ˚F
                </button>
              </span>
              <div className="description" id="description" />{" "}
              {weatherData.description}
            </div>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}%</span>
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}km/h</span>
            </li>
            <li>
              Feels Like: <span id="feelsLike">{weatherData.feelsLike}˚C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
