import React, { useState, useCallback } from "react";
import styles from "./ACDFadedSection.module.css";

const ACDFadedSection = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleGetCouponClick = useCallback(() => {
    setShowEmailModal(true);
    setEmail("");
    setMessage("");
    setMessageType("");
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowEmailModal(false);
    setEmail("");
    setMessage("");
    setMessageType("");
    setIsLoading(false);
  }, []);

  const validateEmail = useCallback((email) => {
    // Check if email matches the UPES domain format
    const emailRegex = /^[a-zA-Z0-9._-]+@stu\.upes\.ac\.in$/;
    return emailRegex.test(email);
  }, []);

  const sendCouponCode = useCallback(async (email) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/sendmail/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Name",
            email: email,
            template: "COUPONCODE",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: data.message || "Coupon code sent successfully!",
        };
      } else {
        return {
          success: false,
          message: data.message || "Failed to send coupon code",
        };
      }
    } catch (error) {
      return { success: false, message: "Network error. Please try again." };
    }
  }, []);

  const handleSubmitEmail = useCallback(
    async (e) => {
      e.preventDefault();

      if (!email.trim()) {
        setMessage("Please enter your email address");
        setMessageType("error");
        return;
      }

      if (!validateEmail(email)) {
        setMessage(
          "Please enter a valid UPES email address (format: yourname@stu.upes.ac.in)"
        );
        setMessageType("error");
        return;
      }

      setIsLoading(true);
      setMessage("");

      const result = await sendCouponCode(email);

      setIsLoading(false);
      setMessage(result.message);
      setMessageType(result.success ? "success" : "error");

      if (result.success) {
        // Optional: Close modal after a delay
        setTimeout(() => {
          handleCloseModal();
        }, 2000);
      }
    },
    [email, validateEmail, sendCouponCode, handleCloseModal]
  );

  return (
    <div className={styles.container}>
      <div className={styles.fadedWrapper}>
        <div className={styles.partyWrapper}>
          <div className={styles.CSA}>
            <img src="/img/UPESlogo.avif" alt="UPES CSA Logo" loading="lazy" />
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
          <p className={styles.couponMessage}>
            Get your coupon code with UPES email
          </p>

          <div
            className={styles.contactButton}
            onClick={handleGetCouponClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleGetCouponClick();
              }
            }}
            aria-label="Get coupon code with UPES email"
          >
            <span className={styles.contactText}>Get Coupon Code</span>
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

      {/* Email Verification Modal */}
      {showEmailModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Get Coupon Code</h3>
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Close email modal"
              >
                ×
              </button>
            </div>
            <div className={styles.modalContent}>
              <form onSubmit={handleSubmitEmail}>
                <div className={styles.emailFormGroup}>
                  <label htmlFor="email" className={styles.emailLabel}>
                    Enter your UPES email address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@stu.upes.ac.in"
                    className={styles.emailInput}
                    disabled={isLoading}
                  />
                  <small className={styles.emailHint}>
                    Please use your UPES student email (@stu.upes.ac.in)
                  </small>
                </div>

                {message && (
                  <div className={`${styles.message} ${styles[messageType]}`}>
                    {message}
                  </div>
                )}

                <div className={styles.modalActions}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Coupon Code"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ACDFadedSection;
