import React from "react";
import styles from "./HomePage.module.css";
import { Outlet, Link } from "react-router-dom";
import MyImage from "../Content/Images/1607027181034.png";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <div>
            <img src={MyImage} alt="Logo" className={styles.imgLogo} />
            <li className={styles.rightNav}>
              <Link to="/Login">Login</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />

      <Footer />
    </div>
  );
};

export default HomePage;
