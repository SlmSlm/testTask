import React from "react";
import styles from "./User.module.scss";

const User = ({ user }) => {
  const textHandler = (string) => {
    if (string.length >= 44) return `${string.slice(0, 44)}...`;
    return string;
  };

  return (
    <div className={styles.card}>
      <img src={user.photo} alt="User" />
      <div className={styles.textContent}>
        <p className={styles.name}>{textHandler(user.name)}</p>
        <p>{textHandler(user.position)}</p>
        <p>{textHandler(user.email)}</p>
        <p>{textHandler(user.phone)}</p>
      </div>
    </div>
  );
};

export default User;
