import { Link } from "react-router-dom";
import styles from "../styles/LandingButtons.module.scss";

const LandingButtons = () => {
  return (
    <div className={styles.LandingPageButtons}>
      <Link to="/statistics/goals">
        <button>Goals</button>
      </Link>
      <Link to="/statistics/assists">
        <button>Assists</button>
      </Link>
      <Link to="/statistics/clean-sheets">
        <button>Clean Sheets</button>
      </Link>
      <Link to="/statistics/red-cards">
        <button>Red Cards</button>
      </Link>
      <Link to="/statistics/yellow-cards">
        <button>Yellow Cards</button>
      </Link>
    </div>
  );
};

export default LandingButtons;
