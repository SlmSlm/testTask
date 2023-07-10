import React from "react";
import photoCover from "../../../img/photoCover.svg";
import styles from "./User.module.scss";

const User = ({ user }) => {
  const checkPhoto = (e) => {
    e.target.src = photoCover;
  };

  return (
    <div className={styles.card}>
      <img src={user.photo} alt="User" onError={checkPhoto} />
      <div className={styles.textContent}>
        <p className={styles.name}>{user.name}</p>
        <p>{user.position}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
};

export default User;
