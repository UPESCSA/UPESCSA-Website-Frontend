// src/components/ACDFadedSection/ACDFadedSection.jsx
import React from 'react';
import styles from './ACDFadedSection.module.css';

const ACDFadedSection = () => (
  <div className={styles.container}>
    <div className={styles.fadedWrapper}>
      <div className={styles.partyWrapper}>
        <div className={styles.CSA}>
          <img src="/img/logoCSA.png" alt="The CSA logo" />
          <div className={styles.headingWrapper}>
            <h2 className={styles.headingMain}>UPES CSA</h2>
            <h2 className={styles.headingSub}>Student Chapter</h2>
          </div>
        </div>
        <div className={styles.xImg}>
          <img src="/img/x.png" alt="and" />
        </div>
        <div className={styles.AWS}>
          <img src="/img/logoAWS.png" alt="The AWS UG logo" />
          <div className={styles.headingWrapper}>
            <h2 className={styles.headingMain}>AWS User Group</h2>
            <h2 className={styles.headingSub}>Dehradun</h2>
          </div>
        </div>
      </div>
    </div>

    {/* Register button now outside fadedWrapper */}
    <div className={styles.registerContainer}>
      <a className={styles.registerLink} href="">
        <div className={styles.register}>Register</div>
      </a>
    </div>
  </div>
);

export default ACDFadedSection;
