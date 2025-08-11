// src/components/ACDFadedSection/ACDFadedSection.jsx
import React, { useState } from "react";
import styles from "./ACDFadedSection.module.css";
import { Link } from "react-router-dom";

const ACDFadedSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCouponClick = async () => {
    try {
      await navigator.clipboard.writeText("UPESCSA");
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "UPESCSA";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.fadedWrapper}>
        <div className={styles.partyWrapper}>
          <div className={styles.CSA}>
            <img src="/img/UPESlogo.png" alt="UPES CSA Logo" />

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
        <div className={styles.couponWrapper}>
          <p className={styles.couponLabel}>USE COUPON CODE FOR 21% OFF</p>
          <div
            className={`${styles.couponCode} ${copied ? styles.copied : ""}`}
            onClick={handleCouponClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCouponClick();
              }
            }}
            aria-label="Click to copy coupon code UPESCSA"
          >
            <span className={styles.codeText}>UPESCSA</span>
            <span className={styles.copyIcon}>{copied ? "✓" : "📋"}</span>
            <div className={styles.copyTooltip}>
              {copied ? "Copied!" : "Click to copy"}
            </div>
          </div>
          <a
            className={styles.registerLink}
            href=""
            aria-label="Register for the event"
          >
            <div className={styles.register}>Register Now</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ACDFadedSection;
