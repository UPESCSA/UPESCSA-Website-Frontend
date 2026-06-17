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
  const [popupOpen, setPopupOpen] = useState(true);

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
          eventPosterURL="/img/Registration2026Poster.png"
          eventHeading="🌐 UPES CSA Registration Drive 2026-27 - Join the Core Team!"
          eventText={
            <>
              <p>
                <strong>"The best way to predict the future is to create it." - Peter Drucker</strong>
              </p>
              <p>
                The wait is over! Registrations for the UPES Cloud Security Alliance (CSA) Student Chapter 
                Core Team <strong>2026–27</strong> are now officially open!
              </p>
              <p>
                We are proud to be the <strong>first student chapter</strong> of the international Cloud Security 
                Alliance research organization in Uttarakhand. Join a thriving community that fosters innovation, 
                leadership, and continuous growth.
              </p>
              <p>
                <strong>✨ Why Join UPES-CSA?</strong>
              </p>
              <ul>
                <li>
                  <strong>Drive Meaningful Experiences</strong>
                  <br />
                  Be a part of planning and executing workshops, competitions, speaker sessions, and flagship events.
                </li>
                <li>
                  <strong>Build Leadership Skills</strong>
                  <br />
                  Take ownership of projects and gain practical experience that extends beyond academics.
                </li>
                <li>
                  <strong>Earn Valuable Certifications</strong>
                  <br />
                  Access opportunities to earn industry-recognized certifications with long-term professional value.
                </li>
                <li>
                  <strong>Expand Your Network</strong>
                  <br />
                  Connect with ambitious peers, experienced mentors, and industry experts.
                </li>
                <li>
                  <strong>Exclusive Internship Opportunities</strong>
                  <br />
                  Outstanding contributions can lead to exclusive internship opportunities and valuable industry exposure.
                </li>
              </ul>
              <p>
                <strong>📋 Available Committees:</strong>
              </p>
              <ul>
                <li>Editorial Team</li>
                <li>Events Team</li>
                <li>Technical Team</li>
                <li>Design & VFX Team</li>
                <li>Public Relations Team</li>
                <li>Social Media Team</li>
                <li>Photography Team</li>
                <li>Registration Team</li>
                <li>Logistics Team</li>
              </ul>
              <p>
                <strong>💰 Registration Fee: <span style={{ textDecoration: 'line-through', color: '#888' }}>₹300/-</span> <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>₹250/-</span> (Early Bird Discount!)</strong>
              </p>
              <p>
                <strong>📅 Academic Year: 2026-27</strong>
              </p>
              <p>
                <strong>🚀 Registrations are now open!</strong>
              </p>
              <p>
                <em>🎯 Early bird offer valid for a limited time only. Register now to avail the discount!</em>
              </p>
              <p>
                This is more than just a position — it's an opportunity to learn, lead, innovate, and grow 
                alongside a community that shares your passion for technology. Join us as we work together 
                to make this tenure bigger, better, and more impactful than ever.
              </p>
              <p>
                <strong>For queries, contact:</strong>
                <br />
                Vansh Garg (Events Head): +91 95282 54655
                <br />
                Siya Singh (Events Head): +91 73075 18413
              </p>
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

  // return (
  //   <div className={homepageContainer}>
  //     {popupOpen && (
  //       <Popup
  //         eventPosterURL="/img/funtopia_6.0.jpg.jpeg"
  //         eventHeading="🎉 Funtopia 6.0 - The Ultimate Campus Adventure!"
  //         eventText={
  //           <>
  //             <p>
  //               <strong>Adventure begins where comfort zones end!</strong>
  //             </p>
  //             <p>
  //               Get ready for Funtopia 6.0, the exciting 3-day annual fest.
  //               Experience a thrilling mix of campus adventures, competitive
  //               gaming, and mind-challenging activities designed to test your
  //               skills, strategy, and teamwork.
  //             </p>
  //             <p>
  //               <strong>📅 Event Dates: 27 - 29 March 2026</strong>
  //             </p>
  //             <p>
  //               <strong>🔎 Event Line-Up</strong>
  //             </p>
  //             <ul>
  //               <li>
  //                 <strong>🗺 Treasure Hunt: 27 March</strong>
  //                 <br />
  //                 Decode clues, solve puzzles, and race across campus to uncover
  //                 the hidden treasure.
  //               </li>
  //               <li>
  //                 <strong>🎮 Valorant Tournament: 28 March</strong>
  //                 <br />
  //                 Assemble your squad and compete in intense 5v5 battles where
  //                 strategy and coordination decide the champions.
  //               </li>
  //               <li>
  //                 <strong>🔥 BGMI Tournament: 29 March</strong>
  //                 <br />
  //                 Enter the battleground with your squad and fight for survival
  //                 to claim the ultimate victory.
  //               </li>
  //             </ul>
  //             <p>
  //               <strong>🚀 Registrations are now open.</strong>
  //             </p>
  //             <p>
  //               Form your team, mark your calendars, and get ready to experience
  //               three days of competition, excitement, and campus adventure at
  //               Funtopia 6.0.
  //             </p>
  //           </>
  //         }
  //         eventFormURL="/Funtopia"
  //         closePopup={togglePopup}
  //         buttonText="REGISTER NOW"
  //       />
  //     )}
  //     <Home showTrigger={eventActive && !popupOpen} openPopup={togglePopup} />
  //     <About />
  //     <Suspense fallback={<Loading />}>
  //       <HomeEvents />
  //     </Suspense>
  //     <Suspense fallback={<Loading />}>
  //       <Alliance />
  //     </Suspense>
  //     <Suspense fallback={<Loading />}>
  //       <HomeBlogs />
  //     </Suspense>
  //   </div>
  // );
};

export default HomePage;
