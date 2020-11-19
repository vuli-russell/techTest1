import React from "react";
import styles from "./PlayerCard.module.scss";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerCard = (props) => {
  const {player, currentLineUp, setCurrentLineUp } = props;
  const { name, position, countryOfBirth } = player;
  
  let numberAllowable;

  switch(player.position){
    case "Goalkeeper":
      numberAllowable = 1
      break;
    case "Defender":
      numberAllowable = 3
      break;
    case "Midfielder":
      numberAllowable = 4
      break;
    case "Attacker":
      numberAllowable = 3
      break;
  }

  const showmessage = (message) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText=message; 
    div.append(p);
    div.classList.add(styles.warning)
    document.getElementById("root").append(div)
    setTimeout(()=>{div.remove()},2000)
  }

  const addPlayer = (player) => {
    if(currentLineUp[player.position].length >= numberAllowable){
      showmessage(`No More ${player.position}s allowed in the team`)
    }else{
      setCurrentLineUp({...currentLineUp, [player.position]:[...currentLineUp[player.position], player]});
    }
  }
  
  return (
    <div className={styles.playerCard}>
      <div className={styles.info}>
        <p>{name}</p>
        <p>{position}</p>
      </div>
      <div className={styles.actions}>
        <FontAwesomeIcon icon={faPlusCircle} onClick={() => {addPlayer(player)}} />
      </div>
    </div>
  );
};

export default PlayerCard;
