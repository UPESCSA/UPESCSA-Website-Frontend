import { Link } from "react-router-dom";
import styles from "./RegistrationPrompt.module.css";

const { mainDiv, content, contentHeading } = styles;

const RegistrationPrompt = () => {
  return (
    <div className={mainDiv}>
      <div className={content}>
        <h1 className="heading" id={contentHeading}>
          Turning Vision into Venture!
        </h1>

        {/* <Link to={"/Entropedia/register"}>
          <button className="registrationButton">REGISTER NOW!</button>
        </Link> */}
      </div>
    </div>
  );
};

export default RegistrationPrompt;
