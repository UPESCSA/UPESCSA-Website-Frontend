// AboutACD.jsx
import React from "react";
import "./AboutACD.css";
import starIcon from "./star.png"; // <- Add your star image in the same folder

const AboutACD = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">ABOUT ACD</h2>
      <div className="cards-container">
        
        {/* Card 1 */}
        <div className="card">
          <img src={starIcon} alt="star" className="star-icon" />
          <p>
            AWS Community Days are community-organized, in-person events that
            bring together cloud enthusiasts, industry leaders, AWS Heroes, and
            builders. These events are a platform for learning, collaboration,
            and innovation, featuring technical sessions, hands-on labs, and
            live demos led by expert AWS users and cloud pioneers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={starIcon} alt="star" className="star-icon" />
          <p>
            AWS Community Day Dehradun 2025 is a full-day technical event
            showcasing cutting-edge topics in cloud computing, practical insights
            into the latest AWS products and services, and real-world use cases.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={starIcon} alt="star" className="star-icon" />
          <p>
            Immerse yourself in a day of learning and networking with cloud
            technology experts, AWS providers, consultants, and community
            leaders. Gain actionable knowledge, explore industry best practices,
            and get personalized answers to your cloud-related questions.
          </p>
        </div>
      </div>

      <p className="footer-text">
        Join us for an unparalleled opportunity to grow, connect, and innovate
        with the best minds in the AWS community!
      </p>
    </div>
  );
};

export default AboutACD;
