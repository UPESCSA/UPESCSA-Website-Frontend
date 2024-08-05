import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./RegistrationSuccess.module.css";

const {
  mainDiv,
  successAnimation,
  fadeinAnimation,
  checkmark,
  checkmarkCheck,
  checkmarkCircle,
  csalogo,
  csaheading,
  csatextBox,
  csabackToHome,
  Note,
  NoteMail,
} = styles;

const RegistrationSuccess = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [searchParams] = useSearchParams();

  const wgLink = "https://chat.whatsapp.com/" + searchParams.get("wg");
  const Sap = searchParams.get("Sap");
  const Name = searchParams.get("Name");
  const Email = searchParams.get("Email");
  const Event = searchParams.get("Event");
  const mailBody = `Name: ${Name},
  Sap: ${Sap},
  Email: ${Email},
  Event Name: ${Event}`;

  useEffect(() => {
    const mainBoxHeading = document.getElementById("mainBoxHeading");
    const mainBoxText = document.getElementById("mainBoxText");
    const backToHome = document.getElementById("backToHome");
    setTimeout(() => {
      document.getElementById("successAnimation").style.display = "none";
      document.getElementById("csalogobox").style.display = "block";
    }, 2000);
    setTimeout(() => {
      mainBoxHeading.classList.add(fadeinAnimation);
      mainBoxText.classList.add(fadeinAnimation);
      backToHome.classList.add(fadeinAnimation);
    }, 2000);
    setTimeout(() => {
      mainBoxHeading.classList.remove(fadeinAnimation);
      mainBoxText.classList.remove(fadeinAnimation);
      backToHome.classList.remove(fadeinAnimation);
      mainBoxHeading.style.opacity = "1";
      mainBoxText.style.opacity = "1";
      backToHome.style.opacity = "1";
    }, 3500);
  }, []);
  return (
    <div className={mainDiv}>
      <div className={successAnimation} id="successAnimation">
        <svg
          className={checkmark}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className={checkmarkCircle}
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className={checkmarkCheck}
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div className={csalogo} id="csalogobox">
        <Link to="/">
          <img
            loading="lazy"
            id="csalogo"
            src="/logo/upescsa_nobg_high.png"
            alt="CSA Logo"
          />
        </Link>
        <div className={csaheading} id="mainBoxHeading">
          <h1>Thank you for Registering!</h1>
        </div>
        <div className={csatextBox} id="mainBoxText">
          <p>Please join our Whatsapp Group for further updates!</p>
          <br />
          <a
            href={wgLink}
            target="_blank"
            rel="noreferrer"
            className={csabackToHome}
            id="backToHome"
          >
            Join Whatsapp
          </a>
          <div className={Note}>
            <p>
              Note! If you don't receive the confirmation email, contact{"    "}
              <a
                href={`mailto:support@upescsa.in?subject=CONFORMATION EMAIL NOT RECEIVED &body=${mailBody}`}
                target="_blank"
                className={NoteMail}
              >
                support@upescsa.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
