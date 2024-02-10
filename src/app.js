import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CsrPage from "./pages/CsrPage/CsrPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import CommitteePageIndividual from "./pages/CommitteePageIndividual/CommitteePageIndividual";
import EventsPage from "./pages/EventsPage/EventsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Evortal from "./pages/EvortalPage/EvortalPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import ValorantPage from "./pages/EventsPage/ValorantPage/ValorantPage";
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mainDiv"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(HomePage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/csr",
    element: /*#__PURE__*/React.createElement(CsrPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/team",
    element: /*#__PURE__*/React.createElement(TeamPage, {
      activeTab: "team"
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/committee",
    element: /*#__PURE__*/React.createElement(TeamPage, {
      activeTab: "committee"
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/team/*",
    element: /*#__PURE__*/React.createElement(CommitteePageIndividual, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/events",
    element: /*#__PURE__*/React.createElement(EventsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/events/valorant",
    element: /*#__PURE__*/React.createElement(ValorantEventsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/blogs",
    element: /*#__PURE__*/React.createElement(BlogsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/evortal",
    element: /*#__PURE__*/React.createElement(Evortal, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(PageNotFound, null)
  })), /*#__PURE__*/React.createElement(Contact, null));
}
export default App;
