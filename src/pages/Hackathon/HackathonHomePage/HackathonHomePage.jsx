import HackthonNavbar from "../../../components/HackathonNavbar/HackathonNavbar";

import AboutHackathon from "../../../sections/AboutHackathon/AboutHackathon";
import CommunityPartnerSection from "../../../sections/CommunityPartnerSection/CommunityPartnerSection";
import CampusPartnersSection from "../../../sections/CampusPartnersSection/CampusPartnersSection";
import FaqSection from "../../../sections/FaqSection/FaqSection";
import RegistrationPromptSection from "../../../sections/RegistrationPromptSection/RegistrationPromptSection";
import SponsorsSection from "../../../sections/SponsorsSection/SponsorsSection";

import ContactSection from "../../../sections/ContactSection/ContactSection";
import Panelist from "../../../sections/PanelistSection/Panelist";
import Timeline from "../../../sections/TimelineSection/TimelineSection";
import styles from "./HackathonHomePage.module.css";
import HomeSection from "../../../sections/HomeSection/HomeSection";

const { mainDiv } = styles;

const HackathonHomePage = () => {
  return (
    <div className={mainDiv}>
      <HackthonNavbar />
      <HomeSection />
      <AboutHackathon />
      {/* <CommunityPartnerSection /> */}
      <Timeline />
      {/* <Panelist /> */}
      <SponsorsSection />
      {/* <CampusPartnersSection /> */}
      <FaqSection />
      <RegistrationPromptSection />
      <ContactSection />
    </div>
  );
};

export default HackathonHomePage;
