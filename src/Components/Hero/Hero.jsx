import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>

        <a href="/#signUp">
          <Button value="Sign up" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
