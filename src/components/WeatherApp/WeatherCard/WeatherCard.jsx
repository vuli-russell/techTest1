import React from "react";
import styles from "./WeatherCard.module.scss";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {

  const { name, main, weather } = props.data;
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main
  const { description, icon} = weather[0]

  const toC = (kelvin) => `${Math.round((kelvin-273.15)*100)/100}°C`;
  console.log(props.data)
  return (
    <article className={styles.weatherCard}>

      <div className={styles.name}>
        <p>{name}</p>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.icon}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
      </div>

      <div className={styles.temp}>
        <h1>{toC(temp)}</h1>
      </div>

      <div className={styles.feelsLike}>
        <p>Feels like: {toC(feels_like)}</p>
      </div>

      <div className={styles.maxTemp}>
        <p>
          <FontAwesomeIcon icon={faArrowUp} />
          {toC(temp_max)}
        </p>
      </div>

      <div className={styles.minTemp}>
        <p>
          <FontAwesomeIcon icon={faArrowDown} />
          {toC(temp_min)}
        </p>
      </div>

    </article>
  );
};

export default WeatherCard;
