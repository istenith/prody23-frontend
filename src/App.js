// import logo from "./assets/img/Unknown-3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import TimeL from "./components/Timeline";
// import Aboutus from "./components/aboutus";
// import FAQ from "./components/Faq";
// import Contact from "./components/contact/contact"
import { Contactss } from "./components/contact/contact";
import Faq from "./components/Faq";
import Footer from "./components/footer";
import Sponsors from "./components/Sponsors/Sponsors";
import Eventss from "./components/Eventss/event";
import { Footerr } from "./components/Footerr/Footerr";
import { usestate, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";

// import { Event } from "./components/Eventss/event";
function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Banner />
        <Skills />
        <TimeL />
        <Eventss />
        <Sponsors />
        <Faq />
        <Contactss />
        {/* <Footer /> */}
        {/* <Sponsor/> */}
        {/* <NewMilestone />
      <Projects />
      <Contact />
      <Footer /> */}
        <Footerr />
      </div>
    </div>
  );
}

export default App;
