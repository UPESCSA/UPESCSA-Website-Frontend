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
          eventPosterURL="/img/events/live/RegistrationDrive.avif"
          eventHeading="Join UPES-CSA: Registrations Open!"
          eventText={
            <>
              <p>
                🚀 <strong>Ignite Your Future with UPES-CSA!</strong>
              </p>
              <p>
                We’re thrilled to invite you to become a part of the{" "}
                <strong>
                  UPES Cloud Security Alliance (UPES-CSA) Student Chapter
                </strong>
                —a vibrant, tech-focused community where collaboration meets
                innovation.
              </p>
              <p>
                Are you ready to take the next big step in your tech journey?
                Here’s why you should join us:
              </p>
              <ul>
                <li>
                  💼 <strong>Exclusive Access</strong> to workshops, seminars,
                  and webinars with industry experts.
                </li>
                <li>
                  🤝 <strong>Networking Opportunities</strong> with
                  professionals and like-minded peers.
                </li>
                <li>
                  🛠 <strong>Skill Development</strong> via hands-on experiences
                  and technical sessions.
                </li>
                <li>
                  🚀 <strong>Career Growth</strong> through mentorship and
                  expert guidance.
                </li>
                <li>
                  🎓 <strong>Internship Opportunities</strong> for
                  high-performing members.
                </li>
              </ul>
              <p>
                Ready to join our mission and grow with UPES-CSA? Be a part of
                our Core Committee and shape the future of cloud security at
                UPES!
              </p>
              <p>🔗 Secure your spot by clicking the button below.</p>
            </>
          }
          eventFormURL="/register"
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
