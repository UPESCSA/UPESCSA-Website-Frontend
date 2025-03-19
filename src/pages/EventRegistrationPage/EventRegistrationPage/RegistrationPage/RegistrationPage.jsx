import { useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import InputField from "../../../../components/RegistrationFormComponents/InputField/InputField";
import DropDownSelectField from "../../../../components/RegistrationFormComponents/DropDownSelectField/DropDownSelectField";
import FileSelect from "../../../../components/RegistrationFormComponents/FileSelect/FileSelect";
import FormNavigation from "../../../../components/RegistrationFormComponents/FormNavigation/FormNavigation";
import FormLoading from "../../../../components/RegistrationFormComponents/FormLoading/FormLoading";

import {
  VALIDATETEAM,
  VALIDATENAME,
  VALIDATEEMAIL,
  VALIDATEPHONE,
  VALIDATEYEAROFSTUDY,
  VALIDATECOURSE,
  VALIDATEUPESSTUDENT,
  VALIDATESAPID,
  VALIDATECOLLEGENAME,
  VALIDATECSAMEMBER,
  VALIDATECSAID,
} from "../../../../utils/registrationValidations";

import styles from "./RegistrationPage.module.css";

const {
  mainDiv,
  formSideImage,
  pageHeading,
  memberSection,
  sectionHeading,
  homeSubHeading,
  registrationFormDiv,
  hackathonLogo,
  registrationForm,
  formPageDiv,
  errorMessage,
  teamMemberDetails,
  paymentDetails,
  qrCode,
  qrCodeImg,
  paymentInstructions,
  paymentHeading,
  paymentText,
  loadingDiv,
  backArrow,
} = styles;

const RegistrationPage = () => {
  const navigate = useNavigate();

  // STATES

  const [loading, setLoading] = useState(false);

  const [pageVisible, setPageVisible] = useState(1);

  const [transactionID, setTransactionID] = useState("");
  const [hackathonScreenShot, setHackathonScreenShot] = useState(null);

  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("1");
  // const [teamCategory, setTeamCategory] = useState("choose");

  const [teamLeadName, setTeamLeadName] = useState("");
  const [teamLeadEmail, setTeamLeadEmail] = useState("");
  const [teamLeadPhone, setTeamLeadPhone] = useState("");
  const [teamLeadUPESStudent, setTeamLeadUPESStudent] = useState("select");
  const [teamLeadSapID, setTeamLeadSapID] = useState("");
  const [teamLeadCollegeName, setTeamLeadCollegeName] = useState("");
  const [teamLeadCSAMember, setTeamLeadCSAMember] = useState("select");
  const [teamLeadCSAID, setTeamLeadCSAID] = useState("");
  const [teamLeadCourse, setTeamLeadCourse] = useState("");
  const [teamLeadYearOfStudy, setTeamLeadYearOfStudy] = useState("");

  const [memberTwoName, setMemberTwoName] = useState("");
  const [memberTwoEmail, setMemberTwoEmail] = useState("");
  const [memberTwoPhone, setMemberTwoPhone] = useState("");
  const [memberTwoUPESStudent, setMemberTwoUPESStudent] = useState("select");
  const [memberTwoSapID, setMemberTwoSapID] = useState("");
  const [memberTwoCollegeName, setMemberTwoCollegeName] = useState("");
  const [memberTwoCSAMember, setMemberTwoCSAMember] = useState("select");
  const [memberTwoCSAID, setMemberTwoCSAID] = useState("");
  const [memberTwoCourse, setMemberTwoCourse] = useState("");
  const [memberTwoYearOfStudy, setMemberTwoYearOfStudy] = useState("");

  const [memberThreeName, setMemberThreeName] = useState("");
  const [memberThreeEmail, setMemberThreeEmail] = useState("");
  const [memberThreePhone, setMemberThreePhone] = useState("");
  const [memberThreeUPESStudent, setMemberThreeUPESStudent] =
    useState("select");
  const [memberThreeSapID, setMemberThreeSapID] = useState("");
  const [memberThreeCollegeName, setMemberThreeCollegeName] = useState("");
  const [memberThreeCSAMember, setMemberThreeCSAMember] = useState("select");
  const [memberThreeCSAID, setMemberThreeCSAID] = useState("");
  const [memberThreeCourse, setMemberThreeCourse] = useState("");
  const [memberThreeYearOfStudy, setMemberThreeYearOfStudy] = useState("");

  const [memberFourName, setMemberFourName] = useState("");
  const [memberFourEmail, setMemberFourEmail] = useState("");
  const [memberFourPhone, setMemberFourPhone] = useState("");
  const [memberFourUPESStudent, setMemberFourUPESStudent] = useState("select");
  const [memberFourSapID, setMemberFourSapID] = useState("");
  const [memberFourCollegeName, setMemberFourCollegeName] = useState("");
  const [memberFourCSAMember, setMemberFourCSAMember] = useState("select");
  const [memberFourCSAID, setMemberFourCSAID] = useState("");
  const [memberFourCourse, setMemberFourCourse] = useState("");
  const [memberFourYearOfStudy, setMemberFourYearOfStudy] = useState("");

  // UPDATE FUNCTIONS

  const updateTransactionID = (e) => {
    setTransactionID(e.target.value);
  };

  const updateHackathonScreenShot = (e) => {
    setHackathonScreenShot(e.target.files[0]);
  };

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const updateTeamSize = (e) => {
    setTeamSize(e.target.value);
  };

  // const updateTeamCategory = (e) => {
  //   setTeamCategory(e.target.value);
  // };

  const updateTeamLeadName = (e) => {
    setTeamLeadName(e.target.value);
  };

  const updateTeamLeadEmail = (e) => {
    setTeamLeadEmail(e.target.value);
  };

  const updateTeamLeadPhone = (e) => {
    setTeamLeadPhone(e.target.value);
  };

  const updateTeamLeadUPESStudent = (e) => {
    setTeamLeadUPESStudent(e.target.value);
  };

  const updateTeamLeadSapID = (e) => {
    setTeamLeadSapID(e.target.value);
  };

  const updateTeamLeadCollegeName = (e) => {
    setTeamLeadCollegeName(e.target.value);
  };

  const updateTeamLeadCSAMember = (e) => {
    setTeamLeadCSAMember(e.target.value);
  };

  const updateTeamLeadCSAID = (e) => {
    setTeamLeadCSAID(e.target.value);
  };

  const updateTeamLeadCourse = (e) => {
    setTeamLeadCourse(e.target.value);
  };

  const updateTeamLeadYearOfStudy = (e) => {
    setTeamLeadYearOfStudy(e.target.value);
  };

  // ------------------------------------------------

  const updateMemberTwoName = (e) => {
    setMemberTwoName(e.target.value);
  };

  const updateMemberTwoEmail = (e) => {
    setMemberTwoEmail(e.target.value);
  };

  const updateMemberTwoPhone = (e) => {
    setMemberTwoPhone(e.target.value);
  };

  const updateMemberTwoUPESStudent = (e) => {
    setMemberTwoUPESStudent(e.target.value);
  };

  const updateMemberTwoSapID = (e) => {
    setMemberTwoSapID(e.target.value);
  };

  const updateMemberTwoCollegeName = (e) => {
    setMemberTwoCollegeName(e.target.value);
  };

  const updateMemberTwoCSAMember = (e) => {
    setMemberTwoCSAMember(e.target.value);
  };

  const updateMemberTwoCSAID = (e) => {
    setMemberTwoCSAID(e.target.value);
  };

  const updateMemberTwoCourse = (e) => {
    setMemberTwoCourse(e.target.value);
  };

  const updateMemberTwoYearOfStudy = (e) => {
    setMemberTwoYearOfStudy(e.target.value);
  };

  // ------------------------------------------------

  const updateMemberThreeName = (e) => {
    setMemberThreeName(e.target.value);
  };

  const updateMemberThreeEmail = (e) => {
    setMemberThreeEmail(e.target.value);
  };

  const updateMemberThreePhone = (e) => {
    setMemberThreePhone(e.target.value);
  };

  const updateMemberThreeUPESStudent = (e) => {
    setMemberThreeUPESStudent(e.target.value);
  };

  const updateMemberThreeSapID = (e) => {
    setMemberThreeSapID(e.target.value);
  };

  const updateMemberThreeCollegeName = (e) => {
    setMemberThreeCollegeName(e.target.value);
  };

  const updateMemberThreeCSAMember = (e) => {
    setMemberThreeCSAMember(e.target.value);
  };

  const updateMemberThreeCSAID = (e) => {
    setMemberThreeCSAID(e.target.value);
  };

  const updateMemberThreeCourse = (e) => {
    setMemberThreeCourse(e.target.value);
  };

  const updateMemberThreeYearOfStudy = (e) => {
    setMemberThreeYearOfStudy(e.target.value);
  };

  // ------------------------------------------------

  const updateMemberFourName = (e) => {
    setMemberFourName(e.target.value);
  };

  const updateMemberFourEmail = (e) => {
    setMemberFourEmail(e.target.value);
  };

  const updateMemberFourPhone = (e) => {
    setMemberFourPhone(e.target.value);
  };

  const updateMemberFourUPESStudent = (e) => {
    setMemberFourUPESStudent(e.target.value);
  };

  const updateMemberFourSapID = (e) => {
    setMemberFourSapID(e.target.value);
  };

  const updateMemberFourCollegeName = (e) => {
    setMemberFourCollegeName(e.target.value);
  };

  const updateMemberFourCSAMember = (e) => {
    setMemberFourCSAMember(e.target.value);
  };

  const updateMemberFourCSAID = (e) => {
    setMemberFourCSAID(e.target.value);
  };

  const updateMemberFourCourse = (e) => {
    setMemberFourCourse(e.target.value);
  };

  const updateMemberFourYearOfStudy = (e) => {
    setMemberFourYearOfStudy(e.target.value);
  };

  // VALIDATION STATES

  const [isTeamNameValid, setIsTeamNameValid] = useState(true);
  const [isTeamSizeValid, setIsTeamSizeValid] = useState(true);
  // const [isTeamCategoryValid, setIsTeamCategoryValid] = useState(true);

  const [isTeamLeadNameValid, setIsTeamLeadNameValid] = useState(true);
  const [isTeamLeadEmailValid, setIsTeamLeadEmailValid] = useState(true);
  const [isTeamLeadPhoneValid, setIsTeamLeadPhoneValid] = useState(true);
  const [isTeamLeadUPESStudentValid, setIsTeamLeadUPESStudentValid] =
    useState(true);
  const [isTeamLeadSapIDValid, setIsTeamLeadSapIDValid] = useState(true);
  const [isTeamLeadCollegeNameValid, setIsTeamLeadCollegeNameValid] =
    useState(true);
  const [isTeamLeadCSAMemberValid, setIsTeamLeadCSAMemberValid] =
    useState(true);
  const [isTeamLeadCSAIDValid, setIsTeamLeadCSAIDValid] = useState(true);
  const [isTeamLeadCourseValid, setIsTeamLeadCourseValid] = useState(true);
  const [isTeamLeadYearOfStudyValid, setIsTeamLeadYearOfStudyValid] =
    useState(true);

  const [isMemberTwoNameValid, setIsMemberTwoNameValid] = useState(true);
  const [isMemberTwoEmailValid, setIsMemberTwoEmailValid] = useState(true);
  const [isMemberTwoPhoneValid, setIsMemberTwoPhoneValid] = useState(true);
  const [isMemberTwoUPESStudentValid, setIsMemberTwoUPESStudentValid] =
    useState(true);
  const [isMemberTwoSapIDValid, setIsMemberTwoSapIDValid] = useState(true);
  const [isMemberTwoCollegeNameValid, setIsMemberTwoCollegeNameValid] =
    useState(true);
  const [isMemberTwoCSAMemberValid, setIsMemberTwoCSAMemberValid] =
    useState(true);
  const [isMemberTwoCSAIDValid, setIsMemberTwoCSAIDValid] = useState(true);
  const [isMemberTwoCourseValid, setIsMemberTwoCourseValid] = useState(true);
  const [isMemberTwoYearOfStudyValid, setIsMemberTwoYearOfStudyValid] =
    useState(true);

  const [isMemberThreeNameValid, setIsMemberThreeNameValid] = useState(true);
  const [isMemberThreeEmailValid, setIsMemberThreeEmailValid] = useState(true);
  const [isMemberThreePhoneValid, setIsMemberThreePhoneValid] = useState(true);
  const [isMemberThreeUPESStudentValid, setIsMemberThreeUPESStudentValid] =
    useState(true);
  const [isMemberThreeSapIDValid, setIsMemberThreeSapIDValid] = useState(true);
  const [isMemberThreeCollegeNameValid, setIsMemberThreeCollegeNameValid] =
    useState(true);
  const [isMemberThreeCSAMemberValid, setIsMemberThreeCSAMemberValid] =
    useState(true);
  const [isMemberThreeCSAIDValid, setIsMemberThreeCSAIDValid] = useState(true);
  const [isMemberThreeCourseValid, setIsMemberThreeCourseValid] =
    useState(true);
  const [isMemberThreeYearOfStudyValid, setIsMemberThreeYearOfStudyValid] =
    useState(true);

  const [isMemberFourNameValid, setIsMemberFourNameValid] = useState(true);
  const [isMemberFourEmailValid, setIsMemberFourEmailValid] = useState(true);
  const [isMemberFourPhoneValid, setIsMemberFourPhoneValid] = useState(true);
  const [isMemberFourUPESStudentValid, setIsMemberFourUPESStudentValid] =
    useState(true);
  const [isMemberFourSapIDValid, setIsMemberFourSapIDValid] = useState(true);
  const [isMemberFourCollegeNameValid, setIsMemberFourCollegeNameValid] =
    useState(true);
  const [isMemberFourCSAMemberValid, setIsMemberFourCSAMemberValid] =
    useState(true);
  const [isMemberFourCSAIDValid, setIsMemberFourCSAIDValid] = useState(true);
  const [isMemberFourCourseValid, setIsMemberFourCourseValid] = useState(true);
  const [isMemberFourYearOfStudyValid, setIsMemberFourYearOfStudyValid] =
    useState(true);

  // VALIDATION FUNCTIONS

  const validateTeamName = () => {
    return VALIDATENAME(teamName, setIsTeamNameValid);
  };

  const validateTeamSize = () => {
    return VALIDATETEAM(teamSize, setIsTeamSizeValid);
  };

  // const validateTeamCategory = () => {
  //   return VALIDATETEAM(teamCategory, setIsTeamCategoryValid);
  // };

  const validateTeamLeadName = () => {
    return VALIDATENAME(teamLeadName, setIsTeamLeadNameValid);
  };

  const validateTeamLeadEmail = () => {
    return VALIDATEEMAIL(teamLeadEmail, setIsTeamLeadEmailValid);
  };

  const validateTeamLeadPhone = () => {
    return VALIDATEPHONE(teamLeadPhone, setIsTeamLeadPhoneValid);
  };

  const validateTeamLeadUPESStudent = () => {
    return VALIDATEUPESSTUDENT(
      teamLeadUPESStudent,
      setIsTeamLeadUPESStudentValid
    );
  };

  const validateTeamLeadSapID = () => {
    return VALIDATESAPID(
      teamLeadSapID,
      setIsTeamLeadSapIDValid,
      teamLeadUPESStudent
    );
  };

  const validateTeamLeadCollegeName = () => {
    return VALIDATECOLLEGENAME(
      teamLeadCollegeName,
      setIsTeamLeadCollegeNameValid,
      teamLeadUPESStudent
    );
  };

  const validateTeamLeadCSAMember = () => {
    return VALIDATECSAMEMBER(
      teamLeadCSAMember,
      setIsTeamLeadCSAMemberValid,
      teamLeadUPESStudent
    );
  };

  const validateTeamLeadCSAID = () => {
    return true;
  };

  const validateTeamLeadCourse = () => {
    return VALIDATECOURSE(teamLeadCourse, setIsTeamLeadCourseValid);
  };

  const validateTeamLeadYearOfStudy = () => {
    return VALIDATEYEAROFSTUDY(
      teamLeadYearOfStudy,
      setIsTeamLeadYearOfStudyValid
    );
  };

  const validateMemberTwoName = () => {
    return VALIDATENAME(memberTwoName, setIsMemberTwoNameValid);
  };

  const validateMemberTwoEmail = () => {
    return VALIDATEEMAIL(memberTwoEmail, setIsMemberTwoEmailValid);
  };

  const validateMemberTwoPhone = () => {
    return VALIDATEPHONE(memberTwoPhone, setIsMemberTwoPhoneValid);
  };

  const validateMemberTwoUPESStudent = () => {
    return VALIDATEUPESSTUDENT(
      memberTwoUPESStudent,
      setIsMemberTwoUPESStudentValid
    );
  };

  const validateMemberTwoSapID = () => {
    return VALIDATESAPID(
      memberTwoSapID,
      setIsMemberTwoSapIDValid,
      memberTwoUPESStudent
    );
  };

  const validateMemberTwoCollegeName = () => {
    return VALIDATECOLLEGENAME(
      memberTwoCollegeName,
      setIsMemberTwoCollegeNameValid,
      memberTwoUPESStudent
    );
  };

  const validateMemberTwoCSAMember = () => {
    return VALIDATECSAMEMBER(
      memberTwoCSAMember,
      setIsMemberTwoCSAMemberValid,
      memberTwoUPESStudent
    );
  };

  const validateMemberTwoCSAID = () => {
    return true;
  };

  const validateMemberTwoCourse = () => {
    return VALIDATECOURSE(memberTwoCourse, setIsMemberTwoCourseValid);
  };

  const validateMemberTwoYearOfStudy = () => {
    return VALIDATEYEAROFSTUDY(
      memberTwoYearOfStudy,
      setIsMemberTwoYearOfStudyValid
    );
  };

  // ---------------------------------------------------------------------

  const validateMemberThreeName = () => {
    return VALIDATENAME(memberThreeName, setIsMemberThreeNameValid);
  };

  const validateMemberThreeEmail = () => {
    return VALIDATEEMAIL(memberThreeEmail, setIsMemberThreeEmailValid);
  };

  const validateMemberThreePhone = () => {
    return VALIDATEPHONE(memberThreePhone, setIsMemberThreePhoneValid);
  };

  const validateMemberThreeUPESStudent = () => {
    return VALIDATEUPESSTUDENT(
      memberThreeUPESStudent,
      setIsMemberThreeUPESStudentValid
    );
  };

  const validateMemberThreeSapID = () => {
    return VALIDATESAPID(
      memberThreeSapID,
      setIsMemberThreeSapIDValid,
      memberThreeUPESStudent
    );
  };

  const validateMemberThreeCollegeName = () => {
    return VALIDATECOLLEGENAME(
      memberThreeCollegeName,
      setIsMemberThreeCollegeNameValid,
      memberThreeUPESStudent
    );
  };

  const validateMemberThreeCSAMember = () => {
    return VALIDATECSAMEMBER(
      memberThreeCSAMember,
      setIsMemberThreeCSAMemberValid,
      memberThreeUPESStudent
    );
  };

  const validateMemberThreeCSAID = () => {
    return true;
  };

  const validateMemberThreeCourse = () => {
    return VALIDATECOURSE(memberThreeCourse, setIsMemberThreeCourseValid);
  };

  const validateMemberThreeYearOfStudy = () => {
    return VALIDATEYEAROFSTUDY(
      memberThreeYearOfStudy,
      setIsMemberThreeYearOfStudyValid
    );
  };

  // ---------------------------------------------------------------------

  const validateMemberFourName = () => {
    return VALIDATENAME(memberFourName, setIsMemberFourNameValid);
  };

  const validateMemberFourEmail = () => {
    return VALIDATEEMAIL(memberFourEmail, setIsMemberFourEmailValid);
  };

  const validateMemberFourPhone = () => {
    return VALIDATEPHONE(memberFourPhone, setIsMemberFourPhoneValid);
  };

  const validateMemberFourUPESStudent = () => {
    return VALIDATEUPESSTUDENT(
      memberFourUPESStudent,
      setIsMemberFourUPESStudentValid
    );
  };

  const validateMemberFourSapID = () => {
    return VALIDATESAPID(
      memberFourSapID,
      setIsMemberFourSapIDValid,
      memberFourUPESStudent
    );
  };

  const validateMemberFourCSAMember = () => {
    return VALIDATECSAMEMBER(
      memberFourCSAMember,
      setIsMemberFourCSAMemberValid,
      memberFourUPESStudent
    );
  };

  const validateMemberFourCSAID = () => {
    return true;
  };

  const validateMemberFourCollegeName = () => {
    return VALIDATECOLLEGENAME(
      memberFourCollegeName,
      setIsMemberFourCollegeNameValid,
      memberFourUPESStudent
    );
  };

  const validateMemberFourCourse = () => {
    return VALIDATECOURSE(memberFourCourse, setIsMemberFourCourseValid);
  };

  const validateMemberFourYearOfStudy = () => {
    return VALIDATEYEAROFSTUDY(
      memberFourYearOfStudy,
      setIsMemberFourYearOfStudyValid
    );
  };

  // FINAL VALIDATION FUNCTIONS

  // ********************************************

  const validateTeamLead = () => {
    return (
      validateTeamLeadName() &&
      validateTeamLeadEmail() &&
      validateTeamLeadPhone() &&
      validateTeamLeadCourse() &&
      validateTeamLeadYearOfStudy() &&
      validateTeamLeadUPESStudent() &&
      validateTeamLeadSapID() &&
      validateTeamLeadCollegeName() &&
      validateTeamLeadCSAMember() &&
      validateTeamLeadCSAID()
    );
  };

  const validateMemberTwo = () => {
    return (
      validateMemberTwoName() &&
      validateMemberTwoEmail() &&
      validateMemberTwoPhone() &&
      validateMemberTwoCourse() &&
      validateMemberTwoYearOfStudy() &&
      validateMemberTwoUPESStudent() &&
      validateMemberTwoSapID() &&
      validateMemberTwoCollegeName() &&
      validateMemberTwoCSAMember() &&
      validateMemberTwoCSAID()
    );
  };

  const validateMemberThree = () => {
    return (
      validateMemberThreeName() &&
      validateMemberThreeEmail() &&
      validateMemberThreePhone() &&
      validateMemberThreeCourse() &&
      validateMemberThreeYearOfStudy() &&
      validateMemberThreeUPESStudent() &&
      validateMemberThreeSapID() &&
      validateMemberThreeCollegeName() &&
      validateMemberThreeCSAMember() &&
      validateMemberThreeCSAID()
    );
  };

  const validateMemberFour = () => {
    return (
      validateMemberFourName() &&
      validateMemberFourEmail() &&
      validateMemberFourPhone() &&
      validateMemberFourCourse() &&
      validateMemberFourYearOfStudy() &&
      validateMemberFourUPESStudent() &&
      validateMemberFourSapID() &&
      validateMemberFourCollegeName() &&
      validateMemberFourCSAMember() &&
      validateMemberFourCSAID()
    );
  };

  // ********************************************

  // SUBMIT FUNCTIONS

  const moveToPageTwo = () => {
    const isTeamNameValid = validateTeamName();
    const isTeamSizeValid = validateTeamSize();
    // const isTeamCategoryValid = validateTeamCategory();

    if (isTeamNameValid && isTeamSizeValid) {
      setPageVisible(2);
    }
  };

  const moveToPageThree = () => {
    if (validateTeamLead()) {
      if (parseInt(teamSize, 10) === 1) {
        setPageVisible(3);
      }

      if (parseInt(teamSize, 10) === 2) {
        if (validateMemberTwo()) {
          setPageVisible(3);
        }
      }

      if (parseInt(teamSize, 10) === 3) {
        if (validateMemberTwo() && validateMemberThree()) {
          setPageVisible(3);
        }
      }

      if (parseInt(teamSize, 10) === 4) {
        if (
          validateMemberTwo() &&
          validateMemberThree() &&
          validateMemberFour()
        ) {
          setPageVisible(3);
        }
      }
    }
  };

  const submitForm = () => {
    setLoading(true);

    const data = {
      teamName,
      teamSize,
      // teamCategory,
      teamLeadName,
      teamLeadEmail,
      teamLeadPhone,
      teamLeadUPESStudent,
      teamLeadSapID,
      teamLeadCollegeName,
      teamLeadCSAMember,
      teamLeadCSAID,
      teamLeadCourse,
      teamLeadYearOfStudy,
      memberTwoName,
      memberTwoEmail,
      memberTwoPhone,
      memberTwoUPESStudent,
      memberTwoSapID,
      memberTwoCollegeName,
      memberTwoCSAMember,
      memberTwoCSAID,
      memberTwoCourse,
      memberTwoYearOfStudy,
      memberThreeName,
      memberThreeEmail,
      memberThreePhone,
      memberThreeUPESStudent,
      memberThreeSapID,
      memberThreeCollegeName,
      memberThreeCSAMember,
      memberThreeCSAID,
      memberThreeCourse,
      memberThreeYearOfStudy,
      memberFourName,
      memberFourEmail,
      memberFourPhone,
      memberFourUPESStudent,
      memberFourSapID,
      memberFourCollegeName,
      memberFourCSAMember,
      memberFourCSAID,
      memberFourCourse,
      memberFourYearOfStudy,
      transactionID,
    };

    const finalData = new FormData();

    for (const key in data) {
      finalData.append(key, data[key]);
    }

    finalData.append("hackathonTransactionSS", hackathonScreenShot);

    console.log(data, hackathonScreenShot);
    axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/api/event/entropedia/register`,
        finalData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/registrationSuccess?wg=" + "KmLThlhH9vE0xnJav8Oq0a");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const moveToNextPage = () => {
    if (pageVisible === 1) {
      moveToPageTwo();
    }

    if (pageVisible === 2) {
      moveToPageThree();
    }

    if (pageVisible === 3) {
      submitForm();
    }
  };

  const moveToPreviousPage = () => {
    if (pageVisible === 2) {
      setPageVisible(1);
    }
    if (pageVisible === 3) {
      setPageVisible(2);
    }
  };

  return (
    <div className={mainDiv}>
      <Link to="/entropedia">
        <img
          src="/icons/rightArrow.png"
          alt="backButton"
          className={backArrow}
        />
      </Link>

      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}

      <div className={registrationForm}>
        <div className={formSideImage}>
          <img
            src="/img/events/live/Entropedia Poster.jpg"
            alt="Entropedia LOGO"
            className={hackathonLogo}
          />
          <h2 className={homeSubHeading}>Turning Vision into Venture!</h2>
        </div>
        <form
          className={registrationFormDiv}
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
          }}
        >
          {/* TEAM DETAILS SECTION START */}

          {pageVisible === 1 && (
            <div className={formPageDiv}>
              <h1 className={pageHeading}>Team Details</h1>
              <InputField
                id="teamName"
                type="text"
                inputLabel="Team Name"
                value={teamName}
                valueUpdater={updateTeamName}
                required={true}
              />
              {!isTeamNameValid && (
                <span className={errorMessage}>Invalid Team Name</span>
              )}
              <DropDownSelectField
                id="teamSize"
                value={teamSize}
                valueUpdater={updateTeamSize}
                inputLabel="Team Size"
                required={true}
                options={["2", "3", "4"]}
                defaultOption="1"
              />
              {!isTeamSizeValid && (
                <span className={errorMessage}>Invalid Team Size</span>
              )}

              {/* <DropDownSelectField
                id="teamCategory"
                value={teamCategory}
                valueUpdater={updateTeamCategory}
                inputLabel="Team Category"
                required={true}
                options={[
                  "All UPES-CSA Members Team - ₹150",
                  "Other Teams - ₹250",
                ]}
                defaultOption="Choose"
              />
              {!isTeamCategoryValid && (
                <span className={errorMessage}>Invalid Team Category</span>
              )} */}
            </div>
          )}

          {/* TEAM DETAILS SECTION END */}

          {/* MEMBER DETAILS SECTION START */}

          {pageVisible === 2 && (
            <div className={formPageDiv}>
              <h1 className={pageHeading}>Team Member Details</h1>
              <div className={teamMemberDetails}>
                <div className={memberSection}>
                  <h3 className={sectionHeading}>Team Lead</h3>

                  <InputField
                    id="teamLeadName"
                    type="text"
                    inputLabel="Name"
                    value={teamLeadName}
                    valueUpdater={updateTeamLeadName}
                    required={true}
                  />
                  {!isTeamLeadNameValid && (
                    <span className={errorMessage}>Invalid Name</span>
                  )}
                  <InputField
                    id="teamLeadEmail"
                    type="email"
                    inputLabel="Email"
                    value={teamLeadEmail}
                    valueUpdater={updateTeamLeadEmail}
                    required={true}
                  />
                  {!isTeamLeadEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                  <InputField
                    id="teamLeadPhone"
                    type="text"
                    inputLabel="Phone Number"
                    value={teamLeadPhone}
                    valueUpdater={updateTeamLeadPhone}
                    required={true}
                  />
                  {!isTeamLeadPhoneValid && (
                    <span className={errorMessage}>Invalid Phone</span>
                  )}
                  <InputField
                    id="teamLeadCourse"
                    type="text"
                    inputLabel="Course"
                    value={teamLeadCourse}
                    valueUpdater={updateTeamLeadCourse}
                    required={true}
                  />
                  {!isTeamLeadCourseValid && (
                    <span className={errorMessage}>Invalid Course</span>
                  )}
                  <InputField
                    id="teamLeadYearOfStudy"
                    type="text"
                    inputLabel="Year of Study"
                    value={teamLeadYearOfStudy}
                    valueUpdater={updateTeamLeadYearOfStudy}
                    required={true}
                  />
                  {!isTeamLeadYearOfStudyValid && (
                    <span className={errorMessage}>Invalid Year of Study</span>
                  )}
                  <DropDownSelectField
                    id="teamLeadUPESStudent"
                    value={teamLeadUPESStudent}
                    valueUpdater={updateTeamLeadUPESStudent}
                    inputLabel="Are you a UPES Student?"
                    required={true}
                    options={["Yes", "No"]}
                    defaultOption="Select"
                  />
                  {!isTeamLeadUPESStudentValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {teamLeadUPESStudent === "yes" && (
                    <InputField
                      id="teamLeadSAPID"
                      type="text"
                      inputLabel="SAP ID"
                      value={teamLeadSapID}
                      valueUpdater={updateTeamLeadSapID}
                      required={teamLeadUPESStudent === "yes"}
                    />
                  )}
                  {teamLeadUPESStudent === "no" && (
                    <InputField
                      id="teamLeadCollege"
                      type="text"
                      inputLabel="College Name"
                      value={teamLeadCollegeName}
                      valueUpdater={updateTeamLeadCollegeName}
                      required={teamLeadUPESStudent === "no"}
                    />
                  )}
                  {!isTeamLeadSapIDValid && (
                    <span className={errorMessage}>Invalid SAP ID</span>
                  )}
                  {!isTeamLeadCollegeNameValid && (
                    <span className={errorMessage}>Invalid College Name</span>
                  )}
                  {teamLeadUPESStudent === "yes" && (
                    <DropDownSelectField
                      id="teamLeadCSAMember"
                      value={teamLeadCSAMember}
                      valueUpdater={updateTeamLeadCSAMember}
                      inputLabel="Are you a CSA Member?"
                      required={true}
                      options={["Yes", "No"]}
                      defaultOption="Select"
                    />
                  )}
                  {!isTeamLeadCSAMemberValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {teamLeadCSAMember === "yes" && (
                    <InputField
                      id="teamLeadCSAID"
                      type="text"
                      inputLabel="CSA ID"
                      value={teamLeadCSAID}
                      valueUpdater={updateTeamLeadCSAID}
                      required={teamLeadCSAMember === "yes"}
                    />
                  )}
                  {!isTeamLeadCSAIDValid && (
                    <span className={errorMessage}>Invalid CSA ID</span>
                  )}
                </div>

                <br />
                <br />

                <div
                  className={memberSection}
                  style={{
                    display: parseInt(teamSize, 10) > 1 ? "block" : "none",
                  }}
                >
                  <div className={memberSection}>
                    <h3 className={sectionHeading}>Member Two</h3>
                    <InputField
                      id="memberTwoName"
                      type="text"
                      inputLabel="Name"
                      value={memberTwoName}
                      valueUpdater={updateMemberTwoName}
                      required={true}
                    />
                    {!isMemberTwoNameValid && (
                      <span className={errorMessage}>Invalid Name</span>
                    )}
                    <InputField
                      id="memberTwoEmail"
                      type="email"
                      inputLabel="Email"
                      value={memberTwoEmail}
                      valueUpdater={updateMemberTwoEmail}
                      required={true}
                    />
                    {!isMemberTwoEmailValid && (
                      <span className={errorMessage}>Invalid Email</span>
                    )}
                    <InputField
                      id="memberTwoPhone"
                      type="text"
                      inputLabel="Phone Number"
                      value={memberTwoPhone}
                      valueUpdater={updateMemberTwoPhone}
                      required={true}
                    />
                    {!isMemberTwoPhoneValid && (
                      <span className={errorMessage}>Invalid Phone</span>
                    )}
                    <InputField
                      id="memberTwoCourse"
                      type="text"
                      inputLabel="Course"
                      value={memberTwoCourse}
                      valueUpdater={updateMemberTwoCourse}
                      required={true}
                    />
                    {!isMemberTwoCourseValid && (
                      <span className={errorMessage}>Invalid Course</span>
                    )}
                    <InputField
                      id="memberTwoYearOfStudy"
                      type="text"
                      inputLabel="Year of Study"
                      value={memberTwoYearOfStudy}
                      valueUpdater={updateMemberTwoYearOfStudy}
                      required={true}
                    />
                    {!isMemberTwoYearOfStudyValid && (
                      <span className={errorMessage}>
                        Invalid Year of Study
                      </span>
                    )}
                    <DropDownSelectField
                      id="memberTwoUPESStudent"
                      value={memberTwoUPESStudent}
                      valueUpdater={updateMemberTwoUPESStudent}
                      inputLabel="Are you a UPES Student?"
                      required={true}
                      options={["Yes", "No"]}
                      defaultOption="Select"
                    />
                    {!isMemberTwoUPESStudentValid && (
                      <span className={errorMessage}>Invalid Option</span>
                    )}
                    {memberTwoUPESStudent === "yes" && (
                      <InputField
                        id="memberTwoSAPID"
                        type="text"
                        inputLabel="SAP ID"
                        value={memberTwoSapID}
                        valueUpdater={updateMemberTwoSapID}
                        required={memberTwoUPESStudent === "yes"}
                      />
                    )}
                    {memberTwoUPESStudent === "no" && (
                      <InputField
                        id="memberTwoCollege"
                        type="text"
                        inputLabel="College Name"
                        value={memberTwoCollegeName}
                        valueUpdater={updateMemberTwoCollegeName}
                        required={memberTwoUPESStudent === "no"}
                      />
                    )}
                    {!isMemberTwoSapIDValid && (
                      <span className={errorMessage}>Invalid SAP ID</span>
                    )}
                    {!isMemberTwoCollegeNameValid && (
                      <span className={errorMessage}>Invalid College Name</span>
                    )}
                    {memberTwoUPESStudent === "yes" && (
                      <DropDownSelectField
                        id="memberTwoCSAMember"
                        value={memberTwoCSAMember}
                        valueUpdater={updateMemberTwoCSAMember}
                        inputLabel="Are you a CSA Member?"
                        required={true}
                        options={["Yes", "No"]}
                        defaultOption="Select"
                      />
                    )}
                    {!isMemberTwoCSAMemberValid && (
                      <span className={errorMessage}>Invalid Option</span>
                    )}
                    {memberTwoCSAMember === "yes" && (
                      <InputField
                        id="memberTwoCSAID"
                        type="text"
                        inputLabel="CSA ID"
                        value={memberTwoCSAID}
                        valueUpdater={updateMemberTwoCSAID}
                        required={memberTwoCSAMember === "yes"}
                      />
                    )}
                    {!isMemberTwoCSAIDValid && (
                      <span className={errorMessage}>Invalid CSA ID</span>
                    )}
                  </div>

                  <br />
                  <br />
                </div>
                <div
                  className={memberSection}
                  style={{
                    display: parseInt(teamSize, 10) > 2 ? "block" : "none",
                  }}
                >
                  <h3 className={sectionHeading}>Member Three</h3>

                  <InputField
                    id="memberThreeName"
                    type="text"
                    inputLabel="Name"
                    value={memberThreeName}
                    valueUpdater={updateMemberThreeName}
                    required={parseInt(teamSize, 10) > 2}
                  />
                  {!isMemberThreeNameValid && (
                    <span className={errorMessage}>Invalid Name</span>
                  )}
                  <InputField
                    id="memberThreeEmail"
                    type="email"
                    inputLabel="Email"
                    value={memberThreeEmail}
                    valueUpdater={updateMemberThreeEmail}
                    required={parseInt(teamSize, 10) > 2}
                  />
                  {!isMemberThreeEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                  <InputField
                    id="memberThreePhone"
                    type="text"
                    inputLabel="Phone Number"
                    value={memberThreePhone}
                    valueUpdater={updateMemberThreePhone}
                    required={parseInt(teamSize, 10) > 2}
                  />
                  {!isMemberThreePhoneValid && (
                    <span className={errorMessage}>Invalid Phone</span>
                  )}
                  <InputField
                    id="memberThreeCourse"
                    type="text"
                    inputLabel="Course"
                    value={memberThreeCourse}
                    valueUpdater={updateMemberThreeCourse}
                    required={parseInt(teamSize, 10) > 2}
                  />
                  {!isMemberThreeCourseValid && (
                    <span className={errorMessage}>Invalid Course</span>
                  )}
                  <InputField
                    id="memberThreeYearOfStudy"
                    type="text"
                    inputLabel="Year of Study"
                    value={memberThreeYearOfStudy}
                    valueUpdater={updateMemberThreeYearOfStudy}
                    required={parseInt(teamSize, 10) > 2}
                  />
                  {!isMemberThreeYearOfStudyValid && (
                    <span className={errorMessage}>Invalid Year of Study</span>
                  )}
                  <DropDownSelectField
                    id="memberThreeUPESStudent"
                    value={memberThreeUPESStudent}
                    valueUpdater={updateMemberThreeUPESStudent}
                    inputLabel="Are you a UPES Student?"
                    required={parseInt(teamSize, 10) > 2}
                    options={["Yes", "No"]}
                    defaultOption="Select"
                  />
                  {!isMemberThreeUPESStudentValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {memberThreeUPESStudent === "yes" && (
                    <InputField
                      id="memberThreeCSAID"
                      type="text"
                      inputLabel="SAP ID"
                      value={memberThreeSapID}
                      valueUpdater={updateMemberThreeSapID}
                      required={memberThreeUPESStudent === "yes"}
                    />
                  )}

                  {memberThreeUPESStudent === "no" && (
                    <InputField
                      id="memberThreeCollege"
                      type="text"
                      inputLabel="College Name"
                      value={memberThreeCollegeName}
                      valueUpdater={updateMemberThreeCollegeName}
                      required={memberThreeUPESStudent === "no"}
                    />
                  )}
                  {!isMemberThreeSapIDValid && (
                    <span className={errorMessage}>Invalid SAP ID</span>
                  )}
                  {!isMemberThreeCollegeNameValid && (
                    <span className={errorMessage}>Invalid College Name</span>
                  )}
                  {memberThreeUPESStudent === "yes" && (
                    <DropDownSelectField
                      id="memberThreeCSAMember"
                      value={memberThreeCSAMember}
                      valueUpdater={updateMemberThreeCSAMember}
                      inputLabel="Are you a CSA Member?"
                      required={parseInt(teamSize, 10) > 2}
                      options={["Yes", "No"]}
                      defaultOption="Select"
                    />
                  )}
                  {!isMemberThreeCSAMemberValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {memberThreeCSAMember === "yes" && (
                    <InputField
                      id="memberThreeCSAID"
                      type="text"
                      inputLabel="CSA ID"
                      value={memberThreeCSAID}
                      valueUpdater={updateMemberThreeCSAID}
                      required={memberThreeCSAMember === "yes"}
                    />
                  )}
                  {!isMemberThreeCSAIDValid && (
                    <span className={errorMessage}>Invalid CSA ID</span>
                  )}
                </div>

                <br />
                <br />

                <div
                  className={memberSection}
                  style={{
                    display: parseInt(teamSize, 10) > 3 ? "block" : "none",
                  }}
                >
                  <h3 className={sectionHeading}>Member Four</h3>

                  <InputField
                    id="memberFourName"
                    type="text"
                    inputLabel="Name"
                    value={memberFourName}
                    valueUpdater={updateMemberFourName}
                    required={parseInt(teamSize, 10) > 3}
                  />
                  {!isMemberFourNameValid && (
                    <span className={errorMessage}>Invalid Name</span>
                  )}
                  <InputField
                    id="memberFourEmail"
                    type="email"
                    inputLabel="Email"
                    value={memberFourEmail}
                    valueUpdater={updateMemberFourEmail}
                    required={parseInt(teamSize, 10) > 3}
                  />
                  {!isMemberFourEmailValid && (
                    <span className={errorMessage}>Invalid Email</span>
                  )}
                  <InputField
                    id="memberFourPhone"
                    type="text"
                    inputLabel="Phone Number"
                    value={memberFourPhone}
                    valueUpdater={updateMemberFourPhone}
                    required={parseInt(teamSize, 10) > 3}
                  />
                  {!isMemberFourPhoneValid && (
                    <span className={errorMessage}>Invalid Phone</span>
                  )}
                  <InputField
                    id="memberFourCourse"
                    type="text"
                    inputLabel="Course"
                    value={memberFourCourse}
                    valueUpdater={updateMemberFourCourse}
                    required={parseInt(teamSize, 10) > 3}
                  />
                  {!isMemberFourCourseValid && (
                    <span className={errorMessage}>Invalid Course</span>
                  )}
                  <InputField
                    id="memberFourYearOfStudy"
                    type="text"
                    inputLabel="Year of Study"
                    value={memberFourYearOfStudy}
                    valueUpdater={updateMemberFourYearOfStudy}
                    required={parseInt(teamSize, 10) > 3}
                  />
                  {!isMemberFourYearOfStudyValid && (
                    <span className={errorMessage}>Invalid Year of Study</span>
                  )}
                  <DropDownSelectField
                    id="memberFourUPESStudent"
                    value={memberFourUPESStudent}
                    valueUpdater={updateMemberFourUPESStudent}
                    inputLabel="Are you a UPES Student?"
                    required={parseInt(teamSize, 10) > 3}
                    options={["Yes", "No"]}
                    defaultOption="Select"
                  />
                  {!isMemberFourUPESStudentValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {memberFourUPESStudent === "yes" && (
                    <InputField
                      id="memberFourCSAID"
                      type="text"
                      inputLabel="SAP ID"
                      value={memberFourSapID}
                      valueUpdater={updateMemberFourSapID}
                      required={memberFourUPESStudent === "yes"}
                    />
                  )}

                  {memberFourUPESStudent === "no" && (
                    <InputField
                      id="memberFourCollege"
                      type="text"
                      inputLabel="College Name"
                      value={memberFourCollegeName}
                      valueUpdater={updateMemberFourCollegeName}
                      required={memberFourUPESStudent === "no"}
                    />
                  )}
                  {!isMemberFourSapIDValid && (
                    <span className={errorMessage}>Invalid SAP ID</span>
                  )}
                  {!isMemberFourCollegeNameValid && (
                    <span className={errorMessage}>Invalid College Name</span>
                  )}
                  {memberFourUPESStudent === "yes" && (
                    <DropDownSelectField
                      id="memberFourCSAMember"
                      value={memberFourCSAMember}
                      valueUpdater={updateMemberFourCSAMember}
                      inputLabel="Are you a CSA Member?"
                      required={parseInt(teamSize, 10) > 3}
                      options={["Yes", "No"]}
                      defaultOption="Select"
                    />
                  )}
                  {!isMemberFourCSAMemberValid && (
                    <span className={errorMessage}>Invalid Option</span>
                  )}
                  {memberFourCSAMember === "yes" && (
                    <InputField
                      id="memberFourCSAID"
                      type="text"
                      inputLabel="CSA ID"
                      value={memberFourCSAID}
                      valueUpdater={updateMemberFourCSAID}
                      required={memberFourCSAMember === "yes"}
                    />
                  )}
                  {!isMemberFourCSAIDValid && (
                    <span className={errorMessage}>Invalid CSA ID</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* MEMBER DETAILS SECTION END */}

          {/* PAYMENT DETAILS SECTION START */}

          {pageVisible === 3 && (
            <div className={formPageDiv}>
              <h1 className={pageHeading}>Payment Section</h1>
              <div className={paymentDetails}>
                <div className={paymentInstructions}>
                  <h3 className={paymentText}>
                    <strong>
                      Registration Fee - ₹
                      {teamLeadCSAMember === "yes" ||
                      memberTwoCSAMember === "yes" ||
                      memberThreeCSAMember === "yes" ||
                      memberFourCSAMember === "yes"
                        ? 200
                        : 250}
                      {console.log(teamLeadCSAMember)}
                    </strong>
                  </h3>
                  <h3 className={paymentHeading}>Payment Instructions</h3>
                  <p className={paymentText}>
                    1. Scan the QR code to make the payment.
                  </p>
                  <p className={paymentText}>
                    2. After making the payment, fill the form and upload the
                    screenshot of the payment.
                  </p>
                  <p className={paymentText}>
                    3. After the payment is verified, you will receive a
                    confirmation email.
                  </p>
                </div>
                <div className={qrCode}>
                  <img
                    src="/img/PaymentModes/QR.jpeg"
                    alt="qrCode"
                    className={qrCodeImg}
                  />
                </div>
                <br />
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
                  valueUpdater={updateHackathonScreenShot}
                  required={true}
                />
              </div>
            </div>
          )}

          {/* PAYMENT DETAILS SECTION END */}

          <FormNavigation
            pageVisible={pageVisible}
            moveToPreviousPage={moveToPreviousPage}
            moveToNextPage={moveToNextPage}
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
