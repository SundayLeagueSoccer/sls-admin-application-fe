import React from 'react'

// Images
import phone from "../images/phones.png";

// stylesheet
import styles from "../styles/AdminView.module.scss";

const AdminView = () => {
  return (
    <section className={styles.MobileTabView}>
    <img src={phone} alt="phone" />
    <p>
      We're sorry, but it seems that the current page cannot be viewed
      on your device due to the screen size limitation. To ensure the
      best user experience and readability, the page you're trying to
      access requires a larger screen size.
    </p>
  </section>
  )
}

export default AdminView