import React from "react";
import styles from "./Header.module.scss";
import { faFutbol, faSun, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>Vuli Russell Tech Test</h1>
      <div className={styles.links}>
        <div className={styles.link}>
          <Link to="/"><FontAwesomeIcon icon={faSun} /></Link>
        </div>
        <div className={styles.link}>
          <Link to="/quiz"><FontAwesomeIcon icon={faQuestionCircle} /></Link>
        </div>
        <div className={styles.link}>
          <Link to="/football"><FontAwesomeIcon icon={faFutbol} /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
