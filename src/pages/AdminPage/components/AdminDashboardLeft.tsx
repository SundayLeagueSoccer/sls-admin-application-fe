import React, { useState } from "react";

// stylesheet
import styles from "../styles/AdminDashboardLeft.module.scss";

const AdminDashboardLeft = () => {
  const [playerNames, setPlayersNames] = useState([
    {
      id: 1,
      name: "Sanni",
    },
    {
      id: 2,
      name: "Sanni",
    },
    {
      id: 3,
      name: "Sanni",
    },
  ]);
  return (
    <section className={styles.DashboardLeft}>
      {playerNames.map((player) => (
        <div className={styles.PlayersName}>
          <p>{player.name}</p>
        </div>
      ))}
    </section>
  );
};

export default AdminDashboardLeft;
