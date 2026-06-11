import { useState, useEffect } from "react";
import styles from "./EventsPage.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventYearSwitch from "../../components/EventYearSwitch/EventYearSwitch";
import EventGrid from "../../components/EventGrid/EventGrid";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { eventsPageContainer, eventsPageDiv } = styles;

// EVENTS DATA

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [activeYear, setActiveYear] = useState(2025);
  const [url, setUrl] = useState(
    `${import.meta.env.VITE_SERVER_URL}/api/previousevent/?year=${activeYear}`
  );

  const yearData = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

  const changeYear = (year) => {
    setActiveYear(year);
  };

  useEffect(() => {
    setUrl(
      `${import.meta.env.VITE_SERVER_URL}/api/previousevent/?year=${activeYear}`
    );
  }, [activeYear]);

  const { data, error, loading } = useFetch({
    url,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={eventsPageContainer}>
      <PageHeading imgURL="/img/pageheaders/events.jpg" text="EVENTS" />
      <div className={eventsPageDiv}>
        <EventYearSwitch
          yearData={yearData}
          activeYear={activeYear}
          changeYear={changeYear}
        />
        <EventGrid data={data} />
      </div>
    </div>
  );
};

export default EventsPage;
