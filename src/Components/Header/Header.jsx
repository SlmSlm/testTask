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
          <a href="/#users">
            <Button value="Users" />
          </a>
          <a href="/#signUp">
            <Button value="Sign up" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
