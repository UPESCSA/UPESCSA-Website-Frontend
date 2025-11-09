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
      title: "Events",
      action: "/events",
    },
    {
      title: "Team",
      action: "/team",
    },
    {
      title: "Committees",
      action: "/committees",
    },
    {
      title: "CSR",
      action: "/csr",
    },
    {
      title: "Blogs",
      action: "/blogs",
    },
    {
      title: "Alumni",
      action: "/alumni",
    },
    {
      title: "Contact Us",
      action: "#contact",
    },
    {
      title: "Register Now",
      action: "/register",
      glow: true,
    },
    // {
    //   title: "AWS ACD",
    //   action: "/ACD",
    //   glow: true,
    // },
    // {
    //   title: "AlumVerse",
    //   action: "/alumverse",
    //   glow: true,
    // },
    // 
    // {
    //   title: "ENTROPEDIA 2.0",
    //   action: "/entropedia",
    //   glow: true,
    // },
    // {
    //   title: "HACKATHON 4.0",
    //   action: "/hackathon4.0",
    // },
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

  if (screenWidth < 1100) {
    navbarStyle = {
      backgroundColor: "var(--navDark)",
    };
  } else {
    navbarStyle = {
      backgroundColor: scrollPosition > 0 ? "var(--navDark)" : "transparent",
    };
  }

  const displayNavBar = () => {
    if (window.innerWidth > 1100) {
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
            loading="lazy"
            className={hamburger}
            src="/icons/hamburgercross.png"
            alt="hamburger"
          />
        ) : (
          <img
            loading="lazy"
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
              closeNavbar={displayNavBar}
            />
            {/* <Logo height="4rem" /> */}
          </div>
          <ul className={navLinks}>
            <hr className={mobileLine} />
            {navlinks.map((navlink) =>
              navlink.glow ? (
                <Navlinks
                  key={navlink.title}
                  title={navlink.title}
                  action={navlink.action}
                  separatePage={navlink.separatePage}
                  closeNavbar={displayNavBar}
                  glow={true}
                />
              ) : (
                <Navlinks
                  key={navlink.title}
                  title={navlink.title}
                  action={navlink.action}
                  separatePage={navlink.separatePage}
                  closeNavbar={displayNavBar}
                  glow={false}
                />
              )
            )}

            {/* <hr className={verticalLine} />
            <Navlinks
              title={"HACKATHON 4.0"}
              action={"/hackathon4.0"}
              separatePage={true}
              closeNavbar={displayNavBar}
              textStyle={{ color: "gold" }}
            />
            <hr className={mobileLine} /> */}
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
