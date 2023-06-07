import React, { useState, useEffect } from "react";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import styles from "./AdminPage.module.scss";
import { useLocation } from "react-router-dom";
import useApp from "../../hooks/useApp";

// components
import AdminPageHeader from "./components/AdminPageHeader";
import AdminDashboardLeft from "./components/AdminDashboardLeft";
import AdminDashboardMiddle from "./components/AdminDashboardMiddle";
import AdminDashboardRight from "./components/AdminDashboardRight";
import AdminView from "./components/AdminView";

const AdminPage = () => {
  const { setStatsCategory, setPlayersStatsList } = useApp();
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname.substring(12, location.pathname.length);
    setStatsCategory(routeName);
    setPlayersStatsList([]);
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AdminPage}>
          <AdminPageHeader />
          <div className={styles.AdminPageDashboard}>
            <AdminDashboardLeft />
            <AdminDashboardMiddle />
            <AdminDashboardRight />
          </div>
          <AdminView />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AdminPage;
