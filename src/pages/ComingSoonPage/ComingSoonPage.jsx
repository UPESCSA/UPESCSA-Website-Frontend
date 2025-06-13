import { useState, useEffect } from "react";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import styles from "./ComingSoonPage.module.css";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = async () => {
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>

      <div className={styles.content}>
        {/* Logo/Icon */}
        <div className={styles.logo}>
          <Calendar className={styles.logoIcon} />
        </div>

        {/* Main heading with animation */}
        <div className={styles.fadeInUp}>
          <h1 className={styles.mainHeading}>Coming Soon</h1>
        </div>

        <div className={`${styles.fadeInUp} ${styles.delay200}`}>
          <p className={styles.subtitle}>
            WebGenesis is on the way. Get ready for an unforgettable experience.
          </p>
        </div>

        {/* Email signup */}
        <div
          className={`${styles.emailSection} ${styles.fadeInUp} ${styles.delay400}`}
        >
          {/* <div className={styles.emailForm}>
            <div className={styles.inputContainer}>
              <Mail className={styles.emailIcon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={styles.emailInput}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={styles.submitButton}
            >
              {isLoading ? (
                <div className={styles.loadingSpinner}></div>
              ) : (
                <>
                  Notify Me
                  <ArrowRight className={styles.buttonIcon} />
                </>
              )}
            </button>
          </div> */}

          {/* Success message */}
          <div
            className={styles.successMessage}
            style={{
              opacity: isSubmitted ? "1" : "0",
              transform: isSubmitted ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <p className={styles.successText}>
              ✓ Thanks! We'll notify you when registration opens.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className={styles.separator}></div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
