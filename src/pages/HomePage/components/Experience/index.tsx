import React from "react";
import * as styles from "./style.module.scss";

const jobs: {
  duration: string;
  title: string;
  description: string;
  cards: { header: string; text: string }[];
}[] = [
  {
    duration: "Feb 2022 - Present",
    title: "Senior Software Engineer · Univers",
    description: `Assuming primary responsiblity as the Frontend Lead, I've spearheaded
    and contributed in full-stack development of large-scale solutions
    that allow corporations to assess and manage their energy assets
    smartly to achieve greater energy sustainability and decarbonization.`,
    cards: [
      {
        header: "TECHNICAL & MANAGEMENT CAPABILITY",
        text: "Attaining on-time and quality delivery of customized projects for clients in both public and private sector",
      },
    ],
  },
  {
    duration: "Jul 2020 - Aug 2021",
    title: `Senior Infocomm Officer (Software Engineer) · Inland Revenue Authority
    of Singapore (IRAS)`,
    description: `As a software engineer, I've contributed in the development work of
    various tax-related applications that serve the general public, as
    well as providing assistance in requirements gathering and analysis.`,
    cards: [],
  },
  {
    duration: "May 2019 - Oct 2019",
    title: "Software Developer Intern · GIC",
    description: `Through the internship, I learnt and developed various tools and web
    applications that enable business users to improve efficiency in terms
    of handling and analyzing data.`,
    cards: [],
  },
];
const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Experience</span>
      </div>
      {jobs.map((i) => (
        <div key={i.title} className={styles.jobSection}>
          <div className={styles.jobDuration}>{i.duration}</div>
          <div className={styles.jobTitle}>{i.title}</div>
          <p>{i.description}</p>
          {i.cards.map((i) => (
            <div className={styles.card}>
              <div className={styles.cardHeader}>{i.header}</div>
              <div>{i.text}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
