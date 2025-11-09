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
          eventPosterURL="/img/events/live/registrationPoster2025.avif"
          eventHeading="UPES-CSA: Register Now"
          eventText={
            <>
              <p>
                <strong>Ignite Your Future with the UPES Cloud Security Alliance Student Chapter!</strong> 🌟
              </p>
              <p>
                The UPES-CSA Student Chapter invites passionate learners and innovators to be a part of its growing community.
                Dedicated to fostering knowledge, collaboration, and professional growth, we provide a platform that empowers you
                to explore, learn, and lead in the evolving world of cloud and security.
              </p>
              <p>
                <strong>Why Join UPES-CSA?</strong>
              </p>
              <ul>
                <li>
                  ✨ <strong>Exclusive Learning Opportunities:</strong> Access premium workshops and events to boost your technical and professional growth.
                </li>
                <li>
                  🌐 <strong>Professional Networking:</strong> Connect with mentors, industry experts, and like-minded peers to expand your circle.
                </li>
                <li>
                  📜 <strong>Skill Enhancement:</strong> Build in-demand skills through hands-on projects and real-world challenges.
                </li>
                <li>
                  🎯 <strong>Career Development:</strong> Gain the experience and exposure needed to accelerate your professional journey.
                </li>
                <li>
                  💼 <strong>Internship Benefits:</strong> Unlock exclusive internship opportunities with top organizations and startups.
                </li>
              </ul>
              <p>
                Take the lead in organizing initiatives, representing the chapter, and driving impactful change within the UPES community.
              </p>
              <p>
                🔗 Secure your spot today by registering via the link below!
              </p>
              
            </>
          }

          eventFormURL="/Register"
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
