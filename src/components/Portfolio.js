import { heading } from "../functionality.js";
import PortfolioFooter from "./PortfolioFooter.js";
import PortfolioHeader from "./PortfolioHeader.js";
import PortfolioBody from "./PortfolioBody.js";

const Portfolio = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="portfolio">
      <h1> {heading("03. ", " <portfolio>")} </h1>
      <div className="row mt-5">
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4">
            <PortfolioHeader
              github="https://github.com/Kafolabi/simple-calculator"
              link="https://simple-calculator293.netlify.app"
            />
            <PortfolioBody
              heading="Simple Calculator App"
              paragraph="A simple calculator app that implements basic functions such as
                addition, subtraction, multiplication and division using HTML,
                CSS and vanilla JS"
            />
            <PortfolioFooter lang1="HTML" lang2="CSS" lang3="Javascript" />
          </div>
        </div>
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4">
            <PortfolioHeader
              github="https://github.com/Kafolabi/blogr"
              link="https://blogr-fictional.netlify.app"
            />
            <PortfolioBody
              heading="Landing Page for Fictional Writing Company"
              paragraph="A fully responsive landing page with a neat and elegant design
              for a fictional writing company named Blogr, powered with
              Bootstrap, HTML and CSS"
            />
            <PortfolioFooter lang1="Bootstrap" lang2="HTML" lang3="CSS" />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4">
            <PortfolioHeader
              github="https://github.com/Kafolabi/pig-game"
              link="https://main--wonderful-jackson-88b8c1.netlify.app/"
            />
            <PortfolioBody
              heading="Pig Game"
              paragraph="A basic dice game with an intuitive User Interface (UI) powered
              and implemented with JavaScript."
            />
            <PortfolioFooter lang1="Javascript" lang2="CSS" lang3="HTML" />
          </div>
        </div>
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4">
            <PortfolioHeader
              github="https://github.com/Kafolabi/portfolio"
              link="#"
            />
            <PortfolioBody
              heading="Portfolio Page"
              paragraph="My newest project 😀😀😀, my full-fledged and responsive
              portfolio page powered with React, Bootstrap and Nodejs"
            />
            <PortfolioFooter lang1="React" lang2="Bootstrap" lang3="Git" />
          </div>
        </div>
      </div>
      <h1 className="opacity-50 text-end"> {heading("", "</portfolio>")} </h1>
    </section>
  );
};

export default Portfolio;
