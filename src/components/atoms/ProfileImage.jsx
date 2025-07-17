import React from "react";
import styles from "./ProfileImage.module.css";

const ProfileImage = ({ src, alt }) => (
  <img className={styles.profileImage} src={src} alt={alt} />
);

export default ProfileImage; 