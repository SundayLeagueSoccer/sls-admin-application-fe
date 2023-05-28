import React from 'react';

// stylesheet
import styles from "../styles/AdminDashboardMiddle.module.scss";

const AdminDashboardMiddle = () => {
  return (
    <section className={styles.DashboardMiddle}>
    <div className={styles.AddPlayerGoal}>
      <p>Oghenetega Esedere</p>
      <input type="text" placeholder="Enter goal" />
      <button>Add</button>
    </div>
  </section>
  )
}

export default AdminDashboardMiddle