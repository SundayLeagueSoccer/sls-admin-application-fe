import React from "react";
import styles from "../styles/AdminDashboardRight.module.scss";
import useApp from "../../../hooks/useApp";
import axios from "../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminDashboardRight = () => {
  const { statsCategory, setPlayersStatsList, playersStatsList } = useApp();
  const navigate = useNavigate();

  const getUrl = () => {
    let definer: string;
    if (statsCategory === "goals") {
      definer = "goals";
    } else if (statsCategory === "assists") {
      definer = "assists";
    } else if (statsCategory === "clean-sheets") {
      definer = "cleanSheets";
    } else if (statsCategory === "yellow-cards") {
      definer = "yellowCards";
    } else {
      definer = "redCards";
    }

    return `/players/2023B/${definer}`;
  };

  const STATS_URL = getUrl();

  const getCorrectStatFlag = () => {
    if (statsCategory === "goals") {
      return "Goals";
    } else if (statsCategory === "assists") {
      return "Assists";
    } else if (statsCategory === "clean-sheets") {
      return "Clean Sheets";
    } else if (statsCategory === "yellow-cards") {
      return "Yellow Cards";
    } else {
      return "Red Cards";
    }
  };

  const handleDeleteStatLine = (playerName: string) => {
    const newList = playersStatsList.filter(
      (selectedPlayer) => selectedPlayer.name !== playerName
    );
    setPlayersStatsList(newList);
    toast.success(`${playerName} deleted from list successfully.`, {
      autoClose: 1000,
    });
  };

  const submitHandler = async () => {
    try {
      const response = await axios.patch(
        STATS_URL,
        JSON.stringify(playersStatsList),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //save the user login into the auth state
      // console.log(response.data);
      console.log(response.data);
      if (response.data.message === "Updated all players") {
        toast.success(`All ${statsCategory} updated successfully.`, {
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.DashboardRight}>
      <div className={styles.GoalList}>
        <div className={styles.GoalListHeader}>
          <h3>21st June 2022 Goals List</h3>
        </div>
        {playersStatsList.length > 0 ? (
          <>
            {playersStatsList.map((statLine, index) => (
              <div className={styles.GoalListDetail} key={statLine.playerId}>
                <div className={styles.LeftDetail}>
                  <p>{index + 1}</p>
                  <p>{statLine.name}</p>
                </div>
                <div className={styles.RightDetail}>
                  <p>{statLine.goals}</p>
                  <p>{statLine.assists}</p>
                  <p>{statLine.cleanSheets}</p>
                  <p>{statLine.yellowCards}</p>
                  <p>{statLine.redCards}</p>
                  <button onClick={() => handleDeleteStatLine(statLine.name)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div>No Player Stats Inputed yet...</div>
          </>
        )}
      </div>
      <div className={styles.Submit}>
        <button
          onClick={() => submitHandler()}
          disabled={playersStatsList.length < 1}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminDashboardRight;
