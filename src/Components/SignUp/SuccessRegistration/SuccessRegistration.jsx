import React from "react";
import image from "../../../img/successImage.svg";

const SuccessRegistration = () => {
  return (
    <>
      <h1>User successfully registered</h1>
      <img
        src={image}
        alt="Success!"
        style={{ width: "20.5rem", height: "18.125rem", marginTop: "3.12rem" }}
      />
    </>
  );
};

export default SuccessRegistration;
