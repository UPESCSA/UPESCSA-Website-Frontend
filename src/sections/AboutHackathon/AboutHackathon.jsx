import styles from "./AboutHackathon.module.css";

const {
  mainDiv,
  headingSpan,
  content,
  contentText,
  contentPointer,
  contentPointers,
  contentPointerHeading,
  contentPointerText,

  // backgroundVectors,
  // sphereLogo,
  // cubeLogo,
} = styles;

const AboutHackathon = () => {
  return (
    <div className={mainDiv} id="about">
      <h1 className="heading">
        <span className={headingSpan}>About</span> <br />
        Hackathon 4.0
      </h1>

      <div className={content}>
        <div className={contentText}>
          Driven by the spirit of innovation and impactful problem-solving,
          &quot;Hackathon 4.0&quot; aims to address real-world chalenges through
          cutting-edge technologies. Centered around the themes of "Adaptive
          Welness" and "Hazard and Disaster Management," the event empowers
          participants to design solutions that tackle critical societal issues.
          <br />
          <br />
          This hackathon provides a robust platform for students to enhance
          their skils, foster growth, and apply their knowledge to develop
          practical solutions. By focusing on inclusivity, mental welness, and
          efficient emergency management, Hackathon 4.0 seeks to inspire
          participants to create products that optimize and improve various
          aspects of life.
          <br />
          <br />
          With support from companies contributing problem statements and
          partnerships with potential sponsors, the event wil promote
          colaboration, knowledge exchange, and innovation. The ultimate
          objective is to drive meaningful, real-world impact by encouraging the
          development of solutions that address these vital chalenges
          <br />
          <br />
        </div>
        <div className={contentPointers}>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Challenge</h1>
            <div className={contentPointerText}>
              Join hands with your team of 2-4 members and solve real world
              problems in limited time!
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Perks</h1>
            <div className={contentPointerText}>
              Exciting Prizes, Internship &amp; Connection opportunities. Stay
              tuned for more updates!
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Theme</h1>
            <div className={contentPointerText}>
              Adaptive Welness &amp; Hazard and Disaster Management
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src="/illustrations/sphere-dark.png"
        alt="sphere"
        id={sphereLogo}
        className={backgroundVectors}
      />

      <img
        src="/illustrations/cube-dark.png"
        alt="cube"
        id={cubeLogo}
        className={backgroundVectors}
      /> */}
    </div>
  );
};

export default AboutHackathon;
