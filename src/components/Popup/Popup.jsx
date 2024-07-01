import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Popup.module.css";

// CSS STYLES
const {
  popupContainer,
  popupDiv,
  popupImage,
  popupTextDiv,
  popupHeading,
  popupText,
  popupRegisterButton,
  popupCloseButton,
} = styles;

const Popup = ({
  eventPosterURL,
  eventHeading,
  eventText,
  buttonText,
  eventFormURL,
  closePopup,
}) => {
  return (
    <div className={popupContainer}>
      <div className={popupDiv}>
        <div className={popupImage}>
          <img loading="lazy" src={eventPosterURL} alt="eventPoster" />
        </div>
        <div className={popupTextDiv}>
          <h4 className={popupHeading}>{eventHeading}</h4>
          <p className={popupText}>{eventText}</p>
          <Link to={eventFormURL} className={popupRegisterButton}>
            <p>{buttonText}</p>
            <img loading="lazy" src="/icons/rightArrow.png" alt="arrow" />
          </Link>
        </div>
        <div className={popupCloseButton} onClick={closePopup}>
          <img loading="lazy" src="/icons/hamburgercross.png" alt="cross" />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  eventPosterURL: Proptypes.string.isRequired,
  eventHeading: Proptypes.string.isRequired,
  eventText: Proptypes.element.isRequired,
  eventFormURL: Proptypes.string.isRequired,
  closePopup: Proptypes.func.isRequired,
};

export default Popup;
