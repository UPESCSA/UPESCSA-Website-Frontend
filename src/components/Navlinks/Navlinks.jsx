import Proptypes from "prop-types";
import styles from "./Navlinks.module.css";

import { Link } from "react-router-dom";

// CSS STYLES
const { navLinks, glowText } = styles;

const Navlinks = ({ title, action, size, textStyle, closeNavbar, glow }) => {
  return (
    <li
      className={navLinks}
      style={{ fontSize: size }}
      onClick={() => closeNavbar}
    >
      {glow ? (
        <Link to={action} className={glowText} style={textStyle}>
          {title}
        </Link>
      ) : (
        <Link to={action} style={textStyle}>
          {title}
        </Link>
      )}
    </li>
  );
};

Navlinks.propTypes = {
  title: Proptypes.string.isRequired,
  action: Proptypes.string.isRequired,
  size: Proptypes.string,
  textStyle: Proptypes.object,
  closeNavbar: Proptypes.func.isRequired,
};

export default Navlinks;
