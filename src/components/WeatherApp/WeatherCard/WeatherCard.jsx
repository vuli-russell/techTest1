import React from "react";
import styles from "./WeatherCard.module.scss";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {

  const { name, main, weather } = props.data;
  const { feels_like, humidity, temp, temp_max, temp_min } = main
  const { icon } = weather[0]

  const toC = (kelvin) => `${Math.round((kelvin-273.15)*10)/10}°C`;
  return (
    <article className={styles.weatherCard}>


      <h1>{name}</h1>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
      <h1>{toC(temp)}</h1>
      <div>
        <p>Feels like: {toC(feels_like)}</p>
        <p>
          Max: {toC(temp_max)}
        </p>
        <p>
          Min: {toC(temp_min)}
        </p>
        <p>RH: {humidity}%</p>
      </div>

    </article>
  );
};

export default WeatherCard;
