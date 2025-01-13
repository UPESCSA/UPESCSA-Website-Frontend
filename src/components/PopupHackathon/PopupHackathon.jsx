import Proptypes from "prop-types";
import styles from "./PopupHackathon.module.css";

// CSS STYLES
const {
  popupContainer,
  popupDiv,
  popupTextDiv,
  popupHeading,
  popupRegisterButton,
  popupCloseButton,
  problemStatementMetaData,
  problemStatementDescription,
} = styles;

const PopupHackathon = ({
  statementID,
  statementTitle,
  statementOrganisation,
  statementSectorDomain,
  statementDescription,
  statementFunctionalRequirement,
  statementNonFunctionalRequirement,
  statementActive = true,
  eventFormURL,
  closePopup,
}) => {
  return (
    <div className={popupContainer}>
      <div className={popupDiv}>
        <div className={popupTextDiv}>
          <p className={problemStatementMetaData}>
            <span>Problem Statement ID:</span> {statementID}
          </p>
          <h4
            className={popupHeading}
            style={{
              color: statementActive ? "inherit" : "red",
            }}
          >
            {statementTitle}
          </h4>
          {statementOrganisation && (
            <p className={problemStatementMetaData}>
              <span>Organization:</span> {statementOrganisation}
            </p>
          )}
          <p className={problemStatementMetaData}>
            <span>Sector/Domain:</span> {statementSectorDomain}
          </p>
          <div className={problemStatementDescription}>
            <h4>Description</h4>
            <p>{statementDescription}</p>
          </div>
          {statementFunctionalRequirement && (
            <div className={problemStatementDescription}>
              <h4>Functional Requirements</h4>
              {statementFunctionalRequirement.map((requirement, index) => (
                <p key={index + 1}>
                  {index + 1}. {requirement}
                </p>
              ))}
            </div>
          )}
          {statementNonFunctionalRequirement && (
            <div className={problemStatementDescription}>
              <h4>Non-Functional Requirements</h4>
              {statementNonFunctionalRequirement.map((requirement, index) => (
                <p key={index + 1}>
                  {index + 1}. {requirement}
                </p>
              ))}
            </div>
          )}
          {statementActive ? (
            <a
              href={eventFormURL}
              className={popupRegisterButton}
              target="_blank"
              rel="noreferrer"
            >
              <p>Select Problem Statement</p>
              <img loading="lazy" src="/icons/rightArrow.png" alt="arrow" />
            </a>
          ) : (
            <div className={popupRegisterButton}>
              <p>Problem Statement Unavailable</p>
            </div>
          )}
        </div>
        <div className={popupCloseButton} onClick={closePopup}>
          <img loading="lazy" src="/icons/hamburgercross.png" alt="cross" />
        </div>
      </div>
    </div>
  );
};

PopupHackathon.propTypes = {
  statementID: Proptypes.string.isRequired,
  statementTitle: Proptypes.string.isRequired,
  statementOrganisation: Proptypes.string,
  statementSectorDomain: Proptypes.string.isRequired,
  statementDescription: Proptypes.string.isRequired,
  statementFunctionalRequirement: Proptypes.array,
  statementNonFunctionalRequirement: Proptypes.array,
  statementActive: Proptypes.bool.isRequired,
  eventFormURL: Proptypes.string.isRequired,
  closePopup: Proptypes.func.isRequired,
};

export default PopupHackathon;
