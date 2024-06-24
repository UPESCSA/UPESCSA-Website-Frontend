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
          eventPosterURL="/img/events/live/HIRING POST.jpg"
          eventHeading="Registration Drive"
          eventText={
            <>
              Join UPES-CSA for 2024-2025!
              <br />
              Unlock exclusive opportunities with the pioneering Cloud Security
              Alliance student chapter in Uttarakhand.
              <br />
              <br />
              <p>
                - Funded Courses: AWS User Group Mumbai, Code Warriors, Newton
                School
              </p>
              <p>- $200 AWS Vouchers</p>
              <p>- Internships: Whizlabs, Hackershala</p>
              <p>- Events: Cloud4Career, Entropedia, Hackathon 3.0, and more</p>
              <p>- Community Connections</p>
              <br />
              Don't miss out on growth, learning, and professional development.
              Join UPES-CSA today!
            </>
          }
          eventFormURL="https://forms.gle/mctt7HtoEMkTZfmZ8"
          closePopup={togglePopup}
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
