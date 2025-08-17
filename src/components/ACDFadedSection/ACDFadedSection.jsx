import React, { useState, useCallback } from "react";
import styles from "./ACDFadedSection.module.css";

const ACDFadedSection = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCouponClick = useCallback(async () => {
    if (isLoading || copied) return;

    setIsLoading(true);

    try {
      await navigator.clipboard.writeText("UPESCSAOFF");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "UPESCSAOFF";
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (execErr) {
        console.error("Failed to copy text: ", execErr);
      } finally {
        document.body.removeChild(textArea);
      }
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, copied]);

  return (
    <div className={styles.container}>
      <div className={styles.fadedWrapper}>
        <div className={styles.partyWrapper}>
          <div className={styles.CSA}>
            <img src="/img/UPESlogo.png" alt="UPES CSA Logo" loading="lazy" />
            <div className={styles.headingWrapper}>
              <h2 className={styles.headingMain}>UPES CSA</h2>
              <h3 className={styles.headingSub}>Student Chapter</h3>
            </div>
          </div>

          <div className={styles.xImg}>
            <img src="/img/x.png" alt="Partnership symbol" loading="lazy" />
          </div>

          <div className={styles.AWS}>
            <img
              src="/img/logoAWS.png"
              alt="AWS User Group Dehradun Logo"
              loading="lazy"
            />
            <div className={styles.headingWrapper}>
              <h2 className={styles.headingMain}>AWS User Group</h2>
              <h3 className={styles.headingSub}>Dehradun</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Register button and coupon section outside fadedWrapper */}
      <div className={styles.registerContainer}>
        <div className={styles.couponWrapper}>
          <p className={styles.couponLabel}>Use Coupon Code for 21% Off</p>

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
            disabled={isLoading}
          >
            <span className={styles.codeText}>UPESCSAOFF</span>
            <span className={styles.copyIcon}>
              {isLoading ? "⏳" : copied ? "✓" : "📋"}
            </span>
            <div className={styles.copyTooltip}>
              {isLoading ? "Copying..." : copied ? "Copied!" : "Click to copy"}
            </div>
          </div>

          <a
            className={styles.registerLink}
            href="https://konfhub.com/aws-community-day-dehradun-2025"
            aria-label="Register for the AWS Cloud Day event"
          >
            <div className={styles.register}>Register Now</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ACDFadedSection;
