import React from "react";
import * as styles from "./style.module.scss";
import { Tag } from "antd";

const frontendTags = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Typescript",
  "Zustand",
  "API Integration",
  "Webpack",
  "Babel",
  "Apache Echarts",
  "Ant Design",
  "Leaflet",
  "OpenLayers",
];

const backendTags = ["Java", "Spring Boot"];

const developmentTags = ["Git", "Docker", "Kong", "Keycloak"];

const othersTag = [
  "Agile Practices",
  "Requirements Analysis",
  "Documentation",
  "Systems Design",
];

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Skills</span>
      </div>
      <div className={styles.subtitle}>Tech Stack</div>
      <div className={styles.tagsContainer}>
        {[...frontendTags, ...backendTags, ...developmentTags].map((i) => (
          <Tag key={i} className={styles.tag}>
            {i}
          </Tag>
        ))}
      </div>

      <div className={styles.subtitle}>Others</div>
      <div className={styles.tagsContainer}>
        {othersTag.map((i) => (
          <Tag key={i} className={styles.tag}>
            {i}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Skills;
