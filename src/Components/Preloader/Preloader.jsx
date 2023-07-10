import React from "react";
import preloader from "../../img/preloader.svg";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div>
      <img src={preloader} alt="preloader" className={styles.rot} />
    </div>
  );
};

export default Preloader;
