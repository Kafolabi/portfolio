import { heading } from "../functionality.js";
import PortfolioFooter from "./PortfolioFooter.js";
import PortfolioHeader from "./PortfolioHeader.js";
import PortfolioBody from "./PortfolioBody.js";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="portfolio">
      <h1> {heading("03. ", " <Work & Projects>")} </h1>

      {/* First Row of Cards (now only two cards) */}
      <div className="row mt-5">
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              github="https://github.com/Kafolabi/mortgage-repayment-app"
              link="https://taic.com.ng/"
            />
            <PortfolioBody
              heading="The Aeronautical Integration Company"
              paragraph="Landing page for TAIC - an aeronautical integration company that helps organizations streamline and optimize their aviation operations by integrating systems, resources, and services. In addition to providing such information, potential clients could also book consultation sessions with the firm
"
            />
            <PortfolioFooter
              lang1="React"
              lang2="Tailwindcss"
            />
          </motion.div>
        </div>
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              // github="https://github.com/Kafolabi/mortgage-repayment-app"
              link="https://euphorialook.com/"
            />
            <PortfolioBody
              heading="Euphorialook ecommerce Website"
              paragraph="A fully functional ecommerce website for euphorialook ltd - a leading fashion brand; that allows users to browse products, add them to a cart, and make purchases. Built with Wordpress and designed with elementor."
            />
            <PortfolioFooter
              lang1="Wordpress"
              lang2="Elementor"
              lang3="namecheap"
            />
          </motion.div>
        </div>
      </div>

      {/* Second Row of Cards */}

      <div className="row mt-5">
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              github="https://github.com/Kafolabi/fast-react-pizza"
              link="https://fast-react-pizza-eta-sandy.vercel.app/"
            />
            <PortfolioBody
              heading="Fast React Pizza"
              paragraph="Fast React Pizza is a web application that allows users to order pizzas online. Users can customize their pizzas, add toppings, and view their order summary. This project was built with React, react router for routing and Redux for state management."
            />
            <PortfolioFooter lang1="React" lang2="Redux" lang3="React Router" />
          </motion.div>
        </div>
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              github="https://github.com/Kafolabi/forkify"
              link="https://forkify-nine-tan.vercel.app/"
            />
            <PortfolioBody
              heading="Forkify recipe application"
              paragraph="A full-fledged and responsive recipe application powered with Javascript, tailwindcss and Nodejs. Search any foreign dish, add ingredient to shopping list, and view recipe details."
            />
            <PortfolioFooter
              lang1="Javascript"
              lang2="TailwindCSS"
              lang3="Nodejs"
            />
          </motion.div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              github="https://github.com/Kafolabi/mapty"
              link="https://my-mapty-fitness.netlify.app/"
            />
            <PortfolioBody
              heading="Mapty Web app"
              paragraph="Mapty is a web application that allows users to log their workouts on a map. Users can track their running and cycling activities, view their workout history, and analyze their performance over time.
              This project uses advanced ES6+ JavaScript concepts, such as async functions, classes, modules, and local storage."
            />
            <PortfolioFooter lang1="HTML" lang2="CSS" lang3="ES6+" />
          </motion.div>
        </div>
        <div className="col-sm container">
          <motion.div
            className="card rounded-4 bg-transparent border-0 shadow-lg my-4 pt-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PortfolioHeader
              github="https://github.com/Kafolabi/portfolio"
              link="#"
            />
            <PortfolioBody
              heading="Portfolio Page"
              paragraph="My full-fledged and responsive
              portfolio page powered with React, Bootstrap and Nodejs"
            />
            <PortfolioFooter lang1="React" lang2="Bootstrap" lang3="Git" />
          </motion.div>
        </div>
      </div>

      <h1 className="opacity-50 text-end"> {heading("", "</portfolio>")} </h1>
    </section>
  );
};

export default Portfolio;
