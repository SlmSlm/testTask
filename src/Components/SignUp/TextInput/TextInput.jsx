import React, { useState } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  helperText,
  validateForm,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let action = "";

    const emailPattern =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;

    if (name === "name") {
      if (value.length < 2 || value.length > 60) {
        setErrorMessage("Username should contain 2-60 characters");
        action = "remove";
      } else {
        setErrorMessage("");
        action = "add";
      }
    }

    if (name === "email") {
      if (!value.match(emailPattern)) {
        setErrorMessage("email must be a valid email according to RFC2822");
        action = "remove";
      } else if (value.length >= 100) {
        setErrorMessage("The email may not be greater than 100 characters");
        action = "remove";
      } else {
        setErrorMessage("");
        action = "add";
      }
    }

    if (name === "phone") {
      if (!value.match(phonePattern)) {
        setErrorMessage("Number should start with code of Ukraine +380");
        action = "remove";
      } else {
        setErrorMessage("");
        action = "add";
      }
    }

    onChange(e);
    validateForm(name, action);
  };

  return (
    <>
      <label
        htmlFor={name}
        className={`${styles.uploadInputLabel} ${
          errorMessage ? styles.hasError : ""
        }`}
      >
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={validateInput}
        />
        {errorMessage ? (
          <p className={styles.errorMessage}>{errorMessage}</p>
        ) : (
          <p>{helperText}</p>
        )}
      </label>
    </>
  );
};

export default TextInput;
