import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FuntopiaRegistrationsPage.module.css";
import FormLoading from "../../../components/FormLoading/FormLoading";

const {
  mainDiv,
  backArrow,
  heading,
  eventsContainer,
  eventImage,
  eventDescripton,
  eventHeading,
  eventText,
  submitButton,
  sectionHeading,
  eventDetailsDiv,
  eventDetail,
  formDiv,
  formContainer,
  memberSection,
  errorMessage,
  loadingDiv,
  paymentQRDiv,
} = styles;

const FuntopiaRegistrationsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const EventsPage = [
    {
      eventImageURL: "/img/events/live/Funtopia 5/Valo24.jpg",
      FormLink: "https://forms.gle/3LAQkFDkcUv7HZyGA",
      eventHeading: "Valorant",
      eventText: `
      <p>📅 Date:October 21st, 2024</p>
      <p>
      🕒 Time:
      <ul>
                <li>6:00 PM - 10:00 PM</li>
                </ul>
              </p>
              <p>🌐 Platform: Online</p>
              <p>👥 Team Size: 5 members</p>
              <p>Pricing:
                <ul>
                  <li>General Participants: ₹200 per team</li>
                  <li>CSA Members: ₹150 per team</li>
                  </ul>
                  </p>
              </p>
              <p>Discount Criteria: Atleast one CSA member</p>
              <p>Fill out the form below and let's kick off the fun!</p>
              </>`,
      eventMode: "Online",
      eventTeamSize: "5",
      eventRegistrationFee: "200",
      eventDate: "21/10/24",
    },
    {
      eventImageURL: "/img/events/live/Funtopia 5/TH24.jpg",
      FormLink: "https://forms.gle/Ko1YeQ95PW5xT29u6",
      eventHeading: "Treasure Hunt",
      eventText: `
              <p>📅 Date:October 22nd, 2024</p>
              <p>
                🕒 Time:
                <ul>
                <li>4:00 PM - 6:00 PM</li>
                </ul>
              </p>
              <p>🌐 Location: Bidholi Campus</p>
                <p>👥 Team Size: 4-7 members</p>

              <p>Pricing:
                <ul>
                  <li>General Participants: ₹120 per team</li>
                  <li>CSA Members: ₹80 per team</li>
                  </ul>
                  </p>
                  <p>Discount Criteria: Atleast one CSA member</p>
                  <p>Fill out the form below and let's kick off the fun!</p>
            </>`,
      eventMode: "Online",
      eventTeamSize: "4-7",
      eventRegistrationFee: "120",
      eventDate: "22/10/24",
    },
    {
      eventImageURL: "/img/events/live/Funtopia 5/BGMI24.jpg",
      FormLink: "https://forms.gle/CGLfRoxjfEeJ2ZsN9",
      eventHeading: "BGMI",
      eventText: `
      <p>📅 Date:October 23rd, 2024</p>
      <p>
      🕒 Time:
      <ul>
      <li>6:00 PM - 11:00 PM</li>
      </ul>
      </p>
      <p>🌐 Platform: Online</p>
      <p>👥 Team Size: 4 members</p>
              <p>Pricing:
                <ul>
                  <li>General Participants: ₹200 per team</li>
                  <li>CSA Members: ₹150 per team</li>
                </ul>
              </p>
              <p>Discount Criteria: Atleast one CSA member</p>
              <p>Fill out the form below and let's kick off the fun!</p>
            </>`,
      eventMode: "Online",
      eventTeamSize: "4",
      eventRegistrationFee: "200",
      eventDate: "23/10/24",
    },
  ];

  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}
      {EventsPage.map((eventDetails, i) => {
        return (
          <div className={eventsContainer} key={i}>
            <div>
              {" "}
              <h2 className={heading}>
                {eventDetails.eventHeading.toUpperCase()}
              </h2>{" "}
              <div className={eventImage}>
                <img
                  loading="lazy"
                  src={eventDetails.eventImageURL}
                  alt="eventPoster"
                />
              </div>
              <div className={eventDetailsDiv}>
                <div className={eventDetail}>{eventDetails.eventMode}</div>
                <div className={eventDetail}>
                  <img
                    loading="lazy"
                    src="/icons/teamSize.png"
                    alt=""
                    style={{ marginTop: "-0.25rem" }}
                  />
                  <p>{eventDetails.eventTeamSize}</p>
                </div>
                <div className={eventDetail}>
                  <img loading="lazy" src="/icons/date.png" alt="" />
                  <p>{eventDetails.eventDate}</p>
                </div>
                <div className={eventDetail} style={{ width: "100%" }}>
                  <img loading="lazy" src="/icons/registrationFee.png" alt="" />
                  <p>{eventDetails.eventRegistrationFee}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={eventDescripton}>
                <h4 className={eventHeading}>Event Details</h4>
                <p
                  className={eventText}
                  dangerouslySetInnerHTML={{ __html: eventDetails.eventText }}
                ></p>
              </div>
              <Link
                to={eventDetails.FormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={submitButton}>Register Now</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FuntopiaRegistrationsPage;
