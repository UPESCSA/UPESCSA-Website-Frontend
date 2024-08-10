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
  const eventActive = false;
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
          eventPosterURL="/img/events/live/MEMOIR 3.0.jpg"
          eventHeading="Memoir 3.0"
          eventText={
            <>
              <p>
                <strong>
                  Welcome to Memoir 3.0, the ultimate event designed to elevate
                  your professional growth! 🚀
                </strong>
              </p>
              Are you ready to refine your resume and ace those interviews? This
              dynamic two-day event is designed to transform your professional
              journey. Memoir 3.0 is back, bigger and better than ever, with a
              refreshed focus on equipping you with cutting-edge career tools.
              <p>
                Join us for an immersive experience that blends expert insights
                with practical strategies. Session 1 will guide you through
                crafting a standout resume, while Session 2 will prepare you to
                master interview techniques with confidence.
              </p>
              <p>
                Don’t miss this chance to invest in yourself and take your
                career to the next level! Secure your spot now and prepare to
                unlock new professional opportunities.
              </p>
              <p>📅 Date: August 11th, 2024</p>
              <p>
                🕒 Time:
                <ul>
                  <li>Session 1: 10:00 AM to 12:00 PM</li>
                  <li>Session 2: 2:00 PM to 4:00 PM</li>
                </ul>
              </p>
              <p>🌐 Platform: Microsoft Teams</p>
              <p>Transform your career trajectory with Memoir 3.0.</p>
              <p>Click below and be part of this transformative journey!</p>
            </>
          }
          eventFormURL="/memoir3.0"
          closePopup={togglePopup}
          buttonText="Register Now!"
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
