import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// COMPONENTS
// import Logo from "../Logo/Logo";
import Navlinks from "../Navlinks/Navlinks";
import Socials from "../Socials/Socials";

// CSS STYLES
const {
  navbarContainer,
  navBarDiv,
  navbar,
  hamburgerDiv,
  hamburger,
  logoDiv,
  navLinks,
  verticalLine,
  mobileLine,
  socialsDiv,
  scrollUp,
  scrollDown,
} = styles;

const Navbar = () => {
  // STATES
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // DATA
  const navlinks = [
    {
      title: "About",
      action: "/#about",
      separatePage: false,
    },
    {
      title: "Events",
      action: "/#events",
      separatePage: false,
    },
    {
      title: "Alliance",
      action: "/#alliance",
      separatePage: false,
    },
    {
      title: "Team",
      action: "/team",
      separatePage: true,
    },
    {
      title: "Committees",
      action: "/committees",
      separatePage: true,
    },
    {
      title: "CSR",
      action: "/csr",
      separatePage: true,
    },
    {
      title: "Blogs",
      action: "/blogs",
      separatePage: true,
    },
  ];

  // FUNCTIONS

  let navbarStyle = {};

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (screenWidth < 950) {
    navbarStyle = {
      backgroundColor: "var(--navDark)",
    };
  } else {
    navbarStyle = {
      backgroundColor: scrollPosition > 50 ? "var(--navDark)" : "transparent",
    };
  }

  const displayNavBar = () => {
    if (screen.width > 950) {
      return;
    }
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      const navbar = document.getElementById("navbar");
      if (newOpen) {
        navbar.classList.remove(scrollUp);
        navbar.classList.add(scrollDown);
        document.getElementById("navbardiv").style.height = "100vh";
      } else {
        navbar.classList.remove(scrollDown);
        navbar.classList.add(scrollUp);
        document.getElementById("navbardiv").style.height = "0vh";
      }
      return newOpen;
    });
  };

  return (
    <div className={navbarContainer} style={navbarStyle}>
      <div className={hamburgerDiv} onClick={displayNavBar}>
        {open ? (
          <img
            className={hamburger}
            src="/icons/hamburgercross.png"
            alt="hamburger"
          />
        ) : (
          <img
            className={hamburger}
            src="/icons/hamburger.png"
            alt="hamburger"
          />
        )}
      </div>
      <div className={navBarDiv} id="navbardiv" onClick={displayNavBar}>
        <div className={navbar} id="navbar">
          <div className={logoDiv}>
            <Navlinks
              title={"UPES CSA"}
              size={"1.4rem"}
              action={"/#"}
              separatePage={false}
              closeNavbar={displayNavBar}
            />
            {/* <Logo height="4rem" /> */}
          </div>
          <ul className={navLinks}>
            <hr className={mobileLine} />
            {navlinks.map((navlink) => (
              <Navlinks
                key={navlink.title}
                title={navlink.title}
                action={navlink.action}
                separatePage={navlink.separatePage}
                closeNavbar={displayNavBar}
              />
            ))}
            <hr className={verticalLine} />
            <Navlinks
              title={"Evortal"}
              action={"/evortal"}
              separatePage={true}
              closeNavbar={displayNavBar}
            />
            <hr className={mobileLine} />
          </ul>
          <div className={socialsDiv}>
            <Socials orientation={"row"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
