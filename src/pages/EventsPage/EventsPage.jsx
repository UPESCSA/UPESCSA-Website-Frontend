import { useState, useEffect } from "react";
import styles from "./EventsPage.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventYearSwitch from "../../components/EventYearSwitch/EventYearSwitch";
import EventGrid from "../../components/EventGrid/EventGrid";

// CSS STYLES
const { eventsPageContainer, eventsPageDiv } = styles;

// EVENTS DATA

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [activeYear, setActiveYear] = useState(2024);
  const [url, setUrl] = useState(
    `http://localhost:3000/api/previousevent/?year=${activeYear}`
  );

  const yearData = [2024, 2023, 2022, 2021, 2020, 2019, 2018];

  const changeYear = (year) => {
    setActiveYear(year);
  };

  useEffect(() => {
    setUrl(`http://localhost:3000/api/previousevent/?year=${activeYear}`);
  }, [activeYear]);

  const { data, error, loading } = useFetch({
    url,
  });

  return (
    <div className={eventsPageContainer}>
      <PageHeading imgURL="/img/pageheaders/events.png" text="EVENTS" />
      <div className={eventsPageDiv}>
        <EventYearSwitch
          yearData={yearData}
          activeYear={activeYear}
          changeYear={changeYear}
        />
        <EventGrid data={data} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default EventsPage;
