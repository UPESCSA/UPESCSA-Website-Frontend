import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CsrPage from "./pages/CsrPage/CsrPage";
import CommitteePageIndividual from "./pages/CommitteePageIndividual/CommitteePageIndividual";
import EventsPage from "./pages/EventsPage/EventsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Evortal from "./pages/EvortalPage/EvortalPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import ManagementPage from "./pages/TeamPage/TeamPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
// import HackerSummitRegistrationPage from "./pages/EventRegistrationPage/HackerSummitRegistrationPage";
import FrenzyPitchRegistrationPage from "./pages/EventRegistrationPage/FrenzyPitchRegistrationPage";
import UltimateShowdownRegistrationPage from "./pages/EventRegistrationPage/UltimateShowDownRegistrationPage";
import VirtualEscapeRoomRegistrationPage from "./pages/EventRegistrationPage/VirtualEscapeRoomRegistrationPage";

import HackathonHomePage from "./pages/Hackathon/HackathonHomePage/HackathonHomePage";
// import RegistrationPage from "./pages/Hackathon/RegistrationPage/RegistrationPage";

import RegistrationSuccess from "./pages/RegistrationSuccess/RegistrationSuccess";
import ProblemStatementPage from "./pages/Hackathon/ProblemStatementPage/ProblemStatementPage";
import ProblemStatementDashboard from "./pages/Hackathon/ProblemStatementDashboard/ProblemStatementDashboard";

import EventRegistrationForm from "./pages/EventRegistrationPage/EventRegistrationForm";
import AlumniPage from "./pages/AlumniPage/AlumniPage";
import RegistrationDriveForm from "./pages/EventRegistrationPage/RegistrationDrive/RegistrationDriveForm";
import FuntopiaRegistrationsPage from "./pages/EventRegistrationPage/FuntopiaRegistrationPage/FuntopiaRegistrationsPage";

import EventRegistration from "./pages/EventRegistrationPage/EventRegistrationPage/EventRegistration";
import RegistrationPage from "./pages/EventRegistrationPage/EventRegistrationPage/RegistrationPage/RegistrationPage";
import PageHeading from "./components/PageHeading/PageHeading";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";

function App() {
  return (
    <div className="mainDiv">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Contact />
            </>
          }
        />
        <Route
          path="/csr"
          element={
            <>
              <Navbar />
              <CsrPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <ManagementPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <EventsPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <BlogsPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/alumni"
          element={
            <>
              <Navbar />
              <ComingSoonPage />
              {/* <AlumniPage /> */}
              <Contact />
            </>
          }
        />
        {/* <Route
          path="/evortal"
          element={
            <>
              <Navbar />
              <Evortal />
              <Contact />
            </>
          }
        /> */}
        <Route
          path="/registrationSuccess"
          element={
            <>
              <RegistrationSuccess />
            </>
          }
        />
        <Route
          path="/committees"
          element={
            <>
              <Navbar />
              <CommitteePage />
              <Contact />
            </>
          }
        />
        <Route
          path="/committees/*"
          element={
            <>
              <Navbar />
              <CommitteePageIndividual />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <PageNotFound />
              <Contact />
            </>
          }
        />

        {/* EVENT ROUTES */}
        {/* // * Active Events */}
        {
          <Route
            path="/AlumVerse"
            element={
              <>
                <Navbar />
                <EventRegistrationForm />
                <Contact />
              </>
            }
          />
        }

        {/* // * Past Events */}
        {/* <Route
          path="/WebGenesis"
          element={
            <>
              <Navbar />
              <EventRegistrationForm />
              <Contact />
            </>
          }
        /> */}
        {/* <Route
            path="/Register"
            element={
              <>
                <Navbar />
                <RegistrationDriveForm />
                <Contact />
              </>
            }
          /> */}
        {/* <Route
          path="/Entropedia"
          element={
            <>
              <Navbar />
              <EventRegistration />
            </>
          }
        />

        <Route path="/Entropedia/register" element={<RegistrationPage />} /> */}

        {/* <Route
          path="/AzureCloudScape"
          element={
            <>
              <Navbar />
              <EventRegistrationForm />
              <Contact />
            </>
          }
        /> */}

        {/* <Route
          path="/Funtopia/Registration"
          element={
            <>
              <Navbar />
              <FuntopiaRegistrationsPage />
              <Contact />
            </>
          }
        /> */}
        {/* <Route
          path="/memoir3.0"
          element={
            <>
              <Navbar />
              <EventRegistrationForm />
              <Contact />
            </>
          }
        /> */}
        {/* <Route
          path="/evortal/hackersummit"
          element={<>      <Navbar /><HackerSummitRegistrationPage /></>}
        /> */}
        {/* <Route
          path="/evortal/frenzypitch"
          element={
            <>
              <Navbar />
              <FrenzyPitchRegistrationPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/evortal/virtualescaperoom"
          element={
            <>
              <Navbar />
              <VirtualEscapeRoomRegistrationPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/evortal/ultimateshowdown"
          element={
            <>
              <Navbar />
              <UltimateShowdownRegistrationPage />
              <Contact />
            </>
          }
        /> */}

        {/* <Route path="/hackathon4.0/" element={<HackathonHomePage />} /> */}
        {/* <Route path="/hackathon4.0/register" element={<RegistrationPage />} /> */}
        {/* <Route
          path="/hackathon4.0/problemStatements"
          element={<ProblemStatementPage />}
        />
        <Route
          path="/hackathon4.0/jdfsdjgf73428"
          element={<ProblemStatementDashboard />}
        /> */}
      </Routes>
    </div>
  );
}
export default App;
