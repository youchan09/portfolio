import React from "react";
import styles from "./Home.module.css";

const Home = () => (
  <section className={styles.home}>
    <div className={styles.card}>
      <h2>안녕하세요! 👋</h2>
      <p>저는 마이스터고등학교에 재학 중인 예비 개발자입니다.</p>
      <p>아래에서 저의 프로젝트와 기술을 확인해보세요!</p>
    </div>
  </section>
);

export default Home;
