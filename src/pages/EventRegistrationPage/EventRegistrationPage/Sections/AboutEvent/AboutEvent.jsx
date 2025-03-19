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

const AboutEvent = () => {
  return (
    <div className={mainDiv} id="about">
      <h1 className="heading">
        <span className={headingSpan}>About</span> <br />
        Entropedia 2.0
      </h1>

      <div className={content}>
        <div className={contentText}>
          Get ready, because Entropedia is back—bigger, bolder, and more
          electrifying than ever!🚀
          <br />
          <br />
          UPES-CSA is thrilled to bring you Entropedia 2.0, the ultimate
          platform to turn visionary ideas into game-changing ventures. In
          collaboration with E-Cell, this event equips aspiring entrepreneurs
          with expert mentorship, industry exposure, and the essential tools to
          bring their innovations to life.
          <br />
          <br />
          Building upon its legacy, Entropedia 2.0 is a multi-round
          entrepreneurial challenge that pushes participants to craft compelling
          business models, pitch their ideas, and showcase working prototypes.
          With a focus on innovation, feasibility, and market impact, this
          competition provides a stage for young minds to refine and validate
          their startup concepts under the guidance of industry experts.
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
            <h1 className={contentPointerHeading}>Execution</h1>
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

export default AboutEvent;
