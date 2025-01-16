// import TimelineEnds from "../../components/TimelineEnds/TimelineEnds";
import TimelineMid from "../../components/TimelineMid/TimelineMid";
import styles from "./TimelineSection.module.css";

const { mainDiv, timelineSections } = styles;

const TimelineSection = () => {
  const timelineData = [
    {
      timelineImage: "/img/timeline/registration.avif",
      timelineHeading: "Registrations Begin",
      timelineDate: "14 January 2025",
      timelineTime: "08:00 AM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/psreveal.png",
      timelineHeading: "Problem Statement Reveal & Selection",
      timelineDate: "6th February 2025",
      timelineTime: "11:00 AM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/inaugralceremony.avif",
      timelineHeading: "Inaugural Ceremony",
      timelineDate: "7th February 2025",
      timelineTime: "10:00 AM",
      reverseOrder: true,
    },
    {
      timelineImage: "/img/timeline/presentation.avif",
      timelineHeading: "Presentation Round Evaluation",
      timelineDate: "7th February 2025",
      timelineTime: "12:00 PM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/result.avif",
      timelineHeading: "Presentation Round Result",
      timelineDate: "7th February 2025",
      timelineTime: "04:00 PM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/round1.avif",
      timelineHeading: "Round 1 Evaluation",
      timelineDate: "8th February 2025",
      timelineTime: "10:00 AM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/round1result.png",
      timelineHeading: "Round 1 Result",
      timelineDate: "8th February 2025",
      timelineTime: "1:00 PM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/round2.png",
      timelineHeading: "Round 2 Evaluation",
      timelineDate: "8th February 2025",
      timelineTime: "05:00 PM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/round2result.png",
      timelineHeading: "Round 2 Result",
      timelineDate: "8th February 2025",
      timelineTime: "8:00 PM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/finale.png",
      timelineHeading: "Grand Finale",
      timelineDate: "9th February 2025",
      timelineTime: "10:00 AM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/finale.avif",
      timelineHeading: "Closing Ceremony",
      timelineDate: "9th February 2025",
      timelineTime: "03:00 PM",
      reverseOrder: true,
      height: "250px",
    },
  ];

  return (
    <div className={mainDiv} id="timeline">
      <h1 className="heading">Timeline</h1>
      <div className={timelineSections}>
        <TimelineMid
          timelineImage={timelineData[0].timelineImage}
          timelineHeading={timelineData[0].timelineHeading}
          timelineDate={timelineData[0].timelineDate}
          timelineTime={timelineData[0].timelineTime}
          reverseOrder={timelineData[0].reverseOrder}
          timelineEndPoint={true}
          timelineStart={true}
        />

        {timelineData.slice(1, -1).map((timeline, index) => (
          <TimelineMid
            key={index}
            timelineImage={timeline.timelineImage}
            timelineHeading={timeline.timelineHeading}
            timelineDate={timeline.timelineDate}
            timelineTime={timeline.timelineTime}
            reverseOrder={timeline.reverseOrder}
            timelineEndPoint={false}
            height={timeline.height}
          />
        ))}

        <TimelineMid
          timelineImage={timelineData[timelineData.length - 1].timelineImage}
          timelineHeading={
            timelineData[timelineData.length - 1].timelineHeading
          }
          timelineDate={timelineData[timelineData.length - 1].timelineDate}
          timelineTime={timelineData[timelineData.length - 1].timelineTime}
          reverseOrder={timelineData[timelineData.length - 1].reverseOrder}
          timelineEndPoint={true}
          timelineStart={false}
        />
      </div>
    </div>
  );
};

export default TimelineSection;
