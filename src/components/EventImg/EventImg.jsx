import Proptypes from "prop-types";
import styles from "./EventImg.module.css";
import { useState, useEffect } from "react";

// CSS STYLES
const { eventImage, eventTitle } = styles;

const EventImg = ({
  imageURL,
  imageTitle,
  gridColumn = "span 1",
  gridRow = "span 1",
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return screenWidth > 768 ? (
    <div className={eventImage} style={{ gridColumn, gridRow }}>
      <img loading="lazy" src={imageURL} alt="event" />
      <p className={eventTitle}>{imageTitle}</p>
    </div>
  ) : (
    <div
      className={eventImage}
      style={{ gridColumn: "span 1", gridRow: "span 1" }}
    >
      <img loading="lazy" src={imageURL} alt="event" />
      <p className={eventTitle}>{imageTitle}</p>
    </div>
  );
};

EventImg.propTypes = {
  imageURL: Proptypes.string.isRequired,
  gridColumn: Proptypes.string,
  gridRow: Proptypes.string,
};

export default EventImg;
