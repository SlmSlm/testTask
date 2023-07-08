import React from "react";

import FormExample from "./FormGroup/FormGroup";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.content}>
      <h1>Working with POST request</h1>
      <FormExample />
    </div>
  );
};

export default SignUp;
