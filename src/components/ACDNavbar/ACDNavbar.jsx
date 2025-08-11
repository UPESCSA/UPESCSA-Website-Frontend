import React from 'react';
import styles from './ACDNavbar.module.css';

const ACDNavbar = () => (
  <header className={styles.header}>
    <img className={styles.logo} src="/img/UPESlogo.png" alt="UPES CSA Logo" />
    <nav className={styles.mainNav} aria-label="Main Navigation">
      <ul className={styles.navList}>
        <li><a href="">About ACD</a></li>
        <li><a href="">Timeline</a></li>
        <li><a href="">Speakers</a></li>
        <li><a href="">FAQ’s</a></li>
      </ul>
    </nav>
  </header>
);

export default ACDNavbar;
