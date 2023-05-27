import React, { useState, useEffect } from "react";

import Navbar from "../../Components/Navbar";

// Framer motion
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

// stylesheet
import styles from "./AdminPage.module.scss";

// components
import AdminPageHeader from "./components/AdminPageHeader";
import AdminDashboardLeft from "./components/AdminDashboardLeft";
import AdminDashboardMiddle from "./components/AdminDashboardMiddle";
import AdminDashboardRight from "./components/AdminDashboardRight";
import AdminView from "./components/AdminView";


const AdminPage = () => {

  useEffect(() => {
    
  }, [])
  
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AdminPage}>
          {/* <Navbar/> */}
          <AdminPageHeader/>
          <div className={styles.AdminPageDashboard}>
            <AdminDashboardLeft/>
            <AdminDashboardMiddle/>
            <AdminDashboardRight/>
          </div>
            <AdminView/>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AdminPage;
