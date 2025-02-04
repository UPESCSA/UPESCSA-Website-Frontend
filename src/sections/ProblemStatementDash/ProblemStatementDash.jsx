import PropTypes from "prop-types";
import styles from "./ProblemStatementDash.module.css";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import PopupHackathon from "../../components/PopupHackathon/PopupHackathon";

import useFetch from "../../hooks/useFetch";
import axios from "axios";

const {
  mainDiv,
  problemStatementDiv,
  problemStatementInfo,
  problemStatementMetaData,
  problemStatementHeading,
  popupRegisterButton,
} = styles;

const ProblemStatementBody = ({ statement }) => {
  const [psActive, setPsActive] = useState(statement.PSActive);

  const closePS = async () => {
    await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/api/hackathon/ps/${statement.PSId}`,
      {
        PSActive: false,
      }
    );
    setPsActive(false);
  };

  const openPS = async () => {
    await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/api/hackathon/ps/${statement.PSId}`,
      {
        PSActive: true,
      }
    );
    setPsActive(true);
  };

  return (
    <div className={problemStatementInfo}>
      <p className={problemStatementMetaData}>
        <span>Problem Statement ID:</span> {statement.PSId}
      </p>
      {psActive ? (
        <div
          className={popupRegisterButton}
          style={{ backgroundColor: "green" }}
          onClick={closePS}
        >
          <p>OPEN</p>
        </div>
      ) : (
        <div
          className={popupRegisterButton}
          style={{ backgroundColor: "red" }}
          onClick={openPS}
        >
          <p>CLOSED</p>
        </div>
      )}
    </div>
  );
};

ProblemStatementBody.propTypes = {
  statement: PropTypes.shape({
    PSId: PropTypes.string,
    PSActive: PropTypes.bool,
    PSTitle: PropTypes.string,
    PSOrganization: PropTypes.string,
    PSSectorDomain: PropTypes.string,
    PSDescription: PropTypes.string,
    PSFunctionalRequirement: PropTypes.array,
    PSNonFunctionalRequirement: PropTypes.array,
  }),
};

const ProblemStatementDash = () => {
  const { data, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/hackathon/ps`,
  });

  const [selectedStatement, setSelectedStatement] = useState({
    PSId: "PS01",
    PSActive: true,
    PSSectorDomain: "CyberSecurity - AI",
    PSOrganization: "DRDO",
    PSTitle: "Synergizing Human-AI Collaboration for Enhanced Cybersecurity",
    PSDescription:
      "Cybersecurity requires the development of seamless human-AI collaboration frameworks that synergize human domain expertise with artificial intelligence's computational capabilities. By fostering trust and transparency, organizations can confidently leverage AI-powered decision-making while ensuring prudent human oversight and adherence to established protocols. Develop seamless human-AI collaboration frameworks that leverage the strengths of both parties and build trust in AI-powered decision-making.",
    PSFunctionalRequirement: [
      "AI Model Integration: The framework should allow for the integration of various AI models specializing in cybersecurity tasks, such as threat detection, vulnerability assessment, and incident response.",
      "Human Oversight and Validation: The framework should provide mechanisms for human experts to review and validate the decisions and recommendations made by the AI models, ensuring transparency and accountability.",
      "Collaborative Decision-Making: The framework should facilitate a collaborative decision-making process, where AI models and human experts can exchange insights, discuss potential risks and mitigation strategies, and reach consensus on the most appropriate course of action.",
      "Continuous Learning and Adaptation: The framework should incorporate mechanisms for continuous learning and adaptation, allowing AI models to improve their performance based on feedback and new data provided by human experts.",
    ],
    PSNonFunctionalRequirement: [
      "Trust and Transparency: The framework should foster trust in AI-powered decision-making by ensuring transparency in the AI models' reasoning processes and providing clear explanations for their recommendations.",
      "Scalability and Performance: The framework should be scalable and able to handle large volumes of data and cybersecurity events, while maintaining high performance and responsiveness to ensure timely decision-making.",
    ],
  });

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (statement) => {
    setSelectedStatement(statement);
    setShowPopup(true);
    console.log(statement);
  };

  const closePopup = () => {
    setSelectedStatement(null);
    setShowPopup(false);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={mainDiv} id="problemStatement">
      <Logo src="/logo/hackathon.png" height={"10rem"} />
      <div className={problemStatementHeading}>
        <h1 className="heading">Problem Statements</h1>
      </div>
      <div className={problemStatementDiv}>
        {data.map((statement, index) => (
          <div key={index}>
            <ProblemStatementBody statement={statement} openPopup={openPopup} />
          </div>
        ))}
      </div>
      {showPopup && (
        <PopupHackathon
          statementID={selectedStatement.PSId}
          statementTitle={selectedStatement.PSTitle}
          statementOrganisation={selectedStatement.PSOrganization}
          statementSectorDomain={selectedStatement.PSSectorDomain}
          statementDescription={selectedStatement.PSDescription}
          statementFunctionalRequirement={
            selectedStatement.PSFunctionalRequirement
          }
          statementNonFunctionalRequirement={
            selectedStatement.PSNonFunctionalRequirement
          }
          statementActive={selectedStatement.PSActive}
          eventFormURL="https://forms.gle/6aHxGtjkMnSgrrUT6"
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ProblemStatementDash;
