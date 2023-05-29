import React, { useState } from "react";
import styles from "../styles/AdminDashboardMiddle.module.scss";
import useApp from "../../../hooks/useApp";
import { playerStatLine } from "../../../Types";

const AdminDashboardMiddle = () => {
  const {
    setCurrentSelectedPlayer,
    currentSelectedPlayer,
    statsCategory,
    setPlayersStatsList,
    playersStatsList,
  } = useApp();
  const [statNumber, setStatNumber] = useState(0);

  const getPlayerTagText = () => {
    if (currentSelectedPlayer == undefined) {
      return `Select a player to input his stats.`;
    }
    return `${currentSelectedPlayer.name}`;
  };

  const getCorrectStatFlag = () => {
    if (statsCategory === "goals") {
      return "goals";
    } else if (statsCategory === "assists") {
      return "assists";
    } else if (statsCategory === "clean-sheets") {
      return "cleanSheets";
    } else if (statsCategory === "yellow-cards") {
      return "yellowCards";
    } else {
      return "redCards";
    }
  };

  const updateStatsList = () => {
    let newPlayerStat: playerStatLine;
    if (currentSelectedPlayer && currentSelectedPlayer._id) {
      newPlayerStat = {
        playerId: currentSelectedPlayer._id,
        name: currentSelectedPlayer.name,
        [getCorrectStatFlag()]: statNumber,
      };

      setPlayersStatsList([...playersStatsList, newPlayerStat]);
      setStatNumber(0);
      setCurrentSelectedPlayer(undefined);
    }
  };

  return (
    <section className={styles.DashboardMiddle}>
      <div className={styles.AddPlayerGoal}>
        <p>{getPlayerTagText()}</p>
        <input
          type="number"
          placeholder="Enter Stat"
          value={statNumber}
          onChange={(e) => setStatNumber(+e.target.value)}
        />
        <button
          onClick={() => updateStatsList()}
          disabled={!currentSelectedPlayer}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default AdminDashboardMiddle;
