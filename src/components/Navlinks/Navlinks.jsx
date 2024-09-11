import PropTypes from "prop-types";
import styles from "./Navlinks.module.css";

import { Link } from "react-router-dom";

// CSS STYLES
const { navLinks, glowText } = styles;

const scroll = (element) => {
  const ElementToView = document.querySelector(element);
  if (ElementToView) {
    ElementToView.scrollIntoView({ behavior: "smooth" });
  }
};

const Navlinks = ({ title, action, size, textStyle, closeNavbar, glow }) => {
  const handleClick = () => {
    closeNavbar;
    scroll(action);
  };

  return (
    <li className={navLinks} style={{ fontSize: size }} onClick={handleClick}>
      {glow ? (
        <Link to={action} className={glowText} style={textStyle}>
          {title}
        </Link>
      ) : action.startsWith("#") ? (
        <span style={{ cursor: "pointer", color: "white" }}>{title}</span>
      ) : (
        <Link to={action} style={textStyle}>
          {title}
        </Link>
      )}
    </li>
  );
};

Navlinks.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  size: PropTypes.string,
  textStyle: PropTypes.object,
  closeNavbar: PropTypes.func.isRequired,
  glow: PropTypes.bool,
};

export default Navlinks;
