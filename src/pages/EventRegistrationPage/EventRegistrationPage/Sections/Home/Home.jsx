import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const { mainDiv, homeContent, homeSubHeading, homeImage } = styles;

const Home = () => {
  return (
    <div className={mainDiv}>
      <div className={homeImage}>
        <img src="/logo/Entropedia Logo.png" alt="Hackathon" />
      </div>
      <div className={homeContent}>
        <h2 className={homeSubHeading}>
          For minds that innovate, Unveil your vision!
        </h2>
        <br />
        <br />
        <Link to={"/entropedia/register"}>
          <button className="registrationButton">REGISTER NOW !</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
