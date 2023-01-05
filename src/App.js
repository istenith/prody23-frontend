// import logo from "./assets/img/Unknown-3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import TimeL from "./components/Timeline";
import Sponsor from "./components/sponsors";
import Aboutus from "./components/aboutus";
import FAQ from "./components/Faq";
import Faq from "./components/Faq";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <TimeL/>
      <Aboutus/>
      <Faq/>
      <Footer/>
      {/* <Sponsor/> */}
      {/* <NewMilestone />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
