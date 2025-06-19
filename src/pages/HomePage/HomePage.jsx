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
          eventPosterURL="/img/events/live/WebGenesis.avif"
          eventHeading="WebGenesis: REGISTER NOW!"
          eventText={
            <>
              <p>
                🚀 <strong>Build. Automate. Deploy.</strong> Welcome to{" "}
                <strong>WebGenesis: Code to Cloud!</strong>
              </p>
              <p>
                Ready to launch your tech skills into the real world? Join us
                for <strong>WebGenesis: Code to Cloud</strong>, an intensive
                4-weekend online bootcamp hosted by the{" "}
                <strong>UPES Cloud Security Alliance Student Chapter</strong>.
              </p>
              <p>
                Whether you're a beginner or aiming to sharpen your full-stack
                and DevOps skills, this bootcamp is your gateway to mastering
                modern web development.
              </p>
              <ul>
                <li>
                  ✅ <strong>Full-Stack Web Dev:</strong> HTML, CSS, JavaScript,
                  Node.js, Express
                </li>
                <li>
                  ✅ <strong>DevOps Skills:</strong> GitHub, CI/CD, Docker
                </li>
                <li>
                  ✅ <strong>Cloud Deployment:</strong> AWS, Vercel, Render &
                  more
                </li>
                <li>
                  ✅ <strong>Real-World Projects:</strong> Hands-on labs and
                  live mentoring
                </li>
                <li>
                  ✅ <strong>Certificate + Recognition:</strong> Stand out with
                  verified participation
                </li>
                <li>
                  ✅ <strong>Free Registration</strong> | Open to All SoCS
                  Students
                </li>
              </ul>
              <p>
                🚨 <strong>Limited Seats Available!</strong>
              </p>
              <p>
                📆 <strong>Bootcamp Dates:</strong> 21 June – 13 July 2025
                (Weekends Only)
              </p>
              <p>
                💡 Learn to build, automate, and ship real applications from
                scratch to the cloud!
              </p>
              <p>
                🔗{" "}
                <strong>Secure your seat by clicking the button below!</strong>
              </p>
            </>
          }
          eventFormURL="/Webgenesis"
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
