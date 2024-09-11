import { useEffect, useState, lazy, Suspense } from "react";
import styles from "./HomePage.module.css";

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Popup from "../../components/Popup/Popup";

import Loading from "../../components/Loading/Loading";

// LAZY LOAD COMPONENTS
const HomeEvents = lazy(() => import("../../components/HomeEvents/HomeEvents"));
const Alliance = lazy(() => import("../../components/Alliance/Alliance"));
const HomeBlogs = lazy(() => import("../../components/HomeBlogs/HomeBlogs"));

// CSS STYLES
const { homepageContainer } = styles;

const HomePage = () => {
  // STATES
  // SET THIS TO TRUE TO ENABLE THE POPUP
  const eventActive = true;
  const [popupOpen, setPopupOpen] = useState(false);

  // USE EFFECTS
  useEffect(() => {
    const currentHash = window.location.hash;
    const targetElement = document.getElementById(currentHash.substring(1));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    if (!eventActive) {
      return;
    }
    setTimeout(() => {
      setPopupOpen(true);
    }, 500);
  }, [eventActive]);

  // FUNCTIONS
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div className={homepageContainer}>
      {popupOpen && (
        <Popup
          eventPosterURL="/img/events/live/TechChronicals.png"
          eventHeading="Registration Drive"
          eventText={
            <>
              <p>
                {" "}
                Welcome to TechChronicles – Blogging the Blueprint of Tomorrow’s
                Tech!
              </p>
              <p>
                Embark on a journey into the future of technology with
                TechChronicles, our dynamic two-round blog-writing competition.
                This is your chance to showcase your innovative ideas and gain
                valuable insights.
              </p>
              <p>Join us for an engaging experience where you will:</p>
              <p>
                - Round 1: Create an interactive, multimedia-rich blog on how a
                chosen technology will evolve over the next decade and shape the
                world in a more advanced form.
              </p>
              <p>
                - Round 2: Present your blog in a live session, defending your
                insights and predictions in an interactive Q&A with industry
                experts.
              </p>
              <p>Prizes Await:</p>
              <p>First Place: ₹6000 + Goodies</p>
              <p>Second Place: ₹4000 + Goodies</p>
              <p>Third Place: ₹2500 + Goodies</p>
              <p>Date:13th to 16th September</p>
              <p>Platform: Online (Virtual Event)</p>
              <p>
                Don’t miss this opportunity to make your mark in the tech world!
                Click below to register and secure your spot in TechChronicles
                today!
              </p>
            </>
          }
          eventFormURL="https://forms.gle/18SrtdVQ2Urvj6Ln7"
          closePopup={togglePopup}
          buttonText="REGISTER NOW!"
        />
      )}
      <Home showTrigger={eventActive && !popupOpen} openPopup={togglePopup} />
      <About />
      <Suspense fallback={<Loading />}>
        <HomeEvents />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Alliance />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeBlogs />
      </Suspense>
    </div>
  );
};

export default HomePage;
