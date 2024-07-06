import React from "react";
import * as styles from "./style.module.scss";
import ProfileImg from "../../../../assets/img/profile.jpeg";
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headerText}>Hi, I'm Jia Hui</div>
        <div className={styles.headerSubtext}>
          <p>
            A senior software engineer with full-stack experience
            <br />I would say I'm a carefree, responsible and fun person. I have
            fun with code!
          </p>
        </div>
      </div>
      <div className={styles.profileImg}>
        <img alt="profile" src={ProfileImg} />
      </div>
    </div>
  );
};

export default Header;
