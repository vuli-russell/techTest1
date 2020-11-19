import React, {useState} from "react";
import styles from "./FootballApp.module.scss";
import * as data from "../../data/teamData.json";
import PlayerCard from "./PlayerCard";

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

  return (
    <main className={styles.football}>
      <section className={styles.playerCards}>
        {players.map(player => <PlayerCard key={player.id}
          player={player}
          currentLineUp={currentLineUp}
          setCurrentLineUp={setCurrentLineUp}/>
        )}
      </section>
      <section className={styles.team}>
        {Object.keys(currentLineUp).map(position => {
          return (<div><h1>{position}</h1>{currentLineUp[position].map(player => <p>{player.name}</p>)}</div>)
        })}
      </section>
    </main>
  );
};

export default FootballApp;
