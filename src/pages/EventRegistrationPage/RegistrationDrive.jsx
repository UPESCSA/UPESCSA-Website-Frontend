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
} from "../../utils/registrationValidations";
import FormLoading from "../../components/FormLoading/FormLoading";
import FileSelect from "../../components/FileSelect/FileSelect";

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

const RegistrationDrive = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const eventDetails = {
    eventRegistrationURL: `${
      import.meta.env.VITE_SERVER_URL
    }/api/event/register/ultimateshowdown`,
    eventImageURL: "",
    eventHeading: "Event Name",
    eventText: "Event Description",
    eventMode: "Mode",
    eventTeamSize: "TeamSize",
    eventRegistrationFee: "Fee",
    eventDate: "Date",
    IsFree: false,
    whatsGroup: "KOs5eU309ktJzLEhSvkSLD",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/17LnV0dabUVwKOj50JXCnfIrU8ZRBO1qJG571X7okqqo/edit?usp=sharing",
    FolderId: "1PvGxPe2Abql66J4Hpmt6_ak4eD5IHbp0",
  };

  const EventName = eventDetails.eventHeading.replace(/\s+/g, "");
  // FORM STATES

  const [paymentPage, setPaymentPage] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [uploadedPDF, setUploadedPDF] = useState({
    fileData: "",
    fileType: "",
    fileName: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [sapID, setSapID] = useState("");
  const [csaMember, setCSAMember] = useState("");
  const [csaID, setCSAID] = useState("");

  // UPDATE FUNCTIONS

  const updateTransactionID = (e) => {
    setTransactionID(e.target.value);
  };
  const updatePDF = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1];
        const fileType = file.type;
        const fileName = file.name;

        setUploadedPDF({
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

  // VALIDATION STATES

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);
  const [isYearOfStudyValid, setIsYearOfStudyValid] = useState(true);
  const [isSapIDValid, setIsSapIDValid] = useState(true);
  const [isCSAMemberValid, setIsCSAMemberValid] = useState(true);
  const [isCSAIDValid, setIsCSAIDValid] = useState(true);

  // VALIDATION FUNCTIONS

  const validate = () => {
    const NameValid = VALIDATENAME(name, setIsNameValid);
    const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
    const YearOfStudyValid = VALIDATEYEAROFSTUDY(
      yearOfStudy,
      setIsYearOfStudyValid
    );
    const SapIDValid = VALIDATESAPID(sapID, setIsSapIDValid);
    const CSAMemberValid = VALIDATECSAMEMBER(csaMember, setIsCSAMemberValid);

    if (
      NameValid &&
      EmailValid &&
      PhoneValid &&
      CourseValid &&
      YearOfStudyValid &&
      SapIDValid
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
      const data = {
        name,
        email,
        phone,
        course,
        yearOfStudy,
        sapID,
        csaMember,
        csaID,
        transactionID,
        SheetUrl: eventDetails.SheetUrl,
        FolderId: eventDetails.FolderId,
      };
      // console.log(data);
      const finalData = new FormData();

      for (const key in data) {
        finalData.append(key, data[key]);
      }
      if (!eventDetails.IsFree) {
        finalData.append(
          "fileName",
          `${name}_${phone}_${EventName}_uploadedPDF`
        );
        finalData.append("fileData", uploadedPDF.fileData);
        finalData.append("fileType", uploadedPDF.fileType);
      }
      // console.log(finalData);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbz6GS9YI_y1pRxYeREfBRVbVY303i5abH-InsQZ6tJrAsL7AywOX9TfNgAaeo8ZH1lAug/exec",
          {
            method: "POST",
            body: finalData,
          }
        );
        const data = await response.json();
        // console.log(data);
        if (data.status == "success") {
          navigate("/registrationSuccess?wg=" + eventDetails.whatsGroup);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
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
      <div className={eventsContainer}>
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
        <div className={eventDescripton}>
          <h4 className={eventHeading}>Event Details</h4>
          <p className={eventText}>{eventDetails.eventText}</p>
        </div>
      </div>
      <div className={formContainer}>
        <h2 className={heading}>{eventDetails.eventHeading}</h2>
        <div className={styles.divider}></div>

        <form
          className={formDiv}
          encType="multipart/form-data"
          onSubmit={submitFormFinal}
        >
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
              </div>

              {/* USER SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

              {eventDetails.IsFree ? (
                <button type="submit" className={submitButton}>
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

              <div className={sectionHeading}>Upload PDF</div>
              <FileSelect
                label="Upload your document (PDF only)"
                accept=".pdf"
                onChange={updatePDF}
                isValid={true}
                errorMessage=""
              />

              <button type="submit" className={submitButton}>
                Submit Form
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationDrive;
