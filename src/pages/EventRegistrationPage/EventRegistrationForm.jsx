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
  VALIDATEYEAROFSTUDY,
  VALIDATEGENDER,
} from "../../utils/registrationValidations";
import FormLoading from "../../components/FormLoading/FormLoading";
import FileSelect from "../../components/FileSelect/FileSelect";
import toast, { Toaster } from "react-hot-toast";

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
    eventImageURL: "/img/events/live/webgenesis.jpg",
    eventHeading: "WebGenesis: An AI Innovation Bootcamp",
    eventText: `
    <p>
      <strong>🤖 WEBGENESIS 2026: Your Journey from Prompts to AI-Powered Solutions 🚀</strong>
    </p>
    <p>
      UPES Cloud Security Alliance Student Chapter presents WebGenesis, a dynamic 2-Weekend online AI Innovation Bootcamp designed to equip you with the skills needed to thrive in the age of Artificial Intelligence.
    </p>
    <ul>
      <li>✅ <strong>Understand Claude:</strong> Learn its capabilities for real-world applications.</li>
      <li>✅ <strong>Context Engineering:</strong> Master techniques for building effective AI workflows.</li>
      <li>✅ <strong>Vibe Coding:</strong> Dive into AI-assisted software development.</li>
      <li>✅ <strong>Prompt Engineering:</strong> Master strategies for accurate and reliable outputs.</li>
      <li>✅ <strong>Hands-On Practices:</strong> Work on practical use cases and build productivity-focused AI tools.</li>
      <li>✅ <strong>Certificate of Participation:</strong> Awarded to all who successfully complete the bootcamp.</li>
    </ul>
    <p>
      📅 <strong>Bootcamp Dates:</strong> 04th-05th July & 11th-12th July 2026
    </p>
    <p>
      👥 <strong>Open to all!</strong> Whether you're a beginner exploring AI for the first time or an enthusiast looking to enhance your skills, this bootcamp is for you.
    </p>
    <p>
      <strong>📩 Register now to secure your seat!</strong>
    </p>
  `,
    eventMode: "Online",
    eventTeamSize: "1",
    eventRegistrationFee: "Free",
    eventDate: "04/07/2026",
    IsFree: true,
    whatsGroup: "EYjVBXmSVJGAlOZHYxILU5",
    SheetUrl: "https://docs.google.com/spreadsheets/d/1-Gaw359JgJVkjwH8dqdAhjqo1cSDKNexXEKmLjja_OU/edit?gid=0#gid=0",
    eventTemplate: "WEBGENESIS",
  };

  const EventName = eventDetails.eventHeading.replace(/\s+/g, "");

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
  const [collegeName, setCollegeName] = useState("");
  const [disabled, setdisabled] = useState(false);
  const [DisplayForm, setDisplayForm] = useState(false);
  const [gender, setGender] = useState("");

  const updateTransactionID = (e) => {
    setTransactionID(e.target.value);
  };

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

  const updateCollegeName = (e) => {
    setCollegeName(e.target.value);
  };

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isWhatsAppValid, setIsWhatsAppValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);
  const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
  const [isCollegeNameValid, setIsCollegeNameValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);

  const validate = () => {
    const NameValid = VALIDATENAME(name, setIsNameValid);
    const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const WhatsAppValid = VALIDATEPHONE(WhatsApp, setIsWhatsAppValid);
    const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
    const YearOfStudyValid = VALIDATEYEAROFSTUDY(yearOfStudy, setIsYearOfStudyValid);
    const CollegeNameValid = VALIDATENAME(collegeName, setIsCollegeNameValid);
    const GenderValid = VALIDATEGENDER(gender, setIsGenderValid);

    if (
      NameValid &&
      EmailValid &&
      PhoneValid &&
      WhatsAppValid &&
      CourseValid &&
      CollegeNameValid &&
      YearOfStudyValid &&
      GenderValid
    ) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return true;
    }
    return false;
  };

  const submitFormOne = (e) => {
    e.preventDefault();
    if (validate()) {
      setPaymentPage(true);
    }
  };

  const submitFormFinal = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      
      const data = {
        Name: name,
        Gender: gender,
        "Contact Number": phone,
        "WhatsApp Number": WhatsApp,
        "Email ID": email,
        Course: course,
        "Year Of Study": yearOfStudy,
        College: collegeName,
      };
      
      const finalData = new FormData();
      for (const key in data) {
        finalData.append(key, data[key]);
      }
      
      if (!eventDetails.IsFree) {
        finalData.append("fileName", `${name}_${phone}_${EventName}_PaymentSS`);
        finalData.append("fileData", PaymentSS.fileData);
        finalData.append("fileType", PaymentSS.fileType);
      }
      
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycby8C_hEoj1zFcbccGMUyHTCRc6pVDPmSFQ1Ec96Sgk9aXqmS4LF6QMcjOsACvT3yHsZ9w/exec",
          {
            method: "POST",
            body: finalData,
          }
        );
        const result = await response.json();
        console.log(result);
        
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
          },
        );

        if (sendMailResponse.ok) {
          const sendMailData = await sendMailResponse.json();
          console.log("Email sent:", sendMailData);

          navigate(
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Email=${email}&Event=${eventDetails.eventHeading}`,
          );
          toast.success("Registration successful! Check your email.");
        } else {
          console.error("Email failed:", await sendMailResponse.text());
          toast.warning(
            "Registration received but email confirmation failed. Please contact support.",
          );
          navigate(
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Email=${email}&Event=${eventDetails.eventHeading}`,
          );
        }
        setLoading(false);
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
            
            {!paymentPage ? (
              <div className={formDiv}>
                <h3 className={sectionHeading}>Participant Details</h3>
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
                    id="participantGender"
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
                    id="participantWhatsApp"
                    type="text"
                    inputLabel="WhatsApp Number"
                    value={WhatsApp}
                    valueUpdater={updateWhatsApp}
                    required={true}
                  />
                  {!isWhatsAppValid && (
                    <span className={errorMessage}>Invalid WhatsApp Number</span>
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
                </div>

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
                  <img loading="lazy" src="/img/qr/QR.jpg" alt="Payment QR" />
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