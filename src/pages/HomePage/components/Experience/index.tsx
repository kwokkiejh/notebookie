import React from "react";
import * as styles from "./style.module.scss";

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Experience</span>
      </div>
      <div>
        <div className={styles.jobDuration}>Feb 2022 - Present</div>
        <div className={styles.jobTitle}>
          Senior Software Engineer · Univers
        </div>
        <p>
          Assuming primary responsiblity as the Frontend Lead, I've spearheaded
          and contributed in full-stack development of large-scale solutions
          that allow corporations to assess and manage their energy assets
          smartly to achieve greater energy sustainability and decarbonization.
        </p>
      </div>
      <div>
        <div className={styles.jobDuration}>Jul 2020 - Aug 2021</div>
        <div className={styles.jobTitle}>
          Senior Infocomm Officer (Software Engineer) · Inland Revenue Authority
          of Singapore (IRAS)
        </div>
        <p>
          As a software engineer, I've contributed in the development work of
          various tax-related applications that serve the general public, as
          well as providing assistance in requirements gathering and analysis.
        </p>
      </div>
      <div>
        <div className={styles.jobDuration}>May 2019 - Oct 2019</div>
        <div className={styles.jobTitle}>Software Developer Intern · GIC</div>
        <p>
          Through the internship, I learnt and developed various tools and web
          applications that enable business users to improve efficiency in terms
          of handling and analyzing data.
        </p>
      </div>
    </div>
  );
};

export default Experience;
