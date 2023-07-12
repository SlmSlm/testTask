import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   let lazyLoadImages;

  //   if ("IntersectionObserver" in window) {
  //     lazyLoadImages = document.querySelectorAll(".lazy");
  //     let imageObserver = new IntersectionObserver(function (entries) {
  //       entries.forEach(function (entry) {
  //         if (entry.isIntersecting) {
  //           let image = entry.target;
  //           image.classList.remove("lazy");
  //           imageObserver.unobserve(image);
  //         }
  //       });
  //     });

  //     lazyLoadImages.forEach(function (image) {
  //       imageObserver.observe(image);
  //     });
  //   } else {
  //     let lazyLoadThrottleTimeout;
  //     lazyLoadImages = document.querySelectorAll(".lazy");

  //     function lazyLoad() {
  //       if (lazyLoadThrottleTimeout) {
  //         clearTimeout(lazyLoadThrottleTimeout);
  //       }

  //       lazyLoadThrottleTimeout = setTimeout(function () {
  //         if (lazyLoadImages.length === 0) {
  //           window.removeEventListener("resize", lazyLoad);
  //           window.removeEventListener("orientationChange", lazyLoad);
  //         }
  //       }, 20);
  //     }

  //     window.addEventListener("resize", lazyLoad);
  //     window.addEventListener("orientationChange", lazyLoad);
  //   }
  // });

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
