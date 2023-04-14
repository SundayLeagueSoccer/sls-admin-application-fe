import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

const PublicPageLayout = () => {
  return (
    <>
      <main className={styles.PublicPageLayout}>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default PublicPageLayout;
