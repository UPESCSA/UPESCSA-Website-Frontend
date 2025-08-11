import React from 'react';
import Navbar from '../../components/ACDNavbar/ACDNavbar';
import Timeline from '../../components/ACDTimeline/ACDTimeline';
import styles from './ACDPage.module.css'; // Reusing the same styles

const TimelinePage = () => (
  <div className={styles.wrapper}>
    <Navbar />
    <main className={styles.main}>
      <Timeline />
    </main>
  </div>
);

export default TimelinePage;