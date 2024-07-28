import Proptypes from "prop-types";
import styles from "./EventGrid.module.css";

import EventImg from "../../components/EventImg/EventImg";

// CSS STYLES
const { eventGrid } = styles;

const EventGrid = ({ data }) => {
  return (
    <div className={eventGrid}>
      {data.map((event, index) => (
        <EventImg
          key={index}
          imageURL={event.imageURL}
          gridColumn={event.spanx}
          gridRow={event.spany}
        />
      ))}
    </div>
  );
};

EventGrid.propTypes = {
  data: Proptypes.arrayOf(
    Proptypes.shape({
      img: Proptypes.string,
      spanx: Proptypes.string,
      spany: Proptypes.string,
    })
  ),
};

export default EventGrid;
