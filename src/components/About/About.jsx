import styles from "./About.module.css";

import Stats from "../Stats/Stats";
import SectionSeparator from "../SectionSeparator/SectionSeparator";

// CSS STYLES
const { aboutContainer, aboutText, statsDiv } = styles;

const About = () => {
  // STATS DATA
  const statsData = [
    {
      number: 7,
      text: (
        <p>
          Years of <br /> Excellence
        </p>
      ),
    },
    {
      number: 550,
      text: (
        <p>
          Successful <br /> Alumni
        </p>
      ),
    },
    {
      number: 120,
      text: (
        <p>
          Engaging <br /> Events
        </p>
      ),
    },
    {
      number: 5,
      text: (
        <p>
          Industry <br /> Collaborations
        </p>
      ),
    },
  ];

  return (
    <div className={aboutContainer} id="about">
      <SectionSeparator />
      <div className={aboutText}>
        With the vision of redefining excellence, Cloud Security Alliance (CSA)
        embarked upon its glorious journey as the youngest and first-ever
        domain-centric student chapter in UPES in 2017. CSA student chapter is
        zealously dedicated to raising awareness of best practices to help
        ensure a secure cloud computing environment, in association with Cloud
        Security Alliance, Uttarakhand. In the pursuit of its aim, the student
        chapter has been reputed as a pinnacle of success, which is evident
        through the plethora of opportunities provided such as
        technology-centred workshops, technical events, and fun fests. “A
        community of learners, innovators, and champions of our own success”,
        quoting this, UPES-CSA strives to nurture its community of student
        innovators with immense knowledge.
      </div>

      <div className={statsDiv}>
        {statsData.map((data) => (
          <Stats key={data.number} number={data.number} statText={data.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
