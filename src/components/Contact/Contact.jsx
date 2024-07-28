import styles from "./Contact.module.css";

import Socials from "../Socials/Socials";
import Logo from "../Logo/Logo";

// CSS STYLES
const {
  contactContainer,
  contactDiv,
  socialsDiv,
  logoDiv,
  contactInfoDiv,
  contactField,
  contactFieldLogo,
  contactFieldInfo,
  copyRight,
} = styles;

const Contact = () => {
  return (
    <div className={contactContainer} id="contact">
      <div className={contactDiv}>
        <div className={socialsDiv}>
          <p>Follow us!</p>
          <Socials orientation="row" gap="1rem" />
        </div>
        <div className={logoDiv}>
          <Logo src="/logo/upescsa.png" />
        </div>
        <div className={contactInfoDiv}>
          <div className={contactField}>
            <img
              loading="lazy"
              className={contactFieldLogo}
              src="/icons/location.png"
              alt="location"
            />
            <p className={contactFieldInfo}>
              SOCS, University of <br /> Petroleum & Energy <br /> Studies,
              Dehradun
            </p>
          </div>
          <div className={contactField}>
            <img
              loading="lazy"
              className={contactFieldLogo}
              src="/icons/phone.png"
              alt="phone"
            />
            <p className={contactFieldInfo}>
              +91 72890 10301 <br /> +91 62393 21512
            </p>
          </div>
          <div className={contactField}>
            <img
              loading="lazy"
              className={contactFieldLogo}
              src="/icons/email.png"
              alt="email"
            />
            <p className={contactFieldInfo}>support@upescsa.in</p>
          </div>
        </div>
      </div>
      <div className={copyRight}>
        Copyright © 2024 All rights reserved | Designed and Developed by UPES
        CSA Technical Team
      </div>
    </div>
  );
};

export default Contact;
