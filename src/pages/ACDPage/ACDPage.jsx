import React, { useRef } from "react";
import Navbar from "../../components/ACDNavbar/ACDNavbar";
import FadedSection from "../../components/ACDFadedSection/ACDFadedSection";
import styles from "./ACDPage.module.css";
import ACDTimeLine from "../../components/ACDTimeline/ACDTimeline";

const ACDPage = () => {
  const timelineRef = useRef(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={styles.wrapper}>
      <Navbar onTimelineClick={scrollToTimeline} />
      <main className={styles.main}>
        <FadedSection />
        <ACDTimeLine ref={timelineRef} />
      </main>
    </div>
  );
};

export default ACDPage;
