import React from "react";

// React link
import { Link, useLocation } from "react-router-dom";

// stylesheet
import styles from "../styles/LandingButtons.module.scss";

const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const LandingButtons = () => {
  const location = useLocation();
  const { pathname } = location;

  // Extract the title from the pathname
  const route = routes.find((route) => route.path === pathname);
  const title = route ? route.title : "";

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
