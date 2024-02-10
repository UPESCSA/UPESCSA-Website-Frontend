import Proptypes from "prop-types";
import styles from "./EventGrid.module.css";

import Loading from "../../components/Loading/Loading";
import EventImg from "../../components/EventImg/EventImg";

// CSS STYLES
const { eventGrid } = styles;

const EventGrid = ({ data, loading, error }) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h6>Something went wrong...</h6>;
  }
  return (
    <div className={eventGrid}>
      {data.map((event, index) => (
        <EventImg key={index} imageURL={event.imageURL} />
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
  loading: Proptypes.bool,
  error: Proptypes.bool,
};

export default EventGrid;
