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
          eventPosterURL="/img/events/live/Stack Up.jpg"
          eventHeading="Memoir 3.0"
          eventText={
            <>
              <p>
                This comprehensive workshop series will guide you from initial
                concept to deployment, offering hands-on experience and insights
                from industry experts.
              </p>
              Event Details:
              <p>🗓️ Date: 6-7th, 13-14th July</p>
              <p>⏰ Duration: Four days</p>
              <p>📍 Location: Virtual</p>
              <br />
              Workshop Schedule:
              <br />
              <p>🌟 Day 1 – Interface Imagination: UI/UX:</p>
              <p>- Introduction to design concepts/principles</p>
              <p>- Basics of Figma: Interface, Navigation, and Basic Tools</p>
              <p>- Designing wireframes to plan the webpage structure</p>
              <br />
              <p>🌟 Day 2 - MERN Magict:</p>
              <p>- Introduction and use cases of MERN</p>
              <p>- Setup: Node.js, npm, MongoDB, and code editor </p>
              <p>
                - Node.js and Express.js: create a web server and understand
                routes/middleware{" "}
              </p>
              <p>- Building CRUD API and backend components</p>
              <br />
              <p>🌟 Day 3 - Backend Brilliance: </p>
              <p>
                - Creating and integrating API with database using Mongoose
                (ORM)
              </p>
              <p>- Performing CRUD operations </p>
              <p>
                - Authentication and Authorization: JWT, route protection with
                middleware
              </p>
              <p>- Testing API with Postman </p>
              <br />
              <p>🌟 Day 4 – React Realization: </p>
              <p>
                - Introduction and setup, creating components and complete UI
              </p>
              <p>- Connecting with backend </p>
              <p>- Deployment on platforms like AWS, Netlify, Vercel, etc.</p>
              <br />
              <p>Join us for the Stack Up!</p>
              and embark on a transformative journey to unleash your full stack
              potential. Whether you're a beginner or looking to enhance your
              skills, this workshop series promises to equip you with the
              expertise needed to excel in web development.
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
