import HackathonNavbar from "../../../components/HackathonNavbar/HackathonNavbar";
import AboutHackathon from "../../../sections/AboutHackathon/AboutHackathon";
import ContactSection from "../../../sections/ContactSection/ContactSection";
import FaqSection from "../../../sections/FaqSection/FaqSection";
import HomeSection from "../../../sections/HomeSection/HomeSection";
import RegistrationPromptSection from "../../../sections/RegistrationPromptSection/RegistrationPromptSection";
import SponsorsSection from "../../../sections/SponsorsSection/SponsorsSection";
import styles from "./Entropedia.module.css";
import Timeline from "../../../sections/TimelineSection/TimelineSection";

const { mainDiv } = styles;

const EntropediaForm = () => {
  return (
    <div className={mainDiv}>
      <HackathonNavbar />
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

export default EntropediaForm;
