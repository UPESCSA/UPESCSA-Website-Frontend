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
          eventPosterURL="/img/events/live/AZURE CLOUDSCAPE.jpg"
          eventHeading="Azure Cloudscape"
          eventText={
            <>
              <p>
                🎉 Cloud Revolution at Azure Cloudscape: Navigating Tomorrow’s
                Tech! ☁️
              </p>
              <p>
                “The cloud doesn’t just store data—it's a catalyst that stirs
                potential”
              </p>
              <p>
                On 16th November, immerse yourself in the vibrant world of Azure
                Cloudscape: Navigating Tomorrow’s Tech, where aspiring tech
                professionals gather to harness the power of Azure tools and
                technologies. Experience an enriching atmosphere that celebrates
                innovation and collaboration, empowering you to explore new
                horizons and elevate your skills while navigating the exciting
                frontiers of cloud computing.
              </p>
              <p>What Awaits You:</p>
              <p>
                🌟 Featured Speaker: Mr. Saket Kumar, Senior Consultant at
                Microsoft and Ms. Neelam Mourya, Consultant at Microsoft
              </p>
              <p>
                🎓 Interactive Workshops: Roll up your sleeves and tackle
                real-world challenges in our hands-on sessions.
              </p>
              <p>
                🏆 Exciting Challenges: Test your knowledge and win exciting
                goodies and certificates!
              </p>
              <p>
                This is your chance to amplify your cloud expertise and forge
                connections with like-minded innovators. Are you ready to leap
                into the future of technology?
              </p>
            </>
          }
          eventFormURL="/AzureCloudScape"
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
