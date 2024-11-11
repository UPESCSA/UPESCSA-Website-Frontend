import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationDriveForm.module.css";
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

const RegistrationDriveForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [loading, setLoading] = useState(false);

  const eventDetails = {
    eventImageURL: "/img/events/live/MEMOIR 3.0.jpg",
    eventHeading: "REGISTRATION",
    IsFree: false,
    whatsGroup: "I4OrFl4cDbaDoM3JWUofi5",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/1QSUab7zxOc5iAmkVvXdfmBjqqCqCeppOWnV0QD7kFSU/edit?usp=sharing",
    FolderId: "167Etty8I43aE4hqKNH6qPnRNGkUPvUqz",
    eventTemplate: "RegistrationDrive",
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
  const [Gender, setGender] = useState("");
  const [disabled, setdisabled] = useState(false);
  const [committee1, setcommittee1] = useState("");
  const [committee2, setcommittee2] = useState("");
  const [ModeOfPayment, setModeOfPayment] = useState("");

  // Committees
  const committees = [
    "Technical",
    "Events",
    "Public Relations",
    "Social Media And Photography",
    "Design and VFX",
    "Logistics",
    "Editorial",
    "Registrations",
  ];

  const Years = ["1st", "2nd", "3rd", "4th", "5th"];

  const PaymentModes = ["Cash", "UPI"];

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

  // VALIDATION FUNCTIONS

  const validate = () => {
    const NameValid = VALIDATENAME(name, setIsNameValid);
    const EmailValid = VALIDATEEMAIL(email, setIsEmailValid);
    const PhoneValid = VALIDATEPHONE(phone, setIsPhoneValid);
    const WhatsAppValid = VALIDATEPHONE(WhatsApp, setIsWhatsAppValid);
    const CourseValid = VALIDATECOURSE(course, setIsCourseValid);
    const CSAMemberValid = VALIDATECSAMEMBER(csaMember, setIsCSAMemberValid);
    const YearOfStudyValid = VALIDATEYEAROFSTUDY(
      yearOfStudy,
      setIsYearOfStudyValid
    );
    const SapIDValid = VALIDATESAPID(sapID, setIsSapIDValid);
    const GenderValid = VALIDATEGENDER(Gender, setIsGenderValid);
    const Committee1Valid = VALIDATECOMMITTEE(committee1, setIsCommittee1Valid);
    const Committee2Valid = VALIDATECOMMITTEE(committee2, setIsCommittee2Valid);
    const ModeOfPaymentValid = VALIDATEPAYMENTMODE(
      ModeOfPayment,
      setIsModeOfPaymentValid
    );

    if (
      NameValid &&
      EmailValid &&
      PhoneValid &&
      CourseValid &&
      WhatsAppValid &&
      SapIDValid &&
      YearOfStudyValid &&
      GenderValid &&
      Committee1Valid &&
      Committee2Valid &&
      ModeOfPaymentValid
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
    // VALIDATION
    if (validate()) {
      setLoading(true);
      setdisabled(true);
      const data = {
        name,
        Gender,
        sapID,
        phone,
        WhatsApp,
        email,
        course,
        yearOfStudy,
        committee1,
        committee2,
        ModeOfPayment,
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
          `${name}_${phone}_${EventName}_${ModeOfPayment}`
        );
        finalData.append("fileData", PaymentSS.fileData);
        finalData.append("fileType", PaymentSS.fileType);
      }
      // console.log(finalData);
      try {
        // First POST request to Google Apps Script URL (now executed first)
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyjdxHgpTHEGDjoCsXSzTUttYhqz6TrvNviv_U6vsQB-rasPf9j6fxVt9WJv1eIXCo-/exec",
          {
            method: "POST",
            body: finalData,
          }
        );

        const data = await response.json();
        console.log(data);
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
          navigate(
            `/registrationSuccess?wg=${eventDetails.whatsGroup}&Name=${name}&Sap=${sapID}&Email=${email}&Event=${eventDetails.eventHeading}`
          );
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
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
              {/* USER SECTION START */}

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
                  id="participantCSAMember"
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
                  id="participantPhone"
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
                  id="participantCSAMember"
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
                  id="participantCSAMember"
                  value={committee1}
                  valueUpdater={updateCommittee1}
                  inputLabel="Committee prefrence one"
                  required={true}
                  options={committees}
                  defaultOption="Select"
                />
                {!isCommittee1Valid && (
                  <span className={errorMessage}>Invalid Prefrence</span>
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
                  <span className={errorMessage}>Invalid Prefrence</span>
                )}
                <DropDownSelectField
                  id="participantCommittee2"
                  value={ModeOfPayment}
                  valueUpdater={updateModeOfPayment}
                  inputLabel="Mode of Payment"
                  required={true}
                  options={PaymentModes}
                  defaultOption="Select"
                />
                {!isModeOfPaymentValid && (
                  <span className={errorMessage}>Invalid Mode Of Payment</span>
                )}
              </div>

              {/* USER SECTION END */}

              {/* ------------------------------------------------------------------------------------ */}

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
                ₹ 250
              </h3>

              {ModeOfPayment.toUpperCase() == "UPI" ? (
                <>
                  <div className={paymentQRDiv}>
                    {/* FIRSR QR */}
                    {/* <img
                      loading="lazy"
                      src="/img/PaymentModes/Piklu.jpeg"
                      alt="Payment OR"
                    /> */}
                    {/* SECOND QR */}
                    {/* <img
                      loading="lazy"
                      src="/img/PaymentModes/Anvita.jpeg"
                      alt="Payment OR"
                    /> */}
                    {/* THIRD QR */}
                    <img
                      loading="lazy"
                      src="/img/PaymentModes/Aman.jpeg"
                      alt="Payment OR"
                    />
                    {/* Fourth QR */}
                    {/* <img
                      loading="lazy"
                      src="/img/PaymentModes/Vinayak.jpeg"
                      alt="Payment OR"
                    /> */}
                    {/* Fifth QR */}
                    {/* <img
                      loading="lazy"
                      src="/img/PaymentModes/garv.jpeg"
                      alt="Payment OR"
                    /> */}
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
    </div>
  );
};

export default RegistrationDriveForm;
