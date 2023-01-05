// import logo from "./assets/img/Unknown-3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import TimeL from "./components/Timeline";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <TimeL/>
      {/* <NewMilestone />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
