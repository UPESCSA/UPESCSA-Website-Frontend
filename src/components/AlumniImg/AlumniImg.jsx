import React from "react";
import styles from "./AlumniImg.module.css";
const AlumniImg = ({ src }) => {
  const { ImageDiv, Image } = styles;
  return (
    <div className={ImageDiv}>
      <img src={src} className={Image} />
    </div>
  );
};

export default AlumniImg;
