import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ValorantPage.module.css";
import InputField from "./InputField/InputField";
import SubmitButton from "./Button/Button";

const mainDiv = [styles.mainDiv].join("");
const subtitle = [styles.subtitle].join("");
const heading = [styles.heading].join("");
const evortalEventsContainer = [styles.evortalEventsContainer].join("");
const evortalEventImage = [styles.evortalEventImage].join("");
const evortalEventDescripton = [styles.evortalEventDescripton].join("");
const evortalEventHeading = [styles.evortalEventHeading].join("");
const evortalEventText = [styles.evortalEventText].join("");
const evortalEventDetails = [styles.evortalEventDetails].join("");
const evortalEventDetailsDiv = [styles.evortalEventDetailsDiv].join("");
const evortalEventDetail = [styles.evortalEventDetail].join("");
const evortalEventRegisterButton = [styles.evortalEventRegisterButton].join("");
const formDiv = [styles.formDiv].join("");
const formContainer = [styles.formContainer].join(""); // New CSS class for the container

const ValorantPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sapId, setSapId] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateSapId = (e) => setSapId(e.target.value);
  const updateCourse = (e) => setCourse(e.target.value);
  const updateYearOfStudy = (e) => setYearOfStudy(e.target.value);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const eventDetails = {
    eventImageURL: "../../../../public/img/events/live/valo.png",
    eventHeading: "Event Heading",
    eventText:
      "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet ipsum consequat nisl vel pretium lectus quam id leo ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed",
    eventMode: "Offline",
    eventTeamSize: "5",
    eventDate: "12 Sept",
    eventFormURL: "/events/valorant",
    activeEvent: true,
  };

  return (
    <div className={mainDiv}>
      <Link to={"/evortal"}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="feather feather-arrow-left">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      <div className={evortalEventsContainer}>
      <div className={evortalEventImage}>
        <img src={eventDetails.eventImageURL} alt="eventPoster" />
      </div>
      <div className={evortalEventDetailsDiv}>
        <div className={evortalEventDetail}>{eventDetails.eventMode}</div>
        <div className={evortalEventDetail}>
          <img
            src="/icons/teamSize.png"
            alt=""
            style={{ marginTop: "-0.25rem" }}
          />
          <p>{eventDetails.eventTeamSize}</p>
        </div>
        <div className={evortalEventDetail}>
          <img src="/icons/date.png" alt="" />
          <p>{eventDetails.eventDate}</p>
        </div>
      </div>
      <div className={evortalEventDescripton}>
        <h4 className={evortalEventHeading}>{eventDetails.eventHeading}</h4>
        <p className={evortalEventText}>{eventDetails.eventText}</p>
        <div className={evortalEventDetails}>
        </div>
      </div>
    </div>
      <div className={formContainer}>
        <h2 className={heading}>{eventDetails.eventHeading}</h2>
        <p className={subtitle}>Registration Form</p> 
        <form className={formDiv} onSubmit={submitForm}>
          <InputField
            id="name"
            type="text"
            placeholder=""
            inputLabel="Name"
            value={name}
            valueUpdater={updateName}
            required={true}
          />
          <InputField
            id="email"
            type="email"
            placeholder=""
            inputLabel="Email"
            value={email}
            valueUpdater={updateEmail}
            required={true}
          />
          <InputField
            id="sapId"
            type="text"
            placeholder=""
            inputLabel="Sap ID"
            value={sapId}
            valueUpdater={updateSapId}
            required={true}
          />
          <InputField
            id="course"
            type="text"
            placeholder=""
            inputLabel="Course"
            value={course}
            valueUpdater={updateCourse}
            required={true}
          />
          <InputField
            id="yearOfStudy"
            type="text"
            placeholder=""
            inputLabel="Year of Study"
            value={yearOfStudy}
            valueUpdater={updateYearOfStudy}
            required={true}
          />
          <SubmitButton/>
        </form>
      </div>
    </div>
  );
};

export default ValorantPage;
