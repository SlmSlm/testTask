import React, { useState } from "react";

import FormGroup from "./FormGroup/FormGroup";
import styles from "./SignUp.module.scss";
import SuccessRegistration from "./SuccessRegistration/SuccessRegistration";

const SignUp = (props) => {
  const [registered, setRegistered] = useState(false);

  return (
    <div className={styles.content} id="signUp">
      {!registered ? (
        <FormGroup
          addNewUser={props.addNewUser}
          page={props.page}
          setRegistered={setRegistered}
          loading={props.loading}
          setPreloader={props.setPreloader}
        />
      ) : (
        <SuccessRegistration />
      )}
    </div>
  );
};

export default SignUp;
