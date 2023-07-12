import React from "react";
import photoCover from "../../../img/photoCover.svg";
import styles from "./User.module.scss";

const User = ({ user }) => {
  const textHandler = (string) => {
    if (string.length >= 44) {
      return (
        <span className={styles.tooltip}>
          {`${string.slice(0, 24)}...`}
          <span className={styles.tooltipText}>{string}</span>
        </span>
      );
    } else {
      return <span>{string}</span>;
    }
  };

  const checkPhoto = (e) => {
    e.target.src = photoCover;
  };

  return (
    <div className={styles.card}>
      <img src={user.photo} alt="User" onError={checkPhoto} loading="lazy"/>
      <div className={styles.textContent}>
        {textHandler(user.name)} 
        {textHandler(user.position)}
        {textHandler(user.email)}
        {textHandler(user.phone)}
      </div>
    </div>
  );
};

export default User;
