import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navbar}>
      <h1 className={styles.title}>노유찬의 포트폴리오</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header; 