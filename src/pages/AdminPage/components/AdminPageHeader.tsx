import React from "react";

// stylesheet
import styles from "../styles/AdminPageHeader.module.scss";

const AdminPageHeader = () => {
  return (
    <section className={styles.AdminPageHeader}>
      <h1>Update Goal</h1>
      <h4>
        Click on the players names and input their number of goals scored.
      </h4>
    </section>
  );
};

export default AdminPageHeader;
