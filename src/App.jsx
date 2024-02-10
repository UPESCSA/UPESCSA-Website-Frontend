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
import ValorantPage from "./pages/EventsPage/ValorantPage/ValorantPage";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/csr" element={<CsrPage />} />
        <Route path="/team" element={<ManagementPage />} />
        <Route path="/committees" element={<CommitteePage />} />
        <Route path="/committees/*" element={<CommitteePageIndividual />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/valorant" element={<ValorantPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/evortal" element={<Evortal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Contact />
    </div>
  );
}
export default App;
