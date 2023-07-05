import React from "react";
import logo from "../../img/logo.svg";
import styles from "./Header.styles.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} href="#" alt="logo" id="logo"/>
        <div>
          <button>Users</button>
          <button>Sign up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
