import React from "react";
import logo from "../../img/logo.svg";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} href="#" alt="logo" id="logo" />
        <div>
          <Button value="Users" />
          <Button value="Sign up" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
