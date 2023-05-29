import React from "react";
import styles from "../styles/AdminPageHeader.module.scss";
import useApp from "../../../hooks/useApp";

const AdminPageHeader = () => {
  const { statsCategory } = useApp();

  return (
    <section className={styles.AdminPageHeader}>
      <h1>Update {statsCategory}</h1>
      <h4>Click on the players names and input their stats.</h4>
    </section>
  );
};

export default AdminPageHeader;
