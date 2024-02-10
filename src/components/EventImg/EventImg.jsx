import Proptypes from "prop-types";
import styles from "./EventImg.module.css";

// CSS STYLES
const { eventImage } = styles;

const EventImg = ({ key, imageURL }) => {
  return (
    <div
      key={key}
      className={eventImage}
      style={{ gridColumn: "span 1", gridRow: "span 1" }}
    >
      <img src={imageURL} alt="event" />
    </div>
  );
};

EventImg.propTypes = {
  key: Proptypes.number.isRequired,
  imageURL: Proptypes.string.isRequired,
};

export default EventImg;
