import React from "react";
import styles from "./Routes.module.scss";
import WeatherApp from "../WeatherApp";
import QuizApp from "../QuizApp";
import FootballApp from "../FootballApp";
import { Router } from "@reach/router";

const Routes = () => {
  return (
    <>
      <Router>
        <WeatherApp path="/" />
        <QuizApp path="/quiz" />
        <FootballApp path="/football" />
      </Router>
    </>
  );
};

export default Routes;
