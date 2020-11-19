import React from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = (props) => {

  const { data } = props
  console.log(data)

  return (
    <>
      <p>WeatherCard works</p>
    </>
  );
};

export default WeatherCard;
