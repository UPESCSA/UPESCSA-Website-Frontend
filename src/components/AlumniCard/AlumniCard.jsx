import React from "react";
import styles from "./AlumniCard.module.css";
import AlumniImg from "../AlumniImg/AlumniImg";
import { Link } from "react-router-dom";

const AlumniCard = ({ index, alumnus }) => {
  const { Alumnicard, Name, AlumniInfo, ConnectButton, Info } = styles;
  return (
    <div key={index} className={Alumnicard}>
      <AlumniImg src={alumnus.alumniImgURL} />
      <div className={AlumniInfo}>
        <p className={Name}>{alumnus.name}</p>
        <p className={Info}>
          {alumnus.position.toLowerCase() == "nil" ||
          alumnus.position.toLowerCase() == "nan"
            ? ""
            : alumnus.position}
        </p>
        <p className={Info}>
          {alumnus.company.toLowerCase() == "nil" ||
          alumnus.company.toLowerCase() == "nan"
            ? ""
            : alumnus.company}
        </p>
      </div>
      <Link target="_blank" className={ConnectButton} to={alumnus.linkedInURL}>
        CONNECT
      </Link>
    </div>
  );
};

export default AlumniCard;
