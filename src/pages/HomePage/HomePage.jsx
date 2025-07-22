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
          eventPosterURL="/img/events/live/AlumVerse.avif"
          eventHeading="AlumVerse: REGISTER NOW!"
          eventText={
            <>
              <p>
                <strong>
                  Step Into the AlumVerse: A CSA Alumni Panel Event
                </strong>
              </p>
              <p>
                Ever wondered what life looks like after college? What choices
                shaped the journeys of your seniors? What mistakes to avoid and
                what paths to chase?
              </p>
              <p>
                <strong>AlumVerse</strong> is your chance to connect directly
                with three accomplished alumni of the{" "}
                <strong>UPES Cloud Security Alliance Student Chapter</strong>,
                as they return to share their real-life stories, career
                insights, academic experiences, and answer your burning
                questions!
              </p>
              <ul>
                <li>
                  <strong>Date:</strong> 26th July, 2025
                </li>
                <li>
                  <strong>Mode:</strong> Online through Microsoft Teams
                </li>
                <li>
                  <strong>Featuring:</strong> A live panel discussion + Q&A with
                  Alumni
                </li>
              </ul>
              <p>
                🚀 Whether you’re curious about job roles, higher studies,
                research, or just navigating life after graduation; this is your
                moment to ask, listen, and learn.
              </p>
              <p>
                👥 <strong>Seats are limited!</strong> Don’t miss this
                opportunity to learn directly from those who were once in your
                shoes.
              </p>
              <p>
                👉 <strong>Register Now to reserve your spot!</strong>
              </p>
            </>
          }
          eventFormURL="/AlumVerse"
          closePopup={togglePopup}
          buttonText="REGISTER NOW"
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
