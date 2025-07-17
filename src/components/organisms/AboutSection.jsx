import React from "react";
import ProfileImage from "../atoms/ProfileImage";
import styles from "./AboutSection.module.css";
import aboutProfileImg from "../../assets/487439602_529364559922869_6564047555703265857_n.jpg";

const AboutSection = () => (
  <div className={styles.aboutSection}>
    <ProfileImage src={aboutProfileImg} alt="프로필" />
    <div>
      <h2>노유찬</h2>
      <p>마이스터고등학교 1학년<br />프론트엔드 개발자 지망생</p>
      <p>새로운 기술을 배우고, 다양한 프로젝트에 도전하는 것을 좋아합니다.</p>
    </div>
  </div>
);

export default AboutSection; 