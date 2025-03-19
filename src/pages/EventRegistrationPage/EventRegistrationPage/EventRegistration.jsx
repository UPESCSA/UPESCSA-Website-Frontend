import React from "react";
import Contact from "./Sections/Contact/Contact";
import RegistrationPrompt from "./Sections/RegistrationPromt/RegistrationPrompt";

import styles from "./EventRegistration.module.css";
import FaqComponent from "./Sections/Faq/Faq";
import TimeLine from "./Sections/TimeLine/TimeLine";
import AboutEvent from "./Sections/AboutEvent/AboutEvent";
import Home from "./Sections/Home/Home";
import AboutEcellEvent from "./Sections/AboutEvent/AboutEcell";

const { mainDiv, AboutEcell } = styles;

const EventRegistration = () => {
  return (
    <div className={mainDiv}>
      <Home />
      <AboutEvent />
      <AboutEcellEvent />
      <TimeLine />
      <FaqComponent />
      <RegistrationPrompt />
      <Contact />
    </div>
  );
};

export default EventRegistration;
