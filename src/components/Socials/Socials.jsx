import styles from "./Socials.module.css";
import PropTypes from "prop-types";

// CSS STYLES
const { socialsContainer } = styles;

// LINKS & IMAGES
const socials = [
  {
    link: "https://www.instagram.com/upescsa/?hl=en",
    image: "/icons/instagram.png",
    alt: "instagram",
  },

  {
    link: "https://www.linkedin.com/company/upescsa/",
    image: "/icons/linkedin.png",
    alt: "linkedin",
  },
  {
    link: "https://www.youtube.com/channel/UCOQTG59VV6-1czSs57XAFrA",
    image: "/icons/youtube.png",
    alt: "youtube",
  },
  {
    link: "https://www.facebook.com/upescsa/",
    image: "/icons/facebook.png",
    alt: "facebook",
  },
  {
    link: "https://twitter.com/upescsa",
    image: "/icons/twitterx.png",
    alt: "twitterx",
  },
  {
    link: "https://www.linkedin.com/company/upes-socs/",
    image: "/icons/linkedin.png",
    alt: "linkedinUPES",
  },
  {
    link: "https://www.instagram.com/upes_schoolofcomputerscience/?hl=en",
    image: "/icons/instagram.png",
    alt: "instagramUPES",
  },
];

const Socials = ({ orientation, closeNavbar, gap }) => {
  return (
    <div
      className={socialsContainer}
      style={{ flexDirection: orientation, gap }}
    >
      {socials.map((item) => (
        <a
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onClick={closeNavbar}
        >
          <img loading="lazy" src={item.image} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

Socials.propTypes = {
  orientation: PropTypes.string,
  closeNavbar: PropTypes.func,
  gap: PropTypes.string,
};

export default Socials;
