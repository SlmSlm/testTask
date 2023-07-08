import React from "react";
import styles from "./Button.module.scss";

const Button = ({ value, type, disabled }) => {
  return (
    <button type={type} disabled={disabled || false}>
      {value}
    </button>
  );
};

export default Button;
