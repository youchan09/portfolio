import React from "react";
import AboutSection from "../organisms/AboutSection";
import SkillList from "../organisms/SkillList";
import styles from "./About.module.css";

const About = () => (
  <section className={styles.about}>
    <AboutSection />
    <h3>기술 스택</h3>
    <SkillList />
  </section>
);

export default About;
