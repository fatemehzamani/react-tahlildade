import React from "react";
import { Link } from "react-router-dom";
import mobilesPic from "../Content/Images/Mobiles.jpg";
import tabletsPic from "../Content/Images/Tablets.jpg";
import styles from "./HomePage.module.css";

const Product = () => {
  return (
    <div>
      <Link to="./Mobiles">
        <img src={mobilesPic} alt="mobiles" className={styles.productsPic} />
      </Link>
      <Link to="./Tablets">
        <img src={tabletsPic} alt="mobiles" className={styles.productsPic} />
      </Link>
    </div>
  );
};

export default Product;
