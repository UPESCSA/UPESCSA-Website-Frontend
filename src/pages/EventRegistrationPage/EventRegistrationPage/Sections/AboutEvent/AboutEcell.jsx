import styles from "./AboutEvent.module.css";

const {
  mainDiv,
  headingSpan,
  content,
  contentText,
  contentPointer,
  contentPointers,
  contentPointerHeading,
  contentPointerText,
} = styles;

const AboutEcellEvent = () => {
  return (
    <div className={mainDiv} id="about">
      <h1 className="heading">
        <span className={headingSpan}>About</span> <br />
        E-Cell UPES
      </h1>

      <div className={content}>
        <div className={contentText}>
          The Entrepreneurship Cell (E-Cell) at UPES is a student-driven
          community dedicated to fostering innovation, creativity, and an
          entrepreneurial mindset. It serves as a launchpad where aspiring
          entrepreneurs can explore, refine, and transform their ideas into
          successful ventures.
          <br />
          <br />
          <strong>What E-Cell Offers?</strong>
          <br />
          <strong>Startup Development:</strong> Incubation programs and business
          plan competitions to support budding entrepreneurs.
          <br />
          <strong>Industry Connections:</strong> Networking opportunities with
          industry experts, mentors, and investors.
          <br />
          <strong>Workshops & Speaker Sessions:</strong> Hands-on learning
          experiences guided by experienced professionals.
          <br />
          <strong>Interdisciplinary Collaboration:</strong> Bringing together
          students from diverse fields to encourage innovative problem-solving.
          <br />
          <br />
          E-Cell extends its impact by building strong connections between
          students, startups, and investors, offering real-world exposure and
          opportunities to engage with the larger entrepreneurial ecosystem. We
          believe in resilience, risk-taking, and proactive innovation,
          inspiring students to move beyond traditional career paths and become
          job creators instead of job seekers.
          <br />
          <br />
          At E-Cell, we empower the next generation of entrepreneurs by
          equipping them with the right skills, knowledge, and mindset to turn
          ideas into reality and lead the future of business innovation.
          <br />
          <br />
        </div>
        <div className={contentPointers}>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Innovation</h1>
            <div className={contentPointerText}>
              Encourage students to explore entrepreneurship and develop
              groundbreaking solutions.
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Networking</h1>
            <div className={contentPointerText}>
              Connect young innovators with experienced mentors and business
              leaders.
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Growth</h1>
            <div className={contentPointerText}>
              Support promising startups with expert insights and opportunities
              to scale.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEcellEvent;
