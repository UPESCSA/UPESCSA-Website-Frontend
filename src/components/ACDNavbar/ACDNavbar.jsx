import React, { useState } from "react";
import styles from "./ACDNavbar.module.css";
import { Link } from "react-router-dom";

const ACDNavbar = ({ onTimelineClick, onAboutClick }) => {
  const [menuState, setMenuState] = useState("hidden"); // hidden, open, closing

  const toggleMenu = () => {
    if (menuState === "open") {
      // Start closing animation
      setMenuState("closing");
      setTimeout(() => setMenuState("hidden"), 300); // Match animation duration
    } else {
      setMenuState("open");
    }
  };

  const handleTimelineClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    onTimelineClick(); // Call the scroll function

    // Close mobile menu if it's open
    if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => setMenuState("hidden"), 300);
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    onAboutClick(); // Call the scroll function

    // Close mobile menu if it's open
    if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => setMenuState("hidden"), 300);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          className={styles.logo}
          src="/img/UPESlogo.avif"
          alt="UPES CSA Logo"
        />
      </Link>

      <nav aria-label="Main Navigation">
        {/* Hamburger Button */}
        <div
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${styles.navList} ${
            menuState === "open"
              ? styles.open
              : menuState === "closing"
              ? styles.closing
              : styles.hidden
          }`}
        >
          <li>
            <a href="#about" onClick={handleAboutClick}>
              About ACD
            </a>
          </li>
          {/* <li>
            <a href="#timeline" onClick={handleTimelineClick}>
              Timeline
            </a>
          </li>
          <li>
            <a href="">Speakers</a>
          </li>
          <li>
            <a href="">FAQ's</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default ACDNavbar;
