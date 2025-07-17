import React from "react";
import styles from "./Contact.module.css";
import profileImg from "../../assets/image0.jpg";

const Contact = () => (
  <section className={styles.contact}>
    <h2>Contact</h2>
    <div className={styles.profileWrapper}>
      <a
        href="https://github.com/youchan09"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.profileLink}
      >
        <img
          src={profileImg}
          alt="프로필"
          className={styles.githubProfile}
        />
      </a>
    </div>
    <ul>
      <li>Email: meister@school.ac.kr</li>
      <li className={styles.gmail}>Gmail: noyouchan010@gmail.com</li>
    </ul>
    <div className={styles.githubLinkWrapper}>
      <span style={{color:'#00896b', fontWeight:700, fontSize:'1.15rem', marginRight:'6px'}}>Git:</span>
      <a
        href="https://github.com/youchan09"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
      >
        GitHub: youchan09
      </a>
    </div>
  </section>
);

export default Contact;
