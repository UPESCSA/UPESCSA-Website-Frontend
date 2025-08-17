import React, { useState, useEffect, useCallback } from "react";
import styles from "./SpeakersCarousel.module.css";

const SpeakersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Technology Officer",
      company: "TechCorp Industries",
      bio: "Dr. Johnson is a renowned expert in artificial intelligence and machine learning with over 15 years of experience.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Senior Software Architect",
      company: "Innovation Labs",
      bio: "Michael is a full-stack developer and cloud architecture specialist with expertise in scalable systems.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 3,
      name: "Prof. Emily Rodriguez",
      title: "Director of Research",
      company: "University of Technology",
      bio: "Professor Rodriguez leads cutting-edge research in cybersecurity and data privacy.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      title: "Startup Founder & CEO",
      company: "NextGen Solutions",
      bio: "David is a serial entrepreneur who has successfully founded and scaled three tech startups.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      title: "VP of Engineering",
      company: "Global Systems Inc.",
      bio: "Dr. Thompson is an industry veteran with expertise in distributed systems and DevOps practices.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 6,
      name: "Alex Martinez",
      title: "UX Design Lead",
      company: "Creative Digital Agency",
      bio: "Alex is a human-centered design expert who has revolutionized user experiences for major tech platforms.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
    {
      id: 7,
      name: "Dr. James Wilson",
      title: "Head of Data Science",
      company: "Analytics Pro",
      bio: "Dr. Wilson is a data science pioneer who has developed machine learning models used worldwide.",
      image: "public/img/ACDSpeaker/speaker1.jpg",
    },
  ];

  // Auto-advance functionality
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % speakers.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match CSS transition duration
    }
  }, [speakers.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match CSS transition duration
    }
  }, [speakers.length, isTransitioning]);

  const goToSlide = useCallback(
    (index) => {
      if (index !== currentSlide && !isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500); // Match CSS transition duration
      }
    },
    [currentSlide, isTransitioning]
  );

  // Auto-advance timer that doesn't reset on manual navigation
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]); // Only recreate when nextSlide function changes

  // Helper function to get slide position class
  const getSlideClass = (index) => {
    if (index === currentSlide) return `${styles.slide} ${styles.active}`;

    // Calculate if slide should be positioned left or right
    const diff = (index - currentSlide + speakers.length) % speakers.length;
    if (diff > speakers.length / 2) {
      return `${styles.slide} ${styles.prev}`;
    } else {
      return `${styles.slide}`;
    }
  };

  return (
    <section className={styles.speakersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR SPEAKERS</h2>

        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {speakers.map((speaker, index) => (
              <div key={speaker.id} className={getSlideClass(index)}>
                <div className={styles.slideContent}>
                  <div className={styles.imageSection}>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className={styles.speakerImage}
                    />
                  </div>
                  <div className={styles.contentSection}>
                    <div className={styles.speakerInfo}>
                      <h3 className={styles.speakerName}>{speaker.name}</h3>
                      <h4 className={styles.speakerTitle}>{speaker.title}</h4>
                      <p className={styles.speakerCompany}>{speaker.company}</p>
                      <p className={styles.speakerBio}>{speaker.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous speaker"
          >
            &#8249;
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next speaker"
          >
            &#8250;
          </button>

          <div className={styles.indicators}>
            {speakers.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.indicatorActive : ""
                }`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                aria-label={`Go to speaker ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersCarousel;
