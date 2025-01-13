import { Link } from "react-router-dom";

import styles from "./HomeSection.module.css";

const {
  mainDiv,
  homeContent,
  homeSubHeading,
  homeImage,
  // backgroundVectors,

  // pythonLogo,
  // reactLogo,
  // flutterLogo,
  // piLogo,
  // nodejsLogo,
  // javaLogo,
  // javascriptLogo,
} = styles;

const HomeSection = () => {
  return (
    <div className={mainDiv}>
      <div className={homeImage}>
        <img src="/logo/Hackathon4.0.png" alt="Hackathon" />
      </div>
      <div className={homeContent}>
        <h2 className={homeSubHeading}>
          For minds that innovate <br />
          Unveil your vision!
        </h2>
        <Link to={"/hackathon4.0/register"}>
          <button className="registrationButton">REGISTER NOW</button>
        </Link>
      </div>

      {/* BACKGROUND VECTORS */}
      {/*       
      // <img
      //   src="/illustrations/python.png"
      //   alt="python"
      //   id={pythonLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/react.png"
      //   alt="react"
      //   id={reactLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/flutter.png"
      //   alt="flutter"
      //   id={flutterLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/pi.png"
      //   alt="pi"
      //   id={piLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/javascript.png"
      //   alt="javascript"
      //   id={javascriptLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/nodejs.png"
      //   alt="nodejs"
      //   id={nodejsLogo}
      //   className={backgroundVectors}
      // />

      // <img
      //   src="/illustrations/java.png"
      //   alt="java"
      //   id={javaLogo}
      //   className={backgroundVectors}
      // /> */}
    </div>
  );
};

export default HomeSection;
