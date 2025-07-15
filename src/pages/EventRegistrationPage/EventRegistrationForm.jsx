import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventRegistrationPage.module.css";
import InputField from "../../components/InputField/InputField";
import DropDownSelectField from "../../components/DropDownSelectField/DropDownSelectField";

import {
  VALIDATENAME,
  VALIDATEEMAIL,
  VALIDATEPHONE,
  VALIDATECOURSE,
  VALIDATESAPID,
  VALIDATECSAMEMBER,
  VALIDATECSAID,
  VALIDATEYEAROFSTUDY,
  VALIDATEGENDER,
  // VALIDATECOLLEGENAME, // Removed college name validation import
} from "../../utils/registrationValidations";
import FormLoading from "../../components/FormLoading/FormLoading";
import FileSelect from "../../components/FileSelect/FileSelect";
import toast, { Toaster } from "react-hot-toast";
import CheckBoxField from "../../components/RegistrationFormComponents/CheckBoxFeild/CheckBoxField";

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
  RegisterButton,
  RegisterButtonDiv,
} = styles;

const EventRegistrationForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const eventDetails = {
    eventImageURL: "/img/events/live/WebGenesis.avif",
    eventHeading: "WebGenesis: Code to Cloud",
    eventText: `
  <p>
    <strong>🚀 WebGenesis: Code to Cloud – A Full-Stack & DevOps Bootcamp</strong>
  </p>
  <p>
    <strong>🕒 Timings:</strong> Weekends only
  </p>
  <ul>
    <li>✅ <strong>Full-Stack Web Dev:</strong> HTML, CSS, JavaScript, Node.js, Express</li>
    <li>✅ <strong>DevOps Skills:</strong> GitHub, CI/CD, Docker</li>
    <li>✅ <strong>Cloud Deployment:</strong> AWS, Vercel, Render & more</li>
    <li>✅ <strong>Real-World Projects:</strong> Hands-on labs and live mentoring</li>
    <li>✅ <strong>Certificate + Recognition:</strong> Verified participation</li>
    <li>✅ <strong>Free Registration</strong> | Open to All SoCS Students</li>
  </ul>
  <p>
    🚨 <strong>Limited Seats Available!</strong>
  </p>
  <p>
    <strong>📩 Secure your seat by filling out the form below!</strong>
  </p>
`,
    eventMode: "Online",
    eventTeamSize: "1",
    eventRegistrationFee: "free",
    eventDate: "21/06 – 13/07",
    IsFree: true,
    whatsGroup: "CvBKpYcBNQDKc5SjuSeHO2",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/1Cn5zaL4kwLiRSXWThqpLXqrfBoxN2FqrjhIvdjUPaQo/edit?usp=drivesdk/edit?gid=0#gid=0",
    FolderId: "NEW_FOLDER_ID",
    eventTemplate: "WEBGENESIS",
  };

  const EventName = eventDetails.eventHeading.replace(/\s+/g, "");
  // FORM STATES

  const [paymentPage, setPaymentPage] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [PaymentSS, setPaymentSS] = useState({
    fileData: "",
    fileType: "",
    fileName: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [WhatsApp, setWhatsApp] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [sapID, setSapID] = useState("");
  const [csaMember, setCSAMember] = useState("");
  const [csaID, setCSAID] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [collegeName, setCollegeName] = useState(""); // Added collegeName state
  const [session, setSession] = useState("Select");
  const [disabled, setdisabled] = useState(false);
  const [DisplayForm, setDisplayForm] = useState(false);
  const [gender, setGender] = useState("");
  const [selectedSessions, setSelectedSessions] = useState([]);

  // UPDATE FUNCTIONS

  function updateTransactionID(e) {
    setTransactionID(e.target.value);
  }
  const updateTransactionSS = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1];
        const fileType = file.type;
        const fileName = file.name;

        setPaymentSS({
          fileData: base64Data,
          fileType: fileType,
          fileName: fileName,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateWhatsApp = (e) => {
    setWhatsApp(e.target.value);
  };
  const updateCourse = (e) => {
    setCourse(e.target.value);
  };
  const updateYearOfStudy = (e) => {
    setYearOfStudy(e.target.value);
  };
  const updateSapID = (e) => {
    setSapID(e.target.value);
  };
  const updateCSAMember = (e) => {
    setCSAMember(e.target.value);
    if (e.target.value === "no") {
      setCSAID("not a csa member");
    } else if (e.target.value === "yes") {
      setCSAID("");
    }
  };
  const updateCSAID = (e) => {
    let value = e.target.value;
    setCSAID(value.toUpperCase());
  };
  const updateCollegeEmail = (e) => {
    setCollegeEmail(e.target.value);
  };
  const updateCollegeName = (e) => {
    // Added updateCollegeName function
    setCollegeName(e.target.value);
  };
  const updateSession = (e) => {
    setSession(e.target.value);
    console.log(e.target.value);
  };
  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const handleSessionsChange = (newSelectedValues) => {
    setSelectedSessions(newSelectedValues);
  };
  // VALIDATION STATES

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isWhatsAppValid, setIsWhatsAppValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);
  const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
  const [isSapIDValid, setIsSapIDValid] = useState(true);
  const [isCSAMemberValid, setIsCSAMemberValid] = useState(true);
  const [isCSAIDValid, setIsCSAIDValid] = useState(true);
  const [isCollegeEmailValid, setIsCollegeEmailValid] = useState(true);
  const [isCollegeNameValid, setIsCollegeNameValid] = useState(true); // Added isCollegeNameValid state
  const [isSessionValid, setIsSessionValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const options = [
    "Week 1: Web Development",
    "Week 2: Collaboration & Version Control",
    "Week 3: DevOps & Automation",
    "Week 4: Cloud Deployment",
  ];
  const disabledOptions = [
    "Week 1: Web Development",
    "Week 2: Collaboration & Version Control",
    "Week 3: DevOps & Automation",
  ]; // Options that should be disabled in the dropdown

  // VALIDATION FUNCTIONS
  // const VALIDATESESSION = (value, setValid) => {
  //   // Convert value to lowercase and check if any option matches (case-insensitive)
  //   const isValid = options.some(
  //     (option) => option.toLowerCase() === value.toLowerCase()
  //   );

  //   if (isValid) {
  //     setValid(true);
  //     return true;
  //   }

  //   toast.error("Please select a valid option");
  //   setValid(false);
  //   return false;
  // };

  const validate = () => {
    const NameValid = VALIDATENAME(name, setIsNameValid);
    const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const WhatsAppValid = VALIDATEPHONE(WhatsApp, setIsWhatsAppValid);
    const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
    const YearOfStudyValid = VALIDATEYEAROFSTUDY(
      yearOfStudy,
      setIsYearOfStudyValid
    );
    // const CollegeEmailValid = VALIDATEEMAIL(
    //   collegeEmail,
    //   setIsCollegeEmailValid
    // );
    const CollegeNameValid = VALIDATENAME(
      collegeName,
      setIsCollegeNameValid
    );
    const GenderValid = VALIDATEGENDER(gender, setIsGenderValid);
    // const SessionValid = VALIDATESESSION(session, setIsSessionValid);
    // const SapIDValid = VALIDATESAPID(sapID, setIsSapIDValid);
    const CSAMemberValid = VALIDATECSAMEMBER(csaMember, setIsCSAMemberValid);

    if (
      NameValid &&
      EmailValid &&
      PhoneValid &&
      WhatsAppValid && // Enforce WhatsApp validation
      CourseValid &&
      CollegeNameValid &&
      YearOfStudyValid &&
      GenderValid

      // SessionValid &&
      // WhatsAppValid &&
      // CollegeEmailValid &&
      //&& SapIDValid
      //&& CSAMemberValid
    ) {
      if (csaMember === "yes") {
        return VALIDATECSAID(csaID, setIsCSAIDValid);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        return true;
      }
    }
  };

  const submitFormOne = (e) => {
    e.preventDefault();
    if (validate()) {
      setPaymentPage(true);
    }
  };

  const submitFormFinal = async (e) => {
    e.preventDefault();
    // VALIDATION
    if (validate()) {
      setLoading(true);
      // setdisabled(true);
      // Prepare data for Google Spreadsheet columns
      const data = {
        Name: name, // Name
        Gender: gender, // Gender
        "Contact Number": phone, // Contact Number
        "WhatsApp Number": WhatsApp, // WhatsApp Number
        "Email ID": email, // Email ID
        Course: course, // Course
        "Year Of Study": yearOfStudy, // Year Of Study
        College: collegeName, // College
        // Timestamp: new Date().toISOString(), // Optional: Apps Script can handle this
        // selectedSessions, // Not needed for spreadsheet, comment out
        // collegeEmail, // Not needed for spreadsheet, comment out
        // session,
        // sapID,
        // csaMember,
        // csaID,
        // transactionID,
        // SheetUrl: eventDetails.SheetUrl, // Not needed for spreadsheet, comment out
        // FolderId: eventDetails.FolderId, // Not needed for spreadsheet, comment out
      };
      // console.log(data);
      const finalData = new FormData();

      for (const key in data) {
        finalData.append(key, data[key]);
      }
      if (!eventDetails.IsFree) {
        finalData.append("fileName", `${name}_${phone}_${EventName}_PaymentSS`);
        finalData.append("fileData", PaymentSS.fileData);
        finalData.append("fileType", PaymentSS.fileType);
      }
      // console.log(finalData);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxegUi1O6lk3_wCbJNLd-bwrk4_SRvP6yA7M6F55Pp7Kr7q4ja0dvdUjAAhy7f_mk2j/exec",
          {
            method: "POST",
            body: finalData,
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.message === "Duplicate SAP ID") {
          toast.error("Duplicate SAP ID");
          setLoading(false);
          setIsSapIDValid(false);
          return;
        }
        const sendMailResponse = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/sendmail/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              template: eventDetails.eventTemplate,
            }),
          }
        );

        if (data.status == "success") {
          const sendMailData = await sendMailResponse.json();
          console.log(sendMailData);
          toast.success("Form Submitted Successfully");
          navigate(
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`
          );
          setLoading(false);
        }
      } catch (error) {
        toast.error("Error Submitting Form");
        setLoading(false);
        console.log("Error:", error);
      }
    }
  };

  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}

      {(DisplayForm && (
        <div className={formContainer}>
          <h2 className={heading}>{eventDetails.eventHeading}</h2>
          <div className={styles.divider}></div>
          <Toaster />
          <form
            className={formDiv}
            encType="multipart/form-data"
            onSubmit={submitFormFinal}
          >
            <img
              loading="lazy"
              src="/icons/rightArrow.png"
              alt="backArrow"
              className={backArrow}
              onClick={() => setDisplayForm(false)}
            />
            {/* TEAM DETAILS SECTION START */}
            {!paymentPage ? (
              <div className={formDiv}>
                <h3 className={sectionHeading}>Participant Details</h3>

                {/* USER SECTION START */}

                <div className={memberSection}>
                  <InputField
                    id="participantName"
                    type="text"
                    inputLabel="Name"
                    value={name}
                    valueUpdater={updateName}
                    required={true}
                  />
                  {!isNameValid && (
                    <span className={errorMessage}>Invalid Name</span>
                  )}
                  <DropDownSelectField
                    id="participantCSAMember"
                    value={gender}
                    valueUpdater={updateGender}
                    inputLabel="Gender"
                    required={true}
                    options={["Male", "Female", "Others"]}
                    defaultOption="Select"
                  />
                  {!isGenderValid && (
                    <span className={errorMessage}>Invalid Gender</span>
                  )}
                  <InputField
                    id="participantPhone"
                    type="text"
                    inputLabel="Phone Number"
                    value={phone}
                    valueUpdater={updatePhone}
                    required={true}
                  />
                  {!isPhoneValid && (
                    <span className={errorMessage}>Invalid Phone</span>
                  )}
                  <InputField
                    id="participantEmail"
                    type="email"
                    inputLabel="Email"
                    value={email}
                    valueUpdater={updateEmail}
                    required={true}
                  />
                  {!isEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                  <InputField
                    id="participantCourse"
                    type="text"
                    inputLabel="Course (with specialization)"
                    value={course}
                    valueUpdater={updateCourse}
                    required={true}
                  />
                  {!isCourseValid && (
                    <span className={errorMessage}>Invalid Course</span>
                  )}
                  <InputField
                    id="participantYearOfStudy"
                    type="text"
                    inputLabel="Year of Study"
                    value={yearOfStudy}
                    valueUpdater={updateYearOfStudy}
                    required={true}
                  />
                  {!isYearOfStudyValid && (
                    <span className={errorMessage}>Invalid Year of Study</span>
                  )}
                  <InputField
                    id="participantCollegeName"
                    type="text"
                    inputLabel="College Name"
                    value={collegeName}
                    valueUpdater={updateCollegeName}
                    required={true}
                  />
                  {!isCollegeNameValid && (
                    <span className={errorMessage}>Invalid College Name</span>
                  )}
                  <CheckBoxField
                    id="participantSessions"
                    selectedValues={selectedSessions}
                    valueUpdater={handleSessionsChange}
                    inputLabel="Select Sessions"
                    required={true}
                    options={options}
                    disabledOptions={disabledOptions}
                  />
                  {/* <DropDownSelectField
                      id="participantCSAMember"
                      value={session}
                      valueUpdater={updateSession}
                      inputLabel="Select Session"
                      required={true}
                      options={options}
                      defaultOption="Select"
                    />
                    {!isSessionValid && (
                      <span className={errorMessage}>Invalid Option</span>
                    )} */}
                  {/* <InputField
                    id="participantCollegeEmail"
                    type="email"
                    inputLabel="College Email"
                    value={collegeEmail}
                    valueUpdater={updateCollegeEmail}
                    required={true}
                  />
                  {!isCollegeEmailValid && (
                    <span className={errorMessage}>Invalid College Email</span>
                  )} */}
                  {/* <InputField
                    id="participantSapID"
                    type="text"
                    inputLabel="SAP ID"
                    value={sapID}
                    valueUpdater={updateSapID}
                    required={true}
                  />
                  {!isSapIDValid && (
                    <span className={errorMessage}>Invalid SAP ID</span>
                  )} */}

                  {/* <InputField
                    id="participantPhone"
                    type="text"
                    inputLabel="WhatsApp Number"
                    value={WhatsApp}
                    valueUpdater={updateWhatsApp}
                    required={true}
                  />
                  {!isWhatsAppValid && (
                    <span className={errorMessage}>
                      Invalid WhatsApp Number
                    </span>
                  )} */}

                  {/* <DropDownSelectField
                  id="participantCSAMember"
                  value={csaMember}
                  valueUpdater={updateCSAMember}
                  inputLabel="Are you a CSA Member?"
                  required={true}
                  options={["Yes", "No"]}
                  defaultOption="Select"
                />
                {!isCSAMemberValid && (
                  <span className={errorMessage}>Invalid Option</span>
                )} */}
                  {/* {csaMember === "yes" && (
                  <InputField
                    id="participantCSAID"
                    type="text"
                    inputLabel="CSA ID"
                    value={csaID}
                    valueUpdater={updateCSAID}
                    required={csaMember === "yes"}
                  />
                )} */}
                  {/* {!isCSAIDValid && (
                    <span className={errorMessage}>Invalid CSA ID</span>
                  )} */}
                </div>

                {/* USER SECTION END */}

                {/* ------------------------------------------------------------------------------------ */}

                {eventDetails.IsFree ? (
                  <button
                    disabled={disabled}
                    type="submit"
                    className={submitButton}
                  >
                    Submit
                  </button>
                ) : (
                  <button className={submitButton} onClick={submitFormOne}>
                    NEXT
                  </button>
                )}
              </div>
            ) : (
              <div className={formDiv}>
                <img
                  loading="lazy"
                  src="/icons/rightArrow.png"
                  alt="backArrow"
                  className={backArrow}
                  onClick={() => setPaymentPage(false)}
                />
                <h3
                  className={sectionHeading}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "1.5rem",
                  }}
                >
                  Payment Section
                </h3>

                <div className={paymentQRDiv}>
                  <img loading="lazy" src="/img/qr/QR.jpg" alt="Payment OR" />
                </div>

                <InputField
                  id="transactionID"
                  type="text"
                  inputLabel="Transaction ID"
                  value={transactionID}
                  valueUpdater={updateTransactionID}
                  required={true}
                />

                <FileSelect
                  id="transactionSS"
                  inputLabel="Transaction Screenshot"
                  valueUpdater={updateTransactionSS}
                  required={true}
                />

                <button type="submit" className={submitButton}>
                  Submit Form
                </button>
              </div>
            )}
          </form>
        </div>
      )) || (
        <>
          <div className={eventsContainer}>
            <div>
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
                <div className={eventDetail}>
                  <img loading="lazy" src="/icons/registrationFee.png" alt="" />
                  <p>{eventDetails.eventRegistrationFee}</p>
                </div>
              </div>
            </div>
            <div className={eventDescripton}>
              <h4 className={eventHeading}>Event Details</h4>
              <p
                className={eventText}
                dangerouslySetInnerHTML={{ __html: eventDetails.eventText }}
              ></p>
            </div>
          </div>
          <div className={RegisterButtonDiv}>
            <button
              className={RegisterButton}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setDisplayForm(true);
              }}
            >
              Register Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EventRegistrationForm;
