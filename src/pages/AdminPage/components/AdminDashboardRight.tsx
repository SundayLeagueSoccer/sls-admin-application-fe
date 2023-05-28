import React from "react";

// stylesheet
import styles from "../styles/AdminDashboardRight.module.scss";

const AdminDashboardRight = () => {
  return (
    <section className={styles.DashboardRight}>
      <div className={styles.GoalList}>
        <div className={styles.GoalListHeader}>
          <h3>21st June 2022 Goals List</h3>
        </div>
        <div className={styles.GoalListDetail}>
          <div className={styles.LeftDetail}>
            <p>1</p>
            <p>Sanni Yusuf</p>
          </div>
          <div className={styles.RightDetail}>
            <p>2</p>
            <button>Delete</button>
          </div>
        </div>
      </div>
      <div className={styles.Submit}>
        <button>Submit</button>
      </div>
    </section>
  );
};

export default AdminDashboardRight;
