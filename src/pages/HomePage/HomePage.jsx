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
          eventPosterURL="/img/events/live/REGISTRATION POSTER 2024 AUG.jpg"
          eventHeading="Registration Drive"
          eventText={
            <>
              <p>Venture into the Digital Frontier with UPES-CSA! 🌟</p>
              <p>
                Be part of UPES-CSA and explore a realm where aspirations soar
                and technological brilliance opens new doors.
              </p>
              <p>Here’s what you can look forward to:</p>

              <p>
                <strong>💻 Coding Events:</strong> Immerse yourself in a variety
                of coding experiences that challenge and refine your skills.
              </p>
              <p>
                <strong>🔥 Career Workshops:</strong> Elevate your abilities
                with specialised sessions designed to guide you toward success.
              </p>
              <p>
                <strong>💡 Seminars, Webinars & Hackathons:</strong> Stay ahead
                with insightful seminars featuring industry leaders, top-tier
                partnerships, and engaging hackathons like the recent Hackathon
                3.0.
              </p>
              <p>
                <strong>🏆 Exciting Competitions & Prizes:</strong> Challenge
                yourself in thrilling competitions for a chance to win
                impressive prizes, mementos, and certification vouchers.
              </p>
              <p>
                Don’t miss this chance to join a student chapter where
                opportunities are abundant, and dreams become reality.
              </p>
            </>
          }
          eventFormURL="/Registration"
          closePopup={togglePopup}
          buttonText="JOIN US"
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
