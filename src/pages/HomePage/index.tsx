import * as React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import * as styles from "./style.module.scss";
import Experience from "./components/Experience";

const HomePage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default HomePage;
