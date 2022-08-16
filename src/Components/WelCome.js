import React from "react";
import styles from "./HomePage.module.css";

const WelCome = () => {
  return (
    <main>
      <h1 className={styles.welcome}>welcome to Online Shop</h1>
      <p className={styles.title}>
        Hi there! We missed you and we prepared a little gift for you! Hi! It’s
        great to see you back! We have a special discount for our returning
        customers. Are you interested? Welcome back! Good to see you again. Can
        we help you with anything?
      </p>
    </main>
  );
};

export default WelCome;
