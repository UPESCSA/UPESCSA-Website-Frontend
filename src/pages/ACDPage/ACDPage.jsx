// siteMain/front/src/pages/ACDPage/ACDPage.jsx
import React from 'react';
import Navbar from '../../components/ACDNavbar/ACDNavbar';
import FadedSection from '../../components/ACDFadedSection/ACDFadedSection';
import Timeline from '../../components/ACDTimeline/ACDTimeline';
import styles from './ACDPage.module.css';

const ACDPage = () => (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <FadedSection />
        <Timeline />
      </main>
    </div>
);

export default ACDPage;
