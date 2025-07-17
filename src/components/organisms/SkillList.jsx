import React from "react";
import styles from "./SkillList.module.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "C"];

const SkillList = () => (
  <ul className={styles.skillList}>
    {skills.map(skill => <li key={skill}>{skill}</li>)}
  </ul>
);

export default SkillList; 