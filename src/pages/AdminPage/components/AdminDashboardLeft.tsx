import React, { useState, useEffect } from "react";
import styles from "../styles/AdminDashboardLeft.module.scss";
import axios from "../../../api/axios";
import useApp from "../../../hooks/useApp";

const AdminDashboardLeft = () => {
  // const [playerNames, setPlayersNames] = useState([
  //   {
  //     id: 1,
  //     name: "Sanni",
  //   },
  //   {
  //     id: 2,
  //     name: "Oghenetega",
  //   },
  //   {
  //     id: 3,
  //     name: "Sanni",
  //   },
  //   {
  //     id: 3,
  //     name: "riri",
  //   },
  //   {
  //     id: 3,
  //     name: "Iyanu",
  //   },
  //   {
  //     id: 3,
  //     name: "Sanni",
  //   },
  // ]);
  const {
    setAllPlayers,
    allPlayers,
    setCurrentSelectedPlayer,
    playersToDisplay,
    setAllPlayersToDisplay,
    playersStatsList,
  } = useApp();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setLoading(true);

    const getAllPlayers = async () => {
      try {
        const response = await axios.get(`/players/playerIds`, {
          signal: controller.signal,
        });
        isMounted && setAllPlayers(response.data);
        isMounted && setAllPlayersToDisplay(response.data);
      } catch (error: any) {
        if (error && error.message) {
          setError(error.message);
        } else {
          setError("An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    getAllPlayers();

    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, []);

  useEffect(() => {
    const remainingPlayers = allPlayers.filter((player) => {
      const nameToRemove = player.name;
      if (
        playersStatsList.find(
          (selectedPlayer) => selectedPlayer.name === nameToRemove
        )
      ) {
        return 0;
      } else return 1;
    });

    setAllPlayersToDisplay(remainingPlayers);
  }, [playersStatsList]);

  if (loading) {
    return (
      <div className={styles.Stats}>
        <h2 className={styles.loading_text}>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.Stats}>
        <h2 className={styles.error_text}>ServerSide Error</h2>
      </div>
    );
  }

  return (
    <section className={styles.DashboardLeft}>
      {playersToDisplay.map((player) => (
        <div
          className={styles.PlayersName}
          key={player._id}
          onClick={() => setCurrentSelectedPlayer(player)}
        >
          <p>{player.alias}</p>
        </div>
      ))}
    </section>
  );
};

export default AdminDashboardLeft;
