import React from "react";
import * as styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>About</span>
      </div>
      <p>
        I'm a software engineer with <b>over 3 years of experience</b> and I
        enjoy creating front-end interfaces to life. I'm a <b>quick learner</b>{" "}
        and I have become experienced with back-end development at work as well.
      </p>
      <p>
        I'm swift at <b>translating requirements to code and writing code</b>,
        while I'm also eager and take initiative in{" "}
        <b>project/technical management and mentorship</b>.
      </p>
      <p>
        There's still so much more to learn in the world of coding. I'm
        currently searching for new opportunities that will allow me to take on
        new challenges and grow in the technical aspect.
      </p>
    </div>
  );
};

export default About;
