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
          eventPosterURL="/img/events/live/Funtopia 5/Funtopia 5 Banner.png"
          eventHeading="Funtopia 5.0"
          eventText={
            <>
              <p>
                🎉 Get Ready for Funtopia 5.0 – The Ultimate Adventure Awaits!
                🚀
              </p>
              <p>
                This October, embark on a journey of thrill, creativity, and
                excitement at Funtopia 5.0, the highly anticipated 3-day
                festival organized by the UPES-Cloud Security Alliance Student
                Chapter. Packed with adrenaline-fueled competitions,
                mind-bending puzzles, and epic gaming challenges, Funtopia 5.0
                promises something for everyone! 🎮🧩
              </p>
              <p>📅 Event Dates: 21st – 23rd October, 2024</p>
              <p>Format: Online + Offline</p>
              <p>🎯 What’s in Store:</p>
              <p>
                🎮 Valorant Blitz: UPES Rapid Fire – Prove your tactical skills
                in a fast-paced Valorant showdown.
              </p>
              <p>
                📱 BGMI Tournament – Battle it out for supremacy in
                Battlegrounds Mobile India.
              </p>
              <p>
                🕵️‍♂️ Into the Upside: Halloween Treasure Hunt – Dive into a
                spine-chilling adventure and solve eerie puzzles on-campus.
              </p>
              <p>
                Whether you're a hardcore gamer, puzzle solver, or adventure
                seeker, this is your moment to shine. 🌟 Fantastic prizes 🏆 and
                unforgettable memories are up for grabs!
              </p>
              <p>
                Register now and be a part of the biggest, most exhilarating
                event of the year! 🎊
              </p>
            </>
          }
          eventFormURL="/Funtopia/Registration"
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
