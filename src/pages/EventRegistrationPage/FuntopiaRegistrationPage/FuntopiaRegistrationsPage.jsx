import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FuntopiaRegistrationsPage.module.css";
import InputField from "../../../components/InputField/InputField";
import DropDownSelectField from "../../../components/DropDownSelectField/DropDownSelectField";
import FileSelect from "../../../components/FileSelect/FileSelect";
import FormLoading from "../../../components/FormLoading/FormLoading";

import {
  VALIDATENAME,
  VALIDATEEMAIL,
  VALIDATEPHONE,
  VALIDATECOURSE,
  VALIDATECSAMEMBER,
  VALIDATECSAID,
  VALIDATEYEAROFSTUDY,
} from "../../../utils/registrationValidations";

import toast, { Toaster } from "react-hot-toast";

const {
  mainDiv,
  backArrow,
  heading,
  pageTitle,
  pageTitleAccent,
  pageSubtitle,
  cardsGrid,
  cardBody,
  cardTitle,
  eventImage,
  submitButton,
  cardButton,
  sectionHeading,
  eventDetailsDiv,
  eventDetail,
  eventDetailFull,
  formDiv,
  formContainer,
  memberSection,
  errorMessage,
  loadingDiv,
  paymentQRDiv,
  eventCard,
  eventCardSelected,
  eventCardYellow,
  eventCardBlue,
  eventCardRed,
  stepIndicator,
  stepDot,
  stepDotActive,
  stepLine,
  teamMemberCard,
  teamMemberHeader,
  headingRow,
  scrollSpacer,
} = styles;

// ─── EVENT DATA ───────────────────────────────────────────────────────
const EventsData = [
  {
    eventImageURL: "/img/funtopia_part1.jpg",
    eventHeading: "Valorant",
    themeClass: eventCardYellow,
    eventText: `
      <p>📅 Date: October 21st, 2024</p>
      <p>🕒 Time: 6:00 PM - 10:00 PM</p>
      <p>🌐 Platform: Online</p>
      <p>👥 Team Size: 5 members</p>
      <p>Pricing:</p>
      <ul>
        <li>General Participants: ₹200 per team</li>
        <li>CSA Members: ₹160 per team</li>
      </ul>
      <p>Discount Criteria: At least one CSA member</p>
      <p>Fill out the form below and let's kick off the fun!</p>`,
    eventMode: "Online",
    minTeamSize: 5,
    maxTeamSize: 5,
    eventRegistrationFee: "200",
    csaDiscountFee: "160",
    eventDate: "18/04/26",
    IsFree: false,
    isRegistrationEnabled: true,
    whatsGroup: "KDE48FYq4uMHeGHAWDP0T7",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/13aWpLM2RvMEgkhclhCJ74egt7qnbWupm3gewWfWJexs/edit?usp=sharing",
    FolderId: "1m5JSjmJFFUjUsiHk_h4UycT1EdAowxkH",
    eventTemplate: "FUNTOPIA6",
  },
  {
    eventImageURL: "/img/funtopia_part2.jpg",
    eventHeading: "Treasure Hunt",
    themeClass: eventCardBlue,
    eventText: `
      <p>📅 Date: October 22nd, 2024</p>
      <p>🕒 Time: 4:00 PM - 7:00 PM</p>
      <p>🌐 Location: Bidholi Campus</p>
      <p>👥 Team Size: 2 - 4 members</p>
      <p>Pricing:</p>
      <ul>
        <li>General Participants: ₹160 per team</li>
        <li>CSA Members: ₹120 per team</li>
      </ul>
      <p>Discount Criteria: At least one CSA member</p>
      <p>Fill out the form below and let's kick off the fun!</p>`,
    eventMode: "Offline",
    minTeamSize: 2,
    maxTeamSize: 4,
    eventRegistrationFee: "160",
    csaDiscountFee: "120",
    eventDate: "17/04/26",
    IsFree: false,
    isRegistrationEnabled: false,
    whatsGroup: "KDE48FYq4uMHeGHAWDP0T7",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/1DSJ0cqqlqe8dxUOS5O_K6CHE6xGPxc_oKBk97giCf5c/edit?usp=sharing",
    FolderId: "1x4eA10vszFNtcgewyXkDUx-dRd-wypxC",
    eventTemplate: "FUNTOPIA6",
  },
  {
    eventImageURL: "/img/funtopia_part3.jpg",
    eventHeading: "BGMI",
    themeClass: eventCardRed,
    eventText: `
      <p>📅 Date: October 23rd, 2024</p>
      <p>🕒 Time: 6:00 PM - 11:00 PM</p>
      <p>🌐 Platform: Online</p>
      <p>👥 Team Size: 2-4 members</p>
      <p>Pricing:</p>
      <ul>
        <li>General Participants: ₹160 per team</li>
        <li>CSA Members: ₹120 per team</li>
      </ul>
      <p>Discount Criteria: At least one CSA member</p>
      <p>Fill out the form below and let's kick off the fun!</p>`,
    eventMode: "Online",
    minTeamSize: 2,
    maxTeamSize: 4,
    eventRegistrationFee: "160",
    csaDiscountFee: "120",
    eventDate: "19/04/26",
    IsFree: false,
    isRegistrationEnabled: true,
    whatsGroup: "KDE48FYq4uMHeGHAWDP0T7",
    SheetUrl:
      "https://docs.google.com/spreadsheets/d/1fdTSulaoJEZx_xdKT-M91cCvEIraL4Le1XVhzxrpAZw/edit?usp=sharing",
    FolderId: "1FLCYZQO8V6VLgmZ3Mj99wBPWzpJBQsBq",
    eventTemplate: "FUNTOPIA6",
  },
];

// ─── HELPER: blank member object ──────────────────────────────────────
const blankMember = () => ({
  name: "",
  email: "",
  phone: "",
  riotID: "",
  inGameName: "",
  uid: "",
  course: "",
  yearOfStudy: "",
  csaMember: "",
  csaID: "",
  isNameValid: true,
  isEmailValid: true,
  isPhoneValid: true,
  isRiotIDValid: true,
  isInGameNameValid: true,
  isUIDValid: true,
  isCourseValid: true,
  isYearOfStudyValid: true,
  isCSAMemberValid: true,
  isCSAIDValid: true,
});

// ─── STEPS ───────────────────────────────────────────────────────────
const STEP_SELECT_EVENT = 0;
const STEP_TEAM_DETAILS = 1;
const STEP_TEAM_MEMBERS = 2;
const STEP_PAYMENT = 3;
const TOTAL_STEPS = 4;

// ═════════════════════════════════════════════════════════════════════
const FuntopiaRegistrationsPage = () => {
  const navigate = useNavigate();
  const cardsGridRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // Reset horizontal scroll to start (Valorant first)
    if (cardsGridRef.current) {
      cardsGridRef.current.scrollLeft = 0;
    }
  }, []);

  // ─── GLOBAL STATE ─────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentStep, setCurrentStep] = useState(STEP_SELECT_EVENT);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);

  // ─── TEAM LEADER STATE ────────────────────────────────────────────
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [leaderRiotID, setLeaderRiotID] = useState("");
  const [leaderInGameName, setLeaderInGameName] = useState("");
  const [leaderUID, setLeaderUID] = useState("");
  const [leaderCourse, setLeaderCourse] = useState("");
  const [leaderYearOfStudy, setLeaderYearOfStudy] = useState("");
  const [leaderCSAMember, setLeaderCSAMember] = useState("");
  const [leaderCSAID, setLeaderCSAID] = useState("");

  // leader validation
  const [isTeamNameValid, setIsTeamNameValid] = useState(true);
  const [isLeaderNameValid, setIsLeaderNameValid] = useState(true);
  const [isLeaderEmailValid, setIsLeaderEmailValid] = useState(true);
  const [isLeaderPhoneValid, setIsLeaderPhoneValid] = useState(true);
  const [isLeaderRiotIDValid, setIsLeaderRiotIDValid] = useState(true);
  const [isLeaderInGameNameValid, setIsLeaderInGameNameValid] = useState(true);
  const [isLeaderUIDValid, setIsLeaderUIDValid] = useState(true);
  const [isLeaderCourseValid, setIsLeaderCourseValid] = useState(true);
  const [isLeaderYearValid, setIsLeaderYearValid] = useState(true);
  const [isLeaderCSAMemberValid, setIsLeaderCSAMemberValid] = useState(true);
  const [isLeaderCSAIDValid, setIsLeaderCSAIDValid] = useState(true);

  // ─── TEAM MEMBERS STATE (array) ──────────────────────────────────
  const [members, setMembers] = useState([]);

  // ─── PAYMENT STATE ────────────────────────────────────────────────
  const [transactionID, setTransactionID] = useState("");
  const [PaymentSS, setPaymentSS] = useState({
    fileData: "",
    fileType: "",
    fileName: "",
  });

  // ─── DERIVED VALUES ───────────────────────────────────────────────
  const selectedEvent =
    selectedEventIndex !== null ? EventsData[selectedEventIndex] : null;

  const isValorant = selectedEvent?.eventHeading === "Valorant";
  const isBGMI = selectedEvent?.eventHeading === "BGMI";
  const isTreasureHunt = selectedEvent?.eventHeading === "Treasure Hunt";

  const EventName = selectedEvent
    ? selectedEvent.eventHeading.replace(/\s+/g, "")
    : "";

  const teamSizeOptions = selectedEvent
    ? Array.from(
        { length: selectedEvent.maxTeamSize - selectedEvent.minTeamSize + 1 },
        (_, i) => String(selectedEvent.minTeamSize + i),
      )
    : [];

  // ─── UPDATE HELPERS ───────────────────────────────────────────────
  const updateMember = (index, field, value) => {
    setMembers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const updateMemberValidation = (index, field, value) => {
    setMembers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const updateTransactionSS = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1];
        setPaymentSS({
          fileData: base64Data,
          fileType: file.type,
          fileName: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCSAMemberChange = (e) => {
    const val = e.target.value;
    setLeaderCSAMember(val);
    const normalized = val.toLowerCase();
    if (normalized === "no") setLeaderCSAID("Not a CSA Member");
    else if (normalized === "yes") setLeaderCSAID("");
  };

  // Sync members array when team size changes
  useEffect(() => {
    if (!teamSize) return;
    const size = parseInt(teamSize, 10);
    const memberCount = size - 1; // minus the leader
    setMembers((prev) => {
      if (prev.length === memberCount) return prev;
      if (prev.length < memberCount) {
        return [
          ...prev,
          ...Array.from({ length: memberCount - prev.length }, blankMember),
        ];
      }
      return prev.slice(0, memberCount);
    });
  }, [teamSize]);

  // ─── VALIDATION: Step 1 (Team + Leader) ───────────────────────────
  const validateTeamDetails = () => {
    const teamNameValid = VALIDATENAME(teamName, setIsTeamNameValid);
    const nameValid = VALIDATENAME(leaderName, setIsLeaderNameValid);
    const emailValid = VALIDATEEMAIL(leaderEmail, setIsLeaderEmailValid);
    const phoneValid = VALIDATEPHONE(leaderPhone, setIsLeaderPhoneValid);
    const courseValid = VALIDATECOURSE(leaderCourse, setIsLeaderCourseValid);
    const yearValid = VALIDATEYEAROFSTUDY(
      leaderYearOfStudy,
      setIsLeaderYearValid,
    );
    const csaMemberValid = VALIDATECSAMEMBER(
      leaderCSAMember,
      setIsLeaderCSAMemberValid,
      undefined,
      leaderCSAID,
    );

    const leaderRiotValid = !isValorant || leaderRiotID.trim().length > 0;
    setIsLeaderRiotIDValid(leaderRiotValid);
    const leaderInGameNameValid = !isBGMI || leaderInGameName.trim().length > 0;
    setIsLeaderInGameNameValid(leaderInGameNameValid);
    const leaderUIDValid = !isBGMI || leaderUID.trim().length > 0;
    setIsLeaderUIDValid(leaderUIDValid);

    const allValid =
      teamNameValid &&
      nameValid &&
      emailValid &&
      phoneValid &&
      leaderRiotValid &&
      leaderInGameNameValid &&
      leaderUIDValid &&
      courseValid &&
      yearValid &&
      csaMemberValid;

    if (!allValid) {
      toast.error("Please fill all fields correctly.");
      return false;
    }

    if (leaderCSAMember.toLowerCase() === "yes") {
      const csaIdValid = VALIDATECSAID(leaderCSAID, setIsLeaderCSAIDValid);
      if (!csaIdValid) {
        toast.error("Invalid CSA ID.");
        return false;
      }
    }

    return true;
  };

  // ─── VALIDATION: Step 2 (Team Members) ────────────────────────────
  const validateMembers = () => {
    let allValid = true;
    members.forEach((m, i) => {
      const nv = VALIDATENAME(m.name, (v) =>
        updateMemberValidation(i, "isNameValid", v),
      );
      const ev = isBGMI
        ? true
        : VALIDATEEMAIL(m.email, (v) =>
            updateMemberValidation(i, "isEmailValid", v),
          );
      const pv = VALIDATEPHONE(m.phone, (v) =>
        updateMemberValidation(i, "isPhoneValid", v),
      );
      const rv = !isValorant || m.riotID.trim().length > 0;
      updateMemberValidation(i, "isRiotIDValid", rv);
      const igv = !isBGMI || m.inGameName.trim().length > 0;
      updateMemberValidation(i, "isInGameNameValid", igv);
      const uv = !isBGMI || m.uid.trim().length > 0;
      updateMemberValidation(i, "isUIDValid", uv);
      const cv = VALIDATECOURSE(m.course, (v) =>
        updateMemberValidation(i, "isCourseValid", v),
      );
      const yv = VALIDATEYEAROFSTUDY(m.yearOfStudy, (v) =>
        updateMemberValidation(i, "isYearOfStudyValid", v),
      );
      const csaMemberValid = VALIDATECSAMEMBER(
        m.csaMember,
        (v) => updateMemberValidation(i, "isCSAMemberValid", v),
        undefined,
        m.csaID,
      );
      let csaIdValid = true;
      if (m.csaMember.toLowerCase() === "yes") {
        csaIdValid = VALIDATECSAID(m.csaID, (v) =>
          updateMemberValidation(i, "isCSAIDValid", v),
        );
      } else {
        updateMemberValidation(i, "isCSAIDValid", true);
      }

      if (
        !nv ||
        !ev ||
        !pv ||
        !rv ||
        !igv ||
        !uv ||
        !cv ||
        !yv ||
        !csaMemberValid ||
        !csaIdValid
      ) {
        allValid = false;
      }
    });
    if (!allValid) toast.error("Please fill all member details correctly.");
    return allValid;
  };

  // ─── STEP NAVIGATION ──────────────────────────────────────────────
  const goNext = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const handleSelectEvent = (index) => {
    const ev = EventsData[index];
    if (!ev.isRegistrationEnabled) {
      toast.error("Registration for this event is currently closed.");
      return;
    }
    setSelectedEventIndex(index);
    setLeaderRiotID("");
    setLeaderInGameName("");
    setLeaderUID("");
    setTeamSize(String(ev.minTeamSize));
    goNext();
  };

  const handleTeamDetailsNext = (e) => {
    e.preventDefault();
    if (validateTeamDetails()) {
      if (parseInt(teamSize, 10) <= 1) {
        setCurrentStep(STEP_PAYMENT);
      } else {
        goNext();
      }
    }
  };

  const handleMembersNext = (e) => {
    e.preventDefault();
    if (validateMembers()) {
      if (selectedEvent.IsFree) {
        handleFinalSubmit(e);
      } else {
        goNext();
      }
    }
  };

  // ─── FINAL SUBMIT ─────────────────────────────────────────────────
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);

    const membersData = members.map((m, i) => ({
      [`Member${i + 2}_Name`]: m.name,
      [`Member${i + 2}_Email`]: m.email,
      [`Member${i + 2}_Phone`]: m.phone,
      [`Member${i + 2}_RiotID`]: m.riotID,
      [`Member${i + 2}_InGameName`]: m.inGameName,
      [`Member${i + 2}_UID`]: m.uid,
      [`Member${i + 2}_Course`]: m.course,
      [`Member${i + 2}_YearOfStudy`]: m.yearOfStudy,
      [`Member${i + 2}_CSAMember`]: m.csaMember,
      [`Member${i + 2}_CSAID`]: m.csaID,
    }));

    const flatMembers = membersData.reduce(
      (acc, curr) => ({ ...acc, ...curr }),
      {},
    );

    const data = {
      EventName: selectedEvent.eventHeading,
      TeamName: teamName,
      TeamSize: teamSize,
      LeaderName: leaderName,
      LeaderRiotID: leaderRiotID,
      LeaderInGameName: leaderInGameName,
      LeaderUID: leaderUID,
      LeaderEmail: leaderEmail,
      LeaderPhone: leaderPhone,
      LeaderCourse: leaderCourse,
      LeaderYearOfStudy: leaderYearOfStudy,
      LeaderCSAMember: leaderCSAMember,
      LeaderCSAID: leaderCSAID,
      ...flatMembers,
      transactionID,
      SheetUrl: selectedEvent.SheetUrl,
      FolderId: selectedEvent.FolderId,
    };

    const finalData = new FormData();
    for (const key in data) {
      finalData.append(key, data[key]);
    }

    // Also send sheet-header style keys so Apps Script can read values directly.
    if (isValorant) {
      finalData.append("Team Name", teamName);
      finalData.append("Team Captain's Riot ID", leaderRiotID);
      finalData.append("Lead Contact Number", leaderPhone);
      finalData.append("Lead Email ID", leaderEmail);

      const players = [
        {
          name: leaderName,
          phone: leaderPhone,
          email: leaderEmail,
          riotID: leaderRiotID,
          course: leaderCourse,
          year: leaderYearOfStudy,
          csaMember: leaderCSAMember,
          csaID: leaderCSAID,
        },
        ...members,
      ].slice(0, 5);

      players.forEach((p) => {
        finalData.append("Name", p.name || "");
        finalData.append("Contact Number", p.phone || "");
        finalData.append("Email ID", p.email || "");
        finalData.append("Riot ID", p.riotID || "");
        finalData.append("Course with specialization", p.course || "");
        finalData.append("Year of Study", p.year || "");
        finalData.append("Are you a CSA Member?", p.csaMember || "");
        finalData.append("CSA ID", p.csaID || "");
      });

      finalData.append("Transaction ID", transactionID);
    }

    if (isBGMI) {
      finalData.append("Team Name", teamName);
      finalData.append("IGL Contact Number", leaderPhone);
      finalData.append("IGL Email ID", leaderEmail);

      const players = [
        {
          name: leaderName,
          inGameName: leaderInGameName,
          uid: leaderUID,
          phone: leaderPhone,
          course: leaderCourse,
          year: leaderYearOfStudy,
          csaMember: leaderCSAMember,
          csaID: leaderCSAID,
        },
        ...members,
      ].slice(0, 4);

      players.forEach((p) => {
        finalData.append("Name", p.name || "");
        finalData.append("In Game Name", p.inGameName || "");
        finalData.append("UID", p.uid || "");
        finalData.append("Contact Number", p.phone || "");
        finalData.append("Course with specialization", p.course || "");
        finalData.append("Year of Study", p.year || "");
        finalData.append("Are you a CSA Member?", p.csaMember || "");
        finalData.append("CSA ID", p.csaID || "");
      });

      finalData.append("Transaction ID", transactionID);
    }

    if (isTreasureHunt) {
      finalData.append("Team Name", teamName);
      finalData.append("Number of Players", teamSize);
      finalData.append("Team Lead Name", leaderName);
      finalData.append("Team Lead Contact Number", leaderPhone);
      finalData.append("Team Lead Email ID", leaderEmail);
      finalData.append("Course with specialization", leaderCourse);
      finalData.append("Year of Study", leaderYearOfStudy);
      finalData.append("Are you a CSA Member?", leaderCSAMember);
      finalData.append("CSA ID", leaderCSAID);

      members.slice(0, 3).forEach((m) => {
        finalData.append("Name", m.name || "");
        finalData.append("Contact Number", m.phone || "");
        finalData.append("Email ID", m.email || "");
        finalData.append("Course with specialization", m.course || "");
        finalData.append("Year of Study", m.yearOfStudy || "");
        finalData.append("Are you a CSA Member?", m.csaMember || "");
        finalData.append("CSA ID", m.csaID || "");
      });

      finalData.append("Transaction ID", transactionID);
    }

    if (!selectedEvent.IsFree) {
      const uploadFileName = `${teamName}_${leaderPhone}_${EventName}_PaymentSS`;
      finalData.append("fileName", uploadFileName);
      finalData.append("fileData", PaymentSS.fileData);
      finalData.append("fileType", PaymentSS.fileType);
      finalData.append("Payment Screenshot", uploadFileName);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxegUi1O6lk3_wCbJNLd-bwrk4_SRvP6yA7M6F55Pp7Kr7q4ja0dvdUjAAhy7f_mk2j/exec",
        { method: "POST", body: finalData },
      );

      const resData = await response.json();
      console.log(resData);

      if (resData.message === "Duplicate SAP ID") {
        toast.error("Duplicate SAP ID detected.");
        setLoading(false);
        setDisabled(false);
        return;
      }

      const sendMailResponse = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/sendmail/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: leaderName,
            email: leaderEmail,
            template: selectedEvent.eventTemplate,
          }),
        },
      );

      if (resData.status === "success") {
        await sendMailResponse.json();
        toast.success("Registration Successful!");
        navigate(
          `/registrationSuccess?wg=${selectedEvent.whatsGroup}&Name=${teamName}&Sap=${leaderCSAID}&Email=${leaderEmail}&Event=${selectedEvent.eventHeading}`,
        );
        setLoading(false);
      } else if (resData.status === "duplicate") {
        toast.error("This SAP ID has already been registered.");
        setLoading(false);
        setDisabled(false);
      } else {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
        setDisabled(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
      setDisabled(false);
    }
  };

  // ─── STEP INDICATOR ───────────────────────────────────────────────
  const stepLabels = ["Event", "Team Lead", "Members", "Payment"];

  const renderStepIndicator = () => (
    <div className={stepIndicator}>
      {stepLabels.map((label, i) => (
        <React.Fragment key={i}>
          <div className={styles.stepItem}>
            <div
              className={`${stepDot} ${i <= currentStep ? stepDotActive : ""}`}
            >
              {i < currentStep ? "\u2713" : i + 1}
            </div>
            <span
              className={`${styles.stepLabel} ${i <= currentStep ? styles.stepLabelActive : ""}`}
            >
              {label}
            </span>
          </div>
          {i < stepLabels.length - 1 && (
            <div
              className={`${stepLine} ${i < currentStep ? styles.stepLineActive : ""}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  // ─── RENDER: STEP 0 – Select Event ────────────────────────────────
  const renderEventSelection = () => (
    <>
      <h1 className={pageTitle}>
        FUNTOPIA 6.0
        <span className={pageTitleAccent} />
      </h1>
      <p className={pageSubtitle}>Select an event to register</p>
      <div className={cardsGrid} ref={cardsGridRef}>
        {EventsData.map((ev, i) => (
          <div
            key={i}
            className={`${eventCard} ${ev.themeClass} ${
              selectedEventIndex === i ? eventCardSelected : ""
            } ${!ev.isRegistrationEnabled ? styles.eventCardDisabled : ""}`}
            onClick={() => ev.isRegistrationEnabled && handleSelectEvent(i)}
          >
            <div className={eventImage}>
              <img
                loading="lazy"
                src={ev.eventImageURL}
                alt={ev.eventHeading}
              />
            </div>
            <div
              className={cardBody}
              style={!ev.isRegistrationEnabled ? { opacity: 0.6 } : {}}
            >
              <h3 className={cardTitle}>{ev.eventHeading}</h3>
              <div className={eventDetailsDiv}>
                <div className={eventDetail}>{ev.eventMode}</div>
                <div className={eventDetail}>
                  <img loading="lazy" src="/icons/teamSize.png" alt="" />
                  <p>
                    {ev.minTeamSize === ev.maxTeamSize
                      ? ev.minTeamSize
                      : `${ev.minTeamSize}-${ev.maxTeamSize}`}
                  </p>
                </div>
                <div className={eventDetail}>
                  <img loading="lazy" src="/icons/date.png" alt="" />
                  <p>{ev.eventDate}</p>
                </div>
                <div className={eventDetailFull}>
                  <p>₹{ev.eventRegistrationFee}</p>
                </div>
              </div>
            </div>
            <button
              className={cardButton}
              disabled={!ev.isRegistrationEnabled}
              style={
                !ev.isRegistrationEnabled
                  ? { opacity: 0.6, cursor: "not-allowed" }
                  : {}
              }
            >
              {ev.isRegistrationEnabled
                ? "Register Now →"
                : "Registration Closed"}
            </button>
          </div>
        ))}
        <div className={scrollSpacer} aria-hidden="true" />
      </div>
    </>
  );

  // ─── RENDER: STEP 1 – Team + Leader Details ───────────────────────
  const renderTeamDetails = () => (
    <div className={formContainer}>
      <div className={headingRow}>
        <span
          className={backArrow}
          onClick={goBack}
          role="button"
          tabIndex={0}
          aria-label="Go back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
        <h2 className={heading}>
          {selectedEvent.eventHeading.toUpperCase()} – REGISTRATION
        </h2>
      </div>
      <Toaster />
      <form
        className={formDiv}
        encType="multipart/form-data"
        onSubmit={handleTeamDetailsNext}
      >
        <h3 className={sectionHeading}>Team Details</h3>
        <div className={memberSection}>
          <InputField
            id="teamName"
            type="text"
            inputLabel="Team Name"
            value={teamName}
            valueUpdater={(e) => setTeamName(e.target.value)}
            required={true}
          />
          {!isTeamNameValid && (
            <span className={errorMessage}>Team name is required</span>
          )}

          {selectedEvent.minTeamSize !== selectedEvent.maxTeamSize && (
            <DropDownSelectField
              id="teamSize"
              value={teamSize}
              valueUpdater={(e) => setTeamSize(e.target.value)}
              inputLabel="Team Size"
              required={true}
              options={teamSizeOptions}
              defaultOption="Select"
            />
          )}
        </div>

        <h3 className={sectionHeading}>Team Leader Details</h3>
        <div className={memberSection}>
          <InputField
            id="leaderName"
            type="text"
            inputLabel={isTreasureHunt ? "Team Lead Name" : "Lead Name"}
            value={leaderName}
            valueUpdater={(e) => setLeaderName(e.target.value)}
            required={true}
          />
          {!isLeaderNameValid && (
            <span className={errorMessage}>Invalid Name</span>
          )}

          {isValorant && (
            <>
              <InputField
                id="leaderRiotID"
                type="text"
                inputLabel="Team Captain's Riot ID"
                value={leaderRiotID}
                valueUpdater={(e) => setLeaderRiotID(e.target.value)}
                required={true}
              />
              {!isLeaderRiotIDValid && (
                <span className={errorMessage}>Riot ID is required</span>
              )}
            </>
          )}

          {isBGMI && (
            <>
              <InputField
                id="leaderInGameName"
                type="text"
                inputLabel="IGL In Game Name"
                value={leaderInGameName}
                valueUpdater={(e) => setLeaderInGameName(e.target.value)}
                required={true}
              />
              {!isLeaderInGameNameValid && (
                <span className={errorMessage}>In Game Name is required</span>
              )}

              <InputField
                id="leaderUID"
                type="text"
                inputLabel="IGL UID"
                value={leaderUID}
                valueUpdater={(e) => setLeaderUID(e.target.value)}
                required={true}
              />
              {!isLeaderUIDValid && (
                <span className={errorMessage}>UID is required</span>
              )}
            </>
          )}

          <InputField
            id="leaderPhone"
            type="text"
            inputLabel={isBGMI ? "IGL Contact Number" : "Lead Contact Number"}
            value={leaderPhone}
            valueUpdater={(e) => setLeaderPhone(e.target.value)}
            required={true}
          />
          {!isLeaderPhoneValid && (
            <span className={errorMessage}>Invalid Phone</span>
          )}

          <InputField
            id="leaderEmail"
            type="email"
            inputLabel={isBGMI ? "IGL Email ID" : "Lead Email ID"}
            value={leaderEmail}
            valueUpdater={(e) => setLeaderEmail(e.target.value)}
            required={true}
          />
          {!isLeaderEmailValid && (
            <span className={errorMessage}>Invalid Email</span>
          )}

          <InputField
            id="leaderCourse"
            type="text"
            inputLabel="Course (with specialization)"
            value={leaderCourse}
            valueUpdater={(e) => setLeaderCourse(e.target.value)}
            required={true}
          />
          {!isLeaderCourseValid && (
            <span className={errorMessage}>Invalid Course</span>
          )}

          <DropDownSelectField
            id="leaderYear"
            value={leaderYearOfStudy}
            valueUpdater={(e) => setLeaderYearOfStudy(e.target.value)}
            inputLabel="Year of Study"
            required={true}
            options={["1st", "2nd", "3rd", "4th", "5th"]}
            defaultOption="Select"
          />
          {!isLeaderYearValid && (
            <span className={errorMessage}>Invalid Year of Study</span>
          )}

          <DropDownSelectField
            id="leaderCSAMember"
            value={leaderCSAMember}
            valueUpdater={handleCSAMemberChange}
            inputLabel="Are you a CSA Member?"
            required={true}
            options={["Yes", "No"]}
            defaultOption="Select"
          />
          {!isLeaderCSAMemberValid && (
            <span className={errorMessage}>Please select an option</span>
          )}

          {leaderCSAMember.toLowerCase() === "yes" && (
            <>
              <InputField
                id="leaderCSAID"
                type="text"
                inputLabel="CSA ID"
                value={leaderCSAID}
                valueUpdater={(e) =>
                  setLeaderCSAID(e.target.value.toUpperCase())
                }
                required={true}
              />
              {!isLeaderCSAIDValid && (
                <span className={errorMessage}>Invalid CSA ID</span>
              )}
            </>
          )}
        </div>

        <button type="submit" className={submitButton}>
          NEXT →
        </button>
      </form>
    </div>
  );

  // ─── RENDER: STEP 2 – Team Members ────────────────────────────────
  const renderTeamMembers = () => (
    <div className={formContainer}>
      <div className={headingRow}>
        <span
          className={backArrow}
          onClick={goBack}
          role="button"
          tabIndex={0}
          aria-label="Go back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
        <h2 className={heading}>TEAM MEMBERS</h2>
      </div>
      <Toaster />
      <form
        className={formDiv}
        encType="multipart/form-data"
        onSubmit={handleMembersNext}
      >
        {members.map((member, i) => (
          <div key={i} className={teamMemberCard}>
            <h3 className={teamMemberHeader}>Member {i + 2}</h3>
            <div className={memberSection}>
              <InputField
                id={`member${i}-name`}
                type="text"
                inputLabel="Name"
                value={member.name}
                valueUpdater={(e) => updateMember(i, "name", e.target.value)}
                required={true}
              />
              {!member.isNameValid && (
                <span className={errorMessage}>Invalid Name</span>
              )}

              <InputField
                id={`member${i}-phone`}
                type="text"
                inputLabel="Contact Number"
                value={member.phone}
                valueUpdater={(e) => updateMember(i, "phone", e.target.value)}
                required={true}
              />
              {!member.isPhoneValid && (
                <span className={errorMessage}>Invalid Phone</span>
              )}

              {!isBGMI && (
                <>
                  <InputField
                    id={`member${i}-email`}
                    type="email"
                    inputLabel="Email ID"
                    value={member.email}
                    valueUpdater={(e) =>
                      updateMember(i, "email", e.target.value)
                    }
                    required={true}
                  />
                  {!member.isEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                </>
              )}

              {isValorant && (
                <>
                  <InputField
                    id={`member${i}-riotID`}
                    type="text"
                    inputLabel="Riot ID"
                    value={member.riotID}
                    valueUpdater={(e) =>
                      updateMember(i, "riotID", e.target.value)
                    }
                    required={true}
                  />
                  {!member.isRiotIDValid && (
                    <span className={errorMessage}>Riot ID is required</span>
                  )}
                </>
              )}

              {isBGMI && (
                <>
                  <InputField
                    id={`member${i}-inGameName`}
                    type="text"
                    inputLabel="In Game Name"
                    value={member.inGameName}
                    valueUpdater={(e) =>
                      updateMember(i, "inGameName", e.target.value)
                    }
                    required={true}
                  />
                  {!member.isInGameNameValid && (
                    <span className={errorMessage}>
                      In Game Name is required
                    </span>
                  )}

                  <InputField
                    id={`member${i}-uid`}
                    type="text"
                    inputLabel="UID"
                    value={member.uid}
                    valueUpdater={(e) => updateMember(i, "uid", e.target.value)}
                    required={true}
                  />
                  {!member.isUIDValid && (
                    <span className={errorMessage}>UID is required</span>
                  )}
                </>
              )}

              <InputField
                id={`member${i}-course`}
                type="text"
                inputLabel="Course (with specialization)"
                value={member.course}
                valueUpdater={(e) => updateMember(i, "course", e.target.value)}
                required={true}
              />
              {!member.isCourseValid && (
                <span className={errorMessage}>Invalid Course</span>
              )}

              <DropDownSelectField
                id={`member${i}-year`}
                value={member.yearOfStudy}
                valueUpdater={(e) =>
                  updateMember(i, "yearOfStudy", e.target.value)
                }
                inputLabel="Year of Study"
                required={true}
                options={["1st", "2nd", "3rd", "4th", "5th"]}
                defaultOption="Select"
              />
              {!member.isYearOfStudyValid && (
                <span className={errorMessage}>Invalid Year of Study</span>
              )}

              <DropDownSelectField
                id={`member${i}-csaMember`}
                value={member.csaMember}
                valueUpdater={(e) => {
                  const val = e.target.value;
                  updateMember(i, "csaMember", val);
                  if (val.toLowerCase() === "no") {
                    updateMember(i, "csaID", "Not a CSA Member");
                  } else {
                    updateMember(i, "csaID", "");
                  }
                }}
                inputLabel="Are you a CSA Member?"
                required={true}
                options={["Yes", "No"]}
                defaultOption="Select"
              />
              {!member.isCSAMemberValid && (
                <span className={errorMessage}>Please select an option</span>
              )}

              {member.csaMember.toLowerCase() === "yes" && (
                <>
                  <InputField
                    id={`member${i}-csaID`}
                    type="text"
                    inputLabel="CSA ID"
                    value={member.csaID}
                    valueUpdater={(e) =>
                      updateMember(i, "csaID", e.target.value.toUpperCase())
                    }
                    required={true}
                  />
                  {!member.isCSAIDValid && (
                    <span className={errorMessage}>Invalid CSA ID</span>
                  )}
                </>
              )}
            </div>
          </div>
        ))}

        <button type="submit" className={submitButton}>
          {selectedEvent.IsFree ? "SUBMIT" : "NEXT → Payment"}
        </button>
      </form>
    </div>
  );

  // ─── RENDER: STEP 3 – Payment ─────────────────────────────────────
  const renderPayment = () => (
    <div className={formContainer}>
      <div className={headingRow}>
        <span
          className={backArrow}
          onClick={goBack}
          role="button"
          tabIndex={0}
          aria-label="Go back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
        <h2 className={heading}>PAYMENT</h2>
      </div>
      <Toaster />
      <form
        className={formDiv}
        encType="multipart/form-data"
        onSubmit={handleFinalSubmit}
      >
        <h3
          className={sectionHeading}
          style={{ textAlign: "center", width: "100%", fontSize: "1.5rem" }}
        >
          Payment Section
        </h3>
        <p
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          Amount: ₹{selectedEvent.eventRegistrationFee} (CSA: ₹
          {selectedEvent.csaDiscountFee})
        </p>

        <div className={paymentQRDiv}>
          <img
            loading="lazy"
            src="/img/PaymentModes/QR (1).jpeg"
            alt="Payment QR"
          />
        </div>

        <div className={memberSection}>
          <InputField
            id="transactionID"
            type="text"
            inputLabel="Transaction ID (UTR)"
            value={transactionID}
            valueUpdater={(e) => setTransactionID(e.target.value)}
            required={true}
          />

          <FileSelect
            id="transactionSS"
            inputLabel="Transaction Screenshot"
            valueUpdater={updateTransactionSS}
            required={true}
          />
        </div>

        <button type="submit" disabled={disabled} className={submitButton}>
          SUBMIT REGISTRATION
        </button>
      </form>
    </div>
  );

  // ═════════════════════════════════════════════════════════════════════
  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}

      {currentStep > STEP_SELECT_EVENT && renderStepIndicator()}

      {currentStep === STEP_SELECT_EVENT && renderEventSelection()}
      {currentStep === STEP_TEAM_DETAILS && renderTeamDetails()}
      {currentStep === STEP_TEAM_MEMBERS && renderTeamMembers()}
      {currentStep === STEP_PAYMENT && renderPayment()}
    </div>
  );
};

export default FuntopiaRegistrationsPage;
