import { useState, useEffect } from "react";
import styles from "./HomeEvents.module.css";

import useFetch from "../../hooks/useFetch";

import SectionHeading from "../SectionHeading/SectionHeading";
import ShowMore from "../ShowMore/ShowMore";
import Loading from "../Loading/Loading";
import EventImg from "../EventImg/EventImg";

// CSS STYLES
const { homeEventsContainer, homeEventGrid } = styles;

const HomeEvents = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data, error, loading } = useFetch({
    url: "http://localhost:3000/api/previousevent/?home=true",
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={homeEventsContainer} id="events">
      <SectionHeading
        heading="Events"
        underlineColor="var(--blueUnderLine)"
        textColor="var(--textDark)"
      />
      <div className={homeEventGrid}>
        {data.map((event, index) =>
          screenWidth > 1000 ? (
            <EventImg key={index} imageURL={event.imageURL} />
          ) : (
            index < 4 && <EventImg key={index} imageURL={event.imageURL} />
          )
        )}
      </div>
      <ShowMore link="/events" />
    </div>
  );
};

export default HomeEvents;
