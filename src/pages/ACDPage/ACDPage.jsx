import React, { useRef } from "react";
import Navbar from "../../components/ACDNavbar/ACDNavbar";
import FadedSection from "../../components/ACDFadedSection/ACDFadedSection";
import ACDAbout from "../../components/AboutACD/AboutACD";
import SpeakersCarousel from "../../components/SpeakersCarousel/SpeakersCarousel";
import styles from "./ACDPage.module.css";
import ACDTimeLine from "../../components/ACDTimeline/ACDTimeline";
import FaqSection from "../../sections/FaqSection/FaqSection";

const ACDPage = () => {
  const timelineRef = useRef(null);
  const aboutRef = useRef(null);
  const speakerRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToSpeakers = () => {
    speakerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={styles.wrapper}>
      <Navbar
        onTimelineClick={scrollToTimeline}
        onAboutClick={scrollToAbout}
        onSpeakersClick={scrollToSpeakers}
        onFaqClick={scrollToFaq}
      />
      <main className={styles.main}>
        <FadedSection />
        <ACDAbout ref={aboutRef} />
        <SpeakersCarousel ref={speakerRef} />
        <FaqSection ref={faqRef} />
        {/* <ACDTimeLine ref={timelineRef} /> */}
      </main>
    </div>
  );
};

export default ACDPage;
