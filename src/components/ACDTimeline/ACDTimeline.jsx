import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./ACDTimeline.module.css";

const ACDTimeline = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  // Sample timeline data
  const timelineData = [
    {
      id: 1,
      title: "Project Inception",
      date: "Jan 2024",
      description:
        "Initial planning and concept development for the new product line. Team formation and resource allocation.",
      color: "#3b82f6",
    },
    {
      id: 2,
      title: "Design Phase",
      date: "Feb 2024",
      description:
        "User interface design and user experience planning. Prototyping and stakeholder feedback integration.",
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Development Start",
      date: "Mar 2024",
      description:
        "Backend architecture setup and frontend development initialization. Database design and API planning.",
      color: "#10b981",
    },
    {
      id: 4,
      title: "Beta Testing",
      date: "Apr 2024",
      description:
        "Internal testing phase with quality assurance team. Bug fixes and performance optimizations.",
      color: "#f59e0b",
    },
    {
      id: 5,
      title: "Launch Preparation",
      date: "May 2024",
      description:
        "Final preparations for product launch. Marketing campaigns and deployment infrastructure setup.",
      color: "#ef4444",
    },
    {
      id: 6,
      title: "Public Release",
      date: "Jun 2024",
      description:
        "Official product launch to the public. User onboarding and customer support systems activation.",
      color: "#06b6d4",
    },
  ];

  // Check if we need to switch to mobile layout
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkWidth();
    const debouncedCheckWidth = debounce(checkWidth, 150);
    window.addEventListener("resize", debouncedCheckWidth);

    return () => {
      window.removeEventListener("resize", debouncedCheckWidth);
    };
  }, []);

  // Simple debounce function
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Handle scroll events on timeline and page
  useEffect(() => {
    const handleWheel = (e) => {
      // Only prevent default if we're inside the timeline container
      const rect = timelineRef.current?.getBoundingClientRect();
      if (
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        e.preventDefault();

        if (e.deltaY > 0) {
          // Scrolling down - select next node
          setSelectedIndex((prev) =>
            Math.min(prev + 1, timelineData.length - 1)
          );
        } else {
          // Scrolling up - select previous node
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    const handlePageScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Check if timeline is in viewport
      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        // Calculate which timeline item should be active based on scroll position
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - timelineTop) / (windowHeight + timelineHeight)
          )
        );
        const newIndex = Math.floor(scrollProgress * timelineData.length);
        const clampedIndex = Math.min(newIndex, timelineData.length - 1);

        if (clampedIndex !== selectedIndex) {
          setSelectedIndex(clampedIndex);
        }
      }
    };

    // Add both wheel and scroll listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handlePageScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, [timelineData.length, selectedIndex]);

  // Handle click on timeline items
  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div
      className={styles.container}
      ref={ref}
      style={{ scrollMarginTop: "80px" }}
    >
      <div className={styles.inner}>
        <h1 className={styles.title}>Project Timeline</h1>

        <div ref={timelineRef} className={styles.timelineWrapper}>
          {/* Main vertical line */}
          <div
            className={`${styles.timelineLine} ${
              isMobile ? styles.timelineLineMobile : styles.timelineLineDesktop
            }`}
          ></div>

          {timelineData.map((item, index) => {
            const isSelected = selectedIndex === index;
            const isLeft = !isMobile && index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${
                  isMobile
                    ? styles.timelineItemMobile
                    : styles.timelineItemDesktop
                }`}
                onClick={() => handleItemClick(index)}
              >
                {/* Timeline node */}
                <div
                  className={`${styles.timelineNode} ${
                    isMobile
                      ? styles.timelineNodeMobile
                      : styles.timelineNodeDesktop
                  }`}
                >
                  <div
                    className={`${styles.nodeCircle} ${
                      isSelected ? styles.nodeCircleSelected : ""
                    } ${isSelected ? styles.nodeCircleActive : ""}`}
                    style={{
                      backgroundColor: isSelected ? item.color : "#cbd5e1",
                      boxShadow: isSelected
                        ? `0 0 20px ${item.color}40, 0 4px 12px rgba(0,0,0,0.15)`
                        : "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  ></div>
                </div>

                {/* Detail box */}
                <div
                  className={`${styles.detailBox} ${
                    isSelected ? styles.detailBoxSelected : ""
                  } ${
                    isMobile
                      ? styles.detailBoxMobile
                      : isLeft
                      ? styles.detailBoxLeft
                      : styles.detailBoxRight
                  }`}
                >
                  <div
                    className={`${styles.card} ${
                      isSelected ? styles.cardSelected : ""
                    }`}
                    style={{
                      boxShadow: isSelected
                        ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${item.color}20`
                        : "0 4px 12px rgba(0,0,0,0.1)",
                      border: isSelected
                        ? `1px solid ${item.color}30`
                        : "1px solid #e2e8f0",
                    }}
                  >
                    {/* Arrow pointing to timeline */}
                    <div
                      className={`${styles.arrow} ${
                        isMobile
                          ? styles.arrowMobile
                          : isLeft
                          ? styles.arrowLeft
                          : styles.arrowRight
                      }`}
                      style={{
                        [isMobile || !isLeft ? "borderRight" : "borderLeft"]:
                          isSelected
                            ? `8px solid ${item.color}40`
                            : "8px solid rgba(255, 255, 255, 0.8)",
                      }}
                    ></div>

                    {/* Content */}
                    <div className={styles.dateContainer}>
                      <div
                        className={styles.dateDot}
                        style={{
                          backgroundColor: isSelected ? item.color : "#cbd5e1",
                        }}
                      ></div>
                      <span className={styles.dateText}>{item.date}</span>
                    </div>

                    <h3
                      className={`${styles.itemTitle} ${
                        isSelected ? styles.itemTitleSelected : ""
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

ACDTimeline.displayName = "ACDTimeline";

export default ACDTimeline;
