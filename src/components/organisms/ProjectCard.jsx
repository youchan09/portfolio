import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, techStack, link }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>기술:</strong> {techStack.join(", ")}</p>
    {link && link !== "아직 확인 못함" ? (
      <a href={link} target="_blank" rel="noopener noreferrer">깃허브 오류 수정 후 올릴 예정</a>
    ) : link === "아직 확인 못함" ? (
      <span style={{ color: '#888', fontWeight: 500 }}>{link}</span>
    ) : null}
  </div>
);

export default ProjectCard; 