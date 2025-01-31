import { Link } from "react-router-dom";
import styles from "./RegistrationPromptSection.module.css";

const { mainDiv, content, contentHeading, earthVideo } = styles;

const RegistrationPromptSection = () => {
  return (
    <div className={mainDiv}>
      <div className={content}>
        <h1 className="heading" id={contentHeading}>
          Unleash your research, Build the future. <br />
          Join the Hackathon!
        </h1>
        {/* <Link to={"/hackathon4.0/register"}>
          <button className="registrationButton">REGISTER NOW!</button>
        </Link> */}
      </div>

      <video
        height="300dvh"
        autoPlay
        muted
        loop
        src="/videos/earth.webm"
        className={earthVideo}
      ></video>
    </div>
  );
};

export default RegistrationPromptSection;
