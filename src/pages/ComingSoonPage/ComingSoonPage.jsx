import React, { useEffect } from "react";
import styles from "./ComingSoonPage.module.css"; // Keep for .comingSoonContainer if needed for overall page min-height etc.

const ComingSoonPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className={styles.comingSoonContainer}>
      {" "}
      {/* Optional: keep for min-height or page background */}
      <div
        style={{
          backgroundColor: "#000", // Outer container background
          width: "100%",
          display: "flex", // Added to center the inner div if needed
          justifyContent: "center", // Added to center the inner div
          alignItems: "center", // Added to center the inner div
          flexGrow: 1, // Allow this div to grow and fill space if .comingSoonContainer is flex
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "10rem", // Large padding
            width: "100%", // Inner div might not need 100% width if centered
            fontSize: "24px",
            fontWeight: "bold",
            color: "var(--hackredHighlight, #ff0000)",
            backgroundColor: "black", // Inner container background, same as outer
            borderRadius: "8px", // Optional: to give some shape
          }}
        >
          Stay tuned! Opening soon...
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
