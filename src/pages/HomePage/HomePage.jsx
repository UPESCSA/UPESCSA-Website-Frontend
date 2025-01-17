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
          eventPosterURL="/img/events/live/hackathon4.0.jpeg"
          eventHeading="Hackathon 4.0"
          eventText={
            <>
              <p>🚀 Hackathon 4.0: Where Innovation Meets Impact! 🚀</p>
              <p>
                Brace yourself for the most thrilling tech extravaganza of the
                year—Hackathon 4.0 is here! Whether you're a seasoned developer,
                a visionary problem-solver, or an aspiring tech enthusiast, this
                is your moment to create, innovate, and lead the charge in
                solving real-world challenges.
              </p>
              <p>📅 Event Date: 7-9 FEB 2025</p>
              <p>🌐 Mode: Online</p>
              <p>
                💡 Hackathon 4.0 isn’t just an event; it’s a movement to
                redefine possibilities and shape the future. Collaborate with
                brilliant minds, tackle challenges that matter, and bring your
                groundbreaking ideas to life.
              </p>
              <p>
                🔗Register Now and take your first step toward making a
                difference. Be the force that drives innovation, creativity, and
                collaboration.
              </p>
              <p>💻 Dream it. Build it. Impact the World.</p>
              <p>Don’t wait—your journey to innovation starts here! 🌍✨</p>
            </>
          }
          eventFormURL="/hackathon4.0"
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
