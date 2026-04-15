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
          eventPosterURL="/img/funtopia_6.0.jpg.jpeg"
          eventHeading="🎉 Funtopia 6.0 - The Ultimate Campus Adventure!"
          eventText={
            <>
              <p>
                <strong>Adventure begins where comfort zones end!</strong>
              </p>
              <p>
                Get ready for Funtopia 6.0, the exciting 3-day annual fest.
                Experience a thrilling mix of campus adventures, competitive
                gaming, and mind-challenging activities designed to test your
                skills, strategy, and teamwork.
              </p>
              <p>
                <strong>📅 Event Dates: 27 - 29 March 2026</strong>
              </p>
              <p>
                <strong>🔎 Event Line-Up</strong>
              </p>
              <ul>
                <li>
                  <strong>🗺 Treasure Hunt: 27 March</strong>
                  <br />
                  Decode clues, solve puzzles, and race across campus to uncover
                  the hidden treasure.
                </li>
                <li>
                  <strong>🎮 Valorant Tournament: 28 March</strong>
                  <br />
                  Assemble your squad and compete in intense 5v5 battles where
                  strategy and coordination decide the champions.
                </li>
                <li>
                  <strong>🔥 BGMI Tournament: 29 March</strong>
                  <br />
                  Enter the battleground with your squad and fight for survival
                  to claim the ultimate victory.
                </li>
              </ul>
              <p>
                <strong>🚀 Registrations are now open.</strong>
              </p>
              <p>
                Form your team, mark your calendars, and get ready to experience
                three days of competition, excitement, and campus adventure at
                Funtopia 6.0.
              </p>
            </>
          }
          eventFormURL="/Funtopia"
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
