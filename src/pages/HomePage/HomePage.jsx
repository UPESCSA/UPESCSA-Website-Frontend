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
          eventPosterURL="/img/events/live/Entropedia Poster.jpg"
          eventHeading="ENTROPEDIA 2.0"
          eventText={
            <>
              <p>🚀 Entropedia 2.0 – Ignite. Innovate. Impact!</p>
              <p>
                The wait is over! Entropedia 2.0 is here – a powerhouse of
                entrepreneurial energy, where ideas transform into reality! 🌟
              </p>
              <p>
                Join us in collaboration with E-Cell as we bring together
                aspiring innovators, industry experts, and startup mentors to
                shape the future of entrepreneurship. Whether you're a budding
                entrepreneur or a curious problem-solver, this is your chance to
                pitch, refine, and build the next big venture!
              </p>
              <p>
                💡 <strong>What to Expect?</strong>
              </p>
              <ul>
                <li>🏆 Expert Mentorship & Guidance</li>
                <li>🌍 Real-World Startup Exposure</li>
                <li>🎖 Networking with Investors & Founders</li>
                <li>🎓 Exciting Prizes & Incubation Support</li>
              </ul>
              <p>
                📅 <strong>Date:</strong> 14Th April 2025
              </p>
              <p>
                📍 <strong>Venue:</strong> MAC, UPES Bidholi Campus
              </p>
              <p>
                Don’t miss this opportunity to turn your ideas into impact! Stay
                tuned for updates. 🚀
              </p>
            </>
          }
          eventFormURL="/entropedia/register"
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
