// import TimelineEnds from "../../components/TimelineEnds/TimelineEnds";
import TimelineMid from "../../../../../components/TimelineMid/TimelineMid";
import styles from "./TimeLine.module.css";

const { mainDiv, timelineSections } = styles;

const TimeLine = () => {
  const timelineData = [
    {
      timelineImage: "/img/timeline/registration.avif",
      timelineHeading: "Opening ceremony",
      // timelineDate: "14 January 2025",
      timelineTime: "10:00 AM - 10:45 AM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/psreveal.png",
      timelineHeading: "Ice-breaking and high tea",
      // timelineDate: "6th February 2025",
      timelineTime: "10:45 AM -11:00 AM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/inaugralceremony.avif",
      timelineHeading: "Presentation round",
      // timelineDate: "7th February 2025",
      timelineTime: "11:00 AM - 01:00 PM",
      reverseOrder: true,
    },
    {
      timelineImage: "/img/timeline/presentation.avif",
      timelineHeading: "Lunch",
      // timelineDate: "7th February 2025",
      timelineTime: "01:00 PM - 01:30 PM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/result.avif",
      timelineHeading: "Mentorship sessions",
      // timelineDate: "7th February 2025",
      timelineTime: "01:30 PM - 02:30 PM",
      reverseOrder: true,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/round1.avif",
      timelineHeading: "Prototype round",
      // timelineDate: "8th February 2025",
      timelineTime: "02:30 PM - 04:30 PM",
      reverseOrder: false,
      height: "250px",
    },
    {
      timelineImage: "/img/timeline/finale.avif",
      timelineHeading: "Closing ceremony",
      // timelineDate: "8th February 2025",
      timelineTime: "04:30 PM - 06:00 PM",
      reverseOrder: true,
      height: "250px",
    },
    // {
    //   timelineImage: "/img/timeline/finale.avif",
    //   timelineHeading: "Closing Ceremony",
    //   timelineDate: "9th February 2025",
    //   timelineTime: "03:00 PM",
    //   reverseOrder: true,
    //   height: "250px",
    // },
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

export default TimeLine;
