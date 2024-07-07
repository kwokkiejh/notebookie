import React from "react";
import * as styles from "./style.module.scss";
import { Button } from "antd";
import { LinkedinFilled, MailFilled } from "@ant-design/icons";

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Contact</span>
      </div>
      <div>
        <Button
          className={styles.button}
          type="primary"
          shape="circle"
          icon={<MailFilled />}
        />
        <span>kwokkiejiahui@gmail.com</span>
      </div>
      <br />
      <div>
        <Button
          className={styles.button}
          type="primary"
          shape="circle"
          icon={<LinkedinFilled />}
        />
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/kwok-jia-hui/"
        >
          linkedin.com/in/kwok-jia-hui
        </a>
      </div>
    </div>
  );
};

export default Contact;
