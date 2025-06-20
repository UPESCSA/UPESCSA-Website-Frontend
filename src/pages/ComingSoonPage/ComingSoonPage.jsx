import { useState, useEffect } from "react";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import styles from "./ComingSoonPage.module.css";
import toast, { Toaster } from "react-hot-toast";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = async () => {
    if (!email) {
      setError("Please enter an email address");
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      console.log("Submitting email:", email);
      console.log("Server URL:", import.meta.env.VITE_SERVER_URL);

      if (!import.meta.env.VITE_SERVER_URL) {
        throw new Error("Server URL not configured");
      }

      const formData = new FormData();
      formData.append(
        "SheetUrl",
        "https://docs.google.com/spreadsheets/d/1jabJxxffvBoNFL_0toxZF55vwdAD0gnPde1VKkuw_nY/edit?usp=sharing"
      );
      formData.append("email", email);
      formData.append("type", "coming_soon_notification");
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbyakUWSjJBj4raVzYCQ1EAZwML7e6ehk1SeiHvRX_aKXiYJvBTstrqxsOCbiK24gFOd/exec`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Response result:", result);

        if (result.status === "duplicate") {
          toast.error("This email is already subscribed.");
          setIsLoading(false);
          return;
        }

        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const errorText = await response.text();
        console.error("Form submission failed:", response.status, errorText);
        setError(
          `Submission failed: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>

      <div className={styles.content}>
        {/* Logo/Icon */}
        {/* <div className={styles.logo}>
          <Calendar className={styles.logoIcon} />
        </div> */}

        {/* Main heading with animation */}
        <div className={styles.fadeInUp}>
          <h1 className={styles.mainHeading}>Coming Soon</h1>
        </div>

        <div className={`${styles.fadeInUp} ${styles.delay200}`}>
          <p className={styles.subtitle}>
            Alumini Page is on the way. Stay tuned for updates!
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
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !email}
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
