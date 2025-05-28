import React, { useEffect, useState } from "react";
import Social from "./Social.js";
import portfolioPic from "./portfolio-pic3.jpg";
import Caption from "./HeadingCaption.js";
import { motion } from "framer-motion";

const Heading = () => {
  const [text, setText] = useState("");
  const fullText =
    "I am a front-end developer making great stuff happen since 2020! Currently building awesome web applications with React and WordPress!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="mt-5 pt-3 mb-5 pb-5">
      <div className="row">
        <div className="col-sm-1 pt-4">
          {window.screen.width > 767 && <Social />}
        </div>
        <div className="col-sm-5 pt-md-5">
          <motion.div
            className="display-4 fw-bold motion-placeholder"
            initial="hidden"
            animate="visible"
            layout
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
              },
            }}
          >
            Hi, I'm <span className="text-color-light">Kolade</span>
          </motion.div>

          <motion.div
            className="display-4 fw-bold pt-3 motion-placeholder"
            initial="hidden"
            animate="visible"
            layout
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
              },
            }}
          >
            <span className="text-color-light">front-end developer</span>
          </motion.div>
        </div>

        <div className="col-sm-6">
          <motion.img
            src={portfolioPic}
            style={{ zIndex: "1", width: "200px", height: "300px" }} // Set explicit dimensions
            alt="pic-of-me"
            className="mt-5 mb-5 w-50 h-75 rounded mx-auto d-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 2.5, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        </div>
      </div>

      <p className="p1 fs-5 pt-1 pt-lg-2 container typing-animation">{text}</p>

      <div className="container">
        <motion.a href="#contact">
          <motion.button
            className="bg-cta btn btn2 text-white ms-3 mt-4 p-3 fs-5 px-5"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
          >
            Contact Me
          </motion.button>
        </motion.a>
      </div>
    </section>
  );
};

export default Heading;
