import React from "react";
import Button from "../Button/Button";
import User from "./User/User";
import styles from "./UsersList.module.scss";

const UsersList = (props) => {
  return (
    <div className={styles.content}>
      <h1>Working with GET request</h1>
      <div className={styles.usersList}>
        {props.users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
      {props.showMore && (
        <div onClick={() => props.getUsers()}>
          <Button value={"Show more"} />
        </div>
      )}
    </div>
  );
};

export default UsersList;
