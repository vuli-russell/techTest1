import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard"
import styles from "./WeatherApp.module.scss";
import dotenv from "dotenv";

dotenv.config()

const WeatherApp = () => {

  const weatherUrl = `https://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&appid=${process.env.REACT_APP_API_KEY}`

  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const getWeather = async () => {setWeatherData((await axios.get(weatherUrl)).data.list)};
    getWeather();
  }, [])


  return (
    <main className={styles.weatherGallery}>
      <h1>Some Very Specific Weather Data</h1>
      <p>Sorry if you dont live in one of these 3 places</p>
      {weatherData.length ? weatherData.map(city => <WeatherCard key={city.id} data={city}/>) : <h1>Loading</h1>} 
    </main>
  );
};

export default WeatherApp;
