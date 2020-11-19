import React, {useState} from "react";
import styles from "./FootballApp.module.scss";
import * as data from "../../data/teamData.json";
import PlayerCard from "./PlayerCard";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FootballApp = () => {

  const generateEmptyTeam = () => {
    return {
      Goalkeeper: [],
      Defender: [],
      Midfielder: [],
      Attacker: []
    }
  }

  const [currentLineUp, setCurrentLineUp] = useState(generateEmptyTeam())

  const [players, setPlayers] = useState(data.default.filter(player => player.role==="PLAYER"))

  const removePlayer = (player) => {
    setCurrentLineUp({...currentLineUp, [player.position]: currentLineUp[player.position].filter(currentPlayer => currentPlayer != player)})
  }
  
  return (
    <>
      <main className={styles.football}>
        <section className={styles.playerCards}>
          {players.filter(player => !currentLineUp[player.position].includes(player))
            .map(player => <PlayerCard key={player.id}
            player={player}
            currentLineUp={currentLineUp}
            setCurrentLineUp={setCurrentLineUp}/>
          )}
        </section>
        <section className={styles.team}>
          <header className={styles.header}>
            {/* cant make local version of file load*/}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1200px-Borussia_M%C3%B6nchengladbach_logo.svg.png" alt=""/>
            <h1>Borussia Mönchengladbach Team Picker</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1200px-Borussia_M%C3%B6nchengladbach_logo.svg.png" alt=""/>
            </header> 
          {Object.keys(currentLineUp).map(position => {
            return (
              <div key={position}>
                <h1>{`${position}s`}</h1>
                <div className={styles.currentLineUp}>
                  {currentLineUp[position].map(player => (
                    <div key={player.id} className={styles.playerIcon}>
                      <span>{player.name}</span>
                      <FontAwesomeIcon className={styles.remove} icon={faMinusCircle} onClick={() => {removePlayer(player)}} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </>
  );
};

export default FootballApp;
