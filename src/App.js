import "./App.css";
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import About from "./components/About";
import Skills from "./components/Skills.js";
import Portfolio from "./components/Portfolio.js";
import Career from "./components/Career";
import ContactMe from "./components/Get-in-touch";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function App() {
  return (
    <div>
      <div className="container">
        <Navigation />
        <Home />
        <About id="about" />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Career id="career" />
        <ContactMe id="contact" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
