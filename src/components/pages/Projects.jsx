import React, { useState } from "react";
import { projects } from "../store/Projects";
import ProjectCard from "../organisms/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projects.filter(project => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true;
    return project.title.toLowerCase().includes(term);
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(searchValue);
    }
  };

  return (
    <section className={styles.projects}>
      <h2>프로젝트</h2>
      <input
        type="text"
        placeholder="프로젝트 제목을 입력하세요..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
        style={{ color: '#111' }}
      />
      <div className={styles.projectList}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))
        ) : (
          <p style={{ width: '100%', textAlign: 'center', color: '#888', marginTop: '32px' }}>
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
