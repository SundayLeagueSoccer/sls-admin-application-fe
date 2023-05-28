// stylesheet
import styles from "./LandingPage.module.scss";

// Framer motion
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

// components
import LandingHeader from "./components/LandingHeader";
import LandingButtons from "./components/LandingButtons";
import LandingViews from "./components/LandingViews";

const LandingPage = () => {
  
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingHeader/>
          <LandingButtons/>
          <LandingViews/>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
