import styles from "../styles/AdminDashboardRight.module.scss";
import useApp from "../../../hooks/useApp";
import axios from "../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../utils/LoadingButton";
import { useState } from "react";

const AdminDashboardRight = () => {
  const { statsCategory, setPlayersStatsList, playersStatsList } = useApp();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(false);
  const [resetButtonController, setResetButtonController] = useState(false);

  const getCurrentSeason = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth();
    const seasonPart = month < 6 ? `A` : `B`;
    return `${year}${seasonPart}`;
  };

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
    if (playersStatsList.length < 1) {
      toast.error(`You have to select one player and his stats`, {
        autoClose: 2000,
      });
      setResetButtonController(true);
      return;
    }

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
      if (response.data.message === "Updated all players") {
        toast.success(`All ${statsCategory} updated successfully.`, {
          autoClose: 2000,
        });
        setResetButtonController(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setApiError(true);
      setResetButtonController(true);
    }
  };

  return (
    <section className={styles.DashboardRight}>
      <div className={styles.GoalList}>
        <div className={styles.GoalListHeader}>
          <h3>{`${statsCategory} List`}</h3>
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
        <LoadingButton
          buttonText="Submit"
          onClickHandler={submitHandler}
          backgroundColor="#0169c2"
          hoverBackgroundColor="#387bb6"
          paddingTopBottom={10}
          fontWeight={700}
          fontSize={20}
          lineHeight={24}
          resetButton={resetButtonController}
        />
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminDashboardRight;
