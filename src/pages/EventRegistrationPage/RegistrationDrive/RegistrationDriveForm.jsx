import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eventCSS from "../EventRegistrationPage.module.css";
import formCSS from "./RegistrationDriveForm.module.css";
import InputField from "../../../components/InputField/InputField";
import DropDownSelectField from "../../../components/DropDownSelectField/DropDownSelectField";

import {
  VALIDATENAME,
  VALIDATEEMAIL,
  VALIDATEPHONE,
  VALIDATECOURSE,
  VALIDATESAPID,
  VALIDATECSAMEMBER,
  VALIDATECSAID,
  VALIDATEYEAROFSTUDY,
  VALIDATECOMMITTEE,
  VALIDATEPAYMENTMODE,
  VALIDATEGENDER,
} from "../../../utils/registrationValidations";
import FormLoading from "../../../components/FormLoading/FormLoading";
import FileSelect from "../../../components/FileSelect/FileSelect";
import toast, { Toaster } from "react-hot-toast";

// Use eventCSS for event display and formCSS for form
const {
  mainDiv,
  backArrow,
  heading,
  eventsContainer,
  eventImage,
  eventDescripton,
  eventHeading,
  eventText,
  eventDetailsDiv,
  eventDetail,
  RegisterButton,
  RegisterButtonDiv,
} = eventCSS;

const {
  formDiv,
  formContainer,
  memberSection,
  sectionHeading,
  submitButton,
  errorMessage,
  loadingDiv,
  paymentQRDiv,
  divider,
} = formCSS;

const RegistrationDriveForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [DisplayForm, setDisplayForm] = useState(false);

  const eventDetails = {
    eventImageURL: "/img/Registration2026Poster.png",
    eventHeading: "UPES CSA Registration Drive 2026-27",
    eventText: `
      <p>
        <strong>"The best way to predict the future is to create it." - Peter Drucker</strong>
      </p>
      <p>
        The wait is over! Registrations for the UPES Cloud Security Alliance (CSA) Student Chapter 
        Core Team <strong>2026–27</strong> are now officially open!
      </p>
      <p>
        We are proud to be the <strong>first student chapter</strong> of the international Cloud Security 
        Alliance research organization in Uttarakhand. Join a thriving community that fosters innovation, 
        leadership, and continuous growth.
      </p>
      <p>
        <strong>✨ Why Join UPES-CSA?</strong>
      </p>
      <ul>
        <li><strong>Drive Meaningful Experiences</strong> - Be a part of planning and executing workshops, competitions, speaker sessions, and flagship events.</li>
        <li><strong>Build Leadership Skills</strong> - Take ownership of projects and gain practical experience that extends beyond academics.</li>
        <li><strong>Earn Valuable Certifications</strong> - Access opportunities to earn industry-recognized certifications with long-term professional value.</li>
        <li><strong>Expand Your Network</strong> - Connect with ambitious peers, experienced mentors, and industry experts.</li>
        <li><strong>Exclusive Internship Opportunities</strong> - Outstanding contributions can lead to exclusive internship opportunities and valuable industry exposure.</li>
      </ul>
      <p>
        <strong>📋 Available Committees:</strong> Editorial, Events, Technical, Design & VFX, Public Relations, Social Media, Photography, Registration, Logistics
      </p>
      <p>
        <strong>💰 Registration Fee: <span style="text-decoration: line-through; color: #888;">₹300/-</span> <span style="color: #ff6b6b; font-weight: bold;">₹250/-</span> (Early Bird Discount!)</strong>
      </p>
      <p>
        <strong>📅 Academic Year: 2026-27</strong>
      </p>
      <p>
        <strong>🚀 Registrations are now open!</strong>
      </p>
      <p>
        <em>🎯 Early bird offer valid for a limited time only. Register now to avail the discount!</em>
      </p>
      <p>
        This is more than just a position — it's an opportunity to learn, lead, innovate, and grow 
        alongside a community that shares your passion for technology.
      </p>
      <p>
        <strong>For queries, contact:</strong>
        <br />
        Vansh Garg (Events Head): +91 95282 54655
        <br />
        Siya Singh (Events Head): +91 73075 18413
      </p>
    `,
    eventRegistrationFee: "₹250 (Early Bird)",
    eventDate: "2026-27",
    IsFree: false,
    whatsGroup: "K68n2hC9M2v6y9OH4i6hhS",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/1Z98LClauDRrpwTpsJUgmkXY_Yhw57ICSxLfo2fyHK20/edit?usp=sharing",
    FolderId: "1g5gOXam6bdhYf1lv5OxYOjbX3kEnIxPX",
    eventTemplate: "RegistrationDrive2026",
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
  const [collegeEmail, setCollegeEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [WhatsApp, setWhatsApp] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [sapID, setSapID] = useState("");
  const [csaMember, setCSAMember] = useState("");
  const [csaID, setCSAID] = useState("");
  const [Gender, setGender] = useState("");
  const [disabled, setdisabled] = useState(false);
  const [committee1, setcommittee1] = useState("");
  const [committee2, setcommittee2] = useState("");
  const [ModeOfPayment, setModeOfPayment] = useState("UPI");

  const committees = [
    "Technical",
    "Events",
    "Public Relations & Sponsorship",
    "Social Media",
    "Photography",
    "Design and VFX",
    "Logistics",
    "Editorial",
    "Registrations",
  ];

  const Years = ["1st", "2nd", "3rd", "4th", "5th"];

  // UPDATE FUNCTIONS
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

  const updateCollegeEmail = (e) => {
    setCollegeEmail(e.target.value);
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

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateCommittee1 = (e) => {
    committee2 == e.target.value
      ? toast.error("Committee preferences must be unique!")
      : setcommittee1(e.target.value);
  };
  const updateCommittee2 = (e) => {
    committee1 == e.target.value
      ? toast.error("Committee preferences must be unique!")
      : setcommittee2(e.target.value);
  };

  const updateModeOfPayment = (e) => {
    setModeOfPayment(e.target.value);
  };

  // VALIDATION STATES
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCollegeEmailValid, setIsCollegeEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isWhatsAppValid, setIsWhatsAppValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);
  const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
  const [isSapIDValid, setIsSapIDValid] = useState(true);
  const [isCSAMemberValid, setIsCSAMemberValid] = useState(true);
  const [isCSAIDValid, setIsCSAIDValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isCommittee1Valid, setIsCommittee1Valid] = useState(true);
  const [isCommittee2Valid, setIsCommittee2Valid] = useState(true);
  const [isModeOfPaymentValid, setIsModeOfPaymentValid] = useState(true);

  const validate = () => {
    const NameValid = VALIDATENAME(name, setIsNameValid);
    const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const CollegeEmailValid = VALIDATEEMAIL(
      collegeEmail,
      setIsCollegeEmailValid,
    );
    const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const WhatsAppValid = VALIDATEPHONE(WhatsApp, setIsWhatsAppValid);
    const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
    const CSAMemberValid = VALIDATECSAMEMBER(csaMember, setIsCSAMemberValid);
    const YearOfStudyValid = VALIDATEYEAROFSTUDY(
      yearOfStudy,
      setIsYearOfStudyValid,
    );
    const SapIDValid = VALIDATESAPID(sapID, setIsSapIDValid);
    const GenderValid = VALIDATEGENDER(Gender, setIsGenderValid);
    const Committee1Valid = VALIDATECOMMITTEE(committee1, setIsCommittee1Valid);
    const Committee2Valid = VALIDATECOMMITTEE(committee2, setIsCommittee2Valid);
    const ModeOfPaymentValid = VALIDATEPAYMENTMODE(
      ModeOfPayment,
      setIsModeOfPaymentValid,
    );

    if (
      NameValid &&
      EmailValid &&
      CollegeEmailValid &&
      PhoneValid &&
      CourseValid &&
      WhatsAppValid &&
      SapIDValid &&
      YearOfStudyValid &&
      GenderValid &&
      Committee1Valid &&
      Committee2Valid
    ) {
      if (csaMember === "yes") {
        return VALIDATECSAID(csaID, setIsCSAIDValid);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        return true;
      }
    } else {
      toast.error("Ensure all values are correct.");
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
    if (validate()) {
      setLoading(true);
      setdisabled(true);
      const data = {
        name,
        Gender,
        sapID,
        phone,
        WhatsApp,
        collegeEmail,
        email,
        course,
        yearOfStudy,
        committee1,
        committee2,
        transactionID,
        SheetUrl: eventDetails.SheetUrl,
        FolderId: eventDetails.FolderId,
      };
      const finalData = new FormData();

      for (const key in data) {
        finalData.append(key, data[key]);
      }
      if (!eventDetails.IsFree) {
        finalData.append("fileName", `${name}_${phone}_${EventName}`);
        finalData.append("fileData", PaymentSS.fileData);
        finalData.append("fileType", PaymentSS.fileType);
      }

      try {
        console.log("Submitting form...");
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwMv2ib7jNij5p6LKYgmKWAp6rSYt4PYdfa-gnokdZZ4dcLM3c-X3aGCZjjjFLx899-IA/exec",
          {
            method: "POST",
            mode: "no-cors",
            body: finalData,
          },
        );

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
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`,
          );
          toast.success("Registration successful! Check your email.");
        } else {
          console.error("Email failed:", await sendMailResponse.text());
          toast.warning(
            "Registration received but email confirmation failed. Please contact support.",
          );
          navigate(
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`,
          );
        }

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        toast.error(
          "An error occurred while submitting the form. Please try again.",
        );
        setLoading(false);
        setdisabled(false);
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
      <Toaster />

      {DisplayForm ? (
        <div className={formContainer}>
          <h2 className={heading}>Registration Drive 2026-27</h2>
          <div className={divider}></div>
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
                    inputLabel="Full Name"
                    value={name}
                    valueUpdater={updateName}
                    required={true}
                  />
                  {!isNameValid && (
                    <span className={errorMessage}>Invalid Name</span>
                  )}
                  <DropDownSelectField
                    id="participantGender"
                    value={Gender}
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
                    id="participantSapID"
                    type="text"
                    inputLabel="SAP ID"
                    value={sapID}
                    valueUpdater={updateSapID}
                    required={true}
                  />
                  {!isSapIDValid && (
                    <span className={errorMessage}>Invalid SAP ID</span>
                  )}
                  <InputField
                    id="participantPhone"
                    type="text"
                    inputLabel="Contact Number"
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
                    <span className={errorMessage}>
                      Invalid WhatsApp Number
                    </span>
                  )}
                  <InputField
                    id="participantCollegeEmail"
                    type="email"
                    inputLabel="College Email ID"
                    value={collegeEmail}
                    valueUpdater={updateCollegeEmail}
                    required={true}
                  />
                  {!isCollegeEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                  <InputField
                    id="participantPersonalEmail"
                    type="email"
                    inputLabel="Personal Email ID"
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
                    inputLabel="Course"
                    value={course}
                    valueUpdater={updateCourse}
                    required={true}
                  />
                  {!isCourseValid && (
                    <span className={errorMessage}>Invalid Course</span>
                  )}
                  <DropDownSelectField
                    id="participantYearOfStudy"
                    value={yearOfStudy}
                    valueUpdater={updateYearOfStudy}
                    inputLabel="Year of Study"
                    required={true}
                    options={Years}
                    defaultOption="Select"
                  />
                  {!isYearOfStudyValid && (
                    <span className={errorMessage}>Invalid Year</span>
                  )}
                  <DropDownSelectField
                    id="participantCommittee1"
                    value={committee1}
                    valueUpdater={updateCommittee1}
                    inputLabel="Committee preference one"
                    required={true}
                    options={committees}
                    defaultOption="Select"
                  />
                  {!isCommittee1Valid && (
                    <span className={errorMessage}>Invalid Preference</span>
                  )}
                  <DropDownSelectField
                    id="participantCommittee2"
                    value={committee2}
                    valueUpdater={updateCommittee2}
                    inputLabel="Committee preference two"
                    required={true}
                    options={committees}
                    defaultOption="Select"
                  />
                  {!isCommittee2Valid && (
                    <span className={errorMessage}>Invalid Preference</span>
                  )}
                </div>

                {eventDetails.IsFree ? (
                  <button
                    disabled={disabled}
                    type="submit"
                    className={submitButton}
                  >
                    Submit Form
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
                <h3
                  className={sectionHeading}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "1.5rem",
                  }}
                >
                  <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '1.2rem' }}>₹300</span>
                  <span style={{ color: '#ff6b6b', fontWeight: 'bold', marginLeft: '10px' }}>₹250</span>
                  <span style={{ fontSize: '1rem', color: '#4CAF50', display: 'block' }}>🎯 Early Bird Discount!</span>
                </h3>

                {ModeOfPayment.toUpperCase() == "UPI" ? (
                  <>
                    <div className={paymentQRDiv}>
                      <img
                        loading="lazy"
                        src="/img/PaymentModes/RegistrationDrive2026QR.jpeg"
                        alt="Payment QR"
                      />
                    </div>
                    <InputField
                      id="transactionID"
                      type="text"
                      inputLabel="Transaction ID (UTR)"
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
                  </>
                ) : (
                  <>
                    <div className={paymentQRDiv}>
                      <img
                        loading="lazy"
                        src="/img/PaymentModes/CASHCOUPON.jpg"
                        alt="CASH COUPON"
                      />
                    </div>
                    <InputField
                      id="transactionID"
                      type="text"
                      inputLabel="Name of Head"
                      value={transactionID}
                      valueUpdater={updateTransactionID}
                      required={true}
                    />
                    <FileSelect
                      id="transactionSS"
                      inputLabel="Cash Coupon Photo"
                      valueUpdater={updateTransactionSS}
                      required={true}
                    />
                  </>
                )}

                <button
                  type="submit"
                  disabled={disabled}
                  className={submitButton}
                >
                  SUBMIT
                </button>
              </div>
            )}
          </form>
        </div>
      ) : (
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
                if (
                  navigator.userAgent.includes("iPhone") ||
                  navigator.userAgent.includes("iPad")
                ) {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  setTimeout(() => {
                    setDisplayForm(true);
                  }, 50);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setDisplayForm(true);
                }
              }}
            >
              REGISTER NOW
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationDriveForm;

// Old registration drive form with comments

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./RegistrationDriveForm.module.css";
// import InputField from "../../../components/InputField/InputField";
// import DropDownSelectField from "../../../components/DropDownSelectField/DropDownSelectField";

// import {
//   VALIDATENAME,
//   VALIDATEEMAIL,
//   VALIDATEPHONE,
//   VALIDATECOURSE,
//   VALIDATESAPID,
//   VALIDATECSAMEMBER,
//   VALIDATECSAID,
//   VALIDATEYEAROFSTUDY,
//   VALIDATECOMMITTEE,
//   VALIDATEPAYMENTMODE,
//   VALIDATEGENDER,
// } from "../../../utils/registrationValidations";
// import FormLoading from "../../../components/FormLoading/FormLoading";
// import FileSelect from "../../../components/FileSelect/FileSelect";
// import toast, { Toaster } from "react-hot-toast";

// const {
//   mainDiv,
//   backArrow,
//   heading,
//   eventsContainer,
//   eventImage,
//   eventDescripton,
//   eventHeading,
//   eventText,
//   submitButton,
//   sectionHeading,
//   eventDetailsDiv,
//   eventDetail,
//   formDiv,
//   formContainer,
//   memberSection,
//   errorMessage,
//   loadingDiv,
//   paymentQRDiv,
// } = styles;

// const RegistrationDriveForm = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, []);

//   const [loading, setLoading] = useState(false);

//   const eventDetails = {
//     eventImageURL: "/img/events/live/MEMOIR 3.0.jpg", //TODO Change this to the actual image URL
//     eventHeading: "REGISTRATION",
//     IsFree: false,
//     whatsGroup: "K68n2hC9M2v6y9OH4i6hhS", // New Logistics group link
//     SheetUrl:
//       "https://docs.google.com/spreadsheets/d/1Z98LClauDRrpwTpsJUgmkXY_Yhw57ICSxLfo2fyHK20/edit?usp=sharing",
//     FolderId: "1g5gOXam6bdhYf1lv5OxYOjbX3kEnIxPX",
//     eventTemplate: "RegistrationDrive2026",
//   };

//   const EventName = eventDetails.eventHeading.replace(/\s+/g, "");
//   // FORM STATES

//   const [paymentPage, setPaymentPage] = useState(false);
//   const [transactionID, setTransactionID] = useState("");
//   const [PaymentSS, setPaymentSS] = useState({
//     fileData: "",
//     fileType: "",
//     fileName: "",
//   });

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [collegeEmail, setCollegeEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [WhatsApp, setWhatsApp] = useState("");
//   const [course, setCourse] = useState("");
//   const [yearOfStudy, setYearOfStudy] = useState("");
//   const [sapID, setSapID] = useState("");
//   const [csaMember, setCSAMember] = useState("");
//   const [csaID, setCSAID] = useState("");
//   const [Gender, setGender] = useState("");
//   const [disabled, setdisabled] = useState(false);
//   const [committee1, setcommittee1] = useState("");
//   const [committee2, setcommittee2] = useState("");
//   const [ModeOfPayment, setModeOfPayment] = useState("UPI");

//   // Committees
//   const committees = [
//     "Technical",
//     "Events",
//     "Public Relations & Sponsorship",
//     "Social Media",
//     "Photography",
//     "Design and VFX",
//     "Logistics",
//     "Editorial",
//     "Registrations",
//   ];

//   const Years = ["1st", "2nd", "3rd", "4th", "5th"];

//   const PaymentModes = ["Cash", "UPI"];

//   // UPDATE FUNCTIONS

//   const updateTransactionID = (e) => {
//     setTransactionID(e.target.value);
//   };

//   const updateTransactionSS = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64Data = reader.result.split(",")[1];
//         const fileType = file.type;
//         const fileName = file.name;

//         setPaymentSS({
//           fileData: base64Data,
//           fileType: fileType,
//           fileName: fileName,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateName = (e) => {
//     setName(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updateCollegeEmail = (e) => {
//     setCollegeEmail(e.target.value);
//   };

//   const updatePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const updateWhatsApp = (e) => {
//     setWhatsApp(e.target.value);
//   };

//   const updateCourse = (e) => {
//     setCourse(e.target.value);
//   };

//   const updateYearOfStudy = (e) => {
//     setYearOfStudy(e.target.value);
//   };

//   const updateSapID = (e) => {
//     setSapID(e.target.value);
//   };

//   const updateCSAMember = (e) => {
//     setCSAMember(e.target.value);
//     if (e.target.value === "no") {
//       setCSAID("not a csa member");
//     } else if (e.target.value === "yes") {
//       setCSAID("");
//     }
//   };
//   const updateCSAID = (e) => {
//     let value = e.target.value;
//     setCSAID(value.toUpperCase());
//   };

//   const updateGender = (e) => {
//     setGender(e.target.value);
//   };

//   const updateCommittee1 = (e) => {
//     committee2 == e.target.value
//       ? toast.error("Committee preferences must be unique!")
//       : setcommittee1(e.target.value);
//   };
//   const updateCommittee2 = (e) => {
//     committee1 == e.target.value
//       ? toast.error("Committee preferences must be unique!")
//       : setcommittee2(e.target.value);
//   };

//   const updateModeOfPayment = (e) => {
//     setModeOfPayment(e.target.value);
//   };

//   // VALIDATION STATES

//   const [isNameValid, setIsNameValid] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const [isCollegeEmailValid, setIsCollegeEmailValid] = useState(true);
//   const [isPhoneValid, setIsPhoneValid] = useState(true);
//   const [isWhatsAppValid, setIsWhatsAppValid] = useState(true);
//   const [isCourseValid, setIsCourseValid] = useState(true);
//   const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
//   const [isSapIDValid, setIsSapIDValid] = useState(true);
//   const [isCSAMemberValid, setIsCSAMemberValid] = useState(true);
//   const [isCSAIDValid, setIsCSAIDValid] = useState(true);
//   const [isGenderValid, setIsGenderValid] = useState(true);
//   const [isCommittee1Valid, setIsCommittee1Valid] = useState(true);
//   const [isCommittee2Valid, setIsCommittee2Valid] = useState(true);
//   const [isModeOfPaymentValid, setIsModeOfPaymentValid] = useState(true);

//   // VALIDATION FUNCTIONS

//   const validate = () => {
//     const NameValid = VALIDATENAME(name, setIsNameValid);
//     const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
//     const CollegeEmailValid = VALIDATEEMAIL(
//       collegeEmail,
//       setIsCollegeEmailValid,
//     );
//     const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
//     const WhatsAppValid = VALIDATEPHONE(WhatsApp, setIsWhatsAppValid);
//     const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
//     const CSAMemberValid = VALIDATECSAMEMBER(csaMember, setIsCSAMemberValid);
//     const YearOfStudyValid = VALIDATEYEAROFSTUDY(
//       yearOfStudy,
//       setIsYearOfStudyValid,
//     );
//     const SapIDValid = VALIDATESAPID(sapID, setIsSapIDValid);
//     const GenderValid = VALIDATEGENDER(Gender, setIsGenderValid);
//     const Committee1Valid = VALIDATECOMMITTEE(committee1, setIsCommittee1Valid);
//     const Committee2Valid = VALIDATECOMMITTEE(committee2, setIsCommittee2Valid);
//     const ModeOfPaymentValid = VALIDATEPAYMENTMODE(
//       ModeOfPayment,
//       setIsModeOfPaymentValid,
//     );

//     if (
//       NameValid &&
//       EmailValid &&
//       CollegeEmailValid &&
//       PhoneValid &&
//       CourseValid &&
//       WhatsAppValid &&
//       SapIDValid &&
//       YearOfStudyValid &&
//       GenderValid &&
//       Committee1Valid &&
//       Committee2Valid
//       // && ModeOfPaymentValid
//     ) {
//       if (csaMember === "yes") {
//         return VALIDATECSAID(csaID, setIsCSAIDValid);
//       } else {
//         window.scrollTo({ top: 0, behavior: "instant" });
//         return true;
//       }
//     } else {
//       toast.error("Ensure all values are correct.");
//     }
//   };

//   const submitFormOne = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setPaymentPage(true);
//     }
//   };

//   const submitFormFinal = async (e) => {
//     e.preventDefault();
//     // VALIDATION
//     if (validate()) {
//       setLoading(true);
//       setdisabled(true);
//       const data = {
//         name,
//         Gender,
//         sapID,
//         phone,
//         WhatsApp,
//         collegeEmail,
//         email,
//         course,
//         yearOfStudy,
//         committee1,
//         committee2,
//         // ModeOfPayment,
//         transactionID,
//         SheetUrl: eventDetails.SheetUrl,
//         FolderId: eventDetails.FolderId,
//       };
//       // console.log(data);
//       const finalData = new FormData();

//       for (const key in data) {
//         finalData.append(key, data[key]);
//       }
//       if (!eventDetails.IsFree) {
//         finalData.append(
//           "fileName",
//           `${name}_${phone}_${EventName}`,
//           // `${name}_${phone}_${EventName}_${ModeOfPayment}`
//         );
//         finalData.append("fileData", PaymentSS.fileData);
//         finalData.append("fileType", PaymentSS.fileType);
//       }

//       // console.log(finalData);
//       try {
//         console.log("Submitting form...");
//         console.log("Final Data:", finalData.entries());
//         // First POST request to Google Apps Script URL (now executed first)
//         const response = await fetch(
//           "https://script.google.com/macros/s/AKfycbwMv2ib7jNij5p6LKYgmKWAp6rSYt4PYdfa-gnokdZZ4dcLM3c-X3aGCZjjjFLx899-IA/exec",
//           {
//             method: "POST",
//             mode: "no-cors",
//             body: finalData,
//           },
//         );

//         // const data = await response.json();
//         // console.log(data.status);
//         const sendMailResponse = await fetch(
//           `${import.meta.env.VITE_SERVER_URL}/api/sendmail/`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name: name,
//               email: email,
//               template: eventDetails.eventTemplate,
//             }),
//           },
//         );

//         if (sendMailResponse.ok) {
//           const sendMailData = await sendMailResponse.json();
//           console.log("Email sent:", sendMailData);

//           navigate(
//             `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`,
//           );
//           toast.success("Registration successful! Check your email.");
//         } else {
//           console.error("Email failed:", await sendMailResponse.text());
//           toast.warning(
//             "Registration received but email confirmation failed. Please contact support.",
//           );
//           navigate(
//             `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`,
//           );
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error(
//           "An error occurred while submitting the form. Please try again.",
//         );
//         setLoading(false);
//         setdisabled(false);
//       }
//     }
//   };

//   return (
//     <div className={mainDiv}>
//       {loading && (
//         <div className={loadingDiv}>
//           <FormLoading />
//         </div>
//       )}

//       <div className={formContainer}>
//         <h2 className={heading}>{eventDetails.eventHeading}</h2>
//         <div className={styles.divider}></div>

//         <form
//           className={formDiv}
//           encType="multipart/form-data"
//           onSubmit={submitFormFinal}
//         >
//           {/* TEAM DETAILS SECTION START */}
//           {!paymentPage ? (
//             <div className={formDiv}>
//               {/* USER SECTION START */}

//               <div className={memberSection}>
//                 <InputField
//                   id="participantName"
//                   type="text"
//                   inputLabel="Full Name"
//                   value={name}
//                   valueUpdater={updateName}
//                   required={true}
//                 />
//                 {!isNameValid && (
//                   <span className={errorMessage}>Invalid Name</span>
//                 )}
//                 <DropDownSelectField
//                   id="participantCSAMember"
//                   value={Gender}
//                   valueUpdater={updateGender}
//                   inputLabel="Gender"
//                   required={true}
//                   options={["Male", "Female", "Others"]}
//                   defaultOption="Select"
//                 />
//                 {!isGenderValid && (
//                   <span className={errorMessage}>Invalid Gender</span>
//                 )}
//                 <InputField
//                   id="participantSapID"
//                   type="text"
//                   inputLabel="SAP ID"
//                   value={sapID}
//                   valueUpdater={updateSapID}
//                   required={true}
//                 />
//                 {!isSapIDValid && (
//                   <span className={errorMessage}>Invalid SAP ID</span>
//                 )}
//                 <InputField
//                   id="participantPhone"
//                   type="text"
//                   inputLabel="Contact Number"
//                   value={phone}
//                   valueUpdater={updatePhone}
//                   required={true}
//                 />
//                 {!isPhoneValid && (
//                   <span className={errorMessage}>Invalid Phone</span>
//                 )}
//                 <InputField
//                   id="participantPhone"
//                   type="text"
//                   inputLabel="WhatsApp Number"
//                   value={WhatsApp}
//                   valueUpdater={updateWhatsApp}
//                   required={true}
//                 />
//                 {!isWhatsAppValid && (
//                   <span className={errorMessage}>Invalid WhatsApp Number</span>
//                 )}
//                 <InputField
//                   id="participantEmail"
//                   type="email"
//                   inputLabel="College Email ID"
//                   value={collegeEmail}
//                   valueUpdater={updateCollegeEmail}
//                   required={true}
//                 />
//                 {!isCollegeEmailValid && (
//                   <span className={errorMessage}>Invalid Email</span>
//                 )}

//                 <InputField
//                   id="participantEmail"
//                   type="email"
//                   inputLabel="Personal Email ID"
//                   value={email}
//                   valueUpdater={updateEmail}
//                   required={true}
//                 />
//                 {!isEmailValid && (
//                   <span className={errorMessage}>Invalid Email</span>
//                 )}
//                 <InputField
//                   id="participantCourse"
//                   type="text"
//                   inputLabel="Course"
//                   value={course}
//                   valueUpdater={updateCourse}
//                   required={true}
//                 />
//                 {!isCourseValid && (
//                   <span className={errorMessage}>Invalid Course</span>
//                 )}
//                 <DropDownSelectField
//                   id="participantCSAMember"
//                   value={yearOfStudy}
//                   valueUpdater={updateYearOfStudy}
//                   inputLabel="Year of Study"
//                   required={true}
//                   options={Years}
//                   defaultOption="Select"
//                 />
//                 {!isYearOfStudyValid && (
//                   <span className={errorMessage}>Invalid Year</span>
//                 )}
//                 <DropDownSelectField
//                   id="participantCSAMember"
//                   value={committee1}
//                   valueUpdater={updateCommittee1}
//                   inputLabel="Committee prefrence one"
//                   required={true}
//                   options={committees}
//                   defaultOption="Select"
//                 />
//                 {!isCommittee1Valid && (
//                   <span className={errorMessage}>Invalid Prefrence</span>
//                 )}
//                 <DropDownSelectField
//                   id="participantCommittee2"
//                   value={committee2}
//                   valueUpdater={updateCommittee2}
//                   inputLabel="Committee preference two"
//                   required={true}
//                   options={committees}
//                   defaultOption="Select"
//                 />
//                 {!isCommittee2Valid && (
//                   <span className={errorMessage}>Invalid Preference</span>
//                 )}

//                 {/* <DropDownSelectField
//                   id="participantCommittee2"
//                   value={ModeOfPayment}
//                   valueUpdater={updateModeOfPayment}
//                   inputLabel="Mode of Payment"
//                   required={true}
//                   options={PaymentModes}
//                   defaultOption="Select"
//                 />
//                 {!isModeOfPaymentValid && (
//                   <span className={errorMessage}>Invalid Mode Of Payment</span>
//                 )} */}
//               </div>

//               {/* USER SECTION END */}

//               {/* ------------------------------------------------------------------------------------ */}

//               {eventDetails.IsFree ? (
//                 <button
//                   disabled={disabled}
//                   type="submit"
//                   className={submitButton}
//                 >
//                   Submit Form
//                 </button>
//               ) : (
//                 <button className={submitButton} onClick={submitFormOne}>
//                   NEXT
//                 </button>
//               )}
//             </div>
//           ) : (
//             <div className={formDiv}>
//               <img
//                 loading="lazy"
//                 src="/icons/rightArrow.png"
//                 alt="backArrow"
//                 className={backArrow}
//                 onClick={() => setPaymentPage(false)}
//               />
//               <h3
//                 className={sectionHeading}
//                 style={{
//                   textAlign: "center",
//                   width: "100%",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 Payment Section
//               </h3>
//               <h3
//                 className={sectionHeading}
//                 style={{
//                   textAlign: "center",
//                   width: "100%",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 ₹300{" "}
//               </h3>

//               {ModeOfPayment.toUpperCase() == "UPI" ? (
//                 <>
//                   <div className={paymentQRDiv}>
//                     {/* FIRST QR */}

//                     {/* <img
//                       loading="lazy"
//                       src="/img/PaymentModes/QR (1).jpeg"
//                       alt="Payment OR"
//                     /> */}

//                     {/* SECOND QR */}

//                     <img
//                       loading="lazy"
//                       src="/img/PaymentModes/RegistrationDrive2026QR.jpeg"
//                       alt="Payment OR"
//                     />
//                   </div>
//                   <InputField
//                     id="transactionID"
//                     type="text"
//                     inputLabel="Transaction ID(UTR)"
//                     value={transactionID}
//                     valueUpdater={updateTransactionID}
//                     required={true}
//                   />

//                   <FileSelect
//                     id="transactionSS"
//                     inputLabel="Transaction Screenshot"
//                     valueUpdater={updateTransactionSS}
//                     required={true}
//                   />
//                 </>
//               ) : (
//                 <>
//                   <div className={paymentQRDiv}>
//                     <img
//                       loading="lazy"
//                       src="/img/PaymentModes/CASHCOUPON.jpg"
//                       alt="CASH COUPON"
//                     />
//                   </div>
//                   <InputField
//                     id="transactionID"
//                     type="text"
//                     inputLabel="Name of Head"
//                     value={transactionID}
//                     valueUpdater={updateTransactionID}
//                     required={true}
//                   />

//                   <FileSelect
//                     id="transactionSS"
//                     inputLabel="Cash Coupon Photo"
//                     valueUpdater={updateTransactionSS}
//                     required={true}
//                   />
//                 </>
//               )}

//               <button
//                 type="submit"
//                 disabled={disabled}
//                 className={submitButton}
//               >
//                 SUBMIT
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationDriveForm;
