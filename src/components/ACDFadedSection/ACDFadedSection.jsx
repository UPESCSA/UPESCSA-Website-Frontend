import React, { useState, useCallback } from "react";
import styles from "./ACDFadedSection.module.css";

const ACDFadedSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = useCallback(() => {
    setShowContactModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowContactModal(false);
  }, []);

  const handleCallClick = useCallback((number) => {
    window.location.href = `tel:${number}`;
  }, []);

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

      {/* Register button and contact section outside fadedWrapper */}
      <div className={styles.registerContainer}>
        <div className={styles.couponWrapper}>
          <p className={styles.couponMessage}>Contact us for coupon code</p>

          <div
            className={styles.contactButton}
            onClick={handleContactClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleContactClick();
              }
            }}
            aria-label="Contact us for coupon code"
          >
            <span className={styles.contactText}>Contact Us</span>
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

      {/* Contact Modal */}
      {showContactModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Contact Us</h3>
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Close contact modal"
              >
                ×
              </button>
            </div>
            <div className={styles.modalContent}>
              <div
                className={styles.contactItem}
                onClick={() => handleCallClick("+918168947503")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCallClick("+918168947503");
                  }
                }}
              >
                <div className={styles.contactName}>Nityvardhan Singh</div>
                <div className={styles.contactNumber}>+91 81689 47503</div>
              </div>

              <div
                className={styles.contactItem}
                onClick={() => handleCallClick("+919958113098")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCallClick("+919958113098");
                  }
                }}
              >
                <div className={styles.contactName}>Utkarsh Saroha</div>
                <div className={styles.contactNumber}>+91 99581 13098</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ACDFadedSection;
