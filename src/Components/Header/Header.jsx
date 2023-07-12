import { React } from "react";
import logo from "../../img/logo.svg";
import Button from "../Button/Button";
import "./Header.module.scss";

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
