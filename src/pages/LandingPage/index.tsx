// stylesheet
import styles from "./LandingPage.module.scss";

// Framer motion
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

// React link
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <div className={styles.LandingPageHeader}>
            <p>What do you want to update?</p>
          </div>
          <div className={styles.LandingPageButtons}>
            <Link to="/">
              <button>Goals</button>
            </Link>
            <Link to="/">
              <button>Assists</button>
            </Link>
            <Link to="/">
              <button>Clean Sheets</button>
            </Link>
            <Link to="/">
              <button>Red Cards</button>
            </Link>
            <Link to="/">
              <button>Yellow Cards</button>
            </Link>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
