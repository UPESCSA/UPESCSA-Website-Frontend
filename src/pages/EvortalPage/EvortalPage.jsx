import { useEffect } from "react";
import styles from "./EvortalPage.module.css";

import EvortalEvents from "../../components/EvortalEvents/EvortalEvents";
import PageHeading from "../../components/PageHeading/PageHeading";
import EvortalSeparator from "../../components/EvortalSeparator/EvortalSeparator";

// CSS STYLES
const { evortalContainer, evortalDiv } = styles;

const EvortalPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // EVENTS DATA
  const activeEvents = [
    {
      eventImageURL: "/img/events/live/valo.png",
      eventHeading: "Event Heading",
      eventText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      eventMode: "Offline",
      eventTeamSize: "5",
      eventDate: "12 Sept",
      eventFormURL: "/events/valorant",
      activeEvent: true,
    },
    {
      eventImageURL: "/img/events/live/valo.png",
      eventHeading: "Event Heading",
      eventText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      eventMode: "Offline",
      eventTeamSize: "5",
      eventDate: "12 Sept",
      eventFormURL: "/events/valorant",
      activeEvent: true,
    },
  ];

  const upcomingEvents = [
    {
      eventImageURL: "/img/events/live/valo.png",
      eventHeading: "Event Heading",
      eventText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      eventMode: "Offline",
      eventTeamSize: "5",
      eventDate: "12 Sept",
      eventFormURL: "/events/valorant",
      activeEvents: false,
    },
    {
      eventImageURL: "/img/events/live/valo.png",
      eventHeading: "Event Heading",
      eventText:
        "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
      eventMode: "Offline",
      eventTeamSize: "5",
      eventDate: "12 Sept",
      eventFormURL: "/events/valorant",
      activeEvents: false,
    },
  ];

  return (
    <div className={evortalContainer}>
      <PageHeading imgURL="/img/pageheaders/evortal.png" text="EVORTAL" />
      <div className={evortalDiv}>
        <EvortalSeparator text="Active Events" />
        {activeEvents.map((event) => (
          <EvortalEvents
            key={event.eventHeading}
            eventImageURL={event.eventImageURL}
            eventHeading={event.eventHeading}
            eventText={event.eventText}
            eventMode={event.eventMode}
            eventTeamSize={event.eventTeamSize}
            eventDate={event.eventDate}
            eventFormURL={event.eventFormURL}
            activeEvent={event.activeEvent}
          />
        ))}
        <EvortalSeparator text="Upcoming Events" />
        {upcomingEvents.map((event) => (
          <EvortalEvents
            key={event.eventHeading}
            eventImageURL={event.eventImageURL}
            eventHeading={event.eventHeading}
            eventText={event.eventText}
            eventMode={event.eventMode}
            eventTeamSize={event.eventTeamSize}
            eventDate={event.eventDate}
            eventFormURL={event.eventFormURL}
            activeEvent={event.activeEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default EvortalPage;
