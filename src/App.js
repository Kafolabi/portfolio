import React, { useState, useEffect } from "react";
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
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSun, faMoon);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <div className="container-fluid p-0">
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Home theme={theme} />
        <About id="about" theme={theme} />
        <Skills id="skills" theme={theme} />
        <Portfolio id="portfolio" theme={theme} />
        <Career id="career" theme={theme} />
        <ContactMe id="contact" theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
